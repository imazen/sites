---
taskInputHash: 11ef828327c49f4d
title: Descriptores de anchura y densidad
description: Ejemplos de uso de descriptores de anchura y densidad en `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
Comprender los descriptores de anchura (w) y densidad (x) en `srcset`. Utiliza ejemplos y usa Markdown.

> `srcset` es un atributo HTML que permite a los desarrolladores proporcionar múltiples fuentes de imágenes con diferentes resoluciones o densidades de píxeles, y dejar que el navegador seleccione la imagen apropiada según las características de la pantalla del dispositivo. El atributo `srcset` utiliza una combinación de `URL` y los descriptores `w` o `x` para especificar las imágenes.

## Descriptor de Anchura (`w`)

> El descriptor `w` se utiliza para especificar la anchura de una imagen en píxeles. Se usa cuando queremos proporcionar al navegador las dimensiones de una imagen para que pueda elegir la imagen apropiada para el espacio de pantalla disponible.

> La sintaxis para usar el descriptor `w` en `srcset` es la siguiente:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Imagen de ejemplo">
```

> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes anchuras en píxeles. El navegador seleccionará la imagen con la anchura más cercana al espacio de pantalla disponible.

## Descriptor de Densidad (`x`)

> El descriptor `x` se utiliza para especificar la densidad de píxeles de una imagen, que es la relación de píxeles físicos a píxeles CSS. Se utiliza cuando queremos proporcionar al navegador diferentes versiones de la misma imagen con diferentes densidades de píxeles.

> La sintaxis para usar el descriptor `x` en `srcset` es la siguiente:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Imagen de ejemplo">
```

> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes densidades de píxeles. El navegador seleccionará la imagen con la densidad de píxeles más cercana a la pantalla del dispositivo.

> Ten en cuenta que los descriptores `w` y `x` se pueden usar juntos en el mismo atributo `srcset` para ofrecer al navegador más opciones de las que elegir.
