import type { Point, TrackedHand } from './gestureLogic';
const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

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

