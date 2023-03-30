---
title: Ajouter "Cliquez pour voir l'image en plein écran" à une galerie
description: >-
  Comment ajouter une option "Cliquez pour voir l'image en plein écran" à une
  galerie
taskInputHash: acfcd95755eb1185
lang: fr
---
Pour ajouter une option "Cliquez pour voir l'image en plein écran" à une galerie, vous pouvez utiliser JavaScript et CSS pour créer une superposition qui affiche l'image en mode plein écran lorsque l'utilisateur clique dessus.

Voici une approche de base que vous pouvez utiliser:

1. Tout d'abord, créez un conteneur pour votre galerie et ajoutez-y toutes les images que vous voulez afficher.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- ajoutez plus d'images ici -->
</div>
```


2. Ensuite, ajoutez du CSS pour styliser la galerie et les images.

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery img {
  width: 100%;
  height: auto;
  margin: 5px;
}
```


3. Maintenant, ajoutez un écouteur d'événements de clic à chaque image en utilisant JavaScript. Lorsque l'utilisateur clique sur une image, JavaScript créera une superposition et affichera l'image en mode plein écran.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // créer la superposition
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // créer l'élément d'image
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // ajouter l'élément d'image à la superposition
    overlay.appendChild(fullScreenImage);
    
    // ajouter la superposition à la page
    document.body.appendChild(overlay);
  });
});
```


4. Enfin, ajoutez du CSS pour styliser la superposition et l'image en plein écran.

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-screen-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```



Avec ces étapes, vous devriez maintenant avoir une galerie qui permet aux utilisateurs de voir les images en mode plein écran en cliquant dessus.
