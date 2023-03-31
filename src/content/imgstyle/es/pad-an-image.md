---
title: Rellenar una imagen
description: Cómo rellenar una imagen usando CSS y relación de aspecto para centrar.
taskInputHash: 8ca09b6e431a5c92
lang: es
ignore: '/* cSpell:locale es,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Aquí te mostramos cómo puedes utilizar CSS y la relación de aspecto para centrar y rellenar una imagen:

1. Primero, debes envolver tu imagen en un elemento contenedor, como un `<div>` o `<figure>`. Esto permitirá que apliques estilos al contenedor que afectarán la imagen que está dentro.
2. Establece la propiedad `position` del contenedor en `relative`. Esto permitirá que posiciones la imagen dentro del contenedor.
3. Agrega un pseudo-elemento `::after` al contenedor. Esto se utilizará para mantener la relación de aspecto de la imagen y crear el relleno.
4. Establece la propiedad de `content` del pseudo-elemento `::after` en una cadena vacía. Esto es necesario para crear el elemento.
5. Establece la propiedad `padding-bottom` del pseudo-elemento `::after` en un valor porcentual que corresponda a la relación de aspecto de la imagen. Por ejemplo, si tu imagen tiene una relación de aspecto de 4:3, establecerías el relleno en `75%` (ya que 3/4 = 0,75). Esto creará el relleno debajo de la imagen.
6. Establece la propiedad `position` del pseudo-elemento `::after` en `absolute`. Esto posicionará el elemento dentro del contenedor.
7. Establece las propiedades `top`, `left`, `bottom` y `right` del pseudo-elemento `::after` en `0`. Esto hará que el elemento llene el contenedor, creando el relleno.
8. Finalmente, establece la propiedad `position` de la imagen en `absolute`. Esto permitirá que centres la imagen dentro del contenedor usando las propiedades `top`, `left`, `bottom` y `right`.

Aquí te mostramos un ejemplo del código CSS que utilizarías para centrar y rellenar una imagen con una relación de aspecto de 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* relación de aspecto de 4:3 */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```

En este ejemplo, el elemento `.container` es el contenedor de la imagen. El pseudo-elemento `::after` se utiliza para crear el relleno y mantener la relación de aspecto de la imagen. El elemento `img` se establece en `position: absolute` para que pueda centrarse dentro del contenedor usando las propiedades `top`, `left`, `bottom` y `right`.

Al establecer las propiedades `max-width` y `max-height` de la imagen en `100%`, la imagen se ajustará a las dimensiones disponibles manteniendo su relación de aspecto. Esto significa que el relleno creado por el pseudo-elemento `::after` siempre será proporcional al tamaño de la imagen.
