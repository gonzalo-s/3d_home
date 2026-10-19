import cameras from '../../data/cameras.json';
import { YA, mi, ne, xe } from '../../legacy/three-runtime.js';

const PA_FLOOR_HEIGHT = 3.4;
const HUB = { x: 5.8, z: 5.9, height: 0.25 };
const STREET_JUNCTION = { x: 5.42, z: -0.03, height: 3.3 };
const GARDEN_JUNCTION = { x: 5.97, y: 2.35, z: 5.78 };
const DOORBELL = { id: 'PB-IOT-1', x: 5.8, z: 7.06, height: 1.2 };
const DOORBELL_OUTDOOR = { id: 'PB-IOT-2', x: 7.5, z: -0.1, height: 1.4 };
const PB_CEILING_RUN = 3.2;
const UNDERGROUND_RUN = -0.1;
const WALKWAY_X = 6.52;
const FRONT_WALL_INNER_Z = 0.45;
const PA_CEILING_RUN = 2.5;
const SOURCE = 'Descripción del usuario';
const REMOVED_POINTS = new Set(['PB-64', 'PB-65']);
const REMOVED_ROUTES = new Set(['DATA-PB-R5', 'DATA-PB-R6']);

function dataRoute(id, points3D) {
  return { id, kind: 'data', points3D, interpreted: true, source: SOURCE };
}

function paRoutes() {
  const hubTop = [HUB.x, PA_CEILING_RUN, HUB.z];
  return [
    dataRoute('DATA-PA-R1', [[HUB.x, HUB.height, HUB.z], hubTop, [5.6, PA_CEILING_RUN, HUB.z], [5.6, PA_CEILING_RUN, 2.31136], [5.44368, PA_CEILING_RUN, 2.31136], [5.44368, 1.3, 2.31136]]),
    dataRoute('DATA-PA-R2', [[5.6, PA_CEILING_RUN, HUB.z], [5.6, PA_CEILING_RUN, 11.07449], [4.44562, PA_CEILING_RUN, 11.07449], [4.44562, 0.25, 11.07449]]),
    dataRoute('DATA-PA-R3', [[4.44562, PA_CEILING_RUN, 11.07449], [4.44562, PA_CEILING_RUN, 11.38524], [4.44562, 0.25, 11.38524]]),
  ];
}

function pbRoutes() {
  const hubFloor = PA_FLOOR_HEIGHT + HUB.height;
  const junction = [STREET_JUNCTION.x, STREET_JUNCTION.height, STREET_JUNCTION.z];
  const [camera1, camera2] = cameras.filter((camera) => camera.id.startsWith('CAM-JARDIN'));
  const [street1, street2] = cameras.filter((camera) => camera.id.startsWith('CAM-CALLE'));
  return [
    dataRoute('DATA-PB-R1', [[HUB.x, hubFloor, HUB.z], [HUB.x, PB_CEILING_RUN, HUB.z]]),
    dataRoute('DATA-PB-R2', [[HUB.x, PB_CEILING_RUN, HUB.z], [HUB.x, PB_CEILING_RUN, 13.18614], [4.75802, PB_CEILING_RUN, 13.18614], [4.75802, 1.3, 13.18614]]),
    dataRoute('DATA-PB-R3', [[HUB.x, PB_CEILING_RUN, HUB.z], [HUB.x, PB_CEILING_RUN, 0.3], [STREET_JUNCTION.x, PB_CEILING_RUN, 0.3], [STREET_JUNCTION.x, STREET_JUNCTION.height, STREET_JUNCTION.z]]),
    dataRoute('DATA-PB-R4', [[STREET_JUNCTION.x, PB_CEILING_RUN, 0.3], [2.8145, PB_CEILING_RUN, 0.3], [2.8145, 2.3, 0.3]]),
    dataRoute('DATA-PB-R7', [[HUB.x, PB_CEILING_RUN, DOORBELL.z], [DOORBELL.x, DOORBELL.height, DOORBELL.z]]),
    dataRoute('DATA-PB-R8', [[DOORBELL.x, DOORBELL.height, DOORBELL.z], [DOORBELL.x, UNDERGROUND_RUN, DOORBELL.z], [WALKWAY_X, UNDERGROUND_RUN, DOORBELL.z], [WALKWAY_X, UNDERGROUND_RUN, FRONT_WALL_INNER_Z], [DOORBELL_OUTDOOR.x, UNDERGROUND_RUN, FRONT_WALL_INNER_Z], [DOORBELL_OUTDOOR.x, UNDERGROUND_RUN, DOORBELL_OUTDOOR.z], [DOORBELL_OUTDOOR.x, DOORBELL_OUTDOOR.height, DOORBELL_OUTDOOR.z]]),
    dataRoute('DATA-CAM-JARDIN-1', [[camera1.x, camera1.y, camera1.z], [GARDEN_JUNCTION.x, GARDEN_JUNCTION.y, GARDEN_JUNCTION.z]]),
    dataRoute('DATA-CAM-JARDIN-2', [[camera2.x, camera2.y, camera2.z], [GARDEN_JUNCTION.x, GARDEN_JUNCTION.y, GARDEN_JUNCTION.z]]),
    dataRoute('DATA-CAM-JARDIN-HUB', [[GARDEN_JUNCTION.x, GARDEN_JUNCTION.y, GARDEN_JUNCTION.z], [GARDEN_JUNCTION.x, hubFloor, GARDEN_JUNCTION.z], [HUB.x, hubFloor, HUB.z]]),
    dataRoute('DATA-CAM-CALLE-1', [[street1.x, street1.y, street1.z], junction]),
    dataRoute('DATA-CAM-CALLE-2', [[street2.x, street2.y, street2.z], junction]),
  ];
}

export function applyIotDataCorrections(electrical) {
  const { pa, pb } = electrical.floors;
  Object.assign(pa.points.find((point) => point.id === 'PA-22'), { x: HUB.x, z: HUB.z, height: HUB.height, heightInferred: false, corrected: true, source: SOURCE });
  Object.assign(pb.points.find((point) => point.id === 'PB-62'), { x: STREET_JUNCTION.x, z: STREET_JUNCTION.z, height: STREET_JUNCTION.height, heightInferred: false, corrected: true, source: SOURCE });
  pb.points = pb.points.filter((point) => !REMOVED_POINTS.has(point.id));
  pb.routes = pb.routes.filter((route) => !REMOVED_ROUTES.has(route.id));
  for (const doorbell of [DOORBELL, DOORBELL_OUTDOOR]) {
    if (!pb.points.some((point) => point.id === doorbell.id)) {
      pb.points.push({ ...doorbell, kind: 'data', source: SOURCE, corrected: true, new: true });
    }
  }
  for (const [floor, routes] of [[pa, paRoutes()], [pb, pbRoutes()]]) {
    for (const route of routes) if (!floor.routes.some((existing) => existing.id === route.id)) floor.routes.push(route);
  }
}

export function createCameraLayer(parent, Y) {
  const white = new xe({ color: 0xf4f5f3, roughness: 0.5 });
  const lens = new xe({ color: 0x15181c, roughness: 0.3 });
  const box = new xe({ color: 0xb8b4aa, roughness: 0.8 });
  const group = new YA();
  parent.add(group);

  function addCamera({ x, y, z, aim }) {
    const camera = new YA();
    const [dx, dy, dz] = aim;
    camera.position.set(x, y, -z);
    camera.rotation.order = 'YZX';
    camera.rotation.set(0, Math.atan2(dz, dx), Math.asin(dy / Math.hypot(dx, dy, dz)));
    group.add(camera);
    const body = new ne(new mi(0.028, 0.028, 0.12, 16), white);
    body.rotation.z = Math.PI / 2;
    body.position.set(0.06, 0, 0);
    body.castShadow = true;
    camera.add(body);
    const glass = new ne(new mi(0.02, 0.02, 0.004, 16), lens);
    glass.rotation.z = Math.PI / 2;
    glass.position.set(0.122, 0, 0);
    camera.add(glass);
    Y(camera, 0, -0.03, 0, 0.05, 0.03, 0.03, white);
    Y(camera, 0, 0.07, 0, 0.008, 0.1, 0.008, white);
  }

  for (const camera of cameras) addCamera(camera);
  Y(group, GARDEN_JUNCTION.x, GARDEN_JUNCTION.y, GARDEN_JUNCTION.z, 0.045, 0.11, 0.09, box);
  Y(group, GARDEN_JUNCTION.x, (GARDEN_JUNCTION.y + PA_FLOOR_HEIGHT + HUB.height) / 2, GARDEN_JUNCTION.z, 0.02, PA_FLOOR_HEIGHT + HUB.height - GARDEN_JUNCTION.y, 0.02, white);
  Y(group, STREET_JUNCTION.x, STREET_JUNCTION.height, STREET_JUNCTION.z + 0.0075, 0.09, 0.11, 0.045, box);
  const street = cameras.filter((camera) => camera.id.startsWith('CAM-CALLE'));
  const lowest = Math.min(...street.map((camera) => camera.y));
  Y(group, STREET_JUNCTION.x, (lowest + STREET_JUNCTION.height) / 2, STREET_JUNCTION.z + 0.0075, 0.02, STREET_JUNCTION.height - lowest, 0.02, white);

  return group;
}
