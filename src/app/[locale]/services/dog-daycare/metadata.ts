import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Dog Daycare Copenhagen | Professional Dog Daycare Services | MyPeterinarian',
      description: 'Professional dog daycare in Copenhagen. Full day care from 680 DKK, half day 400 DKK. Supervised play, socialization, and expert care at Peder Hvitfeldts Stræde 16, 1173 København.'
    },
    dk: {
      title: 'Hundedagpleje København | Professionel Hundedagpleje | MyPeterinarian',
      description: 'Professionel hundedagpleje i København. Fuld dagpleje fra 680 Kr, halv dag 400 Kr. Overvåget leg, socialisering og ekspertpleje på Peder Hvitfeldts Stræde 16, 1173 København.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    keywords: ['dog daycare Copenhagen', 'hundedagpleje København', 'dog daycare', 'pet daycare', 'dog care Copenhagen', 'supervised dog play', 'dog socialization'],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/dog-daycare`,
      languages: {
        'en': `${baseUrl}/en/services/dog-daycare`,
        'da': `${baseUrl}/dk/services/dog-daycare`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/services/dog-daycare`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
