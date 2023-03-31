---
title: Breakpoints & images
description: Why some (but not all) breakpoints matter for your images
date_published: '2023-03-26'
date_modified: '2023-03-30'
date_updated: "2023-03-31T15:01:44-06:00"
---

### Background

Tiny screens and big monitors need different layouts. For the purpose of `srcset` and `sizes`, we need to know at what point the layout changes.

Web developers must decide what to shrink, hide, or relocate on smaller screens - or more commonly, what to expand, reveal, or add on larger screens. They also have very little information to go on. Is the user on a tablet or a phone in landscape mode - or a small browser window?

We have to pick an arbitrary viewport width where the layout changes. This is called a **breakpoint**. It's an arbitrary number of CSS pixels ([not device pixels](/en/pixels-not-pixels)). Polypane has a [great article](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) on commonly used breakpoints.

Some images (like logos or icons or buttons) might be immune to the layout shifts caused by these breakpoints (and be fine with [srcset density descriptors](/en/density-descriptors)). 

Main content images will be limited by the size of their container. Typically the main content area of a page will be limited to a certain width on the largest screens, a `max-width`, but on small screens, the main content area will fill the entire viewport.

If you have more than one column at some breakpoints, it will get harder to calculate the effective sizing rules, since the percentage of the viewport width that the image takes up will change.

### The easy method

That said, don't overthink this. You'll probably be very OK with the following approximation:

1. At what size does the main column (or the image's container) stop growing? Up to that viewport width, we can use `100vw` for the image's `sizes` attribute to say the image takes up 100% of the viewport width.  
2. What is the maximum width that container ever achieves? We can set that as a fixed `width` for everything else. 

If your answer to 1 was 700px and your answer to 2 was 800px, you can use the following `sizes` attribute:

```html
<!-- These are CSS pixels, not device pixels or image pixels. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> You'd think that the browser could nicely handle all these calculations for us based on the CSS. Unfortunately, browsers are aggressively eager to choose an image URL *before* the stylesheets are downloaded. So we have to do the calculations ourselves, and it serves them right if we don't get it perfect.

