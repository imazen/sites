---
title: Ein Bild mit Polsterung versehen
description: >-
  Wie man ein Bild mit Polsterung zentriert, indem man CSS und Seitenverhältnis
  verwendet
taskInputHash: ed552176cf3bdf5c
lang: de
---
So verwenden Sie CSS und Seitenverhältnis, um ein Bild zu zentrieren und zu füllen:

1. Wickeln Sie Ihr Bild zunächst in ein Container-Element wie `<div>` oder `<figure>` ein. Dadurch können Sie Stile auf den Container anwenden, die das Bild innen beeinflussen.
2. Legen Sie die Positionseigenschaft des Containers auf `relative` fest. Dies ermöglicht Ihnen, das Bild innerhalb des Containers zu positionieren.
3. Fügen Sie dem Container ein ::after-Pseudo-Element hinzu. Dies wird verwendet, um das Seitenverhältnis des Bildes beizubehalten und die Füllung zu erstellen.
4. Legen Sie die `content`-Eigenschaft des ::after-Pseudo-Elements auf einen leeren Textstring fest. Dies ist notwendig, um das Element zu erstellen.
5. Legen Sie die `padding-bottom`-Eigenschaft des ::after-Pseudo-Elements auf einen Prozentwert fest, der dem Seitenverhältnis des Bildes entspricht. Wenn Ihr Bild beispielsweise ein Seitenverhältnis von 4:3 hat, müssen Sie die Padding auf `75%` einstellen (da 3/4 = 0,75). Dies erstellt die Füllung unter dem Bild.
6. Legen Sie die `position`-Eigenschaft des ::after-Pseudo-Elements auf `absolute` fest. Dadurch wird das Element im Container positioniert.
7. Legen Sie die `top`, `left`, `bottom` und `right`-Eigenschaften des ::after-Pseudo-Elements auf `0` fest. Dies veranlasst das Element, den Container auszufüllen und die Füllung zu erstellen.
8. Schließlich legen Sie die `position`-Eigenschaft des Bildes selbst auf `absolute` fest. Dadurch können Sie das Bild innerhalb des Containers mit Hilfe der Eigenschaften `top`, `left`, `bottom` und `right` zentrieren.

Hier ist ein Beispiel für den CSS-Code, den Sie verwenden würden, um ein Bild mit einem Seitenverhältnis von 4:3 zu zentrieren und zu füllen:

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

In diesem Beispiel ist das `.container`-Element der Container für das Bild. Das `::after`-Pseudo-Element wird verwendet, um die Polsterung zu erstellen und das Seitenverhältnis des Bildes beizubehalten. Das `img`-Element wird auf `position: absolute` gesetzt, damit es mit Hilfe der `top`, `left`, `bottom` und `right` Eigenschaften zentriert werden kann.

Durch Festlegen der `max-width`- und `max-height`-Eigenschaften des Bildes auf `100%`skaliert das Bild, um den verfügbaren Platz auszufüllen, während sein Seitenverhältnis beibehalten wird. Dies bedeutet, dass die Polsterung, die vom `::after`-Pseudo-Element erstellt wurde, immer proportional zur Größe des Bildes ist.
