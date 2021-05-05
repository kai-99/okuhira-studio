import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
			<header className="w-full border-b bg-white top-0 h-12 z-50 fixed">
				<div className="max-w-5xl mx-auto h-12 flex items-center justify-between px-2">
					<h1 className="font-extrabold text-3xl text-gray-800 items-center flex h-12 site-title">
						<Link to="/">{data.site.siteMetadata.title}</Link>
					</h1>
					<a
						href="https://twitter.com/z_idia"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-400 rounded-full h-10 w-10 flex items-center justify-center"
					>
						<FontAwesomeIcon className="text-white text-2xl" icon={faTwitter} />
					</a>
				</div>
			</header>
			<div className="max-w-5xl lg:mx-auto">
				<div className="container px-2 py-8 mt-12 mx-auto lg:flex">
					{props.children}
				</div>
			</div>
			<footer className="w-full">
				<div className="py-4 text-center bg-white">
					<small className="text-gray-800">
						&copy;{new Date().getFullYear()} {data.site.siteMetadata.title}
					</small>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
