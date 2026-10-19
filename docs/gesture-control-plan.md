# Camera gesture control — implementation plan

## Goal
Add optional camera-based hand controls to the existing 3D house viewer using MediaPipe. Keep the current model, authentication, and mouse/touch controls working.

## Plan
1. Inspect the repository and existing camera controls. Follow the project's architecture and use current official MediaPipe documentation.
2. Add an explicit “Enable hand controls” toggle. Load tracking only when enabled, process video locally, and show a small tracking/status indicator.
3. Implement one-hand pinch-and-drag to orbit the house. Releasing the pinch or losing the hand must stop the interaction.
4. Add two-hand pinch controls: changing the distance between hands zooms; moving both hands together pans. Keep transitions predictable.
5. Test the gesture logic, run the project's required checks, and document how to try it with a real camera. Start with desktop webcam use, then check mobile feasibility.

## Implementation guidance for Codex
Choose the appropriate integration and handle technical caveats: browser permissions and compatibility, HTTPS, tracking stability, accidental gestures, performance alongside 3D rendering, hand transitions, and resource cleanup. Keep the implementation small and modular; a custom skill is not required.

## Done when
- Users can enable/disable gestures and understand whether tracking is active.
- Orbit, zoom, and pan work without sudden jumps or unintended repeated actions.
- Tracking loss stops movement, and disabling gestures releases the camera.
- Existing mouse/touch controls and authentication still work.
- Video is not uploaded; unsupported devices and permission failures have a usable fallback.
- Automated checks pass; report separately what was verified with a physical camera and what still needs manual testing.

## Reference
https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker/web_js
