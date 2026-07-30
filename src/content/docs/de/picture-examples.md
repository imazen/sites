---
taskInputHash: c04936c98d50fafa
title: Beispiele zur Verwendung des `<picture>`-Elements
description: >-
  Bietet Beispiele zur Verwendung des `<picture>`-Elements für responsive
  Bilder, künstlerische Gestaltung und verschiedene Bildformate.
date_published: '2026-07-30'
date_modified: '2026-07-30'
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

Erläuterung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen für unterschiedliche Bildschirmgrößen bereitzustellen. Die `<source>`-Elemente geben die verschiedenen Bildquellen mit dem "srcset"-Attribut und dem "media"-Attribut an, um die Bedingungen zu spezifizieren, unter denen jede Quelle verwendet werden soll. Das `<img>`-Element dient als Fallback für ältere Browser oder wenn die im `<source>`-Element angegebenen Bedingungen nicht erfüllt sind.

2\. Beispiel für künstlerische Gestaltung:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Ein Bild" />
</picture>
```

Erläuterung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen abhängig von der Ausrichtung des Geräts bereitzustellen. Das `<source>`-Element mit dem "media"-Attribut auf "(orientation: landscape)" stellt eine Bildquelle für breite Bildschirme bereit, während das `<img>`-Element eine Bildquelle für Hochformatbildschirme angibt.

3\. Beispiel für verschiedene Bildformate:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Ein Bild" />
</picture>
```

Erläuterung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen für verschiedene Bildformate bereitzustellen. Die `<source>`-Elemente geben verschiedene Bildquellen mit dem "srcset"-Attribut und dem "type"-Attribut an, um das Bildformat festzulegen. Das `<img>`-Element dient als Fallback für ältere Browser, die das `<picture>`-Element nicht unterstützen.

## Breakpoints

In responsivem Design werden Breakpoints verwendet, um zu definieren, wann das Layout einer Website oder Anwendung basierend auf der Größe des Ansichtsfensters ändern soll. Breakpoints werden typischerweise mit Media Queries in CSS definiert, die je nach Bildschirmbreite unterschiedliche Stile anwenden. Diese Breakpoints können in Verbindung mit dem `<picture>`-Element verwendet werden, um verschiedene Bildquellen für unterschiedliche Bildschirmgrößen bereitzustellen.

Zum Beispiel haben wir im ersten oben gezeigten Beispiel das `media`-Attribut verwendet, um die Bildschirmbreite anzugeben, unter der jede Quelle verwendet werden soll. Wenn die Bildschirmbreite größer oder gleich 768 Pixeln ist, wird die Quelle `image-large.jpg` verwendet; wenn die Bildschirmbreite größer oder gleich 480 Pixeln, aber kleiner als 768 Pixel ist, wird die Quelle `image-medium.jpg` verwendet; und wenn die Bildschirmbreite weniger als 480 Pixel beträgt, wird die Quelle `image-small.jpg` verwendet. Dies ermöglicht es uns, entsprechend dimensionierte Bilder für jedes Gerät bereitzustellen, die Ladezeiten der Seite zu verkürzen und die Benutzererfahrung zu verbessern.

Breakpoints können bei jeder Bildschirmgröße definiert werden und mehrere Breakpoints können verwendet werden, um Layouts zu erstellen, die auf eine Vielzahl von Geräten reagieren. Durch die Kombination von Breakpoints mit dem `<picture>`-Element können Sie flexible und responsive Designs erstellen, die auf jedem Gerät großartig aussehen.
