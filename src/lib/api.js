
// TODO: deprecated need to migrate all these queries
import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_API_TOKEN
export const API_LOCALE = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_LOCALE

export const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
export const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US',
        Authorization: `Token ${API_TOKEN}`,
      },
    },
  )

  if (res.status !== 200) {
    console.warn(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllBlogsWithSlug() {
  const data = await fetchAPI(`
    {
      allBlogs {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allBlogs?.edges
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(`
    {
      allProjects {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allProjects?.edges
}

export async function getAllHomepage(previewData) {
  const data = await fetchAPI(
    `
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
  `,
    { previewData },
  )

  return data
}

export async function getAllProjectPage(previewData) {
  const data = await fetchAPI(
    `
    query {
      allProject_pages {
        edges {
          node {
            title
            body {
              ... on Project_pageBodyHero {
                type
                label
                primary {
                  hero_content
                  hero_title
                  background_image
                }
              }
              ... on Project_pageBodySeo {
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
            _meta {
              uid
            }
            projects_list {
              project {
                ... on Project {
                  title
                  description
                  preview_text
                  project_gif
                  project_image
                  tech_stack {
                    tech
                  }
                  project_link {
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
  `,
    { previewData },
  )

  return data
}

export async function getAllBlogPage(previewData) {
  const data = await fetchAPI(
    `
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
  `,
    { previewData },
  )

  return data
}

export async function getBlog(slug, previewData) {
  const data = await fetchAPI(
    `
  query BlogBySlug($slug: String!, $lang: String!) {
    blog(uid: $slug, lang: $lang) {
      title
      release_date
      blog_link {
        __typename
        ... on _ExternalLink {
          url
        }
      }
      description
      blog_image
      tech_stack {
        tech
      }
      _meta {
        uid
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    },
  )
  return data
}

export async function getProject(slug, previewData) {
  const data = await fetchAPI(
    `
      query ProjectBySlug($slug: String!, $lang: String!) {
      project(uid: $slug, lang: $lang) {
        title
        release_date
        project_link {
          __typename
          ... on _ExternalLink {
            url
          }
        }
        description
        project_image
        project_gif
        tech_stack {
          tech
        }
        _meta {
          uid
        }
      }
    }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    },
  )
  return data
}
