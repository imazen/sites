---
title: How the browser chooses
description: ''
---

How does the browser choose between images listed in the srcset attribute? Here's a step-by-step, with examples for both width and density specifications and how the browser decides based on device and viewport.

\- When using the `srcset` attribute in HTML, the browser uses a set of rules to choose the most appropriate image from a list of sources provided. These rules depend on both the device's display characteristics (resolution, pixel density) and the viewport size. The `srcset` attribute allows you to specify different images based on width (using `w` descriptor) or pixel density (using `x` descriptor). Let's go through each case with examples.

1\. Width descriptor (\`w\`):

Suppose we have the following `srcset` attribute:

\`\`\`html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

\`\`\`

The browser will follow these steps:

a. Determine the device's DPR (Device Pixel Ratio). For example, a standard display has a DPR of 1, whereas a high-resolution (Retina) display has a DPR of 2 or higher.

b. Calculate the effective width for each image in the `srcset`. Multiply the width descriptor by the DPR. For a device with a DPR of 1:

\- example-small.jpg: 400 \* 1 = 400px

\- example-medium.jpg: 800 \* 1 = 800px

\- example-large.jpg: 1600 \* 1 = 1600px

c. Compare the effective widths with the viewport width. Assume the viewport width is 420px. The browser will choose the smallest image with an effective width greater than or equal to the viewport width. In this case, it will select `example-medium.jpg`.

1\. Pixel density descriptor (\`x\`):

Suppose we have the following `srcset` attribute:

\`\`\`html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

\`\`\`

The browser will follow these steps:

a. Determine the device's DPR (Device Pixel Ratio). For example, a standard display has a DPR of 1, whereas a high-resolution (Retina) display has a DPR of 2 or higher.

b. Compare the device's DPR with the `x` descriptors in the `srcset`. In this case, we have three images with the following descriptors:

\- example-1x.jpg: 1x

\- example-2x.jpg: 2x

\- example-3x.jpg: 3x

c. Choose the image with the `x` descriptor that is closest to the device's DPR. For a device with a DPR of 1, the browser will select `example-1x.jpg`. For a device with a DPR of 2, it will choose `example-2x.jpg`, and so on.

It's important to note that you can also use the `sizes` attribute in combination with the `srcset` attribute to provide more information about how the image will be displayed at different viewport widths. This is particularly useful when using the width descriptor (\`w\`). Here's an example:

\`\`\`html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

\`\`\`