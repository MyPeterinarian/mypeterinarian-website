'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Weight, Heart, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SubscriptionsPage() {
  const t = useTranslations('subscriptions');
  const locale = useLocale();
  const [selectedWeightCategory, setSelectedWeightCategory] = useState('10_24_9kg');

  const weightCategories = [
    { range: 'under_4_9kg', label: t('weightCategories.under_4_9kg'), example: t('weightDescriptions.under_4_9kg') },
    { range: '5_9_9kg', label: t('weightCategories.5_9_9kg'), example: t('weightDescriptions.5_9_9kg') },
    { range: '10_24_9kg', label: t('weightCategories.10_24_9kg'), example: t('weightDescriptions.10_24_9kg') },
    { range: '25_39_9kg', label: t('weightCategories.25_39_9kg'), example: t('weightDescriptions.25_39_9kg') },
    { range: 'over_40kg', label: t('weightCategories.over_40kg'), example: t('weightDescriptions.over_40kg') }
  ];

  const getPricing = (tier: string) => {
    const pricing: Record<string, Record<string, number>> = {
      'essential': {
        'under_4_9kg': 299,
        '5_9_9kg': 310,
        '10_24_9kg': 329,
        '25_39_9kg': 354,
        'over_40kg': 390
      },
      'advanced': {
        'under_4_9kg': 440,
        '5_9_9kg': 450,
        '10_24_9kg': 467,
        '25_39_9kg': 494,
        'over_40kg': 530
      },
      'professional': {
        'under_4_9kg': 648,
        '5_9_9kg': 658,
        '10_24_9kg': 680,
        '25_39_9kg': 705,
        'over_40kg': 740
      }
    };
    return pricing[tier]?.[selectedWeightCategory] || 0;
  };

  const tiers = [
    {
      id: 'essential',
      name: t('tiers.essential.name'),
      savings: t('tiers.essential.savings'),
      description: t('tiers.essential.description'),
      icon: Heart,
      color: 'blue',
      features: [
        t('tiers.essential.features.0'),
        t('tiers.essential.features.1'),
        t('tiers.essential.features.2'),
        t('tiers.essential.features.3'),
        t('tiers.essential.features.4'),
        t('tiers.essential.features.5'),
        t('tiers.essential.features.6'),
        t('tiers.essential.features.7')
      ]
    },
    {
      id: 'advanced',
      name: t('tiers.advanced.name'),
      savings: t('tiers.advanced.savings'),
      description: t('tiers.advanced.description'),
      icon: Shield,
      color: 'green',
      popular: true,
      features: [
        t('tiers.advanced.features.0'),
        t('tiers.advanced.features.1'),
        t('tiers.advanced.features.2'),
        t('tiers.advanced.features.3'),
        t('tiers.advanced.features.4'),
        t('tiers.advanced.features.5'),
        t('tiers.advanced.features.6'),
        t('tiers.advanced.features.7'),
        t('tiers.advanced.features.8'),
        t('tiers.advanced.features.9')
      ]
    },
    {
      id: 'professional',
      name: t('tiers.professional.name'),
      savings: t('tiers.professional.savings'),
      description: t('tiers.professional.description'),
      icon: Star,
      color: 'purple',
      features: [
        t('tiers.professional.features.0'),
        t('tiers.professional.features.1'),
        t('tiers.professional.features.2'),
        t('tiers.professional.features.3'),
        t('tiers.professional.features.4'),
        t('tiers.professional.features.5'),
        t('tiers.professional.features.6'),
        t('tiers.professional.features.7'),
        t('tiers.professional.features.8'),
        t('tiers.professional.features.9'),
        t('tiers.professional.features.10'),
        t('tiers.professional.features.11')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F5F7F9] py-16 sm:py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2C3E50] mb-6 tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-600 font-light">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#8FA998]" />
                <span>{t('hero.benefits.0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#8FA998]" />
                <span>{t('hero.benefits.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#8FA998]" />
                <span>{t('hero.benefits.2')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Weight Category Selector */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-center text-[#2C3E50] mb-4 tracking-tight">
              {t('weightSelector.title')}
            </h2>
            <p className="text-center text-gray-600 mb-8 font-light">
              {t('weightSelector.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {weightCategories.map((category, index) => (
                <motion.button
                  key={category.range}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`p-4 border rounded-lg transition-all text-center ${
                    selectedWeightCategory === category.range
                      ? 'border-[#6B8FA9] bg-[#F5F7F9] shadow-sm'
                      : 'border-gray-200 hover:border-[#6B8FA9] hover:bg-[#F5F7F9] hover:shadow-sm'
                  }`}
                  onClick={() => setSelectedWeightCategory(category.range)}
                >
                  <Weight className="h-6 w-6 mx-auto mb-2 text-[#6B8FA9]" />
                  <span className="block text-sm font-medium text-[#2C3E50] mb-1">
                    {category.label}
                  </span>
                  <span className="block text-xs text-gray-600 font-light">
                    {category.example}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 bg-[#F5F7F9] border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              const price = getPricing(tier.id);

              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`relative bg-white rounded-lg shadow-sm p-6 sm:p-8 border hover:shadow-md transition-shadow flex flex-col ${
                    tier.popular
                      ? 'border-[#8FA998]'
                      : 'border-gray-200'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#8FA998] text-white px-4 py-1 rounded-full text-sm font-medium">
                        {t('tiers.mostPopular')}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#6B8FA9]/10">
                      <Icon className="w-6 h-6 text-[#6B8FA9]" />
                    </div>
                    <h3 className="text-2xl font-medium text-[#2C3E50]">{tier.name}</h3>
                  </div>

                  {tier.savings && (
                    <div className="mb-3">
                      <span className="inline-block bg-[#8FA998]/10 text-[#8FA998] px-3 py-1 rounded-full text-sm font-medium">
                        {tier.savings}
                      </span>
                    </div>
                  )}

                  <p className="text-gray-600 mb-6 font-light">{tier.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-medium text-[#2C3E50]">{price}</span>
                      <span className="text-xl text-gray-600 font-light">DKK</span>
                      <span className="text-gray-500 font-light">/{t('tiers.perMonth')}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 font-light">
                      {t('tiers.priceNote')}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#8FA998] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://booking.mypeterinarian.com/subscription"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-6 rounded-lg font-medium transition-all bg-[#6B8FA9] text-white hover:bg-[#5A7A94]"
                  >
                    {t('tiers.cta')}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-center text-[#2C3E50] mb-4 tracking-tight">
              {t('comparison.title')}
            </h2>
            <p className="text-center text-gray-600 mb-8 font-light">
              {t('comparison.subtitle')}
            </p>
            <div className="bg-[#F5F7F9] rounded-lg border border-gray-200 p-6 sm:p-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-4 text-[#2C3E50] font-medium">{t('comparison.feature')}</th>
                    <th className="pb-4 text-center text-[#6B8FA9] font-medium">MyPeterinarian</th>
                    <th className="pb-4 text-center text-gray-600 font-light">VetPlan</th>
                    <th className="pb-4 text-center text-gray-600 font-light">VetGruppen</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-light">{t('comparison.rows.price')}</td>
                    <td className="py-3 text-center text-[#6B8FA9] font-medium">299-740 DKK</td>
                    <td className="py-3 text-center text-gray-600 font-light">400-900 DKK</td>
                    <td className="py-3 text-center text-gray-600 font-light">350-850 DKK</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-light">{t('comparison.rows.healthChecks')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-[#8FA998] mx-auto" /></td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-[#8FA998] mx-auto" /></td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-[#8FA998] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-light">{t('comparison.rows.prescriptions')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-[#8FA998] mx-auto" /></td>
                    <td className="py-3 text-center text-gray-400 font-light">-</td>
                    <td className="py-3 text-center text-gray-400 font-light">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-light">{t('comparison.rows.daycare')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-[#8FA998] mx-auto" /></td>
                    <td className="py-3 text-center text-gray-400 font-light">-</td>
                    <td className="py-3 text-center text-gray-400 font-light">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-light">{t('comparison.rows.virtualConsultations')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-[#8FA998] mx-auto" /></td>
                    <td className="py-3 text-center text-gray-400 font-light">-</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-[#8FA998] mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-[#F5F7F9] border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-[#2C3E50] mb-8 tracking-tight">{t('trust.title')}</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-6 h-6 text-[#6B8FA9]" />
                <span className="font-light">{t('trust.coolOff')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-6 h-6 text-[#6B8FA9]" />
                <span className="font-light">{t('trust.noCommitment')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-6 h-6 text-[#6B8FA9]" />
                <span className="font-light">{t('trust.licensed')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#6B8FA9] to-[#8FA998] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-light">
            {t('cta.description')}
          </p>
          <a
            href="https://booking.mypeterinarian.com/subscription"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#6B8FA9] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            {t('cta.button')}
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
