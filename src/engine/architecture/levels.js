import { ROOF, PARAPET_TOP } from './roofProfile.js';
import { Lt, Ti, Vo, he, ne, te, uo, vo } from '../../legacy/three-runtime.js';

export function addFloorSlab(level, floorId, floorMaterial) {
  const shape = new Lt();
  (floorId === "pa" ? [[0, 0], [5.95, 0], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]] : [[0, 0], [10.91, 0], [10.91, 15.22], [0, 15.22]]).forEach((p, K) => K ? shape.lineTo(p[0], -p[1]) : shape.moveTo(p[0], -p[1]));
  shape.closePath();
  if (floorId === "pa") {
    const stairVoid = new vo();
    stairVoid.moveTo(0.3, -6.51), stairVoid.lineTo(1.425, -6.51), stairVoid.lineTo(1.425, -9.1475), stairVoid.lineTo(0.3, -9.1475), stairVoid.closePath(), shape.holes.push(stairVoid);
  }
  const geometry = new uo(shape), position = geometry.attributes.position;
  for (let p = 0; p < position.count; p++) {
    let K = position.getX(p), U = position.getY(p);
    position.setXYZ(p, K, 0, U);
  }
  geometry.computeVertexNormals();
  const slab = new ne(geometry, floorMaterial);
  slab.receiveShadow = true;
  level.add(slab);
  return slab;
}

export function createLevelWallBuilders({ addBox: Y, addWall: Ie, addFacadeWall: Tt, addFacadeWallOutward: xP }, y, { roof, addOutdoorAcUnits }) {
  function addUpperFloorWalls(level, generalHeight) {
    const i = level, o = generalHeight;
    const { eaveHigh, eaveLow } = ROOF;
    const westWall = Tt(i, [0.15, 0], [0.15, 15.22], 0.3, PARAPET_TOP, [], -1);
    roof.addParapetCap(westWall, 0.15, 7.825, 14.79, 0.3, true);
    const frontWall = xP(i, [0, 0.15], [5.95, 0.15], 0.3, PARAPET_TOP, [[0.625, 1.625, 0.9, 2.1], [3.475, 4.975, 0.9, 2.1]]);
    roof.addParapetCap(frontWall, 2.975, 0.15, 5.95, 0.3);
    roof.addGableFill(Tt(i, [0, 15.07], [6.09, 15.07], 0.3, eaveLow, [], -1), [0, 15.07], [6.09, 15.07], 0.3, eaveLow);
    Tt(i, [5.875, 0.3], [5.875, 9.265], 0.15, eaveLow, [[3.168, 4.668, 0.9, 2.1], [6.11, 6.91, 0.9, 2.1], [7.5102403393, 9.0102403393, 0.9, 2.1, null, "cad-middle-window"]]);
    Tt(i, [5.875, 9.265], [6.0175, 15.07], 0.15, eaveLow, [[0, 0.0452403393, 0.9, 2.1, null, "no-decoration"], [3.485, 4.985, 0.9, 2.1]]);
    Ie(i, [2.5875, 0.3], [2.5875, 4.46024], 0.125, o), Ie(i, [0.3, 3.3225], [2.525, 3.3225], 0.125, o, [[1.388, 2.188, 0, 2.05]]), Ie(i, [2.3625, 5.26], [2.3625, 12.365], 0.125, o, [[1.488, 2.288, 0, 2.05], [4.975, 5.775, 0, 2.05], [6.1, 6.9, 0, 2.05]]), Ie(i, [0.3, 6.4475], [2.3, 6.4475], 0.125, o, [[1.1625, 1.9625, 0, 2.05]]), Ie(i, [1.3625, 6.51], [1.3625, 9.01], 0.125, 0.95), Ie(i, [2.3625, 5.3225], [5.875, 5.3225], 0.125, o), Ie(i, [2.425, 7.6475], [5.875, 7.6475], 0.125, o), Ie(i, [2.425, 11.3225], [5.95, 11.3225], 0.125, o), Ie(i, [2.3625, 12.365], [2.3625, 15.07], 0.125, o), Ie(i, [0.3, 12.4275], [2.3, 12.4275], 0.125, o, [[1.1, 1.9, 0, 2.05]]);
    roof.addRoofSystem(level);
    addOutdoorAcUnits(level);
  }
  function addGroundFloorWalls(level, generalHeight, fullHeight) {
    const i = level, o = generalHeight, e = fullHeight;
    const bathWallsHover = {};
    Tt(i, [0.15, 0.15], [0.15, 15.07], 0.3, e, [[7.75, 8.55, 1.09, 1.55, null, "no-decoration", "niche"]], -1), Y(i, 0.06, 1.32, 8.3, 0.12, 0.46, 0.8, y.facade).userData.structuralWall = true, xP(i, [0, 0.15], [5.95, 0.15], 0.3, e, [[0.65, 1.45, 0.9, 2.1]]), Tt(i, [0, 15.07], [6.09, 15.07], 0.3, e, [], -1), Tt(i, [6.09, 15.07], [10.91, 15.07], 0.3, o, [], -1), Tt(i, [10.81, 0.3], [10.81, 15.07], 0.2, o), Tt(i, [5.875, 0.3], [5.875, 9.265], 0.15, e, [[0.968, 2.968, 0.9, 2.1], [3.468, 5.468, 0.9, 2.1], [7.21, 8.56, 0, 2.05, "principal-jardin"]]), Tt(i, [5.875, 9.265], [6.0175, 15.07], 0.15, e, [[1.085628, 3.085628, 0, 2.1, "cocina-balcon"], [4.63, 5.43, 0, 2.05, "lavadero-jardin"]]), xP(i, [5.95, 0.15], [10.91, 0.15], 0.3, o, [[0.3, 1.15, 0, 2.05], [1.98, 4.73, 0, 2.05]]), Y(i, 6.675, 1.025, 0.1, 0.85, 2.05, 0.055, y.metal), Y(i, 9.305, 1.025, 0.1, 2.75, 2.05, 0.07, y.metal);
    for (let K of [7.93, 8.62, 9.305, 9.99, 10.68]) Y(i, K, 1.025, 0.04, 0.018, 2.05, 0.018, y.wood);
    Y(i, 8.43, o - 0.05, 0.08, 5.15, 0.13, 0.45, y.facade), Y(i, 8.43, o - 0.18, 0.08, 5.1, 0.055, 0.38, y.facade), Y(i, 7.45, 1.45, -0.025, 0.38, 0.22, 0.035, y.wood), Ie(i, [0.3, 7.5725], [2.5125, 7.5725], 0.125, e, [[0, 1.0625, 1.9, e, null, null, "open-void"], [1.25, 2.05, 0, 2.05]], bathWallsHover), Ie(i, [2.5125, 6.737], [2.5125, 9.1475], 0.125, e, [], bathWallsHover), Ie(i, [0.3, 9.1475], [2.5125, 9.1475], 0.125, e), Ie(i, [0.3, 13.34], [5.95, 13.34], 0.125, e, [[2.52, 3.62, 0, 2.05]]);
  }
  function addGroundFloorFinish(o) {
    Y(o, 3.05, 9e-3, 6.8, 5.5, 0.018, 12.9, y.grayFloor), Y(o, 1.6, 0.023, 11.28, 2.6, 0.02, 3.45, y.floor);
    let p = [];
    for (let U = 0.3; U < 5.8; U += 0.8) p.push(U, 0.025, -0.3, U, 0.025, -13.25);
    for (let U = 0.3; U < 13.3; U += 0.8) p.push(0.3, 0.025, -U, 5.8, 0.025, -U);
    let K = new he();
    K.setAttribute("position", new te(p, 3)), o.add(new Ti(K, new Vo({ color: 9407621, transparent: true, opacity: 0.5 })));
  }
  return { addUpperFloorWalls, addGroundFloorWalls, addGroundFloorFinish };
}
