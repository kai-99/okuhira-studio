---
title: 【Gatsby.js】Google AdSense の導入から広告設置、収益化までを解説
description: "Gatsby.js で作成したサイトに Google AdSense（アドセンス）を導入し、設置する広告の種類や収益化をするまでの具体的な基準を解説していきます。"
createdAt: "2021-07-27"
updateAt: "2021-09-23"
thumbnail: ./hero.png
tags: ["Gatsby.js", "Google AdSense"]
categories: "Develop"
---

## はじめに

この記事では Gatsby.js でサイトを運用している方を対象に、Google AdSense を導入して広告を設置し収益化するまでの手順を詳しく解説していきます。

<p class="info">今回の内容は、プラグインやライブラリを使わずに AdSense の導入をします</p>

Google AdSense の申請をするところから解説してますので、既に審査を合格している方は [審査に合格した後の実装](#%E5%AF%A9%E6%9F%BB%E3%81%AB%E5%90%88%E6%A0%BC%E3%81%97%E3%81%9F%E5%BE%8C%E3%81%AE%E5%AE%9F%E8%A3%85) をまで読み飛ばして下さい。

## Google AdSense とは

自分のサイトに広告を表示し収益を得ることができる、サイト運営者向けのサービスです。  
Google AdSense は無料で利用できますが、広告を表示し収益化するには審査が必要です。

広告を掲載できない種類のサイトもあるので、利用する前に [AdSense プログラム ポリシー](https://support.google.com/adsense/answer/48182) を一読することをおすすめします。

## 申請までの流れ

自分のサイトに広告を表示するには、審査に合格する必要があります。  
審査 〜 実際にサイトに広告を表示するまでの大まかな流れは以下のようになります。

1. [Google AdSense - ウェブサイトを収益化](https://www.google.com/intl/ja_jp/adsense/start/) からサイトの情報を入力します
1. 申請後、`script タグ` が支給されるので、`head タグ` 内に設置します
1. 審査結果を待ち合格後、表示する広告の種類を選んで表示させます
1. サイトが閲覧されるようになってくると収益を得ることができます

## Google AdSense の申請

支給された `script タグ` を `head タグ` 内に設置し、申請するまでの手順を解説します。

```html:title=支給されたscriptタグ
<script data-ad-client="ca-pub-xxx" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```

Gatsby.js サイトの場合は、`.cacheフォルダ` 内の `default-html.jsファイル` をルートフォルダにコピーします。その際、コピーしたファイルは `html.js` にリネームも同時に行います。

```bash
cp .cache/default-html.js src/html.js
```

これは何をやっているかと言いますと、デフォルトで吐き出される `<head></head>タグ` を上書きをしています。このカスタム方法は、公式でも案内しているやり方なので、詳しく知りたい方は [Customizing html.js | Gatsby](https://www.gatsbyjs.com/docs/custom-html/) を読んでみてください。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.com/docs/custom-html/" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.gatsbyjs.com%2Fdocs%2Fcustom-html%2F&amp;key=d4798a05d91c041893af4b71314755fa"></a></div></div>

---

ここまで終えると、ルートフォルダにある `html.js` は以下のようになっているかと思います。

```jsx{15-19}:title=/html.jsファイルに追加したスクリプト
import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{props.headComponents}
				<script
					data-ad-client="ca-pub-xxx"
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
        </script>
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
```

ここまで終え、管理画面よりサイト内に Script コードを設置したボタンを押すことで、審査が開始されます。審査期間は 12 時間 ~ 2 週間程で合否のメールが届きます。  
ここまでの解説が Google AdSense に申請するまでの手順になります。

**参考**  
当サイトは申請後 12 時間程で合格のメールが届きました。その時の記事数は 8 記事です。

## 審査に合格した後の実装

ここからは Google AdSense の審査に合格後、広告を表示するまでの手順を解説します。  
AdSense の広告には以下の種類があります。

1. ディスプレイ広告
1. インフィード広告
1. 記事内広告
1. 検索エンジン広告

当サイトでは、**ディスプレイ広告** と **記事内広告** の二つを利用しています。  
簡単に説明すると、ディスプレイ広告は幅・高さを指定でき、記事内広告は Google 側が自動で広告を表示します。

```jsx:title=src/components/GoogleAds.jsx（ファイル名は参考）
// ディスプレイ広告用のコンポーネントを作る例

import React, { useEffect } from "react";

const GoogleAds = (props) => {
	const { currentPath } = props;
	useEffect(() => {
		if (window && process.env.NODE_ENV !== "development") {
			window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		}
	}, [currentPath]);
	return (
    <ins
      className="adsbygoogle"
      style={{
        display: `inline-block`,
        width: `300px`,
        height: `212px`,
      }}
      data-ad-client="ca-pub-xxx" // 自身のIDを記載
      data-ad-slot="0123456789"   // 自身のIDを記載
    ></ins>
  );
};
export default GoogleAds;

```

`useEffect()` を使用しないと、同じページへのリンク（目次など）がうまく遷移できずに画面が真っ白になる為、忘れずに記述しましょう。

```jsx{1,7}
useEffect(() => {
  // ローカル環境では403エラーが出る為、本番環境でのみ動作
	if (window && process.env.NODE_ENV !== "development") {
		window.adsbygoogle = window.adsbygoogle || [];
		window.adsbygoogle.push({});
	}
}, [currentPath]);
```

ここまで終えると、`templates/post.js` 等の好きな箇所に `<GoogleAds />` を読み込むことでサイズを指定したディスプレイ広告を表示させることができます。

---

記事内広告に関しては、Google AdSense の管理画面から **自動広告をオン** にすることで、Google 側が自動で広告を表示してくれます。  
以上が Gatsby.js サイトに Google AdSense を導入し、収益化するまでの解説になります。

## 収益化の選択肢

Google Adense は審査を合格できれば手軽に導入できるものの、余程 PV 数がない限りあまり収益が見込めないのが事実としてあります。
また、審査自体の合格ラインが明確に公開されていない為、記事数が多くても審査に落ちることはざらにあるようです。

---

そこでおすすめの広告がアフィリエイト広告です。
Google AdSense がクリック単価の収益に対し、アフィリエイト広告は成果報酬単価で収益を得ることができます。クリックした時点では収益は発生しませんが、紹介したサービスや商品を読者の方が購入した時に収益が発生する広告の仕組みになります。

Google AdSense の審査に中々合格できない方や、収益が低くて悩んでいる方はアフィリエイト広告を使ってみるのをオススメします。
当サイトでもアフィリエイト広告を使用しており、扱っている ASP は以下の 2 つになります。

1. <a href="https://px.a8.net/svt/ejp?a8mat=3HEGYR+2KVN5E+0K+ZSD6A" rel="nofollow">A8.net</a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3HEGYR+2KVN5E+0K+ZSD6A" alt="">
1. <a href="//af.moshimo.com/af/c/click?a_id=2749578&p_id=1&pc_id=1&pl_id=1319&guid=ON" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">もしもアフィリエイト</a><img src="//i.moshimo.com/af/i/impression?a_id=2749578&p_id=1&pc_id=1&pl_id=1319" width="1" height="1" style="border:none;">

いずれも無料で利用できるので、収益を伸ばしたいと思う方は是非登録してみてください。

## まとめ

Gatsby.js 作成したサイトに、Google AdSense を導入するまでの手順を解説しました。  
Google AdSense を導入後は、PV 数をあげるためにも検索エンジンで上位表示出来るよう、SEO 対策をすることをおすすめします。

Gatsby.js で作成したサイトの SEO 対策については、[Gatsby.js SEO 対策におすすめのプラグイン](../gatsby-js-seo-plugins/) という記事を以前書きましたので、気になる方はチェックしてみて下さい。
