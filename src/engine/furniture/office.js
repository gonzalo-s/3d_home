import { YA, mi, ne, xe } from '../../legacy/three-runtime.js';

export const OFFICE_REFERENCE = {
  title: 'Oficina',
  image: '/assets/references/Clean office layout_ perspective and floor plan.png',
};

const DESK = { x: 4.3875, z: 5.71, length: 2.825, depth: 0.65, top: 0.79, thickness: 0.04 };

export function createOfficeBuilder(y, Y) {
  const deskTop = new xe({ color: 0x34363a, roughness: 0.6 });
  const black = new xe({ color: 0x1c1d20, roughness: 0.6 });
  const mesh = new xe({ color: 0x2a2b2e, roughness: 0.95 });
  const screen = new xe({ color: 0x1d2c47, roughness: 0.3 });
  const laptop = new xe({ color: 0x3a3d42, roughness: 0.5 });
  const chrome = new xe({ color: 0xb8bcc2, metalness: 0.6, roughness: 0.35 });
  const steel = new xe({ color: 0x7d8083, metalness: 0.3, roughness: 0.55 });
  const steelFront = new xe({ color: 0x8a8d90, metalness: 0.3, roughness: 0.5 });
  const handle = new xe({ color: 0x5c5f62, metalness: 0.4, roughness: 0.45 });

  function addDesk(level) {
    Y(level, DESK.x, DESK.top - DESK.thickness / 2, DESK.z, DESK.length, DESK.thickness, DESK.depth, deskTop);
    for (const lx of [DESK.x - DESK.length / 2 + 0.055, DESK.x + DESK.length / 2 - 0.055]) {
      for (const lz of [DESK.z - DESK.depth / 2 + 0.055, DESK.z + DESK.depth / 2 - 0.055]) {
        Y(level, lx, (DESK.top - DESK.thickness) / 2, lz, 0.06, DESK.top - DESK.thickness, 0.06, black);
      }
    }
  }

  function addMonitors(level, x, z) {
    Y(level, x, DESK.top + 0.005, z + 0.06, 0.28, 0.01, 0.18, black);
    Y(level, x, 1.2, z - 0.05, 0.05, 0.82, 0.03, black);
    for (const panelY of [1.12, 1.47]) {
      Y(level, x, panelY, z, 0.7, 0.34, 0.035, black);
      Y(level, x, panelY, z + 0.019, 0.66, 0.3, 0.004, screen);
    }
  }

  function addLaptop(level, x, z) {
    const group = new YA();
    group.position.set(x, 0, -z);
    group.rotation.y = 0.35;
    level.add(group);
    Y(group, 0, DESK.top + 0.01, 0, 0.32, 0.02, 0.22, laptop);
    Y(group, 0, DESK.top + 0.13, -0.1, 0.32, 0.22, 0.012, laptop);
    Y(group, 0, DESK.top + 0.13, -0.093, 0.29, 0.19, 0.003, screen);
  }

  function addChair(level, x, z) {
    Y(level, x, 0.46, z, 0.5, 0.08, 0.5, mesh);
    Y(level, x, 0.82, z + 0.25, 0.48, 0.55, 0.07, mesh);
    for (const side of [-1, 1]) {
      Y(level, x + side * 0.27, 0.62, z, 0.05, 0.04, 0.32, black);
      Y(level, x + side * 0.27, 0.54, z, 0.03, 0.12, 0.03, black);
    }
    const column = new ne(new mi(0.025, 0.025, 0.3, 12), chrome);
    column.position.set(x, 0.27, -z);
    column.castShadow = true;
    level.add(column);
    const base = new YA();
    base.position.set(x, 0, -z);
    level.add(base);
    for (let k = 0; k < 3; k++) {
      Y(base, 0, 0.07, 0, 0.34, 0.025, 0.04, chrome).rotation.y = k * Math.PI / 3;
    }
  }

  function addFilingCabinet(level, x, z) {
    const width = 0.46;
    const depth = 0.62;
    Y(level, x, 0.5, z, width, 1.0, depth, steel);
    for (const drawerY of [0.18, 0.5, 0.82]) {
      Y(level, x, drawerY, z + depth / 2 + 0.002, width - 0.02, 0.3, 0.012, steelFront);
      Y(level, x, drawerY + 0.08, z + depth / 2 + 0.014, 0.18, 0.025, 0.02, handle);
    }
  }

  function addOffice(level) {
    addDesk(level);
    addMonitors(level, 4.02, 5.52);
    addLaptop(level, 4.92, 5.66);
    Y(level, 4.02, DESK.top + 0.008, 5.8, 0.44, 0.015, 0.14, black);
    Y(level, 3.62, DESK.top + 0.01, 5.8, 0.06, 0.02, 0.1, black);
    Y(level, 3.2, 0.24, 5.62, 0.2, 0.48, 0.45, black);
    addChair(level, 4.1, 6.4);
    addFilingCabinet(level, 2.68, 5.7);
  }

  return addOffice;
}
