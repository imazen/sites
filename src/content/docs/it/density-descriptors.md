---
title: Descrittori di densità e srcset
description: Esempi di utilizzo dei descrittori di densità in `srcset`
taskInputHash: edece60098e32d5c
lang: it
---
Srcset con i descrittori di densità fornisce un metodo semplice ed efficace per fornire l'immagine più adatta al dispositivo dell'utente, migliorando le prestazioni e l'esperienza dell'utente. Questa guida illustra gli elementi essenziali per l'utilizzo di srcset con i descrittori di densità e fornisce esempi di markup per la vostra convenienza.

## Cosa è srcset con i descrittori di densità?

Srcset è un attributo HTML progettato per consentire di specificare più fonti di immagini per un singolo elemento `<img>`. I descrittori di densità (`x`) vengono utilizzati in combinazione con srcset per fornire immagini di diverse risoluzioni in base alla densità di pixel del display dell'utente.

## Quando utilizzare srcset con i descrittori di densità

L'utilizzo di srcset con i descrittori di densità è particolarmente utile quando si vuole:
1. Servire immagini ad alta risoluzione a display ad alta densità di pixel (ad esempio, i display Retina) mentre si forniscono immagini a risoluzione inferiore a display standard.
2. Migliorare le prestazioni della pagina fornendo la dimensione dell'immagine più appropriata per il dispositivo dell'utente.

## Implementazione di srcset con i descrittori di densità

Per utilizzare srcset con i descrittori di densità, seguire questi passaggi:
1. Preparare le immagini in diverse risoluzioni.
2. Aggiungere l'attributo `srcset` all'elemento `<img>`, incluso le fonti delle immagini e i corrispondenti descrittori di densità.
3. Aggiungere l'attributo `sizes` (opzionale) per specificare la dimensione dell'immagine come verrà visualizzata sullo schermo.

### Esempio di markup

Ecco un esempio di come implementare srcset con i descrittori di densità nel tuo markup:

```html
<img src="esempio-immagine-1x.jpg"
     srcset="esempio-immagine-1x.jpg 1x, esempio-immagine-2x.jpg 2x, esempio-immagine-3x.jpg 3x"
     alt="Un esempio di immagine">
```

Questo esempio di markup include:
- **src**: la fonte dell'immagine predefinita, visualizzata se il browser non supporta srcset.
- **srcset**: l'elenco delle fonti dell'immagine e dei relativi descrittori di densità (1x, 2x, 3x). Il browser sceglierà l'immagine più appropriata in base al display dell'utente.
- **alt**: una descrizione dell'immagine per scopi di accessibilità.

E questo è tutto! Hai implementato con successo srcset con i descrittori di densità, migliorando le prestazioni e l'esperienza dell'utente del tuo sito web.
