---
title: Effets CSS et bordures
description: Comment ajouter des effets CSS et des bordures à une image
taskInputHash: 5a96d7857a29d0a4
lang: fr
date_published: '2023-03-29'
date_modified: '2024-11-15'
date_updated: '2024-11-15'
---
Pour ajouter des effets CSS et des bordures à une image, vous pouvez suivre les étapes suivantes : 
1. Sélectionnez l'élément image dans votre code HTML. Vous pouvez le faire en utilisant un sélecteur d'ID ou de classe, ou en sélectionnant directement l'élément `<img>`. 
2. Définissez un sélecteur de classe CSS ou d'ID qui applique les styles souhaités à l'image. Par exemple, vous pourriez utiliser le code suivant pour créer une bordure simple autour de l'image :

```css
.my-image {
  border: 2px solid black; /* Crée une bordure noire solide de 2px */
}
```

3. Appliquez le sélecteur de classe CSS ou d'ID à l'élément image. Par exemple, si vous avez utilisé le sélecteur `.my-image` à l'étape 2, vous pourriez ajouter le code suivant à votre HTML pour appliquer les styles à l'image :

```html
<img src="path/to/image.jpg" class="my-image">
```

4. Personnalisez les styles comme désiré. En plus des bordures, vous pouvez appliquer un large éventail d'effets CSS aux images, tels que des filtres, l'opacité, les transitions et les animations. Voici quelques exemples de code CSS qui peuvent être utilisés pour ajouter des effets aux images :

```css
/* Ajoute un effet d'ombre portée */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Ombre portée douce */
}

/* Ajoute un effet de filtre en niveaux de gris */
.my-image {
  filter: grayscale(100%); /* Filtre en niveaux de gris complet */
}

/* Ajoute un effet de transition de zoom au survol */
.my-image {
  transition: transform 0.3s ease; /* Transition douce */
}
.my-image:hover {
  transform: scale(1.1); /* Agrandit légèrement l'image au survol */
}
```

Ce ne sont que quelques exemples des nombreux effets et bordures CSS que vous pouvez utiliser pour améliorer vos images. Expérimentez avec différents styles pour trouver ceux qui conviennent le mieux à votre design.
