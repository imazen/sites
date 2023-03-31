---
title: Quando utilizzare l'elemento <picture>
description: Spiega in quali situazioni si dovrebbe utilizzare l'elemento <picture>
taskInputHash: 583a9afd2e45d56a
lang: it
ignore: '/* cSpell:locale it,en*/'
date_published: '2023-03-27'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
L'elemento `picture` viene utilizzato per fornire più versioni di un'immagine e determina quale versione dell'immagine visualizzare in base a determinate condizioni. È particolarmente utile per ottimizzare le immagini per diverse dimensioni e risoluzioni dello schermo ed è comunemente usato nel web design responsive.
Ecco alcuni scenari specifici in cui potresti voler utilizzare l'elemento `picture`:

* **Display Retina:** gli schermi ad alta densità come i display Retina di Apple hanno una densità di pixel maggiore, il che significa che le immagini possono sembrare sfocate o pixelate se non sono ottimizzate per l'alta risoluzione. Con l'elemento `picture`, è possibile fornire una versione dell'immagine che ha il doppio dei pixel della versione normale, in modo che appaia nitida e chiara sui display Retina.

* **Proporzioni diverse:** se stai progettando un sito che deve visualizzare immagini con diverse proporzioni (come paesaggio vs ritratto), puoi utilizzare l'elemento `picture` per fornire diverse versioni dell'immagine ottimizzate per ciascuna proporzione.

* **Limitazioni della larghezza di banda:** le immagini possono essere file di grandi dimensioni che occupano molta larghezza di banda, specialmente su dispositivi mobili. Con l'elemento `picture`, è possibile fornire versioni più piccole dell'immagine per dispositivi con schermi più piccoli o connessioni Internet più lente, il che può aiutare a ridurre i tempi di caricamento della pagina.

* **Layout diretti dall'arte:** a volte si può desiderare di presentare un'immagine in un certo modo a seconda del layout del resto della pagina. Ad esempio, si potrebbe voler mostrare un primo piano del viso di una persona sui dispositivi mobili, ma una ripresa più ampia sui dispositivi desktop. L'elemento `picture` consente di fornire diverse versioni dell'immagine ottimizzate per diversi layout.

Complessivamente, l'elemento `picture` è uno strumento potente che può aiutare a ottimizzare le immagini per una varietà di casi d'uso e garantire che appaiano fantastici su qualsiasi dispositivo o dimensione dello schermo su cui vengono visualizzati.
