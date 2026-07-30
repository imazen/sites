---
taskInputHash: 904dae18b2da89c3
title: >-
  También traduce cuidadosamente el título y la descripción para el artículo; no
  utilices & ni < ni >

   Descriptores de ancho y densidad
description: Ejemplos de uso de descriptores de ancho y densidad en `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
Comprensión de los descriptores de ancho (w) y densidad (x) en `srcset`. Usa ejemplos y utiliza Markdown.

> `srcset` es un atributo HTML que permite a los desarrolladores proporcionar múltiples fuentes de imágenes con diferentes resoluciones o densidades de píxeles, y dejar que el navegador seleccione la imagen adecuada según las características de la pantalla del dispositivo. El atributo `srcset` utiliza una combinación de `URL` y descriptores `w` o `x` para especificar las imágenes.

## Descriptor de Ancho (`w`)

> El descriptor `w` se usa para especificar el ancho de una imagen en píxeles. Se utiliza cuando queremos proporcionar al navegador las dimensiones de una imagen para que pueda elegir la imagen adecuada para el espacio de pantalla disponible.

> La sintaxis para usar el descriptor `w` en `srcset` es la siguiente:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Imagen de Ejemplo">
```

> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes anchos en píxeles. El navegador seleccionará la imagen con el ancho más cercano al espacio de pantalla disponible.

## Descriptor de Densidad (`x`)

> El descriptor `x` se usa para especificar la densidad de píxeles de una imagen, que es la relación entre píxeles físicos y píxeles CSS. Se utiliza cuando queremos proporcionar al navegador diferentes versiones de la misma imagen con diferentes densidades de píxeles.

> La sintaxis para usar el descriptor `x` en `srcset` es la siguiente:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Imagen de Ejemplo">
```

> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes densidades de píxeles. El navegador seleccionará la imagen con la densidad de píxeles más cercana a la pantalla del dispositivo.

> Nota que los descriptores `w` y `x` se pueden usar juntos en el mismo atributo `srcset` para proporcionar al navegador más opciones para elegir.
