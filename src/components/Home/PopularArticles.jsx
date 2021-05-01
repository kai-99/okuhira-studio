import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FireIcon } from "@heroicons/react/solid";

const PopularPostList = () => {
	return (
		<section>
			<div>
				<p className="pl-2 font-bold text-gray-600 text-sm italic">
					人気記事
					<FireIcon className="h-5 w-5 ml-1 text-red-400 inline-block align-bottom" />
				</p>
				<h2 className="text-gray800 text-2xl font-bold italic pt-0 pb-2 px-2 mb-2">
					Popular articles
				</h2>
			</div>
			<article>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/210/150"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p className="pl-2">Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/220/100"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p className="pl-2">Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/190/110"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p className="pl-2">Hello world</p>
				</div>
			</article>
		</section>
	);
};

export default PopularPostList;
