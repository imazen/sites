---
title: Come sceglie il browser
description: Come il browser sceglie tra le immagini elencate nell'attributo srcset
taskInputHash: 5f305bd3a8d992cf
lang: it
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Come fa il browser a scegliere tra le immagini elencate nell'attributo `srcset`? Ecco i passaggi dettagliati, con esempi sia per le specifiche di larghezza che di densità e come il browser decide in base al dispositivo e alla viewport:

- Quando si utilizza l'attributo `srcset` in HTML, il browser utilizza una serie di regole per scegliere l'immagine più adatta da un elenco di fonti fornite. Queste regole dipendono dalle caratteristiche di visualizzazione del dispositivo (risoluzione, densità di pixel) e dalla dimensione della viewport. L'attributo `srcset` consente di specificare immagini diverse in base alla larghezza (utilizzando il descrittore `w`) o alla densità di pixel (utilizzando il descruttore `x`). Vediamo ogni caso con esempi.

1\. Descrittore di larghezza (`w`):

Supponiamo di avere l'attributo `srcset` seguente:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Esempio di immagine">

```

Il browser seguirà questi passaggi:

a. Determina il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Calcola la larghezza effettiva per ogni immagine in `srcset`. Moltiplica il descrittore di larghezza per il DPR. Per un dispositivo con un DPR di 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Confronta le larghezze effettive con la larghezza della viewport. Supponiamo che la larghezza della viewport sia 420px. Il browser sceglierà l'immagine più piccola con una larghezza effettiva maggiore o uguale alla larghezza della viewport. In questo caso, selezionerà `example-medium.jpg`.

1\. Descrittore di densità di pixel (`x`):

Supponiamo di avere l'attributo `srcset` seguente:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Esempio di immagine">

```

Il browser seguirà questi passaggi:

a. Determina il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Confronta il DPR del dispositivo con i descrittori `x` in `srcset`. In questo caso, abbiamo tre immagini con i seguenti descrittori:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Scegli l'immagine con il descrittore `x` più vicino al DPR del dispositivo. Per un dispositivo con un DPR di 1, il browser selezionerà `example-1x.jpg`. Per un dispositivo con un DPR di 2, sceglierà `example-2x.jpg`, e così via.

È importante notare che è anche possibile utilizzare l'attributo `sizes` in combinazione con l'attributo `srcset` per fornire ulteriori informazioni su come l'immagine verrà visualizzata a diverse larghezze della viewport. Questo è particolarmente utile quando si utilizza il descrittore di larghezza (`w`). Ecco un esempio:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
