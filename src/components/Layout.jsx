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
			<>
				<header className="w-full border-b bg-white top-0 h-12 z-50 fixed">
					<div className="max-w-5xl mx-auto h-12 flex items-center justify-between px-2">
						<Link to="/" className="flex items-center">
							<h1 className="font-mono font-bold text-xl">
								{data.site.siteMetadata.title}
							</h1>
						</Link>
						<a
							href={data.site.siteMetadata.social.twitter.id}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white rounded-full h-10 w-10 flex items-center justify-center"
							aria-label="Twitter"
						>
							<FontAwesomeIcon
								className="text-blue-400 text-2xl"
								icon={faTwitter}
							/>
						</a>
					</div>
				</header>
			</>
		);
	};
	// Footer Component
	const Footer = () => {
		return (
			<footer className="w-full">
				<div className="text-center flex items-center justify-center px-2 text-gray-700 h-12">
					<time itemProp="datepublished" className="block mr-2">
						&copy;{new Date().getFullYear()}
					</time>
					<Link to="/">
						<span className="font-mono font-bold">
							{data.site.siteMetadata.title}
						</span>
					</Link>
				</div>
			</footer>
		);
	};
	// Layout Component
	return (
		<div className="bg-white">
			<Header />
			<div className="max-w-5xl lg:mx-auto opacity-animation">
				{/* <div className="container px-2 py-8 mt-12 mx-auto lg:flex"> */}
				{props.children}
				{/* </div> */}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
