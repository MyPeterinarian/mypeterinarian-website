'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: string) => {
    // Get the current pathname without the locale
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the locale segment
    const newPathname = segments.join('/');
    router.push(newPathname);
  };

  const currentLocale = pathname.split('/')[1];

  if (isMobile) {
    return (
      <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
        <span className="text-sm text-gray-600 font-medium">Language:</span>
        <div className="flex gap-2">
          <button
            onClick={() => switchLanguage('en')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded border-2 transition-colors ${
              currentLocale === 'en'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-300 hover:border-blue-600'
            }`}
          >
            <Image src="/flags/en.png" alt="English" width={16} height={16} className="w-4 h-4 object-cover rounded-sm" />
            <span className="text-xs font-medium text-gray-700">EN</span>
          </button>
          <button
            onClick={() => switchLanguage('dk')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded border-2 transition-colors ${
              currentLocale === 'dk'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-300 hover:border-blue-600'
            }`}
          >
            <Image src="/flags/dk.png" alt="Dansk" width={16} height={16} className="w-4 h-4 object-cover rounded-sm" />
            <span className="text-xs font-medium text-gray-700">DK</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`w-6 h-6 xl:w-7 xl:h-7 rounded overflow-hidden border-2 transition-colors ${
          currentLocale === 'en'
            ? 'border-blue-600'
            : 'border-gray-300 hover:border-blue-600'
        }`}
      >
        <Image src="/flags/en.png" alt="English" width={28} height={28} className="w-full h-full object-cover" />
      </button>
      <button
        onClick={() => switchLanguage('dk')}
        className={`w-6 h-6 xl:w-7 xl:h-7 rounded overflow-hidden border-2 transition-colors ${
          currentLocale === 'dk'
            ? 'border-blue-600'
            : 'border-gray-300 hover:border-blue-600'
        }`}
      >
        <Image src="/flags/dk.png" alt="Dansk" width={28} height={28} className="w-full h-full object-cover" />
      </button>
    </div>
  );
}
