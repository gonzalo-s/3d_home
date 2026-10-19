Quiero migrar este proyecto a una SPA con Next.js, React y TypeScript. Debe verse y funcionar como la referencia v39, con código modular, responsabilidades pequeñas y buenas prácticas.

Primero leé AGENTS.md, README.md y los documentos de docs/. Ya hay una base ejecutable con Vite y las imágenes y datos separados. No empieces reconstruyendo la casa desde cero.

1. Ejecutá la base, revisá los archivos y registrá sus capacidades y limitaciones. Contrastá el estado final con current-model-snapshot.json.
2. Proponé brevemente el orden de extracción y comenzá con la estructura Next.js y un componente cliente que monte el motor existente. El destino debe ser una aplicación real, no un iframe ni el HTML completo inyectado.
3. Separá arquitectura, mobiliario, materiales, cámaras, iluminación, instalaciones e interacción. Pasá los paneles y controles a componentes React. Introducí tipos para coordenadas, plantas, luminarias, puntos y recorridos.
4. Unificá Three.js y addons, retirando el runtime congelado y la reserva artificial de IDs sólo cuando las clases pertenezcan a la misma instancia de Three.js. Conservá la compatibilidad visual al hacerlo.
5. Consolidá los datos de entrada y las correcciones en un modelo canónico. Evitá duplicar PB-L01, PA-32-B y recorridos al usar el snapshot.
6. Sustituí window.__model y las consultas directas a controles HTML por una API explícita y estado de aplicación. Implementá un desmontaje completo.
7. Verificá build, tipos, equivalencia visual y rendimiento, especialmente al anochecer y al montar/desmontar el visor.

No cambies medidas, distribución, estilo visual, ubicaciones ni prestaciones durante la migración. No agregues login, AR ni despliegue en esta etapa. No es necesario un backend para conservar las funciones actuales.

Antes de terminar, detallá qué migraste, qué validaste, qué limitaciones persisten y cómo ejecutar el resultado.
