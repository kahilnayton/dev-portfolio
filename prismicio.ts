import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
// import { API_TOKEN } from '@/lib/api'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = 'kahildev'

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'homepage',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
]

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient('kahildev', config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}