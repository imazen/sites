---
title: Descrittori di densità & srcset
description: Esempi di utilizzo di descrittori di densità in `srcset`
taskInputHash: db219d936e697e60
lang: it
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Srcset con i descrittori di densità fornisce un metodo semplice ed efficace per fornire l'immagine più adatta al dispositivo dell'utente, migliorando le prestazioni e l'esperienza dell'utente. Questa guida ti guiderà attraverso gli elementi essenziali dell'utilizzo di srcset con descrittori di densità e fornirà esempi di markup per la tua convenienza.
## Cosa è Srcset con descrittori di densità?

Srcset è un attributo HTML progettato per consentire di specificare più origini di immagini per un singolo elemento `<img>`. I descrittori di densità (`x`) vengono utilizzati insieme a srcset per fornire immagini a diverse risoluzioni in base alla densità di pixel del display dell'utente.
## Quando usare Srcset con descrittori di densità

L'utilizzo di srcset con descrittori di densità è particolarmente utile quando si desidera:
1. Fornire immagini ad alta risoluzione ai display ad alta DPI (ad esempio, i display Retina) mentre si forniscono immagini a risoluzione inferiore ai display standard.
2. Migliorare le prestazioni della pagina fornendo le immagini più appropriate a ciascun dispositivo dell'utente.
## Implementare Srcset con descrittori di densità

Per utilizzare srcset con descrittori di densità, seguire questi passaggi:
1. Preparare le immagini in diverse risoluzioni.
2. Aggiungere l'attributo `srcset` all'elemento `<img>`, inclusi le origini delle immagini e i corrispondenti descrittori di densità.
3. Aggiungere l'attributo `sizes` (facoltativo) per specificare le dimensioni dell'immagine come verrà visualizzata sullo schermo.
### Esempio di markup

Ecco un esempio di come implementare srcset con descrittori di densità nel tuo markup:

```html
<img src="esempio-immagine-1x.jpg"
     srcset="esempio-immagine-1x.jpg 1x, esempio-immagine-2x.jpg 2x, esempio-immagine-3x.jpg 3x"
     alt="Un esempio di immagine">
```

Questo esempio di markup include:

- **src**: la sorgente predefinita dell'immagine, mostrata se il browser non supporta srcset.
- **srcset**: l'elenco di origini dell'immagine e dei relativi descrittori di densità (1x, 2x, 3x). Il browser sceglierà l'immagine più appropriata in base al display dell'utente.
- **alt**: una descrizione dell'immagine per scopi di accessibilità.

E questo è tutto! Hai implementato con successo srcset con descrittori di densità, migliorando le prestazioni del tuo sito web e l'esperienza dell'utente.
