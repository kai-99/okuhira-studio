import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FireIcon } from "@heroicons/react/solid";

const SideBar = () => {
	const CategoryList = [
		{ id: 1, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "HTML" },
		{ id: 2, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "CSS" },
		{ id: 3, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "JavaScript" },
		{ id: 4, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "Vue" },
		{ id: 5, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "React" },
		{ id: 6, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "Gatsby" },
		{ id: 7, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "Tailwind" },
		{ id: 8, icon: <FireIcon className="mr-1 h-6 w-6" />, title: "Netlify" },
	];

	return (
		<aside className="w-1/4">
			<div className="bg-white border mb-8">
				<p className="font-bold bg-gray-700 text-white pl-4 py-2">Profile</p>
				<figure className="text-center py-4">
					<StaticImage
						src="../images/18.jpeg"
						alt="bio"
						placeholder="tracedSVG"
						className="rounded-full w-40 h-40"
					/>
					<figcaption className="italic font-bold text-gray-800 tracking-wider">
						18
					</figcaption>
				</figure>
			</div>
			<div className="bg-white border mb-8 sticky top-20">
				<p className="font-bold bg-gray-700 text-white pl-4 py-2">Category</p>
				<nav className="py-4">
					<ul className="pl-8">
						{CategoryList.map((category) => {
							return (
								<li key={category.id} className="mb-2 text-gray-800 flex">
									{category.icon}
									{category.title}
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default SideBar;
