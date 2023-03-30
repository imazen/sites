---
title: Breakpoints & Bilder
description: Warum manche (aber nicht alle) Breakpoints für deine Bilder wichtig sind
taskInputHash: 62e4888677f4c953
lang: de
---
### Hintergrund

Kleine Bildschirme und große Monitore erfordern unterschiedliche Layouts. Für `srcset` und `sizes` müssen wir wissen, an welchem Punkt das Layout geändert wird.

Web-Entwickler müssen entscheiden, was sie auf kleineren Bildschirmen verkleinern, ausblenden oder verschieben bzw. auf größeren Bildschirmen erweitern, enthüllen oder hinzufügen sollen. Sie haben auch sehr wenig Informationen zur Verfügung. Befindet sich der Benutzer auf einem Tablet oder einem telefon in Landscape-Modus - oder einem kleinen Browserfenster?

Wir müssen eine willkürliche Viewport-Breite wählen, an der das Layout geändert wird. Dies wird als **Breakpoint** bezeichnet. Es handelt sich um eine willkürliche Anzahl von CSS-Pixeln ([nicht Geräte-Pixeln](/en/pixels-not-pixels)). Polypane hat einen [großartigen Artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) zu den häufig verwendeten Breakpoints.

Einige Bilder (wie Logos oder Steuerelemente oder Schaltflächen) sind möglicherweise immun gegen die Layoutverschiebungen, die durch diese Breakpoints verursacht werden (und sind in Ordnung mit [srcset-Dichte-Deskriptoren](/en/density-descriptors)).

Hauptinhaltbilder werden durch die Größe ihres Containers begrenzt. In der Regel wird der Hauptinhaltbereich einer Seite auf den größten Bildschirmen auf eine bestimmte Breite begrenzt, eine `max-width`, aber auf kleinen Bildschirmen füllt der Hauptinhaltbereich den gesamten Viewport aus.

Wenn Sie an einigen Breakpoints mehr als eine Spalte haben, wird es schwieriger, die effektiven Größenregeln zu berechnen, da sich der Prozentsatz der Viewportbreite ändert, den das Bild einnimmt.

### Die einfache Methode

Das gesagt habend, sollten Sie das nicht überdenken. Sie werden wahrscheinlich sehr gut mit der folgenden Annäherung leben können:

1. Ab welcher Größe hört die Hauptspalte (oder der Container des Bildes) auf zu wachsen? Bis zu dieser Viewport-Breite können wir `100vw` für das `sizes`-Attribut des Bildes verwenden, um zu sagen, dass das Bild 100% der Viewport-Breite einnimmt.
2. Was ist die maximal Breite, die der Container jemals erreicht? Wir können das als feste `Breite` für alles andere festlegen.

Wenn Ihre Antwort auf 1 700px und Ihre Antwort auf 2 800px war, können Sie das folgende `sizes`-Attribut verwenden:

```html
<!-- Dies sind CSS-Pixel, keine Geräte-Pixel oder Bild-Pixel .-->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```


> Man würde meinen, dass der Browser alle diese Berechnungen basierend auf dem CSS schön für uns handhaben könnte. Leider sind die Browser aggressiv bestrebt, eine Bild-URL *vor* dem Herunterladen der Stylesheets auszuwählen. Wir müssen die Berechnungen also selbst durchführen, und es dient ihnen recht, wenn wir es nicht perfekt hinbekommen.
