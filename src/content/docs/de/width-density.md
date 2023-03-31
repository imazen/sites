---
title: Breiten- und Dichteadapter
description: Beispiele für die Verwendung von Breiten- und Dichteadaptern in `srcset`
taskInputHash: 2171ff4767b5d45d
lang: de
ignore: '/* cSpell:locale de,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Verständnis für Breiten- (w) und Dichteadapter (x) in `srcset`. Verwenden Sie Beispiele und Markdown.

> `srcset` ist ein HTML-Attribut, das Entwicklern ermöglicht, mehrere Bildquellen mit unterschiedlichen Auflösungen oder Pixeldichten bereitzustellen, und den Browser das geeignete Bild basierend auf den Anzeigeeigenschaften des Geräts auswählen zu lassen. Das `srcset`-Attribut verwendet eine Kombination aus `URL`- und `w-` oder `x-`Adaptern, um die Bilder zu spezifizieren.

## Breiten- (`w`) Adapter

> Der `w-`Adapter wird verwendet, um die Breite eines Bildes in Pixeln anzugeben. Er wird verwendet, wenn wir dem Browser die Abmessungen eines Bildes zur Verfügung stellen wollen, damit er das geeignete Bild für den verfügbaren Bildschirmplatz wählen kann.

> Die Syntax für die Verwendung des `w-`Adapters in `srcset` sieht wie folgt aus:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Breiten in Pixeln zur Verfügung gestellt. Der Browser wählt das Bild mit der nächstliegenden Breite zum verfügbaren Bildschirmplatz.

## Dichteadapter (`x`)

> Der `x-`Adapter wird verwendet, um die Pixel-Dichte eines Bildes anzugeben, was das Verhältnis von physischen Pixeln zu CSS-Pixeln ist. Er wird verwendet, wenn wir dem Browser verschiedene Versionen desselben Bildes mit unterschiedlichen Pixeldichten zur Verfügung stellen wollen.

> Die Syntax für die Verwendung des `x-`Adapters in `srcset` sieht wie folgt aus:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Beispielbild">
```

> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Pixeldichten zur Verfügung gestellt. Der Browser wählt das Bild mit der nächstgelegenen Pixeldichte für den Gerätebildschirm aus.

> Beachten Sie, dass die `w-` und `x-`Adapter in derselben `srcset`-Attribut verwendet werden können, um dem Browser mehr Optionen zur Auswahl zu geben.
