import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FolderOpenIcon } from "@heroicons/react/solid";

const CategoryList = () => {
	return (
		<section>
			<div>
				<p className="pl-2 font-bold text-gray-600 text-sm italic">
					カテゴリー
					<FolderOpenIcon className="h-5 w-5 ml-1 text-gray-400 inline-block align-bottom" />
				</p>
				<h2 className="text-gray800 text-2xl font-bold italic pt-0 pb-2 px-2 mb-2">
					Category
				</h2>
			</div>
			<div className="flex text-sm text-gray-700">
				<div className="text-center">
					<figure className="mx-2 p-1 border-yellow-300 border-2 bg-white rounded-full hover:bg-yellow-200 hover:shadow-2xl duration-300">
						<StaticImage
							src="http://placekitten.com/120/150"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={100}
							height={100}
							className="rounded-full"
						/>
					</figure>
					<p>Category1</p>
				</div>
				<div className="text-center">
					<figure className="mx-2 p-1 border-blue-300 border-2 bg-white rounded-full hover:bg-blue-200 hover:shadow-2xl duration-300">
						<StaticImage
							src="http://placekitten.com/120/150"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={100}
							height={100}
							className="rounded-full"
						/>
					</figure>
					<p>Category1</p>
				</div>
				<div className="text-center">
					<figure className="mx-2 p-1 border-green-300 border-2 bg-white rounded-full hover:bg-green-200 hover:shadow-2xl duration-300">
						<StaticImage
							src="http://placekitten.com/120/150"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={100}
							height={100}
							className="rounded-full"
						/>
					</figure>
					<p>Category1</p>
				</div>
				<div className="text-center">
					<figure className="mx-2 p-1 border-purple-300 border-2 bg-white rounded-full hover:bg-purple-200 hover:shadow-2xl duration-300">
						<StaticImage
							src="http://placekitten.com/120/150"
							placeholder="tracedSVG"
							alt="cat"
							layout="fixed"
							width={100}
							height={100}
							className="rounded-full"
						/>
					</figure>
					<p>Category1</p>
				</div>
			</div>
		</section>
	);
};

export default CategoryList;
