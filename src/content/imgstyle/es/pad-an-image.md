---
title: Acolchar una imagen
description: >-
  Cómo acolchar una imagen utilizando CSS y la relación de aspecto para
  centrarla.
taskInputHash: 016375442ac6e970
lang: es
---
Así es cómo puedes utilizar CSS y la relación de aspecto para centrar y acolchar una imagen:

1. En primer lugar, debes envolver tu imagen en un elemento contenedor, como un `<div>` o `<figure>`. Esto te permitirá aplicar estilos al contenedor que afectarán a la imagen dentro de él.
2. Establece la propiedad `position` del contenedor en `relative`. Esto te permitirá posicionar la imagen dentro del contenedor.
3. Agrega un seudoelemento `::after` al contenedor. Este se usará para mantener la relación de aspecto de la imagen y crear la almohadilla.
4. Establece la propiedad `content` del seudoelemento `::after` en una cadena vacía. Esto es necesario para crear el elemento.
5. Establece la propiedad `padding-bottom` del seudoelemento `::after` en un valor porcentual que corresponda a la relación de aspecto de la imagen. Por ejemplo, si tu imagen tiene una relación de aspecto de 4:3, deberás establecer el relleno en `75%` (ya que 3/4 = 0,75). Esto creará la almohadilla debajo de la imagen.
6. Establece la propiedad `position` del seudoelemento `::after` en `absolute`. Esto posicionará el elemento dentro del contenedor.
7. Establece las propiedades `top`, `left`, `bottom` y `right` del seudoelemento `::after` en `0`. Esto hará que el elemento ocupe todo el contenedor, creando la almohadilla.
8. Finalmente, establece la propiedad `position` de la imagen en `absolute`. Esto te permitirá centrar la imagen dentro del contenedor usando las propiedades `top`, `left`, `bottom` y `right`.

Aquí tienes un ejemplo del código CSS que deberías utilizar para centrar y acolchar una imagen con una relación de aspecto de 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* Relación de aspecto 4:3 */
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

En este ejemplo, el elemento `.container` es el contenedor para la imagen. El seudoelemento `::after` se utiliza para crear la almohadilla y mantener la relación de aspecto de la imagen. El elemento `img` se establece en `position: absolute` para que pueda centrarse dentro del contenedor usando las propiedades `top`, `left`, `bottom` y `right`.

Al establecer las propiedades `max-width` y `max-height` de la imagen en `100%`, la imagen se ajustará al espacio disponible manteniendo su relación de aspecto. Esto significa que la almohadilla creada por el seudoelemento `::after` siempre será proporcional al tamaño de la imagen.
