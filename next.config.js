const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');
const { ANALYZE } = process.env;

module.exports = {
  webpack: function(config) {
    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
    }

    return config;
  },
};

const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: 'https://kahildev.com',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'public/'  
});