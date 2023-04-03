---
title: Descrittori di densità e srcset
description: Esempi di utilizzo dei descrittori di densità in `srcset`
taskInputHash: 8a445e12ba15aba8
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Srcset con i descrittori di densità fornisce un metodo semplice e efficace per consegnare l'immagine più opportuna al dispositivo dell'utente, migliorandone la performance e l'esperienza. Questa guida ti presenterà le nozioni essenziali per l'utilizzo di srcset con i descrittori di densità e fornirà esempi di markup per la tua comodità.

## Cos'è Srcset con i Descrittori di Densità?

Srcset è un attributo HTML progettato per consentire la specificazione di molteplici fonti di immagine per un singolo elemento `<img>`. I descrittori di densità (`x`) sono usati in congiunzione con srcset per fornire immagini a diverse risoluzioni in base alla densità di pixel del display dell'utente.

## Quando Utilizzare Srcset con i Descrittori di Densità

L'utilizzo di srcset con i descrittori di densità è particolarmente utile quando si vuole:
1. Servire immagini ad alta risoluzione a display ad alta densità di pixel (ad esempio, display Retina) fornendo contemporaneamente immagini a bassa risoluzione a display standard.
2. Migliorare le performance della pagina consegnando la dimensione dell'immagine più appropriata al dispositivo dell'utente.

## Implementare Srcset con i Descrittori di Densità

Per utilizzare srcset con i descrittori di densità, segui questi passaggi:
1. Prepara le tue immagini in diverse risoluzioni.
2. Aggiungi l'attributo `srcset` all'elemento `<img>`, includendo le sorgenti dell'immagine e i descrittori di densità corrispondenti.
3. Aggiungi l'attributo `sizes` (opzionale) per specificare la dimensione dell'immagine come verrà mostrata sullo schermo.

### Esempio di Markup

Ecco un esempio di come implementare Srcset con i descrittori di densità nel tuo markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Un esempio d'immagine">
```

Questo esempio di markup include:
- **src**: la fonte di immagine predefinita, mostrata se il browser non supporta srcset.
- **srcset**: l'elenco di sorgenti dell'immagine e i loro descrittori di densità (1x, 2x, 3x). Il browser sceglierà l'immagine più opportuna in base al display dell'utente.
- **alt**: una descrizione dell'immagine per scopi di accessibilità.

E questo è tutto! Hai implementato con successo srcset con i descrittori di densità, migliorando le prestazioni e l'esperienza dell'utente del tuo sito web.
