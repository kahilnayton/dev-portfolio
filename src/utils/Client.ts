import Prismic from 'prismic-javascript';
import DefaultClient from '@prismicio/client';
import type Document from '@prismicio/client';

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT!;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN!;

const Client = DefaultClient(apiEndpoint, { accessToken });

export async function getAllByType(type: string, options = {}) {
  const { graphQuery = '', ...restOptions } = options;
  const response = await Client.query(
    Prismic.Predicates.at('document.type', type),
    {
      ...restOptions,
      fetchLinks: graphQuery
        .split('{')
        .filter((part) => part.startsWith('... on'))
        .map((part) => part.slice(7, -1)),
    }
  );
  return response.results.map((page: Document) => ({
    ...page,
    data: PrismicDOM.RichText.asHtml(page.data),
  }));
}

export default Client;
