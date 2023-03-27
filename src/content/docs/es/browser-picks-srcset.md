---
title: Cómo el navegador elige
description: Cómo el navegador elige entre las imágenes listadas en el atributo srcset
taskInputHash: 5312c6959851b72f
lang: es
---
¿Cómo el navegador elige entre las imágenes listadas en el atributo srcset? Aquí se muestra paso a paso cada caso, con ejemplos tanto para especificaciones de ancho como de densidad y cómo el navegador decide basándose en el dispositivo y el tamaño de la ventana gráfica.

- Al usar el atributo `srcset` en HTML, el navegador utiliza un conjunto de reglas para elegir la imagen más apropiada de una lista de fuentes proporcionadas. Estas reglas dependen tanto de las características de visualización del dispositivo (resolución, densidad de píxeles) como del tamaño de la ventana gráfica. El atributo `srcset` te permite especificar diferentes imágenes basadas en el ancho (usando el descriptor `w`) o la densidad de píxeles (usando el descriptor `x`). Veamos cada caso con ejemplos.

1. Descriptor de ancho (`w`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="ejemplo-pequeño.jpg" srcset="ejemplo-pequeño.jpg 400w, ejemplo-mediano.jpg 800w, ejemplo-grande.jpg 1600w" alt="Imagen de Ejemplo">

```

El navegador seguirá estos pasos:

a. Determinar la DPD (Relación de Píxeles del Dispositivo). Por ejemplo, una pantalla estándar tiene una DPD de 1, mientras que una pantalla de alta resolución (Retina) tiene una DPD de 2 o más.

b. Calcular el ancho efectivo para cada imagen en el `srcset`. Multiplica el descriptor de ancho por el DPD. Para un dispositivo con una DPD de 1:

- ejemplo-pequeño.jpg: 400 \* 1 = 400px

- ejemplo-mediano.jpg: 800 \* 1 = 800px

- ejemplo-grande.jpg: 1600 \* 1 = 1600px

c. Comparar los anchos efectivos con el ancho de la ventana gráfica. Supongamos que el ancho de la ventana gráfica es de 420px. El navegador elegirá la imagen más pequeña con un ancho efectivo mayor o igual al ancho de la ventana gráfica. En este caso, seleccionará `ejemplo-mediano.jpg`.

2. Descriptor de densidad de píxeles (`x`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="ejemplo-1x.jpg" srcset="ejemplo-1x.jpg 1x, ejemplo-2x.jpg 2x, ejemplo-3x.jpg 3x" alt="Imagen de Ejemplo">

```

El navegador seguirá estos pasos:

a. Determinar la DPD (Relación de Píxeles del Dispositivo). Por ejemplo, una pantalla estándar tiene una DPD de 1, mientras que una pantalla de alta resolución (Retina) tiene una DPD de 2 o más.

b. Comparar la DPD del dispositivo con los descriptores `x` en el `srcset`. En este caso, tenemos tres imágenes con los siguientes descriptores:

- ejemplo-1x.jpg: 1x

- ejemplo-2x.jpg: 2x

- ejemplo-3x.jpg: 3x

c. Elegir la imagen con el descriptor `x` que esté más cerca de la DPD del dispositivo. Para un dispositivo con una DPD de 1, el navegador seleccionará `ejemplo-1x.jpg`. Para un dispositivo con una DPD de 2, elegirá `ejemplo-2x.jpg`, etc.

Es importante tener en cuenta que también puedes usar el atributo `sizes` en combinación con el atributo `srcset` para proporcionar más información sobre cómo se mostrará la imagen en diferentes anchos de ventana gráfica. Esto es particularmente útil al usar el descriptor de ancho (`w`). Aquí tienes un ejemplo:

```html

<img src="ejemplo-pequeño.jpg" srcset="ejemplo-pequeño.jpg 400w, ejemplo-mediano.jpg 800w, ejemplo-grande.jpg 1600w" sizes="(ancho-máximo: 480px) 100vw, (ancho-máximo: 960px) 50vw,```
