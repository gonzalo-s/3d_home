# Validación de este paquete

Referencia: Casa Valle v39, estado posterior a la corrección de nodos y al nuevo spot del acceso. Este documento describe comprobaciones realizadas al generar el paquete, no una garantía de equivalencia futura tras refactorizarlo.

## Resultado

- `npm run build`: correcto con Vite 8.3.4 y Three.js npm 0.186.1.
- El build conserva un chunk grande del motor; queda pendiente dividirlo y unificar el runtime durante la migración.
- Ejecución en Chromium headless con WebGL/SwiftShader: sin errores de JavaScript ni de compilación gráfica en las vistas comprobadas.
- Referencia y base modular comparadas con viewport 1200 × 850, ambas plantas visibles y fecha 2026-10-16.
- A las 12:00: cero píxeles diferentes en las capturas de referencia y modular.
- A las 21:00: cero píxeles diferentes en las capturas de referencia y modular.
- Iguales estados consultados: posiciones de luminarias, espesores de superficies, cálculo solar, 35 luminarias interiores, 5 exteriores, 4 aires PA, 3 claraboyas y nodos eléctricos finales (77 PB y 40 PA).
- Las imágenes extraídas se solicitaron desde la base modular sin respuestas fallidas.

Los resultados estructurados están en `comparison.json` y `pixel-comparison.json`. Las capturas se usaron para QA local y no forman parte del paquete.

## Qué todavía hay que verificar durante la migración

La comprobación anterior cubre las dos vistas indicadas y la estructura consultada. No reemplaza una revisión completa de todos los controles, cámaras, selecciones, capas ni dispositivos. Probar móvil real, montaje/desmontaje en React, Strict Mode y pérdida/recuperación del contexto WebGL al convertir el visor en componentes.

La autenticación, el despliegue y AR están fuera de este paquete.
