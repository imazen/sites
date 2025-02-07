---
taskInputHash: 930830be3ee9319f
title: >-
  Ajouter une option pour voir l'image en plein écran en appuyant dans une
  galerie
description: >-
  Comment ajouter une option pour voir l'image en plein écran en appuyant dans
  une galerie
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: fr
---
Pour ajouter une option "Tap pour voir l'image en plein écran" à une galerie, vous pouvez utiliser JavaScript et CSS pour créer une superposition qui affiche l'image en plein écran lorsque l'utilisateur appuie dessus.

Voici une approche de base que vous pouvez utiliser :
1. Tout d'abord, créez un conteneur pour votre galerie et ajoutez toutes les images que vous souhaitez afficher.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- ajoutez d'autres images ici -->
</div>
```


2. Ensuite, ajoutez quelques styles CSS pour la galerie et les images.

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


3. Maintenant, ajoutez un écouteur d'événements clic à chaque image à l'aide de JavaScript. Lorsque l'utilisateur clique sur une image, le JavaScript créera une superposition et affichera l'image en mode plein écran.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // créer une superposition
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // créer un élément image
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // ajouter l'élément image à la superposition
    overlay.appendChild(fullScreenImage);
    
    // ajouter la superposition à la page
    document.body.appendChild(overlay);
  });
});
```


4. Enfin, ajoutez quelques styles CSS pour la superposition et l'image en plein écran.

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



Avec ces étapes, vous devriez maintenant avoir une galerie qui permet aux utilisateurs de voir les images en plein écran en appuyant dessus.
