---
title: Breiten- und Dichtebeschreibungen
description: Beispiele zur Verwendung von Breiten- und Dichtebeschreibungen in `srcset`
taskInputHash: 3afb179ed8087fd4
lang: de
---
Verständnis der Breiten- (w) und Dichtebeschreibungen (x) in `srcset`. Verwenden Sie Beispiele und verwenden Sie Markdown.

> `srcset` ist ein HTML-Attribut, das es Entwicklern ermöglicht, mehrere Bildquellen mit unterschiedlichen Auflösungen oder Pixel-Dichten bereitzustellen und den Browser das geeignete Bild basierend auf den Anzeigeeigenschaften des Geräts auswählen zu lassen. Das `srcset`-Attribut verwendet eine Kombination aus `URL` und `w` oder `x` Descriptoren, um die Bilder anzugeben.
## Breiten- (`w`) Descriptor

> Der `w`-Descriptor wird verwendet, um die Breite eines Bildes in Pixeln anzugeben. Es wird verwendet, wenn wir dem Browser die Abmessungen eines Bildes angeben möchten, damit er das geeignete Bild für den verfügbaren Bildschirmplatz auswählen kann.

> Die Syntax für die Verwendung des `w`-Descriptors in `srcset` lautet wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Beispielbild">
```



> In dem obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Breiten in Pixeln zur Verfügung gestellt. Der Browser wählt das Bild mit der nächstgelegenen Breite zum verfügbaren Bildschirmplatz aus.
## Dichtebeschreibung (`x`)

> Der `x` Descriptoren wird verwendet, um die Pixeldichte eines Bildes anzugeben, die das Verhältnis von physikalischen Pixeln zu CSS-Pixeln darstellt. Es wird verwendet, wenn wir dem Browser unterschiedliche Versionen des gleichen Bildes mit unterschiedlichen Pixeldichten zur Verfügung stellen möchten.

> Die Syntax für die Verwendung des `x` Descriptors in `srcset` lautet wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Beispielbild">
```


> In dem obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Pixeldichten zur Verfügung gestellt. Der Browser wählt das Bild mit der nächstgelegenen Pixeldichte zum Bildschirm des Geräts aus.

> Beachten Sie, dass die `w` und `x` Descriptoren zusammen in demselben `srcset` Attribut verwendet werden können, um dem Browser mehr Auswahlmöglichkeiten zu geben.
