---
title: 在图像周围添加填充
description: 如何使用 CSS 和宽高比居中和填充图像
taskInputHash: 7514d5857f38b5cd
lang: zh
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
以下是如何使用 CSS 和宽高比居中和填充图像的方法：

1. 首先，您需要将图像包装在一个容器元素中，例如`<div>`或`<figure>`等。这将允许您将样式应用于容器，从而影响图像内部。
2. 将容器的 `position` 属性设置为 `relative`。这将使您能够定位容器内的图像。
3. 在容器上添加一个 `::after` 伪元素。这将用于维护图像的宽高比和创建填充。
4. 将 `::after` 伪元素的 `content` 属性设置为空字符串。这是必要的，以创建该元素。
5. 将 `::after` 伪元素的 `padding-bottom` 属性设置为与图像宽高比相对应的百分比值。例如，如果您的图像的宽高比为 4:3，则应将填充设置为 `75%`（因为 3/4 = 0.75）。这将在图像下方创建填充。
6. 将 `::after` 伪元素的 `position` 属性设置为 `absolute`。这将在容器内定位该元素。
7. 将 `::after` 伪元素的 `top`、`left`、`bottom` 和 `right` 属性设置为 `0`。这将使该元素填充容器，从而创建填充。
8. 最后，将图像本身的 `position` 属性设置为 `absolute`。这将使您能够使用 `top`、`left`、`bottom` 和 `right` 属性在容器内居中图像。

以下是用于居中和填充宽高比为4:3的图像的 CSS 代码示例：

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3宽高比 */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```

在此示例中，`.container` 元素是图像的容器。 `::after` 伪元素用于创建填充并维护图像的宽高比。将 `img` 元素设置为 `position: absolute`，以便可以使用 `top`、`left`、`bottom` 和 `right` 属性在容器内居中图像。

通过将图像的 `max-width` 和 `max-height` 属性设置为 `100%`，图像将根据可用空间缩放，同时保持其宽高比。这意味着由 `::after` 伪元素创建的填充始终与图像的大小成比例。
