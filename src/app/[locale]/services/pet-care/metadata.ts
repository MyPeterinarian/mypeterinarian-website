import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Pet Sitting Services - Professional Home Care | MyPeterinarian',
      description: 'Trusted pet sitting in Copenhagen: daily visits, overnight care, regular updates with photos. Professional and loving care for your pets while you\'re away.'
    },
    dk: {
      title: 'Kæledyrsophold Tjenester - Professionel Hjemmepleje | MyPeterinarian',
      description: 'Pålidelig kæledyrsophold i København: daglige besøg, nat pleje, regelmæssige opdateringer med fotos. Professionel og kærlig pleje til dine kæledyr mens du er væk.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    keywords: ['pet sitting Copenhagen', 'dog sitting', 'cat sitting', 'pet care at home', 'overnight pet care'],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/pet-sitting`,
      languages: {
        'en': `${baseUrl}/en/services/pet-sitting`,
        'da': `${baseUrl}/dk/services/pet-sitting`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/services/pet-sitting`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
