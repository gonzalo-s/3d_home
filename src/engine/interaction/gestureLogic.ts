import { openPalm } from './handPose';
import { MAX_SAMPLE_GAP_MS } from './handTrackingTiming';

export type Point = { x: number; y: number };
export type TrackedHand = { id: string; landmarks: readonly Point[]; thumb?: 'up' | 'down' };
export type GestureMotion = { orbitX: number; orbitY: number; panX: number; panY: number; zoom: number };
export type GestureMode = 'idle' | 'orbit' | 'pan-zoom';
export type HandObservation = { id: string; pose: 'pinch' | 'open' | 'relaxed' | 'thumb-up' | 'thumb-down' };
export type GestureResult = { mode: GestureMode; hands: HandObservation[]; motion?: GestureMotion };

const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
const center = (a: Point, b: Point): Point => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

/** Frame-independent gesture state. Coordinates are mirrored; x is aspect-corrected. */
export function createGestureLogic() {
  let pinches = new Set<string>();
  let signature = '';
  let anchor: Point | undefined;
  let separation = 0;
  let since = 0;
  let lastTime = -Infinity;

  function reset() {
    pinches.clear(); signature = ''; anchor = undefined; separation = 0; lastTime = -Infinity;
  }

  function update(hands: readonly TrackedHand[], now: number): GestureResult {
    if (now - lastTime > MAX_SAMPLE_GAP_MS || now <= lastTime) reset();
    lastTime = now;
    const active: { id: string; point: Point }[] = [];
    const nextPinches = new Set<string>();
    for (const hand of hands.slice(0, 2)) {
      if (hand.thumb) continue;
      const [wrist, thumb, index, middle, pinky] = [0, 4, 8, 9, 17].map(i => hand.landmarks[i]);
      if (!wrist || !thumb || !index || !middle || !pinky ||
          ![wrist, thumb, index, middle, pinky].every(p => Number.isFinite(p.x) && Number.isFinite(p.y))) continue;
      const palm = Math.max(distance(wrist, middle), distance(hand.landmarks[5] ?? wrist, pinky));
      if (palm < 0.025) continue;
      const ratio = distance(thumb, index) / palm;
      if (ratio < (pinches.has(hand.id) ? 0.48 : 0.32) && !nextPinches.has(hand.id)) {
        nextPinches.add(hand.id);
        active.push({ id: hand.id, point: center(thumb, index) });
      }
    }
    pinches = nextPinches;
    const observations: HandObservation[] = hands.slice(0, 2)
      .filter(hand => hand.landmarks.length >= 21 && hand.landmarks.every(p => Number.isFinite(p.x) && Number.isFinite(p.y)))
      .map(hand => ({ id: hand.id, pose: hand.thumb ? (hand.thumb === 'up' ? 'thumb-up' : 'thumb-down') : pinches.has(hand.id) ? 'pinch' : openPalm(hand) ? 'open' : 'relaxed' }));
    active.sort((a, b) => a.id.localeCompare(b.id));
    const mode: GestureMode = active.length === 2 ? 'pan-zoom' : active.length === 1 ? 'orbit' : 'idle';
    const nextSignature = `${hands.length}:${active.map(h => h.id).join(',')}`;
    const point = active.length === 2 ? center(active[0].point, active[1].point) : active[0]?.point;
    const span = active.length === 2 ? distance(active[0].point, active[1].point) : 0;
    if (!point || (active.length === 2 && span < 0.08)) {
      signature = ''; anchor = undefined;
      return { mode: 'idle', hands: observations };
    }
    if (signature !== nextSignature || !anchor) {
      signature = nextSignature; anchor = point; separation = span; since = now;
      return { mode, hands: observations };
    }
    // Re-anchor large jumps instead of turning tracking glitches into camera movement.
    if (distance(point, anchor) > 0.12 || Math.abs(span - separation) > 0.16) {
      anchor = point; separation = span; since = now;
      return { mode, hands: observations };
    }
    if (now - since < 120) { anchor = point; separation = span; return { mode, hands: observations }; }
    const dx = (point.x - anchor.x) * 0.4;
    const dy = (point.y - anchor.y) * 0.4;
    const nextSpan = separation + (span - separation) * 0.4;
    const zoom = mode === 'pan-zoom' ? Math.max(0.94, Math.min(1.06, separation / nextSpan)) : 1;
    anchor = { x: anchor.x + dx, y: anchor.y + dy };
    separation = nextSpan;
    return { mode, hands: observations, motion: {
      orbitX: mode === 'orbit' ? dx : 0, orbitY: mode === 'orbit' ? dy : 0,
      panX: mode === 'pan-zoom' ? dx : 0, panY: mode === 'pan-zoom' ? dy : 0, zoom,
    } };
  }
  return { update, reset };
}
