# Interfaz móvil

El visor mantiene una sola instancia del motor y conserva los controles existentes. Los paneles React no desmontan los inputs que utiliza el motor al cambiar de herramienta.

## Navegación

- En teléfonos, la escena ocupa el espacio principal. La barra superior permite activar PB/PA y alternar 3D/vista desde arriba.
- El menú inferior abre tres grupos: Explorar, Luz y sol y Capas. Cada panel tiene scroll vertical propio y puede cerrarse con su botón, tocando fuera o con Escape.
- Mientras un panel móvil está abierto, la escena y el encabezado quedan inertes. El foco de teclado permanece dentro de los controles.
- Se aplica el mismo diseño en teléfonos en horizontal hasta 1000 px de ancho y 500 px de alto. En escritorio se conserva el panel lateral.
- La proyección de cámara se adapta a pantallas estrechas para mantener margen alrededor de la casa; no se modifican posiciones ni medidas del modelo.
- Los controles táctiles tienen al menos 44 px de alto; los campos móviles usan texto de 16 px. Se respetan las áreas seguras del dispositivo y se permite el zoom del navegador.

## Referencias

`ReferenceDialog` conecta el atributo `hidden` que utiliza el motor con un diálogo modal nativo. Las imágenes de los iconos de cámara y de los planos de instalaciones comparten el mismo diálogo.

- Cierre con botón, Escape o gesto que empieza y termina fuera del popup. Un clic interior o un arrastre que sale desde la imagen no lo cierra.
- Foco contenido en el modal y fondo inerte; al cerrar se recupera el acceso a los controles.
- Vista ajustada al espacio disponible y botón Ampliar/Ajustar para inspeccionar detalles desplazándose por la imagen.
- Indicaciones de carga y error. Las imágenes se abren desde los iconos de cámara; no hay un selector de ambientes separado.
- El icono de oficina utiliza su dibujo suministrado.

## Comprobación

Verificar en producción local autenticada: 390×844, 320×568, 844×390, 820×1180 y 1440×1000. Comprobar ausencia de overflow horizontal, plantas, vistas, paneles, controles de sol y electricidad, cambio de referencias, ampliación, cierre exterior/interior, Escape y foco de teclado. Confirmar también el redimensionado del canvas y que siga habiendo un único canvas al cambiar de panel o de orientación.

Las comprobaciones con Chromium y emulación táctil no sustituyen las pruebas en Safari/iOS y Android físicos. El rendimiento del modelo depende del dispositivo; estos cambios no implican haber optimizado todos los recursos WebGL.

Comprobación realizada sobre un build Next.js de producción con sesiones sintéticas locales: los cinco tamaños anteriores pasaron navegación, cierre exterior con toque, cambio de referencia, ampliación, Escape y foco. También se comprobó rotación con el modal abierto, regreso a escritorio, referencias de oficina e instalaciones y un único canvas después de cambiar herramientas. Build, comprobación de tipos y pruebas de reglas de acceso correctos. La limpieza posterior retiró los tres JPG eliminados del manifiesto y registró los dibujos activos de oficina y placares; la validación general de datos vuelve a pasar.

## Ajustes de sol y jerarquía de capas

En móvil, Luz y sol comienza con el deslizador horario y una flecha para desplegar la configuración completa. Los controles avanzados permanecen montados al contraerlos y conservan sus valores. El fondo no se oscurece mientras se ajusta la luz. En escritorio la configuración completa permanece visible.

Las capas se agrupan en tarjetas de Electricidad, Instalaciones y Red y datos, con un interruptor de grupo y opciones subordinadas indentadas. Todos los grupos y opciones empiezan apagados. Activar un grupo abre sus opciones, sin seleccionar automáticamente ninguna capa. Desactivarlo oculta todos sus overlays y conserva las opciones elegidas para una próxima activación. Los planos y las explicaciones se consultan aparte dentro del grupo. Los muebles, las luminarias físicas y las cámaras del modelo no son overlays de estas tarjetas.

La jerarquía de capas se comprobó contra los grupos Three.js de PB/PA: arranque oculto, activación independiente, apagado por grupo y selección conservada. Se verificaron deslizador/fecha/hora y expansión en móvil, configuración completa en escritorio, tamaños 320×568, 390×844, 844×390 y 1440×1000, y montaje/desmontaje único en Strict Mode. También pasaron las comprobaciones de interfaz sobre Next.js de producción en teléfono y escritorio, incluido el popup de planos fuente.

El selector de referencias y su pestaña móvil se retiraron por duplicar los iconos de cámara. Los detalles de precisión del modelo permanecen en Explorar. Al cerrar una imagen, si el control anterior ya no está visible, el foco vuelve al botón de vista 3D.
