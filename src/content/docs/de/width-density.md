---
title: Breiten- und Dichten-Deskriptoren
description: Beispiele für die Verwendung von Breiten- und Dichten-Deskriptoren in `srcset`
taskInputHash: ecf3cb15eb544dea
lang: de
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Verständnis der Breitenangaben (`w`) und Dichtenangaben (`x`) in `srcset`. Verwenden Sie Beispiele und Markdown.

> `srcset` ist ein HTML-Attribut, das Entwicklern ermöglicht, mehrere Bildquellen mit unterschiedlichen Auflösungen oder Pixeldichten bereitzustellen und den Browser aufgrund der Anzeigeeigenschaften des Geräts das geeignete Bild auswählen zu lassen. Das Attribut `srcset` verwendet eine Kombination aus der `URL` und den Deskriptoren `w` oder `x`, um die Bilder anzugeben.
## Breitenangabe (`w`) Deskriptor

> Der `w`-Deskriptor wird verwendet, um die Breite eines Bildes in Pixeln anzugeben. Er wird verwendet, wenn wir dem Browser die Abmessungen eines Bildes zur Verfügung stellen möchten, damit er das geeignete Bild für den verfügbaren Bildschirmplatz auswählen kann.

> Die Syntax für die Verwendung des `w`-Deskriptors in `srcset` ist wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Beispielbild">
```



> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Breiten in Pixeln zur Verfügung gestellt. Der Browser wird das Bild mit der nächstgelegenen Breite zum verfügbaren Bildschirmplatz auswählen.
## Dichtenangabe (`x`) Deskriptor

> Der `x`-Deskriptor wird verwendet, um die Pixeldichte eines Bildes anzugeben, die das Verhältnis von physischen Pixeln zu CSS-Pixeln ist. Er wird verwendet, wenn wir dem Browser verschiedene Versionen desselben Bildes mit unterschiedlichen Pixeldichten zur Verfügung stellen möchten.

> Die Syntax für die Verwendung des `x`-Deskriptors in `srcset` ist wie folgt:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Beispielbild">
```


> Im obigen Beispiel haben wir dem Browser drei Bilder und ihre entsprechenden Pixeldichten zur Verfügung gestellt. Der Browser wird das Bild mit der nächstgelegenen Pixeldichte zum Bildschirm des Geräts auswählen.

> Beachten Sie, dass die `w`- und `x`-Deskriptoren in derselben `srcset`-Attribute verwendet werden können, um dem Browser mehr Auswahlmöglichkeiten zu bieten.
