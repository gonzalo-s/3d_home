import type { HandObservation } from '../../engine/interaction/gestureLogic';

const poseLabels = { pinch: 'Pinza', open: 'Abierta', relaxed: 'En reposo', absent: 'Sin detectar', 'thumb-up': 'Pulgar arriba', 'thumb-down': 'Pulgar abajo' };
const outlines = {
  open: 'M17 47C12 42 11 37 8 33L3 26C1 23 4 20 7 23L13 29V9C13 4 19 4 19 9V24H21V5C21 0 27 0 27 5V24H29V9C29 4 35 4 35 9V26H37V18C37 13 43 13 43 18V33C43 40 39 44 37 47Z',
  pinch: 'M17 47C12 43 9 37 6 30C2 24 5 19 11 20L16 22C20 24 17 29 14 28L11 27L16 33L20 27L14 18C12 14 17 11 20 14L25 20V6C25 2 31 2 31 6V23H33V10C33 6 39 6 39 10V27H41V20C41 16 47 16 47 20V34C47 40 44 44 40 47Z',
  relaxed: 'M16 47C11 42 9 37 7 32L4 27C2 23 7 20 10 24L14 29V21C14 16 20 16 20 21V27H22V18C22 13 28 13 28 18V27H30V21C30 16 36 16 36 21V29H38V26C38 21 44 21 44 26V35C44 41 40 45 37 47Z',
  thumb: 'M15 44H6V23H15L23 13V6C23 1 30 1 30 7V17H42C47 17 49 21 47 26L42 40Q41 44 36 44Z',
};

export function ThumbSymbol({ direction }: { direction: 'up' | 'down' }) {
  return <svg viewBox="0 0 52 52" aria-hidden="true" focusable="false">
    <path d={outlines.thumb} transform={direction === 'down' ? 'rotate(180 26 26)' : undefined} />
  </svg>;
}

export function HandPoseHint({ hands }: { hands: readonly HandObservation[] }) {
  return (
    <div className="hand-pose-hints" role="group" aria-label="Manos detectadas">
      {(['Left', 'Right'] as const).map(id => {
        const pose = hands.find(hand => hand.id === id)?.pose ?? 'absent';
        const name = id === 'Left' ? 'Izquierda' : 'Derecha';
        return <div key={id} className="hand-pose-hint" data-hand={id} data-pose={pose}
          role="img" aria-label={`Mano ${name.toLowerCase()}: ${poseLabels[pose].toLowerCase()}`}>
          <svg viewBox="0 0 52 52" aria-hidden="true" focusable="false">
            <g transform={id === 'Left' ? 'translate(52 0) scale(-1 1)' : undefined}>
              <path d={outlines[pose === 'thumb-up' || pose === 'thumb-down' ? 'thumb' : pose === 'absent' ? 'relaxed' : pose]}
                transform={pose === 'thumb-down' ? 'rotate(180 26 26)' : undefined} />
              {pose === 'pinch' && <circle className="hand-pinch-point" cx="13" cy="25" r="4" />}
            </g>
          </svg>
          <strong>{name}</strong>
          <small>{poseLabels[pose]}</small>
        </div>;
      })}
    </div>
  );
}
