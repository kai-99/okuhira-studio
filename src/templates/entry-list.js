import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	RefreshIcon,
	PencilAltIcon,
	ClipboardListIcon,
	ArrowCircleRightIcon,
	ShareIcon,
} from "@heroicons/react/outline";
import { Helmet } from "react-helmet";
import {
	FacebookShareButton,
	TwitterShareButton,
	LineShareButton,
	LinkedinShareButton,
	FacebookIcon,
	TwitterIcon,
	LineIcon,
	LinkedinIcon,
} from "react-share";

const entryList = ({ data }) => {
	const image = getImage(data.markdownRemark.frontmatter.hero);
	// TableOfContents Component
	const Toc = (props) => {
		return (
			<div className="toc">
				<div
					className="toc__content"
					dangerouslySetInnerHTML={{
						__html: props.data,
					}}
				/>
			</div>
		);
	};
	return (
		<Layout>
			<Helmet>
				<title>
					{data.markdownRemark.frontmatter.title} {"  "}|{"  "}
					{data.site.siteMetadata.title}
				</title>
			</Helmet>
			<main className="lg:w-3/4 lg:mr-8">
				<h1 className="font-bold text-center text-xl lg:text-2xl my-4 text-gray-800">
					{data.markdownRemark.frontmatter.title}
				</h1>
				<div className="flex justify-end mb-1">
					<time className="text-gray-600 block text-right text-xs lg:text-sm mr-4">
						<span className="lg:hidden">投稿日：</span>{" "}
						<span className="mr-1">
							<PencilAltIcon className="inline-block w-4 h-4" />
						</span>
						{data.markdownRemark.frontmatter.createdDate}
					</time>
					<time className="text-gray-600 block text-right text-xs lg:text-sm">
						<span className="lg:hidden">更新日：</span>{" "}
						<span className="mr-1">
							<RefreshIcon className="inline-block w-4 h-4" />
						</span>
						{data.markdownRemark.frontmatter.updateDate}
					</time>
				</div>
				<article className="bg-white rounded shadow-sm">
					<figure className="text-center mb-4">
						<GatsbyImage
							image={image}
							alt={data.markdownRemark.frontmatter.title}
						/>
					</figure>
					{/* 目次 SP */}
					<div className="lg:hidden bg-white border border-gray-100 mb-8 rounded">
						<div className="bg-gray-700 text-center py-3">
							<p className="font-bold text-gray-100">
								<ClipboardListIcon className="h-6 w-6 inline-block text-purple-400 mr-2 align-bottom" />
								もくじ
							</p>
						</div>
						<nav className="p-4 bg-purple-50">
							<Toc data={data.markdownRemark.tableOfContents} />
						</nav>
					</div>
					<div
						className="markdown"
						dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
					/>
					<div className="px-10">
						<hr className="my-8" />
					</div>
					<div className="pb-8 px-8">
						<div className="flex items-center justify-center">
							<ShareIcon className="w-6 h-6 inline-block mr-4 text-purple-400" />
							<TwitterShareButton className="mr-2">
								<TwitterIcon round size={48} />
							</TwitterShareButton>
							<FacebookShareButton className="mr-2">
								<FacebookIcon round size={48} />
							</FacebookShareButton>
							<LineShareButton className="mr-2">
								<LineIcon round size={48} />
							</LineShareButton>
							<LinkedinShareButton>
								<LinkedinIcon round size={48} />
							</LinkedinShareButton>
						</div>
					</div>
				</article>
				<div className="my-4 text-right">
					<Link
						className="justify-end text-md border-b-2 border-purple-400 inline-block text-gray-600"
						to="/"
					>
						記事一覧
						<ArrowCircleRightIcon className="w-4 h-4 ml-1 inline-block" />
					</Link>
				</div>
			</main>
			{/* 目次 PC */}
			<aside className="hidden lg:block lg:w-1/4">
				<div className="bg-white border border-gray-100 mb-8 rounded sticky top-20 shadow-sm">
					<div className="bg-gray-700 text-center py-8 rounded-t-md">
						<p className="font-bold text-gray-100">
							<ClipboardListIcon className="h-6 w-6 inline-block text-purple-400 mr-2 align-bottom" />
							もくじ
						</p>
					</div>
					<nav className="p-4">
						<Toc data={data.markdownRemark.tableOfContents} />
					</nav>
				</div>
			</aside>
		</Layout>
	);
};
export default entryList;

export const query = graphql`
	query EntryListQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			tableOfContents
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
