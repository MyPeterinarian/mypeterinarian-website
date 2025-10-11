'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
            <a href={`tel:${t('phone')}`} className="hover:text-green-400 transition-colors flex items-center gap-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:inline">{t('phone')}</span>
              <span className="sm:hidden">{t('call')}</span>
            </a>
            <a href={`mailto:${t('email')}`} className="hover:text-green-400 transition-colors flex items-center gap-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden sm:inline">{t('email')}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">{t('hours')}</span>
              <span className="sm:hidden">{t('hoursShort')}</span>
            </span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <a href="https://www.facebook.com/MyPeterinarian/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mypeterinarian.cph/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@mypeterinarian" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@mypeterinarian" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center">
              <Image
                src="/logo.png"
                alt="MyPeterinarian"
                width={180}
                height={60}
                className="h-10 sm:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a href={`/${locale}#home`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base scroll-smooth">
                {t('navigation.home')}
              </a>

              <a href={`/${locale}#services`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base scroll-smooth">
                {t('navigation.services')}
              </a>

              <Link href={`/${locale}/team`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base">
                {t('navigation.team')}
              </Link>

              <Link href={`/${locale}/subscriptions`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base">
                {t('navigation.subscriptions')}
              </Link>
              <Link href={`/${locale}/booking`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base">
                {t('navigation.booking')}
              </Link>
              <Link href={`/${locale}/blog`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base">
                {t('navigation.blog')}
              </Link>
              <a href={`/${locale}#contact`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base scroll-smooth">
                {t('navigation.contact')}
              </a>
            </nav>

            {/* CTA Button & Language Switcher - Desktop */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <Link
                href={`/${locale}/booking`}
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-sm xl:text-base"
              >
                {t('bookNow')}
              </Link>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <a href={`/${locale}#home`} className="text-gray-700 hover:text-blue-600 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t('navigation.home')}</a>

                <a href={`/${locale}#services`} className="text-gray-700 hover:text-blue-600 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t('navigation.services')}</a>

                <Link href={`/${locale}/team`} className="text-gray-700 hover:text-blue-600 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t('navigation.team')}</Link>

                <Link href={`/${locale}/subscriptions`} className="text-gray-700 hover:text-blue-600 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t('navigation.subscriptions')}</Link>
                <Link href={`/${locale}/booking`} className="text-gray-700 hover:text-blue-600 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t('navigation.booking')}</Link>
                <Link href={`/${locale}/blog`} className="text-gray-700 hover:text-blue-600 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t('navigation.blog')}</Link>
                <a href={`/${locale}#contact`} className="text-gray-700 hover:text-blue-600 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t('navigation.contact')}</a>

                {/* Language Switcher - Mobile */}
                <LanguageSwitcher isMobile />

                <Link
                  href={`/${locale}/booking`}
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2.5 rounded-lg font-semibold text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('bookNow')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
