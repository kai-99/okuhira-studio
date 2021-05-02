import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import SideBar from "../../components/Home/SideBar";
import { RefreshIcon, PencilAltIcon } from "@heroicons/react/outline";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const PostList = ({ data }) => {
	return (
		<Layout>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
			</Helmet>
			<main className="w-3/4 mr-8">
				<div className="mb-4">
					<h1 className="font-bold text-xl">記事一覧</h1>
				</div>
				<div className="">
					{data.allMarkdownRemark.nodes.map((node) => {
						return (
							<div
								className="bg-white rounded mb-3"
								key={node.frontmatter.title}
							>
								<Link
									className="flex hover:shadow-xl hover:bg-indigo-50 border-2 hover:border-indigo-100 duration-300"
									to={node.fields.slug}
								>
									<GatsbyImage
										image={getImage(node.frontmatter.hero)}
										alt={node.frontmatter.title}
									/>
									<div className="p-2 flex-1">
										<h2 className="font-bold text-lg text-gray-900 mb-4">
											{node.frontmatter.title}
										</h2>
										<p className="hidden lg:block text-gray-500 text-sm">
											{node.frontmatter.desc}
										</p>
										<div className="flex justify-end">
											<time className="text-gray-600 block text-right text-sm mr-4">
												<span className="mr-1">
													<PencilAltIcon className="inline-block w-4 h-4" />
												</span>
												{node.frontmatter.createdDate}
											</time>
											<time className="text-gray-600 block text-right text-sm">
												<span className="mr-1">
													<RefreshIcon className="inline-block w-4 h-4" />
												</span>
												{node.frontmatter.updateDate}
											</time>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</main>
			<SideBar />
		</Layout>
	);
};

export default PostList;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark {
			nodes {
				html
				fields {
					slug
				}
				frontmatter {
					createdDate
					updateDate
					title
					hero {
						childImageSharp {
							gatsbyImageData(
								placeholder: TRACED_SVG
								formats: [AUTO, WEBP, AVIF]
								layout: CONSTRAINED
								width: 150
								height: 100
							)
						}
					}
				}
			}
		}
	}
`;
