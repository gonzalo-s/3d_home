import assert from 'node:assert/strict';
import test from 'node:test';
import { registerHooks } from 'node:module';

// Node's TS loader requires extensions; the application uses bundler resolution.
const hooks = registerHooks({ resolve(specifier, context, next) {
  if (['./gestureLogic', './handPose', './thumbHoldLogic', './handTrackingTiming'].includes(specifier)) return next(`${specifier}.ts`, context);
  return next(specifier, context);
} });
const { startHandControls } = await import('../src/engine/interaction/startHandControls.ts');
hooks.deregister();

function environment(t, getUserMedia) {
  const window = new EventTarget();
  window.isSecureContext = true; window.Worker = true; window.createImageBitmap = true;
  const document = new EventTarget(); document.hidden = false; document.querySelector = () => null;
  const workers = [];
  class Worker {
    constructor() { workers.push(this); }
    postMessage(message) { this.lastMessage = message; }
    terminate() { this.terminated = true; }
  }
  for (const [name, value] of Object.entries({ window, document, navigator: { mediaDevices: { getUserMedia } }, Worker })) {
    const original = Object.getOwnPropertyDescriptor(globalThis, name);
    Object.defineProperty(globalThis, name, { configurable: true, value });
    t.after(() => { if (original) Object.defineProperty(globalThis, name, original); else delete globalThis[name]; });
  }
  const track = new EventTarget(); track.readyState = 'live'; track.stop = () => { track.readyState = 'ended'; };
  const stream = { getTracks: () => [track], getVideoTracks: () => [track] };
  const video = { srcObject: null, play: async () => {}, pause() { this.paused = true; }, readyState: 0 };
  const updates = [];
  return { window, document, workers, track, stream, video, updates };
}
const settle = () => new Promise(resolve => setImmediate(resolve));

test('300 ms inference latency keeps a stable pinch and permits camera movement', async t => {
  const e = environment(t, async () => e.stream);
  let now = 2000;
  t.mock.method(performance, 'now', () => now);
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const hints = [], motions = [];
  const dispose = startHandControls(e.video, motion => motions.push(motion), () => {}, undefined, hands => hints.push(hands));
  t.after(dispose); await settle();
  e.workers[0].onmessage({ data: { type: 'ready' } });
  for (let i = 0; i < 4; i++) {
    const x = 0.4 + i * 0.01;
    const landmarks = Array.from({ length: 21 }, () => ({ x, y: 0.5 }));
    landmarks[0] = { x, y: 0.7 }; landmarks[4] = { x: x - 0.01, y: 0.5 }; landmarks[8] = { x: x + 0.01, y: 0.5 };
    now += 350;
    e.workers[0].onmessage({ data: { type: 'result', hands: [{ id: 'Right', landmarks }], timestamp: now - 300 } });
    now += 40; t.mock.timers.tick(66);
    assert.deepEqual(hints.at(-1), [{ id: 'Right', pose: 'pinch' }]);
  }
  assert.deepEqual(hints, [[{ id: 'Right', pose: 'pinch' }]]);
  assert(motions.some(motion => motion.orbitX > 0));
  dispose();
});

test('disable during pending permission stops late camera without starting a worker', async t => {
  let resolve;
  const e = environment(t, () => new Promise(r => { resolve = r; }));
  const dispose = startHandControls(e.video, () => {}, u => e.updates.push(u));
  dispose(); resolve(e.stream); await settle();
  assert.equal(e.track.readyState, 'ended');
  assert.equal(e.workers.length, 0);
  assert.equal(e.video.srcObject, null);
});

test('active cleanup stops camera, terminates worker, detaches video and removes listeners', async t => {
  const e = environment(t, async () => e.stream);
  const dispose = startHandControls(e.video, () => {}, u => e.updates.push(u));
  t.after(dispose); await settle();
  assert.equal(e.workers.length, 1);
  assert.deepEqual(e.workers[0].lastMessage, { type: 'init' });
  dispose(); dispose();
  assert.equal(e.track.readyState, 'ended'); assert.equal(e.workers[0].terminated, true);
  assert.equal(e.video.srcObject, null); assert.equal(e.video.paused, true);
  e.document.hidden = true; e.document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(e.updates.at(-1).status, 'loading');
});

test('backgrounding releases camera and reports a usable state', async t => {
  const e = environment(t, async () => e.stream);
  const dispose = startHandControls(e.video, () => {}, u => e.updates.push(u));
  t.after(dispose); await settle();
  e.document.hidden = true; e.document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(e.updates.at(-1).status, 'stopped');
  assert.equal(e.track.readyState, 'ended'); assert.equal(e.workers[0].terminated, true);
});

test('permission denial and unsupported contexts provide a fallback', async t => {
  const e = environment(t, async () => { throw new DOMException('denied', 'NotAllowedError'); });
  const dispose = startHandControls(e.video, () => {}, u => e.updates.push(u));
  t.after(dispose); await settle();
  assert.equal(e.updates.at(-1).status, 'error'); assert.match(e.updates.at(-1).message, /denegado/);
  assert.equal(e.workers.length, 0);
  e.window.isSecureContext = false;
  startHandControls(e.video, () => {}, u => e.updates.push(u));
  assert.match(e.updates.at(-1).message, /HTTPS/);
});

test('delayed module initialization in a hidden page never requests the camera', t => {
  let requests = 0;
  const e = environment(t, async () => { requests++; return e.stream; });
  e.document.hidden = true;
  startHandControls(e.video, () => {}, u => e.updates.push(u));
  assert.equal(requests, 0); assert.equal(e.updates.at(-1).status, 'stopped');
});

test('worker load errors stop an acquired stream', async t => {
  const e = environment(t, async () => e.stream);
  const dispose = startHandControls(e.video, () => {}, u => e.updates.push(u));
  t.after(dispose); await settle();
  e.workers[0].onerror();
  assert.equal(e.updates.at(-1).status, 'error');
  assert.equal(e.track.readyState, 'ended'); assert.equal(e.workers[0].terminated, true);
});

test('hand hints update on pose changes, clear on loss/stale results and stop after disposal', async t => {
  const e = environment(t, async () => e.stream);
  let now = 1000;
  t.mock.method(performance, 'now', () => now);
  const hints = [];
  const dispose = startHandControls(e.video, () => {}, () => {}, undefined, hands => hints.push(hands));
  t.after(dispose); await settle();
  const points = Array.from({ length: 21 }, () => ({ x: 0.4, y: 0.5 }));
  points[0] = { x: 0.4, y: 0.7 }; points[4] = { x: 0.39, y: 0.5 }; points[8] = { x: 0.41, y: 0.5 };
  const right = { id: 'Right', landmarks: points };
  const send = (hands, delay = 0) => {
    now += 66;
    e.workers[0].onmessage({ data: { type: 'result', hands, timestamp: now - delay } });
  };
  send([right]); send([right]); send([right]);
  assert.deepEqual(hints, [[{ id: 'Right', pose: 'pinch' }]], 'no update per frame for the same pose');
  send([{ ...right, id: 'Left' }]);
  assert.deepEqual(hints.at(-1), [{ id: 'Left', pose: 'pinch' }, { id: 'Right', pose: 'pinch' }], 'a brief dropout is held independently per hand');
  send([right]); now += 450; send([right]);
  assert.deepEqual(hints.at(-1), [{ id: 'Right', pose: 'pinch' }]);
  send([]); assert.deepEqual(hints.at(-1), [{ id: 'Right', pose: 'pinch' }], 'brief dropout holds the visual only');
  now += 450; send([]); assert.deepEqual(hints.at(-1), []);
  send([right]); send([right], 900); assert.deepEqual(hints.at(-1), []);
  send([right]); dispose(); assert.deepEqual(hints.at(-1), []);
  const count = hints.length;
  send([right]); assert.equal(hints.length, count);
});

test('controller previews and commits a thumb action once, suppressing camera movement', async t => {
  const e = environment(t, async () => e.stream);
  let now = 2000;
  t.mock.method(performance, 'now', () => now);
  const actions = [], feedback = [], motions = [];
  let hidden = false;
  const visibility = {
    previewVisibilityGesture: () => ({ key: hidden ? 'hide-pa' : 'hide-roof', label: hidden ? 'Ocultar planta alta' : 'Ocultar techo y cielorraso', enabled: true }),
    applyVisibilityGesture: direction => { actions.push(direction); hidden = true; return 'Techo y cielorraso ocultos'; },
  };
  const dispose = startHandControls(e.video, m => motions.push(m), () => {}, visibility, undefined, f => feedback.push({ ...f }));
  t.after(dispose); await settle();
  try {
    const landmarks = Array.from({ length: 21 }, () => ({ x: 0.4, y: 0.5 }));
    landmarks[0] = { x: 0.4, y: 0.7 };
    for (let i = 0; i < 8; i++) {
      now += 250;
      e.workers[0].onmessage({ data: { type: 'result', hands: [{ id: 'Right', thumb: 'down', landmarks }], timestamp: now } });
    }
    assert.deepEqual(actions, ['hide']); assert.deepEqual(motions, []);
    assert.equal(feedback[0].label, 'Ocultar techo y cielorraso');
    assert.equal(feedback[1].progress, 0.5);
    assert.equal(feedback[2].phase, 'complete');
    assert.equal(feedback.at(-1).label, 'Techo y cielorraso ocultos');
  } finally { dispose(); }
});
