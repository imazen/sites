---
taskInputHash: d7166da7655282ee
title: Come sceglie il browser
description: Come sceglie il browser tra le immagini elencate nell'attributo srcset
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: it
---
Come sceglie il browser tra le immagini elencate nell'attributo srcset? Ecco una guida passo-passo, con esempi sia per specifiche di larghezza che di densità e come il browser decide in base al dispositivo e al viewport.

- Quando si utilizza l'attributo `srcset` in HTML, il browser utilizza un insieme di regole per scegliere l'immagine più appropriata da un elenco di fonti fornite. Queste regole dipendono sia dalle caratteristiche del display del dispositivo (risoluzione, densità di pixel) che dalla dimensione del viewport. L'attributo `srcset` consente di specificare immagini diverse basate sulla larghezza (usando il descrittore `w`) o sulla densità di pixel (usando il descrittore `x`). Analizziamo ciascun caso con degli esempi.

1\. Descrittore di larghezza (`w`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Immagine di esempio">

```

Il browser seguirà questi passaggi:

a. Determina il DPR (Rapporto Pixel di Dispositivo) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Calcola la larghezza effettiva per ciascuna immagine nel `srcset`. Moltiplica il descrittore di larghezza per il DPR. Per un dispositivo con DPR di 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Confronta le larghezze effettive con la larghezza del viewport. Supponiamo che la larghezza del viewport sia di 420px. Il browser sceglierà l'immagine più piccola con una larghezza effettiva maggiore o uguale alla larghezza del viewport. In questo caso, selezionerà `example-medium.jpg`.

1\. Descrittore di densità di pixel (`x`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Immagine di esempio">

```

Il browser seguirà questi passaggi:

a. Determina il DPR (Rapporto Pixel di Dispositivo) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Confronta il DPR del dispositivo con i descrittori `x` nel `srcset`. In questo caso, abbiamo tre immagini con i seguenti descrittori:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Scegli l'immagine con il descrittore `x` più vicino al DPR del dispositivo. Per un dispositivo con DPR di 1, il browser selezionerà `example-1x.jpg`. Per un dispositivo con DPR di 2, sceglierà `example-2x.jpg`, e così via.

È importante notare che è possibile utilizzare anche l'attributo `sizes` in combinazione con l'attributo `srcset` per fornire maggiori informazioni su come l'immagine verrà visualizzata a diverse larghezze del viewport. Questo è particolarmente utile quando si utilizza il descrittore di larghezza (`w`). Ecco un esempio:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
