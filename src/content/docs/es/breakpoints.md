---
title: Puntos de quiebre e imágenes
description: >-
  Por qué algunos (pero no todos) los puntos de quiebre son importantes para tus
  imágenes
taskInputHash: 6e341c83b88ec4e2
lang: es
---
### Antecedentes

Las pantallas pequeñas y los monitores grandes necesitan diseños diferentes. Para el propósito de `srcset` y `sizes`, necesitamos saber en qué punto cambia el diseño.

Los desarrolladores web deben decidir qué encoger, ocultar o reubicar en pantallas más pequeñas, o más comúnmente, qué expandir, revelar o agregar en pantallas más grandes. También tienen muy poca información para trabajar. ¿El usuario está en una tableta o en un teléfono en modo horizontal, o en una ventana de navegador pequeña?

Tenemos que elegir un ancho de viewport arbitrario donde cambie el diseño. Esto se llama **punto de quiebre**. Es un número arbitrario de píxeles CSS ([no de píxeles de dispositivo](/es/pixeles-no-pixeles)). Polypane tiene un [gran artículo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sobre los puntos de quiebre comúnmente utilizados.

Algunas imágenes (como logotipos o iconos o botones) podrían ser inmunes a los cambios de diseño causados por estos puntos de quiebre (y estar bien con [descriptores de densidad srcset](/es/descriptores-de-densidad)). 

Las imágenes principales de contenido estarán limitadas por el tamaño de su contenedor. Típicamente, el área principal de contenido de una página se limitará a cierto ancho en las pantallas más grandes, un `max-width`, pero en pantallas pequeñas el área principal de contenido ocupará todo el viewport.

Si tiene más de una columna en algunos puntos de quiebre, será más difícil calcular las reglas de tamaño efectivas, ya que el porcentaje del ancho de viewport que ocupa la imagen cambiará.

### El método fácil

Dicho esto, no te compliques demasiado. Probablemente estará muy bien con la siguiente aproximación:

1. ¿A qué tamaño deja de crecer la columna principal (o el contenedor de la imagen)? Hasta ese ancho de viewport, podemos usar `100vw` para el atributo `sizes` de la imagen para decir que la imagen ocupa el 100% del ancho de viewport.  
2. ¿Cuál es el ancho máximo que ese contenedor alcanza? Podemos establecer eso como un `width` fijo para todo lo demás. 

Si su respuesta a 1 fue 700px y su respuesta a 2 fue 800px, puede usar el siguiente atributo `sizes`:

```html
<!-- Estos son píxeles CSS, no píxeles de dispositivo o de imagen. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```


> Uno pensaría que el navegador podría manejar fácilmente todos estos cálculos por nosotros basándose en CSS. Desafortunadamente, los navegadores están ansiosos por elegir una URL de imagen *antes* de que se descarguen las hojas de estilo. Así que tenemos que hacer los cálculos nosotros mismos, y les sirve bien si no lo hacemos perfecto.
