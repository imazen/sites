---
title: ギャラリーにタップして全画面表示のオプションを追加する
description: ギャラリーにタップして全画面表示のオプションを追加する方法
taskInputHash: 6d842ebf89621c74
lang: ja
---
以下のmarkdownの装飾を保持したまま日本語に翻訳してください。
html要素やURLは翻訳しないでください。ただし、リンク先の 'en' を 'ja' に変更してください。コードブロック内では、コメントのみ翻訳してください。

ギャラリーに「タップして全画面表示」オプションを追加するには、JavaScriptとCSSを使用して、ユーザーがそれをタップすると画像をフルスクリーンモードで表示するオーバーレイを作成します。

次に使える基本的な方法を示します。
1. まず、ギャラリーのコンテナを作成し、表示するすべての画像を追加してください。

```html
<div class="gallery">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
  <!-- add more images here -->
</div>
```

2. 次に、CSSを追加してギャラリーと画像のスタイルを設定します。

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

3. 次に、JavaScriptを使って各画像にクリックイベントリスナーを追加します。ユーザーが画像をクリックすると、JavaScriptはオーバーレイを作成し、画像をフルスクリーンモードで表示します。

```javascript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // create overlay　オーバーレイの作成
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // create image element　イメージ要素の作成
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.classList.add('full-screen-image');

    // add image element to overlay　イメージ要素をオーバーレイに追加
    overlay.appendChild(fullScreenImage);

    // add overlay to page　ページにオーバーレイを追加
    document.body.appendChild(overlay);
  });
});
```

4. 最後に、オーバーレイとフルスクリーンイメージのスタイルを設定するCSSを追加してください。

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

これらの手順を実行すると、ユーザーがタップして画像を全画面表示できるギャラリーができます。
