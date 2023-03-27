---
title: Beispiele für die Verwendung des <picture>-Elements
description: >-
  Bietet Beispiele für die Verwendung des <picture>-Elements für reaktionsfähige
  Bilder, Art Direction und unterschiedliche Bildformate.
taskInputHash: f315b465512d8908
lang: de
---
Geben Sie mehrere Beispiele für die Verwendung des `<picture>`-Elements an und erklären Sie sie knapp

Hier sind einige Beispiele für die Verwendung des `<picture>`-Elements und deren Erklärungen:

1\. Beispiel für reaktionsfähige Bilder:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um verschiedene Bildquellen für verschiedene Bildschirmgrößen bereitzustellen. Die `<source>`-Elemente geben die verschiedenen Bildquellen mit dem Attribute "srcset" und dem Attribute "media" an, um die Bedingungen anzugeben, unter denen jede Quelle verwendet werden soll. Das `<img>`-Element wird als Fallback für ältere Browser oder wenn die Bedingungen, die in den `<source>`-Elementen angegeben sind, nicht erfüllt sind, verwendet.

2\. Beispiel für Art Direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um unterschiedliche Bildquellen je nach Ausrichtung des Geräts bereitzustellen. Das `<source>`-Element mit dem Attribut "media" auf "(orientation: landscape)" gibt eine Bildquelle für breite Bildschirme an, während das `<img>`-Element eine Bildquelle für hochformatige Bildschirme angibt.

3\. Beispiel für unterschiedliche Bildformate:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Ein Bild" />
</picture>
```

Erklärung: In diesem Beispiel wird das `<picture>`-Element verwendet, um unterschiedliche Bildquellen für verschiedene Bildformate bereitzustellen. Die `<source>`-Elemente geben verschiedene Bildquellen mit dem Attribut "srcset" und dem Attribute "type" an, um das Bildformat anzugeben. Das `<img>`-Element wird als Fallback für ältere Browser verwendet, die das `<picture>`-Element nicht unterstützen.
