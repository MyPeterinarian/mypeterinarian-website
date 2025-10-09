import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Pet Passport Services - Travel Documents for Pets | MyPeterinarian',
      description: 'Complete pet passport services in Copenhagen: EU pet passports, travel health certificates, microchipping, and vaccination records. Make traveling with your pet easy and safe.'
    },
    dk: {
      title: 'Kæledyrspas Tjenester - Rejsedokumenter til Kæledyr | MyPeterinarian',
      description: 'Komplette kæledyrspas-tjenester i København: EU kæledyrspas, rejse sundhedscertifikater, mikro chipping og vaccinationsregistre. Gør rejser med dit kæledyr nemt og sikkert.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    keywords: ['pet passport', 'EU pet passport', 'pet travel documents', 'microchipping', 'pet travel certificate', 'travel with pets'],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/pet-passport`,
      languages: {
        'en': `${baseUrl}/en/services/pet-passport`,
        'da': `${baseUrl}/dk/services/pet-passport`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/services/pet-passport`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
