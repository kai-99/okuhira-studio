import React from "react";
import { HashtagIcon } from "@heroicons/react/outline";

const SideBar = () => {
	const TagList = [
		{
			id: 1,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "HTML",
		},
		{
			id: 2,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "CSS",
		},
		{
			id: 3,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "JavaScript",
		},
		{
			id: 4,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "Vue",
		},
		{
			id: 5,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "React",
		},
		{
			id: 6,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "Gatsby",
		},
		{
			id: 7,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "Tailwind",
		},
		{
			id: 8,
			icon: <HashtagIcon className="text-blue-400 mr-1 h-6 w-6" />,
			title: "Netlify",
		},
	];

	return (
		<aside className="hidden lg:block lg:w-1/4">
			<div className="bg-white border border-gray-100 mb-8 rounded sticky top-20">
				<div className="bg-gray-700 text-gray-100">
					<p className="font-bold pl-4 py-2">Tags</p>
				</div>
				<nav className="py-4">
					<ul className="pl-8">
						{TagList.map((tag) => {
							return (
								<li key={tag.id} className="mb-2 text-gray-800 flex">
									{tag.icon}
									{tag.title}
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
