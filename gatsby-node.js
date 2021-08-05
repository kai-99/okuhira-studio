const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);
// Firebase Setting
const fs = require("fs");
exports.onPostBuild = () => {
	fs.copyFile(`./firebase.json`, `./public/firebase.json`, (err) => {
		if (err) {
			throw err;
		}
	});
};

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
			postsRemark: allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							tags
							categories
						}
					}
				}
			}
			tagsGroup: allMarkdownRemark(limit: 1000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
			categoryGroup: allMarkdownRemark(limit: 1000) {
				group(field: frontmatter___categories) {
					fieldValue
				}
			}
		}
	`);

	result.data.postsRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/posts.js`),
			context: {
				slug: node.fields.slug,
			},
		});
	});

	result.data.tagsGroup.group.forEach((tag) => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: path.resolve(`./src/templates/tags.js`),
			context: {
				tag: tag.fieldValue,
			},
		});
	});

	result.data.categoryGroup.group.forEach((category) => {
		createPage({
			path: `/categories/${_.kebabCase(category.fieldValue)}/`,
			component: path.resolve(`./src/templates/categories.js`),
			context: {
				category: category.fieldValue,
			},
		});
	});
};
