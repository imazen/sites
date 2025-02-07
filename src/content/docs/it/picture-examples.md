---
taskInputHash: dcb9d277f9f605fc
title: Esempi di utilizzo dell'elemento `<picture>`
description: >-
  Fornisce esempi di utilizzo dell'elemento `<picture>`, per immagini
  responsive, direzione artistica e formati di immagine differenti
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
Ecco alcuni esempi di utilizzo dell'elemento `<picture>` e le loro spiegazioni:

1\. Esempio per immagini responsive:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Una immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse sorgenti di immagini per differenti dimensioni dello schermo. Gli elementi `<source>` specificano le diverse sorgenti di immagini utilizzando l'attributo "srcset" e l'attributo "media" per specificare le condizioni in base alle quali ciascuna sorgente deve essere utilizzata. L'elemento `<img>` viene utilizzato come ripiego per i browser più vecchi o quando le condizioni specificate negli elementi `<source>` non sono soddisfatte.

2\. Esempio per la direzione artistica:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Una immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse sorgenti di immagini a seconda dell'orientamento del dispositivo. L'elemento `<source>` con l'attributo "media" impostato su "(orientation: landscape)" specifica una sorgente di immagine per schermi larghi, mentre l'elemento `<img>` specifica una sorgente di immagine per schermi in modalità verticale.

3\. Esempio per formati di immagine differenti:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Una immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse sorgenti di immagini per differenti formati di immagine. Gli elementi `<source>` specificano diverse sorgenti di immagini utilizzando l'attributo "srcset" e l'attributo "type" per specificare il formato dell'immagine. L'elemento `<img>` viene utilizzato come ripiego per i browser più vecchi che non supportano l'elemento `<picture>`.

## Breakpoint

Nel design responsive, i breakpoint vengono utilizzati per definire quando il layout di un sito web o di un'applicazione dovrebbe cambiare in base alla dimensione del viewport. I breakpoint sono generalmente definiti utilizzando le media query in CSS, che applicano diversi stili a seconda della larghezza dello schermo. Questi breakpoint possono essere utilizzati in combinazione con l'elemento `<picture>` per fornire diverse sorgenti di immagini per differenti dimensioni dello schermo.

Ad esempio, nel primo esempio sopra, abbiamo utilizzato l'attributo `media` per specificare la larghezza dello schermo sotto la quale ciascuna sorgente dovrebbe essere utilizzata. Quando la larghezza dello schermo è maggiore o uguale a 768 pixel, verrà utilizzata la sorgente `image-large.jpg`; quando la larghezza dello schermo è maggiore o uguale a 480 pixel ma inferiore a 768 pixel, verrà utilizzata la sorgente `image-medium.jpg`; e quando la larghezza dello schermo è inferiore a 480 pixel, verrà utilizzata la sorgente `image-small.jpg`. Questo ci consente di servire immagini della dimensione appropriata per ciascun dispositivo, riducendo i tempi di caricamento della pagina e migliorando l'esperienza utente.

I breakpoint possono essere definiti a qualsiasi dimensione dello schermo, e possono essere utilizzati più breakpoint per creare layout che rispondono a una vasta gamma di dispositivi. Combinando i breakpoint con l'elemento `<picture>`, puoi creare design flessibili e reattivi che appaiono perfetti su qualsiasi dispositivo.
