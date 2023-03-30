---
title: Density-Descriptoren und Srcset
description: Beispiele für die Verwendung von Density-Descriptoren in `srcset`
taskInputHash: db34acb106c5a3dd
lang: de
---
Srcset mit Density Descriptors bietet eine einfache und effektive Methode für die Bereitstellung des am besten geeigneten Bildes für jedes Gerät des Benutzers und verbessert die Leistung und die Benutzererfahrung. Diese Anleitung führt Sie durch die Grundlagen der Verwendung von Srcset mit Density Descriptors und bietet Markup-Beispiele für Ihre Bequemlichkeit.

## Was ist Srcset mit Density Descriptors?

Srcset ist ein HTML-Attribut, das es ermöglicht, mehrere Bildquellen für ein einzelnes `<img>`-Element anzugeben. Density Descriptors (`x`) werden in Verbindung mit srcset verwendet, um Bilder in unterschiedlicher Auflösung basierend auf der Pixeldichte des Displays des Benutzers bereitzustellen.

## Wann soll man Srcset mit Density Descriptors verwenden?

Die Verwendung von srcset mit Density Descriptors ist besonders nützlich, wenn Sie:
1. Hochauflösende Bilder für hohe DPI-Displays (z.B. Retina-Displays) bereitstellen möchten, während Sie für Standard-Displays niedrigere Auflösungen verwenden.
2. Die Seitenausführung durch die Bereitstellung der am besten geeigneten Bildgröße für jedes Gerät des Benutzers verbessern möchte.

## Implementierung von Srcset mit Density Descriptors

Um srcset mit Density Descriptors zu verwenden, befolgen Sie diese Schritte:
1. Bereiten Sie Ihre Bilder in verschiedenen Auflösungen vor.
2. Fügen Sie das `srcset`-Attribut zum `<img>`-Element hinzu, einschließlich der Bildquellen und entsprechenden Density Descriptors.
3. Fügen Sie das `sizes`-Attribut optional hinzu, um die Größe des Bildes auf dem Bildschirm festzulegen.

### Markup Beispiel

Hier ist ein Beispiel, wie Sie srcset mit Density Descriptors in Ihrem Markup implementieren:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Ein Beispielbild">
```

Dieses Markup-Beispiel enthält:
- **src**: Die Standardbildquelle, die angezeigt wird, wenn der Browser srcset nicht unterstützt.
- **srcset**: Die Liste der Bildquellen und ihrer Density Descriptors (1x, 2x, 3x). Der Browser wählt das am besten geeignete Bild basierend auf dem Display des Benutzers aus.
- **alt**: Eine Beschreibung des Bildes zu Zwecken der Barrierefreiheit.

Und das war es schon! Sie haben srcset mit Density Descriptors erfolgreich implementiert und damit die Leistung und Benutzererfahrung Ihrer Website verbessert.
