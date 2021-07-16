import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import {
	FolderOpenIcon,
	HashtagIcon,
	// TrendingUpIcon,
	// LinkIcon,
} from "@heroicons/react/outline";

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
				categoryGroup: allMarkdownRemark(limit: 2000) {
					group(field: frontmatter___categories) {
						fieldValue
					}
				}
				tagGroup: allMarkdownRemark(limit: 2000) {
					group(field: frontmatter___tags) {
						fieldValue
					}
				}
			}
		`
	);
	// Header Componet
	const Header = () => {
		return (
			<>
				<header className="bg-white w-full top-0 h-12 z-50 fixed lg:static">
					<div className="max-w-5xl mx-auto h-12 flex items-center justify-center lg:justify-start px-2">
						<Link to="/">
							<p className="font-mono text-xl text-gray-900">
								{data.site.siteMetadata.title} &#128640;
							</p>
						</Link>
					</div>
				</header>
			</>
		);
	};
	// Footer Component
	const Footer = () => {
		return (
			<footer className="w-full bg-gray-800 text-gray-100 body-font">
				<div className="max-w-5xl mx-auto">
					<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
						<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
							<Link to="/">
								<p className="font-mono text-xl text-gray-100">
									{data.site.siteMetadata.title} &#128640;
								</p>
							</Link>
							<p className="mt-2 text-sm text-gray-400">
								Webに関する情報を発信する個人ブログ
							</p>
						</div>
						<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
							<div className="lg:w-1/3 md:w-1/2 w-full px-4">
								<h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
									CATEGORY
								</h2>
								<nav className="list-none mb-10">
									<ul className="flex flex-wrap lg:flex-col">
										{data.categoryGroup.group.map((cat) => (
											<li className="pb-2" key={cat.fieldValue}>
												<Link
													to={`/categories/${kebabCase(cat.fieldValue)}/`}
													className="flex items-center justify-between text-grary-600 hover:opacity-60"
												>
													<p className="pr-2">
														<FolderOpenIcon className="inline-block w-4 h-4 text-gray-500 mr-1" />
														<span className="inline-block text-sm">
															{cat.fieldValue}
														</span>
													</p>
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
							<div className="lg:w-1/3 md:w-1/2 w-full px-4">
								<h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
									HASHTAG
								</h2>
								<nav className="list-none mb-10">
									<ul className="flex flex-wrap">
										{data.tagGroup.group.map((tag) => (
											<li className="pb-2" key={tag.fieldValue}>
												<Link
													to={`/tags/${kebabCase(tag.fieldValue)}/`}
													className="flex items-center justify-between text-blue-500 hover:opacity-60"
												>
													<p className="pr-2">
														<HashtagIcon className="inline-block w-4 h-4 text-blue-500 mr-px" />
														<span className="inline-block text-sm">
															{tag.fieldValue}
														</span>
													</p>
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
							<div className="lg:w-1/3 md:w-1/2 w-full px-4">
								<h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
									ABOUT
								</h2>
								<nav className="list-none mb-10">
									<li>
										<a
											href={data.site.siteMetadata.social.twitter.id}
											rel="noreferrer"
											target="_blank"
											className="flex items-center text-grary-600 hover:opacity-60"
										>
											<svg
												fill="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 mr-1"
												viewBox="0 0 24 24"
											>
												<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
											</svg>
											<span className="inline-block text-sm">Twitter</span>
										</a>
									</li>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center px-2 text-gray-400 text-sm h-16 border-t border-gray-400">
					<p>
						<span>Copyright &copy; </span>
						<time itemProp="datepublished" dateTime={new Date().getFullYear()}>
							{new Date().getFullYear()} -
						</time>
						<Link to="/" className="px-1">
							{data.site.siteMetadata.title}
						</Link>
					</p>
				</div>
			</footer>
		);
	};
	// Layout Component
	return (
		<div className="bg-white lg:bg-purple-50" id="#top">
			<Header />
			<div className="max-w-5xl lg:mx-auto mt-12 lg:mt-0 opacity-animation relative">
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
