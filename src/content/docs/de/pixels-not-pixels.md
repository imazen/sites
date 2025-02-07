---
taskInputHash: 21b58eb274184c9c
title: px ≠ Pixel
description: Gerätepixel ≠ Browser-Px ≠ Bild-Px
sidebar_sort_priority: 900
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
### Gerätepixel ≠ Browser-Px ≠ Bild-Px

Dank Apple mapen CSS- und HTML-Pixel (`px`) **fast immer auf mehrere Geräte-/Druckerpixel**. Der devicePixelRatio auf meinem Handy ist 3,875; [wie ist deiner?](https://www.mydevice.io/)

Der devicePixelRatio meines Desktops ändert sich beim Zoomen des Browsers, ist jedoch standardmäßig 1,5 (mein `System > Anzeige > Skalierung` beträgt schließlich 150%).

Bilddateien (ohne SVG) werden in ein Pixelraster dekodiert. **Es ist ärgerlich schwer, Bildpixel perfekt im Verhältnis 1:1 mit Gerätepixeln anzuzeigen - aber mit `srcset` kann man sich *nahe genug* herantastet**, und ein bisschen Javascript kann die Größe des HTML-Elements nach dem Laden anpassen, wenn Sie wirklich gerechtfertigte Gründe für diese perfekte Zuordnung haben, obwohl solche verbotenen Künste hier nicht enthüllt werden.

> Andere absolute [Einheiten (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/de/docs/Web/CSS/length) sind in Bezug auf die Anzahl der CSS-Pixel definiert und tun so, als ob alles 96dpi wäre. Entwickler vermeiden absolute Einheiten, weil es im Allgemeinen besser ist, Einheiten zu verwenden, die sich aus der Schriftgröße oder den Ansichtsfenster-/Containerabmessungen ableiten. Nicht übereinstimmende Einheiten können ein Layout zerstören, wenn der Benutzer seinen `Barrierefreiheit > Textgröße`-Multiplikator anpasst, den Browser zoomt oder sein Gerät dreht. Selbstverständlich sollten Sie all diese Dinge tun, bevor Sie Ihre Seite veröffentlichen.
