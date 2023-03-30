---
title: Agregar "Toque para ver la imagen en pantalla completa" en una galería
description: >-
  Cómo agregar una opción "Toque para ver la imagen en pantalla completa" en una
  galería
taskInputHash: 65576124df67622f
lang: es
---
Para agregar la opción "Toque para ver la imagen en pantalla completa" a una galería, se puede usar JavaScript y CSS para crear una superposición que muestre la imagen en modo de pantalla completa cuando el usuario toca la imagen.

Aquí hay un enfoque básico que se puede usar:

1. Primero, cree un contenedor para su galería y agregue todas las imágenes que desea mostrar.

```html
<div class="galería">
  <img src="imagen1.jpg">
  <img src="imagen2.jpg">
  <img src="imagen3.jpg">
  <!-- agregar más imágenes aquí -->
</div>
```

2. Luego, agregue un poco de CSS para cambiar el estilo de la galería y las imágenes.

```css
.galería {
  display: flex;
  flex-wrap: wrap;
}

.galería img {
  width: 100%;
  height: auto;
  margin: 5px;
}
```

3. Ahora, agregue un detector de eventos de clic a cada imagen mediante JavaScript. Cuando el usuario hace clic en una imagen, JavaScript creará una superposición y mostrará la imagen en modo de pantalla completa.

```javascript
const galería = document.querySelector('.galería');
const imágenes = galería.querySelectorAll('img');

imágenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    // crear superposición
    const superposición = document.createElement('div');
    superposición.classList.add('superposición');
    
    // crear elemento de imagen
    const imagenFullScreen = document.createElement('img');
    imagenFullScreen.src = imagen.src;
    imagenFullScreen.classList.add('imagen-pantalla-completa');
    
    // agregar elemento de imagen a la superposición
    superposición.appendChild(imagenFullScreen);
    
    // agregar superposición a la página
    document.body.appendChild(superposición);
  });
});
```

4. Por último, agregue un poco de CSS para cambiar el estilo de la superposición y la imagen en pantalla completa.

```css
.superposición {
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

.imagen-pantalla-completa {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```

Con estos pasos, ahora debería tener una galería que permita a los usuarios ver imágenes en modo de pantalla completa al tocarlas.
