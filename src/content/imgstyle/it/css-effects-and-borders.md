---
title: Effetti CSS e bordi
description: Come aggiungere effetti CSS e bordi a un'immagine
taskInputHash: 6905c4474a7b9a5f
lang: it
date_published: '2023-03-29'
date_modified: '2023-04-03'
date_updated: '2024-11-15'
---
Per aggiungere effetti CSS e bordi a un'immagine, puoi seguire i seguenti passaggi: 
1. Seleziona l'elemento immagine nel tuo codice HTML. Puoi farlo utilizzando un selettore ID o classe, oppure selezionando direttamente l'elemento `<img>`. 
2. Definisci un selettore di classe o ID CSS che applica gli stili desiderati all'immagine. Ad esempio, potresti utilizzare il seguente codice per creare un semplice bordo attorno all'immagine:

```css
.my-image {
  border: 2px solid black;
}
```

 
3. Applica la classe CSS o il selettore ID all'elemento immagine. Ad esempio, se hai utilizzato il selettore `.my-image` nel passo 2, puoi aggiungere il seguente codice al tuo HTML per applicare gli stili all'immagine:

```html
<img src="path/to/image.jpg" class="my-image">
```


4. Personalizza gli stili come desideri. Oltre ai bordi, puoi applicare un'ampia gamma di effetti CSS alle immagini, come filtri, opacità, transizioni e animazioni. Ecco alcuni esempi di codice CSS che possono essere usati per aggiungere effetti alle immagini:

```css
/* Aggiungi un effetto ombra */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Aggiungi un effetto filtro in scala di grigi */
.my-image {
  filter: grayscale(100%);
}

/* Aggiungi un effetto di transizione zoom al passaggio del mouse */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```



Questi sono solo alcuni esempi dei molti effetti CSS e bordi che puoi utilizzare per migliorare le tue immagini. Sperimenta con stili diversi per trovare quelli che funzionano meglio per il tuo design.
