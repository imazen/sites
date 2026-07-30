---
taskInputHash: 2d55040e7d2a6994
title: FAQ
description: >-
  Domande frequenti riguardanti lo styling e la disposizione delle immagini con
  CSS
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: it
---
Alcune domande frequentemente poste relative allo styling e alla disposizione delle immagini con CSS includono:

**1. Come si imposta la dimensione di un'immagine in CSS?**

Per impostare la dimensione di un'immagine in CSS, è possibile utilizzare le proprietà `width` e `height`. Ad esempio, per impostare la larghezza di un'immagine a 300 pixel, è possibile utilizzare il seguente codice CSS:

```css
img {
  width: 300px;
}
``` 

**2. Come si centra un'immagine orizzontalmente e verticalmente usando CSS?**

Per centrare un'immagine orizzontalmente e verticalmente usando CSS, si possono utilizzare le proprietà `display: flex`, `justify-content: center` e `align-items: center` su un contenitore che contiene l'immagine. Ad esempio, per centrare un'immagine all'interno di un elemento `div`, si può usare il seguente codice CSS:

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

div img {
  /* Opzionale: impostare una larghezza massima per l'immagine */
  max-width: 100%;
}
``` 

**3. Come si rende un'immagine responsiva usando CSS?**

Per rendere un'immagine responsiva usando CSS, si può utilizzare la proprietà `max-width: 100%` sull'immagine. Questo garantirà che l'immagine non superi mai la larghezza del suo contenitore. Per esempio:

```css
img {
  max-width: 100%;
  height: auto;
}
``` 

**4. Come si aggiunge un bordo o un'ombra a un'immagine in CSS?**

Per aggiungere un bordo o un'ombra a un'immagine in CSS, si possono utilizzare rispettivamente le proprietà `border` e `box-shadow`. Per esempio:

```css
img {
  border: 1px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
``` 

**5. Come si allineano le immagini affiancate usando CSS?**

Per allineare le immagini affiancate usando CSS, si può utilizzare la proprietà `display: inline-block` sulle immagini. Per esempio:

```css
img {
  display: inline-block;
  /* Opzionale: impostare un margine tra le immagini */
  margin-right: 10px;
}
``` 

**6. Come si imposta un'immagine di sfondo in CSS?**

Per impostare un'immagine di sfondo in CSS, si può utilizzare la proprietà `background-image`. Per esempio:

```css
div {
  background-image: url('image.jpg');
}
``` 

**7. Come si ritaglia un'immagine usando CSS?**

Per ritagliare un'immagine usando CSS, si può utilizzare la proprietà `clip`. Per esempio:

```css
img {
  clip: rect(0px, 100px, 100px, 0px);
}
```

Questo ritaglierà l'immagine in un quadrato di 100x100 pixel a partire dall'angolo in alto a sinistra.

**8. Come si aggiunge un effetto hover a un'immagine usando CSS?**

Per aggiungere un effetto hover a un'immagine usando CSS, si può utilizzare la pseudo-classe `:hover`. Per esempio:

```css
img {
  /* Imposta lo stato iniziale dell'immagine */
  opacity: 0.8;
}

img:hover {
  /* Imposta lo stato dell'immagine quando viene passato sopra con il mouse */
  opacity: 1;
}
``` 

**9. Come si controlla lo spazio tra le immagini usando CSS?**

Per controllare lo spazio tra le immagini usando CSS, si può utilizzare la proprietà `margin`. Per esempio:

```css
img {
  margin-right: 10px;
}
```

Questo aggiungerà un margine di 10 pixel alla destra di ciascuna immagine.

**10. Come si crea una presentazione di immagini usando CSS?**

Per creare una presentazione di immagini usando CSS, si può utilizzare la regola `@keyframes` per definire l'animazione e la proprietà `animation` per applicarla alle immagini. Per esempio:

```css
@keyframes slideshow {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

img {
  /* Imposta lo stato iniziale delle immagini */
  opacity: 0;
  /* Imposta la durata e la funzione di temporizzazione dell'animazione */
  animation: slideshow
```
