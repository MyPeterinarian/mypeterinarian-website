import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Care & Boarding Copenhagen | MyPeterinarian - Trusted Pet Sitting',
  description: 'Professional pet care and boarding services in Copenhagen. Daily visits, overnight stays, dog walking, and medication administration. Trusted care for your pets.',
  keywords: [
    'pet care Copenhagen',
    'pet sitting Copenhagen',
    'dog boarding Copenhagen',
    'cat boarding Copenhagen',
    'pet boarding København',
    'dog walking Copenhagen',
    'pet sitter Copenhagen',
    'overnight pet care Copenhagen',
    'pet hotel Copenhagen',
    'kæledyrspasning København',
  ],
  openGraph: {
    title: 'Pet Care & Boarding Copenhagen | MyPeterinarian',
    description: 'Professional pet care and boarding services in Copenhagen. Daily visits, overnight stays, and trusted care for your pets while you\'re away.',
    url: 'https://www.mypeterinarian.com/services/pet-care',
    type: 'website',
    images: [
      {
        url: 'https://www.mypeterinarian.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'MyPeterinarian Pet Care Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Care & Boarding Copenhagen | MyPeterinarian',
    description: 'Professional pet care and boarding services in Copenhagen. Trusted care for your pets.',
  },
  alternates: {
    canonical: 'https://www.mypeterinarian.com/services/pet-care',
    languages: {
      'en': 'https://www.mypeterinarian.com/en/services/pet-care',
      'da': 'https://www.mypeterinarian.com/dk/services/pet-care',
    },
  },
};

export default function PetCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
