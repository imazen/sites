---
title: srcset und <img> sizes
description: Ein effizienter und dezidierter Leitfaden für responsive Bilder bis 2023
taskInputHash: f8e7c31ccf577572
lang: de
ignore: '/* cSpell:locale de,en*/'
sidebar_sort_priority: 1000
date_published: '2023-03-23'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
**Ein effizienter und dezidierter Leitfaden für Bilder bis 2023**

Sehen Sie sich die Seitenleiste für die detaillierte Analyse an. Dies ist die Kurzreferenz zum Aktualisieren dieser `<img>`-Tags, um moderne Geräte in allen Größen und Pixeldichten zu unterstützen. Sie sollten [wissen, dass Pixel ≠ Pixel](/de/pixel-nicht-pixel) und `devicePixelRatio` wahrscheinlicher bei 3,875 als bei 1:1 liegt. Moderne Handys geben vor, 320-428px breit zu sein, um die Lesbarkeit zu verbessern (in CSS-Pixeln), haben aber viele Gerätepixel pro CSS-Pixel.

> Wenn Ihr Bildgröße sich niemals ändert, unabhängig davon, wie eng Sie das Browserfenster machen, sollten Sie stattdessen einen [Density Descriptor](/de/density-descriptors) verwenden. Dies ist oft geeignet für Logos, Icons und Schaltflächen.

Wissen Sie, was Ihre [Breakpoints](/de/breakpoints) sind? Sie benötigen diese Zahlen, um die unten stehende Lösung feinabzustimmen - und mindestens den Viewport-Brechpunkt, bei dem der Hauptinhaltbereich aufhört zu wachsen.

### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund auf einem Fahrrad fahrend" />

<!-- Wir nehmen an, dass Sie bei 700px einen Breakpoint haben. 
     Und dass unterhalb dieser Viewport-Breite dieses Bild eine Breite von 100% hat und
     wenn der Viewport breiter wird, ist das Bild auf 800 CSS-Pixel begrenzt. -->

<!-- Dies setzt voraus, dass Sie einen RIAPI-konformen Bildserver wie Imageflow verwenden. 
     Die dynamische Variantenproduktion von Bildern ist notwendig für die geistige Gesundheit von Entwicklern. -->
```
