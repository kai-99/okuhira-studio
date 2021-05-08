const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode });
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			tags: allMarkdownRemark(limit: 1000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
		}
	`);

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/posts.js`),
			context: {
				slug: node.fields.slug,
			},
		});
	});

	result.data.tags.group.forEach((tag) => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: path.resolve(`./src/templates/tags.js`),
			context: {
				tag: tag.fieldValue,
			},
		});
	});
};
