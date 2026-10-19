import assert from 'node:assert/strict';
import test from 'node:test';
import { registerHooks } from 'node:module';
const hooks = registerHooks({ resolve(specifier, context, next) {
  if (['./handPose', './handTrackingTiming'].includes(specifier)) return next(`${specifier}.ts`, context);
  return next(specifier, context);
} });
const { createThumbHoldLogic } = await import('../src/engine/interaction/thumbHoldLogic.ts');
hooks.deregister();
const preview = { key: 'hide-roof', label: 'Ocultar techo y cielorraso', enabled: true };
function hand(thumb, id = 'Right') {
  const p = Array.from({ length: 21 }, () => ({ x: 0.5, y: 0.5 }));
  p[0] = { x: 0.5, y: 0.7 }; p[5] = { x: 0.42, y: 0.5 }; p[17] = { x: 0.58, y: 0.5 };
  p[4] = { x: 0.35, y: 0.5 };
  if (!thumb) for (const tip of [8, 12, 16, 20]) {
    p[tip] = { x: 0.5, y: 0.3 }; p[tip - 2] = { x: 0.5, y: 0.47 };
  }
  return { id, thumb, landmarks: p };
}

test('a half-second confirmed thumb hold reports progress then fires once', () => {
  const logic = createThumbHoldLogic();
  assert.equal(logic.update([hand('down')], 0, preview).progress, 0);
  assert.equal(logic.update([hand('down')], 250, preview).progress, 0.5);
  assert.equal(logic.update([hand('down')], 500, preview).fire, 'hide');
  for (let t = 600; t < 3000; t += 100) assert.equal(logic.update([hand('down')], t, preview).phase, 'release');
});

test('only an open neutral hand rearms; occlusion, cancel and changing thumb direction cannot repeat', () => {
  const logic = createThumbHoldLogic();
  for (const t of [0, 250, 500]) logic.update([hand('down')], t, preview);
  logic.cancel();
  assert.equal(logic.update([], 1000).phase, 'idle');
  assert.equal(logic.update([hand('up')], 1300, preview).fire, undefined);
  assert.equal(logic.update([hand('up')], 1600, preview).fire, undefined);
  logic.update([hand()], 1800);
  assert.equal(logic.update([hand()], 2000).phase, 'idle');
  const show = { key: 'show-pa', label: 'Mostrar planta alta', enabled: true };
  logic.update([hand('up')], 2100, show); logic.update([hand('up')], 2350, show);
  assert.equal(logic.update([hand('up')], 2600, show).fire, 'show');
});

test('loss, identity changes, reversed thumb and changed target cancel partial progress', () => {
  for (const cause of ['loss', 'identity', 'direction', 'target', 'pause']) {
    const logic = createThumbHoldLogic();
    logic.update([hand('down')], 0, preview); logic.update([hand('down')], 250, preview);
    if (cause === 'loss') logic.update([], 300);
    if (cause === 'pause') logic.cancel();
    const target = cause === 'target' ? { ...preview, key: 'hide-pa', label: 'Ocultar planta alta' } : preview;
    const next = hand(cause === 'direction' ? 'up' : 'down', cause === 'identity' ? 'Left' : 'Right');
    const result = logic.update([next], 500, target);
    assert.equal(result.fire, undefined, cause);
    assert.equal(result.progress, 0, cause);
  }
});

test('ambiguous hands, unavailable actions, stale samples and single detections cannot fire', () => {
  const logic = createThumbHoldLogic();
  for (const t of [0, 250, 500]) assert.equal(logic.update([hand('up'), hand('down', 'Left')], t, preview).phase, 'idle');
  assert.equal(logic.update([hand('down')], 600, { ...preview, enabled: false }).phase, 'blocked');
  logic.update([hand('down')], 800, preview);
  assert.equal(logic.update([hand('down')], 1500, preview).progress, 0);
  assert.equal(logic.update([hand('down')], 2000, preview).fire, undefined, 'at least three confirmations are required');
});

test('a classifier thumb only counts when folded fingers and thumb direction agree', async () => {
  const { confirmThumb, recognizedThumb } = await import('../src/engine/interaction/handPose.ts');
  const fist = (thumbY) => { const h = hand('up'); for (const tip of [8, 12, 16, 20]) { h.landmarks[tip] = { x: 0.5, y: 0.55 }; h.landmarks[tip - 2] = { x: 0.5, y: 0.4 }; } h.landmarks[4] = { x: 0.5, y: thumbY }; h.landmarks[9] = { x: 0.5, y: 0.5 }; return h.landmarks; };
  assert.equal(confirmThumb('up', fist(0.3)), 'up');
  assert.equal(confirmThumb('down', fist(1.1)), 'down');
  assert.equal(confirmThumb('up', fist(1.1)), undefined);
  assert.equal(confirmThumb('up', hand().landmarks), undefined, 'open hand is never a thumb');
  assert.equal(recognizedThumb([{ categoryName: 'Open_Palm', score: 0.9 }, { categoryName: 'Thumb_Up', score: 0.3 }]), undefined);
});
