---
title: Quando usare l'elemento <picture>
description: Spiega in quali situazioni dovresti usare l'elemento <picture>
taskInputHash: 1d10b5a8f8449d37
lang: it
---
L'elemento `picture` viene utilizzato per fornire più versioni di un'immagine e determina quale versione dell'immagine visualizzare in base a determinate condizioni. È particolarmente utile per ottimizzare le immagini per diverse dimensioni e risoluzioni dello schermo, ed è comunemente utilizzato nel design web responsivo. 

Ecco alcuni scenari specifici in cui potresti voler utilizzare l'elemento `picture`:

* **Schermi Retina:** Gli schermi ad alta densità come i Retina di Apple hanno una densità di pixel più elevata, il che significa che le immagini possono sembrare sfocate o pixelate se non sono ottimizzate per l'alta risoluzione. Con l'elemento `picture`, è possibile fornire una versione dell'immagine che ha il doppio dei pixel della versione normale, in modo da apparire nitida e chiara sui display Retina.

* **Differenti rapporti di aspetto:** Se stai progettando un sito che deve visualizzare immagini con rapporti di aspetto diversi (come orizzontale vs verticale), puoi usare l'elemento `picture` per fornire diverse versioni dell'immagine ottimizzate per ciascun rapporto di aspetto.

* **Limitazioni di larghezza di banda:** Le immagini possono essere file di grandi dimensioni che occupano molta larghezza di banda, specialmente sui dispositivi mobili. Con l'elemento `picture`, è possibile fornire versioni più piccole dell'immagine per dispositivi con schermi più piccoli o connessioni internet più lente, il che può aiutare a ridurre i tempi di caricamento della pagina.

* **Layout guidati dall'arte:** A volte potresti voler presentare un'immagine in un certo modo a seconda del layout del resto della pagina. Ad esempio, potresti voler mostrare un primo piano del volto di una persona sui dispositivi mobili e uno scatto più ampio sui dispositivi desktop. L'elemento `picture` consente di fornire diverse versioni dell'immagine ottimizzate per diversi layout.

Complessivamente, l'elemento `picture` è uno strumento potente che può aiutarti ad ottimizzare le tue immagini per una varietà di casi d'uso e assicurarti che appaiano perfette su qualsiasi dispositivo o dimensione dello schermo.
