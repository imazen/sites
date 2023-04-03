---
title: Puntos de quiebre e imágenes
description: >-
  Por qué algunos (pero no todos) los puntos de quiebre son importantes para tus
  imágenes
taskInputHash: d63995938314e702
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Antecedentes

Las pantallas pequeñas y los monitores grandes requieren diseños diferentes. Para el propósito de `srcset` y `sizes`, necesitamos saber en qué punto cambia el diseño.

Los desarrolladores web deben decidir qué reducir, ocultar o reubicar en pantallas más pequeñas, o más comúnmente, qué expandir, revelar o agregar en pantallas más grandes. También tienen muy poca información en la que basarse. ¿Está el usuario en una tableta o en un teléfono en modo horizontal, o tiene una ventana de navegador pequeña?

Tenemos que elegir un ancho de vista previa arbitrario donde cambia el diseño. Esto se llama **punto de quiebre**. Es un número arbitrario de píxeles CSS (no píxeles de dispositivo). Polypane tiene un [excelente artículo] (https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/ # the- breakpoints-to-develop-on-in-2023) sobre los puntos de interrupción comúnmente utilizados.

Algunas imágenes (como logotipos, iconos o botones) pueden ser inmunes a los cambios de diseño causados ​​por estos puntos de quiebre (y estar bien con los [descriptores de densidad srcset](/es/ descriptores-de-densidad)).

Las imágenes de contenido principal estarán limitadas por el tamaño de su contenedor. Por lo general, el área de contenido principal de una página estará limitada a un ancho determinado en las pantallas más grandes, un `ancho máximo`, pero en pantallas pequeñas, el área de contenido principal llenará toda la vista previa.

Si tiene más de una columna en algunos puntos de quiebre, será más difícil calcular las reglas de tamaño efectivas, ya que el porcentaje del ancho de vista previa que ocupa la imagen cambiará.

### El método fácil

Dicho esto, no pienses demasiado en esto. Probablemente estarás bastante bien con la siguiente aproximación:

1. ¿A qué tamaño deja de crecer la columna principal (o el contenedor de la imagen)? Hasta ese ancho de vista previa, podemos usar `100vw` para el atributo de `sizes` de la imagen para indicar que la imagen ocupa el 100% del ancho de vista previa.
2. ¿Cuál es el ancho máximo que ese contenedor alcanza alguna vez? Podemos establecer eso como un ancho fijo para todo lo demás.

Si tu respuesta a 1 era 700 px y tu respuesta a 2 era 800 px, puedes usar el siguiente atributo `sizes`:

```html
<!-- Estos son píxeles CSS, no píxeles de dispositivo o de imagen. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Uno pensaría que el navegador podría manejar todos estos cálculos fácilmente para nosotros en función de la CSS. Desafortunadamente, los navegadores están ansiosos por elegir de manera agresiva una URL de imagen *antes* de que se descarguen las hojas de estilo. Por lo tanto, tenemos que hacer los cálculos nosotros mismos, y les va bien si no lo hacemos perfecto.
