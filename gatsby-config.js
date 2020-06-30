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
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /vectors/,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
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
          }
        ]
      }
    },
  ],
}
