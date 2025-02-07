---
taskInputHash: fd2668e567b5140a
title: 给图像添加填充
description: 如何使用CSS和宽高比来居中填充图像
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: zh
---
以下是如何使用CSS和宽高比来居中和填充图片的方法：
1. 首先，需要将图片包装在一个容器元素中，例如`<div>`或`<figure>`。这将使您可以对容器应用样式，从而影响内部的图像。
2. 将容器的`position`属性设置为`relative`。这将允许您在容器内定位图片。
3. 向容器添加一个`::after`伪元素。这将用于保持图像的宽高比并创建填充。
4. 将`::after`伪元素的`content`属性设置为空字符串。这是创建元素所必需的。
5. 将`::after`伪元素的`padding-bottom`属性设置为与图像的宽高比相对应的百分比值。例如，如果您的图像的宽高比为4:3，则应将填充设置为`75%`（因为3/4 = 0.75）。这将在图像下方创建填充。
6. 将`::after`伪元素的`position`属性设置为`absolute`。这将在容器内定位元素。
7. 将`::after`伪元素的`top`、`left`、`bottom`和`right`属性设置为`0`。这将使元素填满容器，创建填充。
8. 最后，将图片本身的`position`属性设置为`absolute`。这将使您可以使用`top`、`left`、`bottom`和`right`属性将图片居中于容器内。

以下是用CSS代码来居中和填充一个宽高比为4:3的图像的示例：

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 宽高比 */
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

在这个示例中，`.container`元素是图像的容器。`::after`伪元素用于创建填充并保持图像的宽高比。`img`元素设置为`position: absolute`，因此可以使用`top`、`left`、`bottom`和`right`属性将其居中于容器内。

通过将图像的`max-width`和`max-height`属性设置为`100%`，图像将按比例缩放以适应可用空间，同时保持其宽高比。这意味着由`::after`伪元素创建的填充将始终与图像的大小成比例。
