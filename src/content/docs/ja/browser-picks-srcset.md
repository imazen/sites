---
title: ブラウザが選択する方法
description: '`srcset`属性にリストされた画像からブラウザが選択する方法'
taskInputHash: 4ad7cdb54859d445
lang: ja
ignore: '/* cSpell:locale ja,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
ブラウザは、`srcset`属性にリストされた画像からどの画像を選択するのでしょうか？ デバイスとビューポートに基づき、幅と密度のそれぞれの指定について例を挙げて、ブラウザがどのように決定するかをステップバイステップで説明します。

- HTMLの `srcset`属性を使用する場合、ブラウザは提供されたソースリストから最適な画像を選択するための一連のルールを使用します。これらのルールは、デバイスの表示特性（解像度、ピクセル密度）およびビューポートサイズに依存します。 `srcset`属性を使用すると、幅（ `w`ディスクリプタを使用）またはピクセル密度（ `x`ディスクリプタを使用）に基づいて異なる画像を指定できます。それでは、それぞれのケースについて例を挙げて説明していきましょう。

1\. 幅ディスクリプタ（ `w`）:

次の `srcset`属性を持つ場合を想定します。

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

ブラウザは、次のステップに従います。

a. デバイスのDPR（デバイスピクセル比）を決定します。たとえば、標準ディスプレイのDPRは1であり、高解像度（Retina）ディスプレイのDPRは2以上です。

b. `srcset`内の各画像の効果的な幅を計算します。幅ディスクリプタをDPRで乗算します。DPRが1のデバイスの場合:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. 効果的な幅をビューポート幅と比較します。ビューポート幅が420pxであると仮定します。ブラウザは、効果的な幅がビューポート幅以上の最小の画像を選択します。この場合、 `example-medium.jpg`を選択します。

1\. ピクセル密度ディスクリプタ（ `x`）:

次の `srcset`属性を持つ場合を想定します。


```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

ブラウザは、次のステップに従います。

a. デバイスのDPR（デバイスピクセル比）を決定します。たとえば、標準ディスプレイのDPRは1であり、高解像度（Retina）ディスプレイのDPRは2以上です。

b. デバイスのDPRを `srcset`内の `x`ディスクリプタと比較します。この場合、次のようなディスクリプタを持つ3つの画像があります。

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. デバイスのDPRに最も近い `x`ディスクリプタを持つ画像を選択します。DPRが1のデバイスの場合、ブラウザは `example-1x.jpg`を選択します。DPRが2の場合、 `example-2x.jpg`を選択します。

幅ディスクリプタ（ `w`）を使用する場合、 `srcset`属性と `sizes`属性を組み合わせて、異なるビューポート幅での画像の表示方法に関するより詳細な情報を提供することもできます。これは、特に有用です。以下は例です。

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
