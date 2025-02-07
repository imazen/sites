---
taskInputHash: 1e64ac6c2fc42289
title: px ≠ 像素
description: 设备 px ≠ 浏览器 px ≠ 图像 px
sidebar_sort_priority: 900
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: zh
---
### 设备像素 ≠ 浏览器 px ≠ 图像 px

多亏了苹果，CSS 和 HTML 像素 (`px`) **几乎总是映射到多个设备/打印机像素**。我手机上的 devicePixelRatio 是 3.875；[你的呢？](https://www.mydevice.io/)

我的桌面 devicePixelRatio 随浏览器缩放而变化，但默认是 1.5（毕竟，我的 `系统 > 显示 > 缩放` 是 150%）。

图像文件（不包括 SVG）解码为像素网格。**让图像像素以 1:1 比例完美显示在设备像素上是够棘手的 - 但使用 `srcset` 您可以接近完美**，如果您有真正合理的理由需要完美映射，一点 JavaScript 可以在加载后调整 html 元素大小，虽然这些禁术在这里不会被揭示。

> 其他绝对[单位（英寸，针，pt，毫米，厘米，Q）](https://developer.mozilla.org/zh/docs/Web/CSS/length) 是根据 CSS 像素的数量定义的，假装一切都是 96dpi。开发人员避免使用绝对单位，因为通常使用从字体大小或视口/容器尺寸派生的单位更好。如果用户调整其 `辅助功能 > 文本大小` 倍增器，缩放浏览器，或旋转设备，单位不匹配可能会打破布局。不用说，在发布您的网站之前，您应该做这些全部的事情。
