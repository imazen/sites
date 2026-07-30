---
taskInputHash: 33b43e84d2d80914
title: Descrittori di densità e srcset
description: Esempi di utilizzo dei descrittori di densità in `srcset`
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
Srcset con descrittori di densità offre un metodo semplice ed efficace per fornire l'immagine più adatta al dispositivo di ciascun utente, migliorando le prestazioni e l'esperienza utente. Questa guida ti guiderà attraverso gli elementi essenziali dell'utilizzo di srcset con descrittori di densità e fornirà esempi di markup per tua comodità.

## Che cos'è Srcset con i Descrittori di Densità?

Srcset è un attributo HTML progettato per permetterti di specificare più sorgenti di immagini per un singolo elemento `<img>`. I descrittori di densità (`x`) sono utilizzati in combinazione con srcset per fornire immagini con risoluzioni diverse in base alla densità dei pixel del display dell'utente.

## Quando Usare Srcset con i Descrittori di Densità

L'uso di srcset con i descrittori di densità è particolarmente utile quando vuoi:
1. Servire immagini ad alta risoluzione a display ad alta DPI (ad es., display Retina) pur fornendo immagini a bassa risoluzione a display standard.
2. Migliorare le prestazioni della pagina fornendo la dimensione dell'immagine più appropriata per il dispositivo di ciascun utente.

## Implementazione di Srcset con i Descrittori di Densità

Per utilizzare srcset con i descrittori di densità, segui questi passaggi:
1. Prepara le tue immagini in diverse risoluzioni.
2. Aggiungi l'attributo `srcset` all'elemento `<img>`, includendo le sorgenti delle immagini e i corrispondenti descrittori di densità.
3. Aggiungi l'attributo `sizes` (opzionale) per specificare la dimensione dell'immagine come sarà visualizzata sullo schermo.

### Esempio di Markup

Ecco un esempio di come implementare srcset con descrittori di densità nel tuo markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="Un'immagine di esempio">
```

Questo esempio di markup include:
- **src**: La sorgente dell'immagine predefinita, mostrata se il browser non supporta srcset.
- **srcset**: L'elenco delle sorgenti delle immagini e i loro descrittori di densità (1x, 2x, 3x). Il browser sceglierà l'immagine più appropriata in base al display dell'utente.
- **alt**: Una descrizione dell'immagine per scopi di accessibilità.

Ecco fatto! Hai implementato con successo srcset con descrittori di densità, migliorando le prestazioni e l'esperienza utente del tuo sito web.
