import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'dk',

  // Always show locale in URL
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  // Skip Next.js internals and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
