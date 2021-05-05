import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { RefreshIcon, PencilAltIcon } from "@heroicons/react/outline";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const PopularPostList = () => {
	const data = useStaticQuery(
		graphql`
			{
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
							category
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
		`
	);

	return (
		<section>
			<div>
				<p className="pl-2 font-bold text-gray-600 text-sm italic">
					記事一覧
					<CheckIcon className="h-5 w-5 ml-1 text-green-400 inline-block align-bottom" />
				</p>
				<h2 className="text-gray800 text-2xl font-bold italic pt-0 pb-2 px-2 mb-2">
					All articles
				</h2>
			</div>
			<div>
				{data.allMarkdownRemark.nodes.map((node) => {
					return (
						<div
							className="bg-white mb-4 relative"
							key={node.frontmatter.title}
						>
							<span className="absolute p-1 text-xs inline-block bg-purple-400 text-gray-50 -top-1.5 -left-1.5 z-20 shadow rounded-sm">
								{node.frontmatter.category}
							</span>
							<Link
								className="flex hover:shadow-xl hover:bg-purple-50 border-2 hover:border-purple-200 duration-300"
								to={node.fields.slug}
							>
								<GatsbyImage
									image={getImage(node.frontmatter.hero)}
									alt={node.frontmatter.title}
								/>
								<div className="p-2 flex-1">
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
					);
				})}
			</div>
		</section>
	);
};

export default PopularPostList;
