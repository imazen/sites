---
title: Effetti e bordi CSS
description: Come aggiungere effetti e bordi CSS a un'immagine
taskInputHash: c1ca100749292a25
lang: it
date_published: '2023-03-29'
date_modified: '2024-11-15'
date_updated: '2024-11-15'
---
Per aggiungere effetti CSS e bordi a un'immagine, puoi seguire i seguenti passaggi: 
1. Seleziona l'elemento immagine nel tuo codice HTML. Puoi farlo utilizzando un selettore ID o di classe, oppure selezionando direttamente l'elemento `<img>`.
2. Definisci un selettore di classe CSS o ID che applichi gli stili desiderati all'immagine. Ad esempio, potresti utilizzare il seguente codice per creare un bordo semplice intorno all'immagine:

```css
.my-image {
  border: 2px solid black;
}
```

 
3. Applica il selettore di classe CSS o ID all'elemento immagine. Ad esempio, se hai utilizzato il selettore `.my-image` nel passaggio 2, puoi aggiungere il seguente codice al tuo HTML per applicare gli stili all'immagine:

```html
<img src="path/to/image.jpg" class="my-image">
```


4. Personalizza gli stili come desiderato. Oltre ai bordi, puoi applicare una vasta gamma di effetti CSS alle immagini, come filtri, opacità, transizioni e animazioni. Ecco alcuni esempi di codice CSS che possono essere utilizzati per aggiungere effetti alle immagini:

```css
/* Aggiungi un effetto ombra */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Aggiungi un effetto filtro in scala di grigi */
.my-image {
  filter: grayscale(100%);
}

/* Aggiungi un effetto zoom con transizione al passaggio del mouse */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```

Questi sono solo alcuni esempi dei molti effetti CSS e bordi che puoi utilizzare per migliorare le tue immagini. Sperimenta con diversi stili per trovare quelli che funzionano meglio per il tuo design.
