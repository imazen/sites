---
taskInputHash: 4432359efd9c7f69
title: Puntos de interrupción e imágenes
description: >-
  Por qué algunos (pero no todos) puntos de interrupción importan para tus
  imágenes
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
### Antecedentes

Las pantallas pequeñas y los monitores grandes necesitan diferentes diseños. Para el propósito de `srcset` y `sizes`, necesitamos saber en qué punto cambia el diseño.

Los desarrolladores web deben decidir qué reducir, ocultar o reubicar en pantallas más pequeñas, o más comúnmente, qué ampliar, revelar o agregar en pantallas más grandes. También tienen muy poca información con la cual trabajar. ¿Está el usuario en una tableta o en un teléfono en modo horizontal, o en una ventana de navegador pequeña?

Tenemos que elegir un ancho de vista arbitrario donde cambia el diseño. Esto se llama un **punto de interrupción (breakpoint)**. Es un número arbitrario de píxeles CSS ([no píxeles de dispositivo](/es/pixels-not-pixels)). Polypane tiene un [artículo excelente](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sobre puntos de interrupción comúnmente utilizados.

Algunas imágenes (como logotipos, íconos o botones) podrían ser inmunes a los cambios de diseño causados por estos puntos de interrupción (y estar bien con [descriptores de densidad de srcset](/es/density-descriptors)). 

Las imágenes del contenido principal estarán limitadas por el tamaño de su contenedor. Típicamente, el área de contenido principal de una página estará limitada a un cierto ancho en las pantallas más grandes, un `max-width`, pero en pantallas pequeñas, el área de contenido principal llenará toda la ventana gráfica.

Si tienes más de una columna en algunos puntos de interrupción, será más difícil calcular las reglas de dimensionamiento efectivas, ya que cambiará el porcentaje del ancho de la ventana gráfica que ocupa la imagen.

### El método fácil

Dicho esto, no pienses demasiado en esto. Probablemente estarás muy bien con la siguiente aproximación:

1. ¿A qué tamaño deja de crecer la columna principal (o el contenedor de la imagen)? Hasta ese ancho de vista, podemos usar `100vw` para el atributo `sizes` de la imagen para decir que la imagen ocupa el 100% del ancho de la ventana gráfica.  
2. ¿Cuál es el ancho máximo que alcanza jamás ese contenedor? Podemos establecerlo como un `width` fijo para todo lo demás.

Si tu respuesta a 1 fue 700px y tu respuesta a 2 fue 800px, puedes usar el siguiente atributo `sizes`:

```html
<!-- Estos son píxeles CSS, no píxeles de dispositivo ni píxeles de imagen. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Pensarías que el navegador podría manejar cálculos como estos de manera eficiente basándose en el CSS. Desafortunadamente, los navegadores están agresivamente ansiosos por elegir una URL de imagen *antes* de que se descarguen las hojas de estilo. Así que debemos hacer los cálculos nosotros mismos, y les vendrá bien si no lo hacemos perfecto.
