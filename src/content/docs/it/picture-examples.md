---
title: Esempi di utilizzo dell'elemento <picture>
description: >-
  Fornisce esempi di utilizzo dell'elemento <picture> per immagini responsive,
  direzione artistica e diversi formati di immagine.
taskInputHash: 23abfd2c45089cf6
lang: it
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

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse sorgenti di immagini per diverse dimensioni dello schermo. Gli elementi `<source>` specificano le diverse sorgenti di immagini utilizzando l'attributo "srcset" e l'attributo "media" per specificare le condizioni sotto cui deve essere utilizzata ogni sorgente. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi o quando non vengono soddisfatte le condizioni specificate negli elementi `<source>`.

2. Esempio per la direzione artistica:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse sorgenti di immagini a seconda dell'orientamento del dispositivo. L'elemento `<source>` con l'attributo "media" impostato su "(orientation: landscape)" specifica una sorgente di immagini per schermi larghi, mentre l'elemento `<img>` specifica una sorgente di immagini per schermi verticali.

3. Esempio per diversi formati di immagine:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse sorgenti di immagini per diversi formati di immagine. Gli elementi `<source>` specificano diverse sorgenti di immagini utilizzando l'attributo "srcset" e l'attributo "type" per specificare il formato dell'immagine. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi che non supportano l'elemento `<picture>`.

## Breakpoints

Nel design responsivo, i breakpoints vengono utilizzati per definire quando il layout di un sito web o di un'applicazione dovrebbe cambiare in base alla dimensione del viewport. I breakpoints vengono tipicamente definiti utilizzando media query in CSS, che applicano stili diversi in base alla larghezza dello schermo. Questi breakpoints possono essere utilizzati in combinazione con l'elemento `<picture>` per fornire diverse sorgenti di immagini per diverse dimensioni dello schermo.

Ad esempio, nel primo esempio sopra, abbiamo utilizzato l'attributo `media` per specificare la larghezza dello schermo sotto cui deve essere utilizzata ogni sorgente. Quando la larghezza dello schermo è maggiore o uguale a 768 pixel, verrà utilizzata la sorgente `image-large.jpg`; quando la larghezza dello schermo è maggiore o uguale a 480 pixel ma inferiore a 768 pixel, verrà utilizzata la sorgente `image-medium.jpg`; e quando la larghezza dello schermo è inferiore a 480 pixel, verrà utilizzata la sorgente `image-small.jpg`. Questo ci consente di servire immagini di dimensioni appropriate per ogni dispositivo, riducendo i tempi di caricamento della pagina e migliorando l'esperienza dell'utente.

I breakpoints possono essere definiti a qualsiasi dimensione dello schermo e possono essere utilizzati molti breakpoints per creare layout che rispondono a una vasta gamma di dispositivi. Combinando i breakpoints con l'elemento `<picture>`, è possibile creare design flessibili e responsivi che si adattano perfettamente a qualsiasi dispositivo.
