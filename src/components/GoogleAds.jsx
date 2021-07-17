import React, { useEffect } from "react";

const GoogleAds = (props) => {
	// https://marco-note.net/how-to-introduce-adsense-to-gatsby/ <- 参考
	const { currentPath } = props;
	useEffect(() => {
		if (window && process.env.NODE_ENV !== "development") {
			window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		}
	}, [currentPath]);
	return <div>{props.children}</div>;
};
export default GoogleAds;
