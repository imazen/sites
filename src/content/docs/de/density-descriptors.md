---
taskInputHash: 8188e69e4133ac64
title: Dichtebeschreibungen und Srcset
description: Beispiele für die Verwendung von Dichtebeschreibungen in `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
Srcset mit Dichtebeschreibungen bietet eine einfache und effektive Methode, um jedem Benutzergerät das am besten geeignete Bild bereitzustellen und so die Leistung und Benutzererfahrung zu verbessern. Diese Anleitung führt Sie durch die Grundlagen der Verwendung von Srcset mit Dichtebeschreibungen und stellt Ihnen Markup-Beispiele zur Verfügung.

## Was ist Srcset mit Dichtebeschreibungen?

Srcset ist ein HTML-Attribut, das es Ihnen ermöglicht, mehrere Bildquellen für ein einzelnes `<img>`-Element anzugeben. Dichtebeschreibungen (`x`) werden zusammen mit Srcset verwendet, um basierend auf der Pixeldichte des Benutzerbildschirms Bilder unterschiedlicher Auflösung bereitzustellen.

## Wann sollte man Srcset mit Dichtebeschreibungen verwenden?

Die Verwendung von Srcset mit Dichtebeschreibungen ist besonders sinnvoll, wenn Sie:
1. Hochauflösende Bilder an Displays mit hoher DPI (z.B. Retina-Displays) ausliefern möchten, während Sie Displays mit Standardauflösung Bilder mit geringerer Auflösung bereitstellen.
2. Die Seitenleistung verbessern, indem Sie die für das Gerät des Benutzers am besten geeignete Bildgröße bereitstellen.

## Implementierung von Srcset mit Dichtebeschreibungen

Um Srcset mit Dichtebeschreibungen zu verwenden, befolgen Sie diese Schritte:
1. Bereiten Sie Ihre Bilder in unterschiedlichen Auflösungen vor. 
2. Fügen Sie dem `<img>`-Element das `srcset`-Attribut hinzu, einschließlich der Bildquellen und der entsprechenden Dichtebeschreibungen. 
3. Fügen Sie das `sizes`-Attribut hinzu (optional), um die Größe des Bildes festzulegen, wie es auf dem Bildschirm angezeigt wird.

### Markup-Beispiel

Hier ist ein Beispiel, wie Sie Srcset mit Dichtebeschreibungen in Ihrem Markup implementieren können:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Ein Beispielbild">
```

Dieses Markup-Beispiel umfasst:
- **src** : Die Standardbildquelle, die angezeigt wird, wenn der Browser Srcset nicht unterstützt.
- **srcset** : Die Liste der Bildquellen und ihrer Dichtebeschreibungen (1x, 2x, 3x). Der Browser wählt basierend auf dem Display des Benutzers das am besten geeignete Bild.
- **alt** : Eine Beschreibung des Bildes für Barrierefreiheitszwecke.

Und das war's! Sie haben Srcset mit Dichtebeschreibungen erfolgreich implementiert und die Leistung Ihrer Website sowie die Benutzererfahrung verbessert.
