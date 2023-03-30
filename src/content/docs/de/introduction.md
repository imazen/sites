---
title: srcset & <img> sizes
description: Ein effizienter und besonnener Leitfaden zu responsiven Bildern für 2023
taskInputHash: 287f4de1aa9f1f54
lang: de
sidebar_sort_priority: 1000
---
**Ein effizienter und besonnener Leitfaden für Bilder im Jahr 2023**

Schau in die Seitenleiste für eine detaillierte Anleitung. Hier findest du eine schnelle Referenz, um `<img>`-Tags für moderne Geräte mit ihren verschiedenen Größen und Pixeldichten zu optimieren. Du solltest [wissen, dass Pixel != Pixel](/de/pixels-not-pixels) sind und `devicePixelRatio` eher bei 3,875 als bei 1:1 liegt. Moderne Telefone tun so, als ob sie für die Lesbarkeit 320-428px breit wären (in CSS-Pixel), haben jedoch viele Gerätepixel pro CSS-Pixel.

> Wenn dein Bild keine Größenänderung erfährt, unabhängig davon, wie schmal du das Browserfenster machst, solltest du stattdessen [Dichtebeschreibungen](/de/density-descriptors) verwenden. Dies ist oft für Logos, Icons und Schaltflächen geeignet.

Weißt du, was deine [Breakpoints](/de/breakpoints) sind? Du wirst diese Zahlen für die Feinabstimmung der Lösung unten benötigen - und mindestens den Breakpoint für die Viewport-Breite, bei der der Hauptinhalt aufhört zu wachsen.

### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"
        sizes="(max-width: 700px) 100vw, 800px" alt="Hund, der ein Fahrrad fährt" />

<!-- Wir haben angenommen, dass du bei 700px einen Breakpoint hast. 
      Und dass unter dieser Viewport-Breite, dieses Bild die volle Breite einnimmt, aber
      wenn der Viewport größer ist, ist das Bild auf 800 CSS-Pixel begrenzt -->

<!-- Dies setzt voraus, dass du einen RIAPI-konformen Bildserver wie Imageflow verwendest. 
     Die On-the-fly-Bildvariantenerstellung ist unverzichtbar für die geistige Gesundheit eines Entwicklers. -->
```
