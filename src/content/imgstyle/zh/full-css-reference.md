---
title: 完整的CSS参考文档
description: 带有示例的效果完整的CSS参考文档
taskInputHash: db084e09620978ea
lang: zh
---
这是一个综合参考，包含了可应用于图像的CSS效果和边框，以及每个样式的示例：

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

4. **灰度：** 将图像转换为灰度。

```css
img {
  filter: grayscale(100%);
}
```

5. **褐色：** 为图像应用褐色效果。

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

12. **褐色：** 为图像应用褐色效果。

```css
img {
  filter: sepia(100%);
}
```

13. **投影阴影：** 为图像添加投影阴影效果。

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```

14. **转换：** 为图像添加转换效果。

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```

15. **动画：** 为图像添加动画效果。

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

这些只是许多可应用于图像的CSS效果和边框的示例。尝试不同的样式，创建独特和引人注目的设计！
