import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
    FacebookShareButton,
    PinterestShareButton,
    TwitterShareButton,
    FacebookIcon,
    PinterestIcon,
    TwitterIcon,
  } from "react-share"

import Layout from "../components/layout"
import SEO from "../components/seo"

import blogTemplateModule from "./blog.module.scss"

// Using Contentful
export const query = graphql`
    query (
        $slug: String!
    ) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            read
            body {
                json
            }
            media {
                fluid(maxWidth: 1000) {
                    src
                }
            }
        }
    }
`

const Blog = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url

                return (
                        <img src={url} alt={alt} />
                )
            },

            "embedded-entry-block": (node) => {
                const embeddedTitle = node.data.target.fields.title["en-US"]
                const embeddedImg = node.data.target.fields.media["en-US"].fields.file["en-US"].url
                const embeddedBody = node.data.target.fields.body["en-US"]

                return (
                    <div className={blogTemplateModule["blogtemplate__embedded"]}>
                        <h3>{embeddedTitle}</h3>
                        <img src={embeddedImg} alt="Blog preview" />
                        {documentToReactComponents(embeddedBody)}
                    </div>
                )
            }
        }
    }

    return (
        <Layout>
            <div className={blogTemplateModule["blogtemplate-container"]}>
                <SEO title={props.data.contentfulBlogPost.title} />
                <div className={blogTemplateModule["blogtemplate__top"]}>
                    <h1 className={blogTemplateModule["blogtemplate__title"]}>{props.data.contentfulBlogPost.title}</h1>
                    <div className={blogTemplateModule["blogtemplate__details"]}>
                        <div>
                            <p className={blogTemplateModule["blogtemplate__readtime"]}>Read Time: {props.data.contentfulBlogPost.read}</p>
                            <p className={blogTemplateModule["blogtemplate__date"]}>Date Posted: {props.data.contentfulBlogPost.publishedDate}</p>
                        </div>
                        <div>
                            <FacebookShareButton className={blogTemplateModule["blogtemplate__socialicon"]} url={props.location.href} quote={"colins world"} hashtag={`#colinsworld`}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <PinterestShareButton className={blogTemplateModule["blogtemplate__socialicon"]} url={props.location.href} media={props.data.contentfulBlogPost.media[0].fluid.src}>
                                <PinterestIcon size={32} round={true} />
                            </PinterestShareButton>
                            <TwitterShareButton className={blogTemplateModule["blogtemplate__socialicon"]} url={props.location.href} title={props.data.contentfulBlogPost.title} hashtag={`#colinsworld`}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                        </div>
                    </div>
                </div>
                <div className={blogTemplateModule["blogtemplate__content"]}>
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                </div>
            </div>
        </Layout>
    )
}

export default Blog