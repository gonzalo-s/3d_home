const GESTURE_PIXEL_BUDGET = 3_000_000;

/** Keep full-screen 4K/HiDPI rendering from monopolizing resources during tracking. */
export function gesturePixelRatio(width: number, height: number, deviceRatio: number, active: boolean) {
  const normalRatio = Math.min(deviceRatio, 2);
  if (!active || width <= 0 || height <= 0) return normalRatio;
  return Math.min(normalRatio, Math.sqrt(GESTURE_PIXEL_BUDGET / (width * height)));
}
