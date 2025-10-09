import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Pet Grooming Services - Professional Dog & Cat Grooming | MyPeterinarian',
      description: 'Premium pet grooming in Copenhagen: full grooming packages, nail trimming, spa treatments, and breed-specific styling. Expert care for your pet\'s appearance and hygiene.'
    },
    dk: {
      title: 'Kæledyrsplejetjenester - Professionel Hund & Kat Pleje | MyPeterinarian',
      description: 'Premium kæledyrspleje i København: fulde plejepakker, negleklipning, spa-behandlinger og racespecifik styling. Ekspert pleje til dit kæledyrs udseende og hygiejne.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    keywords: ['dog grooming Copenhagen', 'cat grooming', 'pet spa', 'nail trimming', 'pet hygiene', 'breed styling'],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/grooming`,
      languages: {
        'en': `${baseUrl}/en/services/grooming`,
        'da': `${baseUrl}/dk/services/grooming`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/services/grooming`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
