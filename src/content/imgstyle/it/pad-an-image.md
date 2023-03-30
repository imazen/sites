---
title: Aggiungere spazio intorno a un'immagine
description: >-
  Come aggiungere spazio intorno a un'immagine utilizzando CSS e il rapporto di
  aspetto per centrarla
taskInputHash: bef5fe97d556f437
lang: it
---
Ecco come puoi usare CSS e il rapporto di aspetto per centrare e riempire di spazio un'immagine:
1. Innanzitutto, devi avvolgere l'immagine in un elemento contenitore, come un `<div>` o una `<figure>`. Ciò ti consentirà di applicare stili al contenitore che influenzeranno l'immagine al suo interno.
2. Imposta la proprietà `position` del contenitore su `relative`. Ciò ti consentirà di posizionare l'immagine nel contenitore.
3. Aggiungi un pseudoelemento `::after` al contenitore. Questo verrà utilizzato per mantenere il rapporto di aspetto dell'immagine e creare il padding.
4. Imposta la proprietà `content` dell'pseudoelemento `::after` su una stringa vuota. Questo è necessario per creare l'elemento.
5. Imposta la proprietà `padding-bottom` dell'pseudoelemento `::after` su un valore percentuale che corrisponde al rapporto di aspetto dell'immagine. Ad esempio, se la tua immagine ha un rapporto di aspetto di 4:3, imposti il padding su `75%` (poiché 3/4 = 0.75). Questo creerà il padding sotto l'immagine.
6. Imposta la proprietà `position` dell'pseudo-elemento `::after` su `absolute`. Ciò posizionerà l'elemento all'interno del contenitore.
7. Imposta le proprietà `top`, `left`, `bottom` e `right` dell'pseudo-elemento `::after` su `0`. Questo farà sì che l'elemento riempia il contenitore, creando il padding.
8. Infine, imposta la proprietà `position` dell'immagine stessa su `absolute`. Ciò ti consentirà di centrare l'immagine entro il contenitore utilizzando le proprietà `top`, `left`, `bottom` e `right`.

Ecco un esempio del codice CSS che useresti per centrare e riempire di spazio un'immagine con un rapporto di aspetto di 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* rapporto di aspetto 4:3 */
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
 
In questo esempio, l'elemento `.container` è il contenitore dell'immagine. L'pseudo-elemento `::after` viene utilizzato per creare il padding e mantenere il rapporto di aspetto dell'immagine. L'elemento `img` viene impostato su `position: absolute` in modo che possa essere centrato nel contenitore utilizzando le proprietà `top`, `left`, `bottom` e `right`.

Impostando le proprietà `max-width` e `max-height` dell'immagine su `100%`, l'immagine si adatterà allo spazio disponibile mantenendo il suo rapporto di aspetto. Ciò significa che il padding creato dall'pseudo-elemento `::after` sarà sempre proporzionale alle dimensioni dell'immagine.
