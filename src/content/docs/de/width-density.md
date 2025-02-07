---
taskInputHash: c65be8f7d9bb5f50
title: Breiten- und Dichtebeschreiber
description: Beispiele für die Verwendung von Breiten- und Dichtebeschreibern in `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: de
---
Verstehen der Breiten- (w) und Dichtebeschreibung (x) im `srcset`. Verwenden Sie Beispiele und Markdown. 

> `srcset` ist ein HTML-Attribut, das Entwicklern ermöglicht, mehrere Bildquellen mit unterschiedlichen Auflösungen oder Pixeldichten bereitzustellen, und dem Browser erlaubt, das entsprechende Bild basierend auf den Anzeigeeigenschaften des Geräts auszuwählen. Das `srcset`-Attribute verwendet eine Kombination aus `URL` und `w` oder `x` Beschreibungen, um die Bilder anzugeben. 

## Breiten (`w`) Beschreibung

> Der `w`-Beschreiber wird verwendet, um die Breite eines Bildes in Pixeln anzugeben. Er wird verwendet, wenn wir dem Browser die Abmessungen eines Bildes bereitstellen möchten, sodass er das geeignete Bild für den verfügbaren Bildschirmplatz auswählen kann.

> Die Syntax zur Verwendung des `w`-Beschreibers in `srcset` ist wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und deren entsprechende Breiten in Pixeln bereitgestellt. Der Browser wählt das Bild mit der nächstgelegenen Breite zum verfügbaren Bildschirmplatz aus. 

## Dichte (`x`) Beschreibung

> Der `x`-Beschreiber wird verwendet, um die Pixeldichte eines Bildes anzugeben, das Verhältnis von physischen Pixeln zu CSS-Pixeln. Er wird verwendet, wenn wir dem Browser verschiedene Versionen desselben Bildes mit unterschiedlichen Pixeldichten bereitstellen möchten.

> Die Syntax zur Verwendung des `x`-Beschreibers in `srcset` ist wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und deren entsprechende Pixeldichten bereitgestellt. Der Browser wird das Bild mit der nächstgelegenen Pixeldichte zum Bildschirm des Geräts auswählen.

> Beachten Sie, dass die `w`- und `x`-Beschreibungen zusammen im gleichen `srcset`-Attribut verwendet werden können, um dem Browser mehr Auswahlmöglichkeiten zu bieten.
