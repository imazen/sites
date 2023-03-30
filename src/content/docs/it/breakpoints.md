---
title: Breakpoint e immagini
description: Perché alcuni (ma non tutti) i breakpoint sono importanti per le tue immagini
taskInputHash: e6ea31b34a72e447
lang: it
---
### Contesto

Schermi piccoli e monitor grandi richiedono layout diversi. Per lo scopo di `srcset` e `sizes`, dobbiamo sapere a che punto avviene il cambio di layout.

I web developer devono decidere cosa ridurre, nascondere o spostare su schermi più piccoli - o più comunemente, cosa espandere, rivelare o aggiungere su schermi più grandi. Inoltre hanno poche informazioni a disposizione. L'utente sta utilizzando un tablet o uno smartphone in modalità landscape - o una finestra di browser piccola?

Dobbiamo scegliere una larghezza di viewport arbitraria in cui avviene il cambio di layout. Questo viene chiamato un **breakpoint**. È un valore arbitrario in pixel CSS ([non pixel dispositivo](/it/pixels-non-pixels)). Polypane ha un [ottimo articolo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sui breakpoint comunemente usati.

Alcune immagini (come loghi, icone o pulsanti) potrebbero essere immune ai cambiamenti di layout causati da questi breakpoint (e andranno bene con i [descrittori di densità srcset](/it/density-descriptors)).

Le immagini del contenuto principale saranno limitate dalle dimensioni del loro contenitore. In genere, l'area del contenuto principale di una pagina sarà limitata a una determinata larghezza sui più grandi schermi, una `max-width`, ma su schermi più piccoli l'area del contenuto principale riempirà l'intero viewport.

Se si hanno più di una colonna a determinati breakpoint, diventa più difficile calcolare le regole di dimensionamento effettive, poiché la percentuale della larghezza del viewport che l'immagine occupa cambierà.

### Il metodo facile

Detto questo, non bisogna sovrapensare. Probabilmente sarete molto OK con la seguente approssimazione:

1. A che dimensione la colonna principale (o il contenitore dell'immagine) smette di crescere? Fino a quella larghezza di viewport, possiamo utilizzare `100vw` per l'attributo `sizes` dell'immagine per indicare che l'immagine occupa il 100% della larghezza del viewport.
2. Qual è la larghezza massima che il contenitore raggiunge? Possiamo impostare quella larghezza fissa per tutto il resto.

Se la vostra risposta al punto 1 è stata 700px e la risposta al punto 2 è stata 800px, potete usare il seguente attributo `sizes`:

```html
<!-- Questi sono pixel CSS, non pixel del dispositivo o dell'immagine. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> Potreste pensare che il browser potrebbe gestire tutte queste elaborazioni per noi basandosi sul CSS. Sfortunatamente, i browser sono aggressivamente desiderosi di scegliere un URL dell'immagine *prima* che i fogli di stile vengano scaricati. Quindi dobbiamo fare i calcoli da soli, e farà loro comodo se non riusciamo a farlo perfettamente.
