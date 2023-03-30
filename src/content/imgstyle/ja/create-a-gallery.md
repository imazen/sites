---
title: ギャラリーを作成する
description: ウェブサイト上でギャラリーを作成する方法
taskInputHash: 8159c2a6287228bc
lang: ja
---
ウェブサイト上で画像ギャラリーを作成する一般的な手順は以下の通りです：

1. 画像ギャラリー用の新しいHTMLファイルを作成します。 例えば、「gallery.html」と名前をつけることができます。
2. ファイルにHTML構造を追加します。 これには、タイトルや必要なCSSスタイルシートを含むheadセクションと、実際のギャラリーを追加するbodyセクションが通常含まれます。
3. `<div>`タグを使用してギャラリーのコンテナーを作成します。 IDまたはクラスを指定して、後でスタイルを設定できるようにします。
4. コンテナーの内部に、`<img>`タグを使用して個々の画像要素を追加します。 source属性を画像ファイルのパスまたはURLに設定し、必要に応じてaltテキストやキャプションを追加できます。
5. CSSを使用してギャラリーにスタイルを設定します。。 配置や外観を制御するために、display、width、height、margin、padding、borderなどのプロパティを使用できます。

以下は、シンプルな画像ギャラリーを作成するための例コードです。

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Image Gallery</title>
	<style>
		.gallery {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.gallery img {
			width: 300px;
			height: 200px;
			margin: 10px;
			object-fit: cover;
			border: 2px solid black;
		}
	</style>
</head>
<body>
	<div class="gallery">
		<img src="image1.jpg" alt="Image 1">
		<img src="image2.jpg" alt="Image 2">
		<img src="image3.jpg" alt="Image 3">
		<img src="image4.jpg" alt="Image 4">
		<img src="image5.jpg" alt="Image 5">
		<img src="image6.jpg" alt="Image 6">
	</div>
</body>
</html>
```



この例では、ギャラリーコンテナーに「gallery」というクラスがあり、フレックスボックスを使用して画像をグリッド状に配置されるようにスタイルを設定しています。 各画像は、幅300px、高さ200px、余白10px、黒い2pxのボーダーが設定されています。 object-fitプロパティは、画像が同じサイズでなくてもアスペクト比を維持することを確認するために使用されます。

このコードは、特定のニーズやデザインの好みに合わせてカスタマイズできます。
