import NextHead from 'next/head'

type HeadProps = {
  title: string
  description?: string
  keywords?: string[]
  ogImage?: string
  url?: string
}

const defaultData = {
  siteName: 'Your Site Name',
  siteUrl: 'https://your-site-url.com',
  description: 'Your site description',
  ogImageUrl: 'https://your-site-url.com/og-image.png',
}

const Head = ({
  title,
  description = defaultData.description,
  keywords = [],
  ogImage = defaultData.ogImageUrl,
  url = defaultData.siteUrl,
}: HeadProps) => {
  const pageTitle = title
    ? `${title} | ${defaultData.siteName}`
    : defaultData.siteName

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(',')} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={url} />
    </NextHead>
  )
}

export default Head
