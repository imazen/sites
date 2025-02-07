---
taskInputHash: 473a93ebd1a2c1d5
title: Breakpoint e immagini
description: Perché alcuni (ma non tutti) breakpoint sono importanti per le tue immagini
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
### Background

Schermi piccoli e grandi monitor richiedono layout diversi. Per l'uso di `srcset` e `sizes`, dobbiamo sapere a quale punto il layout cambia.

Gli sviluppatori web devono decidere cosa ridurre, nascondere o ricollocare sugli schermi più piccoli - o più comunemente, cosa espandere, rivelare o aggiungere sugli schermi più grandi. Hanno anche pochissime informazioni a disposizione. L'utente è su un tablet o su un telefono in modalità orizzontale - o in una finestra del browser piccola?

Dobbiamo scegliere una larghezza di viewport arbitraria dove il layout cambia. Questo si chiama **breakpoint**. È un numero arbitrario di pixel CSS ([non di pixel dispositivo](/it/pixels-not-pixels)). Polypane ha un [ottimo articolo](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) sui breakpoint comunemente usati.

Alcune immagini (come loghi o icone o pulsanti) potrebbero essere immuni alle modifiche del layout causate da questi breakpoint (e andare bene con [i descrittori di densità srcset](/it/density-descriptors)). 

Le immagini del contenuto principale saranno limitate dalla dimensione del loro contenitore. Tipicamente l'area del contenuto principale di una pagina sarà limitata a una certa larghezza sugli schermi più grandi, una `max-width`, ma sugli schermi piccoli, l'area del contenuto principale riempirà l'intero viewport.

Se hai più di una colonna in alcuni breakpoint, sarà più difficile calcolare le regole di dimensionamento efficaci, poiché la percentuale della larghezza del viewport che l'immagine occupa cambierà.

### Il metodo facile

Detto ciò, non pensarci troppo. Probabilmente sarai molto a tuo agio con la seguente approssimazione:

1. A quale dimensione la colonna principale (o il contenitore dell'immagine) smette di crescere? Fino a quella larghezza di viewport, possiamo usare `100vw` per l'attributo `sizes` dell'immagine per dire che l'immagine occupa il 100% della larghezza del viewport.  
2. Qual è la larghezza massima che quel contenitore raggiunge mai? Possiamo impostarla come una `larghezza` fissa per tutto il resto. 

Se la tua risposta alla prima domanda era 700px e alla seconda era 800px, puoi usare il seguente attributo `sizes`:

```html
<!-- Questi sono pixel CSS, non pixel dei dispositivi o pixel dell'immagine. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Pensavi che il browser potesse gestire bene tutti questi calcoli per noi basandosi sul CSS. Purtroppo, i browser sono molto desiderosi di scegliere un URL dell'immagine *prima* che i fogli di stile siano scaricati. Quindi dobbiamo fare i calcoli noi stessi, e se non li facciamo perfettamente, se lo meritano.
