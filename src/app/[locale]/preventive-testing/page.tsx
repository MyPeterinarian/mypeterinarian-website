'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Shield, Stethoscope, Bug, Wind, FlaskConical, Dog, Cat, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function PreventiveTestingPage() {
  const t = useTranslations('preventiveTesting');
  const params = useParams();
  const locale = params.locale as string;

  const tests = [
    {
      id: 'giardia',
      icon: Bug,
      zoonotic: true,
      originalPrice: 472,
      campaignPrice: 425,
      discount: 10
    },
    {
      id: 'lungworm',
      icon: Wind,
      zoonotic: false,
      originalPrice: 442,
      campaignPrice: 398,
      discount: 10
    },
    {
      id: 'basicFecal',
      icon: FlaskConical,
      zoonotic: false,
      originalPrice: 296,
      campaignPrice: 148,
      discount: 50
    },
    {
      id: 'combinedFecal',
      icon: Stethoscope,
      zoonotic: false,
      originalPrice: 576,
      campaignPrice: 403,
      discount: 30
    },
    {
      id: 'comboTest',
      icon: Shield,
      zoonotic: false,
      originalPrice: 738,
      campaignPrice: 547,
      discount: 26
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Elegant Scandinavian Style */}
      <section className="bg-[#F5F7F9] py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white text-[#6B8FA9] px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-gray-200">
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C3E50] mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/booking`}
              className="inline-block bg-[#6B8FA9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#5A7A94] transition-colors shadow-sm"
            >
              {t('hero.bookNow')}
            </Link>
            <a
              href="#tests"
              className="inline-block bg-white border-2 border-[#6B8FA9] text-[#6B8FA9] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#F5F7F9] transition-colors"
            >
              {t('hero.viewTests')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Preventive Testing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#2C3E50] mb-4 text-center tracking-tight">
            {t('why.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-[#F5F7F9] p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#A8BCAE] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-[#2C3E50] mb-2">
                  {t(`why.benefits.${i}.title`)}
                </h3>
                <p className="text-gray-600 font-light">
                  {t(`why.benefits.${i}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section id="tests" className="py-20 px-4 bg-[#F5F7F9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[#2C3E50] mb-4 tracking-tight">
              {t('tests.title')}
            </h2>
            <p className="text-xl text-gray-600 font-light">
              {t('tests.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test) => {
              const Icon = test.icon;
              return (
                <div
                  key={test.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="bg-[#6B8FA9] p-6 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-12 h-12" />
                      {test.zoonotic && (
                        <span className="bg-[#C97B7F] text-white text-xs px-3 py-1 rounded-full font-medium">
                          {t('tests.zoonotic')}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-medium mb-2">
                      {t(`tests.items.${test.id}.name`)}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 font-light">
                      {t(`tests.items.${test.id}.description`)}
                    </p>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-medium text-[#8FA998]">
                          {test.campaignPrice} DKK
                        </span>
                        <span className="text-lg text-gray-400 line-through font-light">
                          {test.originalPrice} DKK
                        </span>
                      </div>
                      <div className="inline-block bg-[#A8BCAE]/20 text-[#5A8072] px-3 py-1 rounded-full text-sm font-medium">
                        {t('pricing.savings')} {test.discount}% {t('pricing.off')}
                      </div>
                    </div>
                    <Link
                      href={`/${locale}/booking`}
                      className="block w-full bg-[#6B8FA9] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#5A7A94] transition-all"
                    >
                      {t('tests.bookTest')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#2C3E50] mb-8 text-center tracking-tight">
            {t('pricing.title')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F7F9] border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-[#2C3E50]">
                    {t('pricing.test')}
                  </th>
                  <th className="text-center py-4 px-4 font-medium text-[#2C3E50]">
                    {t('pricing.regular')}
                  </th>
                  <th className="text-center py-4 px-4 font-medium text-[#8FA998]">
                    {t('pricing.campaign')}
                  </th>
                  <th className="text-center py-4 px-4 font-medium text-[#8FA998]">
                    {t('pricing.savings')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test) => (
                  <tr key={test.id} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">
                      {t(`tests.items.${test.id}.name`)}
                    </td>
                    <td className="text-center py-4 px-4 text-gray-400 line-through font-light">
                      {test.originalPrice} DKK
                    </td>
                    <td className="text-center py-4 px-4 font-medium text-[#8FA998]">
                      {test.campaignPrice} DKK
                    </td>
                    <td className="text-center py-4 px-4 font-medium text-[#8FA998]">
                      {test.discount}% {t('pricing.off')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[#F5F7F9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#2C3E50] mb-12 text-center tracking-tight">
            {t('howItWorks.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#6B8FA9] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-medium text-[#2C3E50] mb-2">
                  {t(`howItWorks.steps.${i}.title`)}
                </h3>
                <p className="text-gray-600 font-light">
                  {t(`howItWorks.steps.${i}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Dogs and Cats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#2C3E50] mb-6 tracking-tight">
                {t('forPets.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-light">
                {t('forPets.description')}
              </p>
              <Link
                href={`/${locale}/booking`}
                className="inline-flex items-center gap-2 bg-[#6B8FA9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#5A7A94] transition-all shadow-sm"
              >
                {t('forPets.bookNow')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F5F7F9] p-8 rounded-lg border border-gray-200 text-center">
                <Dog className="w-16 h-16 text-[#6B8FA9] mx-auto mb-4" />
                <h3 className="text-xl font-medium text-[#2C3E50]">
                  {locale === 'en' ? 'For Dogs' : 'Til Hunde'}
                </h3>
              </div>
              <div className="bg-[#F5F7F9] p-8 rounded-lg border border-gray-200 text-center">
                <Cat className="w-16 h-16 text-[#8FA998] mx-auto mb-4" />
                <h3 className="text-xl font-medium text-[#2C3E50]">
                  {locale === 'en' ? 'For Cats' : 'Til Katte'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#6B8FA9] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/booking`}
              className="inline-block bg-white text-[#6B8FA9] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              {t('cta.button')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 transition-colors"
            >
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
