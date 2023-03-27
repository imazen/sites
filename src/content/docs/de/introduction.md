---
title: srcset &amp; &lt;img&gt; sizes
description: Ein effizienter und überzeugter Leitfaden für responsive Bilder bis 2023
taskInputHash: 323967389e7378e6
lang: de
sidebar_sort_priority: 1000
---
**Ein effizienter und überzeugter Leitfaden für Bilder bis 2023**

Überprüfen Sie die Seitenleiste für das Deep Dive. Dies ist die Schnellreferenz für die Aktualisierung dieser `<img>`-Tags, um moderne Geräte in all ihren verschiedenen Größen und Pixeldichten zu verarbeiten. Sie sollten [wissen, dass Pixel != Pixel](/de/pixels-not-pixels) und `devicePixelRatio` wahrscheinlicher bei 3,875 als 1:1 liegt. Moderne Telefone geben vor, für die Lesbarkeit 320-428px breit zu sein.

> Wenn Ihr Bild nie seine Größe ändert, egal wie schmal Sie das Browserfenster machen, sollten Sie stattdessen einen [Dichtebeschreibungs-Descriptor verwenden](/de/density-descriptors). Dies ist oft für Logos, Symbole und Schaltflächen geeignet.

Wissen Sie, welche [Breakpoints](/de/breakpoints) Sie haben? Sie benötigen diese Zahlen, um die untenstehende Lösung feinzustimmen - und mindestens den Viewport-Brechpunkt, an dem der Hauptinhalt aufhört zu wachsen.


### Die einfache Methode

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Hund, der Fahrrad fährt"/> 

<!-- Wir haben angenommen, dass Sie einen Breakpoint bei 700px haben. 
     Und dass unter dieser Viewport-Breite dieses Bild 100% Breite einnimmt, aber wenn 
     Der Viewport ist größer, das Bild ist auf 800 CSS Pixel begrenzt -->

<!-- Hier wird auch vorausgesetzt, dass Sie einen RIAPI-konformen Bildserver wie Imageflow verwenden. 
     Die Produktion von Bildvarianten im Flug ist unerlässlich für die geistige Gesundheit der Entwickler.-->
