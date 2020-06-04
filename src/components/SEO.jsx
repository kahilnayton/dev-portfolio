
import React, {Component} from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

class SEO extends Component {
  render() {

    const siteMetadata = {
      title: `The video content data company`,
      description: `This is the default description for AnyClip.`,
      siteName: 'kahilDev',
      siteUrl: `https://www.kahildev.com/`,
      siteLanguage: `en-US`,
      siteLocale: `en_us`,
      authorName: `Kahil`,
    };

    let meta = [];

  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.siteLanguage,
      }}
      title={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.siteName}`}
      meta={[
        {
          name: `description`,
          content: siteMetadata.description,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:image`,
          content: siteMetadata.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: siteMetadata.description,
        },
      ].concat(meta)}
    >
 <script type="module" src="https://googlechromelabs.github.io/dark-mode-toggle/src/dark-mode-toggle.mjs"></script>


</Helmet>
    )
  }
}

export default SEO
