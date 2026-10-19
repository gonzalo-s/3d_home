export type VisibilityDirection = 'hide' | 'show';
export type VisibilityPreview = { key: string; label: string; enabled: boolean };
export interface VisibilityGestureApi {
  previewVisibilityGesture(direction: VisibilityDirection): VisibilityPreview | undefined;
  applyVisibilityGesture(direction: VisibilityDirection): string | undefined;
}

export interface VisibilityControls {
  getState(): { roofVisible: boolean; upperFloorVisible: boolean };
  setRoofVisible(visible: boolean): void;
  setUpperFloorVisible(visible: boolean): void;
}

/** Read the real controls on every action, including changes made with mouse/touch. */
export function createVisibilityGestures(controls: VisibilityControls) {
  let disposed = false;
  return {
    preview(direction: VisibilityDirection): VisibilityPreview | undefined {
      if (disposed) return;
      const { roofVisible, upperFloorVisible } = controls.getState();
      if (direction === 'hide') {
        if (roofVisible) return { key: 'hide-roof', label: 'Ocultar techo y cielorraso', enabled: true };
        if (upperFloorVisible) return { key: 'hide-pa', label: 'Ocultar planta alta', enabled: true };
        return { key: 'hidden', label: 'Todo ya está oculto', enabled: false };
      }
      if (!upperFloorVisible) return { key: 'show-pa', label: 'Mostrar planta alta', enabled: true };
      if (!roofVisible) return { key: 'show-roof', label: 'Mostrar techo y cielorraso', enabled: true };
      return { key: 'visible', label: 'Todo ya está visible', enabled: false };
    },
    apply(direction: VisibilityDirection): string | undefined {
      if (disposed) return;
      const { roofVisible, upperFloorVisible } = controls.getState();
      if (direction === 'hide') {
        if (roofVisible) { controls.setRoofVisible(false); return 'Techo y cielorraso ocultos'; }
        if (upperFloorVisible) { controls.setUpperFloorVisible(false); return 'Planta alta oculta'; }
        return 'Techo y planta alta ya están ocultos';
      }
      if (!upperFloorVisible) { controls.setUpperFloorVisible(true); return 'Planta alta visible'; }
      if (!roofVisible) { controls.setRoofVisible(true); return 'Techo y cielorraso visibles'; }
      return 'Techo y planta alta ya están visibles';
    },
    dispose() { disposed = true; },
  };
}
