'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  Stethoscope,
  Syringe,
  Activity,
  Plane,
  Pill,
  Heart,
  CheckCircle,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export default function VeterinaryPage() {
  const t = useTranslations('services.veterinary')
  const common = useTranslations('services.common')
  const header = useTranslations('header')
  const locale = useLocale()
  const currency = locale === 'dk' ? 'Kr' : 'DKK'

  const services = [
    {
      key: 'exams',
      icon: Stethoscope,
      items: [
        `Consultation-Home Visits: 1814 ${currency}`,
        `Consultation-At Clinic: 938 ${currency}`,
        `Consultation-Walk-In: 1109 ${currency}`,
        `Follow Up (At Clinic): 661 ${currency}`,
        `Virtual Consultation (2.5 hrs): 567 ${currency}`
      ]
    },
    {
      key: 'vaccinations',
      icon: Syringe,
      items: [
        `Kitten/Puppy Package (At Clinic): 2494 ${currency}`,
        `Whole Litter Vaccination & Microchipping-Per (At Clinic): 1858 ${currency}`,
        `Anti-parasite Treatment-Grant-Abov Appn: 540 ${currency}`,
        `Anti-parasite Treatment-Clinic: 193.5 ${currency}`,
        `Pet Health Check: 800 ${currency}`,
        `Pet Health Check (Rabies): 1065 ${currency}`
      ]
    },
    {
      key: 'surgery',
      icon: Activity,
      items: [
        `1-Yr (Homes): 3402 ${currency}`,
        `1-Yr (At Clinic): 2266 ${currency}`,
        `6 Months (Home): 2579 ${currency}`,
        `6 Months (At Clinic): 1301 ${currency}`
      ]
    },
    {
      key: 'dental',
      icon: Plane,
      items: [
        `EU Pet Passport Appointment (Home): 1584 ${currency}`,
        `EU Pet Passport Appointment (At Clinic): 608 ${currency}`,
        `Rabies Vaccine + EU Passport Package (Home): 2214 ${currency}`,
        'Travel Package: Bx (AUS/US/UAE) (Home): Contact for Price'
      ]
    },
    {
      key: 'diagnostics',
      icon: Pill,
      items: [
        'Chronic Diseases Package (At Clinic): Contact for Price',
        `Diet Consultations (At Clinic): 2752 ${currency}`,
        `Medication Prescription: 147 ${currency}`,
        `Prescription Packages (Bi-annual/ Home): 1879 ${currency}`,
        `Prescription Package (Bi-annual/ At Clinic): 1816 ${currency}`
      ]
    },
    {
      key: 'emergency',
      icon: Heart,
      items: [
        `Euthanasia and Cremation (Home): 5103 ${currency}`,
        `Euthanasia and Cremation (At Clinic): 2979 ${currency}`,
        `No Euthanasia Private Cremation (Pet Pick-Up): 4422 ${currency}`,
        `No Euthanasia Private Cremation (via Pick-Up): 3422 ${currency}`,
        `Private Cremation (Per Pick Up): 4212 ${currency}`,
        `Private Cremation (via Per Pick Up): 3425 ${currency}`
      ]
    },
    {
      key: 'other',
      icon: CheckCircle,
      items: [
        `Nail Clipping (Separate Visit): 374 ${currency}`,
        `Pet Registration: 545 ${currency}`,
        'Welcome To Denmark Package (Home): Contact for Price',
        'Welcome To Denmark Package (At Clinic): Contact for Price'
      ]
    },
    {
      key: 'subscription',
      icon: Calendar,
      comingSoon: true
    }
  ]

  const faqs = ['q1', 'q2', 'q3']

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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                  {service.comingSoon ? (
                    <p className="text-center text-gray-500 italic">Coming soon!</p>
                  ) : (
                    <>
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
                        <button className="w-full text-sm text-[#1d6896] font-semibold hover:text-[#22c0b6] transition-colors">
                          {service.key === "exams" ? "Book Consultation" :
                           service.key === "vaccinations" ? "Learn More" :
                           service.key === "surgery" ? "Request Service" :
                           service.key === "dental" ? "Get Travel Ready" :
                           service.key === "diagnostics" ? "Manage Prescriptions" :
                           service.key === "emergency" ? "Discuss Options" :
                           "Inquire Now"}
                        </button>
                      </div>
                    </>
                  )}
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
    </div>
  )
}
