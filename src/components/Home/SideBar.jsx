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
			<div className="bg-white border border-gray-100 mb-8 rounded">
				<div className="bg-gray-700 text-gray-100">
					<p className="font-bold pl-4 py-2">Profile</p>
				</div>
				<div className="p-4 text-center">
					<figure>
						<StaticImage
							src="../../images/18.jpeg"
							alt="bio"
							placeholder="tracedSVG"
							className="rounded-full w-40 h-40"
						/>
						<figcaption className="italic font-bold text-gray-800 tracking-wider">
							18
						</figcaption>
					</figure>
					<div>
						<p className="text-gray-600 text-sm">
							Hello, Iam 18号!
							<br />
							Nice to meet you
						</p>
					</div>
					<div className="mt-4 flex justify-evenly">
						<a
							className="inline-block bg-blue-300 text-white py-2 px-4 rounded-3xl"
							href="https://twitter.com/KaitoSaiyan"
						>
							Twitter
						</a>
						<a
							className="inline-block bg-blue-800 text-white py-2 px-4 rounded-3xl"
							href="https://twitter.com/KaitoSaiyan"
						>
							Facebook
						</a>
					</div>
				</div>
			</div>
			<div className="bg-white border border-gray-100 mb-8 rounded sticky top-20">
				<div className="bg-gray-700 text-gray-100">
					<p className="font-bold pl-4 py-2">Category</p>
				</div>
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
