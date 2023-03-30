---
title: Density-Descriptoren & Srcset
description: Beispiele für die Verwendung von Density-Descriptoren in `srcset`
taskInputHash: db34acb106c5a3dd
lang: de
---
Srcset mit Density-Descriptors bietet eine einfache und effektive Möglichkeit, für jedes Gerät des Benutzers das geeignetste Bild bereitzustellen, um die Leistung und Benutzererfahrung zu verbessern. Diese Anleitung führt Sie durch die Grundlagen der Verwendung von srcset mit Density-Descriptors und bietet Markup-Beispiele für Ihre Bequemlichkeit.
## Was ist Srcset mit Density-Descriptors?

Srcset ist ein HTML-Attribut, das es Ihnen ermöglicht, mehrere Bildquellen für ein einzelnes `<img>`-Element anzugeben. Density-Descriptors (`x`) werden in Verbindung mit srcset verwendet, um unterschiedliche Auflösungsbilder basierend auf der Pixeldichte des Benutzerdisplays bereitzustellen.
## Wann sollte man Srcset mit Density-Descriptors verwenden?

Die Verwendung von srcset mit Density-Descriptors ist besonders nützlich, wenn Sie:
1. Hochauflösende Bilder auf hochauflösenden Displays (z.B. Retina-Displays) bereitstellen möchten, während Sie auf Standard-Displays Bilder mit geringerer Auflösung bereitstellen möchten.
2. Die Leistung der Seite verbessern, indem Sie die jeweils passende Bildgröße für das Gerät des Benutzers bereitstellen.
## Implementierung von Srcset mit Density-Descriptors

Um srcset mit Density-Descriptors zu verwenden, befolgen Sie diese Schritte:
1. Bereiten Sie Ihre Bilder in verschiedenen Auflösungen vor.
2. Fügen Sie das Attribut `srcset` zum `<img>`-Element hinzu, einschließlich der Bildquellen und entsprechender Density-Descriptors.
3. Fügen Sie das optionale Attribut `sizes` hinzu, um die Größe des Bildes anzugeben, wie es auf dem Bildschirm angezeigt wird.
### Markup-Beispiel 

Hier ist ein Beispiel dafür, wie Sie srcset mit Density-Descriptors in Ihrem Markup implementieren können:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Ein Beispielbild">
```



Dieses Markup-Beispiel enthält: 
- **src**: Die Standard-Bildquelle, die angezeigt wird, wenn der Browser srcset nicht unterstützt. 
- **srcset**: Die Liste der Bildquellen und ihrer Density-Descriptors (1x, 2x, 3x). Der Browser wählt das geeignetste Bild basierend auf dem Display des Benutzers aus. 
- **alt**: Eine Beschreibung des Bildes für barrierefreie Zwecke. 


Und das war's! Sie haben srcset erfolgreich mit Density-Descriptors implementiert und damit die Leistung und Benutzererfahrung Ihrer Website verbessert.
