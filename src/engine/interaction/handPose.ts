import type { Point, TrackedHand } from './gestureLogic';
const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

// Compare every pose before selecting thumbs. Filtering to thumbs first can
// promote a runner-up classification over the actual open hand or pinch.
export function recognizedThumb(categories: readonly { categoryName: string; score: number }[]): TrackedHand['thumb'] {
  const best = categories.reduce<(typeof categories)[number] | undefined>(
    (winner, category) => !winner || category.score > winner.score ? category : winner, undefined,
  );
  if (!best || best.score < 0.65) return;
  return best.categoryName === 'Thumb_Up' ? 'up' : best.categoryName === 'Thumb_Down' ? 'down' : undefined;
}

// The classifier only proposes a thumb. It counts when the landmarks agree: the
// four fingers are folded and the thumb tip points clearly up or down, so open
// hands, pinches and relaxed hands can never be reported as thumbs.
export function confirmThumb(proposed: TrackedHand['thumb'], p: readonly Point[]): TrackedHand['thumb'] {
  if (!proposed || p.length < 21 || !p.every(v => Number.isFinite(v.x) && Number.isFinite(v.y))) return;
  const palmSize = Math.max(distance(p[0], p[9]), distance(p[5], p[17]));
  if (palmSize < 0.025) return;
  const folded = [8, 12, 16, 20].filter(tip => distance(p[0], p[tip]) < distance(p[0], p[tip - 2]) * 1.1);
  if (folded.length < 3) return;
  const rise = (p[5].y - p[4].y) / palmSize;
  return proposed === 'up' ? (rise > 0.5 ? 'up' : undefined) : (rise < -0.5 ? 'down' : undefined);
}

export function openPalm(hand: TrackedHand): Point | undefined {
  const p = hand.landmarks;
  if (p.length < 21 || !p.every(v => Number.isFinite(v.x) && Number.isFinite(v.y))) return;
  const palmSize = Math.max(distance(p[0], p[9]), distance(p[5], p[17]));
  if (palmSize < 0.025 || distance(p[4], p[8]) / palmSize < 0.55) return;
  // One finger may be foreshortened/occluded as an open hand moves sideways.
  const extended = [8, 12, 16, 20].filter(tip => distance(p[0], p[tip]) > distance(p[0], p[tip - 2]) * 1.1);
  if (extended.length < 3) return;
  return { x: (p[0].x + p[5].x + p[17].x) / 3, y: (p[0].y + p[5].y + p[17].y) / 3 };
}

