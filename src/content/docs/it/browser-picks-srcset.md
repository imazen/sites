---
title: Come il browser sceglie
description: Come il browser sceglie tra le immagini elencate nell'attributo srcset
taskInputHash: 5f305bd3a8d992cf
lang: it
---
Come fa il browser a scegliere tra le immagini elencate nell'attributo srcset? Ecco una panoramica step-by-step, con esempi per le specifiche di larghezza e densità e su come il browser decide in base al dispositivo e alla visualizzazione.

- Quando si utilizza l'attributo "srcset" in HTML, il browser utilizza un insieme di regole per scegliere l'immagine più appropriata da una lista di fonti fornite. Queste regole dipendono dalle caratteristiche di visualizzazione del dispositivo (risoluzione, densità di pixel) e dalla dimensione della finestra di visualizzazione. L'attributo `srcset` consente di specificare diverse immagini in base alla larghezza (utilizzando il descrittore "w") o alla densità di pixel (utilizzando il descrittore "x"). Vediamo entrambi i casi con esempi.

1\. Descrittore di larghezza (`w`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Immagine di esempio">

```

Il browser segue questi passaggi:

a. Determina il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Calcola la larghezza effettiva per ogni immagine nell'`srcset`. Moltiplica il descrittore di larghezza per il DPR. Per un dispositivo con un DPR di 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Confronta le larghezze effettive con la larghezza della finestra di visualizzazione. Supponiamo che la larghezza della finestra di visualizzazione sia di 420px. Il browser sceglierà l'immagine più piccola con una larghezza effettiva maggiore o uguale alla larghezza della finestra di visualizzazione. In questo caso, selezionerà `example-medium.jpg`.

2\. Descrittore di densità di pixel (`x`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Immagine di esempio">

```

Il browser segue questi passaggi:

a. Determina il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Confronta il DPR del dispositivo con i descrittori `x` nell'`srcset`. In questo caso, abbiamo tre immagini con i seguenti descrittori:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Scegli l'immagine con il descrittore `x` più vicino al DPR del dispositivo. Per un dispositivo con un DPR di 1, il browser selezionerà `example-1x.jpg`. Per un dispositivo con un DPR di 2, sceglierà `example-2x.jpg`, e così via.

È importante notare che è anche possibile utilizzare l'attributo `sizes` in combinazione con l'attributo `srcset` per fornire maggiori informazioni su come l'immagine verrà visualizzata in diverse larghezze di finestra. Questo è particolarmente utile quando si utilizza il descrittore di larghezza ("w"). Ecco un esempio:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
