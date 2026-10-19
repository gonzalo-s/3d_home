import type { GestureMotion } from '../interaction/gestureLogic';
import type { VisibilityDirection, VisibilityPreview } from '../interaction/visibilityGestures';

export interface HouseViewer {
  applyGesture(motion: GestureMotion): void;
  applyVisibilityGesture(direction: VisibilityDirection): string | undefined;
  previewVisibilityGesture(direction: VisibilityDirection): VisibilityPreview | undefined;
  setHandControlsActive(active: boolean): void;
  dispose(): void;
}

export function createHouseViewer(): HouseViewer;
