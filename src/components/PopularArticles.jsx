import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { ClockIcon } from "@heroicons/react/solid";

const PopularPostList = () => {
	return (
		<section className="mb-8">
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
