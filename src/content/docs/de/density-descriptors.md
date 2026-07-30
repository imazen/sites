---
taskInputHash: a9711ea36a30719d
title: Dichtebeschreibungen und srcset
description: Beispiele für die Verwendung von Dichtebeschreibungen in `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Srcset mit Dichtebeschreibungen bietet eine einfache und effektive Methode, das am besten geeignete Bild an das Gerät jedes Benutzers zu liefern und so die Leistung und Benutzererfahrung zu verbessern. Diese Anleitung führt Sie durch die Grundlagen der Verwendung von Srcset mit Dichtebeschreibungen und bietet Markup-Beispiele für Ihre Bequemlichkeit.

## Was ist Srcset mit Dichtebeschreibungen?

Srcset ist ein HTML-Attribut, das es Ihnen ermöglicht, mehrere Bildquellen für ein einzelnes `<img>`-Element anzugeben. Dichtebeschreibungen (`x`) werden in Verbindung mit srcset verwendet, um basierend auf der Pixeldichte des Benutzerbildschirms Bilder mit unterschiedlichen Auflösungen bereitzustellen.

## Wann sollte man Srcset mit Dichtebeschreibungen verwenden?

Die Verwendung von Srcset mit Dichtebeschreibungen ist besonders nützlich, wenn Sie:
1. Hochauflösende Bilder für Bildschirme mit hoher DPI (z.B. Retina-Displays) bereitstellen möchten, während Sie niedrigere Auflösungen für Standarddisplays bieten.
2. Die Seitenleistung verbessern möchten, indem Sie die am besten geeignete Bildgröße an das jeweilige Gerät des Benutzers liefern.

## Implementierung von Srcset mit Dichtebeschreibungen

Um srcset mit Dichtebeschreibungen zu verwenden, führen Sie die folgenden Schritte aus:
1. Bereiten Sie Ihre Bilder in verschiedenen Auflösungen vor.
2. Fügen Sie das `srcset`-Attribut zum `<img>`-Element hinzu, einschließlich der Bildquellen und entsprechenden Dichtebeschreibungen.
3. Fügen Sie das `sizes`-Attribut (optional) hinzu, um die Größe des Bildes anzugeben, wie es auf dem Bildschirm angezeigt wird.

### Markup-Beispiel

Hier ist ein Beispiel, wie Srcset mit Dichtebeschreibungen in Ihrem Markup implementiert werden kann:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Ein Beispielbild">
```

Dieses Markup-Beispiel umfasst:
- **src** : Die Standard-Bildquelle, die angezeigt wird, wenn der Browser srcset nicht unterstützt.
- **srcset** : Die Liste der Bildquellen und ihrer Dichtebeschreibungen (1x, 2x, 3x). Der Browser wählt das am besten geeignete Bild basierend auf dem Display des Benutzers.
- **alt** : Eine Beschreibung des Bildes für Barrierefreiheitszwecke.

Und das war's! Sie haben Srcset mit Dichtebeschreibungen erfolgreich implementiert und die Leistung und Benutzererfahrung Ihrer Website verbessert.
