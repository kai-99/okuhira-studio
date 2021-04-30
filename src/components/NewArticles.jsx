import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PopularPostList = () => {
	return (
		<section>
			<article>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/200/150"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p>Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/150/100"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p>Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/150/110"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p>Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/150/120"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p>Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/150/130"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p>Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/150/140"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p>Hello world</p>
				</div>
				<div className="bg-white flex mx-2 mb-2 rounded">
					<figure>
						<StaticImage
							src="http://placekitten.com/150/150"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={150}
							height={100}
						/>
					</figure>
					<p>Hello world</p>
				</div>
			</article>
		</section>
	);
};

export default PopularPostList;
