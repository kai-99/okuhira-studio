import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const AffiliateTypeA = () => {
	// 600px x 500px chot.design
	return (
		<div>
			<a
				href="//af.moshimo.com/af/c/click?a_id=2709936&p_id=3354&pc_id=7970&pl_id=47670&url=https%3A%2F%2Fchot.design%2Fplus%2F%3Frd_code%3D%7B%7BCODE%7D%7D"
				rel="nofollow"
				referrerPolicy="no-referrer-when-downgrade"
				alt=""
			>
				<StaticImage
					src="https://image.moshimo.com/af-img/2742/000000047670.jpg"
					className="border-none hover:opacity-80"
					alt=""
					placeholder="tracedSVG"
					layout="constrained"
				/>
			</a>
		</div>
	);
};

export const AffiliateTypeB = () => {
	// 600px x 500px デジハリLIG
	return (
		<div className="text-center">
			<a
				href="//af.moshimo.com/af/c/click?a_id=2702509&p_id=2322&pc_id=4990&pl_id=30707&url=https%3A%2F%2Fliginc.co.jp%2Fstudioueno%2F"
				rel="nofollow"
				referrerPolicy="no-referrer-when-downgrade"
			>
				<StaticImage
					src="https://image.moshimo.com/af-img/1797/000000030707.jpg"
					className="border-none hover:opacity-80"
					alt=""
					placeholder="tracedSVG"
					layout="constrained"
				/>
			</a>
			<a
				href="//af.moshimo.com/af/c/click?a_id=2702509&p_id=2322&pc_id=4990&pl_id=30707&url=https%3A%2F%2Fliginc.co.jp%2Fstudioueno%2F"
				rel="nofollow"
				referrerPolicy="no-referrer-when-downgrade"
				className="lg:text-xs hover:underline text-blue-500 block mt-2"
			>
				デジハリ by LIG【無料相談会】実施中 &#x1f4ab;
			</a>
		</div>
	);
};
