---
taskInputHash: 7b9d6e1def9985e0
title: Descrittori di densità e srcset
description: Esempi di utilizzo dei descrittori di densità in `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
Srcset con descrittori di densità fornisce un metodo semplice ed efficace per consegnare l'immagine più adatta al dispositivo di ogni utente, migliorando le prestazioni e l'esperienza utente. Questa guida ti guiderà attraverso gli elementi essenziali dell'utilizzo di srcset con descrittori di densità e fornirà esempi di markup per tua comodità.
## Che cos'è Srcset con Descrittori di Densità?

Srcset è un attributo HTML progettato per permetterti di specificare più fonti di immagine per un singolo elemento `<img>`. I descrittori di densità (`x`) sono usati in combinazione con srcset per fornire immagini di diversa risoluzione in base alla densità dei pixel del display dell'utente.
## Quando Usare Srcset con Descrittori di Densità

Usare srcset con descrittori di densità è particolarmente utile quando vuoi:
1. Fornire immagini ad alta risoluzione a display ad alto DPI (es. display Retina) mentre fornisci immagini a risoluzione inferiore a display standard.
2. Migliorare le prestazioni della pagina fornendo la dimensione dell'immagine più appropriata per il dispositivo di ogni utente.
## Implementazione di Srcset con Descrittori di Densità

Per utilizzare srcset con descrittori di densità, segui questi passaggi:
1. Prepara le tue immagini in diverse risoluzioni.
2. Aggiungi l'attributo `srcset` all'elemento `<img>`, includendo le fonti dell'immagine e i relativi descrittori di densità.
3. Aggiungi l'attributo `sizes` (opzionale) per specificare la dimensione dell'immagine come verrà visualizzata sullo schermo.
### Esempio di Markup

Ecco un esempio di come implementare srcset con descrittori di densità nel tuo markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Una immagine di esempio">
```



Questo esempio di markup include: 
- **src** : La fonte dell'immagine predefinita, mostrata se il browser non supporta srcset. 
- **srcset** : L'elenco delle fonti delle immagini e i loro descrittori di densità (1x, 2x, 3x). Il browser sceglierà l'immagine più appropriata in base al display dell'utente.
- **alt** : Una descrizione dell'immagine per scopi di accessibilità.


E questo è tutto! Hai implementato con successo srcset con descrittori di densità, migliorando le prestazioni e l'esperienza utente del tuo sito web.
