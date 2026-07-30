---
taskInputHash: f6db5a545d8761aa
title: Ein Bild mit Abstand versehen
description: >-
  Wie man ein Bild mithilfe von CSS und Seitenverhältnis zentriert mit Abstand
  versieht
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
So können Sie CSS und das Seitenverhältnis verwenden, um ein Bild zu zentrieren und mit Abstand zu versehen: 
1. Zuerst müssen Sie Ihr Bild in ein Container-Element einbetten, wie z.B. ein `<div>` oder `<figure>`. Dadurch können Sie Stile auf den Container anwenden, die das Bild darin beeinflussen. 
2. Setzen Sie die `position`-Eigenschaft des Containers auf `relative`. Dadurch wird es möglich, das Bild innerhalb des Containers zu positionieren. 
3. Fügen Sie dem Container ein `::after` Pseudo-Element hinzu. Dies wird verwendet, um das Seitenverhältnis des Bildes beizubehalten und den Abstand zu erzeugen. 
4. Setzen Sie die `content`-Eigenschaft des `::after` Pseudo-Elements auf einen leeren String. Dies ist notwendig, um das Element zu erstellen. 
5. Setzen Sie die `padding-bottom`-Eigenschaft des `::after` Pseudo-Elements auf einen Prozentwert, der dem Seitenverhältnis des Bildes entspricht. Wenn Ihr Bild beispielsweise ein Seitenverhältnis von 4:3 hat, würden Sie das Padding auf `75%` setzen (da 3/4 = 0,75). Damit wird das Padding unter dem Bild erzeugt. 
6. Setzen Sie die `position`-Eigenschaft des `::after` Pseudo-Elements auf `absolute`. Dadurch wird das Element innerhalb des Containers positioniert. 
7. Setzen Sie die `top`, `left`, `bottom` und `right` Eigenschaften des `::after` Pseudo-Elements auf `0`. Dadurch füllt das Element den Container aus und erzeugt das Padding. 
8. Schließlich setzen Sie die `position`-Eigenschaft des Bildes selbst auf `absolute`. Dies ermöglicht es Ihnen, das Bild mit den Eigenschaften `top`, `left`, `bottom` und `right` innerhalb des Containers zu zentrieren.

Hier ist ein Beispiel für den CSS-Code, den Sie verwenden würden, um ein Bild mit einem Seitenverhältnis von 4:3 zu zentrieren und mit Abstand zu versehen:

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

In diesem Beispiel ist das `.container`-Element der Container für das Bild. Das `::after` Pseudo-Element wird verwendet, um das Padding zu erzeugen und das Seitenverhältnis des Bildes zu erhalten. Das `img`-Element ist auf `position: absolute` gesetzt, sodass es mit den Eigenschaften `top`, `left`, `bottom` und `right` innerhalb des Containers zentriert werden kann.

Indem Sie die Eigenschaften `max-width` und `max-height` des Bildes auf `100%` setzen, wird das Bild skaliert, um in den verfügbaren Raum zu passen, während sein Seitenverhältnis beibehalten wird. Das bedeutet, dass das durch das `::after` Pseudo-Element erzeugte Padding immer proportional zur Größe des Bildes bleibt.
