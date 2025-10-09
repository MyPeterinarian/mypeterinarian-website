import Script from 'next/script';

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'MyPeterinarian',
    image: `${baseUrl}/logo.png`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: '+4561667611',
    email: 'hej@mypeterinarian.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Peder Hvitfeldts Straede 16',
      addressLocality: 'Copenhagen',
      postalCode: '1173',
      addressCountry: 'DK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.6761,
      longitude: 12.5683,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/MyPeterinarian/',
      'https://www.instagram.com/mypeterinarian.cph/',
      'https://www.tiktok.com/@mypeterinarian',
      'https://www.youtube.com/@mypeterinarian',
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Copenhagen',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pet Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'dk' ? 'Dyrlægetjenester' : 'Veterinary Services',
            description:
              locale === 'dk'
                ? 'Komplet dyrlægehjælp inklusive undersøgelser, vaccinationer og akutbehandling'
                : 'Complete veterinary care including examinations, vaccinations, and relocation services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'dk' ? 'Kæledyrspleje' : 'Pet Grooming',
            description:
              locale === 'dk'
                ? 'Professionel pleje til hunde og katte'
                : 'Professional grooming services for dogs and cats',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'dk' ? 'Kæledyrsophold' : 'Pet Sitting',
            description:
              locale === 'dk'
                ? 'Pålidelig kæledyrsophold og hjemmepleje'
                : 'Reliable pet sitting and home care services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'dk' ? 'Kæledyrspas' : 'Pet Passport',
            description:
              locale === 'dk'
                ? 'EU kæledyrspas og rejsedokumenter'
                : 'EU pet passport and travel documentation services',
          },
        },
      ],
    },
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MyPeterinarian',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+4561667611',
      contactType: 'customer service',
      email: 'hej@mypeterinarian.com',
      areaServed: 'DK',
      availableLanguage: ['English', 'Danish'],
    },
    sameAs: [
      'https://www.facebook.com/MyPeterinarian/',
      'https://www.instagram.com/mypeterinarian.cph/',
      'https://www.tiktok.com/@mypeterinarian',
      'https://www.youtube.com/@mypeterinarian',
    ],
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MyPeterinarian',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
