/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

const sitemap = require('nextjs-sitemap-generator')
sitemap({
  baseUrl: 'https://kahildev.com',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public/',
})
