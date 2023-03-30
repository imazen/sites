---
title: Breiten- und Dichtedeskriptoren
description: Beispiele für die Verwendung von Breiten- und Dichtedeskriptoren in `srcset`
taskInputHash: 3afb179ed8087fd4
lang: de
---
Verständnis der Breiten- (w) und Dichte- (x) Deskriptoren in `srcset`. Verwenden Sie Beispiele und Markdown.

> `srcset` ist ein HTML-Attribut, das es Entwicklern ermöglicht, mehrere Bildquellen mit unterschiedlichen Auflösungen oder Pixel-Dichten bereitzustellen und den Browser das passende Bild basierend auf den Anzeigeeigenschaften des Geräts auswählen zu lassen. Das `srcset` -Attribut verwendet eine Kombination von `URL` und `w` oder `x` Deskriptoren, um die Bilder zu spezifizieren.
## Breite (w) Deskriptor

> Der `w` Deskriptor wird verwendet, um die Breite eines Bildes in Pixeln anzugeben. Er wird verwendet, wenn wir dem Browser die Dimensionen eines Bildes bereitstellen möchten, damit er das passende Bild für den verfügbaren Bildschirmraum auswählen kann.

> Die Syntax für die Verwendung des `w` Deskriptors in `srcset` lautet wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Beispielbild">
```



> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Breiten in Pixeln zur Verfügung gestellt. Der Browser wählt das Bild mit der nächstgelegenen Breite zum verfügbaren Bildschirmplatz aus.
## Dichte (x) Deskriptor

> Der `x` Deskriptor wird verwendet, um die Pixel-Dichte eines Bildes anzugeben, die das Verhältnis von physischen Pixeln zu CSS-Pixeln ist. Er wird verwendet, wenn wir dem Browser verschiedene Versionen desselben Bildes mit unterschiedlichen Pixel-Dichten bereitstellen möchten.

> Die Syntax für die Verwendung des `x` Deskriptors in `srcset` lautet wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Beispielbild">
```


> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Pixel-Dichten zur Verfügung gestellt. Der Browser wählt das Bild mit der nächstgelegenen Pixel-Dichte zum Bildschirm des Geräts aus.

> Beachten Sie, dass die `w` und `x` Deskriptoren im selben `srcset` Attribut zusammen verwendet werden können, um dem Browser mehr Auswahlmöglichkeiten zu bieten.
