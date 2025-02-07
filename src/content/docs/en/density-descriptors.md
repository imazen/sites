---
title: Density descriptors & srcset
description: Examples of using density descriptors in `srcset`
date_published: '2025-02-07'
date_modified: '2025-02-07'
---

Srcset with density descriptors provides a simple and effective method for delivering the most suitable image to each user's device, improving performance and user experience. This guide will walk you through the essentials of using srcset with density descriptors and provide markup examples for your convenience.
## What is Srcset with Density Descriptors?

Srcset is an HTML attribute designed to let you specify multiple image sources for a single `<img>` element. Density descriptors (`x`) are used in conjunction with srcset to provide different resolution images based on the pixel density of the user's display.
## When to Use Srcset with Density Descriptors

Using srcset with density descriptors is especially useful when you want to:
1. Serve high-resolution images to high-DPI displays (e.g., Retina displays) while providing lower-resolution images to standard displays.
2. Improve page performance by delivering the most appropriate image size to each user's device.
## Implementing Srcset with Density Descriptors

To use srcset with density descriptors, follow these steps:
1. Prepare your images in different resolutions. 
2. Add the `srcset` attribute to the `<img>` element, including the image sources and corresponding density descriptors. 
3. Add the `sizes` attribute (optional) to specify the size of the image as it will be displayed on the screen.
### Markup Example

Here's an example of how to implement srcset with density descriptors in your markup:

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="An example image">
```



This markup example includes: 
- **src** : The default image source, shown if the browser doesn't support srcset. 
- **srcset** : The list of image sources and their density descriptors (1x, 2x, 3x). The browser will choose the most appropriate image based on the user's display. 
- **alt** : A description of the image for accessibility purposes. 


And that's it! You've successfully implemented srcset with density descriptors, improving your website's performance and user experience.
