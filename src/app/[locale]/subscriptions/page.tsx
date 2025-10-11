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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>{t('hero.benefits.0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>{t('hero.benefits.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>{t('hero.benefits.2')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Weight Category Selector */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
              {t('weightSelector.title')}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {t('weightSelector.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {weightCategories.map((category, index) => (
                <motion.button
                  key={category.range}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`p-4 border-2 rounded-xl transition-all text-center ${
                    selectedWeightCategory === category.range
                      ? 'border-blue-600 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedWeightCategory(category.range)}
                >
                  <Weight className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <span className="block text-sm font-semibold text-gray-900 mb-1">
                    {category.label}
                  </span>
                  <span className="block text-xs text-gray-600">
                    {category.example}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 px-4">
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
                  className={`relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 ${
                    tier.popular 
                      ? 'border-green-500 shadow-green-100' 
                      : 'border-gray-200'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {t('tiers.mostPopular')}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${
                      tier.color === 'blue' ? 'from-blue-100 to-blue-200' :
                      tier.color === 'green' ? 'from-green-100 to-green-200' :
                      'from-purple-100 to-purple-200'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        tier.color === 'blue' ? 'text-blue-600' :
                        tier.color === 'green' ? 'text-green-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{price}</span>
                      <span className="text-xl text-gray-600">DKK</span>
                      <span className="text-gray-500">/{t('tiers.perMonth')}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {t('tiers.priceNote')}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://booking.mypeterinarian.com/subscription"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
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
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t('comparison.title')}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {t('comparison.subtitle')}
            </p>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="pb-4 text-gray-900 font-semibold">{t('comparison.feature')}</th>
                    <th className="pb-4 text-center text-blue-600 font-bold">MyPeterinarian</th>
                    <th className="pb-4 text-center text-gray-600">VetPlan</th>
                    <th className="pb-4 text-center text-gray-600">VetGruppen</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-3">{t('comparison.rows.price')}</td>
                    <td className="py-3 text-center text-blue-600 font-semibold">299-740 DKK</td>
                    <td className="py-3 text-center text-gray-600">400-900 DKK</td>
                    <td className="py-3 text-center text-gray-600">350-850 DKK</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">{t('comparison.rows.healthChecks')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">{t('comparison.rows.prescriptions')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-3 text-center text-gray-400">-</td>
                    <td className="py-3 text-center text-gray-400">-</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">{t('comparison.rows.daycare')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-3 text-center text-gray-400">-</td>
                    <td className="py-3 text-center text-gray-400">-</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">{t('comparison.rows.virtualConsultations')}</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-3 text-center text-gray-400">-</td>
                    <td className="py-3 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('trust.title')}</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="font-medium">{t('trust.certified')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="font-medium">{t('trust.coolOff')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-6 h-6 text-red-600" />
                <span className="font-medium">{t('trust.noCommitment')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            {t('cta.description')}
          </p>
          <a
            href="https://booking.mypeterinarian.com/subscription"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {t('cta.button')}
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
