# Casa Valle · Plano 3D

Visor de la vivienda con Next.js, React, TypeScript y un motor Three.js imperativo. La interfaz funciona como SPA; Next.js agrega acceso privado con Google y una lista de cuentas autorizadas, configurada en el servidor.

## Desarrollo

Usar Node.js 24.x. Copiar `.env.example` a `.env.local` y configurar las credenciales Google, el secreto de sesión y las cuentas permitidas según [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

```sh
npm ci
npm run dev
```

Abrir `http://localhost:3000`. Sin configuración de acceso, el visor queda bloqueado.

```sh
npm run check:data
npm run test:auth
npm run typecheck
npm run build
npm run test:auth:integration
npm start
```

## Despliegue

Importar el repositorio en Vercel como Next.js. El build predeterminado genera `.next`. Las variables privadas y la configuración OAuth están detalladas en [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). No desplegar el build Vite de comparación: no incluye autenticación.

## Modelo y migración

- `src/app/` y `src/components/`: aplicación Next.js e interfaz React.
- `src/auth/` y `src/proxy.ts`: acceso Google, sesiones y protección de páginas, fotos y bundles con datos de la casa.
- `src/engine/`: sistemas de arquitectura, mobiliario, iluminación e instalaciones.
- `src/legacy/` y `src/systems/`: módulos imperativos todavía en proceso de extracción.
- `src/data/`: geometría CAD, instalaciones y snapshot final v39.
- `public/assets/references/`: fotos y referencias del modelo.
- `reference/casa-valle-v39.html`: referencia original inmutable, no publicada por Next.js.

La migración modular sigue en curso; agregar autenticación no implica equivalencia visual completa ni terminar la extracción del legado. Conservar las medidas y los límites descritos en [docs/CONTEXTO_MODELO.md](docs/CONTEXTO_MODELO.md) y el método de [docs/MIGRACION.md](docs/MIGRACION.md).

`electrical-source.json` es la entrada anterior a correcciones y `current-model-snapshot.json` representa el resultado final. No aplicar otra vez los parches de arranque al snapshot.

Para comparación local sin autenticación se conservan `npm run dev:legacy`, `npm run build:legacy` y `npm run preview:legacy` (Vite). El paquete contiene planos y fotos privados; controlar también el acceso al repositorio.
