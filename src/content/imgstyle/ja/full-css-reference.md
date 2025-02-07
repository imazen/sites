---
taskInputHash: 588ca6cc9244e1d2
title: |-
  記事のタイトルと説明も注意深く翻訳してください:

   完全なCSSリファレンス
description: エフェクトのための完全なCSSリファレンス（例付き）
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: ja
---
以下は、画像に適用できるCSSエフェクトとボーダーの包括的なリファレンスです。それぞれの例も紹介しています：

1. **ボーダー:** 画像の周りにボーダーを追加します。

```css
img {
  border: 2px solid black;
}
```


2. **ボックスシャドウ:** 画像の周りに影を追加します。

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```


3. **不透明度:** 画像の透明度を調整します。

```css
img {
  opacity: 0.5;
}
```


4. **グレースケール:** 画像をグレースケールに変換します。

```css
img {
  filter: grayscale(100%);
}
```


5. **セピア:** 画像にセピア効果を適用します。

```css
img {
  filter: sepia(100%);
}
```


6. **ぼかし:** 画像をぼかします。

```css
img {
  filter: blur(5px);
}
```


7. **明るさ:** 画像の明るさを調整します。

```css
img {
  filter: brightness(50%);
}
```


8. **コントラスト:** 画像のコントラストを調整します。

```css
img {
  filter: contrast(200%);
}
```


9. **色相回転:** 画像の色相を回転します。

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **反転:** 画像の色を反転させます。

```css
img {
  filter: invert(100%);
}
```


11. **彩度:** 画像の彩度を調整します。

```css
img {
  filter: saturate(200%);
}
```


12. **セピア:** 画像にセピア効果を適用します。

```css
img {
  filter: sepia(100%);
}
```


13. **ドロップシャドウ:** 画像にドロップシャドウ効果を追加します。

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **トランジション:** 画像にトランジション効果を追加します。

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```


15. **アニメーション:** 画像にアニメーション効果を追加します。

```css
@keyframes slidein {
  from {
    transform: translateX(100%); // 右からスライドイン
  }
  to {
    transform: translateX(0); // 元の位置
  }
}
img {
  animation: slidein 1s ease;
}
```


これらは、画像に適用できる多くのCSSエフェクトとボーダーのほんの一部です。さまざまなスタイルを試して、ユニークで目を引くデザインを作成してみてください！
