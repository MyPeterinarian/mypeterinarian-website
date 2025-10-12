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
      {/* Hero Section - Scandinavian Style */}
      <section className="bg-[#F5F7F9] py-16 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-[#6B8FA9] hover:text-[#5A7A94] mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToBlog')}
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-[#8FA998] text-white px-5 py-2 rounded-full text-sm font-light shadow-sm">
              {post.category}
            </span>
          </div>

          {/* Title - Scandinavian Typography */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C3E50] mb-6 leading-tight tracking-tight">
            {post.title[locale]}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
            {post.excerpt[locale]}
          </p>

          {/* Meta Info */}
          <div className="flex items-center flex-wrap gap-6 text-gray-600 mb-6 font-light">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#6B8FA9]" />
              <span className="text-sm md:text-base">{new Date(post.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#6B8FA9]" />
              <span className="text-sm md:text-base font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-gray-500">{readingTime} min read</span>
            </div>
          </div>

          {/* Social Share Buttons - Scandinavian Colors */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-600 mr-2">Share:</span>
            <a
              href={socialShare.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6B8FA9] hover:bg-[#5A7A94] text-white transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={socialShare.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6B8FA9] hover:bg-[#5A7A94] text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={socialShare.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6B8FA9] hover:bg-[#5A7A94] text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialShare.email}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6B8FA9] hover:bg-[#5A7A94] text-white transition-colors"
              aria-label="Share via Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8FA998] hover:bg-[#7A8F87] text-white transition-colors"
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
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <Image
              src={post.image}
              alt={`Featured image for: ${post.title[locale]} - MyPeterinarian Copenhagen Veterinary Blog`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content - Scandinavian Typography */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Prose Styling with Scandinavian Design */}
          <div className="prose prose-lg md:prose-xl max-w-none
            prose-headings:font-light prose-headings:text-[#2C3E50] prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-[#6B8FA9] prose-h3:font-medium
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:font-light
            prose-a:text-[#6B8FA9] prose-a:no-underline hover:prose-a:text-[#5A7A94] hover:prose-a:underline prose-a:font-medium
            prose-strong:text-[#2C3E50] prose-strong:font-medium
            prose-ul:my-6 prose-ul:space-y-2
            prose-ol:my-6 prose-ol:space-y-2
            prose-li:text-gray-700 prose-li:leading-relaxed prose-li:font-light
            prose-blockquote:border-l-4 prose-blockquote:border-[#8FA998] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:font-light
            prose-code:text-[#6B8FA9] prose-code:bg-[#F5F7F9] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-normal
            prose-pre:bg-[#2C3E50] prose-pre:text-gray-100 prose-pre:rounded-lg
            prose-img:rounded-lg prose-img:shadow-sm prose-img:my-8 prose-img:border prose-img:border-gray-200"
          >
            <ReactMarkdown>{post.content[locale]}</ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Author Bio Section - Scandinavian Style */}
      <section className="py-12 px-4 bg-[#F5F7F9]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#A8BCAE] flex items-center justify-center text-white text-2xl md:text-3xl font-light shadow-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-[#2C3E50] mb-2">
                  {post.author}
                </h3>
                <p className="text-gray-600 mb-4 font-light">
                  Veterinary Specialist at MyPeterinarian Copenhagen
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 font-light">
                  {locale === 'en'
                    ? 'Passionate about pet health and wellness, dedicated to providing the best care for your furry family members. With years of experience in veterinary medicine, I strive to educate pet owners about preventive care and holistic pet health.'
                    : 'Passioneret omkring kæledyrssundhed og velvære, dedikeret til at yde den bedste pleje til dine pelede familiemedlemmer. Med mange års erfaring inden for veterinærmedicin stræber jeg efter at uddanne kæledyrsejere om forebyggende pleje og holistisk kæledyrssundhed.'}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-[#6B8FA9] hover:text-[#5A7A94] font-medium transition-colors"
                >
                  {locale === 'en' ? 'Contact' : 'Kontakt'} {post.author} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts - Scandinavian Style */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-[#2C3E50] mb-8 tracking-tight">
              {t('relatedPosts')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedPost.image}
                      alt={`Featured image for related post: ${relatedPost.title[locale]} - MyPeterinarian Blog`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-[#2C3E50] mb-2 line-clamp-2">
                      {relatedPost.title[locale]}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-light">
                      {relatedPost.excerpt[locale]}
                    </p>
                    <Link
                      href={`/${locale}/blog/${relatedPost.slug}`}
                      className="text-[#6B8FA9] hover:text-[#5A7A94] font-medium text-sm transition-colors"
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

      {/* CTA Section - Scandinavian Style */}
      <section className="bg-[#6B8FA9] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            {t('cta.description')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-[#6B8FA9] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
