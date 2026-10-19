import assert from 'node:assert/strict';
import test from 'node:test';
import { registerHooks } from 'node:module';
const hooks = registerHooks({ resolve(specifier, context, next) {
  if (specifier === './handPose' || specifier === './handTrackingTiming') return next(`${specifier}.ts`, context);
  return next(specifier, context);
} });
const { createGestureLogic } = await import('../src/engine/interaction/gestureLogic.ts');
hooks.deregister();
import { createGestureCamera } from '../src/engine/interaction/gestureCamera.js';
import { createVisibilityGestures } from '../src/engine/interaction/visibilityGestures.ts';
import { gesturePixelRatio } from '../src/engine/interaction/gestureRenderBudget.ts';

function hand(id = 'Left', x = 0.4, y = 0.5, gap = 0.02) {
  const landmarks = Array.from({ length: 21 }, () => ({ x, y }));
  landmarks[0] = { x, y: y + 0.2 };
  landmarks[5] = { x: x - 0.08, y };
  landmarks[17] = { x: x + 0.08, y };
  landmarks[4] = { x: x - gap / 2, y };
  landmarks[8] = { x: x + gap / 2, y };
  return { id, landmarks };
}
function armed(logic, hands) {
  logic.update(hands, 0); logic.update(hands, 66); logic.update(hands, 132);
}

function openHand(id = 'Left', x = 0.8, y = 0.55) {
  const h = hand(id, x, y, 0.18);
  for (const tip of [8, 12, 16, 20]) {
    h.landmarks[tip - 2] = { x: x + (tip - 14) * 0.01, y: y - 0.03 };
    h.landmarks[tip] = { x: x + (tip - 14) * 0.01, y: y - 0.2 };
  }
  return h;
}
test('4K/HiDPI gesture rendering stays within budget and normal quality is restored when disabled', () => {
  for (const [width, height, dpr] of [[3840, 2160, 1], [3840, 2160, 2], [1920, 1080, 2], [390, 844, 3]]) {
    const ratio = gesturePixelRatio(width, height, dpr, true);
    assert(width * height * ratio ** 2 <= 3_000_001);
    assert(ratio <= Math.min(dpr, 2));
    assert.equal(gesturePixelRatio(width, height, dpr, false), Math.min(dpr, 2));
  }
  assert.equal(gesturePixelRatio(1920, 1080, 1, true), 1);
});

test('visibility actions preview and apply the current roof/floor sequence', () => {
  const state = { roofVisible: true, upperFloorVisible: true };
  const changes = [];
  const controls = createVisibilityGestures({
    getState: () => state,
    setRoofVisible: visible => { state.roofVisible = visible; changes.push(['roof', visible]); },
    setUpperFloorVisible: visible => { state.upperFloorVisible = visible; changes.push(['pa', visible]); },
  });
  assert.equal(controls.preview('hide').label, 'Ocultar techo y cielorraso');
  controls.apply('hide');
  assert.equal(controls.preview('hide').label, 'Ocultar planta alta');
  controls.apply('hide'); controls.apply('hide');
  assert.equal(controls.preview('hide').enabled, false);
  assert.deepEqual(state, { roofVisible: false, upperFloorVisible: false });
  assert.equal(controls.preview('show').label, 'Mostrar planta alta');
  controls.apply('show'); controls.apply('show'); controls.apply('show');
  assert.deepEqual(changes, [['roof', false], ['pa', false], ['pa', true], ['roof', true]]);
  // A manual control change becomes the next gesture's starting state.
  state.upperFloorVisible = false;
  controls.apply('show'); assert.deepEqual(changes.at(-1), ['pa', true]);
  controls.dispose(); controls.apply('hide'); assert.equal(state.roofVisible, true);
});

test('one-hand orbit requires a stable pinch, release and tracking loss stop immediately', () => {
  const logic = createGestureLogic();
  assert.equal(logic.update([hand('Left', 0.4, 0.5, 0.2)], 0).mode, 'idle');
  assert.equal(logic.update([hand()], 66).motion, undefined);
  assert.equal(logic.update([hand('Left', 0.45)], 132).motion, undefined);
  const result = logic.update([hand('Left', 0.47)], 198);
  assert.equal(result.mode, 'orbit');
  assert(result.motion.orbitX > 0);
  assert.equal(result.motion.panX, 0);
  assert.equal(result.motion.zoom, 1);
  assert.equal(logic.update([hand('Left', 0.47, 0.5, 0.2)], 264).motion, undefined);
  assert.equal(logic.update([], 330).motion, undefined);
  assert.equal(logic.update([hand('Left', 0.8)], 396).motion, undefined);
});

test('pinch thresholds use palm size and hysteresis', () => {
  const logic = createGestureLogic();
  assert.equal(logic.update([hand('Left', 0.4, 0.5, 0.075)], 0).mode, 'idle');
  assert.equal(logic.update([hand()], 66).mode, 'orbit');
  assert.equal(logic.update([hand('Left', 0.4, 0.5, 0.075)], 132).mode, 'orbit');
  assert.equal(logic.update([hand('Left', 0.4, 0.5, 0.11)], 198).mode, 'idle');
});

test('visual hand observations match the active pinch state, including hysteresis and release', () => {
  const logic = createGestureLogic();
  assert.deepEqual(logic.update([hand('Right')], 0).hands, [{ id: 'Right', pose: 'pinch' }]);
  assert.deepEqual(logic.update([hand('Right', 0.4, 0.5, 0.075)], 66).hands, [{ id: 'Right', pose: 'pinch' }]);
  assert.deepEqual(logic.update([hand('Right', 0.4, 0.5, 0.11)], 132).hands, [{ id: 'Right', pose: 'relaxed' }]);
  assert.deepEqual(logic.update([openHand('Left'), hand('Right')], 198).hands,
    [{ id: 'Left', pose: 'open' }, { id: 'Right', pose: 'pinch' }]);
  assert.deepEqual(logic.update([], 264).hands, []);
  assert.deepEqual(logic.update([{ id: 'Right', landmarks: [] }], 330).hands, []);
  const thumb = { ...hand('Right'), thumb: 'up' };
  const result = logic.update([thumb], 396);
  assert.deepEqual(result.hands, [{ id: 'Right', pose: 'thumb-up' }]);
  assert.equal(result.motion, undefined, 'recognized thumbs never act as a pinch');
});

test('two hands zoom with separation and pan with common motion; result order is immaterial', () => {
  const logic = createGestureLogic();
  armed(logic, [hand('Left', 0.3), hand('Right', 0.7)]);
  const zoom = logic.update([hand('Right', 0.72), hand('Left', 0.28)], 198).motion;
  assert(zoom.zoom < 1);
  assert(Math.abs(zoom.panX) < 1e-10);
  assert.equal(zoom.orbitX, 0);
  const pan = logic.update([hand('Left', 0.31, 0.52), hand('Right', 0.75, 0.52)], 264).motion;
  assert(pan.panX > 0 && pan.panY > 0);
});

test('hand identity/count transitions, stale frames and outliers re-anchor without movement', () => {
  const logic = createGestureLogic();
  armed(logic, [hand()]);
  assert.equal(logic.update([hand('Right', 0.5)], 198).motion, undefined);
  assert.equal(logic.update([hand('Right', 0.5), hand('Left', 0.8)], 264).motion, undefined);
  assert.equal(logic.update([hand('Right', 0.52)], 330).motion, undefined);
  assert.equal(logic.update([hand('Right', 0.52)], 1000).motion, undefined);
  logic.update([hand('Right', 0.52)], 1066);
  assert.equal(logic.update([hand('Right', 0.9)], 1132).motion, undefined);
  logic.reset();
  assert.equal(logic.update([hand('Right', 0.5)], 1198).motion, undefined);
});

test('empty, malformed, tiny and degenerate hands do not produce camera commands', () => {
  const logic = createGestureLogic();
  for (const hands of [[], [{ id: 'Left', landmarks: [] }], [hand('Left', NaN)], [hand(), hand('Right', 0.401)]]) {
    logic.reset(); armed(logic, hands);
    assert.equal(logic.update(hands, 198).motion, undefined);
  }
});

test('camera bridge uses public controls with immediate updates and restores damping, including failures', () => {
  const calls = [];
  const controls = { enabled: true, enableRotate: true, enablePan: true, enableZoom: true, enableDamping: true };
  for (const method of ['rotateLeft', 'rotateUp', 'pan', 'dollyIn']) controls[method] = (...args) => {
    assert.equal(controls.enableDamping, false); calls.push([method, ...args]);
  };
  const bridge = createGestureCamera(controls, { clientHeight: 600 });
  bridge.apply({ orbitX: 0.01, orbitY: 0.02, panX: 0.03, panY: 0.04, zoom: 0.98 });
  assert.equal(controls.enableDamping, true);
  assert.deepEqual(calls[2], ['pan', 18, 24]);
  assert.deepEqual(calls[3], ['dollyIn', 0.98]);
  bridge.dispose(); calls.length = 0;
  bridge.apply({ orbitX: 1 }); assert.equal(calls.length, 0);
  controls.rotateLeft = () => { throw new Error('test'); };
  assert.throws(() => createGestureCamera(controls, {}).apply({ orbitX: 1 }));
  assert.equal(controls.enableDamping, true);
});
