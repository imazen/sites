---
title: Punti di interruzione e immagini
description: >-
  Perché alcuni (ma non tutti) punti di interruzione sono importanti per le tue
  immagini
taskInputHash: 1dc3f28d444f3158
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Contesto

Schermi piccoli e grandi monitor richiedono layout diversi. Per lo scopo di `srcset` e `sizes`, dobbiamo sapere in che punto il layout cambia.

I web developer devono decidere cosa ridurre, nascondere o spostare su schermi più piccoli - o più comunemente, cosa espandere, rivelare o aggiungere su schermi più grandi. Inoltre, hanno pochissime informazioni a disposizione. L'utente sta usando un tablet o un telefono in modalità landscape, o una finestra del browser piccola?

Dobbiamo scegliere una larghezza di viewport arbitraria in cui il layout cambia. Questo è chiamato **punto di interruzione**. È un numero arbitrario di pixel CSS ([non pixel del dispositivo](/it/pixels-non-pixels)). Polypane ha un [ottimo articolo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sui punti di interruzione comunemente usati.

Alcune immagini (come loghi, icone o pulsanti) potrebbero essere immune ai cambiamenti di layout causati da questi punti di interruzione (e andar bene con [srcset density descriptors](/it/density-descriptors)). 

Le immagini del contenuto principale saranno limitate dalle dimensioni del loro contenitore. In genere, l'area di contenuto principale di una pagina sarà limitata a una certa larghezza sui più grandi schermi, una `max-width`, ma sui piccoli schermi, l'area di contenuto principale riempirà l'intero viewport.

Se hai più di una colonna su alcuni punti di interruzione, sarà più difficile calcolare le regole di dimensionamento effettive, poiché la percentuale di larghezza del viewport che l'immagine occupa cambierà.

### Il metodo facile

Detto ciò, non complicarti la vita. Probabilmente andrai molto bene con la seguente approssimazione:

1. A quale dimensione la colonna principale (o il contenitore dell'immagine) smette di crescere? Fino a quella larghezza di viewport, possiamo usare `100vw` per l'attributo `sizes` dell'immagine per dire che l'immagine occupa il 100% della larghezza del viewport.  
2. Qual è la larghezza massima che quel contenitore raggiunge mai? Possiamo impostarla come una larghezza fissa per tutto il resto.

Se la tua risposta al punto 1 è 700px e la tua risposta al punto 2 è 800px, puoi usare il seguente attributo `sizes`:

```html
<!-- Questi sono pixel CSS, non pixel del dispositivo o dell'immagine. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> Potresti pensare che il browser potrebbe gestire facilmente tutti questi calcoli per noi basandosi sui CSS. Purtroppo, i browser sono aggressivamente desiderosi di scegliere un URL di immagine *prima* che vengano scaricati gli stili CSS. Quindi dobbiamo fare i calcoli da soli, e se non lo facciamo perfettamente, pazienza per loro.
