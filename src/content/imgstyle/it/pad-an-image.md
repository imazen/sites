---
title: Dare un margine a un'immagine
description: >-
  Come dare un margine a un'immagine utilizzando CSS e il rapporto d'aspetto per
  centrare
taskInputHash: ca7ebdd905dae505
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Ecco come puoi usare CSS e il rapporto d'aspetto per centrare e dare un margine a un'immagine:
1. Prima di tutto, devi inserire la tua immagine in un elemento contenitore, come ad esempio un `<div>` o un `<figure>`. Ciò ti permetterà di applicare stili al contenitore che in seguito si applicheranno all'immagine all'interno.
2. Imposta la proprietà `position` del contenitore su `relative`. Ciò ti permetterà di posizionare l'immagine all'interno del contenitore.
3. Aggiungi un selettore `::after` alla classe del contenitore. Questo verrà utilizzato per mantenere il rapporto d'aspetto dell'immagine e creare il margine.
4. Imposta la proprietà `content` del selettore `::after` su una stringa vuota. Questo è necessario per creare l'elemento.
5. Imposta la proprietà `padding-bottom` del selettore `::after` su un valore percentuale che corrisponde al rapporto d'aspetto dell'immagine. Ad esempio, se l'immagine ha un rapporto d'aspetto di 4:3, imposterei il padding su `75%` (poiché 3/4 = 0,75). Questo creerà il margine sotto l'immagine.
6. Imposta la proprietà `position` del selettore `::after` su `absolute`. Ciò posizionerà l'elemento all'interno del contenitore.
7. Imposta le proprietà `top`, `left`, `bottom` e `right` del selettore `::after` su `0`. Ciò farà in modo che l'elemento riempia il contenitore, creando il margine.
8. Infine, imposta la proprietà `position` dell'immagine stessa su `absolute`. Ciò ti permetterà di centrare l'immagine all'interno del contenitore utilizzando le proprietà `top`, `left`, `bottom` e `right`.

Ecco un esempio di codice CSS che puoi utilizzare per centrare e dare un margine a un'immagine con un rapporto d'aspetto di 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* rapporto 4:3 */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```

In questo esempio, l'elemento `.container` è il contenitore per l'immagine. Il selettore `::after` viene utilizzato per creare il margine e mantenere il rapporto d'aspetto dell'immagine. L'elemento `img` viene impostato su `position: absolute` in modo che possa essere centrato all'interno del contenitore utilizzando le proprietà `top`, `left`, `bottom` e `right`.

Impostando le proprietà `max-width` e `max-height` dell'immagine su `100%`, l'immagine si adatterà allo spazio disponibile mantenendo il rapporto d'aspetto originale. Ciò significa che il margine creato dal selettore `::after` sarà sempre proporzionale alla dimensione dell'immagine.
