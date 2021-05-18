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
						social {
							twitter {
								id
							}
						}
					}
				}
			}
		`
	);
	// Header Componet
	const Header = () => {
		return (
			<header className="w-full border-b bg-white top-0 h-12 z-50 fixed">
				<div className="max-w-5xl mx-auto h-12 flex items-center justify-between px-2">
					<Link to="/">
						<h1 className="font-bold italic text-xl ls:text-2xl text-gray-900 site-title flex items-center h-12">
							<span className="inline-block w-10 h-10 rounded-full bg-purple-400 opacity-40 z-10"></span>
							<span className="-ml-4">{data.site.siteMetadata.title}</span>
						</h1>
					</Link>
					<a
						href={data.site.siteMetadata.social.twitter.id}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white rounded-full h-10 w-10 flex items-center justify-center"
						aria-label="うぇぶこーだーTwitterアカウント"
					>
						<FontAwesomeIcon
							className="text-blue-400 text-2xl"
							icon={faTwitter}
						/>
					</a>
				</div>
			</header>
		);
	};
	// Footer Component
	const Footer = () => {
		return (
			<footer className="w-full">
				<div className="py-4 text-center bg-white">
					<small className="text-gray-800 font-extrabold">
						&copy;{new Date().getFullYear()} {data.site.siteMetadata.title}
					</small>
				</div>
			</footer>
		);
	};
	// Layout Component
	return (
		<div className="bg-gray-50">
			<Header />
			<div className="max-w-5xl lg:mx-auto">
				<div className="container md:px-2 py-8 mt-12 mx-auto lg:flex">
					{props.children}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
