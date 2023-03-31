---
title: Beispiele für die Verwendung des <picture>-Elements
description: >-
  Bietet Beispiele für die Verwendung des <picture>-Elements für responsive Bilder, Art Direction und verschiedene Bildformate.
taskInputHash: aace1b3e0a9751e5
lang: de
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Hier sind einige Beispiele für die Verwendung des `<picture>`-Elements und deren Erklärungen:

1\. Beispiel für responsive Bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um unterschiedliche Bildquellen für verschiedene Bildschirmgrößen bereitzustellen. Die `<source>`-Elemente geben die verschiedenen Bildquellen unter Verwendung des "srcset"-Attributs und des "media"-Attributs an, um die Bedingungen zu definieren, unter welchen jede Quelle verwendet werden soll. Das `<img>`-Element wird als Ausweichlösung für ältere Browser oder wenn die in den `<source>`-Elementen angegebenen Bedingungen nicht erfüllt sind, verwendet.

2\. Beispiel für Art Direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um unterschiedliche Bildquellen abhängig von der Ausrichtung des Geräts bereitzustellen. Das `<source>`-Element mit dem "media"-Attribut, das auf "(orientation: landscape)" gesetzt ist, gibt eine Bildquelle für breite Bildschirme an, während das `<img>`-Element eine Bildquelle für Portraitbildschirme angibt.

3\. Beispiel für verschiedene Bildformate:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um unterschiedliche Bildquellen für verschiedene Bildformate bereitzustellen. Die `<source>`-Elemente geben unterschiedliche Bildquellen unter Verwendung des "srcset"-Attributs und des "type"-Attributs an, um das Bildformat zu definieren. Das `<img>`-Element wird als Ausweichlösung für ältere Browser, die das `<picture>`-Element nicht unterstützen, verwendet.

## Breakpoints

In responsive Design werden Breakpoints verwendet, um zu definieren, wann das Layout einer Website oder Anwendung basierend auf der Größe des Viewports geändert werden soll. Breakpoints werden typischerweise mit Media Queries in CSS definiert, die unterschiedliche Styles abhängig von der Bildschirmbreite anwenden. Diese Breakpoints können in Verbindung mit dem `<picture>`-Element verwendet werden, um unterschiedliche Bildquellen für verschiedene Bildschirmgrößen bereitzustellen.

Im ersten Beispiel oben verwendeten wir das `media`-Attribut, um die Bildschirmbreite anzugeben, bei der jede Quelle verwendet werden sollte. Wenn die Bildschirmbreite größer oder gleich 768 Pixel beträgt, wird die Quelle `image-large.jpg` verwendet. Wenn die Bildschirmbreite größer oder gleich 480 Pixel, aber kleiner als 768 Pixel ist, wird die Quelle `image-medium.jpg` verwendet. Wenn die Bildschirmbreite kleiner als 480 Pixel ist, wird die Quelle `image-small.jpg` verwendet. Dadurch können für jedes Gerät angemessen dimensionierte Bilder bereitgestellt werden, was die Ladezeiten der Seite reduziert und die Benutzererfahrung verbessert.

Breakpoints können für jede Bildschirmgröße definiert werden, und mehrere Breakpoints können verwendet werden, um Layouts zu erstellen, die auf eine breite Palette von Geräten reagieren. Durch die Kombination von Breakpoints mit dem `<picture>`-Element können flexible und reaktionsfähige Designs erstellt werden, die auf jedem Gerät großartig aussehen.
