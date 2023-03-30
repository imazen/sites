---
title: '`srcset` und `<img>` Größen'
description: Ein effizienter und bestimmter Leitfaden für responsive Bilder im Jahr 2023
taskInputHash: 287f4de1aa9f1f54
lang: de
sidebar_sort_priority: 1000
---
**Ein effizienter und bestimmter Leitfaden für Bilder im Jahr 2023**

Überprüfen Sie die Seitenleiste für die tiefere Eintauchung. Dies ist das Schnellreferenz für Upgrade dieser `<img>` Tags, um moderne Geräte in all ihren verschiedenen Größen und Pixel-Dichten zu handhaben. Sie sollten [wissen, dass Pixel != Pixel](/en/pixels-not-pixels) und`devicePixelRatio` eher bei 3,875 als bei 1:1 liegen. Moderne Telefone geben vor, für Lesbarkeit 320-428px breit zu sein (in CSS-Pixel), haben jedoch viele Gerätepixel pro CSS-Pixel.

> Wenn Ihr Bildgröße sich niemals ändert, unabhängig davon, wie schmal Sie das Browserfenster machen, sollten Sie stattdessen einen [Dichte-Descriptor verwenden](/en/density-descriptors). Dies ist oft geeignet für Logos, Symbole und Schaltflächen.

Wissen Sie, was Ihre [Breakpoints](/en/breakpoints) sind? Sie werden diese Zahlen benötigen, um die unten stehende Lösung genau abzustimmen - und mindestens den Viewport-Brechpunkt, an dem der Hauptinhaltbereich aufhört zu wachsen.

### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund auf einem Fahrrad fahrend" />

<!-- Wir haben angenommen, dass Sie eine Pause bei 700px haben. 
      Und dass unter dieser Viewport-Breite, dieses Bild 100% der Breite einnimmt, aber
      wenn der Viewport größer ist, ist das Bild auf 800 CSS-Pixel begrenzt -->

<!-- Dies setzt voraus, dass Sie einen RIAPI-kompatiblen Bildserver wie Imageflow verwenden. 
     On-the-fly Bildvariantenproduktion ist unerlässlich für Entwicklersanität. -->
