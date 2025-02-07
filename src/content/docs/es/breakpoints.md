---
taskInputHash: 76f8b79781bca7a7
title: Puntos de quiebre e imágenes
description: >-
  Por qué algunos (pero no todos) puntos de quiebre son importantes para tus
  imágenes
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
### Antecedentes

Pantallas pequeñas y monitores grandes necesitan diferentes diseños. Para el propósito de `srcset` y `sizes`, necesitamos saber en qué punto el diseño cambia.

Los desarrolladores web deben decidir qué reducir, ocultar o reubicar en pantallas más pequeñas - o más comúnmente, qué expandir, revelar o agregar en pantallas más grandes. También tienen muy poca información para continuar. ¿Está el usuario en una tableta o un teléfono en modo horizontal - o en una ventana de navegador pequeña?

Tenemos que elegir un ancho de viewport arbitrario donde el diseño cambia. Esto se llama un **punto de quiebre**. Es un número arbitrario de píxeles CSS ([no píxeles de dispositivo](/es/pixels-not-pixels)). Polypane tiene un [gran artículo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sobre los puntos de quiebre comúnmente utilizados.

Algunas imágenes (como logotipos, íconos o botones) podrían ser inmunes a los cambios de diseño causados por estos puntos de quiebre (y estar bien con [descriptores de densidad de srcset](/es/density-descriptors)).

Las imágenes de contenido principal estarán limitadas por el tamaño de su contenedor. Típicamente, el área de contenido principal de una página estará limitada a un cierto ancho en las pantallas más grandes, un `max-width`, pero en pantallas pequeñas, el área de contenido principal llenará todo el viewport.

Si tienes más de una columna en algunos puntos de quiebre, será más difícil calcular las reglas de tamaño efectivas, ya que el porcentaje del ancho de viewport que la imagen ocupa cambiará.

### El método fácil

Dicho esto, no lo pienses demasiado. Probablemente estarás muy bien con la siguiente aproximación:

1. ¿A qué tamaño deja de crecer la columna principal (o el contenedor de la imagen)? Hasta ese ancho de viewport, podemos usar `100vw` para el atributo `sizes` de la imagen para decir que la imagen ocupa el 100% del ancho del viewport.  
2. ¿Cuál es el ancho máximo que ese contenedor alcanza alguna vez? Podemos establecer eso como un `width` fijo para todo lo demás.

Si tu respuesta a 1 fue 700 píxeles y tu respuesta a 2 fue 800 píxeles, puedes usar el siguiente atributo `sizes`:

```html
<!-- Estos son píxeles CSS, no píxeles de dispositivo ni píxeles de imagen. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Podrías pensar que el navegador podría manejar muy bien todos estos cálculos por nosotros basándose en el CSS. Desafortunadamente, los navegadores están agresivamente ansiosos por elegir una URL de imagen *antes* de que las hojas de estilo se descarguen. Así que tenemos que hacer los cálculos nosotros mismos, y se lo merecen si no lo hacemos perfectos.
