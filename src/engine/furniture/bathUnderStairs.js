import { createBathroomBuilder } from './bathroom.js';
import { YA, di, go, xe } from '../../legacy/three-runtime.js';

export function createBathUnderStairsBuilder(y, Y, ae) {
  const bathroom = createBathroomBuilder(Y);
  function buildBathUnderStairs(o) {
    let e = ae.steps, t = (ae.end - ae.start) / e, i = ae.rise / e;
    let f = new YA();
    f.userData.room = "bath-pb", f.userData.flatCeiling = 2.3, o.add(f);
    let r = document.createElement("canvas");
    r.width = r.height = 128;
    let P = r.getContext("2d");
    P.fillStyle = "#42413d", P.fillRect(0, 0, 128, 128), P.fillStyle = "#e6e3db";
    for (let [F, u] of [[0, 0], [128, 0], [0, 128], [128, 128]]) P.beginPath(), P.arc(F, u, 65, 0, Math.PI * 2), P.fill();
    P.fillStyle = "#42413d", P.beginPath(), P.arc(64, 64, 44, 0, Math.PI * 2), P.fill();
    let s = new go(r);
    s.wrapS = s.wrapT = di, s.repeat.set(5, 4);
    let p = new xe({ map: s, roughness: 0.8 });
    Y(f, 1.375, 0.035, 8.36, 2.15, 0.035, 1.45, p), Y(f, 1.375, 0.1, 9.075, 2.15, 0.18, 0.02, p), Y(f, 0.31, 0.1, 8.36, 0.02, 0.18, 1.45, p);
    bathroom.addToilet(f, { x: 0.8, z: 7.935, rotationY: Math.PI / 2 }).userData.furniture = "toilet-bath-pb";
    let U = new YA();
    U.userData.furniture = "vanity-bath-pb", f.add(U), Y(U, 2.225, 0.8, 8.905, 0.45, 0.09, 0.36, y.grayFloor);
    for (let F of [2.025, 2.425]) Y(U, F, 0.39, 8.92, 0.035, 0.78, 0.03, y.dark);
    bathroom.addBasin(f, { x: 2.225, z: 8.905, topY: 0.845, rx: 0.12, rz: 0.15, rotationY: -Math.PI / 2 });
    bathroom.addMirror(f, { x: 2.225, centerY: 1.57, z: 9.05, width: 0.4, height: 0.82, rotationY: -Math.PI / 2 });
    let w = new YA();
    w.userData.furniture = "bath-radiator-two-elements", w.userData.whiteRadiator = true, w.userData.location = { x: 0.365, z: 8.8425 }, f.add(w);
    for (let F = 0; F < 2; F++) Y(w, 0.365, 0.48, 8.8 + F * 0.085, 0.13, 0.66, 0.06, y.white);
    for (let F of [0.21, 0.76]) Y(w, 0.365, F, 8.8425, 0.11, 0.045, 0.17, y.white);
    Y(f, 0.12, 1.32, 8.3, 0.06, 0.46, 0.8, y.grayFloor);
    for (let F of [7.9, 8.7]) Y(f, 0.225, 1.32, F, 0.15, 0.46, 0.02, y.white);
    for (let F of [1.09, 1.55]) Y(f, 0.225, F, 8.3, 0.15, 0.02, 0.8, y.white);
    let l = new YA();
    l.userData.bathCeiling = true, o.add(l);
    let R = Y(l, 1.375, 2.34, 8.36, 2.15, 0.08, 1.45, y.wall);
    R.userData.structuralWall = true;
    for (let F = 0; F < e; F++) {
      let u = ae.start + (F + 0.5) * t;
      if (u < 7.5725) continue;
      let D = Math.min(2.3, (F + 1) * i - 0.15);
      if (D >= 2.3) continue;
      let v = Y(l, 0.8, (D + 2.3) / 2, u, 1, 2.3 - D, t, y.wall);
      v.userData.structuralWall = true;
    }
  }
  return buildBathUnderStairs;
}
