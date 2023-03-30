---
title: Descrittori di larghezza e densità
description: Esempi di utilizzo dei descrittori di larghezza e densità in `srcset`
taskInputHash: 7eeb05762e3b9bb9
lang: it
---
Capire le descrizioni di larghezza (w) e densità (x) in `srcset`. Utilizzare esempi e Markdown.

> `srcset` è un attributo HTML che consente ai programmatori di fornire più fonti di immagini con diverse risoluzioni, o densità di pixel, e consentire al browser di selezionare l'immagine appropriata in base alle caratteristiche del display del dispositivo. L'attributo `srcset` utilizza una combinazione di `URL` e descrizioni `w` o `x` per specificare le immagini.

## Descrizione `w` di larghezza 

> La descrizione `w` viene utilizzata per specificare la larghezza di un'immagine in pixel. Viene utilizzata quando vogliamo fornire al browser le dimensioni di un'immagine in modo che possa scegliere l'immagine appropriata per lo spazio disponibile sullo schermo.

> La sintassi per utilizzare la descrizione `w` in `srcset` è la seguente: 

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Immagine di esempio">
```
> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le relative larghezze in pixel. Il browser selezionerà l'immagine con la larghezza più vicina allo spazio disponibile sullo schermo.

## Descrizione `x` di densità 

> La descrizione `x` viene utilizzata per specificare la densità di pixel di un'immagine, che è il rapporto tra pixel fisici e pixel CSS. Viene utilizzato quando vogliamo fornire al browser diverse versioni della stessa immagine con diverse densità di pixel.

> La sintassi per utilizzare la descrizione `x` in `srcset` è la seguente: 

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Immagine di esempio">
```
> Nell'esempio sopra, abbiamo fornito al browser tre immagini e le relative densità di pixel. Il browser selezionerà l'immagine con la densità di pixel più vicina allo schermo del dispositivo.

> Si noti che le descrizioni `w` e `x` possono essere utilizzate insieme nello stesso attributo `srcset` per fornire al browser più opzioni di scelta.
