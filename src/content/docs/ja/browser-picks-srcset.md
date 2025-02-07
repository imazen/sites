---
taskInputHash: 11d69e37a6905390
title: ブラウザの選択方法
description: ブラウザがsrcset属性に記載された画像の中から選ぶ方法
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: ja
---
ブラウザは、`srcset`属性に記載された画像の中からどのように選択するのでしょうか？ここでは、幅と密度の指定についてのステップバイステップの例を示し、デバイスとビューポートに基づいてブラウザがどのように判断するかを説明します。

- HTMLで`srcset`属性を使用する場合、ブラウザは提供されたソースリストから最適な画像を選択するための一連のルールを使用します。これらのルールは、デバイスの表示特性（解像度、ピクセル密度）とビューポートサイズの両方に依存します。`srcset`属性は、幅（`w`ディスクリプタを使用）またはピクセル密度（`x`ディスクリプタを使用）に基づいて異なる画像を指定することができます。それぞれのケースを例とともに見ていきましょう。

1\. 幅のディスクリプタ（`w`）:

次の`srcset`属性があると仮定します:

```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">
```

ブラウザは次のステップに従います:

a. デバイスのDPR（デバイスピクセル比）を決定します。例えば、標準の表示はDPRが1で、高解像度（Retina）表示はDPRが2以上です。

b. `srcset`内の各画像に対する実効幅を計算します。幅のディスクリプタをDPRで乗算します。DPRが1のデバイスの場合:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. 実効幅をビューポート幅と比較します。ビューポート幅が420pxと仮定します。ブラウザは、実効幅がビューポート幅以上の最小の画像を選択します。この場合、`example-medium.jpg`を選択します。

1\. ピクセル密度のディスクリプタ（`x`）:

次の`srcset`属性があると仮定します:

```html
<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">
```

ブラウザは次のステップに従います:

a. デバイスのDPR（デバイスピクセル比）を決定します。例えば、標準の表示はDPRが1で、高解像度（Retina）表示はDPRが2以上です。

b. `srcset`内の`x`ディスクリプタとデバイスのDPRを比較します。この場合、次のディスクリプタを持つ3つの画像があります:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. デバイスのDPRに最も近い`x`ディスクリプタを持つ画像を選択します。DPRが1の場合、ブラウザは`example-1x.jpg`を選択します。DPRが2の場合は、`example-2x.jpg`を選択するという具合です。

また、`sizes`属性を`srcset`属性と組み合わせて使用し、異なるビューポート幅で画像がどのように表示されるかについての情報を提供することも重要です。これは特に幅のディスクリプタ（`w`）を使用する場合に有効です。以下は例です:

```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,
```
