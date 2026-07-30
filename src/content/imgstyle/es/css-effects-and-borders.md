---
taskInputHash: 0b79efaf2d03af79
title: Efectos y bordes de CSS
description: Cómo agregar efectos y bordes de CSS a una imagen
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: es
---
Para agregar efectos de CSS y bordes a una imagen, puedes usar los siguientes pasos:
1. Selecciona el elemento de imagen en tu código HTML. Puedes hacer esto usando un selector de ID o clase, o seleccionando directamente el elemento `<img>`.
2. Define un selector de clase o ID en CSS que aplique los estilos deseados a la imagen. Por ejemplo, podrías usar el siguiente código para crear un borde simple alrededor de la imagen:

```css
.my-image {
  border: 2px solid black; /* Borde de 2px sólido negro */
}
```

3. Aplica el selector de clase o ID al elemento de imagen. Por ejemplo, si usaste el selector `.my-image` en el paso 2, podrías agregar el siguiente código a tu HTML para aplicar los estilos a la imagen:

```html
<img src="path/to/image.jpg" class="my-image">
```

4. Personaliza los estilos como desees. Además de los bordes, puedes aplicar una amplia gama de efectos CSS a las imágenes, como filtros, opacidad, transiciones y animaciones. Aquí hay algunos ejemplos de código CSS que se pueden utilizar para agregar efectos a las imágenes:

```css
/* Agregar un efecto de sombra */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra de 10px */
}

/* Agregar un efecto de filtro en escala de grises */
.my-image {
  filter: grayscale(100%); /* Filtro de escala de grises al 100% */
}

/* Agregar un efecto de transición de zoom al pasar el ratón */
.my-image {
  transition: transform 0.3s ease; /* Transición de 0.3s */
}
.my-image:hover {
  transform: scale(1.1); /* Escala al pasar el ratón */
}
```

Estos son solo algunos ejemplos de los muchos efectos de CSS y bordes que puedes usar para mejorar tus imágenes. Experimenta con diferentes estilos para encontrar los que mejor se adapten a tu diseño.
