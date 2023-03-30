---
title: Breakpoint e immagini
description: Perché alcuni (ma non tutti) i breakpoint sono importanti per le tue immagini
taskInputHash: 376271cff22dc9c5
lang: it
---
### Contesto

Schermi piccoli e grandi monitor richiedono differenti layout.  Ai fini di `srcset` e `sizes`, è necessario conoscere a che punto avviene il cambiamento del layout.

I web developer devono decidere cosa ridurre, nascondere o spostare su schermi più piccoli - o più comunemente, cosa espandere, rivelare o aggiungere su schermi più grandi. Hanno anche pochissime informazioni a cui fare riferimento. L'utente sta utilizzando un tablet o un telefono in modalità landscape - o una finestra del browser piccola?

Dobbiamo scegliere una larghezza viewport arbitraria in cui il layout cambia. Questo viene chiamato un **breakpoint** . È un numero arbitrario di pixel CSS ([non pixel del dispositivo](/it/pixels-non-pixels)). Polypane ha un [ottimo articolo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sui breakpoint comunemente utilizzati.

Alcune immagini (come loghi o icone o pulsanti) potrebbero essere immune alle spostamenti di layout causati da questi breakpoint (e andranno bene con i [descrittori di densità di srcset](/it/density-descriptors)).

Le immagini del contenuto principale saranno limitate dalle dimensioni del loro contenitore. Tipicamente l'area del contenuto principale di una pagina sarà limitata ad una certa larghezza sui dispositivi più grandi, una `max-width`, ma su schermi piccoli, l'area del contenuto principale riempirà l'intero viewport.

Se hai più di una colonna a qualche breakpoint, sarà più difficile calcolare le regole di dimensionamento effettive, poiché la percentuale della larghezza viewport che l'immagine occupa cambierà.

### Il metodo facile

Detto questo, non complicarti troppo. 
Probabilmente andrà molto bene con la seguente approssimazione:

1. A che dimensione la colonna principale (o il contenitore dell'immagine) smette di crescere? Fino a quella larghezza viewport, possiamo utilizzare`100vw` per l'attributo `sizes` dell'immagine per indicare che l'immagine occupa il 100% della larghezza di viewport.
2. Qual è la larghezza massima che quel contenitore raggiunge? Possiamo impostarlo come `width` fisso per tutto il resto.

Se la risposta al punto 1 è 700px e la risposta al punto 2 è 800px, si può utilizzare il seguente attributo `sizes`:

```html
<!-- Questi sono pixel CSS, non pixel del dispositivo o dell'immagine. -->  
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Si potrebbe pensare che il browser possa gestire tutti questi calcoli in modo perfetto per noi in base al CSS. Purtroppo, i browser sono aggressivamente desiderosi di scegliere un URL dell'immagine *prima* che i fogli di stile siano scaricati. Quindi dobbiamo fare i calcoli da soli, e va bene così se non è perfetto.
