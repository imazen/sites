---
title: Ein Bild polstern
description: 'Wie man ein Bild mit CSS und Seitenverhältnis polstert, um es zu zentrieren'
taskInputHash: ea17d80687a852bb
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
So können Sie CSS und Seitenverhältnis verwenden, um ein Bild zu zentrieren und zu polstern:
1. Zuerst müssen Sie Ihr Bild in ein Container-Element einwickeln, wie z.B. ein `<div>` oder `<figure>`. Dadurch können Sie dem Container Stile hinzufügen, die sich auf das Bild im Inneren auswirken.
2. Setzen Sie die `position` Eigenschaft des Containers auf `relative`. Dadurch können Sie das Bild innerhalb des Containers positionieren.
3. Fügen Sie dem Container ein `::after` Pseudo-Element hinzu. Dies wird verwendet, um das Seitenverhältnis des Bildes aufrechtzuerhalten und das Polster zu erstellen.
4. Setzen Sie die `content` Eigenschaft des `::after` Pseudo-Elements auf einen leeren String. Dies ist notwendig, um das Element zu erzeugen.
5. Setzen Sie die `padding-bottom` Eigenschaft des `::after` Pseudo-Elements auf einen Prozentwert, der dem Seitenverhältnis des Bildes entspricht. Zum Beispiel, wenn Ihr Bild ein Seitenverhältnis von 4:3 hat, würden Sie das Polster auf `75%` setzen (da 3/4 = 0,75). Dadurch wird das Polster unterhalb des Bildes erstellt.
6. Setzen Sie die `position` Eigenschaft des `::after` Pseudo-Elements auf `absolute`. Dadurch wird das Element innerhalb des Containers positioniert.
7. Setzen Sie die `top`, `left`, `bottom` und `right` Eigenschaften des `::after` Pseudo-Elements auf `0`. Dadurch wird das Element den Container ausfüllen und das Polster erstellen.
8. Schließlich setzen Sie die `position` Eigenschaft des Bildes selbst auf `absolute`. Dadurch können Sie das Bild innerhalb des Containers mit Hilfe der `top`, `left`, `bottom` und `right` Eigenschaften zentrieren.

Hier ist ein Beispiel für den CSS-Code, den Sie verwenden würden, um ein Bild mit einem Seitenverhältnis von 4:3 zu zentrieren und zu polstern:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* Seitenverhältnis 4:3 */
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

In diesem Beispiel ist das `.container` Element der Container für das Bild. Das `::after` Pseudo-Element wird verwendet, um das Polster zu erstellen und das Seitenverhältnis des Bildes aufrechtzuerhalten. Das `img` Element ist auf `position: absolute` gesetzt, so dass es mit Hilfe der `top`, `left`, `bottom` und `right` Eigenschaften zentriert werden kann.

Durch das Setzen der `max-width` und `max-height` Eigenschaften des Bildes auf `100%` wird das Bild so skaliert, dass es in den verfügbaren Platz passt und dabei sein Seitenverhältnis beibehält. Dies bedeutet, dass das Polster, das durch das `::after` Pseudo-Element erstellt wird, immer proportional zur Größe des Bildes sein wird.
