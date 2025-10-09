import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';
  const currentDate = new Date().toISOString();

  // Base routes
  const routes = [
    '',
    '/services',
    '/services/veterinary',
    '/services/grooming',
    '/services/pet-sitting',
    '/services/pet-passport',
    '/contact',
  ];

  // Locales
  const locales = ['en', 'dk'];

  // Generate sitemap entries for all routes and locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'daily' : route === '/contact' ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : route.includes('/services/') ? 0.7 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            da: `${baseUrl}/dk${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
