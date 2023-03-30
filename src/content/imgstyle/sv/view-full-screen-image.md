---
title: Lägg till en "Tryck för att visa fullskärmsbild" i ett galleri
description: >-
  Hur man lägger till ett alternativ "Tryck för att visa fullskärmsbild" till
  ett galleri
taskInputHash: 07520f189521764b
lang: sv
---
För att lägga till ett alternativ "Tryck för att visa fullskärmsbild" till en galleri kan du använda JavaScript och CSS för att skapa en överlagring som visar bilden i fullskärmsläge när användaren trycker på den.

Här är en grundläggande metod du kan använda:
1. Skapa först en behållare för ditt galleri och lägg till alla bilder du vill visa.

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


3. Lägg nu till en klickevenlyssnare till varje bild med hjälp av JavaScript. När användaren klickar på en bild kommer JavaScript att skapa en överlagring och visa bilden i fullskärmsläge.

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
    
    // lägg till bildelement till överlagring
    overlay.appendChild(fullScreenImage);
    
    // lägg till överlagring på sidan
    document.body.appendChild(overlay);
  });
});
```


4. Slutligen, lägga till lite CSS för att styla överlagringen och fullskärmsbilden.

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



Med dessa steg bör du nu ha ett galleri som tillåter användare att se bilder i fullskärmsläge genom att trycka på dem.
