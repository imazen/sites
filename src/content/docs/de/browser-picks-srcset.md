---
title: Wie der Browser wählt
description: Wie der Browser zwischen in srcset aufgelisteten Bildern wählt
taskInputHash: 565e2cc4a65e54bd
lang: de
ignore: '/* cSpell:locale de,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Wie wählt der Browser zwischen den in srcset angegebenen Bildern? Hier sind die Schritte mit Beispielen für sowohl Width- als auch Density-Spezifikationen und wie der Browser basierend auf Gerät und Viewport entscheidet:

- Wenn man das `srcset`-Attribut in HTML verwendet, verwendet der Browser eine Grundsätze zur Auswahl des geeignetsten Bildes aus der Liste der bereitgestellten Quellen. Diese Grundsätze hängen sowohl von den Anzeigeeigenschaften des Geräts (Auflösung, Pixeldichte) als auch von der Viewport-Größe ab. Das `srcset`-Attribut ermöglicht es Ihnen, verschiedene Bilder auf der Grundlage der Breite (mit Breiten-Beschreibung `w`) oder der Pixeldichte (mit X-Beschreibung `x`) zu spezifizieren. Lassen Sie uns jeden Fall mit Beispielen durchgehen.

1\. Width-Beschreibung (`w`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Beispielbild">

```

Der Browser wird die folgenden Schritte ausführen:

a. Bestimmen Sie die DPR (Gerätepikselverhältnis) des Geräts. Ein Standardbildschirm hat beispielsweise eine DPR von 1, während ein hochauflösender (Retina-)Bildschirm eine DPR von 2 oder höher hat.

b. Berechnen Sie die effektive Breite für jedes Bild im `srcset`. Multiplizieren Sie die Breiten-Beschreibung mit der DPR. Für ein Gerät mit einem DPR von 1:

- Beispiel-small.jpg: 400 * 1 = 400px

- Beispiel-medium.jpg: 800 * 1 = 800px

- Beispiel-large.jpg: 1600 * 1 = 1600px

c. Vergleichen Sie die effektiven Breiten mit der Viewport-Breite. Angenommen, die Viewport-Breite beträgt 420px. Der Browser wählt das kleinste Bild mit einer effektiven Breite, die größer als oder gleich der Viewport-Breite ist. In diesem Fall wählt er `example-medium.jpg`.


2\. Pixeldichte-Beschreibung (`x`):

Angenommen, wir haben das folgende `srcset`-Attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Beispielbild">

```

Der Browser wird die folgenden Schritte ausführen:

a. Bestimmen Sie die DPR (Gerätepikselverhältnis) des Geräts. Ein Standardbildschirm hat beispielsweise eine DPR von 1, während ein hochauflösender (Retina-)Bildschirm eine DPR von 2 oder höher hat.

b. Vergleichen Sie die DPR des Geräts mit den `x`-Beschreibungen im `srcset`. In diesem Fall haben wir drei Bilder mit den folgenden Beschreibungen:

- Beispiel-1x.jpg: 1x

- Beispiel-2x.jpg: 2x

- Beispiel-3x.jpg: 3x

c. Wählen Sie das Bild mit der `x`-Beschreibung aus, die der DPR des Geräts am nächsten kommt. Für ein Gerät mit einem DPR von 1 wählt der Browser `example-1x.jpg` aus. Für ein Gerät mit einem DPR von 2 wählt er `example-2x.jpg` aus und so weiter.

Es ist wichtig zu beachten, dass man auch das `sizes`-Attribut in Kombination mit dem `srcset`-Attribut verwenden kann, um weitere Informationen darüber zu liefern, wie das Bild bei unterschiedlichen Viewport-Breiten dargestellt wird. Dies ist besonders nützlich bei Verwendung der Breitenbeschreibung (`w`). Hier ist ein Beispiel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
