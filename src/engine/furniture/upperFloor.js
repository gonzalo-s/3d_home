import { createBathroomBuilder } from './bathroom.js';
import { createBedBuilder } from './beds.js';
import { createOfficeBuilder } from './office.js';
import { PLACARD_REFERENCES, createPlacardBuilder } from './placards.js';

export function createUpperFloorFurnitureBuilder(y, { addBox: Y, addWall: Ie }) {
  const bathroom = createBathroomBuilder(Y);
  const addPlacard = createPlacardBuilder(y, Y);
  const addBed = createBedBuilder(y, Y);
  const addOffice = createOfficeBuilder(y, Y);
  function addUpperFloorFurniture(i, o) {
    bathroom.addToilet(i, { x: 0.6, z: 12.9, rotationY: 0 }), bathroom.addToilet(i, { x: 0.6, z: 0.85, rotationY: 0 }), bathroom.addBidet(i, { x: 0.59, z: 13.55, rotationY: 0 }), bathroom.addBidet(i, { x: 0.59, z: 1.55, rotationY: 0 }), Y(i, 1.1, 0.26, 14.56, 1.4, 0.52, 0.72, y.white), Y(i, 1.1, 0.53, 14.56, 1.15, 0.015, 0.5, y.glass), Y(i, 0.8, 0.08, 2.835, 1, 0.16, 0.85, y.white), Y(i, 1.315, 1.05, 2.835, 0.03, 2, 0.85, y.glass), Y(i, 2.285, 0.78, 1.45, 0.48, 0.08, 1.45, y.wood);
    bathroom.addBasin(i, { x: 2.285, z: 1.75, topY: 0.82, rx: 0.17, rz: 0.22, rotationY: Math.PI });
    let p = Y(i, 2.11125, 0.78, 13.77105, 0.3775, 0.08, 0.7297, y.wood);
    p.userData.furniture = "vanitory-bano-chico-cad";
    bathroom.addBasin(i, { x: 2.095, z: 13.77105, topY: 0.82, rx: 0.15, rz: 0.2, rotationY: Math.PI });
    const wardrobeHeight = 2.2;
    const master = addPlacard(i, { kind: 'large', x: 0.6, z: 4.885, length: 3, height: wardrobeHeight });
    master.userData.furniture = "vestidor-principal";
    addPlacard(i, { kind: 'small', x: 2.725, z: 13.4, length: 2.8, height: wardrobeHeight });
    Ie(i, [2.425, 11.94], [3.1, 11.94], 0.1, o);
    addPlacard(i, { kind: 'small', x: 2.725, z: 8.95, length: 2.35, height: wardrobeHeight });
    Ie(i, [2.425, 10.2], [3.1, 10.2], 0.1, o);
    const photoAnchors = [
      { parent: i, x: 0.6, y: wardrobeHeight + 0.25, z: 6.0, reference: PLACARD_REFERENCES.large },
      { parent: i, x: 2.725, y: wardrobeHeight + 0.25, z: 13.4, reference: PLACARD_REFERENCES.small },
      { parent: i, x: 2.725, y: wardrobeHeight + 0.25, z: 8.95, reference: PLACARD_REFERENCES.small },
    ];
    const mainBed = addBed(i, { x: 3.65, z: 2.37, length: 2, width: 1.6, axis: 'x', headAtMin: true, headboardHeight: 1.05, frameTop: 0.3, pillows: 2 });
    mainBed.mattress.userData.furniture = "cama-principal-cad";
    addBed(i, { x: 4.15, z: 13.97, length: 1.9, width: 0.9, axis: 'z', headAtMin: false, headboardHeight: 0.8 });
    addBed(i, { x: 4.2, z: 8.66, length: 1.9, width: 0.9, axis: 'z', headAtMin: true, headboardHeight: 0.8 });
    addOffice(i);
    return photoAnchors;
  }
  return addUpperFloorFurniture;
}
