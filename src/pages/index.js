import React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
// Custom Components
import { Cloudiocn } from "../components/icon/Heroicon";
import Humburger from "../components/nav/Humburger";

const IndexPage = () => {
	const lists = [
		{ id: 1, name: "heroicons" },
		{ id: 2, name: "postcss" },
		{ id: 3, name: "react-burger-menu" },
		{ id: 4, name: "react-helmet" },
		{ id: 5, name: "gatsby-plugin-react-helmet" },
		{ id: 6, name: "gatsby-plugin-sitemap" },
		{ id: 7, name: "gatsby-plugin-image" },
		{ id: 8, name: "gatsby-plugin-sharp" },
		{ id: 9, name: "gatsby-source-filesystem" },
		{ id: 10, name: "gatsby-plugin-netlify" },
		{ id: 11, name: "gatsby-plugin-nprogress" },
	];

	return (
		<>
			<Helmet>
				<title>HOME</title>
			</Helmet>
			<Humburger />
			<div className="flex items-center justify-center bg-purple-100 h-screen">
				<div>
					<figure className="text-center mb-4">
						<StaticImage
							src="../images/18.jpeg"
							alt="18号"
							placeholder="tracedSVG"
							className="rounded-full w-48 h-48"
						/>
					</figure>
					<p className="font-bold text-2xl text-center mb-4">
						<span className="text-purple-700">Gatsby</span>{" "}
						<span className="text-gray-600">
							<Cloudiocn />
						</span>{" "}
						<span className="text-blue-500">Tailwind</span>
					</p>
					<div>
						{/* <h2 className="font-bold text-gray-800 text-xl text-center mb-2">
							library or plugins
						</h2> */}
						<ul className="text-gray-700 text-md list-disc">
							{lists.map((list) => {
								return <li key={list.id}>{list.name}</li>;
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default IndexPage;
