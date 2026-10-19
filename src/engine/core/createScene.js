import { Gn, JA, Le, On, Rr, cn, gr, uf } from '../../legacy/three-runtime.js';

export function createScene(container) {
  const scene = new cn();
  scene.background = new JA('#e9edf1');
  const renderer = new Rr({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = uf;
  container.append(renderer.domElement);
  const camera = new Le(42, 1, 0.1, 150);
  const controls = new gr(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.target.set(3, 4, -5);
  camera.position.set(27, 26, 27);
  const hemisphereLight = new On(16777215, 8425632, 2.3);
  scene.add(hemisphereLight);
  const sunLight = new Gn(16777215, 3);
  sunLight.position.set(-12, 24, 8);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  Object.assign(sunLight.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25 });
  sunLight.shadow.camera.far = 120;
  sunLight.shadow.bias = -3e-4;
  sunLight.target.position.set(5, 0, -7);
  scene.add(sunLight.target);
  scene.add(sunLight);
  return { scene, renderer, camera, controls, hemisphereLight, sunLight };
}
