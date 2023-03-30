---
title: Aggiungi "tocca per visualizzare l'immagine a schermo intero" a una galleria
description: >-
  Come aggiungere un'opzione "tocca per visualizzare l'immagine a schermo
  intero" a una galleria
taskInputHash: caa826b44a67fa4b
lang: it
---
Per aggiungere un'opzione "Tocca per visualizzare l'immagine a schermo intero" a una galleria, puoi utilizzare JavaScript e CSS per creare un overlay che visualizza l'immagine in modalità a schermo intero quando l'utente ci clicca sopra.

Ecco un approccio di base che puoi utilizzare:

1. Prima di tutto, crea un contenitore per la tua galleria e aggiungi tutte le immagini che vuoi visualizzare.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- aggiungi altre immagini qui -->
</div>
```


2. Aggiungi del CSS per lo stile della galleria e delle immagini.

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


3. Ora, aggiungi un listener per l'evento di click su ogni immagine, utilizzando JavaScript. Quando l'utente fa clic su un'immagine, JavaScript creerà un overlay e visualizzerà l'immagine in modalità a schermo intero.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // crea l'overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // crea l'elemento immagine
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // aggiungi l'elemento immagine all'overlay
    overlay.appendChild(fullScreenImage);
    
    // aggiungi l'overlay alla pagina
    document.body.appendChild(overlay);
  });
});
```


4. Infine, aggiungi del CSS per lo stile dell'overlay e dell'immagine a schermo intero.

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



Con questi passaggi, dovresti ora avere una galleria che consente agli utenti di visualizzare le immagini in modalità a schermo intero toccando su di esse.
