# Migración por etapas

## Estado de partida

Se extrajo la aplicación del HTML v39 mediante su estructura JavaScript, separando los datos, las imágenes, el runtime y tres sistemas de modificación. No se recuperaron los nombres originales ni archivos fuente anteriores al bundle; el bloque legado está formateado, no reconstruido semánticamente.

La base usa Vite para ejecutar módulos ES sin agregar una reescritura de interfaz al mismo tiempo. Es un puente de comprobación hacia Next.js, no el destino final.

## 1. Establecer la referencia

- Instalar con npm ci y ejecutar la base.
- Usar la misma cámara, viewport, fecha y hora en el HTML de referencia y en la base.
- Comprobar las 24 referencias gráficas y las capas de instalaciones.
- Guardar comparaciones locales de PB, PA y ambas, con iluminación diurna y nocturna.
- Registrar controles y comportamiento antes de reemplazar consultas al DOM.

## 2. Envolver el motor en un ciclo de vida explícito

Crear `createHouseViewer(container, initialState)` con `update(state)`, `resize()`, `select()` y `dispose()`. Trasladar el arranque a esa función en vez de ejecutar efectos al importar módulos. Evitar referencias globales entre sistemas.

El componente React cliente debe montar y desmontar esa instancia. El canvas necesita inicialización exclusiva del navegador; no debe ejecutar WebGL durante el render del servidor. Comprobar que React Strict Mode no deje dos RAF o dos grupos de listeners.

## 3. Arquitectura destino propuesta

| Carpeta | Responsabilidad |
| --- | --- |
| `src/app/` | Ruta y contenedor Next.js |
| `src/components/viewer/` | Canvas y puente con el motor |
| `src/components/controls/` | Controles de plantas, vistas, sol e instalaciones |
| `src/domain/house/` | Tipos, coordenadas, medidas y modelo canónico |
| `src/engine/core/` | Scene, renderer, cámara, controles y ciclo de vida |
| `src/engine/architecture/` | Muros, aberturas, pisos, techos y escalera |
| `src/engine/furniture/` | Constructores de muebles y artefactos |
| `src/engine/lighting/` | Sol, claraboyas, luminarias y shader de interiores |
| `src/engine/installations/` | Puntos, tableros, recorridos y selección |
| `src/state/` | Estado visible de la aplicación y acciones |
| `public/assets/` | Fotos y planos |

Aplicar componentes atómicos donde mejoren la interfaz; no convertir cada superficie del modelo en estado React.

## 4. Datos canónicos y eliminación de parches

`house.json` contiene líneas CAD y referencias de fotos, pero no toda la arquitectura del visor. Parte de las dimensiones, aberturas, muebles y detalles está en las funciones de `legacy/house-app.js`. También hay modificaciones posteriores en `systems/`.

Para consolidar, trasladar cada constructor y sus constantes a su dominio y comparar el resultado. No reemplazar la geometría actual por las líneas CAD sin conservar las correcciones visuales posteriores.

`electrical-source.json` es anterior a las correcciones físicas. `current-model-snapshot.json` contiene los nodos finales, recorridos agregados y datos de luminarias. Elegir un único flujo de datos y retirar las mutaciones de arranque al adoptar el snapshot como fuente.

## 5. Una sola dependencia Three.js

El paquete conserva un runtime congelado y otra instancia npm utilizada por el módulo de luces. Reproduce el HTML, pero no es la arquitectura final. La reserva de IDs del módulo de luces existe para evitar colisiones entre estas instancias; es una adaptación temporal.

Migrar los alias exportados por `three-runtime.js` a imports de Three.js y addons oficiales. Sustituir también los addons de líneas anchas incluidos al inicio de house-app.js y aislar el cálculo solar. Comparar materiales, sombras, color, geometrías y shader antes de eliminar el runtime. No cambiar simultáneamente la versión del motor y el modelo de iluminación.

## 6. Validación y rendimiento

Pruebas útiles: montaje/desmontaje repetido; controles PB/PA; posiciones de nodos y luminarias; unicidad de IDs; selecciones y paneles; capas; espesores de pisos; hueco de escalera; transición día/noche sin aumento de programas gráficos; iluminación aislada de una luminaria sin afectar otro ambiente.

Medir la carga y la interacción en móvil real. La equivalencia en Chromium de escritorio no garantiza el mismo rendimiento en cada teléfono. Mantener los parámetros y limitaciones de iluminación documentados en CONTEXTO_MODELO.md.

La migración está completa cuando la referencia visual y funcional se conserva y los módulos legados ya no concentran el funcionamiento de la app.
