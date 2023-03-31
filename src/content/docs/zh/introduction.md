---
title: srcset 和 <img> sizes
description: 2023 年响应式图像的高效且主观的指南
taskInputHash: ff8b517c77f33d91
lang: zh
ignore: '/* cSpell:locale zh,en*/'
sidebar_sort_priority: 1000
date_published: '2023-03-23'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
**2023 年图像高效且主观的指南**

查看侧边栏进行深入了解。这是快速参考，用于升级那些 `<img>` 标签以处理现代设备的各种尺寸和像素密度。您应该[知道像素不等于像素](/zh/pixels-not-pixels)，而 `devicePixelRatio` 更有可能是 3.875，而不是 1:1。现代手机为了可读性会假装宽度为 320-428px（在 CSS 像素中），但是有许多设备像素支持每个 CSS 像素。 

> 如果您的图像永远不会更改大小，无论您将浏览器窗口缩小到多窄，您应该使用[分辨率描述符](/zh/density-descriptors)代替。这通常适用于徽标、图标和按钮。

您知道您的[断点](/zh/breakpoints)是什么吗？您需要这些数字来微调以下解决方案-至少是主内容区域停止增长的视口宽度断点。


### 简单方法

```html

<img src = "img.jpg?w=480" 
        srcset="img.jpg?format=webp&w=480 480w, 
                img.jpg?format=webp&w=800 800w, 
                img.jpg?format=webp&w=1200 1200w, 
                img.jpg?format=webp&w=1600 1600w, 
                img.jpg?format=webp&w=2000 2000w"

        sizes="(max-width: 700px) 100vw, 800px" alt="狗骑自行车" />

<!-- 我们假设您在 700px 处断点。在该视口宽度下，此图像占用 100% 的宽度，
     但是当视口更大时，图像被限制为 800 CSS 像素 -->

<!-- 这假定您使用 RIAPI 兼容的图像服务器，例如 Imageflow。即时的图像变体生成对开发人员的理智非常重要。-->
```
