---
title: Bild polstern
description: Wie man ein Bild mit CSS und Seitenverhältnis zum Zentrieren polstert.
taskInputHash: ed552176cf3bdf5c
lang: de
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
So können Sie CSS und Seitenverhältnisse verwenden, um ein Bild zu zentrieren und zu polstern:

1. Zunächst müssen Sie Ihr Bild in ein Container-Element, wie zum Beispiel ein `<div>` oder `<figure>`, einwickeln. So können Sie Stile auf den Container anwenden, die sich auf das Bild im Inneren auswirken.

2. Setzen Sie die `position` Eigenschaft des Containers auf `relative`. Dadurch können Sie das Bild im Inneren des Containers positionieren.

3. Fügen Sie dem Container ein `::after` Pseudo-Element hinzu. Dies wird verwendet, um das Seitenverhältnis des Bildes beizubehalten und die Polsterung zu erstellen.

4. Legen Sie die `content` Eigenschaft des `::after` Pseudo-Elements auf eine leere Zeichenfolge fest. Dies ist notwendig, um das Element zu erstellen.

5. Legen Sie die `padding-bottom` Eigenschaft des `::after` Pseudo-Elements auf einen Prozentsatzwert fest, der dem Seitenverhältnis des Bildes entspricht. Wenn zum Beispiel das Seitenverhältnis Ihres Bildes 4:3 beträgt, würden Sie die Polsterung auf `75%` setzen (da 3/4 = 0,75). Dadurch wird unter dem Bild eine Polsterung erstellt.

6. Legen Sie die `position` Eigenschaft des `::after` Pseudo-Elements auf `absolute` fest. Dadurch wird das Element innerhalb des Containers positioniert.

7. Legen Sie die `top`, `left`, `bottom` und `right` Eigenschaften des `::after` Pseudo-Elements auf `0` fest. Dadurch wird das Element den Container füllen und die Polsterung erstellen.

8. Schließlich setzen Sie die `position` Eigenschaft des Bildes selbst auf `absolute`. Dadurch können Sie das Bild innerhalb des Containers mit den `top`, `left`, `bottom` und `right` Eigenschaften zentrieren.

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

In diesem Beispiel ist das `.container` Element der Container für das Bild. Das `::after` Pseudo-Element wird verwendet, um die Polsterung zu erstellen und das Seitenverhältnis des Bildes beizubehalten. Das `img` Element ist auf `position: absolute` gesetzt, damit es mit den `top`, `left`, `bottom` und `right` Eigenschaften innerhalb des Containers zentriert werden kann.

Durch das Setzen der `max-width` und `max-height` Eigenschaften des Bildes auf `100%` skaliert das Bild, um den verfügbaren Platz zu füllen, während das Seitenverhältnis beibehalten wird. Dies bedeutet, dass die Polsterung, die durch das `::after` Pseudo-Element erstellt wird, immer proportional zur Größe des Bildes ist.
