---
title: Beispiele mit dem <picture>-Element
description: >-
  Dieser Artikel bietet Beispiele für die Verwendung des <picture>-Elements für
  responsiv Bilder, Art Direction und verschiedene Bildformate.
taskInputHash: aace1b3e0a9751e5
lang: de
---
Hier sind einige Beispiele für die Verwendung des `<picture>`-Elements und deren Erklärungen:

1\. Beispiel für responsiv Bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen für verschiedene Bildschirmgrößen bereitzustellen. Die `<source>`-Elemente geben die verschiedenen Bildquellen mit dem Attribut "srcset" und dem Attribut "media" an, um die Bedingungen festzulegen, unter denen jede Quelle verwendet werden soll. Das `<img>`-Element dient als Fallback für ältere Browser oder wenn die in den `<source>`-Elementen angegebenen Bedingungen nicht erfüllt sind.

2\. Beispiel für Art Direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen je nach Ausrichtung des Geräts bereitzustellen. Das `<source>`-Element mit dem Attribut "media" auf "(orientation: landscape)" gibt eine Bildquelle für breite Bildschirme an, während das `<img>`-Element eine Bildquelle für Hochkantbildschirme angibt.

3\. Beispiel für verschiedene Bildformate:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen für verschiedene Bildformate bereitzustellen. Die `<source>`-Elemente geben verschiedene Bildquellen mit dem Attribut "srcset" und dem Attribut "type" an, um das Bildformat anzugeben. Das `<img>`-Element dient als Fallback für ältere Browser, die das `<picture>`-Element nicht unterstützen.

## Breakpoints

In responsivem Design werden Breakpoints verwendet, um festzulegen, wann das Layout einer Website oder Anwendung basierend auf der Größe des Viewports geändert werden sollte. Breakpoints werden in der Regel mit Medienabfragen in CSS definiert, die je nach Bildschirmbreite unterschiedliche Stile anwenden. Diese Breakpoints können in Verbindung mit dem `<picture>`-Element verwendet werden, um verschiedene Bildquellen für verschiedene Bildschirmgrößen bereitzustellen.

In unserem ersten Beispiel haben wir das Attribut `media` verwendet, um die Bildschirmbreite festzulegen, unter der jede Quelle verwendet werden soll. Wenn die Bildschirmbreite größer als oder gleich 768 Pixel ist, wird die Quelle "image-large.jpg" verwendet; wenn die Bildschirmbreite größer als oder gleich 480 Pixel, aber kleiner als 768 Pixel ist, wird die Quelle "image-medium.jpg" verwendet; und wenn die Bildschirmbreite kleiner als 480 Pixel ist, wird die Quelle "image-small.jpg" verwendet. Dadurch können angemessen dimensionierte Bilder für jedes Gerät bereitgestellt werden, was die Ladezeiten der Seite reduziert und die Benutzererfahrung verbessert.

Breakpoints können bei jeder Bildschirmgröße definiert werden, und mehrere Breakpoints können verwendet werden, um Layouts zu erstellen, die auf eine Vielzahl von Geräten reagieren. Durch die Kombination von Breakpoints mit dem `<picture>`-Element können Sie flexible und responsiv Designs erstellen, die auf jedem Gerät großartig aussehen.
