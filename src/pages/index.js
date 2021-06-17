import React from "react";
import { CheckIcon, LightningBoltIcon } from "@heroicons/react/outline";
// Custom Components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import NewArticles from "../components/NewArticles";
import AllArticles from "../components/AllArticles";
import SideBar from "../components/SideBar";

const IndexPage = () => {
	return (
		<>
			<Layout>
				<Seo />
				<div className="container px-2 py-8 mt-12 mx-auto lg:flex">
					<main className="lg:w-3/4 lg:mr-8">
						<section>
							<div className="pl-2 italic font-bold mb-2">
								<p className="text-gray-600 text-sm">
									新着記事
									<LightningBoltIcon className="h-5 w-5 ml-1 text-yellow-400 inline-block align-bottom" />
								</p>
								<h2 className="text-gray800 text-2xl">New articles</h2>
							</div>
						</section>
						<NewArticles />
						<hr className="block border-t-4 border-dotted border-purple-200 my-10" />
						<section>
							<div className="pl-2 italic font-bold mb-2">
								<p className="text-gray-600 text-sm">
									記事一覧
									<CheckIcon className="h-5 w-5 ml-1 text-purple-400 inline-block align-bottom" />
								</p>
								<h2 className="text-gray800 text-2xl">All articles</h2>
							</div>
						</section>
						<AllArticles />
					</main>
					<aside className="block mt-8 lg:mt-0 lg:w-1/4">
						<div className="lg:sticky lg:top-20">
							<SideBar />
						</div>
					</aside>
				</div>
			</Layout>
		</>
	);
};

export default IndexPage;
