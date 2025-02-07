---
taskInputHash: 0f81c73685082d74
title: Ein Bild polstern
description: Wie man ein Bild mit CSS und Seitenverhältnis zentriert und polstert
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
So können Sie CSS und das Seitenverhältnis verwenden, um ein Bild zu zentrieren und zu polstern:
1. Zuerst müssen Sie Ihr Bild in einem Containerelement wie einem `<div>` oder `<figure>` einbetten. Dies ermöglicht es Ihnen, Stile auf den Container anzuwenden, die das darin befindliche Bild beeinflussen.
2. Setzen Sie die `position`-Eigenschaft des Containers auf `relative`. Dies ermöglicht es Ihnen, das Bild innerhalb des Containers zu positionieren.
3. Fügen Sie dem Container ein `::after`-Pseudoelement hinzu. Dies wird verwendet, um das Seitenverhältnis des Bildes beizubehalten und die Polsterung zu erstellen.
4. Setzen Sie die `content`-Eigenschaft des `::after`-Pseudoelements auf einen leeren String. Dies ist notwendig, um das Element zu erstellen.
5. Setzen Sie die `padding-bottom`-Eigenschaft des `::after`-Pseudoelements auf einen Prozentsatzwert, der dem Seitenverhältnis des Bildes entspricht. Zum Beispiel, wenn Ihr Bild ein Seitenverhältnis von 4:3 hat, würden Sie die Polsterung auf `75%` setzen (da 3/4 = 0,75). Dies wird die Polsterung unter dem Bild erstellen.
6. Setzen Sie die `position`-Eigenschaft des `::after`-Pseudoelements auf `absolute`. Dies positioniert das Element innerhalb des Containers.
7. Setzen Sie die `top`, `left`, `bottom` und `right` Eigenschaften des `::after`-Pseudoelements auf `0`. Dies wird das Element den gesamten Container ausfüllen lassen und so die Polsterung erstellen.
8. Schließlich setzen Sie die `position`-Eigenschaft des Bildes selbst auf `absolute`. Dies ermöglicht es Ihnen, das Bild innerhalb des Containers mit den `top`, `left`, `bottom` und `right` Eigenschaften zu zentrieren.

Hier ist ein Beispiel für den CSS-Code, den Sie verwenden würden, um ein Bild mit einem Seitenverhältnis von 4:3 zu zentrieren und zu polstern:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 Seitenverhältnis */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```

In diesem Beispiel ist das `.container`-Element der Container für das Bild. Das `::after`-Pseudoelement wird verwendet, um die Polsterung zu erstellen und das Seitenverhältnis des Bildes beizubehalten. Das `img`-Element wird auf `position: absolute` gesetzt, sodass es innerhalb des Containers mit den `top`, `left`, `bottom` und `right` Eigenschaften zentriert werden kann.

Indem Sie die `max-width` und `max-height` Eigenschaften des Bildes auf `100%` setzen, wird das Bild skaliert, um in den verfügbaren Raum zu passen, während sein Seitenverhältnis beibehalten wird. Das bedeutet, dass die vom `::after`-Pseudoelement erstellte Polsterung immer proportional zur Größe des Bildes ist.
