'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  const t = useTranslations('home');
  const tContact = useTranslations('contact');
  const params = useParams();
  const locale = params.locale as string;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = { ...formData, locale };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('hero.title')}
              <span className="block text-blue-600">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/booking" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-center">
                {t('hero.bookAppointment')}
              </Link>
              <a href="#services" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center">
                {t('hero.viewServices')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            {t('services.description')}
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Veterinary Care */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <img 
                  src="/icons/stethoscope.svg" 
                  alt="Veterinary Care" 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('services.veterinary.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t('services.veterinary.description')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.veterinary.items.exams')}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.veterinary.items.vaccinations')}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.veterinary.items.emergency')}
                </li>
              </ul>
              <Link href={`/${locale}/services/veterinary`} className="w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
                {t('services.learnMore')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Grooming Services */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('services.grooming.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t('services.grooming.description')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.grooming.items.full')}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.grooming.items.nails')}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.grooming.items.spa')}
                </li>
              </ul>
              <Link href={`/${locale}/services/grooming`} className="w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2">
                {t('services.learnMore')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pet Care Services */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <img 
                  src="/icons/heart-hands.svg" 
                  alt="Pet Care Services" 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('services.petSitting.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t('services.petSitting.description')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.petSitting.items.daily')}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.petSitting.items.overnight')}
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {t('services.petSitting.items.updates')}
                </li>
              </ul>
              <Link href={`/${locale}/services/pet-care`} className="w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
                {t('services.learnMore')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-20 px-4 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>

          <TestimonialsCarousel
            reviews={[
              {
                text: t('testimonials.reviews.review1.text'),
                author: t('testimonials.reviews.review1.author'),
                pet: t('testimonials.reviews.review1.pet'),
                rating: 5,
                source: 'google' as const,
                date: t('testimonials.reviews.review1.date'),
              },
              {
                text: t('testimonials.reviews.review2.text'),
                author: t('testimonials.reviews.review2.author'),
                pet: t('testimonials.reviews.review2.pet'),
                rating: 5,
                source: 'google' as const,
                date: t('testimonials.reviews.review2.date'),
              },
              {
                text: t('testimonials.reviews.review3.text'),
                author: t('testimonials.reviews.review3.author'),
                pet: t('testimonials.reviews.review3.pet'),
                rating: 5,
                source: 'google' as const,
                date: t('testimonials.reviews.review3.date'),
              },
              {
                text: t('testimonials.reviews.review4.text'),
                author: t('testimonials.reviews.review4.author'),
                pet: t('testimonials.reviews.review4.pet'),
                rating: 5,
                source: 'google' as const,
                date: t('testimonials.reviews.review4.date'),
              },
              {
                text: t('testimonials.reviews.review5.text'),
                author: t('testimonials.reviews.review5.author'),
                pet: t('testimonials.reviews.review5.pet'),
                rating: 5,
                source: 'google' as const,
                date: t('testimonials.reviews.review5.date'),
              },
            ]}
            autoRotateInterval={5000}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {tContact('title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {tContact('subtitle')}
          </motion.p>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tContact('description')}
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={tContact('form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={tContact('form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={tContact('form.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={tContact('form.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={tContact('form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? tContact('form.sending') : tContact('form.submit')}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                    {tContact('form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-lg">
                    {tContact('form.error')}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{tContact('info.title')}</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tContact('info.phone')}</h3>
                      <a href="tel:+4561667611" className="text-gray-600 hover:text-blue-600 transition-colors">
                        +45 61 66 76 11
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tContact('info.email')}</h3>
                      <a href="mailto:hej@mypeterinarian.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        hej@mypeterinarian.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tContact('info.hours')}</h3>
                      <p className="text-gray-600">{locale === 'dk' ? 'Man-Fre: 10:00-16:00' : 'Mon-Fri: 10:00-16:00'}</p>
                      <p className="text-gray-600">{locale === 'dk' ? 'Lør-Søn: Lukket' : 'Sat-Sun: Closed'}</p>
                      <p className="text-gray-500 text-sm mt-2 italic">
                        {locale === 'dk' ? 'Nogle lørdage har vi åbent, kontakt os venligst for at forespørge' : 'Some Saturdays we are open, please contact us to inquire'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tContact('info.location')}</h3>
                      <p className="text-gray-600">Peder Hvitfeldts Straede 16</p>
                      <p className="text-gray-600">1173 Copenhagen, Denmark</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">{tContact('cta.urgent')}</h3>
                <p className="text-gray-600 text-sm mb-4">{tContact('cta.book')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section id="faq" className="py-12 sm:py-20 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12">
            {t('faq.description')}
          </p>

          <div className="space-y-4 sm:space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {t('faq.questions.q1.question')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('faq.questions.q1.answer')}
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {t('faq.questions.q2.question')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('faq.questions.q2.answer')}
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {t('faq.questions.q3.question')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('faq.questions.q3.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 opacity-90">
            {t('cta.description')}
          </p>
          <Link href="/booking" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
