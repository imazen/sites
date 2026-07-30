---
taskInputHash: 3b85aa8b1c98ab56
title: Punti di rottura e immagini
description: >-
  Perché alcuni (ma non tutti) punti di rottura sono importanti per le tue
  immagini
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
### Background

Schermi piccoli e monitor grandi necessitano di layout diversi. Per lo scopo di `srcset` e `sizes`, dobbiamo sapere in quale punto il layout cambia.

Gli sviluppatori web devono decidere cosa ridurre, nascondere o rilocare su schermi più piccoli - o più comunemente, cosa espandere, rivelare o aggiungere su schermi più grandi. Hanno anche pochissime informazioni su cui basarsi. L'utente sta usando un tablet o un telefono in modalità orizzontale - o una finestra del browser piccola?

Dobbiamo scegliere una larghezza di viewport arbitraria dove il layout cambia. Questo è chiamato un **punto di rottura**. È un numero arbitrario di pixel CSS ([non pixel del dispositivo](/it/pixels-not-pixels)). Polypane ha un [ottimo articolo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sui punti di rottura comunemente usati.

Alcune immagini (come loghi o icone o pulsanti) potrebbero essere immuni ai cambiamenti di layout causati da questi punti di rottura (e andar bene con [descrittori di densità srcset](/it/density-descriptors)).

Le immagini del contenuto principale saranno limitate dalla dimensione del loro contenitore. Tipicamente, l'area del contenuto principale di una pagina sarà limitata a una certa larghezza sugli schermi più grandi, un `max-width`, ma sugli schermi piccoli, l'area del contenuto principale riempirà l'intero viewport.

Se hai più di una colonna in alcuni punti di rottura, diventerà più difficile calcolare le regole di dimensionamento effettive, poiché la percentuale della larghezza del viewport che l'immagine occupa cambierà.

### Il metodo facile

Detto ciò, non pensare troppo a questo. Probabilmente sarai molto a tuo agio con la seguente approssimazione:

1. A che dimensione la colonna principale (o il contenitore dell'immagine) smette di crescere? Fino a quella larghezza del viewport, possiamo usare `100vw` per l'attributo `sizes` dell'immagine per dire che l'immagine occupa il 100% della larghezza del viewport.  
2. Qual è la larghezza massima che il contenitore raggiunge mai? Possiamo impostarla come una `width` fissa per tutto il resto.

Se la tua risposta alla 1 era 700px e la tua risposta alla 2 era 800px, puoi usare il seguente attributo `sizes`:

```html
<!-- Questi sono pixel CSS, non pixel del dispositivo o pixel dell'immagine. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Potresti pensare che il browser possa gestire tutti questi calcoli per noi basandosi sui CSS. Sfortunatamente, i browser sono estremamente desiderosi di scegliere un URL di immagine *prima* che i fogli di stile siano scaricati. Quindi dobbiamo fare i calcoli da soli, e gli sta bene se non lo facciamo perfetto.
