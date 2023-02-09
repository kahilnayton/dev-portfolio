
/*
 * Blog homepage query
 */
export const homePageQuery = `{
    query{
      allHomes {
        edges {
          node {
            bio {
              ... on Bio {
                heading
                content
                _meta {
                  uid
                }
                profile_pic
                video {
                  ... on _FileLink {
                    _linkType
                    name
                    size
                    url
                  }
                }
              }
            }
            content
            heading
            project_heading
            project_list {
              project {
                ... on Project {
                  title
                  description
                  preview_text
                  release_date
                  _meta {
                    uid
                  }
                  project_image
                  project_link {
                    ... on _ExternalLink {
                      url
                      target
                    }
                  }
                }
              }
            }
            contact_list {
              contact {
                ... on Contact {
                  link_label
                  _linkType
                  _meta {
                    uid
                  }
                  link {
                    ... on _ExternalLink {
                      url
                    }
                  }
                }
              }
            }
            body {
              ... on HomeBodyHero {
                type
                label
                primary {
                  background_image
                  hero_content
                  hero_title
                }
              }
              ... on HomeBodySeo {
                type
                label
                primary {
                  title
                  description
                  preview_image
                  url
                  site_name
                }
              }
            }
            contact_heading
            blog_list {
              blog {
                ... on Blog {
                  title
                  description
                  preview_text
                  release_date
                  _meta {
                    uid
                  }
                  blog_image
                  tech_stack {
                    tech
                  }
                  blog_link {
                    ... on _ExternalLink {
                      target
                      url
                    }
                  }
                }
              }
            }
            blog_heading
          }
        }
      }
    }
  }`;

/*
 * Blog Landing query
 */

  export const BlogLandingQuery = `{
  query {
    allBlog_pages {
      edges {
        node {
          title
          _meta {
            uid
          }
          body {
            ... on Blog_pageBodyHero {
              type
              label
              primary {
                hero_content
                hero_title
                background_image
              }
            }
            ... on Blog_pageBodySeo {
              type
              label
              primary {
                title
                description
                preview_image
                url
                site_name
              }
            }
          }
          blog_list {
            blog {
              ... on Blog {
                title
                description
                preview_text
                release_date
                blog_image
                tech_stack {
                  tech
                }
                blog_link {
                  ... on _ExternalLink {
                    target
                    url
                  }
                }
                _meta {
                  uid
                }
                release_date
              }
            }
          }
        }
      }
    }
  }
}`