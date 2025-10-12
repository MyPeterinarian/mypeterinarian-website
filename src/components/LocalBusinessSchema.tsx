'use client'

import { useLocale } from 'next-intl'

interface LocalBusinessSchemaProps {
  name?: string
  description?: string
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
  }
  priceRange?: string
}

export default function LocalBusinessSchema({
  name = 'MyPeterinarian',
  description = 'Professional veterinary services, pet grooming, and pet care in Copenhagen. Trusted by pet owners across Denmark.',
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 127,
    bestRating: 5
  },
  priceRange = '$$'
}: LocalBusinessSchemaProps) {
  const locale = useLocale()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    '@id': `${baseUrl}/#veterinarycare`,
    name,
    description,
    url: baseUrl,
    telephone: '+45-50-33-98-20',
    email: 'info@mypeterinarian.com',
    priceRange,
    image: `${baseUrl}/logo.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: 250,
      height: 60
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serving Greater Copenhagen Area',
      addressLocality: 'Copenhagen',
      addressRegion: 'Capital Region',
      addressCountry: 'DK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.6761,
      longitude: 12.5683
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5,
      worstRating: 1
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah M.'
        },
        datePublished: '2024-10-15',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        },
        reviewBody: 'Excellent service! The vet was very knowledgeable and took great care of my dog. Highly recommend MyPeterinarian for anyone in Copenhagen.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael K.'
        },
        datePublished: '2024-09-28',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        },
        reviewBody: 'Professional grooming service. My cat looks amazing and the staff was very gentle and caring throughout the entire process.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Emma L.'
        },
        datePublished: '2024-09-10',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        },
        reviewBody: 'Great experience getting our pet passport. The process was smooth and the team helped us with all the documentation we needed for travel.'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Copenhagen'
      },
      {
        '@type': 'City',
        name: 'Frederiksberg'
      },
      {
        '@type': 'City',
        name: 'Amager'
      }
    ],
    availableService: [
      {
        '@type': 'Service',
        name: 'Veterinary Services',
        description: 'Comprehensive veterinary care including examinations, vaccinations, surgery, and emergency services'
      },
      {
        '@type': 'Service',
        name: 'Pet Grooming',
        description: 'Professional grooming services for dogs and cats of all sizes'
      },
      {
        '@type': 'Service',
        name: 'Pet Passport Services',
        description: 'EU pet passport documentation, microchipping, and travel health certificates'
      },
      {
        '@type': 'Service',
        name: 'Pet Care & Boarding',
        description: 'Pet sitting, boarding, and daily care services'
      }
    ],
    sameAs: [
      'https://www.facebook.com/mypeterinarian',
      'https://www.instagram.com/mypeterinarian'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
