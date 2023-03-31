---
title: 完整的CSS参考
description: 带有示例的完整CSS效果参考
taskInputHash: db084e09620978ea
lang: zh
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
这是一个完整的CSS效果和边框参考，您可以对图片应用其中的效果，并带有每个效果的示例：
1. **边框：** 在图像周围添加边框。

```css
img {
  border: 2px solid black;
}
```


2. **盒子阴影：** 在图像周围添加阴影。

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```


3. **不透明度：** 调整图像的透明度。

```css
img {
  opacity: 0.5;
}
```


4. **灰度：** 将图像转换为灰度图。

```css
img {
  filter: grayscale(100%);
}
```


5. **褐色：** 在图像上应用褐色效果。

```css
img {
  filter: sepia(100%);
}
```


6. **模糊：** 模糊图像。

```css
img {
  filter: blur(5px);
}
```


7. **亮度：** 调整图像的亮度。

```css
img {
  filter: brightness(50%);
}
```


8. **对比度：** 调整图像的对比度。

```css
img {
  filter: contrast(200%);
}
```


9. **色相旋转：** 旋转图像的色相。

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **反转：** 反转图像的颜色。

```css
img {
  filter: invert(100%);
}
```


11. **饱和度：** 调整图像的饱和度。

```css
img {
  filter: saturate(200%);
}
```


12. **褐色：** 在图像上应用褐色效果。

```css
img {
  filter: sepia(100%);
}
```


13. **投影：** 在图像周围添加投影效果。

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **过渡：** 为图像添加过渡效果。

```css
img {
  过渡：transform 0.3s ease;
}
img:hover {
  变换：缩放（1.1）;
}
```


15. **动画：** 为图像添加动画效果。

```css
@keyframes slidein {
  从 {
    transform: translateX(100%);
  }
  到 {
    transform: translateX(0);
  }
}
img {
  动画：slidein 1s ease;
}
```



这些只是许多可以应用于图片的CSS效果和边框的几个示例。尝试不同的样式以创建独特和引人注目的设计！
