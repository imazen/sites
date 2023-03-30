---
title: Quando utilizzare l'elemento <picture>
description: Spiega in quali situazioni dovresti utilizzare l'elemento <picture>
taskInputHash: 1d10b5a8f8449d37
lang: it
---
L'elemento `picture` viene utilizzato per fornire molteplici versioni di un'immagine e determinare quale versione dell'immagine mostrare basandosi su alcune condizioni. È particolarmente utile per l'ottimizzazione delle immagini per diverse dimensioni e risoluzioni dello schermo ed è comunemente usato nel responsive web design.
Ecco alcuni scenari specifici in cui potresti voler utilizzare l'elemento `picture`:

* **Schermi Retina:** I display ad alta densità come i display Retina di Apple hanno una densità di pixel più alta, il che significa che le immagini possono apparire sfocate o pixelate se non sono ottimizzate per l'alta risoluzione. Con l'elemento `picture`, è possibile fornire una versione dell'immagine che ha il doppio dei pixel della versione normale, in modo che appaia nitida e chiara sui display Retina.

* **Diversi rapporti di aspetto:** Se stai progettando un sito che deve visualizzare immagini con diversi rapporti di aspetto (come paesaggio vs ritratto), puoi utilizzare l'elemento `picture` per fornire diverse versioni dell'immagine ottimizzate per ogni rapporto di aspetto.

* **Limitazioni di banda:** Le immagini possono essere file di grandi dimensioni che occupano molta banda, specialmente sui dispositivi mobili. Con l'elemento `picture`, puoi fornire versioni più piccole dell'immagine per dispositivi con schermi più piccoli o connessioni internet più lente, il che può contribuire a ridurre i tempi di caricamento della pagina.

* **Layout visuali:** A volte potresti voler presentare un'immagine in modo specifico a seconda del layout del resto della pagina. Ad esempio, potresti voler mostrare un primo piano del viso di una persona sui dispositivi mobili, ma una ripresa più ampia sui dispositivi desktop. L'elemento `picture` consente di fornire diverse versioni dell'immagine ottimizzate per diversi layout.

In generale, l'elemento `picture` è uno strumento potente che ti permette di ottimizzare le tue immagini per una varietà di casi d'uso e di assicurarti che appaiano sempre grandi indipendentemente dal dispositivo o dalle dimensioni dello schermo su cui vengono visualizzate.
