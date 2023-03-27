---
title: '`srcset` und `<img> sizes`'
description: Ein effizienter und strikter Leitfaden für responsive Bilder für 2023
taskInputHash: e3027e35bb040ede
lang: de
sidebar_sort_priority: 1000
---
**Ein effizienter und strikter Leitfaden für Bilder für 2023**

Schau in die Seitenleiste für eine detaillierte Erklärung. Dies ist eine kurze Referenz, um `<img>`-Tags für alle modernen Gerätegrößen und Pixelauflösungen zu aktualisieren. Du solltest [wissen, dass Pixel ≠ Pixel](/de/pixels-not-pixels) und `devicePixelRatio` eher bei ca. 3.875 als 1:1 liegt. Moderne Telefone geben vor, für bessere Lesbarkeit 320-428px breit zu sein.

> Wenn dein Bild aber immer die gleiche Größe hat, unabhängig davon, wie schmal das Browserfenster ist, solltest du [einen Density Descriptor verwenden](/de/density-descriptors). Dies ist oft für Logos, Symbole und Buttons geeignet.

Weißt du, welche [Breakpoints](/de/breakpoints) du brauchst? Du benötigst diese Zahlen, um die Lösung unten zu optimieren und zumindest den Breakpoint der Bildschirmbreite zu kennen, ab dem der Hauptinhaltsbereich aufhört zu wachsen.

### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund fährt Fahrrad" />

<!-- Wir haben angenommen, dass du einen Breakpoint bei 700px hast. 
      Und dass das Bild unter dieser Bildschirmbreite 100% der Breite einnimmt, aber
      wenn der Bildschirm größer ist, ist das Bild auf 800 CSS-Pixel begrenzt. -->

<!-- Dies setzt auch voraus, dass du einen RIAPI-konformen Bildserver wie Imageflow verwendest. 
     On-the-fly-Bildvarianten sind für Entwicklergesundheit unerlässlich. -->
```
