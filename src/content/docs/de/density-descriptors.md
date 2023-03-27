---
title: Dichtebeschreibungen & Srcset
description: Beispiele zur Verwendung von Dichtebeschreibungen in `srcset`
taskInputHash: 057b2de51328cf48
lang: de
---
Srcset mit Dichtebeschreibungen bietet eine einfache und effektive Methode, um für jedes Gerät des Benutzers das am besten geeignete Bild zu liefern und damit Leistung und Benutzererfahrung zu verbessern. Diese Anleitung führt Sie durch die Grundlagen der Verwendung von Srcset mit Dichtebeschreibungen und stellt Beispielmarkierungen für Ihre Bequemlichkeit zur Verfügung.

## Was ist Srcset mit Dichtebeschreibungen?

Srcset ist ein HTML-Attribut, das es ermöglicht, mehrere Bilderquellen für ein einziges `<img>`-Element anzugeben. Dichtebeschreibungen (`x`) werden in Verbindung mit Srcset verwendet, um unterschiedlich aufgelöste Bilder basierend auf der Pixeldichte des Displays des Benutzers bereitzustellen.

## Wann sollte man Srcset mit Dichtebeschreibungen verwenden?

Srcset mit Dichtebeschreibungen ist besonders nützlich, wenn man:

1. Hochauflösende Bilder für Displays mit hoher Pixeldichte (z.B. Retina-Displays) bereitstellen will, während gleichzeitig Bilder mit niedrigerer Auflösung für Standard-Displays bereitgestellt werden sollen.

2. Die Seitenleistung verbessern will, indem für jedes Gerät des Benutzers das am besten geeignete Bild ausgeliefert wird.

## Implementierung von Srcset mit Dichtebeschreibungen

Um Srcset mit Dichtebeschreibungen zu verwenden, befolgen Sie diese Schritte:

1. Bereiten Sie Ihre Bilder in unterschiedlichen Auflösungen vor.

2. Fügen Sie das `srcset`-Attribut zum `<img>`-Element hinzu, einschließlich der Bilderquellen und entsprechender Dichtebeschreibungen.

3. Fügen Sie das `sizes`-Attribut (optional) hinzu, um die Größe des Bildes festzulegen, wie es auf dem Bildschirm angezeigt wird.

### Beispielmarkierung

Hier ist ein Beispiel, wie Sie Srcset mit Dichtebeschreibungen in Ihre Markierung integrieren können:

```html
<img src="beispielbild-1x.jpg"
     srcset="beispielbild-1x.jpg 1x, beispielbild-2x.jpg 2x, beispielbild-3x.jpg 3x"
     alt="Ein Beispielbild">
```

Diese Beispielmarkierung enthält:

- **src**: Die Standardbildquelle, die angezeigt wird, wenn der Browser Srcset nicht unterstützt.

- **srcset**: Die Liste der Bildquellen und ihrer Dichtebeschreibungen (1x, 2x, 3x). Der Browser wählt das am besten geeignete Bild auf Basis der Pixeldichte des Displays des Benutzers aus.

- **alt**: Eine Beschreibung des Bildes für Barrierefreiheitszwecke.

Und das war's schon! Sie haben erfolgreich Srcset mit Dichtebeschreibungen implementiert und die Leistung und Benutzererfahrung Ihrer Website verbessert.
