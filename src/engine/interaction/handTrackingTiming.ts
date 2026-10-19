// Inference and UI delivery share resources with the renderer. A 250 ms cutoff
// discarded usable samples on large viewports and repeatedly reset gestures.
export const MAX_RESULT_AGE_MS = 800;
export const MAX_SAMPLE_GAP_MS = 600;
export const HAND_HINT_TIMEOUT_MS = 1000;
export const HAND_HINT_LOSS_GRACE_MS = 400;
