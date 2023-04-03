---
title: 完整的CSS参考手册
description: 带有例子的效果完整的CSS参考手册
taskInputHash: d25ec13d77337801
lang: zh
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
这里是可以应用到图片的CSS效果和边框的综合参考，每个都附有例子:
1. **Border:** 在图片周围添加边框。

```css
img {
  border: 2px solid black;
}
```


2. **Box Shadow:** 在图片周围添加阴影。

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```


3. **Opacity:** 调整图片的透明度。

```css
img {
  opacity: 0.5;
}
```


4. **Grayscale:** 将图片转换为灰度图像。

```css
img {
  filter: grayscale(100%);
}
```


5. **Sepia:** 给图片应用一个复古效果。

```css
img {
  filter: sepia(100%);
}
```


6. **Blur:** 使图片变模糊。

```css
img {
  filter: blur(5px);
}
```


7. **Brightness:** 调整图片的亮度。

```css
img {
  filter: brightness(50%);
}
```


8. **Contrast:** 调整图片的对比度。

```css
img {
  filter: contrast(200%);
}
```


9. **Hue Rotate:** 旋转图像的色相。

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **Invert:** 反转图像颜色。

```css
img {
  filter: invert(100%);
}
```


11. **Saturate:** 调整图像的饱和度。

```css
img {
  filter: saturate(200%);
}
```


12. **Sepia:** 给图片应用一个复古效果。

```css
img {
  filter: sepia(100%);
}
```


13. **Drop-Shadow:** 在图像周围添加一个投影效果。

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **Transition:** 在图像上添加过渡效果。

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```


15. **Animation:** 在图像上添加动画效果。

```css
@keyframes slidein {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
img {
  animation: slidein 1s ease;
}
```



这些只是应用于图片的许多CSS效果和边框中的一些例子。尝试不同的样式来创建独特而引人注目的设计！
