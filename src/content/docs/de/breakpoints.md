---
taskInputHash: 8600475f6b97220f
title: Breakpoints & Bilder
description: Warum manche (aber nicht alle) Breakpoints für Ihre Bilder wichtig sind
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
### Hintergrund

Kleine Bildschirme und große Monitore benötigen unterschiedliche Layouts. Für den Zweck von `srcset` und `sizes` müssen wir wissen, bei welchem Punkt sich das Layout ändert.

Webentwickler müssen entscheiden, was auf kleineren Bildschirmen verkleinert, verborgen oder verlagert werden soll - oder häufiger, was auf größeren Bildschirmen erweitert, angezeigt oder hinzugefügt werden soll. Sie haben auch sehr wenige Informationen zur Verfügung. Ist der Nutzer auf einem Tablet oder einem Telefon im Querformat - oder in einem kleinen Browserfenster?

Wir müssen eine willkürliche Ansichtsbreite wählen, bei der sich das Layout ändert. Dies nennt man einen **Breakpoint**. Es ist eine willkürliche Anzahl von CSS-Pixeln ([nicht Geräte-Pixel](/de/pixels-not-pixels)). Polypane hat einen [tollen Artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) über häufig verwendete Breakpoints.

Einige Bilder (wie Logos oder Symbole oder Buttons) könnten gegenüber den durch diese Breakpoints verursachten Layout-Verschiebungen immun sein (und mit [srcset Density Descriptors](/de/density-descriptors) auskommen).

Hauptinhalt-Bilder werden durch die Größe ihres Containers begrenzt. Typischerweise wird der Hauptinhaltbereich einer Seite auf großen Bildschirmen auf eine bestimmte Breite, eine `max-width`, begrenzt, aber auf kleinen Bildschirmen wird der Hauptinhaltbereich das gesamte Ansichtsfeld ausfüllen.

Wenn Sie an einigen Breakpoints mehr als eine Spalte haben, wird es schwieriger, die effektiven Größenregeln zu berechnen, da sich der Prozentsatz der Ansichtsbreite, den das Bild einnimmt, ändert.

### Die einfache Methode

Das gesagt, sollten Sie dies nicht überdenken. Sie werden wahrscheinlich mit der folgenden Näherung sehr gut zurechtkommen:

1. Bei welcher Größe hört die Hauptspalte (oder der Container des Bildes) auf zu wachsen? Bis zu dieser Ansichtsbreite können wir `100vw` für das `sizes`-Attribut des Bildes verwenden, um zu sagen, dass das Bild 100% der Ansichtsbreite einnimmt.
2. Was ist die maximale Breite, die der Container jemals erreicht? Wir können dies als feste `width` für alles andere festlegen.

Wenn Ihre Antwort auf 1 700px und Ihre Antwort auf 2 800px lautete, können Sie das folgende `sizes`-Attribut verwenden:

```html
<!-- Dies sind CSS-Pixel, keine Gerätepixel oder Bildpixel. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Man könnte denken, dass der Browser all diese Berechnungen basierend auf dem CSS für uns netterweise handhaben könnte. Unglücklicherweise sind Browser aggressiv bestrebt, eine Bild-URL *vor* dem Herunterladen der Stylesheets zu wählen. Daher müssen wir die Berechnungen selbst durchführen, und es ist ihr gutes Recht, wenn es nicht perfekt gelingt.
