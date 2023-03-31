---
title: Width and density descriptors
description: Examples of using width and density descriptors in `srcset`
date_published: '2023-03-24'
date_modified: '2023-03-31'
---

Understanding width (w) and density (x) descriptors in `srcset`. Use examples and use Markdown.

> `srcset` is an HTML attribute that allows developers to provide multiple image sources with different resolutions or pixel densities, and let the browser select the appropriate image based on the device's display characteristics. The `srcset` attribute uses a combination of the `URL` and `w` or `x` descriptors to specify the images.
## Width (`w`) Descriptor

> The `w` descriptor is used to specify the width of an image in pixels. It is used when we want to provide the browser with the dimensions of an image so that it can choose the appropriate image for the available screen space.

> The syntax for using the `w` descriptor in `srcset` is as follows:

```html
<img src="small.jpg"
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 2000w"
  alt="Example Image">
```



> In the example above, we have provided the browser with three images and their corresponding widths in pixels. The browser will select the image with the closest width to the available screen space.
## Density (`x`) Descriptor

> The `x` descriptor is used to specify the pixel density of an image, which is the ratio of physical pixels to CSS pixels. It is used when we want to provide the browser with different versions of the same image with different pixel densities.

> The syntax for using the `x` descriptor in `srcset` is as follows:

```html
<img src="small.jpg"
  srcset="small.jpg 1x,
          medium.jpg 2x,
          large.jpg 3x"
  alt="Example Image">
```


> In the example above, we have provided the browser with three images and their corresponding pixel densities. The browser will select the image with the closest pixel density to the device's screen.

> Note that the `w` and `x` descriptors can be used together in the same `srcset` attribute to provide the browser with more options to choose from.
