---
taskInputHash: 3cf5b3ab39ae8310
title: Wie der Browser wählt
description: Wie der Browser zwischen den im srcset-Attribut aufgelisteten Bildern wählt
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
Wie wählt der Browser zwischen den im `srcset`-Attribut aufgelisteten Bildern? Hier ist eine Schritt-für-Schritt-Anleitung mit Beispielen sowohl für Breiten- als auch für Dichtespezifikationen und wie der Browser basierend auf Gerät und Viewport entscheidet.

- Beim Verwenden des `srcset`-Attributs in HTML verwendet der Browser eine Reihe von Regeln, um das am besten geeignete Bild aus einer Liste bereitgestellter Quellen auszuwählen. Diese Regeln hängen sowohl von den Anzeigeeigenschaften des Geräts (Auflösung, Pixeldichte) als auch von der Viewport-Größe ab. Das `srcset`-Attribut ermöglicht es Ihnen, verschiedene Bilder basierend auf der Breite (mit dem `w`-Deskriptor) oder der Pixeldichte (mit dem `x`-Deskriptor) anzugeben. Lassen Sie uns jeden Fall mit Beispielen durchgehen.

1\. Breiten-Deskriptor (`w`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Beispielbild">

```

Der Browser befolgt diese Schritte:

a. Bestimmen Sie den DPR (Device Pixel Ratio) des Geräts. Zum Beispiel hat ein Standarddisplay einen DPR von 1, während ein hochauflösendes (Retina) Display einen DPR von 2 oder höher hat.

b. Berechnen Sie die effektive Breite für jedes Bild im `srcset`. Multiplizieren Sie den Breiten-Deskriptor mit dem DPR. Für ein Gerät mit einem DPR von 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Vergleichen Sie die effektiven Breiten mit der Viewport-Breite. Angenommen, die Viewport-Breite beträgt 420px. Der Browser wählt das kleinste Bild mit einer effektiven Breite, die größer oder gleich der Viewport-Breite ist. In diesem Fall wählt er `example-medium.jpg`.

1\. Pixeldichte-Deskriptor (`x`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Beispielbild">

```

Der Browser befolgt diese Schritte:

a. Bestimmen Sie den DPR (Device Pixel Ratio) des Geräts. Zum Beispiel hat ein Standarddisplay einen DPR von 1, während ein hochauflösendes (Retina) Display einen DPR von 2 oder höher hat.

b. Vergleichen Sie den DPR des Geräts mit den `x`-Deskriptoren im `srcset`. In diesem Fall haben wir drei Bilder mit den folgenden Deskriptoren:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Wählen Sie das Bild mit dem `x`-Deskriptor, das dem DPR des Geräts am nächsten kommt. Für ein Gerät mit einem DPR von 1 wählt der Browser `example-1x.jpg`. Für ein Gerät mit einem DPR von 2 wählt er `example-2x.jpg` und so weiter.

Es ist wichtig zu beachten, dass Sie das `sizes`-Attribut in Kombination mit dem `srcset`-Attribut verwenden können, um mehr Informationen darüber bereitzustellen, wie das Bild bei unterschiedlichen Viewport-Breiten angezeigt wird. Dies ist besonders nützlich, wenn der Breiten-Deskriptor (`w`) verwendet wird. Hier ist ein Beispiel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
