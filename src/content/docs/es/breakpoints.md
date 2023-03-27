---
title: Puntos de quiebre e imágenes
description: >-
  Por qué algunos (pero no todos) los puntos de quiebre son importantes para tus
  imágenes
taskInputHash: a2d707924ad7745c
lang: es
---
### Antecedentes

Las pantallas pequeñas y los monitores grandes necesitan diseños diferentes. Para el propósito de `srcset` y `sizes`, necesitamos descender

Los desarrolladores web deben decidir qué encoger, ocultar o reubicar en pantallas más pequeñas, o más comúnmente, qué expandir, revelar o agregar en pantallas más grandes. También tienen muy poca información. ¿Está el usuario en una tableta o en un teléfono en modo horizontal, o en una ventana de navegador pequeña?

Tenemos que elegir anchuras de ventana arbitrarias donde cambie el diseño. Esto se llama un **punto de quiebre**. Es un número arbitrario de píxeles CSS ([no píxeles de dispositivo](/es/pixels-not-pixels)). Polypane tiene un [gran artículo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#los-puntos-de-quiebre-a-desarrollar-en-2023) sobre los puntos de quiebre comúnmente utilizados.

Algunas imágenes (como logotipos, iconos o botones) podrían ser inmunes a los cambios de diseño causados por estos puntos de quiebre (y estar bien con los [descriptores de densidad srcset](/es/density-descriptors)).

Las imágenes de contenido principal estarán limitadas por el tamaño de su contenedor. Por lo general, el área de contenido principal de una página se limitará a un ancho determinado en las pantallas más grandes, un `max-width`, pero en pantallas pequeñas, el área de contenido principal llenará toda la ventana gráfica.

Si tienes más de una columna en algunos puntos de quiebre, será más difícil calcular las reglas de tamaño efectivas, ya que el porcentaje del ancho de la ventana gráfica que la imagen ocupa cambiará.

### El método fácil

Dicho esto, no te compliques demasiado. Probablemente estarás muy bien con la siguiente aproximación:

1. ¿A qué tamaño deja de crecer la columna principal (o el contenedor de la imagen)? Hasta esa anchura de ventana gráfica, podemos utilizar `100vw` para el atributo `sizes` de la imagen para indicar que la imagen ocupa el 100% del ancho de la ventana gráfica.
2. ¿Cuál es el ancho máximo que alcanza el contenedor? Podemos establecer eso como un `width` fijo para todo lo demás.

Si tu respuesta a 1 fue de 700 px y tu respuesta a 2 fue de 800 px, puedes utilizar el siguiente atributo `sizes`:

```html
<!-- Estos son píxeles CSS, no píxeles de dispositivo ni píxeles de imagen.  -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```


> Uno pensaría que el navegador podría manejar correctamente todos estos cálculos para nosotros en función de la hoja de estilos CSS. Desafortunadamente, los navegadores están ansiosos por elegir una URL de imagen *antes* de que se descarguen las hojas de estilo. Así que tenemos que hacer los cálculos nosotros mismos, y está bien si no lo hacemos perfecto.
