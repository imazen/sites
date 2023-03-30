---
title: CSSの完全なリファレンス
description: エフェクト用のCSS完全リファレンス（例付き）
taskInputHash: 90fc24f78f728a6f
lang: ja
---
以下には、画像に適用できる多数の CSS エフェクトとボーダーの総合リファレンスがあります。それぞれの例も示します:

1. **Border:** 画像の周りにボーダーを追加します。

```css
img {
  border: 2px solid black;
}
```


2. **Box Shadow:** 画像の周りにシャドウを追加します。

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```


3. **Opacity:** 画像の透明度を調整します。

```css
img {
  opacity: 0.5;
}
```


4. **Grayscale:** 画像をグレースケールに変換します。

```css
img {
  filter: grayscale(100%);
}
```


5. **Sepia:** 画像にセピア効果を適用します。

```css
img {
  filter: sepia(100%);
}
```


6. **Blur:** 画像をぼかします。

```css
img {
  filter: blur(5px);
}
```


7. **Brightness:** 画像の明るさを調整します。

```css
img {
  filter: brightness(50%);
}
```


8. **Contrast:** 画像のコントラストを調整します。

```css
img {
  filter: contrast(200%);
}
```


9. **Hue Rotate:** 画像の色相を回転させます。

```css
img {
  filter: hue-rotate(90deg);
}
```


10. **Invert:** 画像の色を反転させます。

```css
img {
  filter: invert(100%);
}
```


11. **Saturate:** 画像の彩度を調整します。

```css
img {
  filter: saturate(200%);
}
```


12. **Sepia:** 画像にセピア効果を適用します。

```css
img {
  filter: sepia(100%);
}
```


13. **Drop-Shadow:** 画像にドロップシャドウ効果を追加します。

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```


14. **Transition:** 画像にトランジション効果を追加します。

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```


15. **Animation:** 画像にアニメーション効果を追加します。

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



これらは、画像に適用できる多数の CSS エフェクトとボーダーのわずかな例です。様々なスタイルを試して、独自の目を引くデザインを作成してみてください!
