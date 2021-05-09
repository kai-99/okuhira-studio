import React from "react";
import { Link } from "gatsby";
// Custom Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
	return (
		<Layout>
			<Seo pagetitle="お探しのページが見つかりません" />
			<main className="lg:w-3/4 lg:mx-auto">
				<div className="">
					<h2 className="text-xl">お探しのページが見つかりません</h2>
					<Link
						className="border-b border-blue-500 text-blue-500 hover:text-blue-300"
						to="/"
					>
						HOMEに戻る
					</Link>
				</div>
			</main>
		</Layout>
	);
};

export default NotFoundPage;
