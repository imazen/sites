---
title: 密度描述符及 Srcset
description: 在 `srcset` 中使用密度描述符的示例
taskInputHash: 5b1dfe8091bb672a
lang: zh
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Srcset with density descriptors 提供了一种简单而又有效的方法，能够向每个用户的设备提供最适合的图像，从而提高性能和用户体验。本指南将为您介绍使用 srcset with density descriptors 的基本内容，并提供方便的标记示例。
## 何为密度描述符的 Srcset？

Srcset 是一个 HTML 属性，旨在让您为单个 `<img>` 元素指定多个图像源。密度描述符（`x`）与 srcset 结合使用，根据用户显示器的像素密度提供不同分辨率的图像。
## 何时使用密度描述符的 Srcset？

使用密度描述符的 srcset 特别有用的时候，如：
1. 为高 DPI 显示器（例如 Retina 显示器）提供高分辨率图像，同时向标准显示器提供低分辨率图像。
2. 通过向每个用户的设备提供最合适的图像大小来改善页面性能。
## 实现密度描述符的 Srcset 

若要使用密度描述符的 srcset，请按照以下步骤：
1. 准备不同分辨率的图像。
2. 将 `srcset` 属性添加到 `<img>` 元素，包括图像源和相应的密度描述符。
3. 添加 `sizes` 属性（可选），以指定图像显示在屏幕上的大小。
### 标记示例

以下是如何在标记中实现密度描述符的 srcset 的示例：

```html
<img src="example-image-1x.jpg"
     srcset="example-image-1x.jpg 1x, example-image-2x.jpg 2x, example-image-3x.jpg 3x"
     alt="示例图像">
```

本标记示例包括：
- **src** : 默认图像源，如果浏览器不支持 srcset，则显示该图像。
- **srcset** : 图像源及其密度描述符（1x、2x、3x）列表。根据用户的显示器选择最合适的图像。
- **alt** : 图像的描述，以便实现辅助访问。

完成了！成功地实现了密度描述符的 srcset，提高了您网站的性能与用户体验。
