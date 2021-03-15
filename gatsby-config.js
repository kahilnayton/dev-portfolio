require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const siteMetadata = {
  title: `Kahil Nayton portfolio`,
  description: `kahil nayton is a full stack developer`,
  image: `src/images/spring_logo.png`,
  siteUrl: `http://www.kahildev.com/`,
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
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-ffmpeg`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-image`,
    `gatsby-prismic-lazy-load`,
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
        pages: [
          {
            type: 'Project',
            match: '/project/:uid',
            path: '/project',
            component: require.resolve('./src/templates/project.js'),
          },
          {
            type: 'Blog',
            match: '/blog/:uid',
            path: '/blog',
            component: require.resolve('./src/templates/blog.js'),
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
        icon: `src/images/spring_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173713822-1",
        head: true,
      },
    },
  ],
}
