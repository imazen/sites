---
title: Wie der Browser auswählt
description: >-
  Wie der Browser zwischen Bildern auswählt, die im srcset-Attribut aufgelistet
  sind.
taskInputHash: f4a1a08929f238ac
lang: de
---
Wie wählt der Browser zwischen Bildern aus, die im srcset-Attribut aufgelistet sind? Hier ist eine Schritt-für-Schritt-Anleitung mit Beispielen für Spezifikationen zur Breite und Dichte und wie der Browser anhand von Gerät und Viewport entscheidet.

- Wenn das Attribut `srcset` in HTML verwendet wird, verwendet der Browser eine Reihe von Regeln, um das am besten geeignete Bild aus einer Liste von Quellen auszuwählen. Diese Regeln hängen sowohl von den Anzeigeeigenschaften des Geräts (Auflösung, Pixeldichte) als auch von der Größe des Viewports ab. Das Attribut `srcset` ermöglicht es Ihnen, verschiedene Bilder entsprechend der Breite (mit dem `w`-Deskriptor) oder Pixeldichte (mit dem `x`-Deskriptor) zu spezifizieren. Lassen Sie uns jeden Fall anhand von Beispielen durchgehen.

1\. Breiten-Deskriptor (`w`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Beispielbild">

```

Der Browser wird die folgenden Schritte ausführen:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat z.B. eine DPR von 1, während ein hochauflösendes (Retina-)Display eine DPR von 2 oder höher hat.

b. Berechnen Sie die effektive Breite für jedes in `srcset` enthaltene Bild. Multiplizieren Sie den Breiten-Deskriptor mit der DPR. Für ein Gerät mit einer DPR von 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Vergleichen Sie die effektiven Breiten mit der Viewportbreite. Nehmen Sie an, dass die Viewportbreite 420px beträgt. Der Browser wählt das kleinste Bild mit einer effektiven Breite von größer oder gleich der Viewportbreite aus. In diesem Fall wird `example-medium.jpg` ausgewählt.

2\. Pixeldichte-Deskriptor (`x`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Beispielbild">

```

Der Browser wird die folgenden Schritte ausführen:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat z.B. eine DPR von 1, während ein hochauflösendes (Retina-)Display eine DPR von 2 oder höher hat.

b. Vergleichen Sie die DPR des Geräts mit den `x`-Deskriptoren in `srcset`. In diesem Fall haben wir drei Bilder mit den folgenden Deskriptoren:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Wählen Sie das Bild mit dem `x`-Deskriptor, der der DPR des Geräts am nächsten kommt. Für ein Gerät mit einer DPR von 1 wird der Browser `example-1x.jpg` auswählen. Für ein Gerät mit einer DPR von 2 wird er `example-2x.jpg` auswählen, usw.

Wichtig zu beachten ist, dass Sie auch das `sizes`-Attribut in Kombination mit dem `srcset`-Attribut verwenden können, um weitere Informationen darüber zu geben, wie das Bild bei verschiedenen Viewportbreiten dargestellt wird. Dies ist besonders nützlich bei Verwendung des Breiten-Deskriptors (`w`). Hier ist ein Beispiel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
