import React, { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pager from "../components/pager"
import Search from "../components/search"

import blogListModule from "../templates/blog-list.module.scss"

export const query = graphql`
    query {

      blogs: allContentfulBlogPost {
        edges {
            node {
                slug
                title
                short
                media {
                    fluid(maxWidth: 1000) {
                        src
                    }
                }
            }
        }
      }

      blogger: file(relativePath: { eq: "images/gatsby-icon.png" }) {
                childImageSharp {
                    fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                    }
                }
      }

    }
  `

const BlogSearch = ({data, pageContext}) => {

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState()

  const articles = data

  const searchChangeHandler = (e) => {      
      setSearchTerm(e.target.value)
  }
  
  const find = () => {
    let text = searchTerm.split(" ")

    let tacos2 =  data.blogs.edges.filter((item) => {
      return text.every((el) => {
        return item.node.title.indexOf(el) > -1
      })
    })
  }

  const blogSearchHandler = (e) => {
      e.preventDefault()

      let taco = data.blogs.edges.filter(item => JSON.stringify(item.node.title.toLowerCase().includes(searchTerm)))
      setSearchResults(taco)
      find()
  }

  return (
    <Layout>
        <SEO title="Blogs"/>
        <div className={blogListModule["blog-list-container"]}>
            <h1>Yes</h1>
            <h1 className={blogListModule["blog-list__title"]}>My Travel Blog and City Guides</h1>
            <div>
                <form onSubmit={blogSearchHandler}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={searchChangeHandler}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <ul className={blogListModule["blog-list__ul"]}>
                {searchResults ? searchResults.map(a => {
                    return (
                        <li className={blogListModule["blog-list__li"]} key={a.node.slug}>
                            <div className={blogListModule["blog-list__linkbox"]}>
                                <div className={blogListModule["blog-list__linkbox__img"]}>
                                    <Link to={`/blog/${a.node.slug}`}>
                                        <img 
                                            className={blogListModule["blog-list__img"]}
                                            src={a.node.media[0].fluid.src ? a.node.media[0].fluid.src : data.blogger.childImageSharp.fixed} 
                                        />
                                    </Link>
                                </div>
                                <div className={blogListModule["blog-list__linkbox__div"]}>
                                    <Link to={`/blog/${a.node.slug}`}>
                                        <h3 className={blogListModule["blog-list__linkbox__title"]}>{a.node.title}</h3>
                                    </Link>
                                        <p className={blogListModule["blog-list__linkbox__text"]}>{a.node.short}</p>
                    
                                    <Link to={`/blog/${a.node.slug}`}>
                                        <p className={blogListModule["blog-list__learnmore"]}>Learn More &#10148;</p>
                                    </Link>
                                    <hr />
                                </div>
                            </div>
                        </li>
                    )
                }) : null}
            </ul>
        </div>
    </Layout>
  )
}

export default BlogSearch


