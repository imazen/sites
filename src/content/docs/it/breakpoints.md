---
title: Breakpoints e immagini
description: Perché alcuni (ma non tutti) breakpoint sono importanti per le tue immagini
taskInputHash: ccd25a230851ea3d
lang: it
---
### Contesto

Piccoli schermi e grandi monitor richiedono layout diversi. Ai fini di `srcset` e `sizes`, dobbiamo decidere

I web developer devono decidere cosa restringere, nascondere o spostare su schermi più piccoli - o più comunemente, cosa espandere, rivelare o aggiungere su schermi più grandi. Hanno anche pochissime informazioni a disposizione. L'utente si trova su un tablet o su un telefono in modalità landscape - o in una finestra di browser piccola?

Dobbiamo scegliere una larghezza di viewport arbitraria dove avviene il cambiamento di layout. Questo viene chiamato **breakpoint**. È un numero arbitrario di pixel CSS ([non pixel del dispositivo](/it/px-non-sono-px)). Polypane ha un [ottimo articolo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sui breakpoint comunemente usati.

Alcune immagini (come loghi o icone o pulsanti) potrebbero essere immuni agli spostamenti di layout causati da questi breakpoint (e funzionare bene con [descrittori di densità srcset](/it/descrittori-di-densita)). 

Le immagini principali del contenuto saranno limitate dalle dimensioni del loro contenitore. Tipicamente, l'area principale del contenuto di una pagina sarà limitata a una certa larghezza sui più grandi schermi, una `max-width`, ma su schermi più piccoli, l'area principale del contenuto riempirà l'intero viewport.

Se hai più di una colonna a certi breakpoint, diventa più difficile calcolare le regole di dimensionamento effettive, poiché la percentuale di larghezza del viewport che l'immagine occupa cambierà.

### Il metodo facile

Detto ciò, non complicarti troppo. Probabilmente andrà benissimo l'approccio seguente:

1. A quale dimensione smette di crescere la colonna principale (o il contenitore dell'immagine)? Fino a questa larghezza di viewport, possiamo utilizzare `100vw` per l'attributo `sizes` dell'immagine per indicare che l'immagine occupa il 100% della larghezza del viewport.
2. Qual è la larghezza massima che il contenitore ha mai raggiunto? Possiamo impostarlo come `width` fisso per tutto il resto.

Se hai risposto 700px alla prima domanda e 800px alla seconda, puoi utilizzare il seguente attributo `sizes`:

```html
<!-- Questi sono pixel CSS, non pixel del dispositivo o dell'immagine. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```


> Si potrebbe pensare che il browser possa gestire tutti questi calcoli in modo elegante basandosi sul CSS. Sfortunatamente, i browser sono molto ansiosi di scegliere un URL dell'immagine *prima* che i fogli di stile siano scaricati. Quindi dobbiamo fare i calcoli noi stessi, e se non li facciamo perfettamente, pazienza per loro.
