import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

class SEO extends Component {
  
  render() {
    const social = this.props.data.prismic.allSocials.edges[0].node;

    const siteMetadata = {
     title: this.props.title || social.title || `Default Page Title`,
      description:
        this.props.description ||
        social.description ||
        `This is the default page description for this project.`,
      image: this.props.image || social.image || `src/images/spring_logo.png`,
      siteName: social.siteName || `Kahil Nayton Full Stack Developer`,
      siteUrl: social.siteUrl || `https://www.kahildev.com/`,
      siteLanguage: `en-US`,
      siteLocale: `en_us`,
      authorName: `Kahil`,
      author: `Kahil | https://www.kahildev.com`,
      twitter: social.twitter || `kahilnayton`,
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

export default props => (
  <StaticQuery
    query={graphql`
      {
        prismic {
          allSocials {
            edges {
              node {
                _meta {
                  uid
                }
                default_description
                default_image
                default_title
                facebook
                instagram
                linkedin
                site_name
                site_url
                twitter
              }
            }
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props} />}
  />
);

