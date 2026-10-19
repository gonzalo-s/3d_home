import { createGestureLogic, type GestureMode, type GestureMotion, type HandObservation } from './gestureLogic';
import type { TrackingRequest, TrackingResponse } from './handTracking.worker';
import type { VisibilityGestureApi } from './visibilityGestures';
import { createThumbHoldLogic, type ThumbFeedback } from './thumbHoldLogic';
import { HAND_HINT_LOSS_GRACE_MS, HAND_HINT_TIMEOUT_MS, MAX_RESULT_AGE_MS } from './handTrackingTiming';

export type HandStatus = 'loading' | 'searching' | GestureMode | 'thumb-hold' | 'error' | 'stopped';
export type HandUpdate = { status: HandStatus; message?: string };

export function startHandControls(
  video: HTMLVideoElement,
  apply: (motion: GestureMotion) => void,
  report: (update: HandUpdate) => void,
  visibility?: VisibilityGestureApi,
  reportHands?: (hands: HandObservation[]) => void,
  reportThumb?: (feedback: ThumbFeedback) => void,
) {
  const logic = createGestureLogic();
  const thumbHold = createThumbHoldLogic();
  let disposed = false;
  let stream: MediaStream | undefined;
  let worker: Worker | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let watchdog: ReturnType<typeof setTimeout> | undefined;
  let busy = false;
  let ready = false;
  let lastFrame = -1;
  let blockedUntil = 0;
  let pointerDown = false;
  let previousStatus: HandStatus | undefined;
  let completedLabel = '';
  let thumbAnnouncement = '';
  let handSignature = '';
  let lastResultAt = -Infinity;
  const hintHands = new Map<string, { hand: HandObservation; missingSince?: number }>();

  function clearThumb() {
    thumbHold.cancel(); thumbAnnouncement = '';
    reportThumb?.({ phase: 'idle', progress: 0, label: '' });
  }

  function expireHints(now: number) {
    for (const [id, hint] of hintHands) {
      if (hint.missingSince !== undefined && now - hint.missingSince >= HAND_HINT_LOSS_GRACE_MS) hintHands.delete(id);
    }
    showHands([...hintHands.values()].map(hint => hint.hand));
  }

  function updateHints(hands: HandObservation[], now: number) {
    const seen = new Set(hands.map(hand => hand.id));
    for (const hand of hands) hintHands.set(hand.id, { hand });
    for (const [id, hint] of hintHands) {
      if (!seen.has(id)) hint.missingSince ??= now;
    }
    expireHints(now);
  }

  function showHands(hands: HandObservation[]) {
    if (disposed) return;
    const ordered = [...hands].sort((a, b) => a.id.localeCompare(b.id));
    const signature = ordered.map(hand => `${hand.id}:${hand.pose}`).join(',');
    if (signature === handSignature) return;
    handSignature = signature;
    reportHands?.(ordered);
  }

  function status(next: HandStatus, message?: string) {
    if (disposed || (next === previousStatus && !message)) return;
    previousStatus = next;
    report({ status: next, message });
  }
  function dispose() {
    if (disposed) return;
    showHands([]);
    clearThumb();
    disposed = true;
    clearTimeout(timer); clearTimeout(watchdog);
    logic.reset();
    worker?.terminate();
    stream?.getTracks().forEach(track => track.stop());
    video.pause(); video.srcObject = null;
    document.removeEventListener('pointerdown', onPointerDown, true);
    window.removeEventListener('pointerup', onPointerUp, true);
    window.removeEventListener('pointercancel', onPointerUp, true);
    document.removeEventListener('wheel', interrupt, true);
    document.removeEventListener('keydown', interrupt, true);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', stop);
  }
  function fail(message: string) { status('error', message); dispose(); }
  function stop() { status('stopped', 'Cámara apagada. Activá los controles para continuar.'); dispose(); }
  function onVisibility() { if (document.hidden) stop(); }
  function interrupt() { logic.reset(); clearThumb(); blockedUntil = performance.now() + 700; }
  function onPointerDown() { pointerDown = true; interrupt(); }
  function onPointerUp() { pointerDown = false; interrupt(); }
  function armWatchdog(milliseconds: number) {
    clearTimeout(watchdog);
    watchdog = setTimeout(() => fail('El seguimiento no responde. Volvé a activar los controles.'), milliseconds);
  }
  function send(message: TrackingRequest, transfer: Transferable[] = []) { worker?.postMessage(message, transfer); }
  async function frame() {
    if (disposed) return;
    timer = setTimeout(frame, 66); // At most 15 fps, one frame in flight; no render-loop work.
    const now = performance.now();
    if (now - lastResultAt > HAND_HINT_TIMEOUT_MS) {
      hintHands.clear();
      showHands([]);
      clearThumb();
      if (ready) status('searching');
    } else expireHints(now);
    if (!ready || busy || video.readyState < 2 || video.currentTime === lastFrame) return;
    lastFrame = video.currentTime;
    busy = true;
    try {
      const timestamp = performance.now();
      // Bound capture/transfer work independently of webcam and display resolution.
      const width = Math.min(video.videoWidth || 640, 480);
      const height = Math.round(width * ((video.videoHeight || 480) / (video.videoWidth || 640)));
      const bitmap = await createImageBitmap(video, { resizeWidth: width, resizeHeight: height, resizeQuality: 'low' });
      if (disposed) { bitmap.close(); return; }
      armWatchdog(5000);
      send({ type: 'frame', bitmap, timestamp }, [bitmap]);
    } catch { if (!disposed) fail('No se pudo leer la cámara. Podés seguir con mouse o pantalla táctil.'); }
  }
  async function start() {
    status('loading');
    if (document.hidden) { stop(); return; }
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia || !window.Worker || !window.createImageBitmap) {
      fail('Los gestos necesitan HTTPS (o localhost), cámara y un navegador compatible. Usá mouse o pantalla táctil.');
      return;
    }
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', stop);
    document.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('pointerup', onPointerUp, true);
    window.addEventListener('pointercancel', onPointerUp, true);
    document.addEventListener('wheel', interrupt, { capture: true, passive: true });
    document.addEventListener('keydown', interrupt, true);
    try {
      const acquired = await navigator.mediaDevices.getUserMedia({
        audio: false, video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15, max: 20 } },
      });
      if (disposed) { acquired.getTracks().forEach(track => track.stop()); return; }
      stream = acquired;
      stream.getVideoTracks().forEach(track => track.addEventListener('ended', stop, { once: true }));
      video.srcObject = stream;
      await video.play();
      if (disposed) return;
      worker = new Worker(new URL('./handTracking.worker.ts', import.meta.url));
      worker.onerror = () => fail('No se pudo iniciar el seguimiento. Usá mouse o pantalla táctil y volvé a intentar.');
      worker.onmessage = ({ data }: MessageEvent<TrackingResponse>) => {
        if (disposed) return;
        clearTimeout(watchdog);
        if (data.type === 'error') { fail('No se pudo cargar el seguimiento. Revisá la conexión y volvé a intentar.'); return; }
        if (data.type === 'ready') { ready = true; status('searching'); void frame(); return; }
        busy = false;
        const now = performance.now();
        if (now - data.timestamp > MAX_RESULT_AGE_MS) { logic.reset(); clearThumb(); hintHands.clear(); showHands([]); status('searching'); return; }
        // Freshness of the indicator is measured from receipt, not capture.
        lastResultAt = now;
        if (pointerDown || now < blockedUntil ||
            document.querySelector('dialog[open], #controls[data-open="true"]')) {
          logic.reset();
          clearThumb();
          updateHints(logic.update(data.hands, data.timestamp).hands, now);
          logic.reset(); status('idle'); return;
        }
        const result = logic.update(data.hands, data.timestamp);
        updateHints(result.hands, now);
        const thumb = data.hands.length === 1 ? data.hands[0].thumb : undefined;
        const preview = thumb && visibility?.previewVisibilityGesture(thumb === 'down' ? 'hide' : 'show');
        const feedback = thumbHold.update(data.hands, data.timestamp, preview || undefined);
        if (feedback.fire) completedLabel = visibility?.applyVisibilityGesture(feedback.fire) ?? feedback.label;
        if (feedback.phase === 'complete' || feedback.phase === 'release') feedback.label = completedLabel || feedback.label;
        reportThumb?.(feedback);
        if (feedback.phase !== 'idle') {
          const announcement = `${feedback.phase}:${feedback.label}`;
          if (announcement !== thumbAnnouncement) { thumbAnnouncement = announcement; status('thumb-hold', feedback.label); }
        } else { thumbAnnouncement = ''; status(data.hands.length ? result.mode : 'searching'); }
        if (data.hands.some(hand => hand.thumb)) logic.reset();
        else if (result.motion) apply(result.motion);
      };
      armWatchdog(30000);
      send({ type: 'init' });
    } catch (error) {
      if (disposed) return;
      const name = error instanceof DOMException ? error.name : '';
      fail(name === 'NotAllowedError' ? 'Permiso de cámara denegado. Habilitalo en el navegador o usá mouse/pantalla táctil.' :
        name === 'NotFoundError' ? 'No se encontró una cámara. Podés seguir con mouse o pantalla táctil.' :
          'No se pudo abrir la cámara. Revisá si otra aplicación la está usando.');
    }
  }
  void start();
  return dispose;
}
