---
title: Cómo el navegador elige
description: Cómo el navegador elige entre las imágenes listadas en el atributo srcset
taskInputHash: 5d7773a8c6385fd7
lang: es
---
¿Cómo escoge el navegador las imágenes listadas en el atributo srcset? Aquí hay un paso a paso, con ejemplos tanto para las especificaciones de ancho como de densidad y cómo el navegador decide según el dispositivo y el viewport.

- Cuando se utiliza el atributo `srcset` en HTML, el navegador utiliza un conjunto de reglas para escoger la imagen más apropiada de una lista de fuentes proporcionadas. Estas reglas dependen de las características de visualización del dispositivo (resolución, densidad de píxeles) y del tamaño del viewport. El atributo `srcset` permite especificar diferentes imágenes basadas en el ancho (usando el descriptor `w`) o la densidad de píxeles (usando el descriptor `x`). Veamos cada caso con ejemplos.

1\. Descriptor de ancho (`w`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Ejemplo de imagen">

```

El navegador seguirá estos pasos:

a. Determinar el DPR (ratio de píxeles del dispositivo). Por ejemplo, una pantalla estándar tiene un DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene un DPR de 2 o más.

b. Calcular el ancho efectivo para cada imagen en el `srcset`. Multiplicar el descriptor de ancho por el DPR. Para un dispositivo con un DPR de 1:

- example-small.jpg: 400 \* 1 = 400píxeles

- example-medium.jpg: 800 \* 1 = 800píxeles

- example-large.jpg: 1600 \* 1 = 1600píxeles

c. Comparar los anchos efectivos con el ancho del viewport. Supongamos que el ancho del viewport es de 420píxeles. El navegador elegirá la imagen más pequeña con un ancho efectivo mayor o igual al ancho del viewport. En este caso, seleccionará `example-medium.jpg`.

1\. Descriptor de densidad de píxeles (`x`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Ejemplo de imagen">

```

El navegador seguirá estos pasos:

a. Determinar el DPR (ratio de píxeles del dispositivo). Por ejemplo, una pantalla estándar tiene un DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene un DPR de 2 o más.

b. Comparar el DPR del dispositivo con los descriptores `x` en el `srcset`. En este caso, tenemos tres imágenes con los siguientes descriptores:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Elegir la imagen con el descriptor `x` que esté más cerca del DPR del dispositivo. Para un dispositivo con un DPR de 1, el navegador seleccionará `example-1x.jpg`. Para un dispositivo con un DPR de 2, elegirá `example-2x.jpg`, y así sucesivamente.

Es importante tener en cuenta que también se puede utilizar el atributo `sizes` en combinación con el atributo `srcset` para proporcionar más información sobre cómo se mostrará la imagen en diferentes anchos de viewport. Esto es particularmente útil cuando se utiliza el descriptor de ancho (`w`). Aquí hay un ejemplo:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(ancho-máximo: 480px) 100vw, (ancho-máximo: 960px) 50vw,

```
