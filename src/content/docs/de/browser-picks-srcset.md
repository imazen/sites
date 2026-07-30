---
taskInputHash: 5770015b392b90e4
title: Wie der Browser wählt
description: 'Wie der Browser zwischen Bildern wählt, die im srcset-Attribut aufgeführt sind'
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Wie wählt der Browser zwischen Bildern, die im `srcset`-Attribut aufgeführt sind? Hier ist eine Schritt-für-Schritt-Anleitung mit Beispielen für sowohl Breiten- als auch Dichtespezifikationen und wie der Browser basierend auf dem Gerät und der Ansicht entscheidet.

- Bei der Verwendung des `srcset`-Attributs in HTML verwendet der Browser eine Reihe von Regeln, um das am besten geeignete Bild aus einer Liste von bereitgestellten Quellen auszuwählen. Diese Regeln hängen sowohl von den Anzeigeeigenschaften des Geräts (Auflösung, Pixeldichte) als auch von der Größe des Viewports ab. Das `srcset`-Attribut ermöglicht es Ihnen, verschiedene Bilder basierend auf der Breite (mit dem `w`-Deskriptor) oder der Pixeldichte (mit dem `x`-Deskriptor) anzugeben. Lassen Sie uns jeden Fall mit Beispielen durchgehen.

1\. Breiten-Deskriptor (`w`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Beispielbild">

```

Der Browser wird diese Schritte ausführen:

a. Bestimmen Sie das DPR (Device Pixel Ratio) des Geräts. Zum Beispiel hat ein Standard-Display ein DPR von 1, während ein hochauflösendes (Retina) Display ein DPR von 2 oder höher hat.

b. Berechnen Sie die effektive Breite für jedes Bild im `srcset`. Multiplizieren Sie den Breiten-Deskriptor mit dem DPR. Für ein Gerät mit einem DPR von 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Vergleichen Sie die effektiven Breiten mit der Viewport-Breite. Angenommen, die Viewport-Breite beträgt 420px. Der Browser wählt das kleinste Bild mit einer effektiven Breite, die größer oder gleich der Viewport-Breite ist. In diesem Fall wird `example-medium.jpg` ausgewählt.

1\. Pixeldichte-Deskriptor (`x`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Beispielbild">

```

Der Browser wird diese Schritte ausführen:

a. Bestimmen Sie das DPR (Device Pixel Ratio) des Geräts. Zum Beispiel hat ein Standard-Display ein DPR von 1, während ein hochauflösendes (Retina) Display ein DPR von 2 oder höher hat.

b. Vergleichen Sie das DPR des Geräts mit den `x`-Deskriptoren im `srcset`. In diesem Fall haben wir drei Bilder mit den folgenden Deskriptoren:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Wählen Sie das Bild mit dem `x`-Deskriptor, das am nächsten zu dem DPR des Geräts liegt. Für ein Gerät mit einem DPR von 1 wählt der Browser `example-1x.jpg`. Für ein Gerät mit einem DPR von 2 wird `example-2x.jpg` gewählt, und so weiter.

Es ist wichtig zu beachten, dass Sie auch das `sizes`-Attribut in Kombination mit dem `srcset`-Attribut verwenden können, um mehr Informationen darüber bereitzustellen, wie das Bild bei verschiedenen Viewport-Breiten angezeigt wird. Dies ist besonders nützlich, wenn Sie den Breiten-Deskriptor (`w`) verwenden. Hier ist ein Beispiel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
