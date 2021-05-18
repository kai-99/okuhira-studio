---
title: "絶対パスと相対パスについての解説！"
description: ""
createdAt: "2021-05-16"
updateAt: "2021-05-16"
thumbnail: "./r0749.png"
tags: ["HTML"]
---

---

この記事は以前作成した以下の記事と一緒に読むとより理解が深まる内容になります。  
まだ以前の記事を読んでいない方、HTML の a タグについて理解が怪しい方は、お先に以下の記事をチェックしてみてください！

[a href とは？a タグに使用する href 属性の使い方について徹底解説！](../what-is-ahref/)

---

## はじめに

絶対パスや相対パスの解説をする前に、 **パス** について解説します。

**パス**とは？

パスとは、表示させたい画像やリンクとして設置したい url 、そのファイルまでの **場所を示す経路** の事です。

HTML で Web サイトのページ作成などをする際、画像やリンクを設置する場合が沢山出てきます。絶対パスと相対パスの解説に入る前に一度、画像の表示とリンクを作成する HTML を**絶対パス**と**相対パス**で書いてみます。

※現段階で理解している必要は全くありません。

```html:title=HTMLで画像を表示させる例（相対パス）
<img src="../images/cat.png" alt="猫の画像">
```

- 実際の表示  
  ![猫の画像](./cat.png)

```html:title=HTMLでリンクを作成する例（絶対パス）
<a href="https://google.com/">Googleの検索ページ</a>
```

- 実際の表示  
  [Google の検索ページ](https://google.com/)

それでは、次の章から絶対パスと相対パスについて解説していきます。

## 前提知識

プログラミングをして Web サイトや、アプリケーションを作る際、拡張子がついたもの（`.text, .html, .css, .js` 等）をファイルと呼び、そのファイルを格納するものを一般的にはフォルダと呼んだりしますが、Web 業界では基本的に**ディレクトリ**と呼びます。

この呼び方は数あるプログラミングの参考書や、Web 業界では共通用語であり、頻繁に使用されるので、しっかり覚えときましょう。

- 階層の示し方

1. ルートディレクトリは`/`もしくは`¥`で表す
1. 同じ階層にあるディレクトリは`./`で表す
1. 親（一階層上の）ディレクトリは`../`で表す

## 絶対パスとは

<mark>http:// ~ </mark>もしくは、<mark>https:// ~ </mark>で指定する url （パス）を**絶対パス**といいます。

```html:title=絶対パスでリンクを指定
<a href="https://google.com/">Googleの検索ページ</a>
```

## 相対パスとは

自分が作業しているフォルダやファイルをスタート地点として、目的のフォルダやファイルまでのゴール地点までの経路示す url（パス）を**相対パス**といいます。

```html:title=相対パスでリンクを指定
<img src="../images/cat.png" alt="猫の画像">
```

上記の例でいうと、自分の作業フォルダから見て一階層上の`images`というフォルダの中にある、`cat.png`を指定していると言うことになります。