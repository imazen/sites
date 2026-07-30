---
taskInputHash: 1ab9558e7fe97f86
title: px ≠ Pixel
description: Geräte-Px ≠ Browser-Px ≠ Bild-Px
sidebar_sort_priority: 900
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
### Device-Pixel ≠ Browser-Px ≠ Bild-Px

Dank Apple werden CSS- und HTML-Pixel (`px`) **fast immer auf mehrere Geräte-/Druckerpixel abgebildet**. Der devicePixelRatio auf meinem Handy beträgt 3.875; [wie ist deiner?](https://www.mydevice.io/)

Der devicePixelRatio meines Desktop-Rechners ändert sich bei Browser-Zoom, aber standardmäßig ist er 1.5 (mein `System > Anzeige > Skalierung` beträgt schließlich 150 %).

Bilddateien (außer SVG) werden in ein Pixelraster dekodiert. **Es ist ärgerlich schwer, Bildpixel perfekt im Verhältnis 1:1 mit Gerätepixeln anzuzeigen - aber mit `srcset` kann man *nah genug* kommen**, und ein bisschen Javascript kann die Größe des HTML-Elements nach dem Laden anpassen, wenn wirklich gerechtfertigte Gründe für diese perfekte Zuordnung vorliegen, obwohl diese verbotenen Künste hier nicht enthüllt werden.

> Andere absolute [Einheiten (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/de/docs/Web/CSS/length) werden in Bezug auf die Anzahl der CSS-Pixel definiert und tun so, als ob alles 96dpi wäre. Entwickler vermeiden absolute Einheiten, weil es im Allgemeinen besser ist, Einheiten zu verwenden, die sich aus der Schriftgröße oder den Abmessungen des Ansichtsfensters/Containers ableiten. Ungleichmäßige Einheiten können ein Layout zerstören, wenn der Benutzer seinen `Bedienungshilfen > Textgröße`-Multiplikator anpasst, den Browser zoomt oder sein Gerät dreht. Es versteht sich von selbst, dass man alle diese Dinge tun sollte, bevor man seine Website veröffentlicht.
