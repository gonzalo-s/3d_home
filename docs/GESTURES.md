# Controles con las manos

Función opcional, apagada al abrir la aplicación. El [plan original](gesture-control-plan.md) documenta el objetivo; el comportamiento actual usa pulgares sostenidos para visibilidad, en reemplazo de los deslizamientos.

## Uso

1. Usar Node 24, `npm ci` y `npm run dev`, con la configuración Google existente. Iniciar sesión en localhost o HTTPS. La cámara no funciona desde HTTP de red local; un teléfono requiere HTTPS y el callback OAuth correspondiente.
2. Abrir **Explorar → Gestos con cámara** y activar el seguimiento. Aceptar el permiso y esperar la descarga del modelo.
3. Una pinza de pulgar e índice permite girar. Dos manos en pinza permiten acercar/alejar al separarlas/juntarlas y desplazar al moverlas juntas. Soltar detiene el movimiento.
4. Mostrar **una mano con pulgar abajo** para ocultar primero techo y cielorraso y después planta alta. **Pulgar arriba** restaura primero planta alta y luego techo/cielorraso.
5. El anillo muestra el progreso de confirmación. La leyenda anuncia la acción concreta: **Ocultar techo y cielorraso**, **Ocultar planta alta**, **Mostrar planta alta** o **Mostrar techo y cielorraso**. Mantener el gesto aproximadamente medio segundo; requiere al menos tres muestras confirmadas y puede tardar más si la inferencia es lenta.
6. El anillo completo confirma una sola acción. **Soltar el pulgar** (mano visible sin pulgar reconocido) unos 200 ms permite una nueva acción. Mantener el pulgar, cambiar directamente de arriba a abajo o perder la mano de vista no repite ni rearma el cambio. Cuando no hay otra capa disponible se indica **Todo ya está oculto/visible**.
7. Los iconos izquierda/derecha muestran la pose reconocida: pinza, abierta, en reposo o pulgar arriba/abajo. La identificación anatómica es una estimación del tracker. No es una reconstrucción exacta de los dedos.

Los botones manuales y los gestos usan el mismo estado de visibilidad. Un cambio manual durante una confirmación cancela o reinicia su progreso para el nuevo objetivo. Planta baja conserva su estado. Los pulgares reconocidos no mueven la cámara.

El video se procesa localmente, sin audio, grabación ni envío de fotogramas. Al activar se descargan WASM de jsDelivr (`@mediapipe/tasks-vision@0.10.32`) y el modelo Google `gesture_recognizer/float16/1`. Esos archivos necesitan conexión. La cámara se libera al desactivar, ocultar la página, desmontar o fallar. Un permiso concedido después de desactivar libera también el stream tardío. Mouse/touch siguen disponibles ante errores.

## Integración

- `handTracking.worker.ts`: un único **GestureRecognizer**, que devuelve landmarks y clasificación de poses. Un pulgar sólo cuenta si la pose ganadora es Thumb_Up/Thumb_Down (≥0,65) y los landmarks lo confirman (dedos plegados, pulgar claramente arriba/abajo). Reemplaza HandLandmarker; no ejecuta dos pipelines. Mantiene inferencia CPU fuera del render y cierra cada ImageBitmap.
- `gestureLogic.ts` y `handPose.ts`: pinzas con histéresis y observaciones visuales. Un pulgar reconocido queda excluido de la pinza. Los deslizamientos ya no ejecutan acciones.
- `thumbHoldLogic.ts`: confirmación de 500 ms y tres muestras, cancelación ante pérdida/cambio de mano, dirección u objetivo. El resultado queda bloqueado hasta observar una mano visible sin pulgar durante 200 ms; un dropout no rearma la acción.
- `visibilityGestures.ts`: previsualización y aplicación de acciones según el estado real de techo y PA. No duplica ese estado ni modifica geometría o iluminación.
- `startHandControls.ts`: cámara, worker y publicación de feedback. Una imagen en vuelo, hasta 15 inferencias/s y ancho máximo de transferencia de 480 px. Se rechazan resultados de más de 800 ms; la continuidad admite intervalos de hasta 600 ms. Mouse, teclado, diálogos y paneles móviles interrumpen la confirmación.
- `HandPoseHint.tsx` y `ThumbActionHint.tsx`: iconos, anillo SVG y leyenda accesible. El progreso actualiza directamente el arco y sus atributos ARIA con cada resultado; React sólo recibe cambios de pose, fase o leyenda. No se añade otro RAF.
- `gestureRenderBudget.ts`: limita temporalmente el canvas a tres millones de píxeles durante el seguimiento, incluso en 4K/HiDPI. Al desactivar vuelve al pixel ratio habitual. Las capturas mientras está activo usan esta resolución temporal. Cámara, geometría, materiales e iluminación conservan sus valores.

Los iconos toleran hasta 400 ms desde la primera muestra que pierde cada mano, sólo para reducir parpadeo visual. La cámara no extrapola movimiento durante la pérdida. Tras un segundo sin resultados se limpian los indicadores y se cancela el progreso; una acción ya ejecutada conserva su bloqueo.

El motor conserva los RAF existentes de render e iluminación. Su ciclo de vida usa useLayoutEffect para liberar OrbitControls antes de que React retire el canvas del documento. El runtime congelado y el HTML de referencia conservan su código.

Referencia: [Gesture Recognizer para web](https://developers.google.com/edge/mediapipe/solutions/vision/gesture_recognizer/web_js).

## Validación y límites

Ejecutar `npm run test:gestures`, `npm run typecheck`, `npm run check:data`, `npm run test:auth`, `npm run build` y `npm run test:auth:integration`.

Las pruebas automatizadas cubren pinzas, cámara, limpieza, latencia de 300 ms, estabilidad de los iconos, presupuesto 4K, preview de la siguiente acción, progreso y confirmación del pulgar, bloqueo de repeticiones y rearme con mano abierta. También cubren cancelación ante pérdida, interrupción, cambio de identidad/dirección/objetivo, límites de visibilidad y detecciones ambiguas.

Verificado en Chromium con poses sintéticas: progreso parcial del anillo, leyenda de la próxima capa, abajo/abajo/arriba/arriba, ausencia de repeticiones al mantener el pulgar, imposibilidad de saltar el rearme cambiando directamente de dirección, límites de visibilidad, viewport móvil y limpieza. Se inspeccionaron capturas del anillo y de móvil. El GestureRecognizer real procesó fotogramas de una webcam simulada de 480×360 en viewport 4K y liberó el stream al desactivar; esa webcam no contiene manos y no valida la clasificación de pulgares reales.

Pendiente de validación física: comodidad, clasificación de pulgares y lateralidad con distintas cámaras e iluminación, latencia real, Safari/Firefox y rendimiento/temperatura en teléfonos. Una prueba con landmarks o webcam simulados no demuestra que un gesto resulte cómodo con una mano real. Las revisiones de este cambio no establecen equivalencia visual exacta de todas las cámaras, plantas, horas, muros y puntos eléctricos.
