---
title: Descriptores de ancho y densidad
description: Ejemplos de uso de descriptores de ancho y densidad en `srcset`
taskInputHash: 57ff1c28d63c24f5
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Entendiendo los descriptores de ancho (`w`) y densidad (`x`) en `srcset`. Usa ejemplos y usa Markdown.

> `srcset` es un atributo HTML que permite a los desarrolladores proporcionar múltiples fuentes de imágenes con diferentes resoluciones o densidades de píxeles, y permite que el navegador seleccione la imagen apropiada basada en las características de la pantalla del dispositivo. El atributo `srcset` utiliza una combinación de URL y descriptores `w` o `x` para especificar las imágenes.

## Descriptor de Ancho (`w`)

> El descriptor `w` se utiliza para especificar el ancho de una imagen en píxeles. Se utiliza cuando queremos proporcionar al navegador las dimensiones de una imagen para que pueda elegir la imagen adecuada para el espacio de pantalla disponible.

> La sintaxis para utilizar el descriptor `w` en `srcset` es la siguiente:
```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Ejemplo de Imagen">
```

> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes anchuras en píxeles. El navegador seleccionará la imagen con el ancho más cercano al espacio de pantalla disponible.

## Descriptor de Densidad (`x`)

> El descriptor `x` se utiliza para especificar la densidad de píxeles de una imagen, que es la relación entre píxeles físicos y píxeles CSS. Se utiliza cuando queremos proporcionar al navegador diferentes versiones de la misma imagen con diferentes densidades de píxeles.

> La sintaxis para utilizar el descriptor `x` en `srcset` es la siguiente:
```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Ejemplo de Imagen">
```

> En el ejemplo anterior, hemos proporcionado al navegador tres imágenes y sus correspondientes densidades de píxeles. El navegador seleccionará la imagen con la densidad de píxeles más cercana a la pantalla del dispositivo.

> Es importante tener en cuenta que los descriptores `w` y `x` se pueden utilizar juntos en el mismo atributo `srcset` para proporcionar al navegador más opciones para elegir.
