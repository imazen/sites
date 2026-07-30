---
taskInputHash: f005d625af56cbc8
title: 浏览器如何选择
description: 浏览器如何在 `srcset` 属性中选择列表中的图片
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: zh
---
浏览器如何在 `srcset` 属性中选择列表中的图片？以下是逐步说明，其中包含基于宽度和像素密度规格的示例，以及浏览器如何根据设备和视口进行选择。

- 在 HTML 中使用 `srcset` 属性时，浏览器会使用一套规则从提供的源列表中选择最合适的图像。这些规则取决于设备的显示特征（分辨率、像素密度）和视口大小。`srcset` 属性允许您根据宽度（使用 `w` 描述符）或像素密度（使用 `x` 描述符）指定不同的图像。让我们通过示例逐个了解每种情况。

1\. 宽度描述符（`w`）:

假设我们有以下 `srcset` 属性：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="示例图像">

```

浏览器将遵循这些步骤：

a. 确定设备的 DPR（设备像素比）。例如，标准显示屏的 DPR 为 1，而高分辨率（Retina）显示屏的 DPR 为 2 或更高。

b. 计算 `srcset` 中每个图像的有效宽度。将宽度描述符乘以 DPR。对于 DPR 为 1 的设备：

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. 将有效宽度与视口宽度进行比较。假设视口宽度为 420px。浏览器将选择最小的有效宽度大于或等于视口宽度的图像。在此情况下，它将选择 `example-medium.jpg`。

1\. 像素密度描述符（`x`）:

假设我们有以下 `srcset` 属性：

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="示例图像">

```

浏览器将遵循这些步骤：

a. 确定设备的 DPR（设备像素比）。例如，标准显示屏的 DPR 为 1，而高分辨率（Retina）显示屏的 DPR 为 2 或更高。

b. 将设备的 DPR 与 `srcset` 中的 `x` 描述符进行比较。在这种情况下，我们有三个具有以下描述符的图像：

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. 选择 `x` 描述符与设备的 DPR 最接近的图像。对于 DPR 为 1 的设备，浏览器将选择 `example-1x.jpg`。对于 DPR 为 2 的设备，它将选择 `example-2x.jpg`，以此类推。

值得注意的是，您还可以结合 `sizes` 属性和 `srcset` 属性提供有关图像在不同视口宽度下如何显示的更多信息。这在使用宽度描述符（`w`）时特别有用。以下是一个例子：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
