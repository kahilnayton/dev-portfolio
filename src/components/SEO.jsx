import React, { Component } from 'react';
import Helmet from 'react-helmet';

class SEO extends Component {
  render() {
    const siteMetadata = {
      title: `Kahil Nayton`,
      description: `Full stack developer based in NYC`,
      siteName: 'kahil nayton blog',
      siteUrl: `https://www.kahildev.com/`,
      siteLanguage: `en-US`,
      siteLocale: `en_us`,
      authorName: `Kahil Nayton`,
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
      ></Helmet>
    );
  }
}

export default SEO;
