'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { Home, Moon, Building2, Dog, Pill, Sun } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactModal from '@/components/ContactModal'

export default function PetSittingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const t = useTranslations('services.petSitting')
  const common = useTranslations('services.common')
  const header = useTranslations('header')
  const locale = useLocale()
  const currency = locale === 'dk' ? 'Kr' : 'DKK'

  const services = [
    {
      key: 'daily',
      icon: Home,
      items: Array.from({ length: 6 }, (_, i) => t(`features.items.daily.prices.${i}`))
    },
    {
      key: 'overnight',
      icon: Moon,
      items: Array.from({ length: 6 }, (_, i) => t(`features.items.overnight.prices.${i}`))
    },
    {
      key: 'boarding',
      icon: Building2,
      items: Array.from({ length: 6 }, (_, i) => t(`features.items.boarding.prices.${i}`))
    },
    {
      key: 'walking',
      icon: Dog,
      items: Array.from({ length: 6 }, (_, i) => t(`features.items.walking.prices.${i}`))
    },
    {
      key: 'medication',
      icon: Pill,
      items: Array.from({ length: 6 }, (_, i) => t(`features.items.medication.prices.${i}`))
    },
    {
      key: 'updates',
      icon: Sun,
      items: Array.from({ length: 6 }, (_, i) => t(`features.items.updates.prices.${i}`))
    }
  ]

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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-full mb-3">
                      <Icon className="w-8 h-8 text-[#22c0b6]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t(`features.items.${service.key}.title`)}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {t(`features.items.${service.key}.description`)}
                  </p>
                  {service.items && (
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start">
                          <span className="text-[#22c0b6] mr-2">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full text-center text-sm text-[#1d6896] font-semibold hover:text-[#22c0b6] transition-colors"
                    >
                      {t(`features.items.${service.key}.cta`)}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t('banner.title')}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('banner.description')}
            </p>
            <p className="text-gray-700 mb-6">
              {t('banner.additionalInfo')}
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

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t('pricing.title')}</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">{t('pricing.description')}</p>

          {/* Pricing Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-8">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium">Introductory Meeting</td>
                  <td className="px-6 py-4 text-right text-gray-900 font-semibold">405 DKK</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium">Pet Pick-up/Drop-off</td>
                  <td className="px-6 py-4 text-right text-gray-900 font-semibold">270 DKK</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium">Key Handover</td>
                  <td className="px-6 py-4 text-right text-gray-900 font-semibold">270 DKK</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-medium">Last Minute Change</td>
                  <td className="px-6 py-4 text-right text-gray-900 font-semibold">170 DKK</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-block bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              {t('pricing.cta')}
            </button>
            <p className="mt-4 text-sm text-gray-600">
              All prices in Danish Krone (DKK). Custom packages available for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
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
                className="bg-white rounded-lg p-6 shadow-sm"
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

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        subject="Pet Sitting Services Inquiry"
      />
    </div>
  )
}
