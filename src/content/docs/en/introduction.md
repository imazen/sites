---
title: "srcset & <img> sizes "
description: An Efficient and Opinionated Guide to Responsive Images for 2023
sidebar_sort_priority: 1000
---

**An Efficient and Opinionated Guide to Images for 2023**

Check the sidebar for the deep dive. This is the quick reference for upgrading those `<img>` tags to handle modern devices in all their various sizes and pixel densities. You should [know that pixels != pixels](/en/pixels-not-pixels) and `devicePixelRatio` is more likely to be around 3.875 than 1:1. Modern phones pretend to be 320-428px wide for readability (in CSS pixels), but have many device pixels per CSS pixel.

> If your image never changes size, no matter how narrow you make the browser window, you should use a [density descriptor instead](/en/density-descriptors). This is often suitable for logos, icons, and buttons.

Do you know what your [breakpoints](/en/breakpoints) are? You'll need those numbers to fine-tune the solution below - and at minimum the viewport width breakpoint where the main content area stops growing.


### The easy method

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="Dog riding a bicycle" />

<!-- We've assumed that you have a breakpoint at 700px. 
      And that under that viewport width, this image takes 100% of the width, but
      when the viewport is larger, the image is limited to 800 CSS pixels -->

<!-- This also assumes you have are using an RIAPI-compliant image server such as Imageflow. 
     On-the-fly image variant production is essential for developer sanity. -->
```