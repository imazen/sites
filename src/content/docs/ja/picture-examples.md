---
title: '`<picture>` 要素の使用例'
description: レスポンシブ画像、アートディレクション、および異なる画像形式のために `<picture>` 要素を使用する例を提供します。
taskInputHash: be7eddc11abaf63a
lang: ja
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
以下は、`<picture>` 要素を使用する例と説明です。

1\. レスポンシブ画像の例:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="画像" />
</picture>
```

説明: この例では、`<picture>` 要素を使用して、異なる画像ソースを異なる画面サイズに提供する方法を示しています。 `<source>` 要素は、各ソースが使用される条件を指定するために「srcset」属性と「media」属性を使用して、異なる画像ソースを指定します。`<img>` 要素は、古いブラウザーまたは `<source>` 要素で指定された条件が満たされない場合のフォールバックとして使用されます。

2\. アートディレクションの例:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="画像" />
</picture>
```

説明: この例では、 `<picture>` 要素を使用して、デバイスの向きに応じて異なる画像ソースを提供する方法を示しています。 `media` 属性が `(orientation: landscape)` に設定された `<source>` 要素は、ワイド画面用の画像ソースを指定し、`<img>` 要素はポートレート画面用の画像ソースを指定します。

3\. 異なる画像形式用の例:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.png" type="image/png" />
  <img src="image.jpg" alt="画像" />
</picture>
```

説明: この例では、 `<picture>` 要素を使用して、異なる画像形式用の異なる画像ソースを提供する方法を示しています。 `<source>` 要素は、`srcset` 属性と `type` 属性を使用して、異なる画像形式用の異なる画像ソースを指定します。`<img>` 要素は、 `<picture>` 要素をサポートしていない古いブラウザーのフォールバックとして使用されます。

## ブレークポイント

レスポンシブデザインでは、ブレークポイントを使用してビューポートのサイズに基づいてウェブサイトやアプリケーションのレイアウトが変更されるタイミングを定義します。ブレークポイントは通常、CSS内のメディアクエリを使用して定義され、画面幅に応じて異なるスタイルが適用されます。これらのブレークポイントは `<picture>` 要素と組み合わせて、異なる画面サイズ用の異なる画像ソースを提供するために使用することができます。

例えば、上記の最初の例では、`media` 属性を使用して、各ソースが使用される画面幅を指定しました。画面幅が768ピクセル以上の場合、`image-large.jpg`ソースが使用されます。画面幅が480ピクセル以上768ピクセル未満の場合、`image-medium.jpg`ソースが使用されます。画面幅が480ピクセル未満の場合、`image-small.jpg`ソースが使用されます。これにより、各デバイス用に適切なサイズの画像を提供し、ページ読み込み時間を短縮し、ユーザー体験を向上させることができます。

ブレークポイントは任意の画面サイズで定義でき、複数のブレークポイントを使用して、幅広いデバイスに対応したレイアウトを作成することができます。 `<picture>` 要素とブレークポイントを組み合わせることで、どのデバイスでも素晴らしい見た目の柔軟でレスポンシブなデザインを作成できます。
