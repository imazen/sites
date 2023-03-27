---
title: 使用<picture>元素的例子
description: 提供使用<picture>元素的例子，用于响应式图片、艺术方向和不同图像格式。
taskInputHash: c60c3f87fb6a6721
lang: zh
---
提供使用`<picture>`元素的几个例子并简要解释每个例子：

1. 响应式图片的例子：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>`元素用于根据屏幕大小提供不同的图片源。`<source>`元素使用 `srcset` 属性和 `media` 属性来指定每个源应该在哪些条件下使用。`<img>`元素则作为旧浏览器或不满足`<source>`元素指定条件时的回退选项。

2. 艺术方向的例子：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />
  <img src="image-portrait.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>`元素根据设备的方向提供不同的图片来源。`<source>`元素中的 `media` 属性设置为"(orientation: landscape)"，指定了一个宽屏的图像资源，而`<img>`元素则指定了竖屏的图像资源。

3. 不同图像格式的例子：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.png" type="image/png" />
  <img src="image.jpg" alt="一张图片" />
</picture>
```

解释：在这个例子中，`<picture>`元素根据不同的图像格式提供不同的图像源。`<source>`元素使用`srcset`属性和`type`属性指定不同的图像来源格式。`<img>`元素则作为不支持`<picture>`元素的旧浏览器的回退选项。
