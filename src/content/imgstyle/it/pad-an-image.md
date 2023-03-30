---
title: Dare margine ad un'immagine
description: >-
  Come dare margine ad un'immagine utilizzando CSS e il rapporto d'aspetto per
  centrare
taskInputHash: bef5fe97d556f437
lang: it
---
Ecco come puoi usare CSS e il rapporto d'aspetto per centrare e dare margine a un'immagine:

1. Innanzitutto devi inserire l'immagine in un elemento contenitore, come un `<div>` o un `<figure>`. In questo modo potrai applicare stili all'elemento contenitore che influenzeranno l'immagine al suo interno.

2. Imposta la proprietà `position` dell'elemento contenitore su `relative`. In questo modo potrai posizionare l'immagine all'interno del contenitore.

3. Aggiungi un selettore pseudo-elemento `::after` all'elemento contenitore. Questo verrà utilizzato per mantenere il rapporto d'aspetto dell'immagine e creare il margine.

4. Imposta la proprietà `content` del selettore pseudo-elemento `::after` su una stringa vuota. Questo è necessario per creare l'elemento.

5. Imposta la proprietà `padding-bottom` del selettore pseudo-elemento `::after` su un valore percentuale corrispondente al rapporto d'aspetto dell'immagine. Ad esempio, se l'immagine ha un rapporto d'aspetto di 4:3, dovresti impostare il margine su `75%` (in quanto 3/4 = 0,75). In questo modo verrà creato il margine sotto l'immagine.

6. Imposta la proprietà `position` del selettore pseudo-elemento `::after` su `absolute`. In questo modo posizionerai l'elemento all'interno del contenitore.

7. Imposta le proprietà `top`, `left`, `bottom` e `right` del selettore pseudo-elemento `::after` su `0`. In questo modo l'elemento riempirà l'intero contenitore, creando il margine.

8. Infine, imposta la proprietà `position` dell'immagine stessa su `absolute`. In questo modo potrai centrare l'immagine all'interno del contenitore utilizzando le proprietà `top`, `left`, `bottom` e `right`.

Ecco un esempio di codice CSS che puoi utilizzare per centrare e dare margine ad un'immagine con un rapporto d'aspetto di 4:3:

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

In quest'esempio l'elemento `.container` è l'elemento contenitore per l'immagine. Il selettore `::after` viene utilizzato per creare il margine e mantenere il rapporto d'aspetto dell'immagine. L'elemento `img` è impostato su `position: absolute` in modo che possa essere centrato all'interno del contenitore utilizzando le proprietà `top`, `left`, `bottom` e `right`.

Impostando le proprietà `max-width` e `max-height` dell'immagine su `100%`, l'immagine si scalera per adattarsi allo spazio disponibile mantenendo il proprio rapporto d'aspetto. Ciò significa che il margine creato dal selettore `::after` sarà sempre proporzionale alle dimensioni dell'immagine.
