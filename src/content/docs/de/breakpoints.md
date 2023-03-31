---
title: Breakpoints & Bilder
description: Warum manche (aber nicht alle) Breakpoints wichtig für Ihre Bilder sind
taskInputHash: 6532c039ed74cf5c
lang: de
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
### Hintergrund

Kleine Bildschirme und große Monitore benötigen unterschiedliche Layouts. Für `srcset` und `sizes` müssen wir wissen, wann das Layout geändert wird.

Webentwickler müssen entscheiden, was auf kleineren Bildschirmen verkleinert, ausgeblendet oder verschoben werden soll - oder sie müssen entscheiden, was auf größeren Bildschirmen erweitert, aufgedeckt oder hinzugefügt werden soll. Sie haben auch sehr wenig Informationen zur Verfügung. Befindet sich der Benutzer auf einem Tablet oder Telefon im Landscape-Modus oder in einem kleinen Browserfenster?

Wir müssen eine beliebige Viewport-Breite wählen, an der das Layout geändert wird. Dies wird als **Breakpoint** bezeichnet. Es handelt sich um eine beliebige Anzahl von CSS-Pixeln ([nicht Gerätepixeln](/de/pixels-not-pixels)). Polypane hat einen [großartigen Artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) über gebräuchliche Breakpoints.

Einige Bilder (wie Logos, Icons oder Buttons) können immun gegenüber den Layoutverschiebungen sein, die durch diese Breakpoints verursacht werden (und sind in Ordnung mit [srcset Density Descriptors](/de/density-descriptors)).

Hauptinhaltbilder werden durch die Größe ihres Containers begrenzt. Typischerweise ist der Hauptbereich eines Seitenlayouts auf den größten Bildschirmen auf eine bestimmte Breite begrenzt, eine `max-width`, aber auf kleinen Bildschirmen füllt der Hauptinhaltbereich den gesamten Viewport aus.

Wenn Sie bei einigen Breakpoints mehr als eine Spalte haben, wird es schwieriger, die effektiven Größenregeln zu berechnen, da sich der Prozentsatz der Viewport-Breite, den das Bild einnimmt, ändert.

### Die einfache Methode

Das heißt aber nicht, dass man sich den Kopf darüber zerbrechen soll. Wahrscheinlich kommen Sie mit der folgenden Annäherung sehr gut zurecht:

1. Bei welcher Größe hört die Hauptspalte (oder der Container des Bildes) auf zu wachsen? Bis zu dieser Viewport-Breite können wir `100vw` für das `sizes`-Attribut des Bildes verwenden, um anzugeben, dass das Bild 100% der Viewport-Breite einnimmt.
2. Was ist die maximale Breite, die der Container jemals erreicht? Wir können das als festgelegte `width` für alles andere setzen.

Wenn Ihre Antwort auf 1 700px und Ihre Antwort auf 2 800px lautet, können Sie das folgende `sizes`-Attribut verwenden:

```html
<!-- Dies sind CSS-Pixel, keine Gerätepiksel oder Bildepixel. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> Man würde denken, dass der Browser all diese Berechnungen netterweise für uns basierend auf dem CSS übernehmen könnte. Leider sind Browser aggressiv darum bemüht, eine Bild-URL *vor* dem Herunterladen von Stylesheets zu wählen. Also müssen wir die Berechnungen selbst durchführen. Und wenn wir nicht perfekt sind, ist es ihr Problem.
