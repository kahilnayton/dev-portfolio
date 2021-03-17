var plugins = [{
      plugin: require('/Users/Kahil/Desktop/codeProjects/dev-portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Kahil/Desktop/codeProjects/dev-portfolio/node_modules/gatsby-plugin-preload-fonts/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Kahil/Desktop/codeProjects/dev-portfolio/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Kahil/Desktop/codeProjects/dev-portfolio/node_modules/@prismicio/gatsby-source-prismic-graphql/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"kahildev","pages":[{"type":"Project","match":"/project/:uid","path":"/project","component":"/Users/Kahil/Desktop/codeProjects/dev-portfolio/src/templates/project.js"},{"type":"Blog","match":"/blog/:uid","path":"/blog","component":"/Users/Kahil/Desktop/codeProjects/dev-portfolio/src/templates/blog.js"}]},
    },{
      plugin: require('/Users/Kahil/Desktop/codeProjects/dev-portfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"kahil development","short_name":"kahil","start_url":"/","background_color":"#D32030","theme_color":"#D32030","display":"minimal-ui","icon":"src/images/spring_logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"68e9ffe85f7a48c329363865be7f7b18"},
    },{
      plugin: require('/Users/Kahil/Desktop/codeProjects/dev-portfolio/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-173713822-1","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
