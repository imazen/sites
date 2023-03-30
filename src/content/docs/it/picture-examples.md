---
title: Esempi di utilizzo dell'elemento <picture>
description: >-
  Fornisce esempi di utilizzo dell'elemento <picture>, per immagini responsive,
  art direction e diversi formati di immagine.
taskInputHash: 23abfd2c45089cf6
lang: it
---
Ecco alcuni esempi di utilizzo dell'elemento `<picture>` con le relative spiegazioni:

1\. Esempio per immagini responsive:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagine per diverse dimensioni dello schermo. Gli elementi `<source>` specificano le diverse fonti di immagine utilizzando l'attributo "srcset" e l'attributo "media" per specificare le condizioni in cui ogni fonte deve essere utilizzata. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi o quando non vengono soddisfatte le condizioni specificate negli elementi `<source>`.

2\. Esempio per art direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagine a seconda dell'orientamento del dispositivo. L'elemento `<source>` con l'attributo "media" impostato su "(orientation: landscape)" specifica una fonte di immagine per schermi larghi, mentre l'elemento `<img>` specifica una fonte di immagine per schermi in formato ritratto.

3\. Esempio per diversi formati di immagine:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse fonti di immagine per diversi formati di immagine. Gli elementi `<source>` specificano diverse fonti di immagine utilizzando l'attributo "srcset" e l'attributo "type" per specificare il formato dell'immagine. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi che non supportano l'elemento `<picture>`.

## Breakpoints

Nel design responsivo, i breakpoints vengono utilizzati per definire quando la disposizione di un sito web o di un'applicazione dovrebbe cambiare in base alle dimensioni del viewport. I breakpoints sono tipicamente definiti utilizzando media query in CSS, che applicano stili diversi a seconda della larghezza dello schermo. Questi breakpoints possono essere utilizzati in combinazione con l'elemento `<picture>` per fornire diverse fonti di immagine per diverse dimensioni dello schermo.

Ad esempio, nel primo esempio sopra, abbiamo utilizzato l'attributo `media` per specificare la larghezza dello schermo sotto cui dovrebbe essere utilizzata ogni fonte. Quando la larghezza dello schermo è maggiore o uguale a 768 pixel, verrà utilizzata la fonte `image-large.jpg`; quando la larghezza dello schermo è maggiore o uguale a 480 pixel ma inferiore a 768 pixel, verrà utilizzata la fonte `image-medium.jpg`; e quando la larghezza dello schermo è inferiore a 480 pixel, verrà utilizzata la fonte `image-small.jpg`. Ciò ci consente di servire immagini delle dimensioni appropriate per ogni dispositivo, riducendo i tempi di caricamento delle pagine e migliorando l'esperienza utente.

I breakpoints possono essere definiti per qualsiasi dimensione dello schermo e possono essere utilizzati più breakpoints per creare layout che rispondono a una vasta gamma di dispositivi. Combinando i breakpoints con l'elemento `<picture>`, è possibile creare design flessibili e responsivi che sembrano ottimi su qualsiasi dispositivo.
