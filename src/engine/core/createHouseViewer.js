import { createHouseApp } from '../../legacy/house-app.js';
import { installUpstairsAir } from '../../systems/upstairs-air.js';
import { installSolidSurfaces } from '../../systems/solid-surfaces.js';
import { installLighting } from '../../systems/lighting-and-electrical.js';

export function createHouseViewer() {
  const app = createHouseApp();
  installUpstairsAir(app.model);
  installSolidSurfaces(app.model);
  const disposeLighting = installLighting(app.model);
  return {
    model: app.model,
    dispose() {
      disposeLighting();
      app.dispose();
    },
  };
}
