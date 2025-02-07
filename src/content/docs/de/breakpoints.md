---
taskInputHash: 3d8283d38a166afd
title: Breakpoints & Bilder
description: Warum einige (aber nicht alle) Breakpoints für Ihre Bilder wichtig sind
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
### Hintergrund

Kleine Bildschirme und große Monitore benötigen unterschiedliche Layouts. Für den Zweck von `srcset` und `sizes` müssen wir wissen, an welchem Punkt sich das Layout ändert.

Webentwickler müssen entscheiden, was auf kleineren Bildschirmen verkleinert, verborgen oder umplatziert werden soll – oder häufiger, was auf größeren Bildschirmen erweitert, enthüllt oder hinzugefügt werden soll. Sie haben auch sehr wenige Informationen, auf denen sie basieren können. Befindet sich der Benutzer auf einem Tablet oder einem Telefon im Querformat – oder in einem kleinen Browserfenster?

Wir müssen eine willkürliche Ansichtsbreite wählen, bei der sich das Layout ändert. Dies wird als **Breakpunkt** bezeichnet. Es ist eine willkürliche Anzahl von CSS-Pixels ([nicht Geräte-Pixels](/de/pixels-not-pixels)). Polypane hat einen [großartigen Artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) über häufig verwendete Breakpoints.

Einige Bilder (wie Logos, Icons oder Buttons) könnten gegen die durch diese Breakpoints verursachten Layoutverschiebungen immun sein (und kommen gut mit [srcset-Dichtebeschreibungen](/de/density-descriptors) zurecht).

Hauptinhaltbilder werden durch die Größe ihres Containers begrenzt. Typischerweise wird der Hauptinhaltsbereich einer Seite auf den größten Bildschirmen auf eine bestimmte Breite beschränkt, eine `max-width`, aber auf kleinen Bildschirmen wird der Hauptinhaltsbereich den gesamten Ansichtsbereich ausfüllen.

Wenn Sie an einigen Breakpoints mehr als eine Spalte haben, wird es schwieriger, die effektiven Größenregeln zu berechnen, da sich der Prozentsatz der Ansichtsbreite, den das Bild einnimmt, ändern wird.

### Die einfache Methode

Das gesagt, überdenken Sie das nicht. Sie werden wahrscheinlich mit der folgenden Annäherung sehr zufrieden sein:

1. Bei welcher Größe hört die Hauptspalte (oder der Container des Bildes) auf zu wachsen? Bis zu dieser Ansichtsbreite können wir `100vw` für das `sizes`-Attribut des Bildes verwenden, um zu sagen, dass das Bild 100 % der Ansichtsbreite einnimmt.
2. Was ist die maximale Breite, die dieser Container jemals erreicht? Wir können dies als feste `width` für alles andere festlegen.

Wenn Ihre Antwort auf 1 700px und Ihre Antwort auf 2 800px war, können Sie das folgende `sizes`-Attribut verwenden:

```html
<!-- Dies sind CSS-Pixels, nicht Geräte-Pixels oder Bild-Pixels. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Man würde denken, dass der Browser all diese Berechnungen basierend auf dem CSS wunderbar für uns erledigen könnte. Leider sind Browser beeindruckend eifrig, eine Bild-URL *vor* dem Herunterladen der Stylesheets auszuwählen. Daher müssen wir die Berechnungen selbst durchführen, und es geschieht ihnen recht, wenn wir es nicht perfekt hinbekommen.
