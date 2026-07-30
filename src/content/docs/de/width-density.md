---
taskInputHash: 109d865b45b79054
title: Breiten- und Dichtebeschreibungen
description: Beispiele für die Verwendung von Breiten- und Dichtebeschreibungen in `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Verstehen von Breite (w) und Dichte (x) Beschreibungen in `srcset`. Verwenden Sie Beispiele und verwenden Sie Markdown.

> `srcset` ist ein HTML-Attribut, das es Entwicklern ermöglicht, mehrere Bildquellen mit unterschiedlichen Auflösungen oder Pixeldichten bereitzustellen und dem Browser die Auswahl des geeigneten Bildes basierend auf den Anzeigeeigenschaften des Geräts zu überlassen. Das `srcset`-Attribut verwendet eine Kombination aus der `URL` und den Beschreibungen `w` oder `x`, um die Bilder anzugeben.

## Breiten-Beschreibung (`w`)

> Der `w`-Beschreiber wird verwendet, um die Breite eines Bildes in Pixeln anzugeben. Er wird verwendet, wenn wir dem Browser die Abmessungen eines Bildes geben möchten, damit es das geeignete Bild für den verfügbaren Bildschirmplatz auswählen kann.

> Die Syntax für die Verwendung des `w`-Beschreibers in `srcset` ist wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und deren entsprechende Breiten in Pixeln bereitgestellt. Der Browser wählt das Bild mit der nächstgelegenen Breite zum verfügbaren Bildschirmplatz aus.

## Dichte-Beschreibung (`x`)

> Der `x`-Beschreiber wird verwendet, um die Pixeldichte eines Bildes anzugeben, was das Verhältnis von physischen Pixeln zu CSS-Pixeln ist. Er wird verwendet, wenn wir dem Browser unterschiedliche Versionen desselben Bildes mit unterschiedlichen Pixeldichten bereitstellen möchten.

> Die Syntax für die Verwendung des `x`-Beschreibers in `srcset` ist wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und deren entsprechende Pixeldichten bereitgestellt. Der Browser wählt das Bild mit der nächstgelegenen Pixeldichte zum Bildschirm des Geräts aus.

> Beachten Sie, dass die `w`- und `x`-Beschreibungen zusammen im selben `srcset`-Attribut verwendet werden können, um dem Browser mehr Auswahlmöglichkeiten zu bieten.
