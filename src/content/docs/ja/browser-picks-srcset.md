---
title: ブラウザが選択する方法
description: srcset属性にリストされた画像の間でブラウザが選択する方法
taskInputHash: e33bc9ab3ee1a7e0
lang: ja
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
ブラウザは、srcset属性にリストされた画像のうち、どの画像を選択するかをどうやって決定するのでしょうか？ デバイスとビューポートに基づいて、幅指定と密度指定の両方の例を用いて、ステップバイステップで説明します。

- HTMLでsrcset属性を使用する場合、ブラウザは提供された画像ソースのリストから適切な画像を選択するために一連のルールを使用します。これらのルールはデバイスのディスプレイ特性（解像度、ピクセル密度）とビューポートのサイズの両方に依存します。 `srcset`属性を使用すると、幅（ `w`記述子を使用）またはピクセル密度（ `x`記述子を使用）に基づいて異なる画像を指定できます。各場合について、例を見てみましょう。

1. 幅記述子（ `w`）：

以下の`srcset`属性があるとします。

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

ブラウザは次の手順を実行します。

a. デバイスのDPR（デバイスピクセル比）を決定します。たとえば、標準ディスプレイのDPRは1であり、高解像度（Retina）ディスプレイはDPRが2以上です。

b. `srcset`内の各画像の効果的な幅を計算します。幅記述子にDPRを乗算します。DPRが1のデバイスの場合：

- example-small.jpg：400 \ * 1 = 400px

- example-medium.jpg：800 \ * 1 = 800px

- example-large.jpg：1600 \ * 1 = 1600px

c. 効果的な幅をビューポートの幅と比較します。ビューポートの幅が420 pxであると仮定します。ブラウザは、ビューポートの幅以上の効果的な幅を持つ最小の画像を選択します。この場合、 `example-medium.jpg`が選択されます。

1. ピクセル密度記述子（ `x`）：

以下の `srcset`属性があるとします。

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

ブラウザは次の手順を実行します。

a. デバイスのDPR（デバイスピクセル比）を決定します。たとえば、標準ディスプレイのDPRは1であり、高解像度（Retina）ディスプレイはDPRが2以上です。

b. `x`記述子をsrcset内のデバイスDPRと比較します。この場合、次の記述子がある3枚の画像があります。

- example-1x.jpg：1x

- example-2x.jpg：2x

- example-3x.jpg：3x

c. デバイスのDPRに最も近い `x`記述子を持つ画像を選択します。DPRが1のデバイスの場合、ブラウザは `example-1x.jpg`を選択します。DPRが2のデバイスの場合、 `example-2x.jpg`を選択し、依次類推します。

重要なことは、 `sizes`属性を `srcset`属性と組み合わせて使用し、異なるビューポート幅で画像がどのように表示されるかに関するより詳細な情報を提供できることです。これは、幅記述子（ `w`）を使用する場合に特に便利です。次に例を示します。

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
