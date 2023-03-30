---
title: Cómo elige el navegador
description: Cómo elige el navegador entre imágenes listadas en el atributo srcset
taskInputHash: 5d7773a8c6385fd7
lang: es
---
¿Cómo elige el navegador entre las imágenes listadas en el atributo `srcset`? Aquí se explican los pasos, con ejemplos tanto para especificaciones de ancho como de densidad, y cómo el navegador decide según el dispositivo y el tamaño de ventana.

- Al utilizar el atributo `srcset` en HTML, el navegador sigue un conjunto de reglas para elegir la imagen más adecuada de una lista de fuentes proporcionadas. Estas reglas dependen tanto de las características de visualización del dispositivo (resolución, densidad de píxeles) como del tamaño de la ventana de visualización. El atributo `srcset` permite especificar diferentes imágenes según el ancho (usando el descriptor `w`) o la densidad de píxeles (usando el descriptor `x`). Veamos cada caso con ejemplos.

1\. Descriptor de ancho (`w`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="ejemplo-pequeño.jpg" srcset="ejemplo-pequeño.jpg 400w, ejemplo-mediano.jpg 800w, ejemplo-grande.jpg 1600w" alt="Imagen de Ejemplo">

```

El navegador seguirá estos pasos:

a. Determinar el DPR (Ratio de Píxeles del Dispositivo, por sus siglas en inglés) del dispositivo. Por ejemplo, una pantalla estándar tiene un DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene un DPR de 2 o superior.

b. Calcular el ancho efectivo para cada imagen en el `srcset`. Multiplique el descriptor de ancho por el DPR. Para un dispositivo con un DPR de 1:

- ejemplo-pequeño.jpg: 400 \* 1 = 400 píxeles

- ejemplo-mediano.jpg: 800 \* 1 = 800 píxeles

- ejemplo-grande.jpg: 1600 \* 1 = 1600 píxeles

c. Compare los anchos efectivos con el ancho de la ventana de visualización. Supongamos que el ancho de la ventana de visualización es de 420 píxeles. El navegador elegirá la imagen más pequeña con un ancho efectivo mayor o igual al ancho de ventana de visualización. En este caso, seleccionará `ejemplo-mediano.jpg`.

2\. Descriptor de densidad de píxeles (`x`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="ejemplo-1x.jpg" srcset="ejemplo-1x.jpg 1x, ejemplo-2x.jpg 2x, ejemplo-3x.jpg 3x" alt="Imagen de Ejemplo">

```

El navegador seguirá estos pasos:

a. Determinar el DPR (Ratio de Píxeles del Dispositivo). Por ejemplo, una pantalla estándar tiene un DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene un DPR de 2 o superior.

b. Comparar el DPR del dispositivo con los descriptores `x` en el `srcset`. En este caso, tenemos tres imágenes con los siguientes descriptores:

- ejemplo-1x.jpg: 1x

- ejemplo-2x.jpg: 2x

- ejemplo-3x.jpg: 3x

c. Elegir la imagen con el descriptor `x` más cercano al DPR del dispositivo. Para un dispositivo con un DPR de 1, el navegador seleccionará `ejemplo-1x.jpg`. Para un dispositivo con un DPR de 2, elegirá `ejemplo-2x.jpg`, y así sucesivamente.

Es importante tener en cuenta que también se puede utilizar el atributo `sizes` en combinación con el atributo `srcset` para proporcionar más información sobre cómo se mostrará la imagen en diferentes anchos de ventana. Esto es especialmente útil cuando se utiliza el descriptor de ancho (`w`). Aquí hay un ejemplo:

```html

<img src="ejemplo-pequeño.jpg" srcset="ejemplo-pequeño.jpg 400w, ejemplo-mediano.jpg 800w, ejemplo-grande.jpg 1600w" sizes="(ancho máximo: 480px) 100vw, (ancho máximo: 960px) 50vw,

```
