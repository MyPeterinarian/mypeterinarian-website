import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Contact Us - MyPeterinarian Copenhagen',
      description: 'Get in touch with MyPeterinarian. Visit us at Peder Hvitfeldts Straede 16, 1173 Copenhagen or call +45 61 66 76 11. Professional pet care services available.'
    },
    dk: {
      title: 'Kontakt Os - MyPeterinarian København',
      description: 'Kom i kontakt med MyPeterinarian. Besøg os på Peder Hvitfeldts Straede 16, 1173 København eller ring +45 61 66 76 11. Professionelle kæledyrsplejetjenester tilgængelige.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        'en': `${baseUrl}/en/contact`,
        'da': `${baseUrl}/dk/contact`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/contact`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
