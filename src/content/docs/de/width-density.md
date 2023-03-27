---
title: Breiten- und Dichtebeschreibungen
description: Beispiele zur Verwendung von Breiten- und Dichtebeschreibungen in `srcset`
taskInputHash: b761a08492340672
lang: de
---
Verständnis von Breiten- (w) und Dichtebeschreibungen (x) in `srcset`. Verwenden Sie Beispiele und verwenden Sie Markdown.

> `srcset` ist ein HTML-Attribut, das Entwicklern ermöglicht, mehrere Bildquellen mit unterschiedlichen Auflösungen oder Pixel-Dichten bereitzustellen und dem Browser zu ermöglichen, das geeignete Bild basierend auf den Anzeigeeigenschaften des Geräts auszuwählen. Das `srcset`-Attribut verwendet eine Kombination aus `URL` und `w` oder `x`-Beschreibungen, um die Bilder zu spezifizieren.

## Breiten- (`w`) Beschreibung

> Die `w`-Beschreibung wird verwendet, um die Breite eines Bildes in Pixeln anzugeben. Es wird verwendet, wenn wir dem Browser die Abmessungen eines Bildes geben möchten, damit er das geeignete Bild für den verfügbaren Bildschirmplatz auswählen kann.

> Die Syntax zur Verwendung der `w`-Beschreibung in `srcset` lautet wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre jeweiligen Breiten in Pixeln zur Verfügung gestellt. Der Browser wird das Bild mit der nächstgelegenen Breite zum verfügbaren Bildschirmplatz auswählen.

## Dichtebeschreibung (`x`)

> Die `x`-Beschreibung wird verwendet, um die Pixel-Dichte eines Bildes anzugeben, d.h. das Verhältnis von physischen Pixeln zu CSS-Pixeln. Sie wird verwendet, wenn wir dem Browser verschiedene Versionen desselben Bildes mit unterschiedlichen Pixeldichten zur Verfügung stellen möchten.

> Die Syntax zur Verwendung der `x`-Beschreibung in `srcset` lautet wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre jeweiligen Pixel-Dichten zur Verfügung gestellt. Der Browser wird das Bild mit der nächstgelegenen Pixel-Dichte des Geräts auswählen.

> Beachten Sie, dass die `w`- und `x`-Beschreibungen in demselben `srcset`-Attribut verwendet werden können, um dem Browser mehr Auswahlmöglichkeiten zu geben.
