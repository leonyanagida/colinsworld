/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require('gatsby-awesome-pagination')
const { createFilePath } = require("gatsby-source-filesystem")

// Creates a new node in the gatsby graphql
// I'm creating a new node called "fields" ==> "slug"
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md")

        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
  }






// Dynamically create pages
module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `, { limit: 1000 }).then(res => {
    if (res.errors) {
      throw res.errors
    }

    paginate({
      createPage,
      items: res.data.allContentfulBlogPost.edges,
      itemsPerPage: 5,
      pathPrefix: '/blog',
      component: path.resolve(`./src/templates/blog-list.js`),
    });

    // Create blog post pages.
    res.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.slug}`,
        component: path.resolve("./src/templates/blog.js"),
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          slug: edge.node.slug
        },
      })
    })
  })
}