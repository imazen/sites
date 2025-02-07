---
taskInputHash: d5ca0404cbc86f8f
title: Tippen zum Anzeigen des Vollbildbildes zu einer Galerie hinzufügen
description: >-
  Wie man eine Option zum Tippen und Anzeigen eines Vollbildbildes zu einer
  Galerie hinzufügt
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
Um eine Option "Tippen zum Anzeigen des Vollbildbildes" zu einer Galerie hinzuzufügen, können Sie JavaScript und CSS verwenden, um ein Overlay zu erstellen, das das Bild im Vollbildmodus anzeigt, wenn der Benutzer darauf tippt.

Hier ist ein grundlegender Ansatz, den Sie verwenden können:
1. Erstellen Sie zunächst einen Container für Ihre Galerie und fügen Sie alle Bilder hinzu, die Sie anzeigen möchten.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- hier mehr Bilder hinzufügen -->
</div>
```

2. Fügen Sie als nächstes etwas CSS hinzu, um die Galerie und die Bilder zu gestalten.

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

3. Fügen Sie jetzt einen Klick-Event-Listener für jedes Bild mithilfe von JavaScript hinzu. Wenn der Benutzer auf ein Bild klickt, erstellt das JavaScript ein Overlay und zeigt das Bild im Vollbildmodus an.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // Overlay erstellen
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Bildelement erstellen
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // Bildelement zum Overlay hinzufügen
    overlay.appendChild(fullScreenImage);
    
    // Overlay zur Seite hinzufügen
    document.body.appendChild(overlay);
  });
});
```

4. Fügen Sie schließlich etwas CSS hinzu, um das Overlay und das Vollbildbild zu gestalten.

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

Mit diesen Schritten sollten Sie nun eine Galerie haben, die es Benutzern ermöglicht, Bilder im Vollbildmodus anzuzeigen, indem sie darauf tippen.
