'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function CampaignBanner() {
  const t = useTranslations('campaignBanner');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="bg-gradient-to-br from-[#F5F7F9] to-white border-b border-gray-200 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B8FA9] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8FA998] rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Campaign info */}
          <div className="flex items-start gap-4 sm:gap-6 text-center md:text-left">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-16 h-16 bg-[#A8BCAE] rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="bg-[#6B8FA9] text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
                  {t('badge')}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-gray-600 text-sm font-light">
                  <CheckCircle className="w-4 h-4 text-[#8FA998]" />
                  {t('limited')}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#2C3E50] mb-2 tracking-tight">
                {t('title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light">
                {t('description')}
              </p>
            </div>
          </div>

          {/* Right side - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href={`/${locale}/preventive-testing`}
              className="group bg-[#6B8FA9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-[#5A7A94] transition-all shadow-sm flex items-center justify-center gap-2"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://www.mypeterinarian.com/booking/"
              className="bg-white text-[#6B8FA9] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-gray-50 transition-colors border-2 border-[#6B8FA9] text-center"
            >
              {t('bookNow')}
            </a>
          </div>
        </div>

        {/* Bottom strip - Key features */}
        <div className="hidden lg:flex items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#8FA998]" />
            <span className="text-sm font-light">{t('feature1')}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#8FA998]" />
            <span className="text-sm font-light">{t('feature2')}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#8FA998]" />
            <span className="text-sm font-light">{t('feature3')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
