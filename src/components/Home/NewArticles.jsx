import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import {
	RefreshIcon,
	PencilAltIcon,
	CursorClickIcon,
} from "@heroicons/react/outline";
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
					新着記事
					<StarIcon className="h-5 w-5 ml-1 text-yellow-400 inline-block align-bottom" />
				</p>
				<h2 className="text-gray800 text-2xl font-bold italic pt-0 pb-2 px-2 mb-2">
					New articles
				</h2>
			</div>
			<article>
				{data.allMarkdownRemark.nodes.map((node) => {
					return (
						<div className="bg-white rounded mb-3" key={node.frontmatter.title}>
							<Link
								className="flex hover:shadow-xl hover:bg-indigo-50 border-2 hover:border-indigo-200 duration-300"
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
			</article>
			<div className="my-4 text-right">
				<Link
					className="justify-end text-md border-b-2 border-indigo-300 inline-block text-gray-600"
					to="/posts/"
				>
					<CursorClickIcon className="w-4 h-4 mr-1 inline-block" />
					記事一覧はこちら
				</Link>
			</div>
		</section>
	);
};

export default PopularPostList;
