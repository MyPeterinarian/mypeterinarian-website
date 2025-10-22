'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { FileText, Heart, Syringe, Radio, FileCheck, Globe } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function PetPassportPage() {
  const t = useTranslations('services.petPassport')
  const common = useTranslations('services.common')
  const header = useTranslations('header')
  const locale = useLocale()
  const currency = locale === 'dk' ? 'Kr' : 'DKK'

  const features = [
    { key: 'consultation', icon: FileText },
    { key: 'health', icon: Heart },
    { key: 'vaccinations', icon: Syringe },
    { key: 'microchip', icon: Radio },
    { key: 'documentation', icon: FileCheck },
    { key: 'eu', icon: Globe },
  ]

  const steps = ['step1', 'step2', 'step3', 'step4']
  const faqs = ['q1', 'q2', 'q3']

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#22c0b6] to-[#1d6896] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl md:text-2xl mb-3 text-blue-100">{t('subtitle')}</p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50">{t('description')}</p>
            <Link
              href={`tel:${header('phone')}`}
              className="inline-block bg-white text-[#1d6896] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-[#22c0b6] mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(`features.items.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600">{t(`features.items.${feature.key}.description`)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('process.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">
                  {t(`process.steps.${step}.title`)}
                </h3>
                <p className="text-gray-600">{t(`process.steps.${step}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t('banner.title')}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('banner.pricing', { currency })}
            </p>
            <p className="text-gray-700 mb-6">
              {t('banner.note')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${header('phone')}`}
                className="inline-block bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                {t('banner.cta1')}
              </Link>
              <Link
                href={`mailto:${header('email')}`}
                className="inline-block border-2 border-[#1d6896] text-[#1d6896] px-8 py-3 rounded-full font-semibold hover:bg-[#1d6896] hover:text-white transition-colors"
              >
                {t('banner.cta2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('faq.title')}</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(`faq.${faq}.question`)}</h3>
                <p className="text-gray-600">{t(`faq.${faq}.answer`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#22c0b6] to-[#1d6896] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{common('contactUs')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href={`tel:${header('phone')}`}
              className="inline-block bg-white text-[#1d6896] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              {header('call')}
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1d6896] transition-colors"
            >
              {common('backToServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
