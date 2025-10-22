import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wellness Plan Terms & Conditions | MyPeterinarian Copenhagen',
  description: 'Complete terms and conditions for MyPeterinarian wellness plans. Learn about our 12-month commitment, 14-day cooling-off period, cancellation policy, Value Reconciliation Fee, and special circumstances. Transparent pricing and fair policies for Copenhagen pet care.',
  keywords: [
    'wellness plan terms',
    'pet subscription terms Copenhagen',
    'veterinary plan conditions',
    'cancellation policy Copenhagen',
    'pet care terms Copenhagen',
    'wellness plan contract',
    'value reconciliation fee',
    'cooling-off period pet care',
    'pet plan cancellation Copenhagen',
    'veterinary subscription terms',
  ],
  openGraph: {
    title: 'Wellness Plan Terms & Conditions | MyPeterinarian',
    description: 'Transparent terms for our wellness plans: 12-month commitment, 14-day trial, fair cancellation policy, and special circumstances coverage.',
    url: 'https://www.mypeterinarian.com/wellness-plan-terms',
    type: 'article',
    images: [
      {
        url: 'https://www.mypeterinarian.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'MyPeterinarian Terms & Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellness Plan Terms & Conditions | MyPeterinarian',
    description: 'Transparent, fair terms for wellness plans. Read our commitment to pet families.',
  },
  alternates: {
    canonical: 'https://www.mypeterinarian.com/wellness-plan-terms',
    languages: {
      'en': 'https://www.mypeterinarian.com/en/wellness-plan-terms',
      'da': 'https://www.mypeterinarian.com/dk/wellness-plan-terms',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WellnessPlanTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
