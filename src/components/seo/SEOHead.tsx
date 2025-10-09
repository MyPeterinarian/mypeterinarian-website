/**
 * SEO Head Component
 * Manages meta tags, Open Graph, Twitter Cards, and structured data
 */

import { NextSeo, NextSeoProps } from 'next-seo'
import { useLocale } from 'next-intl'

interface SEOHeadProps extends NextSeoProps {
  /** Page title */
  title: string
  /** Page description */
  description: string
  /** Canonical URL (optional, defaults to current page) */
  canonical?: string
  /** Open Graph image URL */
  image?: string
  /** Open Graph image alt text */
  imageAlt?: string
  /** Article-specific metadata */
  article?: {
    publishedTime?: string
    modifiedTime?: string
    authors?: string[]
    tags?: string[]
  }
  /** Structured data (JSON-LD) */
  structuredData?: object
}

export function SEOHead({
  title,
  description,
  canonical,
  image = '/images/og-default.jpg',
  imageAlt = 'MyPeterinarian - Professional Pet Care in Copenhagen',
  article,
  structuredData,
  ...props
}: SEOHeadProps) {
  const locale = useLocale()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mypeterinarian.com'
  const siteName = 'MyPeterinarian'

  // Build full canonical URL
  const canonicalUrl = canonical || `${siteUrl}/${locale}`
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title,
          description,
          images: [
            {
              url: imageUrl,
              alt: imageAlt,
              width: 1200,
              height: 630,
            },
          ],
          siteName,
          locale: locale === 'dk' ? 'da_DK' : 'en_US',
          type: article ? 'article' : 'website',
          ...(article && {
            article: {
              publishedTime: article.publishedTime,
              modifiedTime: article.modifiedTime,
              authors: article.authors,
              tags: article.tags,
            },
          }),
        }}
        twitter={{
          handle: '@mypeterinarian',
          site: '@mypeterinarian',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'format-detection',
            content: 'telephone=no',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
        languageAlternates={[
          {
            hrefLang: 'da',
            href: `${siteUrl}/dk`,
          },
          {
            hrefLang: 'en',
            href: `${siteUrl}/en`,
          },
          {
            hrefLang: 'x-default',
            href: `${siteUrl}/en`,
          },
        ]}
        {...props}
      />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  )
}
