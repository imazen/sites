---
title: Come sceglie il browser
description: Come il browser sceglie tra le immagini elencate nell'attributo srcset
taskInputHash: 0eb976f059b10502
lang: it
ignore: '/* cSpell:locale it,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Come sceglie il browser tra le immagini elencate nell'attributo srcset? Ecco una procedura dettagliata, con esempi sia per le specifiche di larghezza che di densità e come il browser decide in base al dispositivo e alla viewport.

- Quando si utilizza l'attributo `srcset` in HTML, il browser utilizza un insieme di regole per scegliere l'immagine più appropriata da un elenco di fonti fornite. Queste regole dipendono dalle caratteristiche dello schermo del dispositivo (risoluzione, densità dei pixel) e dalle dimensioni della viewport. L'attributo `srcset` consente di specificare diverse immagini in base alla larghezza (utilizzando il descrittore `w`) o alla densità dei pixel (utilizzando il descrittore `x`). Vediamo ogni caso con degli esempi.

1\. Descrittore di larghezza (`w`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

Il browser seguirà questi passaggi:

a. Determinare il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Calcolare la larghezza efficace per ogni immagine nella `srcset`. Moltiplicare il descrittore di larghezza per il DPR. Per un dispositivo con un DPR di 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Confrontare le larghezze efficaci con la larghezza viewport. Supponiamo che la larghezza viewport sia di 420px. Il browser sceglierà l'immagine più piccola con larghezza efficace maggiore o uguale alla larghezza viewport. In questo caso, selezionerà `example-medium.jpg`.

2\. Descrittore di densità dei pixel (`x`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

Il browser seguirà questi passaggi:

a. Determinare il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Confrontare il DPR del dispositivo con i descrittori `x` presenti nella `srcset`. In questo caso, abbiamo tre immagini con i seguenti descrittori:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Scegliere l'immagine con il descrittore `x` più vicino al DPR del dispositivo. Per un dispositivo con un DPR di 1, il browser selezionerà `example-1x.jpg`. Per un dispositivo con un DPR di 2, sceglierà `example-2x.jpg`, e così via.

È importante notare che è possibile utilizzare anche l'attributo `sizes` in combinazione con l'attributo `srcset` per fornire ulteriori informazioni su come l'immagine verrà visualizzata su diverse larghezze viewport. Questo è particolarmente utile quando si utilizza il descrittore di larghezza (`w`). Ecco un esempio:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
