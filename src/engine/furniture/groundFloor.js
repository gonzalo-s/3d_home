import { Cn, YA, mi, ne } from '../../legacy/three-runtime.js';

export function createGroundFloorFurnitureBuilder(y, Y, { addCounter: BP, addSofa: DP, addRadiator: jP }) {
  function addGroundFloorFurniture(o) {
    let i = new YA();
    i.userData.photoBased = "planta-baja", o.add(i), BP(i, 0.64, 10.67, 0.68, 1.98), BP(i, 1.40625, 9.535, 2.2125, 0.65);
    for (let U of [10.1, 10.7, 11.3]) Y(i, 0.535, 1.86, U, 0.47, 0.72, 0.57, y.white), Y(i, 0.79, 1.28, U, 0.02, 0.4, 0.57, y.tile), Y(i, 0.9, 0.44, U, 0.012, 0.76, 0.01, y.metal);
    let n = new YA();
    n.userData.furniture = "sink-return", i.add(n), Y(n, 1.12, 0.925, 9.535, 0.56, 0.022, 0.44, y.metal), Y(n, 1.12, 0.943, 9.535, 0.44, 0.015, 0.32, y.dark), Y(n, 1.12, 1.08, 9.28, 0.035, 0.28, 0.035, y.metal), Y(n, 1.12, 1.21, 9.35, 0.035, 0.035, 0.18, y.metal);
    let a = new YA();
    a.userData.furniture = "dishwasher-return", i.add(a), Y(a, 2.17, 0.43, 9.88, 0.56, 0.79, 0.025, y.metal), Y(a, 2.17, 0.72, 9.9, 0.42, 0.035, 0.035, y.dark);
    for (let U of [1.37, 1.78]) Y(i, 1.34, U, 9.37, 1.73, 0.045, 0.3, y.white);
    Y(i, 0.67, 1.12, 11.93, 0.74, 2.24, 0.72, y.white), Y(i, 1.07, 1.13, 11.93, 0.025, 0.7, 0.57, y.dark), Y(i, 1.08, 1.77, 11.93, 0.025, 0.39, 0.57, y.metal), Y(i, 1.095, 1.77, 11.93, 0.012, 0.26, 0.39, y.dark), Y(i, 0.68, 1.03, 12.76, 0.76, 2.06, 0.7, y.metal), Y(i, 1.09, 1.12, 12.76, 0.025, 0.025, 0.7, y.dark);
    let f = new YA();
    f.userData.furniture = "island", f.position.x = 0, i.add(f), BP(f, 2.45, 11.2, 0.6, 1.75, 0.9), Y(f, 2.45, 0.985, 11.25, 0.46, 0.025, 0.58, y.dark);
    for (let U of [2.32, 2.58]) for (let w of [11.08, 11.42]) {
      let l = new ne(new Cn(0.08, 8e-3, 6, 24), y.metal);
      l.rotation.x = Math.PI / 2, l.position.set(U, 1.003, -w), f.add(l);
    }
    let r = new YA();
    r.userData.furniture = "dining", i.add(r), Y(r, 4.43, 0.77, 11.35, 1, 0.09, 1.95, y.floor);
    for (let U of [4.03, 4.83]) for (let w of [10.52, 12.18]) Y(r, U, 0.36, w, 0.06, 0.72, 0.06, y.wood);
    for (let U of [3.61, 5.25]) for (let w of [10.84, 11.86]) {
      Y(r, U, 0.44, w, 0.44, 0.08, 0.45, y.dark), Y(r, U + (U < 4.43 ? -0.21 : 0.21), 0.69, w, 0.055, 0.53, 0.44, y.dark);
      for (let l of [-0.17, 0.17]) for (let R of [-0.17, 0.17]) Y(r, U + l, 0.21, w + R, 0.025, 0.42, 0.025, y.metal);
    }
    Y(i, 4.72, 0.52, 13.0625, 1.65, 1.04, 0.43, y.tile), Y(i, 4.72, 1.38, 13.1525, 1.05, 0.62, 0.055, y.dark), Y(i, 2.95, 0.43, 0.52, 2.05, 0.86, 0.44, y.wood), Y(i, 2.95, 1.19, 0.45, 1.35, 0.77, 0.055, y.dark), Y(i, 4.9, 1.02, 0.51, 0.65, 2.04, 0.42, y.wood), Y(i, 4.9, 1.09, 0.74, 0.53, 1.7, 0.025, y.glass), Y(i, 1.65, 0.36, 0.47, 0.3, 0.72, 0.34, y.dark);
    let P = new YA();
    P.userData.furniture = "living-seating", i.add(P), DP(P, 1.05, 2.65, 2.6, 0.86, y.dark, -Math.PI / 2), DP(P, 4.95, 2.65, 2.6, 0.82, y.white, Math.PI / 2), DP(P, 3, 4.32, 2.3, 0.82, y.white, Math.PI), Y(P, 3, 0.41, 2.6, 1.2, 0.05, 0.85, y.wood);
    for (let U of [2.5, 3.5]) Y(P, U, 0.2, 2.6, 0.035, 0.4, 0.65, y.metal);
    let s = new ne(new mi(0.32, 0.32, 0.055, 24), y.wood);
    s.position.set(1.03, 0.55, -4.35), P.add(s);
    for (let U of [0.83, 1.23]) Y(P, U, 0.26, 4.35, 0.04, 0.52, 0.04, y.wood);
    for (let U of [2.27, 4.47]) jP(i, 5.735, U, 0.75), Y(i, 5.705, 2.35, U, 0.19, 0.31, 0.87, y.white);
    jP(i, 5.735, 6.62, 0.8);
    for (let U of [9.98, 12.72]) jP(i, 5.875 + (U - 9.265) * 0.1425 / 5.805 - 0.14, U, 0.6);
  }
  return addGroundFloorFurniture;
}
