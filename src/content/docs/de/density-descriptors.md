---
title: Density-Deskriptoren & Srcset
description: Beispiele zur Verwendung von Density-Deskriptoren in `srcset`
taskInputHash: bb5fed05291ed4a0
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Srcset mit Density-Deskriptoren bietet eine einfache und effektive Methode, um das geeignetste Bild für jedes Gerät des Benutzers bereitzustellen, was die Leistung und Benutzererfahrung verbessert. Diese Anleitung führt Sie durch das Wesentliche von Srcset mit Density-Deskriptoren und bietet Markup-Beispiele für Ihre Bequemlichkeit.

## Was ist Srcset mit Density-Deskriptoren?

Srcset ist ein HTML-Attribut, das es Ihnen ermöglicht, mehrere Bildquellen für ein einziges `<img>`-Element anzugeben. Density-Deskriptoren (`x`) werden in Verbindung mit Srcset verwendet, um Bilder mit unterschiedlicher Auflösung basierend auf der Pixel-Dichte des Displays des Benutzers bereitzustellen.

## Wann sollte man Srcset mit Density-Deskriptoren verwenden?

Srcset mit Density-Deskriptoren ist besonders nützlich, wenn Sie:
1. Hochauflösende Bilder auf Bildschirmen mit hoher DPI (z.B. Retina-Displays) anzeigen möchten, während Sie auf Standarddisplays Bilder mit niedriger Auflösung bereitstellen möchten.
2. Die Seitenausführung durch Bereitstellung der geeignetsten Bildgröße für jedes Gerät des Benutzers verbessern möchten. 

## Implementierung von Srcset mit Density-Deskriptoren

Um Srcset mit Density-Deskriptoren zu verwenden, befolgen Sie diese Schritte:
1. Bereiten Sie Ihre Bilder in verschiedenen Auflösungen vor.
2. Fügen Sie dem `<img>`-Element das Attribut `srcset` hinzu, einschließlich der Bildquellen und entsprechender Density-Deskriptoren.
3. Fügen Sie das Attribut `sizes` (optional) hinzu, um die Größe des Bildes auf dem Bildschirm zu spezifizieren.

### Markup-Beispiel

Hier ist ein Beispiel, wie Sie Srcset mit Density-Deskriptoren in Ihrem Markup implementieren können:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Ein Beispielbild">
```

Dieses Markup-Beispiel enthält:
- **src** : Die Standardbildquelle, die angezeigt wird, wenn der Browser Srcset nicht unterstützt.
- **srcset** : Die Liste der Bildquellen und ihrer Density-Deskriptoren (1x, 2x, 3x). Der Browser wählt das geeignetste Bild basierend auf dem Display des Benutzers aus.
- **alt** : Eine Beschreibung des Bildes für Zugänglichkeitszwecke.

Und das ist es! Sie haben erfolgreich Srcset mit Density-Deskriptoren implementiert und die Leistung und Benutzererfahrung Ihrer Website verbessert.
