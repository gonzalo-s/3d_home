'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { HouseViewer } from '../../engine/core/createHouseViewer';
import type { HandStatus, HandUpdate } from '../../engine/interaction/startHandControls';
import type { HandObservation } from '../../engine/interaction/gestureLogic';
import { HandPoseHint } from './HandPoseHint';
import { ThumbActionHint } from './ThumbActionHint';
import type { ThumbFeedback } from '../../engine/interaction/thumbHoldLogic';

const labels: Record<HandStatus, string> = {
  loading: 'Preparando cámara y seguimiento…', searching: 'Cámara activa · mostrá las manos',
  idle: 'Pinza para girar · pulgar para ocultar o mostrar', orbit: 'Una mano · girar',
  'thumb-hold': 'Mantené el pulgar para confirmar',
  'pan-zoom': 'Dos manos · acercar y desplazar', error: 'Seguimiento no disponible', stopped: 'Cámara apagada',
};

export function HandControls({ viewer, viewport }: { viewer: HouseViewer | null; viewport: HTMLElement | null }) {
  const [enabled, setEnabled] = useState(false);
  const [update, setUpdate] = useState<HandUpdate>({ status: 'stopped' });
  const [hands, setHands] = useState<HandObservation[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [thumbHint, setThumbHint] = useState<ThumbFeedback | null>(null);

  useEffect(() => {
    if (!enabled || !viewer || !videoRef.current) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;
    let thumbSignature = '';
    const video = videoRef.current;
    viewer.setHandControlsActive(true);
    import('../../engine/interaction/startHandControls').then(({ startHandControls }) => {
      if (cancelled) return;
      dispose = startHandControls(video, viewer.applyGesture, next => {
        if (cancelled) return;
        setUpdate(next);
        if (next.status === 'error' || next.status === 'stopped') setEnabled(false);
      }, viewer, next => { if (!cancelled) setHands(next); }, next => {
        if (cancelled) return;
        // Progress follows inference samples directly, without React updates per frame.
        const percent = Math.round(next.progress * 100);
        progressRef.current?.setAttribute('aria-valuenow', String(percent));
        progressRef.current?.querySelector('[data-progress-arc]')?.setAttribute('stroke-dashoffset', String(100 - percent));
        const signature = `${next.phase}:${next.thumb}:${next.label}`;
        if (signature !== thumbSignature) { thumbSignature = signature; setThumbHint(next.phase === 'idle' ? null : next); }
      });
    }).catch(() => {
      if (!cancelled) { setUpdate({ status: 'error', message: 'No se pudo cargar el seguimiento. Volvé a intentar.' }); setEnabled(false); }
    });
    return () => { cancelled = true; dispose?.(); viewer.setHandControlsActive(false); };
  }, [enabled, viewer]);

  return (
    <section className="hand-controls" aria-label="Controles con las manos">
      <h2>Gestos con cámara</h2>
      <button type="button" disabled={!viewer} aria-pressed={enabled} onClick={() => {
        setUpdate({ status: enabled ? 'stopped' : 'loading' });
        setHands([]);
        setThumbHint(null);
        setEnabled(!enabled);
      }}>{enabled ? 'Desactivar controles con las manos' : 'Activar controles con las manos'}</button>
      <p className="hand-control-status" role="status">{update.message ?? labels[update.status]}</p>
      <details className="panel-info">
        <summary>Cómo usar los gestos</summary>
        <p>Con una mano, juntá pulgar e índice y movela para girar. Con ambas manos en pinza, separalas para acercar o movelas juntas para desplazar. Soltá para parar.</p>
        <p>Mantené una mano con el pulgar hacia abajo para ocultar primero techo y cielorraso, después planta alta. El pulgar hacia arriba restaura primero planta alta y después el techo. El anillo se llena en aproximadamente medio segundo y la leyenda indica qué va a cambiar. Abrí la mano entre acciones; mantener el pulgar no repite el cambio.</p>
        <p>Los iconos junto a la cámara muestran qué mano se detecta, si está abierta o en pinza, y la dirección del pulgar. La leyenda indica la acción del visor.</p>
        <p>Video procesado en tu dispositivo, sin audio ni envío de imágenes. Se descargan los archivos de seguimiento al activar. Al ocultar la página se apaga la cámara. Mouse y controles táctiles siguen disponibles.</p>
      </details>
      {enabled && viewport && createPortal(
        <div className="hand-tracking">
          <video ref={videoRef} muted playsInline autoPlay aria-hidden="true" />
          <HandPoseHint hands={hands} />
          <ThumbActionHint hint={thumbHint} progressRef={progressRef} />
          <span aria-hidden="true" hidden={!!thumbHint}>{update.message ?? labels[update.status]}</span>
        </div>, viewport)}
    </section>
  );
}
