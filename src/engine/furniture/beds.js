import { YA, xe } from '../../legacy/three-runtime.js';

export function createBedBuilder(y, Y) {
  const frameWood = new xe({ color: 0xe8e3d8, roughness: 0.75 });
  const duvet = new xe({ color: 0x9db2c4, roughness: 0.95 });
  const pillow = new xe({ color: 0xf5f3ee, roughness: 0.95 });

  function addBed(level, { x, z, length, width, axis, headAtMin, headboardHeight, frameTop = 0.24, mattressHeight = 0.26, pillows = 1 }) {
    const group = new YA();
    group.position.set(x, 0, -z);
    group.rotation.y = axis === 'x' ? (headAtMin ? 0 : Math.PI) : (headAtMin ? Math.PI / 2 : -Math.PI / 2);
    level.add(group);

    const mattressTop = frameTop + mattressHeight;
    const legHeight = frameTop - 0.14;
    const headX = -length / 2;

    Y(group, 0, frameTop - 0.07, 0, length, 0.14, width, frameWood);
    for (const [lx, lz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
      Y(group, lx * (length / 2 - 0.05), legHeight / 2, lz * (width / 2 - 0.05), 0.06, legHeight, 0.06, frameWood);
    }
    Y(group, headX + 0.03, headboardHeight / 2, 0, 0.06, headboardHeight, width + 0.08, frameWood);

    const mattress = Y(group, 0.03, frameTop + mattressHeight / 2, 0, length - 0.06, mattressHeight, width - 0.04, y.white);

    const duvetLength = length * 0.68;
    Y(group, length / 2 - duvetLength / 2 - 0.02, mattressTop + 0.02, 0, duvetLength, 0.05, width - 0.02, duvet);

    const pillowWidth = (width - 0.1) / pillows - 0.06;
    for (let p = 0; p < pillows; p++) {
      const pz = (p - (pillows - 1) / 2) * (pillowWidth + 0.06);
      Y(group, headX + 0.3, mattressTop + 0.06, pz, 0.36, 0.11, pillowWidth, pillow);
    }
    return { group, mattress };
  }

  return addBed;
}
