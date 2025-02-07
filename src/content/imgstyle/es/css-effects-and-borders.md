---
taskInputHash: 98cdcb2c9b00d983
title: Efectos y bordes CSS
description: Cómo añadir efectos y bordes CSS a una imagen
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
Para añadir efectos CSS y bordes a una imagen, puedes seguir los siguientes pasos: 
1. Selecciona el elemento de imagen en tu código HTML. Puedes hacerlo utilizando un selector de ID o clase, o seleccionando directamente el elemento `<img>`. 
2. Define un selector de clase o ID CSS que aplique los estilos deseados a la imagen. Por ejemplo, podrías usar el siguiente código para crear un borde simple alrededor de la imagen:

```css
.my-image {
  border: 2px solid black; /* Borde sólido negro de 2px */
}
```

3. Aplica el selector de clase o ID CSS al elemento de imagen. Por ejemplo, si usaste el selector `.my-image` en el paso 2, podrías añadir el siguiente código a tu HTML para aplicar los estilos a la imagen:

```html
<img src="path/to/image.jpg" class="my-image">
```


4. Personaliza los estilos que desees. Además de bordes, puedes aplicar una amplia gama de efectos CSS a las imágenes, como filtros, opacidad, transiciones y animaciones. Aquí algunos ejemplos de código CSS que pueden ser utilizados para añadir efectos a las imágenes:

```css
/* Añadir un efecto de sombra */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra con un radio de 10px */
}

/* Añadir un efecto de filtro en escala de grises */
.my-image {
  filter: grayscale(100%); /* Filtro en escala de grises al 100% */
}

/* Añadir un efecto de zoom en transición al pasar el ratón */
.my-image {
  transition: transform 0.3s ease; /* Transición en 0.3s */
}
.my-image:hover {
  transform: scale(1.1); /* Escala al 110% */
}
```

Estos son solo algunos ejemplos de los muchos efectos y bordes CSS que puedes utilizar para mejorar tus imágenes. Experimenta con diferentes estilos para encontrar los que mejor se adapten a tu diseño.
