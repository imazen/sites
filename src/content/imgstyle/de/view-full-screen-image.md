---
title: >-
  Fügen Sie "Tippen Sie, um das Bild im Vollbildmodus anzuzeigen" zu einer
  Galerie hinzu
description: >-
  Wie man einer Galerie eine Option zum Tippen hinzufügt, um das Bild im
  Vollbildmodus anzuzeigen
taskInputHash: 4f0c658efa66bb46
lang: de
---
Um eine Option "Zum Anzeigen einer Vollbildansicht des Bildes tippen" zu einer Galerie hinzuzufügen, können Sie JavaScript und CSS verwenden, um ein Overlay zu erstellen, das das Bild im Vollbildmodus anzeigt, wenn der Benutzer darauf tippt.

Hier ist ein grundlegender Ansatz, den Sie verwenden können:

1. Erstellen Sie zunächst einen Container für Ihre Galerie und fügen Sie alle Bilder hinzu, die Sie anzeigen möchten.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- weitere Bilder hier einfügen -->
</div>
```

2. Fügen Sie als Nächstes CSS hinzu, um die Galerie und die Bilder zu stylen.

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

3. Fügen Sie nun mit JavaScript einen Klick-Event-Listener zu jedem Bild hinzu. Wenn der Benutzer auf ein Bild klickt, wird das JavaScript ein Overlay erstellen und das Bild im Vollbildmodus anzeigen.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // Overlay erstellen
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Bild-Element erstellen
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // Bild-Element zum Overlay hinzufügen
    overlay.appendChild(fullScreenImage);
    
    // Overlay auf die Seite hinzufügen
    document.body.appendChild(overlay);
  });
});
```

4. Fügen Sie schließlich einige CSS hinzu, um das Overlay und das Bild im Vollbildmodus zu stylen.

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

Mit diesen Schritten sollten Sie jetzt eine Galerie haben, die es Benutzern ermöglicht, Bilder im Vollbildmodus anzuzeigen, indem sie darauf tippen.
