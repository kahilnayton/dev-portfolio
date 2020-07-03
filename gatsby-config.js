require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const siteMetadata = {
  title: `gatsby-prismic-blog`,
  description: `New portfolio blog`,
  image: `src/images/kahil.JPG`,
  siteUrl: `http://www.kahilnayton.com/`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  authorName: `kahil nayton`,
  author: `kahil nayton | https://www.kahilnayton.com`,
  twitterUsername: `@kbird`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@prismicio/gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'kahildev',
        // path: '/preview',
        // previews: true,
        pages: [
          {
            type: 'Project',
            match: '/project/:uid',
            path: '/project',
            component: require.resolve('./src/templates/project.js'),
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /vectors/,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kahil development`,
        short_name: `kahil`,
        start_url: `/`,
        background_color: `#D32030`,
        theme_color: `#D32030`,
        display: `minimal-ui`,
        icon: `src/images/face.JPG`, // This path is relative to the root of the site.
      },
    },
  ],
}
