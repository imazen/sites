---
title: >-
  Aggiungere la funzionalità di tocchi per visualizzare un'immagine a schermo
  intero ad una galleria
description: >-
  Come aggiungere un'opzione di tocchi per visualizzare un'immagine a schermo
  intero ad una galleria
taskInputHash: f82e5f68499abc98
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Per aggiungere l'opzione "Tocca per visualizzare l'immagine a schermo intero" a una galleria, puoi utilizzare JavaScript e CSS per creare un overlay che mostri l'immagine a schermo intero quando l'utente ci clicca sopra.

Ecco un approccio di base che puoi utilizzare:
1. Innanzitutto, crea un contenitore per la tua galleria e aggiungi tutte le immagini che desideri visualizzare.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- aggiungi più immagini qui -->
</div>
```


2. Successivamente, aggiungi del CSS per stilizzare la galleria e le immagini.

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


3. Ora, aggiungi un ascoltatore di eventi di clic a ogni immagine utilizzando JavaScript. Quando l'utente clicca su un'immagine, JavaScript crea un overlay e mostra l'immagine a schermo intero.

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


4. Infine, aggiungi del CSS per stilizzare l'overlay e l'immagine a schermo intero.

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



Con questi passaggi, dovresti ora avere una galleria che consente agli utenti di visualizzare le immagini a schermo intero cliccandoci sopra.
