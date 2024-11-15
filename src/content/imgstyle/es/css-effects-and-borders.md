---
title: Efectos CSS y bordes
description: Cómo agregar efectos CSS y bordes a una imagen
taskInputHash: 946b51b27346a621
lang: es
date_published: '2023-03-29'
date_modified: '2023-04-03'
date_updated: '2024-11-15'
---
Para agregar efectos CSS y bordes a una imagen, puedes seguir los siguientes pasos: 
1. Selecciona el elemento de imagen en tu código HTML. Puedes hacer esto usando un selector de ID o clase, o seleccionando el elemento `<img>` directamente. 
2. Define un selector de clase o ID CSS que aplique los estilos deseados a la imagen. Por ejemplo, podrías usar el siguiente código para crear un borde simple alrededor de la imagen:

```css
.my-image {
  border: 2px solid black;
}
```

 
3. Aplica el selector de clase o ID CSS al elemento de imagen. Por ejemplo, si usaste el selector `.my-image` en el paso 2, podrías agregar el siguiente código a tu HTML para aplicar los estilos a la imagen:

```html
<img src="path/to/image.jpg" class="my-image">
```


4. Personaliza los estilos como desees. Además de bordes, puedes aplicar una amplia gama de efectos CSS a las imágenes, como filtros, opacidad, transiciones y animaciones. Aquí hay algunos ejemplos de código CSS que se pueden usar para agregar efectos a las imágenes:

```css
/* Agregar un efecto de sombra paralela */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Agregar un efecto de filtro en escala de grises */
.my-image {
  filter: grayscale(100%);
}

/* Agregar un efecto de transición de zoom al pasar el mouse */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```



Estos son solo algunos ejemplos de los muchos efectos CSS y bordes que puedes usar para mejorar tus imágenes. Experimenta con diferentes estilos para encontrar los que mejor funcionen para tu diseño.
