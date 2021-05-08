import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RefreshIcon, PencilAltIcon } from "@heroicons/react/outline";
import { Helmet } from "react-helmet";
// Custom Components
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = ` ${tag} に関する記事  ${totalCount}件`;

	return (
		<Layout>
			<Helmet>
				<title>{tag}に関する記事 | うぇぶこーだーどっとこむ</title>
			</Helmet>
			<main className="md:w-3/4 lg:mr-8">
				<section>
					<div>
						<h2 className="text-gray800 text-2xl font-bold italic pt-0 pb-2 px-2 mb-2">
							{tagHeader}
						</h2>
					</div>
					<div>
						{edges.map(({ node }) => {
							return (
								<div
									className="bg-white mb-8 md:mb-4 relative"
									key={node.fields.slug}
								>
									<Link
										className="md:flex hover:shadow-xl hover:bg-purple-50 md:border-2 hover:border-purple-200 duration-300"
										to={node.fields.slug}
									>
										<GatsbyImage
											image={getImage(node.frontmatter.thumbnail)}
											alt={node.frontmatter.title}
											className="w-full h-72 md:w-36 md:h-24 object-cover"
										/>
										<div className="flex flex-col p-2 md:flex-1">
											<h2 className="font-bold text-sm md:text-lg text-gray-800 mb-4">
												{node.frontmatter.title}
											</h2>
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
									</Link>
								</div>
							);
						})}
					</div>
				</section>
			</main>
			<aside className="hidden lg:block lg:w-1/4 lg:sticky lg:top-20">
				<SideBar />
			</aside>
		</Layout>
	);
};

Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							title: PropTypes.string.isRequired,
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired
			),
		}),
	}),
};

export default Tags;

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___updateAt], order: DESC }
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
