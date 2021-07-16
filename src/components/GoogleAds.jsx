import React, { useEffect } from "react";

const GoogleAds = () => {
	useEffect(() => {
		if (window) {
			window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		}
	});
	return (
		<div>
			<ins
				className="adsbygoogle"
				style={{ display: `block` }}
				data-ad-client="ca-pub-4800021914562133"
				data-ad-slot="3370650941"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</div>
	);
};
export default GoogleAds;
