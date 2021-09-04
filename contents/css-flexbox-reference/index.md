---
title: "CSS Flexbox の使い方を図解30枚で基礎から解説！"
description: "display: flex; で使える、CSS Flexbox の使い方を基礎から徹底的に解説しました。Web制作やWebデザインを行う上で、Flexbox を身につけておくと表現できる幅がとても広がります。Webコーダー・Webデザイナーの方は確実に身に付けた方が良いCSSのスキルですので、この記事で読んでフレックスボックスについて理解を深めてみてください。"
createdAt: "2021-06-24"
updateAt: "2021-09-04"
thumbnail: "./hero.png"
tags: ["CSS", "Flexbox"]
categories: "Webデザイン"
---

## はじめに

この記事では CSS の Flexbox に関する知識や使い方を、基礎から徹底解説していきます。

この Flexbox を理解する上で必要なポイントはたったの **2 つの要素** だけです。  
その 2 つの要素というのは、 **コンテナ要素** と **アイテム要素** です。

それぞれの役割さえ理解することができれば、Flexbox を使い自分の思い通りにレイアウトを構築していく事が可能になります。

## CSS Flexbox とは

Flexbox とは CSS の**レイアウトモジュール**です。  
モジュールとは機能を持つ要素（かたまり）のことです。なので、レイアウトモジュールというとレイアウトの機能を持つ要素と考えることができます。

以下のように複数の要素を横並びにしたり、各デバイスの画面幅によって要素の並び順を変更できるなど、少ないコード量で多彩な表現がかんたんにできます。

![Flexboxを使った横並び](./flexbox-1.jpg)

## Flexbox の基礎

冒頭で少し触れましたが、 Flexbox は**コンテナ要素**（親要素）と**アイテム要素**（子要素）という 2 つの要素によりレイアウトを構成します。考え方としては、以下の図を参照下さい。

![Flexboxのコンテナ要素とアイテム要素](./flexbox-2.jpg)

今はピンとこなくても、徐々に理解できるので **2 つの要素が重要** なんだという事だけを押さえておきましょう。

---

今回の解説に使用するコードは下記になります。

```html:title=解説用のHTMLコード
<div class="container">
	<div class="item-1">1</div>
	<div class="item-2">2</div>
	<div class="item-3">3</div>
</div>
```

```css:title=解説用のCSSコード
/* アイテム要素に適用するCSS */
.container div {
	text-align: center;
	width: 100%;
}
.item-1 {
	background-color: #fca5a5;
}
.item-2 {
	background-color: #fcd34d;
}
.item-3 {
	background-color: #6ee7b7;
}
```

**現在の表示**

![Flexbox解説用コード](./flexbox-3.jpg)

## Flexbox の使い方

Flexbox を使って下記のように縦積みになっている要素を横並びにする方法は非常にシンプルで、**コンテナ要素**（親要素）に対して、`display: flex;` を指定するだけです。

![Flexboxを使う前](./flexbox-3.jpg)

```css{2-4}:title=親要素に指定しているCSSに注目
/* 親要素 */
.container {
	display: flex;
}
/* 子要素 */
.container div {
	text-align: center;
	width: 100%;
}
.item-1 {
	background-color: #fca5a5;
}
.item-2 {
	background-color: #fcd34d;
}
.item-3 {
	background-color: #6ee7b7;
}
```

![Flexboxで要素を横並びにする](./flexbox-3-2.jpg)

このように **コンテナ要素**（親要素）に対して `display: flex;` を指定するだけでアイテム要素（子要素）を横並びにする事ができます。  
それでは、前半部分はコンテナ要素に対して指定できるプロパティとその値について詳しく解説していきます。

## コンテナ要素の初期値

現段階でまったくわからなくても問題ありません。  
ハイライトの箇所は、コンテナ要素に対して `display: flex;` を指定した際、その裏側では初期値として振られているのが以下のプロパティとその値になります。

```css{4-8}:title=コンテナ要素の初期値
.container {
	display: flex;
	/* display: flex; を指定した際、初期値として振られている値 */
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
	flex-wrap: nowrap;
	align-content: stretch;
}
```

Flexbox を理解し使いこなすコツとしては、これら初期値の値をふんわりとでもいいので頭に入れておくことです。

CSS のコード上だと `display: flex;` しか指定されていないので、自分の思い通りのレイアウトが構築出来ない時は初期値の値を確認し、そのレイアウトに対して適切な値がないか調べて実装していくのがコツになります。

それでは次の章から一つずつ解説していきます。

## flex-direction

`flex-direction` は、指定する値によってアイテム要素の方向を指定できたり、アイテム要素の並び順を反転させたりする事ができるプロパティです。

- `flex-direction: row;`（初期値：横並びになる）
- `flex-direction: row-reverse;`（アイテム要素の順序を反転）
- `flex-direction: column;`（縦に積み重なる）
- `flex-direction: column-reverse;`（アイテム要素の順序を反転）

---

- `flex-direction: row;`（初期値：横並びになる）

[コンテナ要素の初期値](#コンテナ要素の初期値) の章で紹介したコンテナ要素のデフォルトの値になります。  
`flex-direction: row;` を指定しても動きに変化はありません。

```css{3}
.container {
	display: flex;
	flex-direction: row;
}
```

![flex-direction: row;](./flexbox-3-2.jpg)

---

- `flex-direction: row-reverse;`（アイテム要素の順序を反転）

先程の `flex-direction: row` ではアイテム要素が右から左に向けて横並びになっていましたが、`flex-direction: row-reverse` はそのアイテム要素の順序を反転させる事ができます。

```css{3}
.container {
	display: flex;
	flex-direction: row-reverse;
}
```

![flex-direction: row-reverse;](./flexbox-3-3.jpg)

---

- `flex-direction: column;`（縦に積み重なる）

`flex-direction: column;` は、アイテム要素を縦積みに配置します。  
見た目だけだと `display: flex;` を指定する前と変化がありませんが、これは `display: flex;` が効いていない訳ではなくあえて指定しています。

```css{3}
.container {
	display: flex;
	flex-direction: column;
}
```

![flex-direction: column;](./flexbox-3.jpg)

この `flex-direction: column;` 、一見すると動きに変化がなく意味が感じられないかと思いますが、レスポンシブ対応する際にその恩恵を受けることができます。

どういうことかといいますと、PC デバイスで閲覧している時は `display: flex;`（アイテム要素の横並び） を指定し、スマホやタブレットデバイスで閲覧している時は横並びではなく、縦積みのレイアウトにしたい、という場面は頻繁に出てくるかと思います。

その際に `flex-direction: column;` （アイテム要素をたて積み）を使用する事で、レスポンシブ対応をかんたんに実現できます。

```css{9}
/* PCデバイスで閲覧している際の指定 */
.container {
	display: flex;
}

/* デバイスサイズが768px以下の場合に適用 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

![flex-direction: column;](./flexbox-3-4.jpg)

---

- `flex-direction: column-reverse;`（アイテム要素の順序を反転）

上記で解説した、`flex-direction: column` のようにアイテム要素を縦積みに配置し、`flex-direction: column-reverse;` はそのアイテム要素の順序を反転させる事ができます。

```css{3}
.container {
	display: flex;
	flex-direction: column-reverse;
}
```

![flex-direction: column-reverse](./flexbox-3-5.jpg)

## flex-wrap

`flex-wrap` は、アイテム要素を 1 行で配置するか、またはアイテム要素を途中で折り返し、複数行で表示するかを指定できるプロパティです。

- `flex-wrap: nowrap;`（初期値：アイテム要素を折り返さない）
- `flex-wrap: wrap;`（アイテム要素の折り返しを指定できる）
- `flex-wrap: wrap-reverse;`（アイテム要素の順序を反転）

折り返しの解説はアイテム要素（子要素）が多い方が理解しやすいので、解説用コードを少し変更します。

```html{5-7}:title=アイテム要素4,5,6を追加
<div class="container">
	<div class="item-1">1</div>
	<div class="item-2">2</div>
	<div class="item-3">3</div>
	<div class="item-4">4</div>
	<div class="item-5">5</div>
	<div class="item-6">6</div>
</div>
```

```css{18-26}:title=アイテム要素4,5,6を追加
.container {
	display: flex;
}
/* 子要素に適用するCSS */
.container div {
	text-align: center;
	width: 100%;
}
.item-1 {
	background-color: #fca5a5;
}
.item-2 {
	background-color: #fcd34d;
}
.item-3 {
	background-color: #6ee7b7;
}
.item-4 {
	background-color: #93c5fd;
}
.item-5 {
	background-color: #c4b5fd;
}
.item-6 {
	background-color: #d1d5db;
}
```

**現在の表示**

![flex-box](./flexbox-3-6.jpg)

---

- `flex-wrap: nowrap;`（初期値：アイテム要素を折り返さない）

[コンテナ要素の初期値](#コンテナ要素の初期値) の章で紹介したコンテナ要素のデフォルトの値になります。  
`flex-wrap: nowrap;` を指定して動きに変化はありません。

`nowrap` という値は **子要素を折り返さない** というコンテナ要素が持っているデフォルトの値で、子要素が途中で折り返す事なく一定の方向に押し込まれます。

```css{3}
.container {
	display: flex;
	flex-wrap: nowrap;
}
```

![flex-wrap: nowrap;](./flexbox-3-6.jpg)

---

- `flex-wrap: wrap;`（アイテム要素の折り返しを指定できる）

`flex-wrap: wrap;` を使用することで、アイテム要素（子要素）の折り返し地点を指定できるようになります。  
一度、現状の解説用コードに `flex-wrap: wrap;` を指定し、その挙動を確認してみます。

```css{3}
.container {
	display: flex;
	flex-wrap: wrap;
}
```

![flex-wrap: wrap;](./flexbox-3-7.jpg)

このように、全てのアイテム要素が縦積みになっているのがわかるかと思います。

なぜこうなるかといいますと、解説用コードの CSS ではすべてのアイテム要素に `width: 100%;` を指定しているからです。

つまり、この段階ではアイテム要素の折り返しの指定は `width: 100%;` （アイテム要素毎の折り返し）ですので、このように縦積みになるという事です。

```css{3,8}:title=現状のアイテム要素の横幅指定に注目
.container {
	display: flex;
	flex-wrap: wrap;
}
/* 子要素に適用するCSS */
.container div {
	text-align: center;
	width: 100%;
}
```

では、6 つあるアイテム要素の `width` の指定を変更して、アイテム要素に折り返しを指定してみます。

```css{8}:title=すベてのアイテム要素の横幅を1/3に指定
.container {
	display: flex;
	flex-wrap: wrap;
}
/* 子要素に適用するCSS */
.container div {
	text-align: center;
	width: calc(100% / 3);
}
```

![flex-wrap: wrap;](./flexbox-3-8.jpg)

```css{8}:title=すベてのアイテム要素の横幅を1/4に指定
.container {
	display: flex;
	flex-wrap: wrap;
}
/* 子要素に適用するCSS */
.container div {
	text-align: center;
	width: calc(100% / 4);
}
```

![flex-wrap: wrap;](./flexbox-3-9.jpg)

このように、`flex-wrap: wrap;` を指定することでアイテム要素の折り返しをかんたんに指定でき、使い慣れていくとより複雑なレイアウトも構築していく事が可能になります。

---

- `flex-wrap: wrap-reverse;`（アイテム要素の順序を反転）

上記で解説した、`flex-wrap: wrap` のようにアイテム要素の折り返しを指定でき、`flex-wrap: wrap-reverse;` はそのアイテム要素の順序を反転させる事ができます。

```css{3,8}:title=すべてのアイテム要素の横幅を1/3に指定
.container {
	display: flex;
	flex-wrap: wrap-reverse;
}
/* 子要素に適用するCSS */
.container div {
	text-align: center;
	width: calc(100% / 3);
}
```

![flex-wrap: wrap-reverse;](./flexbox-3-10.jpg)

```css{3,8}:title=すべてのアイテム要素の横幅を1/4に指定
.container {
	display: flex;
	flex-wrap: wrap-reverse;
}
/* 子要素に適用するCSS */
.container div {
	text-align: center;
	width: calc(100% / 4);
}
```

![flex-wrap: wrap-reverse;](./flexbox-3-11.jpg)

## flex-flow

こちらのプロパティは先程解説した `flex-direction` と `flex-wrap` を一括で指定することができる、ショートハンドプロパティです。

`flex-flow` に関しては独自の動きがあるわけではなく、ショートハンドプロパティとして `flex-flow: row wrap;` のように、2 つのプロパティと値を同時に指定できるようになります。

```css{4,5,10}:title=下記2つのコードは、レイアウト上で動きの変化はありません
/* 省略しない書き方 */
.container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
/* 省略した書き方 */
.container {
	display: flex;
	flex-flow: row wrap;
}
```

こちらは初めから使おうとせず、`flex-direction` と `flex-wrap` に慣れてから使っていくのがおすすめです。

## justify-content

`justify-content` は、アイテム要素の水平ラインの配置や、各アイテム要素の間隔を指定できます。

- `justify-content: flex-start;`（初期値：アイテム要素を先頭に寄せる）
- `justify-content: center;`（アイテム要素を中央に寄せる）
- `justify-content: flex-end;`（アイテム要素を末尾に寄せる）
- `justify-content: space-between;`（その章で詳しく解説します）
- `justify-content: space-around;`（その章で詳しく解説します）
- `justify-content: space-evenly;`（その章で詳しく解説します）

---

こちらの章の解説から CSS コードを少し変更して解説していきます。  
HTML コードは変更ありませんので、引き続きこれまでと同じコードを利用していきます。

- コンテナ要素（親要素）に高さと背景色を追加
- アイテム要素（子要素）に横幅と高さを追加

```css{2,3,9-11}:title=CSS
.container {
	height: 360px;
	background-color: #666;
	display: flex;
}

.container div {
	text-align: center;
	width: 48px;
	height: 48px;
	line-height: 48px;
}

.item-1 {
	background-color: #fca5a5;
}
.item-2 {
	background-color: #fcd34d;
}
.item-3 {
	background-color: #6ee7b7;
}
.item-4 {
	background-color: #93c5fd;
}
.item-5 {
	background-color: #c4b5fd;
}
.item-6 {
	background-color: #d1d5db;
}
```

**現在の表示**

![justify-content;](./justify-1.jpg)

---

- `justify-content: flex-start;`（初期値：アイテム要素を先頭に寄せる）

[コンテナ要素の初期値](#コンテナ要素の初期値) の章で紹介したコンテナ要素のデフォルトの値になります。  
`justify-content: flex-start;` を指定しても動きに変化はありません。

```css{5}:title=初期値
.container {
	height: 360px;
	background-color: #666;
	display: flex;
	justify-content: flex-start;
}
```

![justify-content: flex-start;](./justify-1.jpg)

---

- `justify-content: center;`（アイテム要素を中央に寄せる）

アイテム要素を左右中央寄せにする事ができます。

```css{5}:title=アイテム要素を中央寄せ
.container {
	height: 360px;
	background-color: #666;
	display: flex;
	justify-content: center;
}
```

![justify-content: center;](./justify-2.jpg)

---

- `justify-content: flex-end;`（アイテム要素を末尾に寄せる）

アイテム要素を右寄せにする事ができます。

```css{5}:title=アイテム要素を右寄せ
.container {
	height: 360px;
	background-color: #666;
	display: flex;
	justify-content: flex-end;
}
```

![justify-content: flex-end;](./justify-3.jpg)

---

- `justify-content: space-between;`

`justify-content: space-between;` はアイテム要素の先頭・末尾の要素はコンテナ要素にピッタリくっつき、それ以外のアイテム要素の余白を均等に配置する値です。詳しくは図で解説していきます。

```css{5}
.container {
	height: 360px;
	background-color: #666;
	display: flex;
	justify-content: space-between;
}
```

![justify-content: space-between;](./justify-4.jpg)

---

- `justify-content: space-around;`

`justify-content: space-around;` はアイテム要素の余白を均等にし、先頭・末尾の要素はコンテナ要素との間に各アイテム要素の半分の余白を配置する値です。こちらも詳しくは図で解説していきます。

```css{5}
.container {
	height: 360px;
	background-color: #666;
	display: flex;
	justify-content: space-around;
}
```

![justify-content: space-around;](./justify-5.jpg)

このように両端の余白は、**各アイテム要素の半分の余白** が設けられます。

---

- `justify-content: space-evenly;`

`justify-content: space-evenly;` は全てのアイテム要素の余白が均等に配置される値です。  
こちらの値は先程の `justify-content: space-between;` や `justify-content: space-around;` と比べると直感的に理解できるかと思います。

```css{5}
.container {
	height: 360px;
	background-color: #666;
	display: flex;
	justify-content: space-evenly;
}
```

![justify-content: space-evenly;](./justify-6.jpg)

このように、全てのアイテム要素の余白が均等に配置されます。

## align-items

`align-items` は、アイテム要素の垂直ラインの配置を指定できます。

- `align-items: stretch;`（初期値：アイテム要素の上下の高さを揃える）
- `align-items: flex-start;`（アイテム要素を先頭に寄せる）
- `align-items: center;`（アイテム要素を中央に寄せる）
- `align-items: flex-end;`（アイテム要素を末尾に寄せる）
- `align-items: baseline;`（アイテム要素のテキストのベースラインの位置を合わせる）

---

こちらの章ではアイテム要素の文字数が各要素で差がある方が、より理解できますので少し長くなりますが HTML コードを変更します。

```html:title=HTML
<div class="container">
	<div class="item-1">Lorem ipsum dolor sit.</div>
	<div class="item-2">
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
	</div>
	<div class="item-3">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vel
		officiis impedit?
	</div>
	<div class="item-4">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi modi
		distinctio explicabo amet, ipsam at commodi quo.
	</div>
	<div class="item-5">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat
		pariatur cupiditate autem dicta nihil nostrum assumenda ratione, quo
		perspiciatis excepturi sapiente iusto blanditiis.
	</div>
	<div class="item-6">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam
		dolor nemo ad cum omnis, facilis repudiandae modi placeat blanditiis!
		Asperiores voluptatem debitis sint? Ullam eveniet officiis numquam cum
		facilis.
	</div>
</div>
```

CSS のコードも、高さの指定を取るなど少し変更した箇所があるので、その差分を記載します。  
コメントされている箇所は削除したコードで、ハイライトが当たっている箇所が今回追加した CSS のコードになります。

```css{8}:title=CSSの変更差分
.container {
	/* height: 360px; */
	background-color: #666;
	display: flex;
}

.container div {
	width: 100%;
	/* text-align: center; */
	/* width: 48px; */
	/* height: 48px; */
	/* line-height: 48px; */
}

.item-1 {
	background-color: #fca5a5;
}
.item-2 {
	background-color: #fcd34d;
}
.item-3 {
	background-color: #6ee7b7;
}
.item-4 {
	background-color: #93c5fd;
}
.item-5 {
	background-color: #c4b5fd;
}
.item-6 {
	background-color: #d1d5db;
}
```

**現在の表示**

![align-items](./align-1.jpg)

---

- `align-items: stretch;`（初期値：アイテム要素の上下の高さを揃える）

[コンテナ要素の初期値](#コンテナ要素の初期値) の章で紹介したコンテナ要素のデフォルトの値になります。  
各アイテム要素の文字数はそれぞれ違いますが、高さは統一されているのがわかります。

```css{4}
.container {
	background-color: #666;
	display: flex;
	align-items: stretch;
}
```

![align-items: stretch;](./align-1.jpg)

---

- `align-items: flex-start;`（アイテム要素を先頭に寄せる）

`align-items: flex-start;` はアイテム要素の高さが各要素の高さで表示され、先頭に寄せます。

```css{4}
.container {
	background-color: #666;
	display: flex;
	align-items: flex-start;
}
```

![align-items: flex-start;](./align-2.jpg)

---

- `align-items: center;`（アイテム要素を中央に寄せる）

`align-items: center;` はアイテム要素の高さが各要素の高さで表示され、中央に寄せます。

![align-items: center;](./align-4.jpg)

---

- `align-items: flex-end;`（アイテム要素を末尾に寄せる）

`align-items: flex-end;` はアイテム要素の高さが各要素の高さで表示され、末尾に寄せます。

```css{4}
.container {
	background-color: #666;
	display: flex;
	align-items: flex-end;
}
```

![align-items: flex-end;](./align-3.jpg)

---

- `align-items: baseline;`（アイテム要素のテキストのベースラインの位置を合わせる）

`align-items: baseline;` はアイテム要素の高さが各要素の高さで表示され、テキストのベースラインの位置を合わせます。
詳しくは図で解説していきます。

一度、`align-items: baseline;` を指定してその挙動を確認していきます。

```css{4}
.container {
	background-color: #666;
	display: flex;
	align-items: baseline;
}
```

![align-items: baseline;](./align-2.jpg)

これだと先程解説した `align-items: flex-start;` と同では？と思うかもしれません。  
これは、各アイテム要素には現在、CSS で背景色の指定しかされていなくどの要素にも `padding` や `margin` などの指定が無いためです。

`align-items: baseline;` の挙動を知るために、左から 3 つめの緑色のアイテム要素に対して `padding` と `margin` の指定をしてみます。

```css{3,4}:title=緑色のアイテム要素にのみ余白を指定
.item-3 {
	background-color: #6ee7b7;
	margin-top: 48px;
	padding-top: 100px;
}
```

![align-items: baseline;](./align-5.jpg)

このように、余白を指定したアイテム要素のテキストのベースラインを基準に他のアイテム要素も綺麗に並んでいるのがわかります。

![align-items: baseline;](./align-6.jpg)

## align-content

`align-content` は、アイテム要素の垂直ラインの配置や、各アイテム要素の間隔を指定できます。

- `align-content: stretch;`（初期値：その章で詳しく解説します）
- `align-content: flex-start;`（アイテム要素を先頭に寄せる）
- `align-content: center;`（アイテム要素を中央に寄せる）
- `align-content: flex-end;`（アイテム要素を末尾に寄せる）
- `align-content: space-between;`（その章で詳しく解説します）
- `align-content: space-around;`（その章で詳しく解説します）
- `align-content: space-evenly;`（その章で詳しく解説します）

---

**`aligin-content` の考え方**

先程紹介した `justify-content` とプロパティ名が少し似ているのに気づくかと思います。

`justify-content` はアイテム要素の横軸に影響するプロパティでした。これから解説する `align-content` はアイテム要素の縦軸に影響するプロパティで、それぞれ指定できる値は共通のものが多いです。

値の数が少し多く感じますが、初期値の `align-contenet: stretch;` 以外は `justify-content` と同じ値になっていて、シンプルに `justify-content` の縦バージョンと考えると、すぐに習得できるものです。

---

こちらの章では CSS のコードを少し変更します。  
HTML のコードは上記で解説した [align-items](#code-classlanguage-textalign-itemscode) の章で使用したものをそのまま利用します。

CSS はコンテナ要素に高さを、アイテム要素に幅の指定を追加し、`align-content` はアイテム要素が複数行ある際に使用できるプロパティなので、`flex-wrap` を使用してアイテム要素を折り返す値を指定しています。

`flex-wrap: wrap` を忘れた方は 1 度 [flex-wrap](#code-classlanguage-textflex-wrapcode) の章に戻り、さっと確認してみてください。

```css{4,5,10}:title=CSSの変更差分
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
}

.container div {
	/* width: 100%; */
	width: calc(100% / 3);
}
.item-1 {
	background-color: #fca5a5;
}
.item-2 {
	background-color: #fcd34d;
}
.item-3 {
	background-color: #6ee7b7;
}
.item-4 {
	background-color: #93c5fd;
}
.item-5 {
	background-color: #c4b5fd;
}
.item-6 {
	background-color: #d1d5db;
}
```

**現在の表示**

![align-content](./a-content-1.jpg)

---

- `align-content: stretch;`（初期値）

[コンテナ要素の初期値](#コンテナ要素の初期値) の章で紹介したコンテナ要素のデフォルトの値になります。  
アイテム要素の高さが指定されていない際、アイテム要素はコンテナ要素の高さいっぱいに広がります。

```css{6}
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
	align-content: stretch;
}
```

![align-content: stretch;](./a-content-1.jpg)

---

- `align-content: flex-start;`（アイテム要素を先頭に寄せる）

`align-content: flex-start;` はアイテム要素を先頭（コンテナ要素の上）に寄せます。

```css{6}
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
	align-content: flex-start;
}
```

![align-content: flex-start;](./a-content-2.jpg)

各アイテム要素の文字数が違っても、1 行目の 3 つのアイテム要素の高さは同じで、2 行目の 3 つのアイテム要素の高さも同じになっているのがわかります。

---

- `align-content: center;`（アイテム要素を中央に寄せる）

`align-content: center;` は、アイテム要素を中央に寄せます。

```css{6}
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
	align-content: center;
}
```

![align-content: center;](./a-content-4.jpg)

---

- `align-content: flex-end;`（アイテム要素を末尾に寄せる）

`align-content: flex-end;` はアイテム要素を末尾（コンテナ要素の下）に寄せます。

```css{6}
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
	align-content: flex-end;
}
```

![align-content: flex-end;](./a-content-3.jpg)

---

これから解説する値は行数が多い方が理解しやすい為、アイテム要素を 3 行にして解説していきます。  
それに伴い、CSS コードも少し変更していきます。

```css{10}:title=アイテム要素の横幅を1/3から1/2に変更
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
}

.container div {
	/* width: calc(100% / 3); */
	width: calc(100% / 2);
}
```

**現在の表示**

![align-content](./a-content-5.jpg)

初期値だと `align-content: stretch;` が効いているので、アイテム要素に高さを指定しなくてもコンテナ要素いっぱいに広がっているのがわかります。

---

- `align-content: space-between;`

`align-content: space-between;` はアイテム要素の先頭・末尾の要素はコンテナ要素にピッタリくっつき、それ以外のアイテム要素の余白を均等に配置する値です。詳しくは図で解説していきます。

```css{6}
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
	align-content: space-between;
}
```

![align-content: space-between;](./a-content-6.jpg)

いずれも `justify-content: space-between;` の縦バージョンと考えればすぐ理解できるようになります。

---

- `align-content: space-around;`

`align-content: space-around;` はアイテム要素の余白を均等にし、先頭・末尾の要素はコンテナ要素との間に各アイテム要素の半分の余白を配置する値です。こちらも詳しくは図で解説していきます。

```css{6}
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
	align-content: space-around;
}
```

![align-content: space-around;](./a-content-7.jpg)

---

- `align-content: space-evenly;`

`align-content: space-evenly;` は全てのアイテム要素の余白が均等に配置される値です。  
こちらは直感的に理解しやすい値となっています。

```css{6}
.container {
	background-color: #666;
	display: flex;
	height: 360px;
	flex-wrap: wrap;
	align-content: space-evenly;
}
```

![align-content: space-evenly;](./a-content-8.jpg)

---

CSS Flexbox のコンテナ要素に対しての解説は以上になります。  
次の章からは、Flexbox のアイテム要素に対しての解説をしていきます。

## Flexbox アイテム要素

今回のアイテム要素の解説に使用するコードは下記になります。

```html:title=解説用のHTMLコード
<div class="container">
	<div class="item-1">1</div>
	<div class="item-2">2</div>
	<div class="item-3">3</div>
	<div class="item-4">4</div>
	<div class="item-5">5</div>
	<div class="item-6">6</div>
</div>
```

```css:title=解説用のCSSコード
.container {
	background-color: #666;
	text-align: center;
	display: flex;
}

.container div {
	width: 100%;
}
.item-1 {
	background-color: #fca5a5;
}
.item-2 {
	background-color: #fcd34d;
}
.item-3 {
	background-color: #6ee7b7;
}
.item-4 {
	background-color: #93c5fd;
}
.item-5 {
	background-color: #c4b5fd;
}
.item-6 {
	background-color: #d1d5db;
}
```

**現在の表示**

![Flexboxアイテム要素解説のサンプルコードプレビュー](./sample-preview.jpg)

## アイテム要素の初期値

コンテナ要素（親要素）同様、アイテム要素（子要素）も初期値の値を持っています。

コンテナ要素（親要素）に `display: flex;` が指定されている場合、アイテム要素（子要素）に初期値として振られているのが以下のプロパティとその値です。

```css{3-5}:title=アイテム要素の初期値
/* 上記の解説コードだと .item-1 ~ .item-6 の初期値 */
.item {
	flex-grow: 0;
	flex-shrink: 1;
	flex-basis: auto;
}
```

## order

Flexbox のコンテナ要素の中で、アイテム要素に対して `order: 数値;` と振り分けることで HTML の記述に関わらず、アイテム要素の順序を設定できます。

マイナスの値も指定する事ができます。

```css{3,7,11,15,19,23}
.item-1 {
	background-color: #fca5a5;
	order: 4;
}
.item-2 {
	background-color: #fcd34d;
	order: 6;
}
.item-3 {
	background-color: #6ee7b7;
	/* order を指定しない場合の初期値は0 */
}
.item-4 {
	background-color: #93c5fd;
	order: -1;
}
.item-5 {
	background-color: #c4b5fd;
	order: 2;
}
.item-6 {
	background-color: #d1d5db;
	order: 10;
}
```

![Flexboxアイテム要素にorderを指定した例](./order.jpg)

指定する数値は必ずしも順序よく指定するというルールはありません。  
値で指定した **数値が高い方が優先される** という仕組みなのでしっかり覚えときましょう。

## flex-grow

Flexbox コンテナ内の要素でアイテム要素に対して `flex-grow: 数値;` を指定することで、アイテム要素の伸び率を設定できます。

これから詳しく解説していきますが、`flex-grow` は **余ったスペースを各アイテム要素で分け合う** 際に使うプロパティです。

[アイテム要素の初期値](#アイテム要素の初期値) の章で少し触れましたが、 `flex-grow` の初期値は 0 です。

---

解説用コードのコンテナ要素にしている CSS とアイテム要素全てに対して指定している CSS を変更します。

```css{5,6,11}:title=ハイライトの箇所が追加
.container {
	background-color: #666;
	text-align: center;
	display: flex;
	width: 1200px;
	margin: auto;
}
/* 全てのアイテム要素に width: 100px; を指定 */
.container div {
	/* width: 100%; */
	width: 100px;
}
```

**現在の表示**

![](./grow-1.jpg)

各アイテム要素に対して、`flex-grow` を指定していきます。

```css{3,7,11,15,19,23}
.item-1 {
	background-color: #fca5a5;
	flex-grow: 1;
}
.item-2 {
	background-color: #fcd34d;
	flex-grow: 1;
}
.item-3 {
	background-color: #6ee7b7;
	flex-grow: 2;
}
.item-4 {
	background-color: #93c5fd;
	flex-grow: 2;
}
.item-5 {
	background-color: #c4b5fd;
	flex-grow: 3;
}
.item-6 {
	background-color: #d1d5db;
	flex-grow: 3;
}
```

![flex-grow](./grow-2.jpg)

余ったスペースをアイテム要素で分け合い、コンテナ要素の幅いっぱい広がっているのがわかるかと思います。  
なぜこのような動きになるのか解説していきます。

今回コンテナ要素の横幅は `1200px` で指定し、各アイテム要素の横幅は `100px` で指定したので、全てのアイテム要素の横幅の合計は `600px` で余ったスペースも `600px` でした。

```md
コンテナ幅 - 6 つのアイテム要素合計の横幅 = 余ったスペース
1200px - 600px = 600px
```

この余ったスペース **600px** を **1:2:3** で再分配したということになります。

![flex-growを指定した時の余白の内訳計算](./grow-3.jpg)

- **指定後の各アイテム要素の幅の変化**

| アイテム要素    | 指定前 | 指定後 | 伸びた幅    | 合計        |
| --------------- | ------ | ------ | ----------- | ----------- |
| item-1 , item-2 | 100px  | 150px  | **+ 50px**  | **+ 100px** |
| item-3 , item-4 | 100px  | 200px  | **+ 100px** | **+ 200px** |
| item-5 , item-6 | 100px  | 250px  | **+ 150px** | **+ 300px** |

## flex-shrink

Flexbox コンテナ内の要素でアイテム要素に対して `flex-shrink: 数値;` を指定することで、アイテム要素の縮む率を設定できます。先程の `flex-grow` の逆と考えるとすんなり理解できます。

これから詳しく解説していきますが、`flex-shrink` は **アイテム要素がコンテナ要素の幅より大きい** 際に使うプロパティです。

[アイテム要素の初期値](#アイテム要素の初期値) の章で少し触れましたが、 `flex-shrink` の初期値は 1 です。

---

解説用コードのコンテナ要素にしている CSS とアイテム要素全てに対して指定している CSS を変更します。

```css{5,9}
.container {
	background-color: #666;
	text-align: center;
	display: flex;
	width: 600px;
	margin: auto;
}
/* アイテム要素全てに対して200pxを指定 */
.container div {
	width: 200px;
}
```

**現在の表示**

![flex-shrinkの初期値が反映されている為アイテム要素がはみ出ていない](./shrink-1.jpg)

ここで注目すべき点はコンテナ要素の幅が `600px`、アイテム要素の合計の幅が `1200px` でもコンテナ要素を飛び出さずに縮んで各アイテム要素 `100px`、合計で `600px` になっています。

なぜこうなるかというと、初期値である `flex-shrink: 1;` が全てのアイテム要素に効いてる為です。

比率は、コンテナ要素を飛び出した幅 `600px` を 1 : 1 : 1 : 1 : 1 : 1（100px : 100px : 100px : 100px : 100px : 100px） で各アイテム要素に振り分けています。

---

`flex-shrink` は初期値でも値があり、その動きを確認できましたが応用として各アイテム要素に対して値を指定し、その動きを確認していきます。

```css{3,7,11,15,19,23}
.item-1 {
	background-color: #fca5a5;
	flex-shrink: 1;
}
.item-2 {
	background-color: #fcd34d;
	flex-shrink: 1;
}
.item-3 {
	background-color: #6ee7b7;
	flex-shrink: 2;
}
.item-4 {
	background-color: #93c5fd;
	flex-shrink: 2;
}
.item-5 {
	background-color: #c4b5fd;
	flex-shrink: 3;
}
.item-6 {
	background-color: #d1d5db;
	flex-shrink: 3;
}
```

![flex-shrink](./shrink-2.jpg)

先程の `flex-grow` と違い、値が大きい程要素の幅は縮んでいるのがわかるかと思います。

今回コンテナ要素の横幅は `600px` で指定し、各アイテム要素の横幅は `200px` で指定したので、全てのアイテム要素の横幅の合計は `1200px` で飛び出している幅は `600px` でした。

```md
6 つのアイテム要素合計の横幅 - コンテナ幅 = 飛び出している幅
1200px - 600px = 600px
```

この飛び出している幅 **600px** を **1:2:3** で再分配したということになります。

![flex-shrink](./shrink-3.jpg)

- **指定後の各アイテム要素の幅の変化**

| アイテム要素    | 指定前 | 指定後 | 縮んだ幅    | 合計        |
| --------------- | ------ | ------ | ----------- | ----------- |
| item-1 , item-2 | 200px  | 150px  | **- 50px**  | **- 100px** |
| item-3 , item-4 | 200px  | 100px  | **- 100px** | **- 200px** |
| item-5 , item-6 | 200px  | 50px   | **- 150px** | **- 300px** |

## flex-basis

Flexbox コンテナ内の要素でアイテム要素に対して `flex-basis: 数値;` を指定することで、アイテム要素の横幅を指定することができます。初期値は `flex-basis: auto;` です。

指定できる数値は `width` と同じく `px rem em` や `%` で値を決めることができます。  
`width` との違いは `width` と `flex-basis` を同じアイテム要素に指定した場合、`flex-basis` の値が優先して表示されます。

```css{4}:title=アイテム要素
/* flex-basisの値が優先される */
.item {
	width: 100px;
	flex-basis: 40px;
}
```

## flex

これまで解説した `flex-grow`, `flex-shrink`, `flex-basis` の値を一括で指定できるプロパティです。  
`flex` の初期値はそれぞれのプロパティの初期値の値になります。

```css
.item {
	/* flex: flex-growの値 flex-shrinkの値 flex-basisの値; */
	flex: 0 1 auto;
}
```

## align-self

`align-self` はコンテナ内のアイテム要素に対して指定プロパティで、コンテナ要素で指定できる `align-items` と同じ動きをします。

- `align-self: stretch;`
- `align-self: flex-start;`
- `align-self: center;`
- `align-self: flex-end;`
- `align-self: baseline;`

特徴としては、`align-self` は `align-items` で指定した値より優先度が高くなります。

指定できる値も同じなので解説はコンテナ要素の解説記事で詳しくしているので気になる方はそちらをチェックしてみてください。

## まとめ

CSS Flexbox について、基礎から徹底的に解説しました。

CSS で要素を横並びにする方法は、今回解説した Flexbox 以外にもいくつかありますが、状況に応じて使い分けていくと良いと思います。

今回解説した Flexbox を使ったテクニック等も解説している記事もありますので、気になる方はチェックしてみてください。

**関連記**

- [【コスパ最強】Web デザイン独学の手助けになる学習サイト教えます](../chot-design-study-site/)
- [今すぐ使える！CSS 中央寄せ集](../css-cneter-reference/)
