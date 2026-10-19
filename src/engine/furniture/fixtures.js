import { YA } from '../../legacy/three-runtime.js';

export function createFixtureBuilders(y, Y) {
  function DP(o, A, e, t, i, n, a = 0) {
    let f = new YA();
    f.position.set(A, 0, -e), f.rotation.y = a, o.add(f), Y(f, 0, 0.16, 0, t, 0.16, i, y.wood), Y(f, 0, 0.4, 0, t, 0.4, i, n), Y(f, 0, 0.72, -i / 2 + 0.11, t, 0.65, 0.22, n);
    for (let r of [-1, 1]) Y(f, r * (t / 2 - 0.1), 0.57, 0, 0.2, 0.45, i, n);
  }

  function BP(o, A, e, t, i, n = 0.85) {
    Y(o, A, n / 2, e, t, n, i, y.white), Y(o, A, n + 0.035, e, t + 0.035, 0.07, i + 0.04, y.grayFloor);
  }

  function jP(o, A, e, t = 0.7) {
    let i = new YA();
    i.userData.whiteRadiator = true, i.userData.location = { x: A, z: e }, o.add(i);
    let n = 8;
    for (let a = 0; a < n; a++) Y(i, A, 0.48, e - t / 2 + (a + 0.5) * t / n, 0.13, 0.66, t / n * 0.78, y.white);
    for (let a of [0.21, 0.76]) Y(i, A, a, e, 0.11, 0.045, t, y.white);
    Y(i, A, 0.73, e + t / 2 + 0.06, 0.07, 0.05, 0.13, y.white);
  }
  return { addSofa: DP, addCounter: BP, addRadiator: jP };
}
