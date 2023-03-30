---
title: '`<picture>`要素を使用する例'
description: レスポンシブ画像、アートディレクション、異なる画像形式に対して`<picture>`要素を使用する例を提供する
taskInputHash: 4cec70ff1dc4182d
lang: ja
---
以下は、`<picture>`要素を使用する例とその説明です：

1.レスポンシブ画像の例：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="画像" />
</picture>
```

説明：この例では、 `<picture>`要素を使用して、異なる画像ソースを異なる画面サイズに提供するために使用されます。`<source>`要素は、"srcset"属性を使用して異なる画像ソースを指定し、各ソースが使用される条件を指定するために `"media"`属性を使用します。`<img>`要素は、古いブラウザまたは`<source>`要素で指定された条件が満たされない場合のフォールバックとして使用されます。

2.アートディレクションの例：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="画像" />
</picture>
```

説明：この例では、 `<picture>`要素を使用して、デバイスの向きに応じて異なる画像ソースを提供するようになっています。 "media"属性が"(orientation: landscape)"に設定された`<source>`要素は、広いスクリーン用の画像ソースを指定し、`<img>`要素は、縦画面用の画像ソースを指定します。

3.異なる画像形式の例：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="画像" />
</picture>
```

説明：この例では、 `<picture>`要素を使用して、異なる画像フォーマットの異なる画像ソースを提供するようになっています。 `<source>`要素は、"srcset"属性と"type"属性を使用して異なる画像ソースを指定します。`<img>`要素は、`<picture>`要素をサポートしていない古いブラウザのフォールバックとして使用されます。

## ブレークポイント

レスポンシブ設計では、ビューポートのサイズに基づいてWebサイトまたはアプリケーションのレイアウトが変更される条件を定義するために、ブレークポイントが使用されます。ブレークポイントは、通常、CSSのメディアクエリを使用して定義され、画面幅に応じて異なるスタイルが適用されます。これらのブレークポイントは、 `<picture>`要素と組み合わせて、異なる画面サイズのために異なる画像ソースを提供します。

たとえば、最初の例では、 `media`属性を使用して、各ソースが使用される画面幅を指定しました。画面幅が768ピクセル以上の場合、`image-large.jpg`ソースが使用されます。画面幅が480ピクセル以上768ピクセル未満の場合、`image-medium.jpg`ソースが使用されます。画面幅が480ピクセル未満の場合は、 `image-small.jpg`ソースが使用されます。これにより、各デバイスに適したサイズの画像を提供し、ページの読み込み時間を短縮し、ユーザーエクスペリエンスを向上させることができます。

ブレークポイントは、任意の画面サイズで定義でき、複数のブレークポイントを使用して、さまざまなデバイスに対応するレイアウトを作成できます。ブレークポイントを `<picture>`要素と組み合わせることで、どのデバイスでも見栄えの良い、柔軟でレスポンシブなデザインを作成することができます。
