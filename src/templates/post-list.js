import React from "react";
import Layout from "../components/Layout";
import SideBar from "../components/Home/SideBar";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	RefreshIcon,
	PencilAltIcon,
	CursorClickIcon,
} from "@heroicons/react/outline";
import { Helmet } from "react-helmet";

const postList = ({ data }) => {
	const image = getImage(data.markdownRemark.frontmatter.hero);
	return (
		<Layout>
			<Helmet>
				<title>
					{data.markdownRemark.frontmatter.title} |{" "}
					{data.site.siteMetadata.title}
				</title>
			</Helmet>
			<main className="lg:w-3/4 lg:mr-8">
				<h1 className="font-bold text-center text-2xl my-4">
					{data.markdownRemark.frontmatter.title}
				</h1>
				<div className="flex justify-end mb-1">
					<time className="text-gray-600 block text-right text-sm mr-4">
						<span className="lg:hidden">投稿日</span>{" "}
						<span className="mr-1">
							<PencilAltIcon className="inline-block w-4 h-4" />
						</span>
						{data.markdownRemark.frontmatter.createdDate}
					</time>
					<time className="text-gray-600 block text-right text-sm">
						<span className="lg:hidden">更新日</span>{" "}
						<span className="mr-1">
							<RefreshIcon className="inline-block w-4 h-4" />
						</span>
						{data.markdownRemark.frontmatter.updateDate}
					</time>
				</div>
				<article className="bg-white rounded">
					<figure className="text-center mb-4">
						<GatsbyImage
							image={image}
							alt={data.markdownRemark.frontmatter.title}
						/>
					</figure>
					<div
						className="markdown"
						dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
					/>
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
			</main>
			<SideBar />
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				createdDate
				updateDate
				hero {
					childImageSharp {
						gatsbyImageData(
							placeholder: TRACED_SVG
							formats: [AUTO, WEBP, AVIF]
							layout: CONSTRAINED
							width: 730
							height: 500
						)
					}
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default postList;
