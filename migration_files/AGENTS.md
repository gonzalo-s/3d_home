# Objetivo

Migrar Casa Valle v39 a una SPA con Next.js, React y TypeScript manteniendo la geometría, los materiales, la interfaz y el comportamiento actuales.

## Método

- Leer README.md, docs/MIGRACION.md y docs/CONTEXTO_MODELO.md antes de editar.
- Ejecutar y verificar la base antes de cambiar arquitectura.
- Trabajar por etapas pequeñas, con compilación y comprobación visual tras cada sistema extraído.
- Conservar `reference/casa-valle-v39.html` como referencia inmutable.
- El estado final exportado está en `src/data/current-model-snapshot.json`. No aplicarle otra vez los parches del arranque.
- No inventar medidas ni reinterpretar el CAD para modernizar el código.
- Separar decisiones de migración y cambios de producto. Durante esta migración, conservar el diseño y las funciones.
- No considerar completa la tarea por cargar el HTML en un iframe o mediante una inyección de script. El resultado final debe tener módulos mantenibles y una interfaz React.

## Arquitectura

- React administra la interfaz y el estado de aplicación; el motor administra objetos y recursos Three.js.
- Componentes pequeños con responsabilidad clara. Usar sistemas de dominio para arquitectura, mobiliario, iluminación e instalaciones.
- Mantener Three.js imperativo inicialmente. Evaluar React Three Fiber sólo como una decisión posterior independiente.
- Unificar las dependencias de Three.js y sus addons cuando exista comparación visual de referencia. El runtime congelado es transitorio.
- Declarar montaje y desmontaje: cancelar RAF, quitar listeners, desconectar observadores y liberar geometrías, materiales, texturas, controles y renderer.
- Evitar actualizaciones React por cada frame. La interacción continua queda dentro del motor.
- No usar `any` para resolver errores de tipos de manera generalizada.
- Sustituir los identificadores cortos y valores geométricos sin nombre progresivamente, sin cambiar sus valores.

## Criterios de entrega

- Build y comprobación de tipos correctos.
- Comparar cámaras, viewport, fecha y hora idénticos; no confundir el horario actual con un cambio visual.
- Probar PB, PA y ambas; día/noche; hover de muros; capas y selección eléctrica.
- Cada luminaria instalada debe aportar luz. Conservar el bloqueo por ambiente y planta y los puntos provisionales de claraboyas.
- Evitar recompilar shaders en el cambio día/noche. El modelo actual cambia intensidades y uniforms conservando la estructura del shader.
- Una sola instancia del motor tras montar, desmontar y volver a montar en React Strict Mode.
- Documentar límites reales y diferencias pendientes. No declarar equivalencia exacta basándose sólo en que compila.
