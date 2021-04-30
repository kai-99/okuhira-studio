import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
// Custom Components
import { Homeicon } from "../components/icon/Heroicon";

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>NotFound Page</title>
			</Helmet>
			<div className="flex items-center justify-center bg-purple-100 h-screen">
				<div className="font-bold">
					<figure className="text-center">
						<StaticImage
							src="../images/18.jpeg"
							alt="18号"
							placeholder="tracedSVG"
							className="rounded-full w-48 h-48"
						/>
					</figure>
					<p className="text-center">
						<span className="text-gray-800 text-2xl">
							Sorry, NotFoundpage...
						</span>
						<br />
						<Link
							to="/"
							className="text-2xl text-blue-400 hover:text-blue-300 align-text-bottom"
						>
							Back to Home <Homeicon />
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default NotFoundPage;
