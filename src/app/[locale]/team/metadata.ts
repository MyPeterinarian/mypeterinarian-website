import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Meet Our Team - Expert Pet Care Professionals | MyPeterinarian',
      description: 'Meet our dedicated team of veterinarians, groomers, and pet care specialists in Copenhagen. Passionate professionals committed to your pet\'s health and happiness.'
    },
    dk: {
      title: 'Mød Vores Team - Ekspert Kæledyrspleje Professionelle | MyPeterinarian',
      description: 'Mød vores dedikerede team af dyrlæger, groommere og kæledyrsplejespecialister i København. Passionerede fagfolk dedikeret til dit kæledyrs sundhed og lykke.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    keywords: ['veterinary team Copenhagen', 'pet care team', 'veterinarians', 'pet groomers', 'pet care specialists', 'MyPeterinarian team'],
    alternates: {
      canonical: `${baseUrl}/${locale}/team`,
      languages: {
        'en': `${baseUrl}/en/team`,
        'da': `${baseUrl}/dk/team`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/team`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
