---
title: px ≠ Pixel
description: Geräte-Pixel ≠ Browser-Pixel ≠ Bild-Pixel
taskInputHash: 6bf2840ae3339b2e
lang: de
ignore: '/* cSpell:locale de,en*/'
sidebar_sort_priority: 900
date_published: '2023-03-26'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
### Gerätepixel ≠ Browser px ≠ Bild px

Dank Apple entspricht CSS- und HTML-Pixel (`px`) **fast nie genau einem einzigen Geräte-/Druckerpixel**. Der devicePixelRatio auf meinem Handy beträgt 3,875; [wie hoch ist deiner?](https://www.mydevice.io/) 

Mein Desktop-DevicePixelRatio ändert sich beim Vergrößern des Browsers, ist standardmäßig jedoch 1,5 (mein `System > Anzeige > Skalierung` beträgt schließlich 150%).

Bilddateien (mit Ausnahme von SVG) entschlüsseln zu einem Raster von Pixeln. **Es ist ärgerlicherweise schwer, Bildpixel perfekt mit Gerätepixeln im Verhältnis 1:1 anzuzeigen - aber mit `srcset` kann man *nahe genug* kommen**, und etwas Javascript kann die Größe des HTML-Elements nach dem Laden anpassen, wenn man wirklich triftige Gründe für eine perfekte Zuordnung hat, obwohl solche verbotenen Künste hier nicht enthüllt werden.

> Andere absolute [Einheiten (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/de/docs/Web/CSS/length) werden in Bezug auf die Anzahl von CSS-Pixeln definiert und tun so, als ob alles 96 dpi hat. Entwickler meiden absolute Einheiten, weil es in der Regel besser ist, Einheiten zu verwenden, die sich von der Schriftgröße oder den Abmessungen des Viewports/Containers ableiten. Nicht übereinstimmende Einheiten können ein Layout brechen, wenn der Benutzer den `Barrierefreiheit > Textgröße`-Multiplikator anpasst, den Browser zoomt oder das Gerät dreht. Selbstverständlich solltest du all diese Dinge vor dem Veröffentlichen deiner Website ausprobieren.
