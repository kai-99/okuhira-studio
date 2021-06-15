import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RefreshIcon, PencilAltIcon } from "@heroicons/react/outline";
import { HashtagIcon } from "@heroicons/react/solid";
import kebabCase from "lodash/kebabCase";
// Custom Components
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import Seo from "../components/Seo";

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges } = data.allMarkdownRemark;
	// SEO Only Fanction
	const seoTitle = `${tag}に関する記事一覧`;

	return (
		<Layout>
			<Seo pagetitle={seoTitle} pagedescription={seoTitle} />
			<div className="container px-2 py-8 mt-12 mx-auto lg:flex">
				<main className="md:w-3/4 lg:mr-8">
					<section>
						<div>
							<h2 className="mb-4 flex items-center justify-center">
								<HashtagIcon className="inline-block w-4 h-4 md:w-6 md:h-6 text-blue-500 align-text-bottom mr-1" />
								<span className="inline-block text-gray-800 md:text-xl font-bold">
									{tag}
								</span>
							</h2>
						</div>
						<div>
							{edges.map(({ node }) => {
								return (
									<div
										className="bg-white mb-4 relative"
										key={node.fields.slug}
									>
										<Link
											className="md:flex lg:hover:shadow hover:bg-purple-50 md:border-2 hover:border-purple-200 duration-300 block"
											to={node.fields.slug}
										>
											<GatsbyImage
												image={getImage(node.frontmatter.thumbnail)}
												alt={node.frontmatter.title}
												className="w-auto h-auto md:w-40 md:h-24 object-cover focus:bg-purple-50"
											/>
											<div className="flex flex-col p-2 md:flex-1">
												<h2 className="font-bold text-sm md:text-base text-gray-800 mb-2 md:mb-0 flex-1">
													{node.frontmatter.title}
												</h2>
												<div className="flex items-center justify-between my-2 font-bold">
													<div className="slow-fadein-animation">
														{node.frontmatter.tags.map((tag) => {
															return (
																<React.Fragment
																	key={`/tags/${kebabCase(tag)}/`}
																>
																	<Link
																		className="border-2 bg-white hover:bg-yellow-50 duration-300 hover:border-yellow-200 px-2 py-1 text-sm text-gray-700 rounded-full mr-1"
																		to={`/tags/${kebabCase(tag)}/`}
																	>
																		<p className="inline-block">
																			<HashtagIcon className="inline-block w-4 h-4 text-blue-500 mr-1" />
																			<span className="inline-block text-sm">
																				{tag}
																			</span>
																		</p>
																	</Link>
																</React.Fragment>
															);
														})}
													</div>
													<div className="md:flex md:justify-end font-bold">
														<time className="text-gray-600 block text-right text-xs md:mr-4">
															<span className="md:hidden">投稿日</span>{" "}
															<span className="mr-1">
																<PencilAltIcon className="inline-block w-3 h-3" />
															</span>
															{node.frontmatter.createdAt}
														</time>
														<time className="text-gray-600 block text-right text-xs">
															<span className="md:hidden">更新日</span>{" "}
															<span className="mr-1">
																<RefreshIcon className="inline-block w-3 h-3" />
															</span>
															{node.frontmatter.updateAt}
														</time>
													</div>
												</div>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</section>
				</main>
				<aside className="block mt-8 lg:mt-0 lg:w-1/4">
					<div className="lg:sticky lg:top-20">
						<SideBar />
					</div>
				</aside>
			</div>
		</Layout>
	);
};

export default Tags;

export const pageQuery = graphql`
	query ($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___createdAt], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						createdAt(formatString: "YYYY.MM.DD")
						updateAt(formatString: "YYYY.MM.DD")
						title
						tags
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData(
									placeholder: TRACED_SVG
									formats: [AUTO, WEBP, AVIF]
									layout: CONSTRAINED
								)
							}
						}
					}
				}
			}
		}
	}
`;
