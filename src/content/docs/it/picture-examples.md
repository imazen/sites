---
title: Esempi di utilizzo dell'elemento <picture>
description: >-
  Fornisce esempi di utilizzo dell'elemento <picture>, per immagini responsive,
  direzione artistica e diversi formati di immagine
taskInputHash: 1eedb92f6cc7cb3e
lang: it
ignore: '/* cSpell:locale it,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Ecco alcuni esempi di utilizzo dell'elemento `<picture>` e le loro spiegazioni:

1. Esempio per immagini responsive:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagini per diverse dimensioni dello schermo. Gli elementi `<source>` specificano le diverse fonti di immagini utilizzando l'attributo "srcset" e l'attributo "media" per specificare le condizioni in cui ciascuna fonte dovrebbe essere utilizzata. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi o quando le condizioni specificate negli elementi `<source>` non vengono soddisfatte.

2. Esempio per la direzione artistica:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagini a seconda dell'orientamento del dispositivo. L'elemento `<source>` con l'attributo "media" impostato su "(orientation: landscape)" specifica una fonte di immagine per schermi larghi, mentre l'elemento `<img>` specifica una fonte di immagine per schermi verticali.

3. Esempio per diversi formati di immagine:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagini per diversi formati di immagine. Gli elementi `<source>` specificano diverse fonti di immagini utilizzando l'attributo "srcset" e l'attributo "type" per specificare il formato dell'immagine. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi che non supportano l'elemento `<picture>`.

## Punti di interruzione

Nel design responsive, i punti di interruzione vengono utilizzati per definire quando il layout di un sito web o di un'applicazione dovrebbe cambiare in base alle dimensioni del viewport. I punti di interruzione vengono tipicamente definiti utilizzando media queries in CSS, che applicano stili diversi a seconda della larghezza dello schermo. Questi punti di interruzione possono essere utilizzati in combinazione con l'elemento `<picture>` per fornire diverse fonti di immagini per diverse dimensioni dello schermo.

Ad esempio, nel primo esempio sopra, abbiamo utilizzato l'attributo `media` per specificare la larghezza dello schermo in base alla quale utilizzare ciascuna fonte. Quando la larghezza dello schermo è maggiore o uguale a 768 pixel, verrà utilizzata la fonte "image-large.jpg"; quando la larghezza dello schermo è maggiore o uguale a 480 pixel ma inferiore a 768 pixel, verrà utilizzata la fonte "image-medium.jpg"; e quando la larghezza dello schermo è inferiore a 480 pixel, verrà utilizzata la fonte "image-small.jpg". Questo ci consente di servire immagini delle dimensioni appropriate per ogni dispositivo, riducendo i tempi di caricamento delle pagine e migliorando l'esperienza dell'utente.

I punti di interruzione possono essere definiti a qualsiasi dimensione dello schermo e possono essere utilizzati più punti di interruzione per creare layout che rispondono a una vasta gamma di dispositivi. Combina i punti di interruzione con l'elemento `<picture>`, puoi creare design flessibili e reattivi che hanno un bell'aspetto su qualsiasi dispositivo.
