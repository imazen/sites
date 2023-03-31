---
title: '`<picture>` 要素を使用した例'
description: レスポンシブイメージ、アートディレクション、異なる画像フォーマットに対して、`<picture>` 要素を使用した例を提供します。
taskInputHash: ec17d7bd226d3aa1
lang: ja
ignore: '/* cSpell:locale ja,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
以下は、`<picture>` 要素を使用した例とその説明です。

1. レスポンシブイメージの例:

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="An image" />
</picture>
```

説明: この例では、`<picture>` 要素を使用して、画面サイズに応じて異なる画像リソースを提供しています。`<source>` 要素は、「srcset」属性を使用して異なる画像リソースを指定し、「media」属性を使用して各リソースを使用する条件を指定します。`<img>` 要素は、古いブラウザー用の代替方法であり、また `<source>` 要素で指定された条件が満たされない場合にも使用されます。

2. アートディレクションの例:

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />
  <img src="image-portrait.jpg" alt="An image" />
</picture>
```

説明: この例では、デバイスの向きに応じて、異なる画像リソースを提供するために、`<picture>` 要素が使用されています。`<source>` 要素は、「media」属性を `(orientation: landscape)` に設定して、ワイドスクリーン用の画像リソースを指定していますが、`<img>` 要素はポートレートスクリーン用の画像リソースを指定しています。

3. 異なる画像フォーマットの例:

```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.png" type="image/png" />
  <img src="image.jpg" alt="An image" />
</picture>
```

説明: この例では、`<picture>` 要素を使用して、異なる画像フォーマット用の異なる画像リソースを提供します。`<source>` 要素は、「srcset」属性と「type」属性を使用して、異なる画像フォーマットを指定した異なる画像リソースを指定します。`<img>` 要素は、`<picture>` 要素をサポートしていない古いブラウザーの代替品として使用されます。

## ブレークポイント

レスポンシブデザインでは、ビューポートのサイズに基づいてウェブサイトやアプリケーションのレイアウトが変更されるタイミングを定義するために、ブレークポイントが使用されます。ブレークポイントは、通常、CSSのメディアクエリを使用して定義され、画面幅に応じて異なるスタイルが適用されます。これらのブレークポイントは、`<picture>` 要素と組み合わせて、異なる画面サイズに対して異なる画像リソースを提供するために使用することができます。

たとえば、最初の例では、`media` 属性を使用して、各リソースが使用されるスクリーン幅を指定しました。スクリーン幅が 768 ピクセル以上の場合、`image-large.jpg` リソースが使用されます。スクリーン幅が 480 ピクセル以上 768 ピクセル未満の場合、`image-medium.jpg` リソースが使用されます。スクリーン幅が 480 ピクセル未満の場合は、`image-small.jpg` リソースが使用されます。これにより、各デバイスに適切なサイズの画像を提供できるため、ページの読み込み時間が短縮され、ユーザー体験が向上します。

ブレークポイントは任意の画面サイズで定義することができ、複数のブレークポイントを使用して、様々なデバイスに対応したレイアウトを作成することができます。ブレークポイントを `<picture>` 要素と組み合わせることで、どんなデバイスでも見栄えが良くフレキシブルでレスポンシブなデザインを作成することができます。
