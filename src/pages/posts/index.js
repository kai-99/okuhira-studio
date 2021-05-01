import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import SideBar from "../../components/Home/SideBar";
import { ClockIcon } from "@heroicons/react/solid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostList = ({ data }) => {
	const image = getImage(data.markdownRemark.frontmatter.hero);
	return (
		<Layout>
			<main className="w-3/4 mr-8">
				<div className="mb-4">
					<h1 className="font-bold text-xl">記事一覧</h1>
				</div>
				<div className="flex">
					{data.allMarkdownRemark.nodes.map((node) => {
						return (
							<div
								className="bg-white w-1/2 rounded mx-1 mb-1"
								key={node.frontmatter.title}
							>
								<Link to={node.fields.slug}>
									<figure>
										<GatsbyImage image={image} alt={node.frontmatter.title} />
									</figure>
									<div className="p-4">
										<h2 className="font-bold text-lg text-gray-900 text-center">
											{node.frontmatter.title}
										</h2>
										<time className="text-gray-600 block text-right text-sm mb-1">
											<ClockIcon className="inline-block w-4 h-4 ml-1" />
											{node.frontmatter.date}
										</time>
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
	{
		allMarkdownRemark {
			nodes {
				html
				fields {
					slug
				}
				frontmatter {
					date
					title
				}
			}
		}
		markdownRemark {
			frontmatter {
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
`;
