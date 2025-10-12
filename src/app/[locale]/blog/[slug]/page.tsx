'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const t = useTranslations('blog');
  const params = useParams();
  const locale = params.locale as 'en' | 'dk';
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title[locale],
          text: post.excerpt[locale],
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  // Calculate reading time (average 200 words per minute)
  const wordCount = post.content[locale].split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Social share URLs
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title[locale];
  const shareText = post.excerpt[locale];

  const socialShare = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToBlog')}
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
              {post.category}
            </span>
          </div>

          {/* Title - Using Lora-like serif font */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title[locale]}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt[locale]}
          </p>

          {/* Meta Info */}
          <div className="flex items-center flex-wrap gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm md:text-base">{new Date(post.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <span className="text-sm md:text-base font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-gray-500">{readingTime} min read</span>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-600 mr-2">Share:</span>
            <a
              href={socialShare.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={socialShare.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={socialShare.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialShare.email}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors"
              aria-label="Share via Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title[locale]}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Prose Styling */}
          <div className="prose prose-lg md:prose-xl max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-blue-900
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline prose-a:font-medium
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:my-6 prose-ul:space-y-2
            prose-ol:my-6 prose-ol:space-y-2
            prose-li:text-gray-700 prose-li:leading-relaxed
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
          >
            <ReactMarkdown>{post.content[locale]}</ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Author Bio Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {post.author}
                </h3>
                <p className="text-gray-600 mb-4">
                  Veterinary Specialist at MyPeterinarian Copenhagen
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {locale === 'en'
                    ? 'Passionate about pet health and wellness, dedicated to providing the best care for your furry family members. With years of experience in veterinary medicine, I strive to educate pet owners about preventive care and holistic pet health.'
                    : 'Passioneret omkring kæledyrssundhed og velvære, dedikeret til at yde den bedste pleje til dine pelede familiemedlemmer. Med mange års erfaring inden for veterinærmedicin stræber jeg efter at uddanne kæledyrsejere om forebyggende pleje og holistisk kæledyrssundhed.'}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  {locale === 'en' ? 'Contact' : 'Kontakt'} {post.author} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('relatedPosts')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title[locale]}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt[locale]}
                    </p>
                    <Link
                      href={`/${locale}/blog/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      {t('readMore')} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            {t('cta.description')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
