---
title: New CSS features for images
description: New CSS features for images
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
---

Modern CSS empowers developers with concise, effective tools for robust image handling:

- **Aspect Ratio:**  
  The `aspect-ratio` property enforces fixed proportions, stabilizing layouts by preventing unexpected shifts while images load.  
  ```css  
  .container {  
    aspect-ratio: 16/9;  
  }  
  ```

- **Object Fit & Object Position:**  
  Use `object-fit` (e.g., `cover`, `contain`) and `object-position` to precisely control image scaling and alignment within their containers, eliminating awkward cropping or distortion.  
  ```css  
  img {  
    object-fit: cover;  
    object-position: center;  
  }  
  ```

- **Image-Set for Resolution Adaptability:**  
  The `image-set()` function offers resolution switching for background images, ensuring optimal clarity on high-DPI devices.  
  ```css  
  .hero {  
    background-image: image-set(url("hero.png") 1x, url("hero@2x.png") 2x);  
  }  
  ```

- **Additional Enhancements:**  
  `image-rendering` fine-tunes scaling algorithms for crisp output (ideal for pixel art), while `filter` enables dynamic visual effects directly in CSS.

These features significantly streamline image presentation, reducing reliance on JavaScript hacks and complex workarounds, thus markedly easing everyday development tasks.
