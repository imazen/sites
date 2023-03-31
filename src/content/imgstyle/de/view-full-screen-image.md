---
title: >-
  Fügen Sie "Tippen Sie, um das Bild im Vollbildmodus anzuzeigen" zu einer
  Galerie hinzu.
description: >-
  Wie Sie eine Tippen-Option erstellen, um ein Bild im Vollbildmodus in einer
  Galerie anzuzeigen.
taskInputHash: dd22005fc000b519
lang: de
ignore: '/* cSpell:locale de,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Um eine "Tippen, um Vollbildansicht des Bildes zu sehen" Option zu einer Galerie hinzuzufügen, können Sie JavaScript und CSS verwenden, um ein Overlay zu erstellen, das das Bild im Vollbildmodus anzeigt, wenn der Benutzer darauf tippt.

Hier ist ein grundlegender Ansatz, den Sie verwenden können:

1. Erstellen Sie zunächst einen Container für Ihre Galerie und fügen Sie alle Bilder hinzu, die Sie anzeigen möchten.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- voeg hier meer afbeeldingen toe -->
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

3. Fügen Sie nun jedem Bild mithilfe von JavaScript einen Klick-Event-Listener hinzu. Wenn der Benutzer auf ein Bild klickt, erstellt das JavaScript ein Overlay und zeigt das Bild im Vollbildmodus an.

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
    
    // Overlay zur Seite hinzufügen
    document.body.appendChild(overlay);
  });
});
```

4. Fügen Sie abschließend etwas CSS hinzu, um das Overlay und das Vollbildbild zu gestalten.

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

Mit diesen Schritten sollten Sie nun eine Galerie haben, mit der Benutzer Bilder im Vollbildmodus anzeigen können, indem sie darauf tippen.
