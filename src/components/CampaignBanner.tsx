'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export default function CampaignBanner() {
  const t = useTranslations('campaignBanner');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Campaign info */}
          <div className="flex items-center gap-3 sm:gap-4 text-white">
            <div className="flex-shrink-0">
              <div className="relative">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 opacity-75" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t('badge')}
                </span>
                <div className="hidden sm:flex items-center gap-1.5 text-white/90">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('limited')}</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                {t('title')}
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl">
                {t('description')}
              </p>
            </div>
          </div>

          {/* Right side - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href={`/${locale}/preventive-testing`}
              className="group bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/booking`}
              className="bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-green-800 transition-colors border-2 border-white/30 text-center"
            >
              {t('bookNow')}
            </Link>
          </div>
        </div>

        {/* Bottom strip - Key features */}
        <div className="hidden lg:flex items-center justify-center gap-8 mt-6 pt-6 border-t border-white/20 text-white/90">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{t('feature1')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{t('feature2')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{t('feature3')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
