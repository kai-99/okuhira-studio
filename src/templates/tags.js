import React from "react";
// import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RefreshIcon, PencilAltIcon } from "@heroicons/react/outline";
import Layout from "../components/Layout";

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = ` ${tag} に関する記事 全${totalCount}件
  ${totalCount === 1 ? "" : "s"} `;

	return (
		<Layout>
			<main className="lg:w-3/4 mx-auto">
				<section>
					<h1 className="uppercase">{tagHeader}</h1>
					<div>
						{edges.map(({ node }) => {
							return (
								<>
									<div
										className="bg-white mb-8 lg:mb-4 relative"
										key={node.fields.slug}
									>
										<Link
											className="lg:flex hover:shadow-xl hover:bg-purple-50 lg:border-2 hover:border-purple-200 duration-300"
											to={node.fields.slug}
										>
											<GatsbyImage
												image={getImage(node.frontmatter.hero)}
												alt={node.frontmatter.title}
												className="w-full h-72 lg:w-36 lg:h-24 object-cover"
											/>
											<div className="flex flex-col p-2 lg:flex-1">
												<h2 className="font-bold text-sm lg:text-lg text-gray-800 mb-4">
													{node.frontmatter.title}
												</h2>
												<div className="lg:flex lg:justify-end">
													<time className="text-gray-600 block text-right text-xs lg:mr-4">
														<span className="lg:hidden">投稿日</span>{" "}
														<span className="mr-1">
															<PencilAltIcon className="inline-block w-3 h-3" />
														</span>
														{node.frontmatter.createdDate}
													</time>
													<time className="text-gray-600 block text-right text-xs">
														<span className="lg:hidden">更新日</span>{" "}
														<span className="mr-1">
															<RefreshIcon className="inline-block w-3 h-3" />
														</span>
														{node.frontmatter.updateDate}
													</time>
												</div>
											</div>
										</Link>
									</div>
								</>
							);
						})}
					</div>
				</section>
			</main>
		</Layout>
	);
};

// Tags.propTypes = {
// 	pageContext: PropTypes.shape({
// 		tag: PropTypes.string.isRequired,
// 	}),
// 	data: PropTypes.shape({
// 		allMarkdownRemark: PropTypes.shape({
// 			totalCount: PropTypes.number.isRequired,
// 			edges: PropTypes.arrayOf(
// 				PropTypes.shape({
// 					node: PropTypes.shape({
// 						frontmatter: PropTypes.shape({
// 							title: PropTypes.string.isRequired,
// 						}),
// 						fields: PropTypes.shape({
// 							slug: PropTypes.string.isRequired,
// 						}),
// 					}),
// 				}).isRequired
// 			),
// 		}),
// 	}),
// };

export default Tags;

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___updateDate], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						createdDate
						updateDate
						title
						tags
						hero {
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
