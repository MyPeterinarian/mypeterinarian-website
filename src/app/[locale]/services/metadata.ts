import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Our Services - Pet Care, Grooming & Veterinary | MyPeterinarian',
      description: 'Comprehensive pet services in Copenhagen: veterinary care, professional grooming, pet sitting, and pet passport services. Expert care for your furry family members.'
    },
    dk: {
      title: 'Vores Tjenester - Kæledyrspleje, Pleje & Dyrlæge | MyPeterinarian',
      description: 'Omfattende kæledyrstjenester i København: dyrlægehjælp, professionel pleje, kæledyrsophold og kæledyrspas-tjenester. Ekspert pleje til dine pelskl ædte familiemedlemmer.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        'en': `${baseUrl}/en/services`,
        'da': `${baseUrl}/dk/services`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/services`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
