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
				style={{ display: `inline-block`, width: `248px`, height: `153px` }}
				data-ad-client="ca-pub-4800021914562133"
				data-ad-slot="3370650941"
			></ins>
		</div>
	);
};
export default GoogleAds;
