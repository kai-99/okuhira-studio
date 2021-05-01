import React from "react";
import Layout from "../components/Layout";
import SideBar from "../components/Home/SideBar";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ClockIcon } from "@heroicons/react/solid";

const postList = ({ data }) => {
	const image = getImage(data.markdownRemark.frontmatter.hero);
	return (
		<Layout>
			<main className="w-3/4 mr-8">
				<h2 className="font-bold text-center text-2xl my-4">
					{data.markdownRemark.frontmatter.title}
				</h2>
				<time className="text-gray-600 block text-right text-sm mb-1">
					<ClockIcon className="inline-block w-4 h-4 ml-1" />
					{data.markdownRemark.frontmatter.date}
				</time>
				<article className="bg-white p-4 rounded">
					<figure className="text-center pb-4">
						<GatsbyImage
							image={image}
							alt={data.markdownRemark.frontmatter.title}
						/>
					</figure>
					<hr className="mb-8 h-px bg-gradient-to-r from-gray-300" />
					<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
				</article>
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
				date
				hero {
					childImageSharp {
						gatsbyImageData(
							width: 480
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
			}
		}
	}
`;

export default postList;
