'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function BlogPage() {
  const t = useTranslations('blog');
  const params = useParams();
  const locale = params.locale as 'en' | 'dk';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All Categories', ...new Set(blogPosts.map(post => post.category))];
    return cats;
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
      const matchesSearch =
        post.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content[locale].toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, locale]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Scandinavian Style */}
      <section className="bg-[#F5F7F9] py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C3E50] mb-6 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FA998] focus:border-transparent outline-none font-light"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FA998] focus:border-transparent outline-none appearance-none bg-white cursor-pointer font-light"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All Categories' ? t('allCategories') : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory !== 'All Categories') && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600 font-light">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F5F7F9] text-[#6B8FA9] rounded-full text-sm font-light border border-gray-200">
                  Search: &quot;{searchQuery}&quot;
                  <button
                    onClick={() => setSearchQuery('')}
                    className="hover:text-[#2C3E50] transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== 'All Categories' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#F5F7F9] text-[#8FA998] rounded-full text-sm font-light border border-gray-200">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('All Categories')}
                    className="hover:text-[#2C3E50] transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-[#F5F7F9]">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4 font-light">
                {searchQuery || selectedCategory !== 'All Categories' ? t('noResults') : t('noPosts')}
              </p>
              {(searchQuery || selectedCategory !== 'All Categories') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                  }}
                  className="text-[#6B8FA9] hover:text-[#5A7A94] font-medium transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6 font-light">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200"
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={`Featured image for blog post: ${post.title[locale]} - MyPeterinarian Copenhagen`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#8FA998] text-white px-3 py-1 rounded-full text-sm font-light">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-medium text-[#2C3E50] mb-3 line-clamp-2">
                        {post.title[locale]}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3 font-light">
                        {post.excerpt[locale]}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4 font-light">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <Link
                        href={`/${locale}/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[#6B8FA9] hover:text-[#5A7A94] font-medium transition-colors"
                      >
                        {t('readMore')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section - Scandinavian Style */}
      <section className="bg-[#6B8FA9] py-20 px-4">
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
