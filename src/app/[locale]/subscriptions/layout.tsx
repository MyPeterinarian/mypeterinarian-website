import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Care Subscription Plans Copenhagen | MyPeterinarian - Affordable Preventive Care',
  description: 'Affordable pet care subscription plans in Copenhagen with up to 70% savings. Comprehensive preventive care including health check-ups, vaccinations, parasite treatments, and more. No long-term commitment.',
  keywords: [
    'pet subscription Copenhagen',
    'pet care plans Copenhagen',
    'veterinary subscription København',
    'affordable vet care Copenhagen',
    'preventive pet care Copenhagen',
    'pet health plans Copenhagen',
    'dog subscription Copenhagen',
    'cat subscription Copenhagen',
    'pet wellness plans Copenhagen',
    'veterinary membership Copenhagen',
    'pet insurance alternative Copenhagen',
    'monthly pet care Copenhagen',
  ],
  openGraph: {
    title: 'Affordable Pet Care Subscription Plans | MyPeterinarian Copenhagen',
    description: 'Save up to 70% on comprehensive preventive pet care with our subscription plans. Health check-ups, vaccinations, parasite treatments, and more. No long-term commitment required.',
    url: 'https://www.mypeterinarian.com/subscriptions',
    type: 'website',
    images: [
      {
        url: 'https://www.mypeterinarian.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'MyPeterinarian Subscription Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Pet Care Subscription Plans | MyPeterinarian',
    description: 'Save up to 70% on comprehensive preventive pet care. No long-term commitment.',
  },
  alternates: {
    canonical: 'https://www.mypeterinarian.com/subscriptions',
    languages: {
      'en': 'https://www.mypeterinarian.com/en/subscriptions',
      'da': 'https://www.mypeterinarian.com/dk/subscriptions',
    },
  },
};

export default function SubscriptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
