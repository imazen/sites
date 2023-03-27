---
title: <picture>要素の例
description: 応答画像、アートディレクション、および異なる画像フォーマットの例を提供する<picture>要素の使用例
taskInputHash: f0da7d04fc418896
lang: ja
---
複数の例を使用して、<picture>要素の使用方法を簡潔に説明します。

1\. Responsive images（応答画像）の例：

```html
 <picture>
   <source srcset="image-large.jpg" media="(min-width: 768px)" />
   <source srcset="image-medium.jpg" media="(min-width: 480px)" />
   <img src="image-small.jpg" alt="An image" />
 </picture>
```

説明：この例では、<picture>要素を使用して、異なる画像ソースを異なる画面サイズに提供します。  <source>要素は、 各リソースが使用される条件を指定する "srcset"属性および"media"属性を使用して、異なる画像ソースを指定します。   <img>要素は、古いブラウザーまたは<source>要素で指定された条件が満たされない場合のフォールバックとして使用されます。 

2\. Art direction（アートディレクション）の例：

```html
 <picture>
   <source srcset="image-wide.jpg" media="(orientation: landscape)" />
   <img src="image-portrait.jpg" alt="An image" />
 </picture>
```

説明：この例では、<picture>要素を使用して、デバイスの向きに応じて異なる画像ソースを提供します。  "media"属性が"(orientation: landscape)"に設定された<source>要素は、ワイドスクリーン用の画像ソースを指定し、<img>要素はポートレートスクリーン用の画像ソースを指定します。

3\. 異なる画像フォーマットの例：

```html
 <picture>
   <source srcset="image.webp" type="image/webp" />
   <source srcset="image.png" type="image/png" />
   <img src="image.jpg" alt="An image" />
 </picture>
```

説明：この例では、<picture>要素を使用して、異なる画像フォーマット用の異なる画像ソースを提供します。  <source>要素は、異なる画像フォーマットを指定する "type"属性と"srcset"属性を使用して、異なる画像ソースを指定します。  <img>要素は、<picture>要素をサポートしていない古いブラウザーのフォールバックとして使用されます。
