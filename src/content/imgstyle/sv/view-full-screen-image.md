---
title: Lägg till "tryck för att se i fullskärm" till en galleria
description: >-
  Hur man lägger till en "tryck för att se i fullskärm" -alternativ till en
  galleria
taskInputHash: 07520f189521764b
lang: sv
---
För att lägga till en "Tryck för att se bild i fullskärm" -alternativ till en galleria kan du använda JavaScript och CSS för att skapa ett överlager som visar bilden i fullskärmsläge när användaren klickar på den.

Här är en grundläggande metod som du kan använda:

1. Skapa först en behållare för din galleria och lägg till alla bilder du vill visa.

```html
<div class="galleri">
  <img src="bild1.jpg">
  <img src="bild2.jpg">
  <img src="bild3.jpg">
  <!-- lägg till fler bilder här -->
</div>
```



2. Lägg sedan till CSS för att styla galleriet och bilderna.

```css
.galleri {
  display: flex;
  flex-wrap: wrap;
}

.galleri img {
  width: 100%;
  height: auto;
  margin: 5px;
}
```



3. Lägg nu till en klickeven lyssnare på varje bild med JavaScript. När användaren klickar på en bild kommer JavaScript att skapa ett överlager och visa bilden i fullskärmsläge.

```javascript
const galleri = document.querySelector('.galleri');
const bilder = galleri.querySelectorAll('img');

bilder.forEach((bild) => {
  bild.addEventListener('click', () => {
    // skapa överlagret
    const överlagret = document.createElement('div');
    överlagret.classList.add('överlager');
    
    // skapa bild elementet
    const fullskärmsbild = document.createElement('img');
    fullskärmsbild.src = bild.src;
    fullskärmsbild.classList.add('fullskärmsbild');
    
    // lägg till bild elementet i överlagret
    överlagret.appendChild(fullskärmsbild);
    
    // lägg till överlagret på sidan
    document.body.appendChild(överlagret);
  });
});
```



4. Slutligen, lägg till CSS för att styla överlagret och den fullskärmsbild.

```css
.överlager {
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

.fullskärmsbild {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```



Med dessa steg bör du nu ha en galleria som tillåter att användare kan titta på bilder i fullskärmsläge genom att trycka på dem.
