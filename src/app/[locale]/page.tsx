'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import CampaignBanner from '@/components/CampaignBanner';

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
      <LocalBusinessSchema />

      {/* Campaign Banner */}
      <CampaignBanner />

      {/* Hero Section */}
      <section id="home" className="relative bg-[#F5F7F9] py-16 sm:py-24 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#2C3E50] mb-6 tracking-tight">
              {t('hero.title')}
              <span className="block text-[#6B8FA9] mt-2">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-[#6B8FA9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#5A7A94] transition-all shadow-sm">
                {t('hero.bookAppointment')}
              </Link>
              <a href="#services" className="bg-white text-[#6B8FA9] px-8 py-4 rounded-lg text-lg font-medium border-2 border-[#6B8FA9] hover:bg-[#F5F7F9] transition-colors">
                {t('hero.viewServices')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 scroll-mt-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light text-center text-[#2C3E50] mb-4 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
            {t('services.description')}
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Veterinary Care */}
            <div className="bg-[#F5F7F9] p-8 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-[#6B8FA9]/10 rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/icons/stethoscope.svg"
                  alt="Veterinary Care"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#2C3E50] mb-3">{t('services.veterinary.title')}</h3>
              <p className="text-base text-gray-600 mb-6 font-light">
                {t('services.veterinary.description')}
              </p>
              <ul className="space-y-2 text-base text-gray-600 mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.veterinary.items.exams')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.veterinary.items.vaccinations')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.veterinary.items.emergency')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/services/veterinary`} className="w-full bg-[#6B8FA9] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#5A7A94] transition-all inline-flex items-center justify-center gap-2">
                {t('services.learnMore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grooming Services */}
            <div className="bg-[#F5F7F9] p-8 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-[#8FA998]/10 rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/icons/grooming.svg"
                  alt="Grooming"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#2C3E50] mb-3">{t('services.grooming.title')}</h3>
              <p className="text-base text-gray-600 mb-6 font-light">
                {t('services.grooming.description')}
              </p>
              <ul className="space-y-2 text-base text-gray-600 mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.grooming.items.full')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.grooming.items.nails')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.grooming.items.spa')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/services/grooming`} className="w-full bg-[#8FA998] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#7A8F87] transition-all inline-flex items-center justify-center gap-2">
                {t('services.learnMore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pet Care Services */}
            <div className="bg-[#F5F7F9] p-8 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow flex flex-col">
              <div className="w-16 h-16 bg-[#6B8FA9]/10 rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="/icons/heart-hands.svg"
                  alt="Pet Care Services"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#2C3E50] mb-3">{t('services.petSitting.title')}</h3>
              <p className="text-base text-gray-600 mb-6 font-light">
                {t('services.petSitting.description')}
              </p>
              <ul className="space-y-2 text-base text-gray-600 mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.petSitting.items.daily')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.petSitting.items.overnight')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#8FA998] flex-shrink-0" />
                  <span className="font-light">{t('services.petSitting.items.updates')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/services/pet-care`} className="w-full bg-[#6B8FA9] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#5A7A94] transition-all inline-flex items-center justify-center gap-2">
                {t('services.learnMore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-[#F5F7F9] scroll-mt-20 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light text-center text-[#2C3E50] mb-4 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
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
      <section id="contact" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-[#2C3E50] mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {tContact('title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {tContact('subtitle')}
          </motion.p>
          <motion.p
            className="text-gray-600 font-light"
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
              className="bg-[#F5F7F9] rounded-lg border border-gray-200 p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    {tContact('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8FA9] focus:border-transparent bg-white"
                    placeholder={tContact('form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    {tContact('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8FA9] focus:border-transparent bg-white"
                    placeholder={tContact('form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    {tContact('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8FA9] focus:border-transparent bg-white"
                    placeholder={tContact('form.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    {tContact('form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8FA9] focus:border-transparent bg-white"
                    placeholder={tContact('form.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    {tContact('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8FA9] focus:border-transparent bg-white"
                    placeholder={tContact('form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#6B8FA9] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#5A7A94] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? tContact('form.sending') : tContact('form.submit')}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-[#8FA998]/10 text-[#5A8072] rounded-lg border border-[#8FA998]/20">
                    {tContact('form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-lg border border-red-100">
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
              <div className="bg-[#F5F7F9] rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-medium text-[#2C3E50] mb-6">{tContact('info.title')}</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6B8FA9]/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-[#6B8FA9]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C3E50] mb-1">{tContact('info.phone')}</h3>
                      <a href="tel:+4561667611" className="text-gray-600 hover:text-[#6B8FA9] transition-colors">
                        +45 61 66 76 11
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6B8FA9]/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-[#6B8FA9]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C3E50] mb-1">{tContact('info.email')}</h3>
                      <a href="mailto:hej@mypeterinarian.com" className="text-gray-600 hover:text-[#6B8FA9] transition-colors">
                        hej@mypeterinarian.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6B8FA9]/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-[#6B8FA9]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C3E50] mb-1">{tContact('info.hours')}</h3>
                      <p className="text-gray-600 font-light">{locale === 'dk' ? 'Man-Fre: 10:00-16:00' : 'Mon-Fri: 10:00-16:00'}</p>
                      <p className="text-gray-600 font-light">{locale === 'dk' ? 'Lør-Søn: Lukket' : 'Sat-Sun: Closed'}</p>
                      <p className="text-gray-500 text-sm mt-2 italic font-light">
                        {locale === 'dk' ? 'Nogle lørdage har vi åbent, kontakt os venligst for at forespørge' : 'Some Saturdays we are open, please contact us to inquire'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6B8FA9]/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#6B8FA9]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C3E50] mb-1">{tContact('info.location')}</h3>
                      <p className="text-gray-600 font-light">Peder Hvitfeldts Straede 16</p>
                      <p className="text-gray-600 font-light">1173 Copenhagen, Denmark</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#6B8FA9]/5 rounded-lg p-6 border border-[#6B8FA9]/20">
                <h3 className="font-medium text-[#2C3E50] mb-2">{tContact('cta.urgent')}</h3>
                <p className="text-gray-600 text-sm font-light">{tContact('cta.book')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section id="faq" className="py-20 px-4 bg-[#F5F7F9] scroll-mt-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light text-center text-[#2C3E50] mb-4 tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center mb-16 font-light">
            {t('faq.description')}
          </p>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-[#2C3E50] mb-3">
                {t('faq.questions.q1.question')}
              </h3>
              <p className="text-base text-gray-600 font-light">
                {t('faq.questions.q1.answer')}
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-[#2C3E50] mb-3">
                {t('faq.questions.q2.question')}
              </h3>
              <p className="text-base text-gray-600 font-light">
                {t('faq.questions.q2.answer')}
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-[#2C3E50] mb-3">
                {t('faq.questions.q3.question')}
              </h3>
              <p className="text-base text-gray-600 font-light">
                {t('faq.questions.q3.answer')}
              </p>
            </div>
          </div>
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
          <Link href="/booking" className="bg-white text-[#6B8FA9] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm inline-block">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
