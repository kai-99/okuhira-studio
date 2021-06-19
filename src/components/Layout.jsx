import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
				<header className="w-full border-b bg-white top-0 h-12 z-50 fixed shadow-sm">
					<div className="max-w-5xl mx-auto h-12 flex items-center justify-start px-2">
						<Link to="/" className="flex items-center">
							<h1 className="font-mono font-bold text-xl">
								{data.site.siteMetadata.title}
							</h1>
						</Link>
						{/* <a
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
						</a> */}
					</div>
				</header>
			</>
		);
	};
	// Footer Component
	const Footer = () => {
		return (
			<footer className="w-full bg-gray-700">
				<div className="max-w-5xl mx-auto">
					<div className="flex items-center justify-start px-2 text-gray-100 text-sm h-12">
						<span>Copyright &copy; </span>
						<time itemProp="datepublished" dateTime={new Date().getFullYear()}>
							{new Date().getFullYear()}
						</time>
						<Link to="/" className="px-3">
							{data.site.siteMetadata.title}
						</Link>{" "}
						<span>All Rights Reserved.</span>
					</div>
				</div>
			</footer>
		);
	};
	// Layout Component
	return (
		<div className="bg-white">
			<Header />
			<div className="max-w-5xl lg:mx-auto opacity-animation">
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
