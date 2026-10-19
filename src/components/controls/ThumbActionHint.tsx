import type { RefObject } from 'react';
import type { ThumbFeedback } from '../../engine/interaction/thumbHoldLogic';
import { ThumbSymbol } from './HandPoseHint';

export function ThumbActionHint({ hint, progressRef }: {
  hint: ThumbFeedback | null;
  progressRef: RefObject<HTMLDivElement | null>;
}) {
  const complete = hint?.phase === 'complete' || hint?.phase === 'release';
  return <div ref={progressRef} className="thumb-action" hidden={!hint || hint.phase === 'idle'} data-phase={hint?.phase}
    role="progressbar" aria-label={hint?.label || 'Confirmar gesto'} aria-valuemin={0} aria-valuemax={100}
    aria-valuenow={complete ? 100 : 0}>
    <div className="thumb-action-ring" aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <circle className="thumb-action-track" cx="32" cy="32" r="27" />
        <circle data-progress-arc className="thumb-action-progress" cx="32" cy="32" r="27" pathLength="100"
          strokeDasharray="100" strokeDashoffset={complete ? 0 : 100} transform="rotate(-90 32 32)" />
      </svg>
      <span className="thumb-action-symbol"><ThumbSymbol direction={hint?.thumb ?? 'down'} /></span>
    </div>
    <div className="thumb-action-copy">
      <strong>{hint?.label}</strong>
      <small>{complete ? 'Abrí la mano para continuar' : hint?.phase === 'blocked' ? 'Sin cambios pendientes' : 'Mantené el pulgar…'}</small>
    </div>
  </div>;
}
