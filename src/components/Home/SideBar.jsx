import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { HashtagIcon } from "@heroicons/react/outline";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faTwitter,
// 	faFacebookF,
// 	faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

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
			{/* <div className="bg-white border border-gray-100 mb-8 rounded">
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
					<div className="mt-4">
						<a
							className="bg-blue-400 text-white py-2 px-4 h-10 rounded-full flex items-center mb-2"
							href="https://twitter.com/KaitoSaiyan"
						>
							<FontAwesomeIcon className="mr-2" icon={faTwitter} />
							Twitter
						</a>
						<a
							className="bg-blue-800 text-white py-2 px-4 h-10 rounded-3xl flex items-center mb-2"
							href="https://twitter.com/KaitoSaiyan"
						>
							<FontAwesomeIcon className="mr-2" icon={faFacebookF} />
							Facebook
						</a>
						<a
							className="bg-red-400 text-white py-2 px-4 h-10 rounded-3xl flex items-center mb-2"
							href="https://twitter.com/KaitoSaiyan"
						>
							<FontAwesomeIcon className="mr-2" icon={faInstagram} />
							Instagram
						</a>
					</div>
				</div>
			</div> */}
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
