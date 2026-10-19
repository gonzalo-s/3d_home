# Contexto que debe conservarse

## Coordenadas y dimensiones

- Unidades: metros. En los datos, profundidad positiva `z`; en Three.js, profundidad = `-z`, con `y` vertical.
- Base PA a 3,40 m. Altura interior general 2,40 m; cielorraso del living aproximadamente 2,90 m; baño PB 2,30 m, con quiebres bajo escalera.
- Las diferencias de cielorraso no crean distintas alturas exteriores de muros y techo.
- Hay espesores reales en pisos/superficies para evitar superposición y transparencia entre plantas. Conservar el hueco de escalera.
- Las dimensiones y posiciones exactas deben extraerse de los datos y del código, no de esta descripción resumida.

## Arquitectura y mobiliario

- Ventanas exteriores y aberturas correspondientes con rejas. Puerta balcón de cocina/comedor centrada con la mesa y radiadores a sus lados.
- No agregar una segunda salida cocina-jardín que no existe.
- Isla de cocina reducida y posición corregida. Mesada sobre toda la pared compartida con el baño.
- Escalera de ancho constante, baño bajo escalera sin hoja de puerta, nicho empotrado y radiador blanco de dos elementos.
- Vestidor principal de pared a pared; cama principal y vanitory del baño chico según correcciones derivadas del CAD.
- Aires PA: cuatro unidades interiores. El principal está sobre el muro del frente, asociado al punto PA-04.
- Techo y piso de patio hasta la mitad de la puerta balcón. Piso exterior con color y patrón unificados.
- Arbustos y árbol terminan cerca del techo del patio; espacio libre hacia el portón. Árbol menos frondoso.

## Interfaz y comportamiento

- Cada uno de los siete ambientes con dibujo generado ofrece `Vista perspectiva` y `Planta 2D` en el mismo panel, también desde los iconos de cámara. Las plantas se basan en capturas ortográficas del modelo con un corte horizontal temporal a 1,15 m sobre PA para mostrar aberturas; no cambian la escena de la aplicación. Mapeo en `src/data/room-reference-views.json`; capturas y prompts en `docs/ROOM_PLAN_PROMPTS.json`. Son imágenes esquemáticas: acabados, grosor gráfico de muros y peldaños dibujados no constituyen cotas verificadas.

- Las vistas generales de principal, baño principal, vestidor, pasillo, cuarto del fondo, cuarto del medio y baño chico usan dibujos de estilo CAD generados a partir de las fotos originales. Son referencias esquemáticas sin escala, no levantamientos medidos. Assets en `public/assets/references/cad/`; prompts en `docs/ROOM_REFERENCE_PROMPTS.json`. Esta sustitución visual no modifica la geometría del motor. Los JPG sustituidos ya no se sirven; la referencia HTML v39 conserva los originales. `docs/package-sha256.json` documenta el paquete original, no estos assets nuevos.

- Botones independientes PB/PA; ambas plantas pueden verse juntas. Sin separación vertical ni ajuste de alturas.
- Etiquetas ocultas por defecto, activadas por checkbox. Textos explicativos colapsados y detalles eléctricos al seleccionar.
- Hover de paredes exteriores con transparencia; interacción táctil correspondiente.
- Fecha/hora iniciales actuales en Argentina. Latitud, longitud, orientación, estación y hora configurables.
- Sol visible sin rayos ni etiqueta, alejado de la casa. Luz solar de amarillo cálido suave. Calle de referencia visible.

## Iluminación v39

- 35 luminarias interiores y 5 exteriores: 40 contribuciones en el shader. El snapshot permite identificar todas.
- Los puntos provisionales PA-27, PA-30, PA-39, PA-40 y PB-45 se conservan como referencias eléctricas; no tienen luminarias instaladas.
- Claraboyas: baño del fondo, vestidor y pasillo/escalera. La última aporta luz diurna también a PB. Tamaños aproximados según captura.
- PA-29 y PA-36 retirados. PA-28 y PA-38 movidos; PA-32 reubicado y PA-32-B agregado.
- PA-41 es un aplique de pared en el baño chico de PA.
- PB-44 y PB-74 son apliques de pared hacia abajo, a 2,10 m.
- PB-L01 es el spot agregado frente a la puerta principal, en x=4,30 y profundidad=8,185, vinculado al ramal PB-CAD-R11. **PB-76 ya existe como toma de la isla; no reutilizar ese ID.**
- Las luces del frente se centran con puerta y portón: x=6,675 y x=9,305; ambas a 2,25 m. Las exteriores son blancas.
- PB-55, PB-56 y PB-57 son referencias exteriores sin luminarias instaladas junto a los arbustos.

## Límites de la simulación

La luz solar usa bloqueadores físicos de techo/cielorraso aunque esas superficies no se muestren. Las claraboyas usan aportes difusos aproximados; no son huecos de techo físicamente reconstruidos para trazado de rayos.

La iluminación artificial actual usa un shader difuso con límites por ambiente y planta, no shadow maps independientes por cada luminaria. Impide el paso directo entre ambientes clasificados, pero no es una simulación fotométrica exacta ni calcula sombras precisas de todos los muebles. El living y la cocina/comedor comparten zona de iluminación abierta en PB.

Al anochecer cambian intensidades y uniforms, no la cantidad de luces nativas activas. Esto evita recompilar todos los materiales. Conservar ese comportamiento.

Los recorridos eléctricos añadidos o adaptados se marcan interpretados y van principalmente por cielorraso, con bajadas a los puntos. No afirmar que estos trazos reconstruyen con exactitud el recorrido oculto del cableado real.
