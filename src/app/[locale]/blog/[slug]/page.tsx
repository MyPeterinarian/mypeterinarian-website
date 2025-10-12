'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToBlog')}
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title[locale]}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b">
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString(locale, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Share2 className="w-5 h-5" />
              {t('share')}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 w-full rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title[locale]}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <ReactMarkdown>{post.content[locale]}</ReactMarkdown>
        </div>
      </article>

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
