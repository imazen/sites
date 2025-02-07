---
taskInputHash: 6b5b260f20345465
title: Descrittori di larghezza e densità
description: Esempi di utilizzo dei descrittori di larghezza e densità in `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
Comprendere i descrittori di larghezza (w) e densità (x) in `srcset`. Utilizza esempi e usa Markdown.

> `srcset` è un attributo HTML che consente agli sviluppatori di fornire più sorgenti di immagini con diverse risoluzioni o densità di pixel, permettendo al browser di selezionare l'immagine appropriata in base alle caratteristiche del display del dispositivo. L'attributo `srcset` utilizza una combinazione di `URL` e descrittori `w` o `x` per specificare le immagini.
## Descrittore di Larghezza (`w`)

> Il descrittore `w` viene utilizzato per specificare la larghezza di un'immagine in pixel. Viene usato quando si vuole fornire al browser le dimensioni di un'immagine in modo che possa scegliere l'immagine appropriata per lo spazio disponibile dello schermo.

> La sintassi per utilizzare il descrittore `w` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Esempio di Immagine">
```

> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le loro larghezze corrispondenti in pixel. Il browser selezionerà l'immagine con la larghezza più vicina allo spazio disponibile sullo schermo.
## Descrittore di Densità (`x`)

> Il descrittore `x` è usato per specificare la densità di pixel di un'immagine, che è il rapporto tra i pixel fisici e i pixel CSS. Si utilizza quando si vuole fornire al browser diverse versioni della stessa immagine con differenti densità di pixel.

> La sintassi per utilizzare il descrittore `x` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Esempio di Immagine">
```

> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le loro densità di pixel corrispondenti. Il browser selezionerà l'immagine con la densità di pixel più vicina a quella dello schermo del dispositivo.

> Nota che i descrittori `w` e `x` possono essere utilizzati insieme nello stesso attributo `srcset` per fornire al browser più opzioni tra cui scegliere.
