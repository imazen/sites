---
title: Descriptores de ancho y densidad
description: Ejemplos de uso de descriptores de ancho y densidad en `srcset`
taskInputHash: 74b8eb2869d948a0
lang: es
ignore: '/* cSpell:locale es,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Entendiendo los descriptores de ancho (w) y densidad (x) en `srcset`. Usa ejemplos y Markdown.

> `srcset` es un atributo HTML que permite a los desarrolladores proporcionar múltiples fuentes de imágenes con diferentes resoluciones o densidades de píxeles, y permitir que el navegador seleccione la imagen adecuada en función de las características de visualización del dispositivo. El atributo `srcset` utiliza una combinación de la `URL` y los descriptores `w` o `x` para especificar las imágenes.
## Descriptores de Ancho (`w`)

> El descriptor `w` se utiliza para especificar el ancho de una imagen en píxeles. Se utiliza cuando se desea proporcionar al navegador las dimensiones de una imagen para que pueda elegir la imagen adecuada para el espacio disponible en la pantalla.

> La sintaxis para utilizar el descriptor `w` en `srcset` es la siguiente:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Ejemplo de Imagen">
```


> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus anchos correspondientes en píxeles. El navegador seleccionará la imagen con el ancho más cercano al espacio disponible en la pantalla.
## Descriptores de Densidad (`x`)

> El descriptor `x` se utiliza para especificar la densidad de píxeles de una imagen, que es la relación de píxeles físicos a píxeles CSS. Se utiliza cuando se desea proporcionar al navegador diferentes versiones de la misma imagen con diferentes densidades de píxeles.

> La sintaxis para utilizar el descriptor `x` en `srcset` es la siguiente:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Ejemplo de Imagen">
```


> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus diferentes densidades de píxeles correspondientes. El navegador seleccionará la imagen con la densidad de píxeles más cercana a la pantalla del dispositivo.

> Es importante notar que los descriptores `w` y `x` se pueden usar juntos en el mismo atributo `srcset` para proporcionar al navegador más opciones para elegir.
