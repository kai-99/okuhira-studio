import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Layout = (props) => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);
	return (
		<div className="bg-gray-100">
			<header className="w-full border-b bg-white fixed top-0 h-12 z-50">
				<div className="max-w-5xl mx-auto h-12">
					<h1 className="font-extrabold text-2xl text-gray-800 h-12 flex items-center">
						<Link to="/">{data.site.siteMetadata.title}</Link>
					</h1>
				</div>
			</header>
			<div className="max-w-5xl mx-auto">
				<div className="container px-2 py-8 flex mt-12">{props.children}</div>
			</div>
			<footer className="w-full">
				<div className="py-4 text-center bg-white">
					<small className="text-gray-800">
						&copy;{new Date().getFullYear()} Kaito Okuhira
					</small>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
