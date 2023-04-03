---
title: Wie der Browser auswählt
description: >-
  Wie der Browser zwischen Bildern wählt, die in der srcset-Eigenschaft
  aufgeführt sind
taskInputHash: 09ab2b098b259019
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Wie entscheidet der Browser zwischen den in der `srcset`-Eigenschaft aufgeführten Bildern? Hier ist eine schrittweise Anleitung mit Beispielen sowohl für Breiten- als auch für Dichtespezifikationen und wie der Browser auf Grundlage von Gerät und Ansicht entscheidet. 

- Wenn in HTML die `srcset`-Eigenschaft verwendet wird, verwendet der Browser eine Reihe von Regeln, um das am besten geeignete Bild aus einer Liste von bereitgestellten Quellen auszuwählen. Diese Regeln hängen sowohl von den Anzeigeeigenschaften des Geräts (Auflösung, Pixeldichte) als auch von der Größe des Viewports ab. Die `srcset`-Eigenschaft ermöglicht Ihnen das Angeben unterschiedlicher Bilder basierend auf der Breite (unter Verwendung des `w`-Deskriptors) oder der Pixeldichte (unter Verwendung des `x`-Deskriptors). Lassen Sie uns jeden Fall mit Beispielen durchgehen.

1\. Breitendeskriptor (`w`):

Angenommen, wir haben die folgende `srcset`-Eigenschaft:

```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Beispielbild">
```

Der Browser wird diese Schritte ausführen:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat beispielsweise eine DPR von 1, während ein hochauflösendes (Retina-)Display eine DPR von 2 oder höher hat.

b. Berechnen Sie die effektive Breite für jedes Bild in der `srcset`. Multiplizieren Sie den Breitendeskriptor mit der DPR. Für ein Gerät mit einer DPR von 1:

- example-small.jpg: 400 \* 1 = 400px
- example-medium.jpg: 800 \* 1 = 800px
- example-large.jpg: 1600 \* 1 = 1600px

c. Vergleichen Sie die effektiven Breiten mit der Viewport-Breite. Nehmen Sie an, dass die Viewport-Breite 420px beträgt. Der Browser wählt das kleinste Bild mit einer effektiven Breite aus, die größer oder gleich der Viewport-Breite ist. In diesem Fall wird `example-medium.jpg` ausgewählt.

2\. Pixeldichtedeskriptor (`x`):

Angenommen, wir haben die folgende `srcset`-Eigenschaft:

```html
<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Beispielbild">
```

Der Browser wird diese Schritte ausführen:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat beispielsweise eine DPR von 1, während ein hochauflösendes (Retina-)Display eine DPR von 2 oder höher hat.

b. Vergleichen Sie die DPR des Geräts mit den `x`-Deskriptoren in der `srcset`. In diesem Fall haben wir drei Bilder mit den folgenden Deskriptoren:

- example-1x.jpg: 1x
- example-2x.jpg: 2x
- example-3x.jpg: 3x

c. Wählen Sie das Bild mit dem `x`-Deskriptor aus, der der DPR des Geräts am nächsten kommt. Für ein Gerät mit einer DPR von 1 wird der Browser `example-1x.jpg` auswählen. Für ein Gerät mit einer DPR von 2 wird er `example-2x.jpg` wählen und so weiter.

Es ist wichtig zu beachten, dass Sie auch die `sizes`-Eigenschaft in Kombination mit der `srcset`-Eigenschaft verwenden können, um weitere Informationen darüber zu erhalten, wie das Bild bei unterschiedlichen Viewport-Breiten angezeigt wird. Dies ist besonders nützlich, wenn Sie den Breitendeskriptor (`w`) verwenden. Hier ist ein Beispiel:

```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,
```
