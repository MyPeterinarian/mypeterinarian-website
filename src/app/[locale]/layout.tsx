import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import Chatbot from '@/components/Chatbot';
import { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'MyPeterinarian - Premier Pet Care & Veterinary Services in Copenhagen',
      description: 'Expert veterinary care, grooming, and pet services in Copenhagen. Professional pet care including health checks, vaccinations, grooming, and pet sitting. Book your appointment today!'
    },
    dk: {
      title: 'MyPeterinarian - Førende Kæledyrspleje & Dyrlægetjenester i København',
      description: 'Ekspert dyrlægehjælp, pleje og kæledyrstjenester i København. Professionel kæledyrspleje inklusive sundhedstjek, vaccinationer, pleje og kæledyrsophold. Book din tid i dag!'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: {
      default: localeData.title,
      template: `%s | MyPeterinarian`
    },
    description: localeData.description,
    keywords: [
      'veterinarian Copenhagen',
      'pet care Copenhagen',
      'dog grooming Copenhagen',
      'cat veterinarian',
      'pet sitting Copenhagen',
      'animal clinic',
      'pet relocation',
      'pet health',
      'vaccination services',
      'pet passport'
    ],
    authors: [{ name: 'MyPeterinarian' }],
    creator: 'MyPeterinarian',
    publisher: 'MyPeterinarian',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'da': `${baseUrl}/dk`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: 'MyPeterinarian',
      title: localeData.title,
      description: localeData.description,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'MyPeterinarian - Premier Pet Care Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localeData.title,
      description: localeData.description,
      images: [`${baseUrl}/og-image.jpg`],
      creator: '@mypeterinarian',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-site-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as 'en' | 'dk')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <StructuredData locale={locale} />
      <Header />
      {children}
      <Footer />
      <Chatbot />
      <SpeedInsights />
      <Analytics />
    </NextIntlClientProvider>
  );
}
