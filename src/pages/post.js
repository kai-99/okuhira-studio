import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
// Custom Componets
import SideBar from "../components/Home/SideBar";

const PostPage = ({ data }) => {
	return (
		<Layout>
			<article className="w-3/4 mr-8">
				{data.allMarkdownRemark.nodes.map((node) => (
					<div key={node.id}>
						<div className="flex justify-between">
							<h2>{node.frontmatter.title}</h2>
							<p>{node.frontmatter.date}</p>
						</div>
						<div dangerouslySetInnerHTML={{ __html: node.html }} />
					</div>
				))}
			</article>
			<SideBar />
		</Layout>
	);
};

export default PostPage;

export const query = graphql`
	{
		allMarkdownRemark {
			nodes {
				id
				html
				timeToRead
				frontmatter {
					date
					title
				}
			}
		}
	}
`;
