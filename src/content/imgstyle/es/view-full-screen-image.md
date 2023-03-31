---
title: >-
  Agregar la opción de tocar para ver la imagen en pantalla completa a una
  galería
description: >-
  Cómo agregar una opción de tocar para ver la imagen en pantalla completa en
  una galería
taskInputHash: 39687ec0ca18f284
lang: es
ignore: '/* cSpell:locale es,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Para agregar una opción "Tocar para ver la imagen en pantalla completa" en una galería, puedes usar JavaScript y CSS para crear una capa que muestre la imagen en modo de pantalla completa cuando el usuario toque en ella.

Aquí hay un enfoque básico que puedes usar:

1. Primero, crea un contenedor para tu galería y agrega todas las imágenes que quieres mostrar.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- agregar más imágenes aquí -->
</div>
```

2. Luego, agrega un poco de CSS para dar estilo a la galería y las imágenes.

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery img {
  width: 100%;
  height: auto;
  margin: 5px;
}
```

3. Ahora, agrega un detector de eventos de click para cada imagen usando JavaScript. Cuando el usuario hace clic en una imagen, JavaScript creará una capa y mostrará la imagen en modo de pantalla completa.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // crear capa
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // crear elemento de imagen
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // agregar elemento de imagen a la capa
    overlay.appendChild(fullScreenImage);
    
    // agregar capa a la página
    document.body.appendChild(overlay);
  });
});
```

4. Finalmente, agrega algunos estilos CSS para dar estilo a la capa y la imagen en pantalla completa.

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-screen-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```

Con estos pasos, ahora deberías tener una galería que permite a los usuarios ver imágenes en modo de pantalla completa tocando en ellas.
