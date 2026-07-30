---
taskInputHash: 7c0391e49b5d22e2
title: srcset & `<img>` sizes
description: >-
  Ein Effizienter und Meinungsstarker Leitfaden für Responsive Bilder im Jahr
  2023
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---

**Ein Effizienter und Meinungsstarker Leitfaden für Bilder im Jahr 2023**

Schauen Sie sich die Seitenleiste für eine tiefere Erklärung an. Dies ist die Schnellreferenz, um diese `<img>` Tags zu aktualisieren, damit sie moderne Geräte in all ihren verschiedenen Größen und Pixeldichten behandeln. Sie sollten [wissen, dass Pixel != Pixel sind](/de/pixels-not-pixels) und `devicePixelRatio` eher bei etwa 3.875 als bei 1:1 liegt. Moderne Telefone geben vor, 320-428px breit zu sein, um die Lesbarkeit zu verbessern (in CSS-Pixeln), haben aber viele Geräte-Pixel pro CSS-Pixel.

> Wenn sich die Größe Ihres Bildes niemals ändert, egal wie schmal Sie das Browserfenster machen, sollten Sie stattdessen einen [Dichte-Deskriptor verwenden](/de/density-descriptors). Dies ist oft für Logos, Symbole und Schaltflächen geeignet.

Kennen Sie Ihre [Breakpoints](/de/breakpoints)? Sie benötigen diese Zahlen, um die Lösung unten fein abzustimmen - und mindestens den Viewport-Breite-Breakpoint, bei dem der Hauptinhaltsbereich aufhört zu wachsen.


### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund, der Fahrrad fährt" />

<!-- Wir haben angenommen, dass Sie einen Breakpoint bei 700px haben. 
     Und dass bei dieser Viewport-Breite dieses Bild 100% der Breite einnimmt, aber
     wenn der Viewport größer ist, ist das Bild auf 800 CSS-Pixel begrenzt -->

<!-- Dies geht davon aus, dass Sie einen RIAPI-konformen Bildserver wie Imageflow verwenden. 
     Die Produktion von Bildvarianten auf Abruf ist essentiell für die Entwicklermentalität. -->
```
