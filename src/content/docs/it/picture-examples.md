---
title: Esempi di utilizzo dell'elemento <picture>
description: >-
  Fornisce esempi di utilizzo dell'elemento <picture> per immagini responsive,
  art direction e diversi formati di immagini.
taskInputHash: bae32a1e51d10196
lang: it
---
Fornisci diversi esempi per l'utilizzo dell'elemento `<picture>` e spiega in modo conciso ognuno di essi.

Ecco alcuni esempi di utilizzo dell'elemento `<picture>` e le relative spiegazioni:

1. Esempio per immagini responsive:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse origini immagine per diverse dimensioni di schermo. Gli elementi `<source>` specificano le diverse origini immagine utilizzando l'attributo "srcset" e l'attributo "media" per specificare le condizioni in cui ogni origine deve essere utilizzata. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi o quando non vengono soddisfatte le condizioni specificate negli elementi `<source>`.

2. Esempio per l'art direction:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse origini immagine a seconda dell'orientamento del dispositivo. L'elemento `<source>` con l'attributo "media" impostato su "(orientation: landscape)" specifica un'origine immagine per schermi larghi, mentre l'elemento `<img>` specifica un'origine immagine per schermi in verticale.

3. Esempio per diversi formati di immagine:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="Un'immagine" />
</picture>
```

Spiegazione: In questo esempio, l'elemento `<picture>` viene utilizzato per fornire diverse origini immagine per diversi formati di immagine. Gli elementi `<source>` specificano diverse origini immagine utilizzando l'attributo "srcset" e l'attributo "type" per specificare il formato dell'immagine. L'elemento `<img>` viene utilizzato come fallback per i browser più vecchi che non supportano l'elemento `<picture>`.
