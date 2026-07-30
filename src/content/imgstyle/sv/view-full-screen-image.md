---
taskInputHash: 4302661138b656d7
title: Lägg till tryck för att visa bild i fullskärm i ett galleri
description: >-
  Hur man lägger till ett alternativ för tryck för att visa bild i fullskärm i
  ett galleri
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
För att lägga till ett alternativ "Tryck för att visa bild i fullskärm" till ett galleri, kan du använda JavaScript och CSS för att skapa ett överlägg som visar bilden i fullskärmsläge när användaren trycker på den.

Här är ett grundläggande tillvägagångssätt du kan använda:
1. Först skapar du en behållare för ditt galleri och lägger till alla bilder du vill visa.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- fler bilder här -->
</div>
```


2. Nästa steg är att lägga till lite CSS för att styla galleriet och bilderna.

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


3. Nu, lägg till en klickhändelse på varje bild med JavaScript. När användaren klickar på en bild, kommer JavaScript skapa ett överlägg och visa bilden i fullskärmsläge.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // skapa överlägg
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // skapa bildelement
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // lägg till bildelement till överlägget
    overlay.appendChild(fullScreenImage);
    
    // lägg till överlägget på sidan
    document.body.appendChild(overlay);
  });
});
```


4. Slutligen, lägg till lite CSS för att styla överlägget och fullskärmsbilden.

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



Med dessa steg bör du nu ha ett galleri som tillåter användare att visa bilder i fullskärmsläge genom att trycka på dem.
