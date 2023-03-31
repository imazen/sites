---
title: Add tap to view full-screen image to a gallery
description: How to add a tap to view full-screen image option to a gallery
date_published: '2023-03-29'
date_modified: '2023-03-29'
date_updated: "2023-03-31T15:01:44-06:00"
---

To add a "Tap to view full-screen image" option to a gallery, you can use JavaScript and CSS to create an overlay that displays the image in full-screen mode when the user taps on it.

Here's a basic approach you can use:
1. First, create a container for your gallery and add all the images you want to display.

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- add more images here -->
</div>
```


2. Next, add some CSS to style the gallery and the images.

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


3. Now, add a click event listener to each image using JavaScript. When the user clicks on an image, the JavaScript will create an overlay and display the image in full-screen mode.

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // create image element
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // add image element to overlay
    overlay.appendChild(fullScreenImage);
    
    // add overlay to page
    document.body.appendChild(overlay);
  });
});
```


4. Finally, add some CSS to style the overlay and the full-screen image.

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



With these steps, you should now have a gallery that allows users to view images in full-screen mode by tapping on them.
