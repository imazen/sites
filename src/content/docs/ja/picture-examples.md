---
taskInputHash: 79f4d51f3d336c6d
title: '`<picture>`要素の使用例'
description: レスポンシブ画像、アートディレクション、異なる画像フォーマットのための`<picture>`要素の使用例を提供します。
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: ja
---
以下は、`<picture>`要素の使用例とその説明です：

1\. レスポンシブ画像の例：

```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)" />
  <source srcset="image-medium.jpg" media="(min-width: 480px)" />
  <img src="image-small.jpg" alt="An image" />
</picture>
```

説明：この例では、`<picture>`要素を使用して、異なる画面サイズに対して異なる画像ソースを提供しています。 `<source>`要素は、"srcset"属性と"media"属性を使用して、各ソースが使用される条件を指定しています。 `<img>`要素は、古いブラウザや`<source>`要素で指定された条件が満たされない場合のフォールバックとして使用されます。

2\. アートディレクションの例：

```html
<picture>
  <source srcset="image-wide.jpg" media="(orientation: landscape)" />

  <img src="image-portrait.jpg" alt="An image" />
</picture>
```

説明：この例では、デバイスの向きに応じて異なる画像ソースを提供するために`<picture>`要素を使用しています。 "media"属性を"(orientation: landscape)"に設定した`<source>`要素は、横向きの画面用の画像ソースを指定し、`<img>`要素は縦向きの画面用の画像ソースを指定します。

3\. 異なる画像フォーマットの例：

```html
<picture>
  <source srcset="image.webp" type="image/webp" />

  <source srcset="image.png" type="image/png" />

  <img src="image.jpg" alt="An image" />
</picture>
```

説明：この例では、異なる画像フォーマットに対して異なる画像ソースを提供するために`<picture>`要素を使用します。 `<source>`要素は、"srcset"属性と"type"属性を使用して画像フォーマットを指定します。 `<img>`要素は、`<picture>`要素をサポートしていない古いブラウザのためのフォールバックとして使用されます。

## ブレイクポイント

レスポンシブデザインでは、ビューポートのサイズに基づいてウェブサイトやアプリケーションのレイアウトを変更するためにブレイクポイントが使用されます。 ブレイクポイントは通常、CSSのメディアクエリを使用して定義され、画面の幅に応じて異なるスタイルを適用します。 これらのブレイクポイントは、`<picture>`要素と組み合わせて、異なる画面サイズに応じた画像ソースを提供するために使用できます。

例えば、上記の最初の例では、`media`属性を使用して、各ソースが使用される画面幅を指定しました。 画面幅が768ピクセル以上の場合、`image-large.jpg`ソースが使用され、画面幅が480ピクセル以上768ピクセル未満の場合、`image-medium.jpg`ソースが使用され、画面幅が480ピクセル未満の場合、`image-small.jpg`ソースが使用されます。 これにより、各デバイスに適したサイズの画像を提供でき、ページの読み込み時間が短縮され、ユーザーエクスペリエンスが向上します。

ブレイクポイントは任意の画面サイズで定義することができ、複数のブレイクポイントを使用して、さまざまなデバイスに対応するレイアウトを作成することができます。 ブレイクポイントと`<picture>`要素を組み合わせることで、どのデバイスでも見栄えの良い、柔軟でレスポンシブなデザインを作成できます。
