import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veterinary Services Copenhagen | MyPeterinarian - Expert Pet Healthcare',
  description: 'Professional veterinary services in Copenhagen including examinations, vaccinations, surgery, dental care, and emergency services. Expert care for your pets by licensed veterinarians.',
  keywords: [
    'veterinarian Copenhagen',
    'vet Copenhagen',
    'pet doctor Copenhagen',
    'animal hospital Copenhagen',
    'veterinary clinic Copenhagen',
    'pet healthcare Copenhagen',
    'emergency vet Copenhagen',
    'pet surgery Copenhagen',
    'pet vaccinations Copenhagen',
    'veterinary services København',
  ],
  openGraph: {
    title: 'Veterinary Services Copenhagen | MyPeterinarian',
    description: 'Professional veterinary services in Copenhagen. Expert care for your pets including examinations, vaccinations, surgery, and emergency services.',
    url: 'https://www.mypeterinarian.com/services/veterinary',
    type: 'website',
    images: [
      {
        url: 'https://www.mypeterinarian.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'MyPeterinarian Veterinary Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veterinary Services Copenhagen | MyPeterinarian',
    description: 'Professional veterinary services in Copenhagen. Expert care for your pets.',
  },
  alternates: {
    canonical: 'https://www.mypeterinarian.com/services/veterinary',
    languages: {
      'en': 'https://www.mypeterinarian.com/en/services/veterinary',
      'da': 'https://www.mypeterinarian.com/dk/services/veterinary',
    },
  },
};

export default function VeterinaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
