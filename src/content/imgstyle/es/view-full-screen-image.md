---
taskInputHash: 7428b43f7b7c12aa
title: Añadir toque para ver la imagen a pantalla completa a una galería
description: >-
  Cómo añadir una opción de tocar para ver la imagen a pantalla completa a una
  galería
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: es
---
Para añadir una opción de "Tocar para ver la imagen a pantalla completa" a una galería, puedes usar JavaScript y CSS para crear una superposición que muestre la imagen en modo pantalla completa cuando el usuario toque en ella.

Aquí tienes un enfoque básico que puedes usar:
1. Primero, crea un contenedor para tu galería y añade todas las imágenes que quieres mostrar.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- añade más imágenes aquí -->
</div>
```


2. A continuación, añade un poco de CSS para dar estilo a la galería y a las imágenes.

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


3. Ahora, añade un listener de eventos de clic a cada imagen usando JavaScript. Cuando el usuario haga clic en una imagen, el JavaScript creará una superposición y mostrará la imagen en modo pantalla completa.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // crear superposición
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // crear elemento de imagen
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // añadir elemento de imagen a superposición
    overlay.appendChild(fullScreenImage);
    
    // añadir superposición a la página
    document.body.appendChild(overlay);
  });
});
```


4. Finalmente, añade un poco de CSS para dar estilo a la superposición y la imagen a pantalla completa.

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



Con estos pasos, ahora deberías tener una galería que permite a los usuarios ver imágenes en modo pantalla completa al tocarlas.
