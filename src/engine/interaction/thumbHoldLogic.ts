import type { TrackedHand } from './gestureLogic';
import type { VisibilityDirection, VisibilityPreview } from './visibilityGestures';
import { MAX_SAMPLE_GAP_MS } from './handTrackingTiming';

export type ThumbFeedback = {
  phase: 'idle' | 'holding' | 'complete' | 'release' | 'blocked';
  progress: number;
  thumb?: 'up' | 'down';
  label: string;
};
export const THUMB_HOLD_MS = 500;
const NEUTRAL_HOLD_MS = 200;

export function createThumbHoldLogic() {
  let candidate = '';
  let since = 0;
  let samples = 0;
  let lastTime = -Infinity;
  let neutralSince: number | undefined;
  let latched: 'up' | 'down' | undefined;

  // Interrupting or losing tracking cancels a pending hold, but never rearms a
  // completed action. Only a visible neutral hand can do that.
  function cancel() { candidate = ''; samples = 0; neutralSince = undefined; lastTime = -Infinity; }
  function update(hands: readonly TrackedHand[], now: number, preview?: VisibilityPreview): ThumbFeedback & { fire?: VisibilityDirection } {
    if (now - lastTime > MAX_SAMPLE_GAP_MS || now <= lastTime) cancel();
    lastTime = now;
    if (latched) {
      // A visible relaxed hand or pinch also releases the thumb. Requiring
      // extended fingers trapped tilted/partly closed hands in the old latch.
      const neutral = hands.length > 0 && hands.every(hand => !hand.thumb &&
        hand.landmarks.length >= 21 && hand.landmarks.every(p => Number.isFinite(p.x) && Number.isFinite(p.y)) &&
        Math.hypot(hand.landmarks[0].x - hand.landmarks[9].x, hand.landmarks[0].y - hand.landmarks[9].y) >= 0.025);
      if (neutral) {
        neutralSince ??= now;
        if (now - neutralSince >= NEUTRAL_HOLD_MS) { latched = undefined; candidate = ''; }
      } else neutralSince = undefined;
      // The latch prevents repeated actions, not camera controls or their hints.
      if (latched) return hands.some(hand => hand.thumb)
        ? { phase: 'release', progress: 1, thumb: latched, label: 'Soltá el pulgar para continuar' }
        : { phase: 'idle', progress: 0, label: '' };
    }
    const hand = hands.length === 1 ? hands[0] : undefined;
    if (!hand?.thumb || !preview) { candidate = ''; samples = 0; return { phase: 'idle', progress: 0, label: '' }; }
    if (!preview.enabled) { candidate = ''; samples = 0; return { phase: 'blocked', progress: 0, thumb: hand.thumb, label: preview.label }; }
    const key = `${hand.id}:${hand.thumb}:${preview.key}`;
    if (key !== candidate) { candidate = key; since = now; samples = 0; }
    samples++;
    const progress = Math.min(1, (now - since) / THUMB_HOLD_MS);
    if (progress === 1 && samples >= 3) {
      latched = hand.thumb;
      candidate = '';
      return { phase: 'complete', progress: 1, thumb: hand.thumb, label: preview.label, fire: hand.thumb === 'down' ? 'hide' : 'show' };
    }
    return { phase: 'holding', progress: samples >= 3 ? progress : Math.min(progress, 0.95), thumb: hand.thumb, label: preview.label };
  }
  return { update, cancel };
}
