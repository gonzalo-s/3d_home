# Casa Valle · Plano 3D

Aplicación web privada para explorar la vivienda Casa Valle en 3D y consultar su distribución, mobiliario, iluminación e instalaciones. Reúne el modelo de la casa, referencias visuales por ambiente y datos eléctricos en un mismo visor para facilitar la revisión y coordinación del proyecto.

El modelo parte de Casa Valle v39 y de sus datos CAD, con ajustes documentados a partir de planos y fotos. La aplicación funciona como una SPA dentro de Next.js: la navegación del visor ocurre en el navegador, mientras el servidor controla el acceso mediante Google. Está preparada para desplegarse en Vercel.

## Funciones principales

- Explorar planta baja, planta alta o ambas, con vistas en perspectiva y desde arriba.
- Girar y acercar la cámara; inspeccionar interiores mediante la transparencia de muros exteriores.
- Consultar referencias por ambiente con clic/toque en los iconos de cámara. Diez ambientes incluyen perspectiva y planta 2D de estilo CAD.
- Mostrar u ocultar techo, cielorrasos, cubierta del patio, etiquetas y capas de instalaciones.
- Cambiar fecha, hora y ubicación solar para revisar luz diurna, sombras y transición día/noche.
- Consultar puntos, tableros y recorridos eléctricos, y visualizar las luminarias instaladas.
- Guardar una imagen de la vista actual.
- Activar controles opcionales con las manos mediante cámara: una pinza para girar, dos para acercar y desplazar, y pulgar abajo/arriba sostenido con anillo de confirmación para ocultar/restaurar techo y planta alta. Video procesado localmente; instrucciones y límites en [docs/GESTURES.md](docs/GESTURES.md).
- Usar herramientas agrupadas para móvil, controles táctiles y referencias ampliables que se cierran tocando fuera del popup. Detalles en [docs/UI_MOBILE.md](docs/UI_MOBILE.md).

## Tecnologías y librerías

Versiones declaradas en [package.json](package.json); [package-lock.json](package-lock.json) fija las dependencias instaladas con `npm ci`.

| Tecnología | Versión declarada | Uso en el proyecto |
| --- | --- | --- |
| **Next.js** | 16.4.2 | App Router, servidor de autenticación, protección de rutas y build para Vercel. Usa Turbopack en desarrollo. |
| **React / React DOM** | 19.3.1 | Componentes de interfaz, controles y montaje/desmontaje del visor. |
| **TypeScript** | 7.0.2 | Tipado de la aplicación Next.js y sus componentes, con configuración estricta. El motor conserva módulos JavaScript durante la migración. |
| **Three.js** | 0.186.1 | Escena WebGL, geometría, materiales, cámara, selección, sombras e iluminación. El motor usa una API imperativa. |
| **NextAuth.js** (`next-auth`) | ^4.24.15 | Inicio de sesión con Google OAuth, sesiones JWT cifradas y callbacks de autorización. |
| **Vite** | 8.3.4 | Ejecución y build del visor de comparación local durante la migración. |
| **Node.js** | 24.x | Entorno de desarrollo, servidor Next.js, scripts de validación y pruebas con `node:test`. |

Los estilos de la interfaz están en CSS propio. Los datos del modelo y las instalaciones se almacenan en JSON; la autenticación actual no requiere una base de datos de usuarios.

Durante la migración todavía conviven un runtime Three.js congelado, procedente del visor original, y la dependencia npm usada por los módulos nuevos. Unificarlos es trabajo pendiente: la versión npm indicada en la tabla no describe por sí sola todo el runtime actual.

## Arquitectura

React monta la interfaz y el contenedor del visor. `createHouseViewer()` construye el motor Three.js e instala los sistemas de superficies, aire acondicionado e iluminación. El motor administra la escena, el renderizado y la interacción continua; al desmontarse libera sus recursos. Parte del estado y de los eventos de interfaz sigue en el código legado mientras se extraen módulos.

| Ruta | Responsabilidad |
| --- | --- |
| `src/app/` | Páginas Next.js y endpoints de autenticación. |
| `src/components/` | Visor React y controles de plantas, referencias, sol e instalaciones. |
| `src/auth/` y `src/proxy.ts` | Configuración Google, lista de cuentas autorizadas y protección de solicitudes. |
| `src/engine/` | Núcleo Three.js y módulos de arquitectura, mobiliario, iluminación, instalaciones e interacción. |
| `src/systems/` | Sistemas de ajustes del modelo, superficies sólidas e iluminación/electricidad. |
| `src/legacy/` | Código del visor v39 todavía pendiente de extracción y runtime congelado. |
| `src/data/` | Geometría CAD, cámaras, referencias, instalaciones y snapshot del modelo. |
| `public/assets/references/` | Fotos y dibujos utilizados por el visor, protegidos por la autenticación de Next.js. |
| `reference/casa-valle-v39.html` | Referencia original inmutable; no se publica como página de la aplicación. |
| `docs/` | Contexto del modelo, migración, despliegue y procedencia de las imágenes generadas. |

## Desarrollo local

Se requiere **Node.js 24.x**, npm, un navegador con WebGL y credenciales OAuth de Google para una aplicación web.

```sh
npm ci
cp .env.example .env.local
```

Completar `.env.local` con estas variables privadas:

| Variable | Propósito |
| --- | --- |
| `NEXTAUTH_URL` | Origen de la aplicación: `http://localhost:3000` en desarrollo. |
| `NEXTAUTH_SECRET` | Secreto estable para cifrar las sesiones; puede generarse con `openssl rand -base64 32`. |
| `GOOGLE_CLIENT_ID` | ID del cliente OAuth web de Google. |
| `GOOGLE_CLIENT_SECRET` | Secreto del mismo cliente OAuth. |
| `ALLOWED_GOOGLE_EMAILS` | Correos autorizados, separados por comas. |

Registrar en ese cliente de Google el redirect URI exacto `http://localhost:3000/api/auth/callback/google`. La configuración completa está en [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

```sh
npm run dev
```

Abrir [localhost:3000](http://localhost:3000). Google debe devolver un correo verificado que figure en la lista autorizada. Si falta la configuración de acceso, la aplicación queda bloqueada. Las variables privadas no llevan el prefijo `NEXT_PUBLIC_` y no deben subirse al repositorio.

## Comandos

| Comando | Función |
| --- | --- |
| `npm run dev` | Servidor Next.js de desarrollo. |
| `npm run build` | Build de producción en `.next`. |
| `npm start` | Ejecutar el build de producción. |
| `npm run typecheck` | Comprobar los tipos de TypeScript. |
| `npm run check:data` | Validar referencias de imágenes, mapeos, luminarias e identificadores eléctricos. |
| `npm run test:auth` | Pruebas de las reglas de acceso. |
| `npm run test:gestures` | Pruebas de gestos y ciclo de vida de la cámara. |
| `npm run test:auth:integration` | Verificar rutas, sesiones y assets protegidos sobre un build de producción. Ejecutar después de `npm run build`. |

El test de integración usa sesiones sintéticas; el inicio de sesión real con Google se comprueba manualmente. Las comprobaciones visuales deben usar la misma cámara, viewport, fecha y hora, e incluir plantas, iluminación, muros y selección eléctrica.

Para comparar la migración localmente se conservan `npm run dev:legacy`, `npm run build:legacy` y `npm run preview:legacy`. Estos comandos usan Vite y **no incluyen autenticación**; su salida no debe desplegarse.

## Despliegue y acceso

Importar el repositorio en Vercel como proyecto **Next.js**, con Node.js 24.x y salida `.next`. Configurar las mismas variables privadas en Vercel, usando `NEXTAUTH_URL=https://3d-home-954.vercel.app` para ese dominio, y registrar en Google `https://3d-home-954.vercel.app/api/auth/callback/google`. Otros dominios requieren sus propios callbacks exactos. Los cambios de variables en Vercel requieren un nuevo despliegue.

La protección cubre la página, las referencias visuales y los bundles que contienen datos de la vivienda. La lista de correos se comprueba también en las sesiones existentes; las respuestas privadas no se cachean públicamente. Ver [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) para configuración y verificación del acceso.

## Estado y límites del modelo

La migración modular sigue en curso. La geometría y los comportamientos del visor original se conservan como referencia; todavía hay lógica en `src/legacy/` y ajustes de arranque en `src/systems/`.

`src/data/electrical-source.json` contiene la entrada anterior a las correcciones. `src/data/current-model-snapshot.json` representa el estado final exportado de v39: no deben aplicarse nuevamente sobre ese snapshot los parches de arranque.

El visor ayuda a revisar el proyecto, pero contiene dimensiones y detalles aproximados pendientes de verificación. Los dibujos generados de estilo CAD son referencias esquemáticas sin escala verificada. La iluminación y las claraboyas usan aproximaciones; no constituyen una simulación fotométrica exacta. Algunos recorridos eléctricos son interpretados y no certifican el cableado oculto real.

Consultar [docs/CONTEXTO_MODELO.md](docs/CONTEXTO_MODELO.md) para medidas, decisiones y límites, y [docs/MIGRACION.md](docs/MIGRACION.md) para las etapas de migración y criterios de validación.
