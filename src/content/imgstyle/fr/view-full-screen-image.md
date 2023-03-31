---
title: >-
  Ajouter un bouton tactile pour afficher une image en plein écran dans une galerie
description: >-
  Comment ajouter une option de vue en plein écran d'images en appuyant sur un bouton tactile dans une galerie
taskInputHash: acfcd95755eb1185
lang: fr
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Pour ajouter une option "Touchez pour voir l'image en plein écran" à une galerie, vous pouvez utiliser du JavaScript et du CSS pour créer un overlay qui affiche l'image en mode plein écran lorsque l'utilisateur appuie dessus.

Voici une approche de base que vous pouvez utiliser :
1. Tout d'abord, créez un conteneur pour votre galerie et ajoutez toutes les images que vous souhaitez afficher.

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


3. Ajoutez maintenant un gestionnaire d'événements de clic à chaque image à l'aide de JavaScript. Lorsque l'utilisateur clique sur une image, le JavaScript créera un overlay et affichera l'image en mode plein écran.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // créer l'overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // créer l'élément d'image 
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // ajouter l'élément d'image à l'overlay
    overlay.appendChild(fullScreenImage);
    
    // ajouter l'overlay à la page
    document.body.appendChild(overlay);
  });
});
```


4. Enfin, ajoutez du CSS pour styliser l'overlay et l'image en plein écran.

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



Avec ces étapes, vous devriez maintenant avoir une galerie qui permet aux utilisateurs de voir les images en mode plein écran en les touchant.
