---
taskInputHash: 6d7770211119a8e1
title: px ≠ 像素
description: 设备 px ≠ 浏览器 px ≠ 图像 px
sidebar_sort_priority: 900
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: zh
---
### 设备像素 ≠ 浏览器像素 ≠ 图片像素

感谢 Apple，CSS 和 HTML 像素 (`px`) **几乎总是对应多个设备/打印机像素**。我手机上的 devicePixelRatio 是 3.875；[你的呢？](https://www.mydevice.io/) 

我的桌面设备的 devicePixelRatio 会随着浏览器缩放而变化，但默认值是 1.5（毕竟我的 `系统 > 显示 > 缩放` 是 150%）。

图像文件（不包括 SVG）解码为一个像素网格。**让图像像素以 1:1 的比例完美显示为设备像素是令人烦恼的难题 - 但通过 `srcset` 你可以接近这个目标**，如果你真的有理由需要完美的映射，稍微用一点 Javascript 可以在加载后调整 HTML 元素的大小，尽管这种禁忌艺术不会在这里揭示。

> 其他绝对[单位（in, pc, pt, mm, cm, Q）](https://developer.mozilla.org/zh/docs/Web/CSS/length) 是根据 CSS 像素的数量定义的，并假装一切都是 96dpi。开发者避免使用绝对单位，因为通常使用从字体大小或视窗/容器尺寸派生的单位效果更好。如果用户调整他们的 `辅助功能 > 文本大小` 倍数、缩放浏览器或旋转设备，不匹配的单位可能会破坏布局。不用说，在发布网站之前，你应该做所有这些事情。
