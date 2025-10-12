import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com';
  const currentDate = new Date().toISOString();

  // Base routes
  const routes = [
    '',
    '/services',
    '/services/veterinary',
    '/services/grooming',
    '/services/pet-care',
    '/services/pet-passport',
    '/contact',
    '/team',
    '/subscriptions',
    '/blog',
  ];

  // Locales
  const locales = ['en', 'dk'];

  // Generate sitemap entries for all routes and locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add main routes
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'daily' : route === '/contact' ? 'monthly' : route === '/blog' ? 'weekly' : 'weekly',
        priority: route === '' ? 1 : route.includes('/services/') ? 0.9 : route === '/blog' ? 0.8 : 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            da: `${baseUrl}/dk${route}`,
          },
        },
      });
    });
  });

  // Add blog posts
  locales.forEach((locale) => {
    blogPosts.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            en: `${baseUrl}/en/blog/${post.slug}`,
            da: `${baseUrl}/dk/blog/${post.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
