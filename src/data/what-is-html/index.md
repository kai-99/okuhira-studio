---
title: "【初学者必見！】HTMLとは？HTMLの役割とHTMLタグを理解しよう"
description: "『HTML』とは？HTMLの役割や、HTMLの立ち位置や基本的な使用用途、Webサイトを作成する上で必須となる知識を初学者の方でも理解できるように、解説していきます。"
createdAt: "2021-05-03"
updateAt: "2021-05-04"
thumbnail: "./html-hero.jpg"
tags: ["HTML"]
---

## HTML とは？

先に結論を述べますと、Web サイトの<mark>文章や構造に意味を持たせる言語</mark>です。

普段私たちが目にしている Web サイトのほとんどは HTML で作られており、今みているこの Web サイトも HTML で作られています。  
例えば、ここの文字はサイトのタイトルですよ！ここには画像を設置します！だったり、ここの文字はリンクですよ！クリックすると指定したリンクに飛びますよ！といった形で、コンピューターが理解できるように文章を<mark>マークアップ</mark>するのが HTML の役割になります。

**HTML**の読み方は 『**エイチティーエムエル**』 で、  
**H**yper**T**ext **M**arkup **L**anguage の略称で HTML と呼ばれています。  
HyperText Markup Language を直訳すると、先程冒頭で述べたように**文章をマークアップする言語**ということになります。

**この章のまとめ**

1. HTML とは文章に意味や構造をもたすマークアップ言語
1. 普段目にしている Web サイトのほとんどは HTML で作成されている

## HTML のタグ

この章では HTML の基本のタグとその意味について解説していきます。  
きっと HTML のコードを初めてみる初学者の方はこんなの覚えれるわけない！！  
と思いますが、安心してください。しっかり解説していくのでがんばりましょう！

以下のコードは HTML でサイトを作る上で最低限必要な HTML の基本型となります。  
初めて見るかたは意味がわからないと思いますが、以降一行ずつしっかり解説していきます。

```html:title=このコードが最低限必要なHTMLの基本型となります
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
	<body>
		<h1>見出し</h1>
		<p>テキスト</p>
	</body>
</html>
```

## 文書型宣言

文書型宣言、DOCTYPE 宣言といいます。  
`<!DOCTYPE html>`⇦ このタグ以下は HTML 文章です！と宣言するタグになります。

```html{1}
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
	<body>
		<h1>見出し</h1>
		<p>テキスト</p>
	</body>
</html>
```

<mark>補足</mark>
現在の HTML のバージョンは<mark>HTML5</mark>ですが、HTML5 に至るまでには数々のバージョンアップを経て、今の HTML5 があります。  
バージョンによって DOCTYPE 宣言の仕方は数種類程ありますが、現在の HTML5 ではこの書き方が推奨されていますので、`<!DOCTYPE html>`という書き方さえ覚えていれば問題ないと考えて捉えてよいと思います。

## 言語設定

`<html lang="ja">` はそのサイトで使用する言語を指定する属性になります。  
**lang="ja"** というのは日本語表記を指定していることになります。

```html{2,11}
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
	<body>
		<h1>見出し</h1>
		<p>テキスト</p>
	</body>
</html>
```

ちなみに、`<html lang="en">`だと英語表記を指定することになります。

```html{2}
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
	<body>
		<h1>見出し</h1>
		<p>テキスト</p>
	</body>
</html>
```

![lang属性がenだった場合の初期表示](./html-lang.png)

英語圏の Web サイトを閲覧した際、上記のような表示が出た経験がある方は多いのではないでしょうか。  
これはつまり、上記のように`<html lang="en">`と指定されたサイトになります。

## メタ情報の設定

この`<head></head>`で囲まれた所は、実際のブラウザには表示されない箇所になります。  
何を記述する箇所かというと、そのサイトの情報をブラウザに伝える為に記述する箇所になります。

```html{3-6}
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
	<body>
		<h1>見出し</h1>
		<p>テキスト</p>
	</body>
</html>
```

- 文字コードの指定

```html{2}
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
```

- タイトルの設定

```html{3}
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
```

![htmlのタイトル](./html-title.png)

## HTML を画面表示

ハイライトの箇所が<mark>画面に表示される</mark>コードの記述

```html{7-10}
<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="UTF-8" />
		<title>HTMLとは</title>
	</head>
	<body>
		<h1>見出し</h1>
		<p>テキスト</p>
	</body>
</html>
```

![htmlのプレビュー](./html-preview.png)
