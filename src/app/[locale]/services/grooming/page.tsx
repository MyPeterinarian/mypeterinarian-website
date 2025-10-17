'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Scissors, Droplets, Sparkles, Footprints, Flower2, Smile, Star, Package } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactModal from '@/components/ContactModal'

export default function GroomingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const t = useTranslations('services.grooming')
  const common = useTranslations('services.common')
  const header = useTranslations('header')

  const sizeCategories = ['xs', 's', 'm', 'l', 'xl']

  const services = [
    { key: 'full', icon: Sparkles },
    { key: 'bath', icon: Droplets },
    { key: 'haircut', icon: Scissors },
    { key: 'nails', icon: Footprints },
    { key: 'spa', icon: Flower2 },
    { key: 'teeth', icon: Smile }
  ]

  const packages = ['perfectCoat', 'tangleFree', 'essentialCare', 'catBrushing']
  const testimonials = [0, 1, 2]
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

      {/* Size Categories Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('sizeCategories.title')}
          </h2>
          <p className="text-center text-gray-600 mb-12">{t('sizeCategories.description')}</p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Size</th>
                  <th className="px-6 py-4 text-left font-semibold">Weight</th>
                  <th className="px-6 py-4 text-left font-semibold">Long-Haired Examples</th>
                  <th className="px-6 py-4 text-left font-semibold">Short-Haired Examples</th>
                </tr>
              </thead>
              <tbody>
                {sizeCategories.map((size, index) => (
                  <tr key={size} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-[#1d6896]">
                      {t(`sizeCategories.categories.${size}.size`)}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {t(`sizeCategories.categories.${size}.weight`)}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {t(`sizeCategories.categories.${size}.longHaired`)}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {t(`sizeCategories.categories.${size}.shortHaired`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
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
                  <ul className="space-y-2">
                    {[0, 1, 2, 3, 4].map((idx) => {
                      try {
                        const bullet = t(`features.items.${service.key}.bullets.${idx}`)
                        return (
                          <li key={idx} className="text-xs text-gray-700 flex items-start">
                            <span className="text-[#22c0b6] mr-2">●</span>
                            <span>{bullet}</span>
                          </li>
                        )
                      } catch {
                        return null
                      }
                    })}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full text-center text-sm text-[#1d6896] font-semibold hover:text-[#22c0b6] transition-colors"
                    >
                      {t(`features.items.${service.key}.button`)}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grooming Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('packages.title')}
          </h2>
          <p className="text-center text-gray-600 mb-12">{t('packages.description')}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 hover:shadow-xl transition-shadow border-2 border-[#22c0b6]"
              >
                <div className="flex items-center justify-between mb-4">
                  <Package className="w-10 h-10 text-[#22c0b6]" />
                  <span className="text-2xl font-bold text-[#1d6896]">
                    {t(`packages.items.${pkg}.price`)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`packages.items.${pkg}.title`)}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t(`packages.items.${pkg}.description`)}
                </p>
                <ul className="space-y-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-start">
                      <span className="text-[#22c0b6] mr-2">✓</span>
                      <span>{t(`packages.items.${pkg}.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('detailedPricing.title')}
          </h2>
          <p className="text-center text-gray-600 mb-12">{t('detailedPricing.description')}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {['fullGrooming', 'handStripping', 'bathing', 'addOns'].map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#22c0b6]">
                  {t(`detailedPricing.categories.${category}.title`)}
                </h3>
                <div className="space-y-3">
                  {category === 'fullGrooming' && [0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-700">{t(`detailedPricing.categories.${category}.items.${i}.name`)}</span>
                      <span className="font-semibold text-[#1d6896]">{t(`detailedPricing.categories.${category}.items.${i}.price`)}</span>
                    </div>
                  ))}
                  {category === 'handStripping' && [0, 1, 2].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-700">{t(`detailedPricing.categories.${category}.items.${i}.name`)}</span>
                      <span className="font-semibold text-[#1d6896]">{t(`detailedPricing.categories.${category}.items.${i}.price`)}</span>
                    </div>
                  ))}
                  {category === 'bathing' && [0, 1, 2].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-700">{t(`detailedPricing.categories.${category}.items.${i}.name`)}</span>
                      <span className="font-semibold text-[#1d6896]">{t(`detailedPricing.categories.${category}.items.${i}.price`)}</span>
                    </div>
                  ))}
                  {category === 'addOns' && [0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-700">{t(`detailedPricing.categories.${category}.items.${i}.name`)}</span>
                      <span className="font-semibold text-[#1d6896]">{t(`detailedPricing.categories.${category}.items.${i}.price`)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-center text-gray-600 mb-12">{t('testimonials.description')}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 shadow-md"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{t(`testimonials.reviews.${index}.text`)}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t(`testimonials.reviews.${index}.name`)}</p>
                  <p className="text-sm text-gray-600">{t(`testimonials.reviews.${index}.pet`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('whyChoose.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-[#22c0b6] mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t(`whyChoose.reasons.${index}`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('specialOffers.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#22c0b6] to-[#1d6896] text-white rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold mb-3">
                  {t(`specialOffers.offers.${index}.title`)}
                </h3>
                <p className="mb-4">{t(`specialOffers.offers.${index}.description`)}</p>
                {(() => {
                  try {
                    const code = t(`specialOffers.offers.${index}.code`)
                    // Check if translation exists and is not the key itself
                    if (code && !code.includes('specialOffers.offers')) {
                      return (
                        <div className="bg-white text-[#1d6896] px-4 py-2 rounded-full font-mono font-bold inline-block">
                          {code}
                        </div>
                      )
                    }
                  } catch {
                    // Code doesn't exist, don't render anything
                  }
                  return null
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Professional Grooming in Copenhagen
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We groom all sizes from XS to XL. Serving Indre By, Vesterbro, Østerbro, Nørrebro, and Amager.
            </p>
            <p className="text-gray-700 mb-6">
              With on-site veterinary support available during grooming sessions.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-gray-600 mb-8">{t('pricing.description')}</p>
          <Link
            href={`mailto:${header('email')}`}
            className="inline-block bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            {t('pricing.cta')}
          </Link>
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
        subject="Grooming Services Inquiry"
      />
    </div>
  )
}
