const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')
require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Colin's World`,
    description: `Colin's Blog`,
    author: `Leon Yanagida`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Qwigley`, `Merriweather`, `Poppins`]
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
          // Override the file regex for SASS
          sassRuleTest: /\.global\.s(a|c)ss$/,
          // Override the file regex for CSS modules
          sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      // Fixes the issue with GatsbyImageSharpFluid fragment not found
      resolve: `gatsby-transformer-sharp`
    },
    `gatsby-plugin-sharp`,
    {
      // Allows use to use images and file path in our project
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
