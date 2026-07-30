---
taskInputHash: 87c75fad567d245c
title: Esempi di utilizzo dell'elemento <picture>
description: >-
  Fornisce esempi di utilizzo dell'elemento <picture>, per immagini responsive,
  direzione dell'arte e diversi formati di immagine
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
Ecco alcuni esempi di utilizzo dell'elemento `<picture>` e le loro spiegazioni:

1\. Esempio per immagini responsive:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene usato per fornire fonti di immagini diverse per diverse dimensioni di schermo. Gli elementi `<source>` specificano le diverse fonti di immagini utilizzando l'attributo "srcset" e l'attributo "media" per specificare le condizioni in base alle quali ogni fonte dovrebbe essere utilizzata. L'elemento `<img>` è utilizzato come fallback per i browser più vecchi o quando non sono soddisfatte le condizioni specificate negli elementi `<source>`.

2\. Esempio di direzione dell'arte:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene usato per fornire fonti di immagini diverse a seconda dell'orientamento del dispositivo. L'elemento `<source>` con l'attributo "media" impostato su "(orientation: landscape)" specifica una fonte di immagine per schermi larghi, mentre l'elemento `<img>` specifica una fonte di immagine per schermi in modalità ritratto.

3\. Esempio per formati di immagine diversi:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene usato per fornire fonti di immagini diverse per formati di immagine diversi. Gli elementi `<source>` specificano fonti di immagini diverse utilizzando l'attributo "srcset" e l'attributo "type" per specificare il formato dell'immagine. L'elemento `<img>` è utilizzato come fallback per i browser più vecchi che non supportano l'elemento `<picture>`.

## Punti di interruzione

Nel design responsive, i punti di interruzione sono usati per definire quando il layout di un sito web o di un'applicazione dovrebbe cambiare a seconda delle dimensioni della viewport. I punti di interruzione sono tipicamente definiti usando le media query in CSS, che applicano stili diversi a seconda della larghezza dello schermo. Questi punti di interruzione possono essere utilizzati insieme all'elemento `<picture>` per fornire fonti di immagini diverse per diverse dimensioni di schermo.

Ad esempio, nel primo esempio sopra, abbiamo usato l'attributo `media` per specificare la larghezza dello schermo sotto la quale ogni fonte dovrebbe essere usata. Quando la larghezza dello schermo è maggiore o uguale a 768 pixel, sarà utilizzata la fonte `image-large.jpg`; quando la larghezza dello schermo è maggiore o uguale a 480 pixel ma inferiore a 768 pixel, sarà utilizzata la fonte `image-medium.jpg`; e quando la larghezza dello schermo è inferiore a 480 pixel, sarà utilizzata la fonte `image-small.jpg`. Questo ci permette di fornire immagini di dimensioni appropriate per ogni dispositivo, riducendo i tempi di caricamento delle pagine e migliorando l'esperienza utente.

I punti di interruzione possono essere definiti per qualsiasi dimensione di schermo e possono essere utilizzati più punti di interruzione per creare layout che rispondono a una vasta gamma di dispositivi. Combinando i punti di interruzione con l'elemento `<picture>`, è possibile creare design flessibili e responsive che hanno un aspetto ottimale su qualsiasi dispositivo.
