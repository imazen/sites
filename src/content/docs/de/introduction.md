---
title: srcset & Größenangaben von <img>
description: Ein effizienter und anmaßender Leitfaden für responsive Bilder bis 2023
taskInputHash: dc8c8594bdd45d91
lang: de
sidebar_sort_priority: 1000
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
**Ein effizienter und anmaßender Leitfaden für Bilder bis 2023**

Überprüfen Sie die Seitenleiste für die detaillierte Analyse. Dies ist die Kurzreferenz, um diese `<img>`-Tags auf den neuesten Stand zu bringen, um moderne Geräte in all ihren verschiedenen Größen und Pixeldichten zu handhaben. Sie sollten [wissen, dass Pixel != Pixel](/de/pixels-not-pixels) und `devicePixelRatio` wahrscheinlicher um 3.875 als 1:1 ist. Moderne Telefone geben vor, in CSS-Pixel 320-428px breit zu sein, aber haben viele Gerätepixel pro CSS-Pixel.

> Wenn Ihr Bild niemals seine Größe ändert, unabhängig von der Breite des Browserfensters, sollten Sie stattdessen einen [Dichtedeskriptor](/de/density-descriptors) verwenden. Dies ist oft für Logos, Symbole und Schaltflächen geeignet.

Wissen Sie, was Ihre [Breakpoints](/de/breakpoints) sind? Sie benötigen diese Zahlen, um die unten aufgeführte Lösung genau abzustimmen - und mindestens den Breakpoint mit der Breite der Ansichtsfläche, an dem der Hauptinhalt aufhört zu wachsen.


### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund fährt Fahrrad" />

<!-- Wir gehen davon aus, dass Sie einen Breakpoint bei 700px haben.
      Und dass unter dieser Ansichtsbreite dieses Bild 100% Breite einnimmt, aber
      wenn die Ansicht größer ist, ist das Bild auf 800 CSS-Pixel begrenzt -->

<!-- Dies setzt voraus, dass Sie einen RIAPI-konformen Bildserver wie Imageflow verwenden.
     Die dynamische Erstellung von Bildvarianten ist für die geistige Gesundheit von Entwicklern unerlässlich. -->
```
