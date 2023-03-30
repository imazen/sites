---
title: ギャラリーにタップして全画面表示の機能を追加する方法
description: ギャラリーにタップして全画面表示の機能を追加する方法
taskInputHash: 6d842ebf89621c74
lang: ja
---
ギャラリーに「タップして全画面表示」オプションを追加するには、JavaScriptとCSSを使って、ユーザーが画像をタップすると、画像を全画面モードで表示するオーバーレイを作成します。

以下は使用できる基本的なアプローチです：

1. まず、ギャラリーのコンテナを作成し、表示したいすべての画像を追加します。

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- ここに画像を追加してください -->
</div>
```

2. 次に、CSSを追加してギャラリーと画像をスタイルします。

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

3. 今度はJavaScriptを使用して、各画像にクリックイベントリスナーを追加します。ユーザーが画像をクリックすると、JavaScriptはオーバーレイを作成し、画像を全画面モードで表示します。

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
    
    // 画像要素をオーバーレイに追加
    overlay.appendChild(fullScreenImage);
    
    // オーバーレイをページに追加
    document.body.appendChild(overlay);
  });
});
```

4. 最後に、オーバーレイと全画面画像をスタイルするためのいくつかのCSSを追加します。

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

これらの手順を実行すると、ユーザーがタップすることで画像を全画面表示できるギャラリーを作成することができます。
