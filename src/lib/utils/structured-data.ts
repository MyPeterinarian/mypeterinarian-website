/**
 * Structured Data Utilities
 * Helper functions to generate JSON-LD structured data for SEO
 */

interface Address {
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressCountry: string
}

interface ContactPoint {
  telephone: string
  contactType: string
  email?: string
  availableLanguage?: string[]
}

/**
 * Generates LocalBusiness structured data for MyPeterinarian
 */
export function generateLocalBusinessSchema(locale: string = 'da') {
  const address: Address = {
    streetAddress: 'Your Street Address',
    addressLocality: 'Copenhagen',
    postalCode: '2100',
    addressCountry: 'DK',
  }

  const contactPoint: ContactPoint = {
    telephone: '+45-YOUR-PHONE',
    contactType: 'Customer Service',
    email: 'info@mypeterinarian.com',
    availableLanguage: ['Danish', 'English'],
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'MyPeterinarian',
    description:
      locale === 'da'
        ? 'Professionel dyrlæge og kæledyrspleje i København'
        : 'Professional veterinary and pet care services in Copenhagen',
    url: 'https://mypeterinarian.com',
    logo: 'https://mypeterinarian.com/images/logo.png',
    image: 'https://mypeterinarian.com/images/clinic.jpg',
    telephone: contactPoint.telephone,
    email: contactPoint.email,
    address,
    contactPoint,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/mypeterinarian',
      'https://www.instagram.com/mypeterinarian',
    ],
  }
}

/**
 * Generates Service structured data
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  price?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'VeterinaryCare',
      name: 'MyPeterinarian',
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'DKK',
      },
    }),
  }
}

/**
 * Generates Article structured data for blog posts
 */
export function generateArticleSchema(
  title: string,
  description: string,
  publishedTime: string,
  modifiedTime: string,
  authorName: string,
  imageUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MyPeterinarian',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mypeterinarian.com/images/logo.png',
      },
    },
  }
}

/**
 * Generates FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generates Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MyPeterinarian',
    url: 'https://mypeterinarian.com',
    logo: 'https://mypeterinarian.com/images/logo.png',
    description: 'Professional veterinary and pet care services in Copenhagen, Denmark',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+45-YOUR-PHONE',
      contactType: 'Customer Service',
      email: 'info@mypeterinarian.com',
      availableLanguage: ['Danish', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/mypeterinarian',
      'https://www.instagram.com/mypeterinarian',
    ],
  }
}
