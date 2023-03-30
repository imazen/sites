---
title: Descriptores de ancho y densidad
description: Ejemplos de uso de descriptores de ancho y densidad en `srcset`
taskInputHash: 00a9ec09c2fb0bf3
lang: es
---
Entendiendo los descriptores de ancho (w) y densidad (x) en `srcset`. Usa ejemplos y Markdown.

> `srcset` es un atributo HTML que permite a los desarrolladores proporcionar varias fuentes de imágenes con diferentes resoluciones o densidades de píxeles, y dejar que el navegador seleccione la imagen adecuada en función de las características de la pantalla del dispositivo. El atributo `srcset` utiliza una combinación del `URL` y los descriptores `w` o `x` para especificar las imágenes.
## Descriptores de ancho (`w`)

> El descriptor `w` se utiliza para especificar el ancho de una imagen en píxeles. Se utiliza cuando queremos proporcionar al navegador las dimensiones de una imagen para que pueda elegir la imagen adecuada para el espacio de pantalla disponible.

> La sintaxis para usar el descriptor `w` en `srcset` es la siguiente:

```html
<img src="pequeña.jpg"
  srcset="pequeña.jpg 500w,
          mediana.jpg 1000w,
          grande.jpg 2000w"
  alt="Imagen de ejemplo">
```



> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes anchuras en píxeles. El navegador seleccionará la imagen con el ancho más cercano al espacio de pantalla disponible.
## Descriptores de densidad (`x`)

> El descriptor `x` se utiliza para especificar la densidad de píxeles de una imagen, que es la relación entre los píxeles físicos y los píxeles CSS. Se utiliza cuando queremos proporcionar al navegador diferentes versiones de la misma imagen con diferentes densidades de píxeles.

> La sintaxis para usar el descriptor `x` en `srcset` es la siguiente:

```html
<img src="pequeña.jpg"
  srcset="pequeña.jpg 1x,
          mediana.jpg 2x,
          grande.jpg 3x"
  alt="Imagen de ejemplo">
```


> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes densidades de píxeles. El navegador seleccionará la imagen con la densidad de píxeles más cercana a la pantalla del dispositivo.

> Hay que tener en cuenta que los descriptores `w` y `x` se pueden usar juntos en el mismo atributo `srcset` para proporcionar al navegador más opciones para elegir.
