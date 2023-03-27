---
title: Descrittori di larghezza e densità
description: Esempi di utilizzo dei descrittori di larghezza e densità in `srcset`
taskInputHash: c60c37e86531d673
lang: it
---
Comprensione dei descrittori di larghezza (w) e densità (x) in `srcset`. Usa esempi e usa Markdown.

> `srcset` è un attributo HTML che consente agli sviluppatori di fornire più fonti di immagine con diverse risoluzioni o densità di pixel, e consente al browser di selezionare l'immagine appropriata in base alle caratteristiche di visualizzazione del dispositivo. L'attributo `srcset` utilizza una combinazione di `URL` e descrittori `w` o `x` per specificare le immagini.
## Descrittore di larghezza (`w`)

> Il descrittore `w` viene utilizzato per specificare la larghezza di un'immagine in pixel. Viene utilizzato quando vogliamo fornire al browser le dimensioni di un'immagine in modo che possa scegliere l'immagine appropriata per lo spazio disponibile sullo schermo.

> La sintassi per l'utilizzo del descrittore `w` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Esempio Immagine">
```



> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le relative larghezze in pixel. Il browser selezionerà l'immagine con la larghezza più vicina allo spazio disponibile sullo schermo.
## Descrittore di Densità (`x`)

> Il descrittore `x` viene utilizzato per specificare la densità di pixel di un'immagine, che è il rapporto tra i pixel fisici e quelli CSS. Viene utilizzato quando vogliamo fornire al browser diverse versioni della stessa immagine con diverse densità di pixel.

> La sintassi per utilizzare il descrittore `x` in `srcset` è la seguente:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Esempio Immagine">
```


> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le relative densità di pixel. Il browser selezionerà l'immagine con la densità di pixel più vicina allo schermo del dispositivo.

> Nota che i descrittori `w` e `x` possono essere utilizzati insieme nello stesso attributo `srcset` per fornire al browser più opzioni tra cui scegliere.
