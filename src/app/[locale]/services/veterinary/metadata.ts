import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';

  const metadata: Record<string, {
    title: string;
    description: string;
  }> = {
    en: {
      title: 'Veterinary Care - Professional Pet Health Services | MyPeterinarian',
      description: 'Expert veterinary services in Copenhagen: health examinations, vaccinations, emergency care, and preventive medicine. Professional care for dogs, cats, and small pets.'
    },
    dk: {
      title: 'Dyrlægehjælp - Professionelle Kæledyrssundhedstjenester | MyPeterinarian',
      description: 'Ekspert dyrlægetjenester i København: sundhedsundersøgelser, vaccinationer, akut hjælp og forebyggende medicin. Professionel pleje til hunde, katte og små kæledyr.'
    }
  };

  const localeData = metadata[locale] || metadata.en;

  return {
    title: localeData.title,
    description: localeData.description,
    keywords: ['veterinarian Copenhagen', 'pet health', 'vaccinations', 'emergency vet', 'animal clinic', 'dog vet', 'cat vet'],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/veterinary`,
      languages: {
        'en': `${baseUrl}/en/services/veterinary`,
        'da': `${baseUrl}/dk/services/veterinary`,
      },
    },
    openGraph: {
      title: localeData.title,
      description: localeData.description,
      url: `${baseUrl}/${locale}/services/veterinary`,
      siteName: 'MyPeterinarian',
      type: 'website',
      locale: locale === 'dk' ? 'da_DK' : 'en_US',
    },
  };
}
