---
title: Descrittori di larghezza e densità
description: Esempi di utilizzo dei descrittori di larghezza e densità in `srcset`
taskInputHash: 7eeb05762e3b9bb9
lang: it
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Comprensione dei descrittori di width (w) e density (x) in `srcset`. Usa esempi e usa Markdown.

> `srcset` è un attributo HTML che consente ai developer di fornire più sorgenti di immagini con diverse risoluzioni o densità di pixel, e di lasciare che il browser selezioni l'immagine appropriata in base alle caratteristiche del display del dispositivo. L'attributo `srcset` utilizza una combinazione di URL e descrittori `w` o `x` per specificare le immagini.

## Descrittore di Width (`w`)

> Il descrittore `w` viene utilizzato per specificare la larghezza di un'immagine in pixel. Viene utilizzato quando vogliamo fornire al browser le dimensioni di un'immagine in modo che possa scegliere l'immagine appropriata per lo spazio disponibile dello schermo.

> La sintassi per l'utilizzo del descrittore `w` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Esempio di Immagine">
```

> Nell'esempio sopra abbiamo fornito al browser tre immagini con le loro larghezze corrispondenti in pixel. Il browser selezionerà l'immagine con la larghezza più vicina allo spazio disponibile dello schermo.

## Descrittore di Density (`x`)

> Il descrittore `x` viene utilizzato per specificare la densità di pixel di un'immagine, ovvero il rapporto tra pixel fisici e pixel CSS. Viene utilizzato quando vogliamo fornire al browser diverse versioni della stessa immagine con differenti densità di pixel.

> La sintassi per l'utilizzo del descrittore `x` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Esempio di Immagine">
```

> Nell'esempio sopra abbiamo fornito al browser tre immagini con le loro densità di pixel corrispondenti. Il browser selezionerà l'immagine con la densità di pixel più vicina allo schermo del dispositivo.

> Notare che i descrittori `w` e `x` possono essere utilizzati insieme nello stesso attributo `srcset` per fornire al browser più opzioni da cui scegliere.
