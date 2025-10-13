'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, Mail } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function CareersPage() {
  const t = useTranslations('careers')

  const jobs = ['finance', 'veterinarian', 'boarder', 'marketing', 'webdev']

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
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('mission.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t('mission.description')}</p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('openings.title')}</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <Briefcase className="w-6 h-6 text-[#22c0b6] mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{t(`openings.jobs.${job}.title`)}</h3>
                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{t(`openings.jobs.${job}.location`)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{t(`openings.jobs.${job}.type`)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Description */}
                    <div>
                      <p className="text-gray-700">{t(`openings.jobs.${job}.description`)}</p>
                    </div>

                    {/* Responsibilities */}
                    {t.raw(`openings.jobs.${job}.responsibilities`) && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t('openings.responsibilities')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {(t.raw(`openings.jobs.${job}.responsibilities`) as string[]).map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Requirements */}
                    {t.raw(`openings.jobs.${job}.requirements`) && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t('openings.requirements')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {(t.raw(`openings.jobs.${job}.requirements`) as string[]).map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Apply Button */}
                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={`mailto:jobs@mypeterinarian.com?subject=Application for ${t(`openings.jobs.${job}.title`)}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        <Mail className="w-5 h-5" />
                        {t('openings.applyButton')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t('application.title')}</h2>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-6">{t('application.instructions')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jobs@mypeterinarian.com"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                {t('application.emailButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('benefits.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t.raw('benefits.items') as string[]).map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#22c0b6] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#22c0b6] to-[#1d6896] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-blue-100">{t('cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jobs@mypeterinarian.com"
              className="inline-block bg-white text-[#1d6896] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('cta.button')}
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1d6896] transition-colors"
            >
              {t('cta.contactButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
