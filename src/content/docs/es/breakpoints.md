---
title: Breakpoints e imágenes
description: >-
  Por qué algunos (pero no todos) los puntos de interrupción son importantes
  para tus imágenes
taskInputHash: dc5b5ae442126362
lang: es
---
### Antecedentes

Las pantallas pequeñas y los monitores grandes necesitan diseños diferentes. Para el propósito de `srcset` y `sizes`, necesitamos saber en qué punto cambia el diseño.

Los desarrolladores web deben decidir qué se encoje, se oculta o se reubica en pantallas más pequeñas - o más comúnmente, qué se expande, se revela o se agrega en pantallas más grandes. También tienen muy poca información para trabajar. ¿Está el usuario en una tableta o en un teléfono en modo horizontal - o en una ventana de pequeño navegador?

Tenemos que elegir un ancho de viewport arbitrario donde cambie el diseño. Esto se llama un **punto de interrupción**. Es un número arbitrario de píxeles CSS ([no píxeles de dispositivo](/es/pixeles-no-pixeles)). Polypane tiene un [gran artículo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sobre los puntos de interrupción utilizados comúnmente.

Algunas imágenes (como logotipos, iconos o botones) podrían ser inmunes a los cambios de diseño causados por estos puntos de interrupción (y estar bien con [descriptores de densidad de srcset](/es/descriptores-de-densidad)). 

Las imágenes del contenido principal estarán limitadas por el tamaño de su contenedor. Por lo general, el área de contenido principal de una página se limitará a un ancho determinado en las pantallas más grandes, un `max-width`, pero en las pantallas pequeñas, el área de contenido principal llenará todo el viewport.

Si tiene más de una columna en algunos puntos de interrupción, será más difícil calcular las reglas de tamaño efectivas, ya que el porcentaje del ancho de viewport que ocupa la imagen cambiará.

### El método fácil

Dicho esto, no te compliques demasiado. Probablemente estarás muy bien con la siguiente aproximación:

1. ¿A qué tamaño el columna principal (o el contenedor de la imagen) deja de crecer? Hasta ese ancho de viewport, podemos usar `100vw` para el atributo `sizes` de la imagen para indicar que la imagen ocupa el 100% del ancho del viewport.
2. ¿Cuál es el ancho máximo que el contenedor jamás alcanza? Podemos fijar eso como una `width` fija para todo lo demás.

Si tu respuesta a 1 fue 700px y tu respuesta a 2 fue 800px, puedes usar el siguiente atributo `sizes`:

```html
<!-- Estos son píxeles CSS, no píxeles de dispositivo o de imagen. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> Pensarías que el navegador podría manejar todos estos cálculos por nosotros en función de CSS. Desafortunadamente, los navegadores están ávidos de elegir una URL de imagen *antes* de que se descarguen las hojas de estilo. Así que tenemos que hacer los cálculos nosotros mismos, y les sirve bien si no lo hacemos perfecto.
