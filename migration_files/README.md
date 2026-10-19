# Casa Valle · paquete de migración v39

Este paquete prepara el visor existente para migrarlo a una SPA con Next.js, React y TypeScript. Incluye una **base modular ejecutable con Vite**, el HTML de referencia y los datos e imágenes separados. No es todavía la aplicación Next.js terminada.

## Empezar en VS Code

1. Descomprimir y abrir esta carpeta en VS Code.
2. Usar Node.js 22.12 o superior compatible con las dependencias fijadas.
3. Ejecutar:

```sh
npm ci
npm run dev
```

Abrir la dirección que muestra Vite. Para comprobar el build:

```sh
npm run check:data
npm run build
npm run preview
```

La vista de referencia está en `reference/casa-valle-v39.html`. Se puede abrir directamente en el navegador. Contiene el modelo y las fotos originales embebidas.

## Qué hay preparado

| Archivo o carpeta | Uso |
| --- | --- |
| `src/main.js` | Orden explícito de inicialización de los sistemas |
| `src/legacy/house-app.js` | Aplicación extraída y formateada; conserva nombres originales |
| `src/legacy/three-runtime.js` | Runtime original congelado para mantener equivalencia |
| `src/systems/lighting-and-electrical.js` | Código legible de luminarias, shader, nodos y conexiones corregidas |
| `src/systems/solid-surfaces.js` | Espesor de superficies y separación entre plantas |
| `src/systems/upstairs-air.js` | Unidades interiores de aire acondicionado |
| `src/styles/viewer.css` | Estilos separados |
| `src/data/house.json` | Geometría CAD y referencias fotográficas |
| `src/data/electrical-source.json` | Datos eléctricos de entrada, antes de correcciones |
| `src/data/installations.json` | Otras instalaciones |
| `src/data/current-model-snapshot.json` | Estado final exportado del modelo v39, incluidas correcciones |
| `src/data/asset-map.json` | Correspondencia entre las 24 imágenes y sus rutas originales |
| `public/assets/references/` | Las 24 imágenes extraídas, sin cambiar sus bytes |
| `AGENTS.md` | Reglas para el trabajo de Codex dentro del proyecto |
| `PROMPT_PARA_CODEX.md` | Instrucción lista para iniciar la migración |
| `docs/MIGRACION.md` | Etapas y arquitectura destino |
| `docs/CONTEXTO_MODELO.md` | Medidas, decisiones y límites que deben conservarse |
| `docs/VALIDACION.md` | Comprobaciones realizadas al preparar este paquete |

## Dos datos distintos, dos propósitos

El arranque actual carga `electrical-source.json` y aplica las correcciones de `lighting-and-electrical.js`. El snapshot describe el **resultado final** de esa operación. No sustituir el archivo de entrada por el snapshot sin retirar primero las correcciones: duplicaría altas de puntos y recorridos.

## Alcance pendiente

El bloque `legacy/house-app.js` ya es legible y está separado de la librería, pero sigue siendo código imperativo con identificadores cortos. Queda convertirlo por sistemas, crear la interfaz React, introducir tipos y unificar Three.js. El acceso temporal mediante `window.__model` debe reemplazarse por una API explícita.

No se implementaron login, AR ni despliegue. El paquete incluye fotos y planos de la vivienda; usar un repositorio privado si se quiere mantener privado su contenido.
