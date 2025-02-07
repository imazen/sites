---
taskInputHash: 25639837bc1549a4
title: Aggiungere padding a un'immagine
description: >-
  Come aggiungere padding a un'immagine usando CSS e il rapporto d'aspetto per
  centrare
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
Ecco come puoi utilizzare CSS e il rapporto d'aspetto per centrare e aggiungere padding a un'immagine: 
1. Innanzitutto, devi racchiudere la tua immagine in un elemento contenitore, come un `<div>` o `<figure>`. Questo ti permetterà di applicare stili al contenitore che influenzeranno l'immagine al suo interno. 
2. Imposta la proprietà `position` del contenitore su `relative`. Questo ti permetterà di posizionare l'immagine all'interno del contenitore. 
3. Aggiungi un pseudo-elemento `::after` al contenitore. Questo verrà utilizzato per mantenere il rapporto d'aspetto dell'immagine e creare il padding. 
4. Imposta la proprietà `content` del pseudo-elemento `::after` su una stringa vuota. Questo è necessario per creare l'elemento. 
5. Imposta la proprietà `padding-bottom` del pseudo-elemento `::after` su un valore percentuale che corrisponde al rapporto d'aspetto dell'immagine. Ad esempio, se la tua immagine ha un rapporto d'aspetto di 4:3, dovresti impostare il padding su `75%` (poiché 3/4 = 0,75). Questo creerà il padding sotto l'immagine. 
6. Imposta la proprietà `position` del pseudo-elemento `::after` su `absolute`. Questo posizionerà l'elemento all'interno del contenitore. 
7. Imposta le proprietà `top`, `left`, `bottom` e `right` del pseudo-elemento `::after` su `0`. Questo farà sì che l'elemento riempia il contenitore, creando il padding. 
8. Infine, imposta la proprietà `position` dell'immagine su `absolute`. Questo ti permetterà di centrare l'immagine all'interno del contenitore usando le proprietà `top`, `left`, `bottom` e `right`.

Ecco un esempio del codice CSS che useresti per centrare e aggiungere padding a un'immagine con un rapporto d'aspetto di 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* rapporto d'aspetto 4:3 */
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

In questo esempio, l'elemento `.container` è il contenitore per l'immagine. Il pseudo-elemento `::after` viene utilizzato per creare il padding e mantenere il rapporto d'aspetto dell'immagine. L'elemento `img` viene impostato su `position: absolute` in modo che possa essere centrato all'interno del contenitore utilizzando le proprietà `top`, `left`, `bottom` e `right`.

Impostando le proprietà `max-width` e `max-height` dell'immagine su `100%`, l'immagine si adatterà allo spazio disponibile mantenendo il suo rapporto d'aspetto. Ciò significa che il padding creato dal pseudo-elemento `::after` sarà sempre proporzionale alla dimensione dell'immagine.
