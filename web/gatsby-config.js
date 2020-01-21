// gatsby-config.js:
// This is the core settings to Gatsby.

const path = require(`path`);

// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// Sanity client config
const clientConfig = require('./client-config');

// Check if node environment is production or not.
const isProd = process.env.NODE_ENV === 'production';

// Begin Component
//////////////////////////////////////////////////////////////////////

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    `gatsby-source-playwell`,

    // For SVG files in React
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/assets/images/`,
        },
      },
    },

    // For v1 Site Launch to transform .json data into
    // GraphQL nodes so we can run createPages() in
    // gatsby-node.js
    `gatsby-transformer-json`,

    // For Slick Slider
    `gatsby-plugin-sass`,

    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },

    // gatsby-source-filesystem
    // So we can load hard coded images with
    // gatsby-image
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },

    // So we can load our JSON data via
    // GraphQL nodes so we can run createPages() in
    // gatsby-node.js
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nav`,
        path: path.join(__dirname, `src`, `data`),
      },
    },

    // // Load files from /content/ folder
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/content`,
    //   },
    // },

    // // Google Analytics
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Puts tracking script in the head instead of the body
    //     head: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //   },
    // },

    // // Machine Learning Based Prefetching / Prerendering with Guess.js
    // {
    //   resolve: "gatsby-plugin-guess-js",
    //   options: {
    //     // Find the view id in the GA admin in a section labeled "views"
    //     GAViewID: `VIEW_ID`,
    //     minimumThreshold: 0.03,
    //     // The "period" for fetching analytic data.
    //     period: {
    //       startDate: new Date("2018-1-1"),
    //       endDate: new Date(),
    //     },
    //   },
    // },
  ],
};
