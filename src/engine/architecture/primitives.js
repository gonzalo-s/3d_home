import { YA, ne, yt } from '../../legacy/three-runtime.js';

export function createArchitecturePrimitives(y, exteriorWalls) {
  function Y(o, A, e, t, i, n, a, f) {
    let r = f === y.facade, P = new ne(new yt(i, n, a), r ? f.clone() : f);
    return r && (P.userData.exteriorWall = P, exteriorWalls.push(P)), P.position.set(A, e, -t), P.castShadow = f !== y.glass && f !== y.cover, P.receiveShadow = true, o.add(P), P;
  }

  function Ie(o, A, e, t, i, n = [], hoverToken = null) {
    let a = e[0] - A[0], f = e[1] - A[1], r = Math.hypot(a, f), P = [0, r];
    n.forEach((s) => P.push(s[0], s[1])), P = [...new Set(P)].filter((s) => s >= 0 && s <= r).sort((s, p) => s - p);
    for (let s = 1; s < P.length; s++) {
      let p = P[s - 1], K = P[s], U = (p + K) / 2, w = n.find((R) => U > R[0] && U < R[1]), l = w ? [[0, w[2]], [w[3], i]] : [[0, i]];
      for (let [R, F] of l) {
        if (F <= R) continue;
        let u = Y(o, A[0] + a * U / r, (F + R) / 2, A[1] + f * U / r, K - p, F - R, t, y.wall);
        u.rotation.y = Math.atan2(f, a), u.userData.structuralWall = true;
        if (hoverToken && !u.userData.exteriorWall) u.material = u.material.clone(), u.userData.exteriorWall = hoverToken, exteriorWalls.push(u);
      }
      if (w && w[2] > 0 && !["niche", "open-void"].includes(w[6])) {
        let R = Y(o, A[0] + a * U / r, (w[2] + w[3]) / 2, A[1] + f * U / r, K - p, w[3] - w[2], 0.025, y.glass);
        R.rotation.y = Math.atan2(f, a);
      }
    }
  }

  function Tt(o, A, e, t, i, n = [], a = 1) {
    let f = new YA();
    o.add(f), o = f;
    let r = y.wall;
    y.wall = y.facade, Ie(o, A, e, t, i, n), y.wall = r;
    let P = e[0] - A[0], s = e[1] - A[1], p = Math.hypot(P, s);
    for (let K of n) {
      if (K[2] <= 0 && !K[4] || K[5] === "no-decoration") continue;
      let U = Math.max(0, K[0]), w = K[5] === "cad-middle-window" ? K[1] : Math.min(p, K[1]);
      if (w <= U) continue;
      let l = (U + w) / 2, R = w - U, F = K[2], u = K[3], D = new YA();
      D.userData.exteriorWindow = F > 0, D.userData.gardenDoor = K[4] || null, D.userData.opening = { width: R, bottom: F, top: u, cadReference: K[5] || null }, D.position.set(A[0] + P * l / p + a * s / p * (t / 2 + 0.035), 0, -A[1] - s * l / p + a * P / p * (t / 2 + 0.035)), D.rotation.y = Math.atan2(s, P), o.add(D), K[4] ? hw(D, R, u, K[4]) : NP(D, 0, 0, R, F, u);
      for (let v of [-R / 2 - 0.055, R / 2 + 0.055]) Y(D, v, (F + u) / 2, 0, 0.11, u - F + 0.2, 0.1, y.facade);
      Y(D, 0, F - 0.06, 0, R + 0.22, 0.12, 0.12, y.facade), Y(D, 0, u + 0.055, 0, R + 0.22, 0.11, 0.1, y.facade);
    }
    o.traverse((K) => {
      K.userData.exteriorWall && (K.userData.exteriorWall = o), K.isMesh && K.material !== y.glass && (K.userData.structuralWall = true);
    });
    return o;
  }

  function xP(o, A, e, t, i, n = []) {
    return Tt(o, A, e, t, i, n);
  }

  function NP(o, A, e, t, i, n) {
    for (let a = 0; a <= Math.ceil(t / 0.16); a++) {
      let f = Math.ceil(t / 0.16);
      Y(o, A - t / 2 + a * t / f, (i + n) / 2, e, 0.022, n - i, 0.028, y.metal);
    }
    for (let a of [i, i + 0.28, n - 0.28, n]) Y(o, A, a, e, t, 0.025, 0.028, y.metal);
  }

  function hw(o, A, e, t) {
    let i = t === "cocina-balcon", n = 0.055, a = t === "principal-jardin" ? y.metal : y.white;
    o.userData.doorFinish = t === "principal-jardin" ? "metal-gris" : "blanco", o.userData.hasGrille = i || t === "lavadero-jardin";
    for (let f of [-A / 2 + n / 2, A / 2 - n / 2]) Y(o, f, e / 2, 0, n, e, 0.065, a);
    if (Y(o, 0, e - n / 2, 0, A, n, 0.065, a), i) {
      Y(o, 0, e / 2, 0, n, e, 0.065, a);
      for (let f of [-A / 4, A / 4]) Y(o, f, e / 2, -0.01, A / 2 - n * 1.6, e - n * 2, 0.03, y.glass), Y(o, f, n / 2, 0, A / 2, n, 0.065, y.white);
      NP(o, 0, -0.09, A, 0.025, e - 0.025);
    } else Y(o, 0, (e - n) / 2, -5e-3, A - n * 2, e - n, 0.045, a), Y(o, A / 2 - 0.16, 0.98, -0.04, 0.035, 0.14, 0.03, y.metal), t === "lavadero-jardin" && NP(o, 0, -0.09, A, 0.025, e - 0.025);
  }
  return { addBox: Y, addWall: Ie, addFacadeWall: Tt, addFacadeWallOutward: xP };
}
