---
taskInputHash: 1672e9a4a393e297
title: Cómo elige el navegador
description: Cómo elige el navegador entre las imágenes listadas en el atributo srcset
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
¿Cómo elige el navegador entre las imágenes listadas en el atributo srcset? Aquí tienes un paso a paso, con ejemplos para especificaciones tanto de ancho como de densidad y cómo el navegador decide basado en el dispositivo y el viewport.

- Al utilizar el atributo `srcset` en HTML, el navegador usa un conjunto de reglas para elegir la imagen más apropiada de una lista de fuentes proporcionadas. Estas reglas dependen tanto de las características de la pantalla del dispositivo (resolución, densidad de píxeles) como del tamaño del viewport. El atributo `srcset` te permite especificar diferentes imágenes basadas en el ancho (utilizando el descriptor `w`) o la densidad de píxeles (utilizando el descriptor `x`). Vamos a repasar cada caso con ejemplos.

1\. Descriptor de ancho (`w`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Imagen de ejemplo">

```

El navegador seguirá estos pasos:

a. Determinar el DPR (Ratio de Píxeles del Dispositivo) del dispositivo. Por ejemplo, una pantalla estándar tiene un DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene un DPR de 2 o más.

b. Calcular el ancho efectivo para cada imagen en el `srcset`. Multiplicar el descriptor de ancho por el DPR. Para un dispositivo con un DPR de 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Comparar los anchos efectivos con el ancho del viewport. Supongamos que el ancho del viewport es 420px. El navegador elegirá la imagen más pequeña con un ancho efectivo mayor o igual al ancho del viewport. En este caso, seleccionará `example-medium.jpg`.

1\. Descriptor de densidad de píxeles (`x`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Imagen de ejemplo">

```

El navegador seguirá estos pasos:

a. Determinar el DPR (Ratio de Píxeles del Dispositivo) del dispositivo. Por ejemplo, una pantalla estándar tiene un DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene un DPR de 2 o más.

b. Comparar el DPR del dispositivo con los descriptores `x` en el `srcset`. En este caso, tenemos tres imágenes con los siguientes descriptores:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Elegir la imagen con el descriptor `x` que esté más cerca del DPR del dispositivo. Para un dispositivo con un DPR de 1, el navegador seleccionará `example-1x.jpg`. Para un dispositivo con un DPR de 2, elegirá `example-2x.jpg`, y así sucesivamente.

Es importante notar que también puedes usar el atributo `sizes` en combinación con el atributo `srcset` para proporcionar más información sobre cómo se mostrará la imagen en diferentes anchos de viewport. Esto es particularmente útil cuando se utiliza el descriptor de ancho (`w`). Aquí tienes un ejemplo:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
