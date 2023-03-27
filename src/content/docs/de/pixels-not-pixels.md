---
title: px ≠ Pixel
description: Gerätepixel ≠ Browser-Pixel ≠ Bild-Pixel
taskInputHash: ef756f1d7fe54ef7
lang: de
sidebar_sort_priority: 900
---
### Gerätepixel ≠ Browser-Pixel ≠ Bild-Pixel

Dank Apple werden CSS- und HTML-Pixel (`px`) **fast immer auf mehrere Geräte-/Drucker-Pixel abgebildet**. Der devicePixelRatio auf meinem Telefon beträgt 3,875; [Wie ist deiner?](https://www.mydevice.io/).

Mein desktop devicePixelRatio ändert sich beim Browser-Zoom, beträgt jedoch standardmäßig 1,5 (mein `System > Display > Scale` beträgt schließlich 150%).

Bilddateien (mit Ausnahme von SVG) werden zu einem Raster von Pixeln dekodiert. **Es ist ärgerlich schwer, Bildpixel perfekt im Verhältnis 1:1 mit Gerätepixeln darzustellen - aber mit `srcset` können Sie *nah genug* kommen**, und mit ein wenig Javascript kann die Größe des HTML-Elements nach dem Laden angepasst werden, wenn Sie wirklich triftige Gründe für diese perfekte Zuordnung haben, obwohl diese verbotenen Künste hier nicht offenbart werden.

> Andere absolute [Einheiten (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/de/docs/Web/CSS/length) werden in Bezug auf die Anzahl der CSS-Pixel definiert und geben vor, dass alles 96dpi beträgt. Entwickler vermeiden absolute Einheiten, weil es im Allgemeinen besser ist, Einheiten zu verwenden, die vom Schriftgrad oder den Abmessungen des Viewports/Containers abgeleitet sind. Mismatched Einheiten können ein Layout brechen, wenn der Benutzer ihren `Accessibility > Text Size` Multiplikator anpasst, den Browser zoomt oder ihr Gerät dreht. Es versteht sich von selbst, dass Sie all diese Dinge tun sollten, bevor Sie Ihre Website veröffentlichen.
