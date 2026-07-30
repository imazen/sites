---
taskInputHash: 190f900bcb01824b
title: ブラウザが選択する方法
description: ブラウザが`srcset`属性にリストされた画像から選択する方法
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: ja
---
ブラウザは、`srcset` 属性にリストされた画像の中からどのように選ぶのか？ここではステップバイステップで説明します。幅と密度の指定例と、デバイスおよびビューポートに基づくブラウザの選択方法について紹介します。

- HTMLの`srcset`属性を使用する際、ブラウザは提供されたソースのリストから最も適切な画像を選ぶために一連のルールを使用します。これらのルールは、デバイスの表示特性（解像度、ピクセル密度）とビューポートサイズの両方に依存します。`srcset`属性を使用すると、幅（`w`記述子を使用）またはピクセル密度（`x`記述子を使用）に基づいて異なる画像を指定できます。各ケースについて例を交えて解説します。

1\. 幅指定子（`w`）:

以下のような`srcset`属性があるとします：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

ブラウザは次のステップに従います：

a. デバイスのDPR（Device Pixel Ratio）を判定します。例えば、標準ディスプレイのDPRは1ですが、高解像度（Retina）ディスプレイはDPRが2以上です。

b. `srcset`内の各画像の有効幅を計算します。幅記述子にDPRを掛けます。DPRが1のデバイスでは：

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. ビューポート幅と有効幅を比較します。ビューポート幅が420pxと仮定します。ブラウザはビューポート幅以上の有効幅を持つ最小の画像を選びます。この場合、`example-medium.jpg`が選ばれます。

2\. ピクセル密度指定子（`x`）:

以下のような`srcset`属性があるとします：

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

ブラウザは次のステップに従います：

a. デバイスのDPR（Device Pixel Ratio）を判定します。例えば、標準ディスプレイのDPRは1ですが、高解像度（Retina）ディスプレイはDPRが2以上です。

b. `srcset`内の`x`記述子とデバイスのDPRを比較します。このケースでは、次の記述子を持つ3つの画像があります：

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. デバイスのDPRに最も近い`x`記述子を持つ画像を選びます。DPRが1のデバイスでは、ブラウザは`example-1x.jpg`を選びます。DPRが2の場合、それは`example-2x.jpg`を選びます、といった具合です。

幅指定子（`w`）を使用する場合、`srcset`属性と組み合わせて`sizes`属性を使用することで、異なるビューポート幅における画像の表示方法についてさらに情報を提供できます。以下のようにすると特に有用です：

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw, 

```
