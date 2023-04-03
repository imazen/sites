---
title: >-
  "Fügen Sie die Option 'Tippen Sie hier, um ein Vollbildbild anzuzeigen' zu
  einer Galerie hinzu"
description: >-
  "Wie man der Galerie eine Option zum Tippen hinzufügt, um ein Vollbildbild
  anzuzeigen"
taskInputHash: 2080950563d7aca8
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Um eine Option "Tippen Sie, um das Vollbildbild anzuzeigen" zu einer Galerie hinzuzufügen, können Sie JavaScript und CSS verwenden, um ein Overlay zu erstellen, das das Bild im Vollbildmodus anzeigt, wenn der Benutzer darauf tippt.

Hier ist ein grundlegender Ansatz, den Sie verwenden können:
1. Erstellen Sie zunächst einen Container für Ihre Galerie und fügen Sie alle Bilder hinzu, die Sie anzeigen möchten.

```html
<div class="galerie">
  <img src="bild1.jpg">
  <img src="bild2.jpg">
  <img src="bild3.jpg">
  <!-- hier weitere Bilder hinzufügen -->
</div>
```


2. Fügen Sie als nächstes einige CSS hinzu, um die Galerie und die Bilder zu gestalten.

```css
.galerie {
  display: flex;
  flex-wrap: wrap;
}

.galerie img {
  width: 100%;
  height: auto;
  margin: 5px;
}
```


3. Fügen Sie jetzt über JavaScript jedem Bild einen Klick-Event-Listener hinzu. Wenn der Benutzer auf ein Bild klickt, erstellt das JavaScript ein Overlay und zeigt das Bild im Vollbildmodus an.

```javascript
const galerie = document.querySelector('.galerie');
const bilder = galerie.querySelectorAll('img');

bilder.forEach((bild) => {
  bild.addEventListener('click', () => {
    // Overlay erstellen
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Bildelement erstellen
    const vollbildBild = document.createElement('img');
    vollbildBild.src = bild.src;
    vollbildBild.classList.add('vollbild-bild');
    
    // Bildelement zum Overlay hinzufügen
    overlay.appendChild(vollbildBild);
    
    // Overlay zur Seite hinzufügen
    document.body.appendChild(overlay);
  });
});
```


4. Fügen Sie schließlich einige CSS hinzu, um das Overlay und das Vollbildbild zu gestalten.

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

.vollbild-bild {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```



Mit diesen Schritten sollten Sie jetzt eine Galerie haben, die Benutzern ermöglicht, Bilder im Vollbildmodus anzuzeigen, indem sie darauf tippen.
