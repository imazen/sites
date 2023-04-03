---
title: Agregar toque para ver imagen en pantalla completa a una galería
description: >-
  Cómo agregar una opción de toque para ver imagen en pantalla completa a una
  galería
taskInputHash: c1d54045b5f7ae70
lang: es
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Para agregar una opción "Toca para ver imagen en pantalla completa" a una galería, puedes usar JavaScript y CSS para crear una capa que muestre la imagen en modo de pantalla completa cuando el usuario toque en ella.

Aquí hay un enfoque básico que puedes usar:
1. Primero, crea un contenedor para tu galería y agrega todas las imágenes que deseas mostrar.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- Agrega más imágenes aquí -->
</div>
```


2. Luego, agrega un poco de CSS para estilizar la galería y las imágenes.

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


3. Ahora, agrega un event listener a cada imagen usando JavaScript. Cuando el usuario haga clic en una imagen, el JavaScript creará una capa y mostrará la imagen en modo de pantalla completa.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // crear capa
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // crear elemento imagen
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // agregar elemento imagen a la capa
    overlay.appendChild(fullScreenImage);
    
    // agregar capa a la página
    document.body.appendChild(overlay);
  });
});
```


4. Finalmente, agrega algo de CSS para estilizar la capa y la imagen en pantalla completa.

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


Con estos pasos, deberías tener una galería que permite a los usuarios ver imágenes en modo de pantalla completa tocándolas.
