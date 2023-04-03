---
title: Beispiele mit dem <picture> Element
description: >-
  Bietet Beispiele für die Verwendung des <picture> Elements für responsive
  Bilder, Art Direction und unterschiedliche Bildformate
taskInputHash: b441f3138e70c382
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Hier sind ein paar Beispiele zur Verwendung des `<picture>` Elements und deren Erklärungen:

1\. Beispiel für responsive Bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>` Element verwendet, um unterschiedliche Bildquellen für unterschiedliche Bildschirmgrößen bereitzustellen. Die `<source>` Elemente stellen die unterschiedlichen Bildquellen mit dem Attribut "srcset" und dem Attribut "media" dar, um die Bedingungen festzulegen, unter denen jede Quelle verwendet werden soll. Das `<img>` Element dient als Fallback für ältere Browser oder wenn die Bedingungen in den `<source>` Elementen nicht erfüllt sind.

2\. Beispiel für Art Direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>` Element verwendet, um je nach Ausrichtung des Geräts unterschiedliche Bildquellen bereitzustellen. Das `<source>` Element mit dem Attribut "media", das auf "(orientation: landscape)" festgelegt ist, gibt eine Bildquelle für breite Bildschirme an, während das `<img>` Element eine Bildquelle für hochformatige Bildschirme angibt.

3\. Beispiel für unterschiedliche Bildformate:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>` Element verwendet, um unterschiedliche Bildquellen für unterschiedliche Bildformate bereitzustellen. Die `<source>` Elemente geben unterschiedliche Bildquellen mit dem Attribut "srcset" und dem Attribut "type" an, um das Bildformat zu spezifizieren. Das `<img>` Element dient als Fallback für ältere Browser, die das `<picture>` Element nicht unterstützen.

## Breakpoints

In Responsive Design werden Breakpoints verwendet, um zu definieren, wann das Layout einer Website oder Anwendung basierend auf der Größe des Viewports geändert werden sollte. Breakpoints werden in der Regel mit Media Queries in CSS definiert, die je nach Bildschirmbreite unterschiedliche Stile anwenden. Diese Breakpoints können in Verbindung mit dem `<picture>` Element verwendet werden, um unterschiedliche Bildquellen für unterschiedliche Bildschirmgrößen bereitzustellen.

Zum Beispiel haben wir im ersten Beispiel oben das `media` Attribut verwendet, um die Bildschirmbreite festzulegen, unter der jede Quelle verwendet werden soll. Wenn die Bildschirmbreite größer oder gleich 768 Pixel beträgt, wird die `image-large.jpg` Quelle verwendet; wenn die Bildschirmbreite größer oder gleich 480 Pixel, aber kleiner als 768 Pixel ist, wird die `image-medium.jpg` Quelle verwendet; und wenn die Bildschirmbreite kleiner als 480 Pixel ist, wird die `image-small.jpg` Quelle verwendet. Dadurch können wir für jedes Gerät angemessen dimensionierte Bilder bereitstellen, was die Ladezeiten der Seite reduziert und die Benutzererfahrung verbessert.

Breakpoints können für jede Bildschirmgröße definiert werden, und mehrere Breakpoints können verwendet werden, um Layouts zu erstellen, die auf eine große Auswahl von Geräten reagieren. Durch Kombination von Breakpoints mit dem `<picture>` Element können Sie flexible und responsive Designs erstellen, die auf jedem Gerät großartig aussehen.
