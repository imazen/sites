---
taskInputHash: fa9beaeb1fdcbc85
title: srcset 和 <img> sizes
description: 2023年响应式图像的高效且有主见的指南
sidebar_sort_priority: 1000
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: zh
---

**2023年高效且有主见的图像指南**

查看侧边栏了解深入探讨。这是快速参考，用于升级那些`<img>`标签，以适应现代设备的各种尺寸和像素密度。你应该[了解像素 != 像素](/zh/pixels-not-pixels)，并且`devicePixelRatio`更可能接近3.875而不是1:1。现代手机为了可读性（在CSS像素中）假装宽320-428px，但每个CSS像素有多个设备像素。

> 如果你的图像大小从不改变，无论你多么窄化浏览器窗口，你应该使用[密度描述符](/zh/density-descriptors)代替。这通常适用于标志、图标和按钮。

你知道你的[断点](/zh/breakpoints)是什么吗？你将需要这些数字来微调下面的解决方案——至少需要主内容区域停止增长的视口宽度断点。


### 简易方法

```html

<img src="img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="骑自行车的狗" />

<!-- 我们假设你在700px处有一个断点。 
      在此视口宽度以下，该图像占用100%的宽度，但当视口更大时，图像限制为800 CSS像素 -->

<!-- 假设你使用的是符合RIAPI的图像服务器，比如Imageflow。
     即时生成图像变体对于开发人员的理智至关重要。 -->
```
