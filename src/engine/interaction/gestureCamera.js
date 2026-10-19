// Use the frozen runtime's public OrbitControls API; never synthesize pointer events.
export function createGestureCamera(controls, canvas) {
  let disposed = false;
  return {
    apply(motion) {
      if (disposed || !controls.enabled) return;
      const damping = controls.enableDamping;
      // Consume each gesture immediately so releasing a pinch leaves no inertia.
      controls.enableDamping = false;
      try {
        if (controls.enableRotate) {
          controls.rotateLeft(motion.orbitX * Math.PI * 2);
          controls.rotateUp(motion.orbitY * Math.PI * 2);
        }
        if (controls.enablePan && (motion.panX || motion.panY)) {
          controls.pan(motion.panX * canvas.clientHeight, motion.panY * canvas.clientHeight);
        }
        if (controls.enableZoom && motion.zoom !== 1) controls.dollyIn(motion.zoom);
      } finally { controls.enableDamping = damping; }
    },
    dispose() { disposed = true; },
  };
}
