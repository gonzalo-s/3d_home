import { FilesetResolver, GestureRecognizer } from '@mediapipe/tasks-vision';
import type { TrackedHand } from './gestureLogic';

export type TrackingRequest = { type: 'init' } | { type: 'frame'; bitmap: ImageBitmap; timestamp: number };
export type TrackingResponse = { type: 'ready' } | { type: 'error' } |
  { type: 'result'; hands: TrackedHand[]; timestamp: number };

const scope = globalThis as unknown as {
  onmessage: ((event: MessageEvent<TrackingRequest>) => void) | null;
  postMessage(message: TrackingResponse): void;
};
let tracker: GestureRecognizer | undefined;

scope.onmessage = async ({ data }) => {
  try {
    if (data.type === 'init') {
      const files = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.32/wasm');
      tracker = await GestureRecognizer.createFromOptions(files, {
        baseOptions: {
          modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
          delegate: 'CPU',
        },
        runningMode: 'VIDEO', numHands: 2,
        minHandDetectionConfidence: 0.65, minHandPresenceConfidence: 0.5, minTrackingConfidence: 0.5,
        cannedGesturesClassifierOptions: { categoryAllowlist: ['Thumb_Up', 'Thumb_Down'], scoreThreshold: 0.65 },
      });
      scope.postMessage({ type: 'ready' });
    } else {
      try {
        if (!tracker) throw new Error('Tracker not ready');
        const result = tracker.recognizeForVideo(data.bitmap, data.timestamp);
        const aspect = data.bitmap.width / data.bitmap.height;
        scope.postMessage({ type: 'result', timestamp: data.timestamp, hands: result.landmarks.map((landmarks, i) => ({
          id: result.handedness[i]?.[0]?.categoryName ?? String(i),
          thumb: result.gestures[i]?.[0]?.categoryName === 'Thumb_Up' ? 'up' :
            result.gestures[i]?.[0]?.categoryName === 'Thumb_Down' ? 'down' : undefined,
          landmarks: landmarks.map(p => ({ x: (1 - p.x) * aspect, y: p.y })),
        })) });
      } finally { data.bitmap.close(); }
    }
  } catch {
    tracker?.close(); tracker = undefined;
    scope.postMessage({ type: 'error' });
  }
};
