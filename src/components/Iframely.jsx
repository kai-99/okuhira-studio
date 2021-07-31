import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Iframely = () => {
	// 古い記事に遷移したときにもCDNがロードされるように、rendering後loadする
	useEffect(() => {
		if (window && window.iframely) {
			window.iframely.load();
		}
	}, []);
	return (
		<Helmet>
			<script
				type="text/javascript"
				src="https://cdn.iframe.ly/embed.js"
				charset="utf-8"
			/>
		</Helmet>
	);
};

export default Iframely;
