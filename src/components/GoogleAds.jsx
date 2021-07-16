import React, { useEffect } from "react";

const GoogleAds = (props) => {
	useEffect(() => {
		if (window && process.env.NODE_ENV !== "development") {
			// window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		}
	});
	return <div>{props.children}</div>;
};
export default GoogleAds;
