import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

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
						<Link to="/">
							<h1>
								<StaticImage
									src="../images/logo.png"
									alt="LazuliCreative"
									className="inline-block"
									placeholder="tracedSVG"
								/>
								{/* <span className="ml-2 z-0">{data.site.siteMetadata.title}</span> */}
							</h1>
						</Link>
						<a
							href={data.site.siteMetadata.social.twitter.id}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white rounded-full h-10 w-10 flex items-center justify-center"
							aria-label="Lazuli Creative Twitterアカウント"
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
				<div className="text-center bg-white flex items-center justify-center px-2 text-gray-700 h-12">
					<time itemProp="datepublished" className="block mr-2">
						&copy;{new Date().getFullYear()}
					</time>
					<Link to="/">
						<span>{data.site.siteMetadata.title}</span>
					</Link>
				</div>
			</footer>
		);
	};
	// Layout Component
	return (
		<div className="bg-gray-100">
			<Header />
			<div className="max-w-5xl lg:mx-auto global-wrapper">
				{/* <div className="container px-2 py-8 mt-12 mx-auto lg:flex"> */}
				{props.children}
				{/* </div> */}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
