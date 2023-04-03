---
title: ギャラリーを作成する
description: ウェブサイト上でのギャラリー作成方法
taskInputHash: b42135b2bade0c28
lang: ja
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
ウェブサイトに画像ギャラリーを作成する一般的な手順は次のとおりです。
1. 画像ギャラリー用の新しいHTMLファイルを作成します。 "gallery.html"のような名前を付けることができます。
2. ファイルにHTML構造を追加します。これには、タイトルと必要なCSSスタイルシートを含むヘッドセクション、実際のギャラリーを追加するボディセクションが通常含まれます。
3. `<div>`タグを使用してギャラリーのコンテナを作成します。後でスタイルを付けるためにIDまたはクラスを付けます。
4. コンテナ内に、`<img>`タグを使用して個々の画像要素を追加します。ソース属性を画像ファイルパスまたはURLに設定し、必要に応じてaltテキストまたはキャプションを追加できます。
5. CSSでギャラリーにスタイルを適用します。レイアウトや外観を制御するために、表示、幅、高さ、マージン、パディング、ボーダーなどのプロパティを使用できます。

ここに、シンプルな画像ギャラリーを作成するためのサンプルコードがあります。

```html
<!DOCTYPE html>
<html>
<head>
	<title>私の画像ギャラリー</title>
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



この例では、ギャラリーコンテナには "gallery"というクラスが付けられ、flexboxを使用して画像をグリッド状に配置するようにスタイルが設定されています。各画像は、幅が300px、高さが200px、余白が10px、ボーダーが2pxの黒色のものです。プロパティobject-fitを使用して、画像が同じサイズでなくてもアスペクト比を保持するようにしています。

このコードを特定のニーズとデザインの好みに合わせてカスタマイズできます。
