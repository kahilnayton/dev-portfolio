import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
// import { API_TOKEN } from '@/lib/api'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = 'kahildev'

const REPOSITORY = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME || ''
const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_API_TOKEN
const CONFIG = {
  // If your repository is private, add an access token
  accessToken: API_TOKEN,

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'page',
      path: '/:uid',
    },
  ],
}

export function prismicClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(REPOSITORY, config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}
