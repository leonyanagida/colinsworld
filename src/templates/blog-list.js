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

import blogListModule from "./blog-list.module.scss"

import searchIcon from "../images/search.svg"
import loaderIcon from "../images/loader.svg"

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        skip: $skip
        limit: $limit
        ) {
        edges {
            node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
                short
                media {
                    fluid(maxWidth: 1000) {
                        src
                    }
                }
            }
          }
      }

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

      switzerland: file(relativePath: { eq: "images/switzerland.jpg" }) {
                childImageSharp {
                    fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                    }
                }
      }

    }
  `

const BlogList = ({data, pageContext}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState()

  const articles = data

  const searchChangeHandler = (e) => {      
      setSearchTerm(e.target.value)
  }

  const blogSearchHandler = (e) => {
      e.preventDefault()

      if (searchTerm.length < 1) return 

      setIsLoading(true)

      let text = searchTerm.toLowerCase().split(" ")
      let filteredSearch = data.blogs.edges.filter((item) => {
        return text.every(el => {
            return item.node.title.toLowerCase().includes(el)
        })
      })

      setTimeout(() => {
        setIsLoading(false)
        setSearchResults(filteredSearch)
    }, 1000)
  }

  return (
    <Layout>
        <SEO title="Blogs"/>
        <div className={blogListModule["blog-list-container"]}>
            <h1 className={blogListModule["blog-list__title"]}>Travel Blog and City Guides</h1>
            <div className={blogListModule["blog-list__flex"]}>
                <div className={blogListModule["blog-list__flexleft"]}>
                    <div className={blogListModule["blog-list__searchform__container__mobile"]}>
                        <h4 className={blogListModule["blog-list__searchform__title__mobile"]}>Find Blogs and Guides</h4>
                        <form className={blogListModule["blog-list__searchform"]} onSubmit={blogSearchHandler}>
                            <input
                                className={blogListModule["blog-list__searchform__input__mobile"]}
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={searchChangeHandler}
                            />
                            <button className={blogListModule["blog-list__searchform__button__mobile"]} type="submit">
                                {isLoading ? (<img className={blogListModule["blog-list__loadersvg"]} src={loaderIcon} alt="Loader" /> ) : (<img className={blogListModule["blog-list__searchsvg"]} src={searchIcon} alt="search icon svg" />)}
                            </button>                        
                        </form>
                    </div>
                    {searchResults ? (
                        <div>
                            <ul className={blogListModule["blog-list__ul"]}>
                            {searchResults ? (<li className={blogListModule["blog-list__li__searchresult"]}><h3>Your Search Results:</h3></li>) : null}
                                {searchResults ? searchResults.map(a => {
                                    return (
                                        <li className={blogListModule["blog-list__li"]} key={a.node.slug}>
                                            <div className={blogListModule["blog-list__linkbox"]}>
                                                
                                                <div className={blogListModule["blog-list__linkbox__img"]}>
                                                    <Link to={`/blog/${a.node.slug}`}>
                                                        <img 
                                                            className={blogListModule["blog-list__img"]}
                                                            src={a.node.media[0].fluid.src ? a.node.media[0].fluid.src : data.blogger.childImageSharp.fixed}
                                                            alt="Blog destination"
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
                    ) : null}
                    {!searchResults ? (
                    <ul className={blogListModule["blog-list__ul"]}>
                        {
                            data.allContentfulBlogPost.edges.map(edge => {
                                if (edge.node.media && edge.node.media[0] !== null) {
                                    return (
                                        <li className={blogListModule["blog-list__li"]} key={edge.node.slug}>
                                                {/* <Img fluid={m} /> */}
                                                <div className={blogListModule["blog-list__linkbox"]}>
                                                    
                                                    <div className={blogListModule["blog-list__linkbox__img"]}>
                                                        <Link to={`/blog/${edge.node.slug}`}>
                                                            <img 
                                                                className={blogListModule["blog-list__img"]}
                                                                src={edge.node.media[0].fluid.src}
                                                                alt="Blog preview"
                                                            />
                                                        </Link>
                                                    </div>


                                                    <div className={blogListModule["blog-list__linkbox__div"]}>
                                                        <Link to={`/blog/${edge.node.slug}`}>
                                                            <h3 className={blogListModule["blog-list__linkbox__title"]}>{edge.node.title}</h3>
                                                        </Link>
                                                            <p className={blogListModule["blog-list__linkbox__text"]}>{edge.node.short}</p>
                                        
                                                        <Link to={`/blog/${edge.node.slug}`}>
                                                            <p className={blogListModule["blog-list__learnmore"]}>Learn More &#10148;</p>
                                                        </Link>
                                                        <hr />
                                                    </div>
                                                </div>

                                        </li>
                                    )
                                } else {
                                    return (
                                        <li className={blogListModule["blog-list__li"]} key={edge.node.slug}>
                                            <Link to={`/blog/${edge.node.slug}`}>
                                                <h3>{edge.node.title}</h3>
                                                <p>{edge.node.short}</p>
                                                <p className={blogListModule["blog-list__learnmore"]}>Learn More</p>
                                            </Link>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                    )
                    : null }
                </div>
                <div className={blogListModule["blog-list__flexright"]}>
                    <div className={blogListModule["blog-list__searchform__container"]}>
                        <h4 className={blogListModule["blog-list__searchform__title__desktop"]}>Find Blogs and Guides</h4>
                        <form className={blogListModule["blog-list__searchform__desktop"]} onSubmit={blogSearchHandler}>
                            <input
                                className={blogListModule["blog-list__searchform__input"]}
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={searchChangeHandler}
                            />
                            <button className={blogListModule["blog-list__searchform__button"]} type="submit">
                                {isLoading ? (<img className={blogListModule["blog-list__loadersvg"]} src={loaderIcon} alt="Loader" /> ) : (<img className={blogListModule["blog-list__searchsvg"]} src={searchIcon} alt="search icon svg" />)}
                            </button>
                        </form>
                    </div>
                    <div className={blogListModule["blog-list__aboutme-container"]}>
                        <div>
                            <p>Author: Colin</p>
                            <p className={blogListModule["blog-list__aboutme"]}>After over a decade of traveling around the world and going trekking on six continents, Colin has experience to share to all!</p>
                        </div>
                        <hr />
                        <div>
                            <Img fixed={data.switzerland.childImageSharp.fixed} alt="Switzerland" />
                            <p className={blogListModule["blog-list__awardtitle"]}>The Award For The Best Place To Travel in 2019</p>
                            <p className={blogListModule["blog-list__awardtext"]}>After over a decade of traveling around the world and going trekking on six continents.</p>
                            <p className={blogListModule["blog-list__learnmore"]}>Learn More &#10148;</p>
                            <hr />
                        </div>
                    </div>
               </div>
               <div>
               </div>
            </div>
            {!searchResults ? (
                <div className={blogListModule["blog-list__pager"]}>
                    <Pager pageContext={pageContext} />
                </div>
            ) : null}
        </div>
    </Layout>
  )
}

export default BlogList