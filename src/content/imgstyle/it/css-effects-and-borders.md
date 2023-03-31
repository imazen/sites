---
title: Effetti e bordi CSS
description: Come aggiungere effetti e bordi CSS ad un'immagine
taskInputHash: fd3ec3524e1e04a8
lang: it
ignore: '/* cSpell:locale it,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Per aggiungere effetti CSS e bordi ad un'immagine, puoi seguire i seguenti passaggi:
1. Seleziona l'elemento dell'immagine nel tuo codice HTML. Puoi farlo utilizzando un selettore ID o di classe, o selezionando direttamente l'elemento `<img>`.
2. Definisci un selettore di classe o ID CSS che applichi gli stili desiderati all'immagine. Ad esempio, potresti utilizzare il seguente codice per creare un semplice bordo intorno all'immagine:

```css
.my-image {
  border: 2px solid black;
}
```
3. Applica il selettore di classe o ID CSS all'elemento immagine. Ad esempio, se hai usato il selettore `.my-image` nel passaggio 2, puoi aggiungere il seguente codice HTML per applicare gli stili all'immagine:

```arduino
<img src="percorso/all'immagine.jpg" class="my-image">
```

4. Personalizza gli stili come desideri. Oltre ai bordi, puoi applicare una vasta gamma di effetti CSS alle immagini, come filtri, opacità, transizioni e animazioni. Ecco alcuni esempi di codice CSS che puoi usare per aggiungere effetti alle immagini:

```css
/* Aggiungi un effetto di ombra */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Aggiungi un effetto filtro scala di grigi */
.my-image {
  filter: grayscale(100%);
}

/* Aggiungi un effetto animazione zoom all'hover */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```

Questi sono solo alcuni esempi tra i molti effetti CSS e bordi che puoi utilizzare per migliorare le tue immagini. Sperimenta con stili diversi per trovare quelli che funzionano meglio per il tuo design.
