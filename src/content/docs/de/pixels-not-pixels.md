---
title: '`px` ≠ Pixel'
description: Gerätepixel ≠ Browser-Pixel ≠ Bildpixel
taskInputHash: b857216a5693bfeb
lang: de
sidebar_sort_priority: 900
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Gerätepixel ≠ Browser-Pixel ≠ Bildpixel

Dank Apple entspricht ein CSS/HTML-Pixel (`px`) **fast nie einem einzelnen Geräte-/Drucker-Pixel**. Das devicePixelRatio meines Telefons beträgt 3,875; [wie hoch ist dein Wert?](https://www.mydevice.io/).

Das devicePixelRatio meines Desktops ändert sich beim Zoomen im Browser, ist standardmäßig aber 1.5 (meine `System > Display > Skalierung` beträgt schließlich 150%).

Bilder (mit Ausnahme von SVG-Dateien) werden als Raster von Pixeln dekodiert. **Es ist ärgerlicherweise schwierig, die Bildpixel perfekt im Verhältnis 1:1 zu den Gerätepixeln anzuzeigen - aber mit `srcset` kannst du zumindest *in etwa* nah rankommen**, und ein bisschen Javascript kann nach dem Laden die Größe des HTML-Elements anpassen, falls du wirklich triftige Gründe für diese perfekte Umsetzung hast, auch wenn diese verbotene Kunst hier nicht enthüllt wird.

> Andere absolute [Einheiten (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/de/docs/Web/CSS/length) sind auf eine bestimmte Anzahl von CSS-Pixeln und eine Bildschirmauflösung von 96dpi definiert. Entwickler verwenden keine absolute Einheiten, weil es im Allgemeinen besser ist, Einheiten zu verwenden, die von der Größe der Schriftart oder der Viewport/Container-Dimensionen abgeleitet sind. Nicht passende Einheiten können das Layout zerstören, wenn der Benutzer seinen `Accessibility > Text Size`-Faktor anpasst, den Browser zoomt oder das Gerät dreht. Du solltest natürlich all dies tun, bevor du deine Website veröffentlichst.
