---
title: 图像填充
description: 如何使用 CSS 和宽高比填充图像并使其居中
taskInputHash: 45af0084012b636f
lang: zh
ignore: '/* cSpell:locale zh,en*/'
date_published: '2023-03-29'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
以下是如何使用 CSS 和宽高比使图像居中且有填充的方法：

1. 首先，需要将图像包装在一个容器元素中，如`<div>`或`<figure>`。这将允许您对容器应用影响其内部图像的样式。
2. 将容器的`position`属性设置为`relative`。这将允许您在容器内定位图像。
3. 在容器中添加一个`::after`伪元素。这将用于保持图像的纵横比并创建填充。
4. 将`::after`伪元素的`content`属性设置为空字符串。这是必要的，以创建该元素。
5. 将`::after`伪元素的`padding-bottom`属性设置为与图像的纵横比相对应的百分比值。例如，如果您的图像的纵横比为4:3，则应将填充设置为`75%`（因为3/4 = 0.75）。这将在图像下方创建填充。
6. 将`::after`伪元素的`position`属性设置为`absolute`。这将在容器内定位元素。
7. 将`::after`伪元素的`top`、`left`、`bottom`和`right`属性设置为`0`。这将使元素填充容器，从而创建填充。
8. 最后，将图像本身的`position`属性设置为`absolute`。这将允许您使用`top`、`left`、`bottom`和`right`属性将图像居中于容器中。

以下是使用4:3宽高比居中和填充图像的 CSS 代码示例：

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3纵横比 */
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

在此示例中，`.container`元素是图像的容器。使用`::after` 伪元素来创建填充和保持图像的纵横比。将`img`元素设置为`position: absolute`，以便您可以使用`top`、`left`、`bottom`和`right`属性将其居中于容器中。

通过将图像的`max-width`和`max-height`属性设置为`100％`，图像将按比例缩放以适合可用空间。这意味着由`::after` 伪元素创建的填充将始终与图像的大小成比例。
