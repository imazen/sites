---
title: Esempi di utilizzo dell'elemento <picture>
description: >-
  Fornisce esempi di utilizzo dell'elemento <picture> per immagini responsive,
  art direction e diversi formati di immagine.
taskInputHash: 8949b4f455087356
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
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

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagini per diverse dimensioni dello schermo. Gli elementi `<source>` specificano le diverse fonti di immagini utilizzando l'attributo "srcset" e l'attributo "media" per specificare le condizioni in cui ciascuna fonte deve essere utilizzata. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi o quando le condizioni specificate negli elementi `<source>` non vengono soddisfatte.

2. Esempio per l'art direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagini a seconda dell'orientamento del dispositivo. L'elemento `<source>` con l'attributo "media" impostato su "(orientation: landscape)" specifica una fonte di immagine per i display larghi, mentre l'elemento `<img>` specifica una fonte di immagine per i display verticali.

3. Esempio per diversi formati di immagine:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagini per diversi formati di immagine. Gli elementi `<source>` specificano diverse fonti di immagini utilizzando l'attributo "srcset" e l'attributo "type" per specificare il formato dell'immagine. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi che non supportano l'elemento `<picture>`.

## Breakpoints

Nel design responsive, i breakpoints vengono utilizzati per definire quando la disposizione di un sito web o di un'applicazione deve cambiare in base alla dimensione della viewport. I breakpoints sono tipicamente definiti utilizzando le media query in CSS, che applicano stili diversi a seconda della larghezza dello schermo. Questi breakpoints possono essere utilizzati in combinazione con l'elemento `<picture>` per fornire diverse fonti di immagini per diverse dimensioni dello schermo.

Ad esempio, nel primo esempio sopra, abbiamo utilizzato l'attributo `media` per specificare la larghezza dello schermo sotto cui ciascuna fonte deve essere utilizzata. Quando la larghezza dello schermo è maggiore o uguale a 768 pixel, verrà utilizzata la fonte `image-large.jpg`; quando la larghezza dello schermo è maggiore o uguale a 480 pixel ma inferiore a 768 pixel, verrà utilizzata la fonte `image-medium.jpg`; e quando la larghezza dello schermo è inferiore a 480 pixel, verrà utilizzata la fonte `image-small.jpg`. Questo ci consente di servire immagini delle dimensioni appropriate per ogni dispositivo, riducendo i tempi di caricamento della pagina e migliorando l'esperienza dell'utente.

I breakpoints possono essere definiti a qualsiasi dimensione dello schermo e possono essere utilizzati più breakpoints per creare layout che rispondono a una vasta gamma di dispositivi. Combinando i breakpoints con l'elemento `<picture>`, è possibile creare design flessibili e reattivi che funzionano perfettamente su qualsiasi dispositivo.
