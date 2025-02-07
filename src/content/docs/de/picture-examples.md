---
taskInputHash: 5ee92d11918ca10e
title: Beispiele für die Verwendung des `<picture>`-Elements
description: >-
  Bietet Beispiele für die Verwendung des `<picture>`-Elements, für responsive
  Bilder, künstlerische Gestaltung und unterschiedliche Bildformate.
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
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

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen für unterschiedliche Bildschirmgrößen bereitzustellen. Die `<source>`-Elemente geben die verschiedenen Bildquellen mit dem "srcset"-Attribut und dem "media"-Attribut an, um die Bedingungen zu spezifizieren, unter denen jede Quelle verwendet werden soll. Das `<img>`-Element wird als Fallback für ältere Browser oder wenn die im `<source>`-Element angegebenen Bedingungen nicht erfüllt sind, verwendet.

2\. Beispiel für künstlerische Gestaltung:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen abhängig von der Ausrichtung des Geräts bereitzustellen. Das `<source>`-Element mit dem "media"-Attribut auf "(orientation: landscape)" eingestellt, gibt eine Bildquelle für breite Bildschirme an, während das `<img>`-Element eine Bildquelle für Hochformat-Bildschirme angibt.

3\. Beispiel für unterschiedliche Bildformate:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element genutzt, um verschiedene Bildquellen für unterschiedliche Bildformate bereitzustellen. Die `<source>`-Elemente spezifizieren verschiedene Bildquellen mithilfe des "srcset"-Attributs und des "type"-Attributs, um das Bildformat anzugeben. Das `<img>`-Element wird als Fallback für ältere Browser verwendet, die das `<picture>`-Element nicht unterstützen.

## Breakpoints

In der responsiven Gestaltung werden Breakpoints verwendet, um zu definieren, wann das Layout einer Website oder Anwendung basierend auf der Größe des Viewports geändert werden sollte. Breakpoints werden typischerweise mit Media Queries in CSS definiert, die je nach Bildschirmbreite verschiedene Stile anwenden. Diese Breakpoints können zusammen mit dem `<picture>`-Element verwendet werden, um verschiedene Bildquellen für unterschiedliche Bildschirmgrößen bereitzustellen.

Zum Beispiel haben wir im ersten oben genannten Beispiel das `media`-Attribut verwendet, um die Bildschirmbreite anzugeben, unter der jede Quelle verwendet werden soll. Wenn die Bildschirmbreite größer oder gleich 768 Pixel ist, wird die Quelle `image-large.jpg` verwendet; wenn die Bildschirmbreite größer oder gleich 480 Pixel, aber kleiner als 768 Pixel ist, wird die Quelle `image-medium.jpg` verwendet; und wenn die Bildschirmbreite weniger als 480 Pixel beträgt, wird die Quelle `image-small.jpg` verwendet. Dies ermöglicht es uns, für jedes Gerät entsprechend dimensionierte Bilder bereitzustellen, wodurch die Ladezeiten der Seite verringert und die Benutzererfahrung verbessert wird.

Breakpoints können bei jeder Bildschirmgröße definiert werden und mehrere Breakpoints können genutzt werden, um Layouts zu erstellen, die auf eine breite Palette von Geräten reagieren. Durch die Kombination von Breakpoints mit dem `<picture>`-Element können Sie flexible und responsive Designs erstellen, die auf jedem Gerät großartig aussehen.
