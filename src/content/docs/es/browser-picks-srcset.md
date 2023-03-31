---
title: Cómo el navegador elige
description: Cómo el navegador elige entre imágenes listadas en el atributo srcset
taskInputHash: 49304fce4ac555da
lang: es
ignore: '/* cSpell:locale es,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
¿Cómo el navegador elige entre las imágenes listadas en el atributo `srcset`? Aquí hay un paso a paso, con ejemplos para especificaciones tanto de ancho como de densidad y cómo decide el navegador en función del dispositivo y el tamaño de la ventana gráfica.

- Al usar el atributo `srcset` en HTML, el navegador utiliza un conjunto de reglas para elegir la imagen más apropiada de una lista de fuentes proporcionadas. Estas reglas dependen tanto de las características de la pantalla del dispositivo (resolución, densidad de píxeles), como del tamaño de la ventana gráfica. El atributo `srcset` te permite especificar diferentes imágenes según el ancho (usando el descriptor `w`) o la densidad de píxeles (usando el descriptor `x`). Repasemos cada caso con ejemplos.

1\. Descriptor de ancho (`w`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Ejemplo de imagen">

```

El navegador seguirá los siguientes pasos:

a. Determina la DPR (Relación de píxeles del dispositivo) del dispositivo. Por ejemplo, una pantalla estándar tiene una DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene una DPR de 2 o más.

b. Calcula el ancho efectivo para cada imagen en `srcset`. Multiplica el descriptor de ancho por la DPR. Para un dispositivo con una DPR de 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Compara los anchos efectivos con el ancho de la ventana gráfica (viewport). Supongamos que el ancho de la ventana gráfica es de 420px. El navegador elegirá la imagen más pequeña con un ancho efectivo mayor o igual al ancho de la ventana gráfica. En este caso, seleccionará `example-medium.jpg`.

2\. Descriptor de densidad de píxeles (`x`):

Supongamos que tenemos el siguiente atributo `srcset`:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Ejemplo de imagen">

```

El navegador seguirá los siguientes pasos:

a. Determina la DPR (Relación de píxeles de dispositivo) del dispositivo. Por ejemplo, una pantalla estándar tiene una DPR de 1, mientras que una pantalla de alta resolución (Retina) tiene una DPR de 2 o más.

b. Compara la DPR del dispositivo con los descriptores `x` en `srcset`. En este caso, tenemos tres imágenes con los siguientes descriptores:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Elige la imagen con el descriptor `x` que se acerque más a la DPR del dispositivo. Para un dispositivo con una DPR de 1, el navegador seleccionará `example-1x.jpg`. Para un dispositivo con una DPR de 2, elegirá `example-2x.jpg`, y así sucesivamente.

Es importante tener en cuenta que también se puede utilizar el atributo `sizes` en combinación con el atributo `srcset` para proporcionar más información sobre cómo se mostrará la imagen en diferentes anchos de ventana gráfica. Esto es particularmente útil cuando se utiliza el descriptor de anchura (`w`). Aquí hay un ejemplo:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
