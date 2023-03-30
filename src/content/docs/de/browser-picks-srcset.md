---
title: Wie der Browser auswählt
description: >-
  Wie der Browser zwischen Bildern auswählt, die im `srcset`-Attribut
  aufgelistet sind.
taskInputHash: 21fa78dd27583003
lang: de
---
Wie wählt der Browser zwischen den in dem `srcset`-Attribut aufgelisteten Bildern aus? Hier sind alle Schritte mit Beispielen für sowohl Breiten- als auch Dichtespezifikationen und wie der Browser anhand von Gerät und Viewport entscheidet.

- Wenn man das `srcset`-Attribut in HTML verwendet, benutzt der Browser eine Reihe von Regeln, um das am besten geeignete Bild aus einer Liste von bereitgestellten Quellen auszuwählen. Diese Regeln hängen von den Anzeigeeigenschaften des Geräts (Auflösung, Pixeldichte) und der Größe des Viewports ab. Das `srcset`-Attribut ermöglicht es, verschiedene Bilder basierend auf der Breite (unter Verwendung des `w`-Descriptors) oder der Pixeldichte (unter Verwendung des `x`-Descriptors) zu spezifizieren. Hier sind alle Fälle mit Beispielen aufgelistet.

1\. Breitendescriptor (`w`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Beispielbild">

```

Der Browser führt folgende Schritte aus:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat beispielsweise eine DPR von 1, während ein hochauflösendes (Retina-) Display eine DPR von 2 oder höher hat.

b. Berechnen Sie die effektive Breite für jedes Bild in der `srcset`. Multiplizieren Sie den Breitendescriptor mit der DPR. Für ein Gerät mit einer DPR von 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Vergleichen Sie die effektiven Breiten mit der Viewport-Breite. Gehen Sie davon aus, dass die Viewport-Breite 420px beträgt. Der Browser wählt das kleinste Bild mit einer effektiven Breite aus, die größer oder gleich der Breite des Viewports ist. In diesem Fall wird `example-medium.jpg` ausgewählt.

1\. Dichtedescriptor (`x`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Beispielbild">

```

Der Browser führt folgende Schritte aus:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat beispielsweise eine DPR von 1, während ein hochauflösendes (Retina-) Display eine DPR von 2 oder höher hat.

b. Vergleichen Sie die DPR des Geräts mit den `x`-descriptors in der `srcset`. In diesem Fall haben wir drei Bilder mit den folgenden Descriptoren:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Wählen Sie das Bild mit dem `x`-Descriptor, der der DPR des Geräts am nächsten liegt. Für ein Gerät mit einer DPR von 1 wählt der Browser `example-1x.jpg` aus. Für ein Gerät mit einer DPR von 2 wählt er `example-2x.jpg` usw.

Es ist wichtig zu beachten, dass man auch das `sizes`-Attribut in Kombination mit dem `srcset`-Attribut verwenden kann, um mehr Informationen darüber zu liefern, wie das Bild bei verschiedenen Viewport-Breiten dargestellt wird. Dies ist besonders nützlich bei Verwendung des Breitendescriptors (`w`). Hier ist ein Beispiel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
