---
title: 浏览器如何选择
description: 浏览器如何在srcset属性中选择图像
taskInputHash: 4f3d39e70c9edd79
lang: zh
---
浏览器如何在`srcset`属性中选择图片？以下是一步步的示例，包括指定宽度和像素密度，并根据设备和视口进行决策。

- 当在HTML中使用`srcset`属性时，浏览器使用一组规则从提供的一组源中选择最合适的图像。这些规则取决于设备的显示特性（分辨率、像素密度）和视口大小。`srcset`属性允许您基于宽度（使用`w`描述符）或像素密度（使用`x`描述符）指定不同的图像。让我们通过每个示例进行说明。

1.宽度描述符（`w`）：

假设我们有以下`srcset`属性：

```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

浏览器将执行以下步骤：

a. 确定设备的DPR（设备像素比）。例如，标准显示器的DPR为1，而高分辨率（Retina）显示器的DPR为2或更高。

b. 计算`srcset`中每个图像的有效宽度。将宽度描述符乘以DPR。对于DPR为1的设备：

- example-small.jpg: 400 * 1 = 400px

- example-medium.jpg: 800 * 1 = 800px

- example-large.jpg：1600 * 1 = 1600px

c. 将有效宽度与视口宽度进行比较。假设视口宽度为420px。浏览器将选择有效宽度大于或等于视口宽度的最小图像。在本例中，将选择`example-medium.jpg`。

2.像素密度描述符（`x`）：

假设我们有以下`srcset`属性：

```html
<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

浏览器将执行以下步骤：

a. 确定设备的DPR（Device Pixel Ratio）。例如，标准显示器的DPR为1，而高分辨率（Retina）显示器的DPR为2或更高。

b. 将设备DPR与`srcset`中的`x`描述符进行比较。在这种情况下，我们有三个图像，具有以下描述符：

- example-1x.jpg：1x

- example-2x.jpg：2x

- example-3x.jpg：3x

c. 选择与设备DPR最接近的`x`描述符的图像。对于DPR为1的设备，浏览器将选择`example-1x.jpg`。对于DPR为2的设备，它将选择`example-2x.jpg`，依此类推。

值得注意的是，您还可以将`sizes`属性与`srcset`属性相结合，以提供有关不同视口宽度下图像显示方式的更多信息。这在使用宽度描述符（`w`）时特别有用。以下是一个示例：

```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,
```
