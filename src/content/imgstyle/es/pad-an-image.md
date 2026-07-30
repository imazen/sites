---
taskInputHash: 4629932ffd18971c
title: Añadir relleno a una imagen
description: >-
  Cómo añadir relleno a una imagen usando CSS y la relación de aspecto para
  centrarla
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
Aquí se muestra cómo puedes usar CSS y la relación de aspecto para centrar y agregar relleno a una imagen:
1. Primero, necesitas envolver tu imagen en un elemento contenedor, como un `<div>` o `<figure>`. Esto te permitirá aplicar estilos al contenedor que afectarán la imagen dentro.
2. Establece la propiedad `position` del contenedor en `relative`. Esto te permitirá posicionar la imagen dentro del contenedor.
3. Agrega un pseudo-elemento `::after` al contenedor. Esto se usará para mantener la relación de aspecto de la imagen y crear el relleno.
4. Establece la propiedad `content` del pseudo-elemento `::after` en una cadena vacía. Esto es necesario para crear el elemento.
5. Establece la propiedad `padding-bottom` del pseudo-elemento `::after` en un valor porcentual que corresponda a la relación de aspecto de la imagen. Por ejemplo, si tu imagen tiene una relación de aspecto de 4:3, establecerías el relleno en `75%` (ya que 3/4 = 0.75). Esto creará el relleno debajo de la imagen.
6. Ajusta la propiedad `position` del pseudo-elemento `::after` a `absolute`. Esto posicionará el elemento dentro del contenedor.
7. Define las propiedades `top`, `left`, `bottom` y `right` del pseudo-elemento `::after` en `0`. Esto hará que el elemento llene el contenedor, creando el relleno.
8. Finalmente, define la propiedad `position` de la imagen misma en `absolute`. Esto te permitirá centrar la imagen dentro del contenedor usando las propiedades `top`, `left`, `bottom` y `right`.

Aquí tienes un ejemplo del código CSS que usarías para centrar y agregar relleno a una imagen con una relación de aspecto de 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* relación de aspecto 4:3 */
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

Al establecer las propiedades `max-width` y `max-height` de la imagen en `100%`, la imagen se escalará para ajustarse al espacio disponible mientras mantiene su relación de aspecto. Esto significa que el relleno creado por el pseudo-elemento `::after` siempre será proporcional al tamaño de la imagen.
