import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Define supported locales
export const locales = ['dk', 'en'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Use requestLocale for App Router
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
