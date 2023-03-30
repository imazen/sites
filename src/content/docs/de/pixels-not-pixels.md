---
title: px ≠ Pixel
description: Gerätepixel ≠ Browserpixel ≠ Bildpixel
taskInputHash: 0129dd19d1654a4c
lang: de
sidebar_sort_priority: 900
---
### Gerätepixel ≠ Browser-Pixel ≠ Bildpixel

Dank Apple entsprechen CSS- und HTML-Pixel (`px`) **fast nie einem einzelnen Geräte-/Druckerpixel**. Das Gerätepixelverhältnis auf meinem Handy beträgt 3,875; [wie sieht es bei dir aus?](https://www.mydevice.io/) 

Das Gerätepixelverhältnis meines Desktops ändert sich beim Zoomen des Browsers, aber der Standardwert beträgt 1,5 (meine `System > Display > Scale` ist schließlich 150 %).

Bilddateien (ausgenommen SVG) werden zu einem Raster von Pixeln dekodiert. **Es ist lästig schwer, ein perfektes Verhältnis von Bildpixeln zu Gerätepixeln im Verhältnis 1:1 zu erzielen, aber mit `srcset` kann man *gut genug* nahekommen**. Ein bisschen Javascript kann nach dem Laden die Größe des HTML-Elements anpassen, wenn du wirklich gute Gründe hast, warum du eine perfekte Zuordnung benötigst. Allerdings werden solche verbotenen Techniken hier nicht verraten.

> Andere absolute [Einheiten (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/de/docs/Web/CSS/L%C3%A4ngenangaben) werden in Bezug auf die Anzahl von CSS-Pixels definiert und tun so, als ob alle 96 dpi hätten. Entwickler meiden absolute Einheiten, da es im Allgemeinen besser ist, Einheiten zu verwenden, die von der Schriftgröße oder den Abmessungen des Viewports/Containers abgeleitet sind. Nicht übereinstimmende Einheiten können ein Layout zerstören, wenn der Benutzer den Multiplikator `Einstellungen > Bedienungshilfen > Textgröße` anpasst, den Browser zoomt oder das Gerät dreht. Du solltest all diese Dinge tun, bevor du deine Website freigibst.
