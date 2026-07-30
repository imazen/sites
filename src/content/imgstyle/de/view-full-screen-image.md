---
taskInputHash: 0cd236535c842533
title: 'Tippen hinzufügen, um Bild im Vollbildmodus in einer Galerie anzuzeigen'
description: >-
  So fügen Sie einer Galerie eine Option zum Tippen hinzu, um das Bild im
  Vollbildmodus anzuzeigen
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Um eine "Tippen, um das Bild im Vollbildmodus anzuzeigen"-Option zu einer Galerie hinzuzufügen, können Sie JavaScript und CSS verwenden, um eine Überlagerung zu erstellen, die das Bild im Vollbildmodus anzeigt, wenn der Benutzer darauf tippt.

Hier ist ein grundlegender Ansatz, den Sie verwenden können:
1. Erstellen Sie zunächst einen Container für Ihre Galerie und fügen Sie alle Bilder hinzu, die Sie anzeigen möchten.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- fügen Sie hier mehr Bilder hinzu -->
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


3. Nun fügen Sie mit JavaScript einen Klick-Event-Listener für jedes Bild hinzu. Wenn der Benutzer auf ein Bild klickt, erstellt das JavaScript eine Überlagerung und zeigt das Bild im Vollbildmodus an.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // Überlagerung erstellen
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Bildelement erstellen
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // Bildelement zur Überlagerung hinzufügen
    overlay.appendChild(fullScreenImage);
    
    // Überlagerung zur Seite hinzufügen
    document.body.appendChild(overlay);
  });
});
```


4. Fügen Sie abschließend etwas CSS hinzu, um die Überlagerung und das Vollbildbild zu gestalten.

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
