---
title: Breakpoints & Bilder
description: Warum einige (aber nicht alle) Breakpoints für Ihre Bilder wichtig sind
taskInputHash: a740eb96e1b2103c
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Hintergrund

Kleine Bildschirme und große Monitore benötigen unterschiedliche Layouts. Für den Zweck von `srcset` und `sizes` müssen wir wissen, ab welchem Punkt das Layout geändert wird.

Webentwickler müssen entscheiden, was auf kleineren Bildschirmen verkleinert, ausgeblendet oder neu positioniert werden soll - oder was häufiger der Fall ist, was auf größeren Bildschirmen erweitert, offengelegt oder hinzugefügt werden soll. Sie haben jedoch sehr wenige Informationen zur Verfügung. Befindet sich der Benutzer auf einem Tablet oder einem Telefon im Querformat - oder einem kleinen Browserfenster?

Wir müssen eine willkürliche Ansichtsbreite wählen, an der das Layout geändert wird. Dies wird als **Breakpoint** bezeichnet. Dies ist eine willkürliche Anzahl von CSS-Pixeln ([nicht Gerätepixeln](/de/pixel-nicht-pixel)). Polypane hat einen [großartigen Artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) zu häufig verwendeten Breakpoints.

Einige Bilder (wie Logos oder Symbole oder Schaltflächen) sind möglicherweise immun gegen die Layoutverschiebungen, die durch diese Breakpoints verursacht werden (und sind in Ordnung mit [srcset density descriptors](/de/dichte-descriptore)).

Hauptinhalt Bilder werden durch die Größe ihres Containers begrenzt. Typischerweise wird der Hauptinhaltbereich einer Seite auf den größten Bildschirmen auf eine bestimmte Breite begrenzt, eine `max-width`, aber auf kleinen Bildschirmen füllt der Hauptinhaltbereich den gesamten Viewport aus.

Wenn Sie bei einigen Breakpoints mehr als eine Spalte haben, wird es schwieriger, die effektiven Größenregeln zu berechnen, da sich der prozentuale Anteil der Viewportbreite, den das Bild einnimmt, ändern wird.

### Die einfache Methode

Das heißt aber nicht, dass man sich darüber den Kopf zerbrechen muss. Wahrscheinlich kommt man mit der folgenden Annäherung sehr gut zurecht:

1. Bei welcher Größe hört die Hauptspalte (oder der Container des Bildes) auf zu wachsen? Bis zu dieser Ansichtsbreite können wir im `sizes` Attribut des Bildes `100vw` verwenden, um anzugeben, dass das Bild 100% der Ansichtsbreite einnimmt.
2. Was ist die maximale Breite, die dieser Container je erreicht? Das können wir als festgelegte `width` für alles andere festlegen.

Wenn Ihre Antwort auf Frage 1 700px und Ihre Antwort auf Frage 2 800px lautet, können Sie das folgende `sizes` Attribut verwenden:

```html
<!-- Es handelt sich um CSS-Pixel, nicht um Geräte-Pixel oder Bild-Pixel. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> Man sollte denken, dass der Browser all diese Berechnungen anständig für uns auf der Grundlage der CSS durchführen könnte. Leider sind Browser jedoch aggressiv bestrebt, eine Image-URL *vor* dem Herunterladen der Stylesheets zu wählen. Daher müssen wir die Berechnungen selbst durchführen, und wenn es nicht perfekt ist, ist es ihre eigene Schuld.
