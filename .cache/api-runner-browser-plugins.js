module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/@prismicio/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"kahildev","pages":[{"type":"Project","match":"/project/:uid","path":"/project","component":"/Users/Kahil/Desktop/codeProjects/dev-portfolio/src/templates/project.js"},{"type":"Blog","match":"/blog/:uid","path":"/blog","component":"/Users/Kahil/Desktop/codeProjects/dev-portfolio/src/templates/blog.js"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"kahil development","short_name":"kahil","start_url":"/","background_color":"#D32030","theme_color":"#D32030","display":"minimal-ui","icon":"src/images/spring_logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"68e9ffe85f7a48c329363865be7f7b18"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-173713822-1","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
