---
title: Cómo elige el navegador
description: Cómo elige el navegador entre las imágenes listadas en el atributo srcset
taskInputHash: 78ffb2179558549b
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
¿Cómo elige el navegador entre las imágenes listadas en el atributo srcset? Aquí hay una explicación paso a paso, con ejemplos tanto para especificaciones de ancho como de densidad y cómo decide el navegador en función del dispositivo y del tamaño de la ventana gráfica.

- Al usar el atributo `srcset` en HTML, el navegador utiliza un conjunto de reglas para elegir la imagen más adecuada de una lista de fuentes proporcionadas. Estas reglas dependen tanto de las características de visualización del dispositivo (resolución, densidad de píxeles) como del tamaño de la ventana gráfica. El atributo `srcset` le permite especificar imágenes diferentes según el ancho (usando el descriptor `w`) o la densidad de píxeles (usando el descriptor `x`). Repasemos cada caso con ejemplos.

1\. Descriptor de ancho (`w`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Ejemplo de imagen">

```

El navegador seguirá estos pasos:

a. Determine la DPR (Relación de píxeles del dispositivo) del dispositivo. Por ejemplo, una pantalla estándar tiene una DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene una DPR de 2 o más.

b. Calcule el ancho efectivo para cada imagen en el `srcset`. Multiplique el descriptor de ancho por la DPR. Para un dispositivo con una DPR de 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Compare los anchos efectivos con el ancho de la ventana gráfica. Supongamos que la anchura de la ventana gráfica es de 420 px. El navegador elegirá la imagen más pequeña con un ancho efectivo mayor o igual que el ancho de la ventana gráfica. En este caso, seleccionará `example-medium.jpg`.

2\. Descriptor de densidad de píxeles (`x`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Ejemplo de imagen">

```

El navegador seguirá estos pasos:

a. Determine la DPR del dispositivo. Por ejemplo, una pantalla estándar tiene una DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene una DPR de 2 o más.

b. Compare la DPR del dispositivo con los descriptores `x` en el `srcset`. En este caso, tenemos tres imágenes con los siguientes descriptores:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Elija la imagen con el descriptor `x` que esté más cerca de la DPR del dispositivo. Para un dispositivo con una DPR de 1, el navegador seleccionará `example-1x.jpg`. Para un dispositivo con una DPR de 2, elegirá `example-2x.jpg`, y así sucesivamente.

Es importante tener en cuenta que también puede utilizar el atributo `sizes` en combinación con el atributo `srcset` para proporcionar más información sobre cómo se mostrará la imagen en diferentes anchos de ventana gráfica. Esto es particularmente útil cuando se utiliza el descriptor de ancho (`w`). Aquí hay un ejemplo:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
