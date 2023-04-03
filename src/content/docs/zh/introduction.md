---
title: '`srcset`和`<img>`的大小'
description: 2023年响应式图片的高效且有见解的指南
taskInputHash: 508db0f0818d638b
lang: zh
sidebar_sort_priority: 1000
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
**一份高效且有见解的2023年图片指南**

查看侧边栏以进行深入了解。这是快速升级`<img>`标签以处理各种大小和像素密度的现代设备的参考。您应该[知道像素不等于像素](/zh/pixels-not-pixels)，`devicePixelRatio`更有可能是3.875而不是1:1。现代手机为了可读性而假装是320-428像素宽（在CSS像素中），但每个CSS像素有许多设备像素。

> 如果您的图像大小永远不会改变，无论您将浏览器窗口变窄多少，您应该使用[密度描述符](/zh/density-descriptors)。这通常适用于徽标、图标和按钮。

您知道自己的[断点](/zh/breakpoints)是多少吗？您需要这些数字来微调下面的解决方案，至少还需要视口宽度断点，该视口宽度断点是主内容区停止增长的位置。


### 易用方法

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="骑自行车的狗" />

<!-- 我们假设您在700px处有一个断点。 
      在此视口宽度下，此图像占据100％的宽度，但在视口更大时，图像仅限于800个CSS像素 -->

<!-- 这假定您使用一个符合RIAPI标准的图像服务器，如Imageflow。 
      实时图像变体生产对于开发人员的心理健康至关重要。 -->
```
