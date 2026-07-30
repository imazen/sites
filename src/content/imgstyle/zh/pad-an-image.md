---
taskInputHash: f3af166c0535717d
title: 填充图像
description: 如何使用 CSS 和纵横比来填充并居中图像
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: zh
---
以下是如何使用 CSS 和纵横比来居中并填充图像的方法：
1. 首先，你需要将图像包裹在一个容器元素中，例如 `<div>` 或 `<figure>`。这样可以让你对容器应用样式，从而影响其中的图像。
2. 将容器的 `position` 属性设置为 `relative`。这将允许你定位容器内部的图像。
3. 为容器添加 `::after` 伪元素。这将用于保持图像的纵横比并创建填充。
4. 将 `::after` 伪元素的 `content` 属性设置为空字符串。这是创建元素所必需的。
5. 将 `::after` 伪元素的 `padding-bottom` 属性设置为一个与图像纵横比相对应的百分比值。例如，如果你的图像纵横比为 4:3，你应该将填充设置为 `75%`（因为 3/4 = 0.75）。这将在图像下方创建填充。
6. 将 `::after` 伪元素的 `position` 属性设置为 `absolute`。这将在容器中定位元素。
7. 将 `::after` 伪元素的 `top`、`left`、`bottom` 和 `right` 属性设置为 `0`。这将使元素填满容器，从而创建填充。
8. 最后，将图像本身的 `position` 属性设置为 `absolute`。这将允许你使用 `top`、`left`、`bottom` 和 `right` 属性将图像居中在容器中。

以下是用于居中和填充具有 4:3 纵横比的图像的 CSS 代码示例：

```css
.container {
  position: relative;
  width: 100%;
}

.container::after {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 纵横比 */
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

在此示例中，`.container` 元素是图像的容器。`::after` 伪元素用于创建填充并保持图像的纵横比。`img` 元素设置为 `position: absolute`，因此可以使用 `top`、`left`、`bottom` 和 `right` 属性将其居中在容器中。

通过将图像的 `max-width` 和 `max-height` 属性设置为 `100%`，图像将按比例缩放以适应可用空间，同时保持其纵横比。这意味着由 `::after` 伪元素创建的填充将始终与图像的大小成比例。
