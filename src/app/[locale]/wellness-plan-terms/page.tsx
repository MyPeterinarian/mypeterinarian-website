'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileText, Printer, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WellnessPlanTermsPage() {
  const t = useTranslations('wellnessPlanTerms');

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // TODO: Implement PDF download functionality
    // This could generate a PDF client-side or link to a pre-generated PDF
    alert('PDF download functionality will be implemented');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        className="bg-white border-b border-gray-200 print:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/subscriptions"
            className="inline-flex items-center gap-2 text-[#6B8FA9] hover:text-[#5A7A94] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">{t('backToPlans')}</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-[#2C3E50] mb-2 tracking-tight">
                {t('title')}
              </h1>
              <p className="text-gray-600 font-light">{t('subtitle')}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">{t('printButton')}</span>
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B8FA9] text-white rounded-lg hover:bg-[#5A7A94] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">{t('downloadButton')}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 print:py-4">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 print:mb-6"
        >
          <div className="bg-gradient-to-br from-[#6B8FA9]/5 to-transparent rounded-lg p-6 border border-[#6B8FA9]/20 print:border-gray-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#6B8FA9]/10 flex-shrink-0 print:bg-gray-100">
                <FileText className="w-6 h-6 text-[#6B8FA9] print:text-gray-600" />
              </div>
              <p className="text-gray-700 font-light leading-relaxed">
                {t('intro')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Table of Contents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 print:mb-6 print:break-inside-avoid"
        >
          <h2 className="text-2xl font-medium text-[#2C3E50] mb-6">
            {t('tableOfContents.title')}
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <ol className="space-y-3">
              {t.raw('tableOfContents.items').map((item: string, index: number) => {
                const sectionId = t.raw('sections')[index]?.id || `section-${index}`;
                return (
                  <li key={index}>
                    <a
                      href={`#${sectionId}`}
                      className="text-[#6B8FA9] hover:text-[#5A7A94] hover:underline transition-colors print:text-gray-700 print:no-underline"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.section>

        {/* Terms Sections */}
        <div className="space-y-8 print:space-y-4">
          {t.raw('sections').map((section: any, index: number) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 4) }}
              className="bg-white rounded-lg border border-gray-200 p-6 print:border-gray-300 print:break-inside-avoid"
            >
              <h2 className="text-xl font-medium text-[#2C3E50] mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 font-light leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Acknowledgment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 print:mt-6 print:break-inside-avoid"
        >
          <div className="bg-gradient-to-br from-[#8FA998]/5 to-transparent rounded-lg p-6 border border-[#8FA998]/20 print:border-gray-300">
            <p className="text-gray-700 font-medium italic leading-relaxed">
              {t('acknowledgment')}
            </p>
          </div>
        </motion.section>

        {/* Back to Plans Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center print:hidden"
        >
          <Link
            href="/subscriptions"
            className="inline-flex items-center gap-2 text-[#6B8FA9] hover:text-[#5A7A94] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('backToPlans')}</span>
          </Link>
        </motion.div>
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:border-gray-300 {
            border-color: #d1d5db !important;
          }

          .print\\:text-gray-700 {
            color: #374151 !important;
          }

          .print\\:text-gray-600 {
            color: #4b5563 !important;
          }

          .print\\:bg-gray-100 {
            background-color: #f3f4f6 !important;
          }

          .print\\:no-underline {
            text-decoration: none !important;
          }

          .print\\:break-inside-avoid {
            break-inside: avoid;
          }

          a[href^="#"] {
            color: #374151 !important;
            text-decoration: none !important;
          }

          @page {
            margin: 2cm;
          }

          h1, h2 {
            break-after: avoid;
          }
        }
      `}</style>
    </div>
  );
}
