import React from "react";
import { Helmet } from "react-helmet";
import { FireIcon, StarIcon } from "@heroicons/react/solid";
// Custom Components
import Layout from "../components/Layout";
import PopularArticles from "../components/PopularArticles";
import NewArticles from "../components/NewArticles";
import SideBar from "../components/SideBar";

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Hello Gatsby</title>
			</Helmet>
			<Layout>
				<main className="w-3/4 mr-8">
					<p className="pl-2 font-bold text-gray-600 text-sm italic">
						人気記事
						<FireIcon className="h-5 w-5 ml-1 text-red-400 inline-block align-bottom" />
					</p>
					<h2 className="text-gray800 text-xl font-bold italic pt-0 pb-2 px-2 mb-2 drop-shadow-2xl">
						Popular articles
					</h2>
					<PopularArticles />
					<p className="pl-2 font-bold text-gray-600 text-sm italic">
						新着記事
						<StarIcon className="h-5 w-5 ml-1 text-yellow-400 inline-block align-bottom" />
					</p>
					<h2 className="text-gray800 text-xl font-bold italic pt-0 pb-2 px-2 mb-2 drop-shadow-2xl">
						New articles
					</h2>
					<NewArticles />
				</main>
				<SideBar />
			</Layout>
		</>
	);
};

export default IndexPage;
