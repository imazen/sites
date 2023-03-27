---
title: Breakpoints & Bilder
description: Warum manche (aber nicht alle) Breakpoints für deine Bilder wichtig sind.
taskInputHash: de254d45ab719b4d
lang: de
---
### Hintergrund

Kleine Bildschirme und große Monitore benötigen unterschiedliche Layouts. Für `srcset` und `sizes` müssen wir dies berücksichtigen.

Webentwickler müssen entscheiden, was auf kleineren Bildschirmen verkleinert, ausgeblendet oder verschoben werden soll - oder, was auf größeren Bildschirmen erweitert, aufgedeckt oder hinzugefügt werden soll. Sie haben jedoch sehr wenig Informationen darüber. Befindet sich der Benutzer auf einem Tablet oder einem Telefon im Querformat - oder einem kleinen Browserfenster?

Wir müssen eine willkürliche Viewport-Breite wählen, an welcher das Layout ändert. Das wird **Breakpoint** genannt. Es ist eine willkürliche Anzahl von CSS-Pixel ([nicht Geräte-Pixel](/de/pixels-not-pixels)). Polypane hat einen [großartigen Artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) zu den häufig verwendeten Breakpoints.

Einige Bilder (wie Logos, Symbole oder Schaltflächen) können immun gegen die Layout-Verschiebungen sein, die durch diese Breakpoints verursacht werden (und in Ordnung mit [Dichte-Deskriptoren von srcset](/de/density-descriptors)).

Bilder des Hauptinhalts werden durch die Größe des Containers begrenzt. In der Regel wird der Hauptinhalt einer Seite auf den größten Bildschirmen auf eine bestimmte Breite beschränkt, eine `max-width`, aber auf kleinen Bildschirmen füllt der Hauptinhalt die gesamte Viewport-Breite aus.

Wenn Sie an einigen Breakpoints mehr als eine Spalte haben, wird es schwieriger, die effektiven Größenregeln zu berechnen, da sich der prozentuale Anteil der Viewport-Breite, den das Bild einnimmt, ändern wird.

### Die einfache Methode

Dennoch sollten Sie darüber nicht zu viel nachdenken. Sie werden wahrscheinlich sehr zufrieden mit der folgenden Näherung sein:

1. Bei welcher Größe hört die Hauptspalte (oder der Container des Bildes) auf zu wachsen? Bis zu dieser Viewport-Breite können wir `100vw` für das `sizes`-Attribut des Bildes verwenden, um zu sagen, dass das Bild 100% der Viewport-Breite einnimmt.
2. Was ist die maximale Breite, die der Container jemals erreicht? Wir können das als feste `width` für alles andere setzen.

Wenn Ihre Antwort auf 1 700px und auf 2 800px lautet, können Sie das folgende `sizes`-Attribut verwenden:

```html
<!-- Dies sind CSS-Pixel, keine Geräte-Pixel oder Bildpixel. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Man könnte denken, dass der Browser alle diese Berechnungen für uns basierend auf dem CSS schön handhaben könnte. Leider sind Browser sehr gierig darauf, eine Bild-URL *vor* dem Herunterladen von Stylesheets zu wählen. Daher müssen wir die Berechnungen selbst durchführen, und es ist nur gerecht, wenn wir es nicht perfekt hinbekommen.
