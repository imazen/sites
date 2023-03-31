---
title: CSSの完全なリファレンス
description: 効果に対するCSSの完全なリファレンス（例付き）
taskInputHash: 90fc24f78f728a6f
lang: ja
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
以下は画像に適用できるCSSの効果と枠の包括的参照です。各例ごとに例を示します。

1. **Border:** 画像に枠を追加します。

```css
img {
  border: 2px solid black;
}
```

2. **Box Shadow:** 画像の周りに影を追加します。

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

これらは画像に適用できる多くのCSS効果や枠の例の一部にすぎません。さまざまなスタイルを試して、ユニークで目を引くデザインを作成しましょう！
