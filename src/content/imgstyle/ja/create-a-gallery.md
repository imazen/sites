---
taskInputHash: 124b304dd17a4106
title: |-
  記事のタイトルと説明も慎重に翻訳してください。

   ギャラリーを作成する
description: ウェブサイトでギャラリーを作成する方法
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: ja
---
以下は、ウェブサイトで画像ギャラリーを作成する一般的な手順です:

1. 新しいHTMLファイルを作成します。ファイル名を「gallery.html」のように設定できます。
2. ファイルにHTML構造を追加します。通常、これはタイトルや必要なCSSスタイルシートを含むヘッドセクションと、実際のギャラリーを追加するボディセクションを含みます。
3. `<div>`タグを使用してギャラリーのコンテナを作成します。後でスタイルを設定できるように、IDまたはクラスを付けます。
4. コンテナ内に、`<img>`タグを使って個々の画像要素を追加します。画像ファイルパスまたはURLをソース属性に設定し、必要に応じて代替テキストやキャプションを追加します。
5. CSSを使ってギャラリーをスタイリングします。レイアウトや外観を制御するために、display、width、height、margin、padding、およびborderといったプロパティを使用できます。

以下は、シンプルな画像ギャラリーを作成するためのコード例です:

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
			object-fit: cover; /* 画像のアスペクト比を保持する */
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

この例では、ギャラリーコンテナには「gallery」というクラスがあり、flexboxを使用して画像をグリッドに配置しています。各画像の幅は300px、高さは200px、マージンは10px、そして境界線は2pxの黒です。object-fitプロパティは、画像が同じサイズでなくてもアスペクト比を維持するためのものです。

このコードをカスタマイズして、特定のニーズやデザインの好みに合わせることができます。
