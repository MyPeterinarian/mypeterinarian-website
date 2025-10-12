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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Copenhagen',
      },
      {
        '@type': 'City',
        name: 'København',
      },
    ],
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
                ? 'Komplet dyrlægehjælp inklusive undersøgelser, vaccinationer og akutbehandling i København'
                : 'Complete veterinary care including examinations, vaccinations, and relocation services in Copenhagen',
            provider: {
              '@type': 'VeterinaryCare',
              name: 'MyPeterinarian',
            },
            areaServed: 'Copenhagen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'dk' ? 'Kæledyrspleje' : 'Pet Grooming',
            description:
              locale === 'dk'
                ? 'Professionel pleje til hunde og katte i København'
                : 'Professional grooming services for dogs and cats in Copenhagen',
            provider: {
              '@type': 'VeterinaryCare',
              name: 'MyPeterinarian',
            },
            areaServed: 'Copenhagen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'dk' ? 'Kæledyrsophold' : 'Pet Care Services',
            description:
              locale === 'dk'
                ? 'Pålidelig kæledyrsophold og hjemmepleje i København'
                : 'Reliable pet care, boarding and home care services in Copenhagen',
            provider: {
              '@type': 'VeterinaryCare',
              name: 'MyPeterinarian',
            },
            areaServed: 'Copenhagen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'dk' ? 'Kæledyrspas' : 'Pet Passport',
            description:
              locale === 'dk'
                ? 'EU kæledyrspas og rejsedokumenter i København'
                : 'EU pet passport and travel documentation services in Copenhagen',
            provider: {
              '@type': 'VeterinaryCare',
              name: 'MyPeterinarian',
            },
            areaServed: 'Copenhagen',
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

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'dk' ? 'Hvad er jeres åbningstider?' : 'What are your opening hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'dk'
            ? 'Vi har åbent mandag til fredag fra 10:00 til 16:00. Vi tilbyder også akutbehandling efter aftale.'
            : 'We are open Monday to Friday from 10:00 AM to 4:00 PM. We also offer emergency care by appointment.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'dk' ? 'Hvilke dyrearter behandler I?' : 'What types of pets do you treat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'dk'
            ? 'Vi behandler primært hunde og katte, men kan også hjælpe med andre små kæledyr. Kontakt os for at høre om dit specifikke kæledyr.'
            : 'We primarily treat dogs and cats, but can also help with other small pets. Contact us to inquire about your specific pet.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'dk' ? 'Tilbyder I nødhjælp?' : 'Do you offer emergency services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'dk'
            ? 'Ja, vi tilbyder akutbehandling efter aftale. Ring til os på +45 61667611 for nødtilfælde.'
            : 'Yes, we offer emergency care by appointment. Call us at +45 61667611 for emergencies.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'dk' ? 'Hvor ligger I i København?' : 'Where are you located in Copenhagen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'dk'
            ? 'Vi er placeret på Peder Hvitfeldts Straede 16, 1173 København, tæt på centrum.'
            : 'We are located at Peder Hvitfeldts Straede 16, 1173 Copenhagen, close to the city center.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'dk' ? 'Tilbyder I kæledyrspas til rejser?' : 'Do you provide pet passports for travel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'dk'
            ? 'Ja, vi udsteder EU kæledyrspas og hjælper med alle nødvendige rejsedokumenter for dit kæledyr.'
            : 'Yes, we issue EU pet passports and assist with all necessary travel documentation for your pet.',
        },
      },
      {
        '@type': 'Question',
        name: locale === 'dk' ? 'Skal jeg bestille tid på forhånd?' : 'Do I need to book an appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'dk'
            ? 'Vi anbefaler at booke tid på forhånd for at sikre tilgængelighed. Du kan kontakte os via telefon eller email.'
            : 'We recommend booking an appointment in advance to ensure availability. You can contact us by phone or email.',
        },
      },
    ],
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
