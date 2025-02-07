---
title: Pad an image
description: How to pad an image using css and aspect ratio to center
date_published: '2025-02-07'
date_modified: '2025-02-07'
---

Here's how you can use CSS and aspect ratio to center and pad an image: 
1. First, you need to wrap your image in a container element, such as a `<div>` or `<figure>`. This will allow you to apply styles to the container that will affect the image inside. 
2. Set the container's `position` property to `relative`. This will allow you to position the image inside the container. 
3. Add an `::after` pseudo-element to the container. This will be used to maintain the aspect ratio of the image and create the padding. 
4. Set the `content` property of the `::after` pseudo-element to an empty string. This is necessary to create the element. 
5. Set the `padding-bottom` property of the `::after` pseudo-element to a percentage value that corresponds to the aspect ratio of the image. For example, if your image has an aspect ratio of 4:3, you would set the padding to `75%` (since 3/4 = 0.75). This will create the padding below the image. 
6. Set the `position` property of the `::after` pseudo-element to `absolute`. This will position the element within the container. 
7. Set the `top`, `left`, `bottom`, and `right` properties of the `::after` pseudo-element to `0`. This will make the element fill the container, creating the padding. 
8. Finally, set the `position` property of the image itself to `absolute`. This will allow you to center the image within the container using the `top`, `left`, `bottom`, and `right` properties.

Here's an example of the CSS code you would use to center and pad an image with an aspect ratio of 4:3:

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 aspect ratio */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```



In this example, the `.container` element is the container for the image. The `::after` pseudo-element is used to create the padding and maintain the aspect ratio of the image. The `img` element is set to `position: absolute` so it can be centered within the container using the `top`, `left`, `bottom`, and `right` properties.

By setting the `max-width` and `max-height` properties of the image to `100%`, the image will scale to fit the available space while maintaining its aspect ratio. This means that the padding created by the `::after` pseudo-element will always be proportional to the size of the image.
