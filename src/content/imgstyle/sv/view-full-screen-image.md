---
title: Lägg till "Tryck för att visa helskärmsbild" i en galleri
description: >-
  Hur lägger man till ett alternativ "Tryck för att visa helskärmsbild" i en
  galleri
taskInputHash: 9a2245351cd2e666
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
För att lägga till ett alternativ "Tryck för att visa helskärmsbild" till en galleri kan du använda JavaScript och CSS för att skapa en överlagring som visar bilden i helskärmsläge när användaren trycker på den.

Här är en grundläggande metod du kan använda:
1. Skapa först en behållare för din galleri och lägg till alla bilder du vill visa.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- lägg till fler bilder här -->
</div>
```


2. Lägg sedan till lite CSS för att styla galleriet och bilderna.

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


3. Lägg nu till en klickevenemangslyssnare till varje bild med hjälp av JavaScript. När användaren klickar på en bild skapar JavaScript en överlagring och visar bilden i helskärmsläge.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // skapa överlagring
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // skapa bildelement
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // lägg till bildelement i överlagringen
    overlay.appendChild(fullScreenImage);
    
    // lägg till överlagring på sidan
    document.body.appendChild(overlay);
  });
});
```


4. Slutligen, lägg till lite CSS för att styla överlagringen och helskärmsbilden.

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



Med dessa steg bör du nu ha en galleri som tillåter användare att visa bilder i helskärmsläge genom att trycka på dem.
