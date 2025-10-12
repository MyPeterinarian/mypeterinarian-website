import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dog & Cat Grooming Copenhagen | MyPeterinarian - Professional Pet Grooming',
  description: 'Professional dog and cat grooming services in Copenhagen. Full grooming, bathing, haircuts, nail trimming, and spa treatments. Expert groomers for all breeds and sizes.',
  keywords: [
    'dog grooming Copenhagen',
    'cat grooming Copenhagen',
    'pet grooming Copenhagen',
    'dog haircut Copenhagen',
    'dog spa Copenhagen',
    'pet groomer Copenhagen',
    'dog bathing Copenhagen',
    'professional grooming København',
    'hundefrisør København',
    'kattepleje København',
  ],
  openGraph: {
    title: 'Dog & Cat Grooming Copenhagen | MyPeterinarian',
    description: 'Professional dog and cat grooming services in Copenhagen. Full grooming, bathing, haircuts, nail trimming, and spa treatments for all breeds.',
    url: 'https://www.mypeterinarian.com/services/grooming',
    type: 'website',
    images: [
      {
        url: 'https://www.mypeterinarian.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'MyPeterinarian Grooming Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dog & Cat Grooming Copenhagen | MyPeterinarian',
    description: 'Professional dog and cat grooming services in Copenhagen for all breeds and sizes.',
  },
  alternates: {
    canonical: 'https://www.mypeterinarian.com/services/grooming',
    languages: {
      'en': 'https://www.mypeterinarian.com/en/services/grooming',
      'da': 'https://www.mypeterinarian.com/dk/services/grooming',
    },
  },
};

export default function GroomingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
