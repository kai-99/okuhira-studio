import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { HomeIcon } from "@heroicons/react/outline";
import { LightningBoltIcon } from "@heroicons/react/solid";
// Custom Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SideBar from "../components/SideBar";
import NewArticles from "../components/NewArticles";

const NotFoundPage = () => {
	return (
		<Layout>
			<Seo pagetitle="お探しのページが見つかりません" />
			<div className="container px-2 py-8 mt-12 mx-auto lg:flex">
				<main className="lg:w-3/4 lg:mr-8">
					<h1 class="font-bold text-center md:text-xl py-6 md:py-8 border-l-4 border-purple-400 text-gray-900 bg-white rounded">
						お探しのページが見つかりません
					</h1>
					<p className="text-center my-2">
						一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。
					</p>
					<figure>
						<StaticImage
							src="../images/404.png"
							alt="お探しのページが見つかりません"
							placeholder="tracedSVG"
							layout="constrained"
						/>
					</figure>
					<div className="mt-8 text-center">
						<Link
							className="text-lg font-bold border-2 border-gray-100 block bg-white text-gray-700 w-full p-4 hover:bg-purple-50 hover:border-purple-200 duration-300 rounded shadow"
							to="/"
						>
							<HomeIcon className="w-6 h-6 mr-1 inline-block align-text-bottom text-gray-700" />
							トップページにいく
						</Link>
					</div>
					<div className="my-8">
						<h3 className="text-gray-700 text-lg font-bold italic px-2 mb-2">
							新着記事
							<LightningBoltIcon className="inline-block w-6 h-6 ml-1 align-text-bottom text-yellow-400" />
						</h3>
						<NewArticles />
					</div>
				</main>
				<aside className="block mt-8 lg:mt-0 lg:w-1/4 lg:sticky lg:top-20">
					<SideBar />
				</aside>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
