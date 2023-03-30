---
title: 在画廊中添加点击查看全屏图像
description: 如何在画廊中添加点击查看全屏图像选项
taskInputHash: 8908aa00b38b1728
lang: zh
---
要为画廊添加“点击查看全屏图像”的选项，可以使用JavaScript和CSS创建一个覆盖层，在用户点击图像时显示全屏模式下的图像。

这里是你可以使用的基本方法：
1. 首先，创建一个画廊的容器并添加要显示的所有图像。

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- 在此添加更多图像 -->
</div>
```


2. 接下来，添加一些CSS来为画廊和图像设置样式。

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery img {
  width: 100%;
  height: auto;
  margin: 5px;
}
```


3. 现在，使用JavaScript为每个图像添加单击事件侦听器。当用户单击图像时，JavaScript会创建一个覆盖层，并以全屏模式显示图像。

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // 创建覆盖层
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // 创建图像元素
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // 将图像元素添加到覆盖层中
    overlay.appendChild(fullScreenImage);
    
    // 将覆盖层添加到页面中
    document.body.appendChild(overlay);
  });
});
```


4. 最后，添加一些CSS来为覆盖层和全屏图像设置样式。

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-screen-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```



通过这些步骤，您现在应该有一个画廊，允许用户通过点击来在全屏模式下查看图像。
