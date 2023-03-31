---
title: Beispiele zur Verwendung des <picture>-Elements
description: >-
  Beispiele zur Verwendung des <picture>-Elements für responsive Bilder, Art
  Direction und unterschiedliche Bildformate
taskInputHash: d2a1e2234ca5c46c
lang: de
ignore: '/* cSpell:locale de,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Hier sind ein paar Beispiele für die Verwendung des `<picture>` Elements und deren Erklärungen:

1\. Beispiel für Responsive Bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>` Element verwendet, um verschiedene Bildquellen für verschiedene Bildschirmgrößen bereitzustellen. Die `<source>` Elemente geben die verschiedenen Bildquellen mit dem Attribut "srcset" und dem Attribut "media" an, um die Bedingungen festzulegen, unter denen jede Quelle verwendet werden soll. Das `<img>` Element wird als Fallback für ältere Browser oder wenn die Bedingungen in den `<source>` Elementen nicht erfüllt sind verwendet.

2\. Beispiel für Art Direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>` Element verwendet, um verschiedene Bildquellen je nach Ausrichtung des Geräts bereitzustellen. Das `<source>` Element mit dem Attribut "media" auf "(orientation: landscape)" gibt eine Bildquelle für breite Bildschirme an, während das `<img>` Element eine Bildquelle für Portraitbildschirme angibt.

3\. Beispiel für unterschiedliche Bildformate:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>` Element verwendet, um verschiedene Bildquellen für unterschiedliche Bildformate bereitzustellen. Die `<source>` Elemente geben unterschiedliche Bildquellen mit dem Attribut "srcset" und dem Attribut "type" an, um das Bildformat anzugeben. Das `<img>` Element wird als Fallback für ältere Browser verwendet, die das `<picture>` Element nicht unterstützen.

## Breakpoints

In Responsive Design werden Breakpoints verwendet, um festzulegen, wann das Layout einer Website oder Anwendung basierend auf der Größe des Viewports geändert werden sollte. Breakpoints werden typischerweise mit Medienabfragen in CSS definiert, die je nach Bildschirmbreite unterschiedliche Stile anwenden. Diese Breakpoints können in Verbindung mit dem `<picture>` Element verwendet werden, um verschiedene Bildquellen für verschiedene Bildschirmgrößen bereitzustellen.

Zum Beispiel haben wir im obigen ersten Beispiel das Attribut `media` verwendet, um die Bildschirmbreite festzulegen, unter der jede Quelle verwendet werden soll. Wenn die Bildschirmbreite größer oder gleich 768 Pixel ist, wird die Quelle `image-large.jpg` verwendet; wenn die Bildschirmbreite größer oder gleich 480 Pixel, aber weniger als 768 Pixel ist, wird die Quelle `image-medium.jpg` verwendet; und wenn die Bildschirmbreite kleiner als 480 Pixel ist, wird die Quelle `image-small.jpg` verwendet. Dies ermöglicht es uns, für jedes Gerät geeignete Bildgrößen bereitzustellen, um Ladezeiten zu reduzieren und die Benutzererfahrung zu verbessern.

Breakpoints können für jede Bildschirmgröße definiert werden und mehrere Breakpoints können verwendet werden, um Layouts zu erstellen, die auf eine breite Palette von Geräten reagieren. Durch die Kombination von Breakpoints mit dem `<picture>` Element können flexible und reaktionsschnelle Designs erstellt werden, die auf jedem Gerät gut aussehen.
