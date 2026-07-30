---
taskInputHash: 055896dfb045f33f
title: Descrittori di larghezza e densità
description: Esempi di utilizzo dei descrittori di larghezza e densità in `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
Comprendere i descrittori di larghezza (w) e densità (x) in `srcset`. Usa esempi e usa Markdown.

> `srcset` è un attributo HTML che consente agli sviluppatori di fornire più sorgenti di immagini con diverse risoluzioni o densità di pixel, lasciando che il browser selezioni l'immagine appropriata in base alle caratteristiche del display del dispositivo. L'attributo `srcset` utilizza una combinazione degli identificatori `URL` e `w` o `x` per specificare le immagini.
## Descrittore di larghezza (`w`)

> Il descrittore `w` viene utilizzato per specificare la larghezza di un'immagine in pixel. È usato quando vogliamo fornire al browser le dimensioni di un'immagine in modo che possa scegliere l'immagine appropriata per lo spazio disponibile dello schermo.

> La sintassi per utilizzare il descrittore `w` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Immagine di esempio">
```


> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le loro larghezze corrispondenti in pixel. Il browser selezionerà l'immagine con la larghezza più vicina allo spazio disponibile dello schermo.
## Descrittore di densità (`x`)

> Il descrittore `x` è utilizzato per specificare la densità di pixel di un'immagine, che è il rapporto tra i pixel fisici e i pixel CSS. È usato quando vogliamo fornire al browser diverse versioni della stessa immagine con diverse densità di pixel.

> La sintassi per utilizzare il descrittore `x` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Immagine di esempio">
```


> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le loro densità di pixel corrispondenti. Il browser selezionerà l'immagine con la densità di pixel più vicina allo schermo del dispositivo.

> Nota che i descrittori `w` e `x` possono essere utilizzati insieme nello stesso attributo `srcset` per fornire al browser più opzioni tra cui scegliere.
