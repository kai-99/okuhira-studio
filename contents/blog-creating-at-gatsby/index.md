---
title: "Gatsby.js + Tailwind CSS で爆速なブログ作ってみた"
description: "静的サイトジェネレータのGatsby.jsとCSSフレームワークのTailwind CSSという構成で表示速度の早いブログを作成しました。この記事ではブログを作る際に使用した技術周りの事や、参考になるリンクを紹介しています。"
createdAt: "2021-06-20"
updateAt: "2021-06-20"
thumbnail: "./hero.png"
tags: ["Gatsby.js", "Tailwind CSS"]
categories: "プログラミング"
---

## はじめに

タイトルの通り、つい最近 Gatsby.js と Tailwind CSS の構成でブログを作成しました。  
その最中で工夫した点や参考リンク等をまとめましたので、この記事を読みに来てくれた方の参考になれば幸いです。

## 主要技術

このブログで使用している主要な技術周りについて軽く概要だけ触れます。  
概要だけ触れる理由としては、Gatsby.js やその周りのエコシステムの踏み込んだ内容は既にインターネット上に良質な記事が沢山あり、そちらを参考にする方が良いからです。  
参考リンクはこの記事の最後の章に記載しています。

**フレームワーク**

- [Gatsby.js](https://www.gatsbyjs.com/)

React ベースで作られた静的サイトジェネレータです。  
豊富なプラグインが用意されており、必要な機能に応じてプラグインを導入することで柔軟に拡張することが出来ます。  
おすすめのプラグインに関しては、今後別の記事で紹介したいと思います。

- [Tailwind CSS](https://tailwindcss.com/)

昨今賑わっているユーティリティーファーストの CSS フレームワークです。  
色々意見が分かれるかと思いますが、私はとても使いやすく今後も採用していきたいと思っています。

先日 2021 年 6 月 17 日、[Tailwind CSS v2.2](https://blog.tailwindcss.com/tailwindcss-2-2) がリリースされたと同時に、v2.1 -> v2.2 にアップデートしました。  
魅力的な機能がいくつか追加されたので、そこら辺は今後別の記事で紹介したいと思います。

**アイコン**

- [Font Awesome](https://fontawesome.com/v5.15/icons)

有料アイコンもありますが、ある程度無料の範囲内 で使える有名な SVG アイコンです。  
現状 Twitter 等のブランドロゴのみ使用していて、それ以外の SVG アイコンは heroicons を使用しています。

- [heroicons](https://heroicons.com/)

> Beautiful hand-crafted SVG icons,  
> by the makers of Tailwind CSS.
> <cite>[heroicons](https://heroicons.com/) 公式より引用</cite>

Tailwind CSS が作成している SVG アイコンで、相性が良かったので選択しました。

**ホスティング**

- [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/)

Netlify や Vercel、Cloudflare Pages の記事が多かったですが、今後のアップデート等の期待も含め Gatsby Cloud を選択しました。  
デプロイ後に Gatsby Cloud のダッシュボードにて、Lighthouse のスコアが自動で計測後、スコアが表示されるので極端にスコアが低い場合の異変等に気付きやすいと思いました。

**その他**

記事の作成は CMS を使用せず、Markdown で記述しています。  
今後 CMS を導入する機会があれば、日本製ヘッドレス CMS の [micro CMS](https://microcms.io/) を検討しています。

## 工夫した点

- ページ遷移時のアニメーション

SPA で構築されており、内部リンクのページ遷移がはやい分変わったことに気づきにくいので、ページ遷移時にはコンテンツ領域にのみ CSS でアニメーションを付与しました。

```jsx{4}:title=LayoutComponent
return (
	<div>
		<Header />
		  <main className="fadein">{props.children}</main>
		<Footer />
	</div>
);
```

```css:title=CSS
.fadein {
	animation: fadein 0.8s forwards;
}
@keyframes fadein {
	0% {
		opacity: 0.4;
	}
	100% {
		opacity: 1;
	}
}
```

- カテゴリー・タグ機能の実装

今回、公式で用意されているスターターテンプレートを使用していなく`$ npm gatsby init` でまっさらな状態から始めたので、実装する以前の前提知識（node.js, GraphQL 周り等）が不足していた為少し詰まりました。  
詰まった際は、公式で用意されているスターターテンプレートのソースコードが GitHub 上で公開されているので、実装したい機能に応じて適宜参考にすると良いと思います。

- SEO を意識したマークアップ

こちらは Gatsby.js と直接的には関係のない話ですが、ブログを作ったからには色々な方に読んでいただきたいので SEO 周りもしっかりと対応しました。  
HTML タグ と SEO は関係ないんだぜ？みたいな話題は多々上がりますが、やらないよりはやったほうがいいよね。という個人的なスタンスであります。

## まとめ

Gatsby.js 最高！Tailwind CSS 最高！

## 参考リンク

- [「静的サイトジェネレーター」について網羅的に説明します | Dyno](https://dyno.design/articles/what-is-static-site-generator/)
- [React ベース静的サイトジェネレータ Gatsby の真の力をお見せします | Qiita](https://qiita.com/uehaj/items/1b7f0a86596353587466)
- [React の最強フレームワーク Gatsby.js の良さを伝えたい！！ | Qiita](https://qiita.com/hppRC/items/00739eaf9ae7fc95c1ca)
- [基礎から始める GatsbyJS 入門 | アールエフェクト](https://reffect.co.jp/react/gatsby-basic-tutorial-for-beginners)
- [GatsbyJS で最強のブログを作る | キクナントカドットコム](https://kikunantoka.com/tags/gatsby-js%E3%81%A7%E6%9C%80%E5%BC%B7%E3%81%AE%E3%83%96%E3%83%AD%E3%82%B0%E3%82%92%E4%BD%9C%E3%82%8B/)
- [GatsbyJS + microCMS で Jamstack なオウンドメディアを作ろう | micro CMS](https://blog.microcms.io/gatsby-microcms-media)
