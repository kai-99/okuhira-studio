import React from "react";
import AdSense from "react-adsense";

const GoogleAds = () => {
	return (
		<>
			<AdSense.Google
				style={{ display: "block" }}
				client="ca-pub-4800021914562133"
				slot="3370650941"
				format="auto"
				responsive="true"
			/>
		</>
	);
};
export default GoogleAds;