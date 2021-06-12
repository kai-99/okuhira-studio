import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
// Custom Components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
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
