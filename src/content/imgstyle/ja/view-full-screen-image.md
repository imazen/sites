---
taskInputHash: 2871f87881b015d1
title: ギャラリーに「フルスクリーン画像を表示するためにタップ」を追加
description: ギャラリーに「フルスクリーン画像を表示するためにタップ」オプションを追加する方法
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: ja
---
ギャラリーに「フルスクリーン画像を表示するためにタップ」オプションを追加するには、JavaScriptとCSSを使用してオーバーレイを作成し、ユーザーが画像をタップしたときにフルスクリーンモードで画像を表示します。

ここに基本的なアプローチを示します：
1. まず、ギャラリー用のコンテナを作成し、表示したいすべての画像を追加します。

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- ここにさらに画像を追加 -->
</div>
```


2. 次に、ギャラリーと画像をスタイルするためのCSSを追加します。

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


3. 次に、JavaScriptを使用して各画像にクリックイベントリスナーを追加します。ユーザーが画像をクリックすると、JavaScriptがオーバーレイを作成し、画像をフルスクリーンモードで表示します。

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // オーバーレイを作成
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // 画像要素を作成
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');
    
    // オーバーレイに画像要素を追加
    overlay.appendChild(fullScreenImage);
    
    // ページにオーバーレイを追加
    document.body.appendChild(overlay);
  });
});
```


4. 最後に、オーバーレイとフルスクリーン画像をスタイルするためのCSSを追加します。

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



これらの手順により、ユーザーが画像をタップすることでフルスクリーンモードで画像を表示できるギャラリーが作成されます。
