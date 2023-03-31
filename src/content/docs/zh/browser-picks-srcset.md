---
title: 浏览器如何选择图像
description: 浏览器如何在`srcset`属性中选择图片
taskInputHash: 4f3d39e70c9edd79
lang: zh
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
浏览器如何在`srcset`属性中选择图片？下面是一个逐步解释的过程，包括针对设备和视口的宽度和密度规格的例子。

- 在HTML中使用`srcset`属性时，浏览器使用一组规则从提供的源列表中选择最合适的图像。这些规则取决于设备的显示特性（分辨率，像素密度）和视口大小。`srcset`属性允许您根据宽度（使用`w`描述符）或像素密度（使用`x`描述符）指定不同的图像。现在我们通过每个案例的例子来深入了解一下。

1\. 宽度描述符（`w`）:

假设我们有以下`srcset`属性：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

浏览器会遵循以下步骤：

a. 确定设备的DPR（设备像素比）。例如，标准显示器的DPR为1，而高分辨率（Retina）显示器的DPR为2或更高。

b. 计算`srcset`中每个图像的有效宽度。将宽度描述符乘以DPR。对于DPR为1的设备：

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. 将有效宽度与视口宽度进行比较。假设视口宽度为420px。浏览器将选择有效宽度大于或等于视口宽度的最小图像。在这种情况下，它将选择`example-medium.jpg`。

2\. 像素密度描述符（`x`）：

假设我们有以下`srcset`属性：

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

浏览器会遵循以下步骤：

a. 确定设备的DPR（设备像素比）。例如，标准显示器的DPR为1，而高分辨率（Retina）显示器的DPR为2或更高。

b. 将设备的DPR与`srcset`中的`x`描述符进行比较。在这种情况下，我们有三个带有以下描述符的图像：

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. 选择最接近设备DPR的`x`描述符的图像。对于DPR为1的设备，浏览器将选择`example-1x.jpg`。对于DPR为2的设备，它将选择`example-2x.jpg`等等。

值得注意的是，您还可以与`srcset`属性结合使用`sizes`属性，以提供有关不同视口宽度下图像如何显示的更多信息。当使用宽度描述符（`w`）时，这尤其有用。下面是一个例子：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
