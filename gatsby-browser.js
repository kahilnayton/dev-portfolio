import "./src/styles/common.css"
import './src/styles/dark.css'
import './src/styles/common.css'

import "./src/fonts/fonts.css";

const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)