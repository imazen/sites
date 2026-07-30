---
taskInputHash: d82e22efe4b488e0
title: srcset 和 `<img>` sizes
description: 高效和有见地的2023年响应式图像指南
sidebar_sort_priority: 1000
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: zh
---
**高效和有见地的2023年图像指南**

查看侧边栏以了解详细信息。这是一个快速参考，适用于升级 `<img>` 标签以适应各种尺寸和像素密度的现代设备。你应该[知道像素 != 像素](/zh/pixels-not-pixels)，而 `devicePixelRatio` 更可能接近 3.875 而不是 1:1。现代手机为了可读性（在 CSS 像素中）假装宽度为 320-428px，但每个 CSS 像素有很多设备像素。

> 如果你的图像大小从未改变，无论你怎样缩小浏览器窗口的宽度，你应该使用[密度描述符](/zh/density-descriptors)。这通常适用于徽标、图标和按钮。

你知道你的[断点](/zh/breakpoints)吗？你需要这些数字来微调下面的解决方案——至少需要了解主内容区域停止扩展的视口宽度断点。

### 简单方法

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="骑自行车的狗" />

<!-- 我们假设你在700px处有一个断点。
      在该视口宽度下，此图像占据宽度的 100%，但当视口更大时，图像限制为 800 CSS 像素 -->

<!-- 这假设你正在使用符合RIAPI的图像服务器，例如Imageflow。
     即时生成图像变体对于开发者的理智至关重要。 -->
```
