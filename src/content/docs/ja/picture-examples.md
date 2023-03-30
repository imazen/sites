---
title: '`<picture>` 要素を使用する例'
description: レスポンシブイメージ、アートディレクション、異なる画像形式に対して、 `<picture>` 要素を使用するための例を提供します。
taskInputHash: 4cec70ff1dc4182d
lang: ja
---
以下は、 `<picture>` 要素を使用する例とその説明です。

1.レスポンシブイメージの例：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="An image" />
</picture>
```

説明：この例では、 `<picture>` 要素を使用して、異なる画面サイズに対して異なる画像ソースを提供するために使用されます。 `<source>` 要素は "srcset" 属性と "media" 属性を使用して、使用する各ソースの条件を指定します。 `<img>` 要素は、古いブラウザや `<source>` 要素で指定された条件が満たされない場合のフォールバックとして使用されます。

2.アートディレクションの例：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />
  <img src="image-portrait.jpg" alt="An image" />
</picture>
```

説明：この例では、 `<picture>` 要素を使用して、デバイスの向きに応じて異なる画像ソースを提供するために使用されます。 "media" 属性が "(orientation: landscape)" に設定された `<source>` 要素は、広いスクリーン用のイメージソースを指定し、 `<img>` 要素は縦長のスクリーン用のイメージソースを指定します。

3.異なる画像形式の例：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.png" type="image/png" />
  <img src="image.jpg" alt="An image" />
</picture>
```

説明：この例では、 `<picture>` 要素を使用して、異なる画像形式用に異なる画像ソースを提供するために使用されます。 `<source>` 要素は "srcset" 属性と "type" 属性を使用して、画像形式を指定します。 `<img>` 要素は、 `<picture>` 要素をサポートしていない古いブラウザのためのフォールバックとして使用されます。

## ブレークポイント

レスポンシブデザインでは、ブレークポイントを使用して、ビューポートのサイズに基づいてウェブサイトやアプリケーションのレイアウトが変更されるタイミングを定義します。ブレークポイントは、通常、CSSのメディアクエリを使用して定義されます。これは、画面幅に応じて異なるスタイルを適用します。これらのブレークポイントは、 `<picture>` 要素と組み合わせて、異なる画面サイズのために異なる画像ソースを提供するために使用できます。

たとえば、最初の例では、 `media` 属性を使用して、各ソースが使用される画面幅を指定しました。画面の幅が768ピクセル以上の場合、 `image-large.jpg` ソースが使用されます。画面の幅が768ピクセル以上480ピクセル未満の場合、 `image-medium.jpg` ソースが使用されます。画面の幅が480ピクセル以下の場合、 `image-small.jpg` ソースが使用されます。これにより、各デバイスに適したサイズの画像を提供し、ページの読み込み時間を短縮し、ユーザーエクスペリエンスを向上させることができます。

ブレークポイントは、任意の画面サイズで定義でき、複数のブレークポイントを使用して、幅広いデバイスに応じたレイアウトを作成することができます。ブレークポイントを `<picture>` 要素と組み合わせることで、あらゆるデバイスで素晴らしい見た目の、柔軟でレスポンシブなデザインを作成できます。
