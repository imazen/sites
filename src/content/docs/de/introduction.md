---
taskInputHash: e1935034e64d2c51
title: srcset & `<img>` sizes
description: Ein effizienter und meinungsstarker Leitfaden zu responsiven Bildern für 2023
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---

**Ein effizienter und meinungsstarker Leitfaden zu Bildern für 2023**

Überprüfen Sie die Seitenleiste für einen tiefen Einblick. Dies ist die schnelle Referenz, um die `<img>`-Tags zu aktualisieren, um moderne Geräte in all ihren verschiedenen Größen und Pixeldichten zu unterstützen. Sie sollten [wissen, dass Pixel != Pixel](/de/pixels-not-pixels) und `devicePixelRatio` eher bei etwa 3,875 als 1:1 liegt. Moderne Telefone geben vor, 320-428px breit zu sein, um die Lesbarkeit zu verbessern (in CSS-Pixeln), haben aber viele Geräte-Pixel pro CSS-Pixel.

> Wenn die Größe Ihres Bildes sich nie ändert, egal wie schmal Sie das Browserfenster machen, sollten Sie stattdessen einen [Dichte-Beschreiber](/de/density-descriptors) verwenden. Dies ist oft geeignet für Logos, Symbole und Buttons.

Kennen Sie Ihre [Breakpoints](/de/breakpoints)? Sie benötigen diese Zahlen, um die Lösung unten fein abzustimmen - und mindestens den Viewport-Breite-Breakpoint, bei dem der Hauptinhaltsbereich aufhört, zu wachsen.


### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund fährt Fahrrad" />

<!-- Wir haben angenommen, dass Sie einen Breakpoint bei 700px haben.
      Und dass unter dieser Viewport-Breite dieses Bild 100% der Breite einnimmt, aber 
      wenn der Viewport größer ist, das Bild auf 800 CSS-Pixel begrenzt ist. -->

<!-- Dies setzt voraus, dass Sie einen RIAPI-kompatiblen Bildserver wie Imageflow verwenden. 
     Die Produktion von Bildvarianten on-the-fly ist entscheidend für die Entwicklerzufriedenheit. -->
```
