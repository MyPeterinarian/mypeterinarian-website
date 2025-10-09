'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Stethoscope, Scissors, Home, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const t = useTranslations('servicesPage')
  const header = useTranslations('header')

  const services = [
    {
      key: 'veterinary',
      icon: Stethoscope,
      href: '/services/veterinary',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      key: 'grooming',
      icon: Scissors,
      href: '/services/grooming',
      gradient: 'from-teal-500 to-green-600'
    },
    {
      key: 'petSitting',
      icon: Home,
      href: '/services/pet-sitting',
      gradient: 'from-[#22c0b6] to-[#1d6896]'
    },
    {
      key: 'petPassport',
      icon: FileText,
      href: '/services/pet-passport',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#22c0b6] to-[#1d6896] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-50">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-[#22c0b6] group cursor-pointer h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {t(`services.${service.key}.title`)}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {t(`services.${service.key}.description`)}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {[0, 1, 2].map((i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <span className="text-[#22c0b6] mr-2 mt-1">●</span>
                            <span>{t(`services.${service.key}.highlights.${i}`)}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-[#1d6896] font-semibold group-hover:text-[#22c0b6] transition-colors">
                        <span>{t('learnMore')}</span>
                        <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('whyChoose.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{t(`whyChoose.reasons.${index}.icon`)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`whyChoose.reasons.${index}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`whyChoose.reasons.${index}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#22c0b6] to-[#1d6896] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-blue-50">{t('cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`tel:${header('phone')}`}
              className="inline-block bg-white text-[#1d6896] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              {header('call')}
            </Link>
            <Link
              href={`mailto:${header('email')}`}
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1d6896] transition-colors"
            >
              {header('email')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
