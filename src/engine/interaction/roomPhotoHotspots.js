import { In, Lo, Ni, go, nA } from '../../legacy/three-runtime.js';

const MARKER_HEIGHT = 1.35;
const MARKER_SIZE = 0.022;
const HOVER_SCALE = 1.15;
const TAP_TOLERANCE_PX = 8;

function createMarkerTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const g = canvas.getContext('2d');
  g.fillStyle = '#ffffff';
  g.beginPath(), g.arc(64, 64, 60, 0, Math.PI * 2), g.fill();
  g.fillStyle = '#23384b';
  g.beginPath(), g.arc(64, 64, 50, 0, Math.PI * 2), g.fill();
  g.fillStyle = '#ffffff';
  g.beginPath(), g.roundRect(34, 46, 60, 40, 8), g.fill();
  g.beginPath(), g.roundRect(48, 38, 20, 12, 4), g.fill();
  g.fillStyle = '#23384b';
  g.beginPath(), g.arc(64, 66, 12, 0, Math.PI * 2), g.fill();
  g.fillStyle = '#ffffff';
  g.beginPath(), g.arc(64, 66, 6, 0, Math.PI * 2), g.fill();
  return new go(canvas);
}

function isVisibleInScene(object) {
  for (let node = object; node; node = node.parent) if (!node.visible) return false;
  return true;
}

export function createRoomPhotoHotspots({ anchors, camera, domElement, getLevelsRoot, listen, openPhoto }) {
  const raycaster = new In();
  const pointer = new nA();
  const texture = createMarkerTexture();
  const markers = anchors.map((anchor) => {
    const marker = new Ni(new Lo({ map: texture, transparent: true, depthWrite: false, sizeAttenuation: false }));
    marker.position.set(anchor.x, anchor.y ?? MARKER_HEIGHT, -anchor.z);
    marker.scale.set(MARKER_SIZE, MARKER_SIZE, 1);
    marker.renderOrder = 30;
    marker.userData.anchor = anchor;
    marker.visible = false;
    anchor.parent.add(marker);
    return marker;
  });
  const abort = new AbortController();
  markers.forEach((marker) => {
    const { imageUrl } = marker.userData.anchor;
    if (!imageUrl) return;
    fetch(imageUrl, { method: 'HEAD', signal: abort.signal })
      .then((response) => {
        if (response.ok && response.headers.get('content-type')?.startsWith('image/')) marker.visible = true;
      })
      .catch(() => {});
  });
  const occluders = [];
  getLevelsRoot().traverse((object) => {
    if (object.isMesh && !object.userData.shadowOnly) occluders.push(object);
  });

  let hovered = null;
  let tapStart = null;

  function pick(event) {
    const rect = domElement.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(markers.filter(isVisibleInScene), false)[0];
    if (!hit) return null;
    const blocker = raycaster
      .intersectObjects(occluders.filter((mesh) => isVisibleInScene(mesh) && !(mesh.material.transparent && !mesh.userData.exteriorWall)), false)[0];
    return blocker && blocker.distance < hit.distance ? null : hit.object;
  }

  function setHovered(marker) {
    if (hovered === marker) return;
    if (hovered) hovered.scale.set(MARKER_SIZE, MARKER_SIZE, 1);
    hovered = marker;
    if (marker) marker.scale.set(MARKER_SIZE * HOVER_SCALE, MARKER_SIZE * HOVER_SCALE, 1);
    domElement.style.cursor = marker ? 'pointer' : '';
  }

  function open(marker) {
    openPhoto(marker.userData.anchor);
  }

  listen(domElement, 'pointermove', (event) => {
    if (tapStart?.pointerId === event.pointerId && Math.hypot(event.clientX - tapStart.x, event.clientY - tapStart.y) >= TAP_TOLERANCE_PX) tapStart = null;
    if (event.pointerType !== 'mouse' || event.buttons !== 0) return;
    setHovered(pick(event));
  });
  listen(domElement, 'pointerleave', () => {
    setHovered(null);
    tapStart = null;
  });
  listen(domElement, 'pointerdown', (event) => {
    tapStart = event.isPrimary && event.button === 0
      ? { x: event.clientX, y: event.clientY, pointerId: event.pointerId, marker: pick(event) }
      : null;
  });
  listen(domElement, 'pointerup', (event) => {
    if (!tapStart || tapStart.pointerId !== event.pointerId || Math.hypot(event.clientX - tapStart.x, event.clientY - tapStart.y) >= TAP_TOLERANCE_PX) {
      tapStart = null;
      return;
    }
    const startMarker = tapStart.marker;
    tapStart = null;
    const marker = pick(event);
    if (!marker || marker !== startMarker) return;
    open(marker);
  });
  listen(domElement, 'pointercancel', () => { tapStart = null; });

  return {
    dispose() {
      abort.abort();
      domElement.style.cursor = '';
    },
  };
}
