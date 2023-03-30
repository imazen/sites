---
title: 图像填充
description: 如何使用CSS和长宽比居中填充图像
taskInputHash: c0f932c493b16453
lang: zh
---
以下是如何使用CSS和长宽比居中和填充图像的说明：

1. 首先，您需要将图像包装在容器元素中(如<div>或<figure>)。这将允许您对容器应用样式，以影响其中的图像。

2. 将容器的`position`属性设置为相对定位(relative)。这将允许您在容器内部定位图像。

3. 在容器中添加一个伪元素`::after`，它将用于保持图像的宽高比并创建填充。

4. 将伪元素`::after`的`content`属性设置为空字符串。这是必要的来创建该元素。

5. 将伪元素`::after`的`padding-bottom`属性设置为相应于图像长宽比的百分数值。例如，如果您的图像长宽比为4:3，则应将填充设置为75%（因为3/4 = 0.75）。这将在图像下方创建填充。

6. 将伪元素`::after`的`position`属性设置为绝对定位(absolute)。这将在容器内部定位该元素。

7. 将伪元素`::after`的`top`、`left`、`bottom`和`right`属性设置为`0`。这将使该元素填充容器，从而创建填充。

8. 最后，将图像本身的`position`属性设置为绝对定位。这将允许您使用`top`、`left`、`bottom`和`right`属性将图像置于容器的中心位置。

以下是使用4:3长宽比居中和填充图像的CSS代码示例：

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 aspect ratio */
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

在此示例中，`.container`元素是图像的容器。使用`::after`伪元素来创建填充和保持图像的长宽比。`img`元素设置为`position: absolute`，以便可以使用`top`、`left`、`bottom`和`right`属性将其置于容器的中心位置。

将图像的`max-width`和`max-height`属性设置为`100%`，这样图像将按比例缩放以适应可用空间。这意味着由`::after`伪元素创建的填充将始终与图像大小成比例。
