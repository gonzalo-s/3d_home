import { Lt, Nn, YA, j, ne, yt } from '../../legacy/three-runtime.js';

export const stairSpec = { start: 5.26, end: 9.1475, width: 1, steps: 18, rise: 3.4 };

export function stairHeightAt(o) {
  let A = Math.floor((o - stairSpec.start) / (stairSpec.end - stairSpec.start) * stairSpec.steps);
  return Math.min(3.4, (A + 1) * 3.4 / stairSpec.steps - 0.15);
}

function addRailSegment(o, A, e, t, i, n) {
  let a = new j(A, e[0], -e[1]), f = new j(A, t[0], -t[1]), r = f.clone().sub(a), P = new ne(new yt(n, r.length(), n), i);
  P.position.copy(a.add(f).multiplyScalar(0.5)), P.quaternion.setFromUnitVectors(new j(0, 1, 0), r.normalize()), P.castShadow = true, o.add(P);
}

function addStairStorage(o, A, e, t, i, n, a, f) {
  let r = new Lt();
  r.moveTo(e, 0), r.lineTo(t, 0), r.lineTo(t, n), r.lineTo(e, i), r.closePath();
  let P = new Nn(r, { depth: a, bevelEnabled: false }), s = P.attributes.position;
  for (let K = 0; K < s.count; K++) {
    let U = s.getX(K), w = s.getY(K), l = s.getZ(K);
    s.setXYZ(K, A + l, w, -U);
  }
  P.computeVertexNormals();
  let p = new ne(P, f);
  return p.castShadow = true, p.userData.stairStorage = true, o.add(p), p;
}

export function createStairBuilder(materials, addBox) {
  function buildStairs(o) {
    let A = new YA();
    A.userData.stairSpec = stairSpec, o.add(A);
    let e = stairSpec.steps, t = (stairSpec.end - stairSpec.start) / e, i = stairSpec.rise / e;
    for (let F = 0; F < e; F++) {
      let u = stairSpec.start + (F + 0.5) * t, D = (F + 1) * i;
      addBox(A, 0.8, D - 0.035, u, 1, 0.07, t + 0.015, materials.wood), addBox(A, 0.8, D - i / 2, u - t / 2 + 0.02, 1, i, 0.035, materials.wood);
    }
    let n = 7.5725, a = (n - stairSpec.start) / (stairSpec.end - stairSpec.start) * 3.4 - 0.15;
    addStairStorage(A, 0.3, stairSpec.start, n, 0.025, a, 1, materials.dark), addRailSegment(A, 1.34, [0.1, stairSpec.start], [3.25, stairSpec.end], materials.dark, 0.16);
    for (let F = 5.75; F < 7.5; F += 0.6) {
      let u = (F - stairSpec.start) / (stairSpec.end - stairSpec.start) * 3.4 - 0.14;
      addBox(A, 1.305, u / 2, F, 0.015, u, 0.016, materials.metal);
    }
    for (let F = 0; F < 5; F++) {
      let u = stairSpec.start + 0.08 + F * (stairSpec.end - stairSpec.start - 0.16) / 4, D = (u - stairSpec.start) / (stairSpec.end - stairSpec.start) * 3.4;
      addBox(A, 1.35, D + 0.48, u, 0.045, 0.96, 0.045, materials.metal);
    }
    for (let F of [0.34, 0.61]) addRailSegment(A, 1.35, [F, stairSpec.start], [3.4 + F, stairSpec.end], materials.metal, 0.025);
    addRailSegment(A, 1.35, [0.96, stairSpec.start], [4.36, stairSpec.end], materials.wood, 0.07);
  }
  return buildStairs;
}
