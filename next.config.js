const withReactSvg = require('next-react-svg');
const withImages = require('next-images');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'vectors'),
  webpack(config, options) {
    return config;
  },
});

module.exports = withImages({
  include: path.resolve(__dirname, 'images'),
  webpack(config, options) {
    return config;
  },
});

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

module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
};

