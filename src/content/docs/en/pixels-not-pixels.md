---
title: px ≠ pixels
description: Device px ≠ browser px ≠ image px
sidebar_sort_priority: 900
date_published: '2023-03-26'
date_modified: '2023-03-31'
---

### Device pixels ≠ browser px ≠ image px

Thanks to Apple, CSS and HTML pixels (`px`) **almost always map to multiple device/printer pixels**. The devicePixelRatio on my phone is 3.875; [what's yours?](https://www.mydevice.io/) 

My desktop devicePixelRatio changes on browser zoom, but defaults to 1.5 (my `System > Display > Scale` is  150%, after all).

Image files (excluding SVG) decode to a grid of pixels. **It's annoyingly hard to get image pixels to display perfectly at a 1:1 ratio with device pixels - but with `srcset` you can get *close enough***, and a bit of Javascript can adjust the html element size after loading if you have truly justified reasons for needing that perfect mapping, although such forbidden arts will not be revealed here.

> Other absolute [units (in, pc, pt, mm, cm, Q)](https://developer.mozilla.org/en-US/docs/Web/CSS/length) are defined in terms of number of CSS pixels and pretend everything is 96dpi. Devs avoid absolute units because it's generally better to use units that are derived from the font size or the viewport/container dimensions. Mismatched units can break a layout if the user adjusts their `Accessibility > Text Size` multiplier, zooms the browser, or rotates their device. Needless to say, you should do all of these things before shipping your site.

