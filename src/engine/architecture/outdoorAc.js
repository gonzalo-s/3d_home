import { YA, mi, ne, xe } from '../../legacy/three-runtime.js';

const UNIT = { depth: 0.3, height: 0.55, length: 0.8 };

export const OUTDOOR_AC_UNITS = [
  { x: 6.1, y: 0.4, z: 1.8 },
  { x: 6.1, y: 2.3, z: 5.9 },
  { x: 6.14, y: 2.3, z: 10.7 },
  { x: 6.17, y: 0.4, z: 12.2 },
];

export function createOutdoorAcBuilder(Y) {
  const body = new xe({ color: 0xf2f3f0, roughness: 0.6 });
  const ring = new xe({ color: 0xc9cdd0, roughness: 0.5 });
  const fan = new xe({ color: 0x50565a, roughness: 0.7 });

  function addDisc(group, material, x, z, radius, height) {
    const mesh = new ne(new mi(1, 1, height, 28), material);
    mesh.scale.set(radius, 1, radius);
    mesh.rotation.z = Math.PI / 2;
    mesh.position.set(x, 0, z);
    mesh.castShadow = false;
    group.add(mesh);
  }

  function addOutdoorAc(level, { x, y, z }) {
    const group = new YA();
    group.position.set(x, y, -z);
    group.userData.outdoorAirConditioner = true;
    level.add(group);
    Y(group, 0, 0, 0, UNIT.depth, UNIT.height, UNIT.length, body);
    const front = UNIT.depth / 2;
    addDisc(group, ring, front + 0.003, -0.1, 0.21, 0.008);
    addDisc(group, fan, front + 0.008, -0.1, 0.18, 0.008);
    Y(group, front + 0.004, -0.02, 0.3, 0.008, 0.4, 0.1, fan);
    return group;
  }

  return function addOutdoorAcUnits(level) {
    return OUTDOOR_AC_UNITS.map((unit) => addOutdoorAc(level, unit));
  };
}
