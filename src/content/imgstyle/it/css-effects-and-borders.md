---
taskInputHash: 7c91c456cb074d4b
title: Effetti CSS e bordi
description: Come aggiungere effetti CSS e bordi a un'immagine
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
Per aggiungere effetti CSS e bordi a un'immagine, puoi seguire i seguenti passaggi: 
1. Seleziona l'elemento immagine nel tuo codice HTML. Puoi farlo usando un selettore ID o classe, o selezionando direttamente l'elemento `<img>`. 
2. Definisci un selettore di classe CSS o ID che applichi gli stili desiderati all'immagine. Ad esempio, potresti usare il seguente codice per creare un semplice bordo attorno all'immagine:

```css
.my-image {
  border: 2px solid black; /* Bordo semplice attorno all'immagine */
}
```

 
3. Applica il selettore di classe o ID all'elemento immagine. Ad esempio, se hai usato il selettore `.my-image` nel passaggio 2, potresti aggiungere il seguente codice al tuo HTML per applicare gli stili all'immagine:

```html
<img src="path/to/image.jpg" class="my-image">
```


4. Personalizza gli stili come desiderato. Oltre ai bordi, puoi applicare una vasta gamma di effetti CSS alle immagini, come filtri, opacità, transizioni e animazioni. Ecco alcuni esempi di codice CSS che possono essere utilizzati per aggiungere effetti alle immagini:

```css
/* Aggiungere un effetto ombra */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Effetto ombra */
}

/* Aggiungere un effetto filtro in scala di grigi */
.my-image {
  filter: grayscale(100%); /* Filtro scala di grigi */
}

/* Aggiungere un effetto di zoom alla transizione al passaggio del mouse */
.my-image {
  transition: transform 0.3s ease; /* Tempo di transizione */
}
.my-image:hover {
  transform: scale(1.1); /* Scala immagine al passaggio del mouse */
}
```

Questi sono solo alcuni esempi dei molti effetti CSS e bordi che puoi utilizzare per migliorare le tue immagini. Sperimenta con stili diversi per trovare quelli che funzionano meglio per il tuo design.
