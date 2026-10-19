import { createHouseApp } from '../../legacy/house-app.js';
import { installUpstairsAir } from '../../systems/upstairs-air.js';
import { installSolidSurfaces } from '../../systems/solid-surfaces.js';
import { installLighting } from '../../systems/lighting-and-electrical.js';
import { createGestureCamera } from '../interaction/gestureCamera.js';
import { createVisibilityGestures } from '../interaction/visibilityGestures';

export function createHouseViewer() {
  const app = createHouseApp();
  installUpstairsAir(app.model);
  installSolidSurfaces(app.model);
  const disposeLighting = installLighting(app.model);
  const gestureCamera = createGestureCamera(app.model.controls, app.model.renderer.domElement);
  const visibilityGestures = createVisibilityGestures(app.visibility);
  let disposed = false;
  return {
    model: app.model,
    applyGesture: gestureCamera.apply,
    applyVisibilityGesture: visibilityGestures.apply,
    previewVisibilityGesture: visibilityGestures.preview,
    setHandControlsActive(active) { if (!disposed) app.setHandControlsActive(active); },
    dispose() {
      disposed = true;
      gestureCamera.dispose();
      visibilityGestures.dispose();
      disposeLighting();
      app.dispose();
    },
  };
}
