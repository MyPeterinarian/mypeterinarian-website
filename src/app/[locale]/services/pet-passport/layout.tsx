import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EU Pet Passport Copenhagen | MyPeterinarian - Pet Travel Documentation',
  description: 'EU pet passport services in Copenhagen. Complete travel documentation for dogs and cats including microchipping, vaccinations, and health certificates for international travel.',
  keywords: [
    'pet passport Copenhagen',
    'EU pet passport Copenhagen',
    'pet travel documents Copenhagen',
    'pet passport København',
    'kæledyrspas København',
    'pet microchip Copenhagen',
    'pet travel certificate Copenhagen',
    'international pet travel Copenhagen',
    'pet export documentation Copenhagen',
    'pet relocation Copenhagen',
  ],
  openGraph: {
    title: 'EU Pet Passport Copenhagen | MyPeterinarian',
    description: 'EU pet passport services in Copenhagen. Complete travel documentation for your pets including microchipping and health certificates.',
    url: 'https://www.mypeterinarian.com/services/pet-passport',
    type: 'website',
    images: [
      {
        url: 'https://www.mypeterinarian.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'MyPeterinarian Pet Passport Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU Pet Passport Copenhagen | MyPeterinarian',
    description: 'EU pet passport services and complete travel documentation for your pets in Copenhagen.',
  },
  alternates: {
    canonical: 'https://www.mypeterinarian.com/services/pet-passport',
    languages: {
      'en': 'https://www.mypeterinarian.com/en/services/pet-passport',
      'da': 'https://www.mypeterinarian.com/dk/services/pet-passport',
    },
  },
};

export default function PetPassportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
