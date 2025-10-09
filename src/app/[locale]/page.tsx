import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-12 sm:py-20 px-4">
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
              <Link href="/services" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center">
                {t('hero.viewServices')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            {t('services.description')}
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Veterinary Care */}
            <Link href="/services/veterinary" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('services.veterinary.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t('services.veterinary.description')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600">
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
            </Link>

            {/* Grooming Services */}
            <Link href="/services/grooming" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('services.grooming.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t('services.grooming.description')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600">
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
            </Link>

            {/* Pet Sitting */}
            <Link href="/services/pet-sitting" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{t('services.petSitting.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t('services.petSitting.description')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600">
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
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Review 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{t('testimonials.reviews.review1.text')}"</p>
              <div>
                <p className="font-semibold text-gray-900">{t('testimonials.reviews.review1.author')}</p>
                <p className="text-sm text-gray-500">{t('testimonials.reviews.review1.pet')}</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{t('testimonials.reviews.review2.text')}"</p>
              <div>
                <p className="font-semibold text-gray-900">{t('testimonials.reviews.review2.author')}</p>
                <p className="text-sm text-gray-500">{t('testimonials.reviews.review2.pet')}</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{t('testimonials.reviews.review3.text')}"</p>
              <div>
                <p className="font-semibold text-gray-900">{t('testimonials.reviews.review3.author')}</p>
                <p className="text-sm text-gray-500">{t('testimonials.reviews.review3.pet')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-12 sm:py-20 px-4">
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

          <div className="text-center mt-8">
            <Link href="/faq" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              {t('faq.viewAll')} →
            </Link>
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
