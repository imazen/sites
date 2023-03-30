---
title: Descrittori di densità e srcset
description: Esempi di utilizzo di descrittori di densità in `srcset`
taskInputHash: db219d936e697e60
lang: it
---
Srcset con i descrittori di densità fornisce un metodo semplice ed efficace per fornire all'utente l'immagine più adatta al dispositivo, migliorando le prestazioni e l'esperienza dell'utente. Questa guida descrive gli elementi essenziali per l'uso di srcset con descrittori di densità e fornisce esempi di markup per la tua comodità.
## Che cosa è Srcset con descrittori di densità?

Srcset è un attributo HTML progettato per consentire di specificare più origini di immagini per un singolo elemento `<img>`. I descrittori di densità (`x`) sono utilizzati insieme a srcset per fornire diverse immagini a risoluzione in base alla densità di pixel del display dell'utente.
## Quando utilizzare Srcset con descrittori di densità

L'utilizzo di srcset con descrittori di densità è particolarmente utile quando si vuole:
1. Servire immagini ad alta risoluzione a display ad alta DPI (ad esempio i display Retina) fornendo allo stesso tempo immagini a bassa risoluzione ai display standard.
2. Migliorare le prestazioni della pagina fornendo all'utente le immagini più appropriate per le dimensioni del dispositivo.
## Implementare Srcset con descrittori di densità

Per utilizzare srcset con descrittori di densità, seguire questi passaggi:
1. Prepara le tue immagini in diverse risoluzioni. 
2. Aggiungi l'attributo `srcset` all'elemento `<img>`, includendo le origini delle immagini e i corrispondenti descrittori di densità. 
3. Aggiungi l'attributo `sizes` (opzionale) per specificare le dimensioni dell'immagine come verrà visualizzata sullo schermo.
### Esempio di markup

Ecco un esempio su come implementare srcset con descrittori di densità nel tuo markup:

```html
<img src="esempio-immagine-1x.jpg"
     srcset="esempio-immagine-1x.jpg 1x, esempio-immagine-2x.jpg 2x, esempio-immagine-3x.jpg 3x"
     alt="Un esempio di immagine">
```

Questo esempio di markup include:
- **src**: La sorgente di immagini predefinita, mostrata se il browser non supporta srcset. 
- **srcset**: L'elenco di origine delle immagini e i relativi descrittori di densità (1x, 2x, 3x). Il browser sceglierà l'immagine più appropriata in base al display dell'utente. 
- **alt**: Una descrizione dell'immagine per scopi di accessibilità. 


E questo è tutto! Hai implementato correttamente srcset con descrittori di densità, migliorando le prestazioni e l'esperienza dell'utente del tuo sito web.
