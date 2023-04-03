---
title: Come sceglie il browser
description: Come il browser sceglie tra le immagini elencate nell'attributo srcset
taskInputHash: 9d76226efed7cd73
lang: it
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Come fa il browser a scegliere tra le immagini elencate nell'attributo srcset? Qui trovi una procedura passo-passo, con esempi sia per le specifiche di larghezza che di densità e come il browser decide in base al dispositivo e alla viewport.

- Quando si utilizza l'attributo `srcset` in HTML, il browser utilizza una serie di regole per scegliere l'immagine più appropriata da un elenco di fonti fornite. Queste regole dipendono dalle caratteristiche di visualizzazione del dispositivo (risoluzione, densità di pixel) e dalla dimensione della viewport. L'attributo `srcset` consente di specificare diverse immagini in base alla larghezza (utilizzando il descrittore `w`) o alla densità di pixel (utilizzando il descrittore `x`). Esaminiamo ogni caso con esempi.

1\. Descrittore di larghezza (`w`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="esempio-piccolo.jpg" srcset="esempio-piccolo.jpg 400w, esempio-medio.jpg 800w, esempio-grande.jpg 1600w" alt="Immagine di esempio">

```

Il browser seguirà questi passaggi:

a. Determina il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Calcola la larghezza effettiva per ogni immagine nell'attributo `srcset`. Moltiplica il descrittore di larghezza per il DPR. Per un dispositivo con un DPR di 1:

- esempio-piccolo.jpg: 400 \* 1 = 400px

- esempio-medio.jpg: 800 \* 1 = 800px

- esempio-grande.jpg: 1600 \* 1 = 1600px

c. Confronta le larghezze effettive con la larghezza della viewport. Assumiamo che la larghezza della viewport sia di 420px. Il browser sceglierà l'immagine più piccola con una larghezza effettiva maggiore o uguale alla larghezza della viewport. In questo caso, selezionerà `esempio-medio.jpg`.

1\. Descrittore di densità di pixel (`x`):

Supponiamo di avere il seguente attributo `srcset`:

```html

<img src="esempio-1x.jpg" srcset="esempio-1x.jpg 1x, esempio-2x.jpg 2x, esempio-3x.jpg 3x" alt="Immagine di esempio">

```

Il browser seguirà questi passaggi:

a. Determina il DPR (Device Pixel Ratio) del dispositivo. Ad esempio, un display standard ha un DPR di 1, mentre un display ad alta risoluzione (Retina) ha un DPR di 2 o superiore.

b. Confronta il DPR del dispositivo con i descrittori `x` nell'attributo `srcset`. In questo caso, abbiamo tre immagini con i seguenti descrittori:

- esempio-1x.jpg: 1x

- esempio-2x.jpg: 2x

- esempio-3x.jpg: 3x

c. Scegli l'immagine con il descrittore `x` che è più vicino al DPR del dispositivo. Per un dispositivo con un DPR di 1, il browser selezionerà `esempio-1x.jpg`. Per un dispositivo con un DPR di 2, sceglierà `esempio-2x.jpg` e così via.

È importante notare che è anche possibile utilizzare l'attributo `sizes` in combinazione con l'attributo `srcset` per fornire ulteriori informazioni su come l'immagine verrà visualizzata a diverse larghezze della viewport. Questo è particolarmente utile quando si utilizza il descrittore di larghezza (`w`). Ecco un esempio:

```html

<img src="esempio-piccolo.jpg" srcset="esempio-piccolo.jpg 400w, esempio-medio.jpg 800w, esempio-grande.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
