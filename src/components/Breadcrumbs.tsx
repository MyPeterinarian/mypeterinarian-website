'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[]
}

export default function Breadcrumbs({ customItems }: BreadcrumbsProps) {
  const pathname = usePathname()
  const t = useTranslations('breadcrumbs')
  const locale = useLocale()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mypeterinarian.com'

  // Generate breadcrumb items from pathname if customItems not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems

    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: t('home'), href: `/${locale}` }
    ]

    // Skip the locale segment
    const relevantSegments = pathSegments.slice(1)

    let currentPath = `/${locale}`

    relevantSegments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Map URL segments to translation keys
      const segmentKey = segment.replace(/-/g, '')
      let label = t(segmentKey, { default: segment })

      // Capitalize if no translation found
      if (label === segment) {
        label = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }

      breadcrumbs.push({
        label,
        href: currentPath
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Generate Schema.org BreadcrumbList structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `${baseUrl}${item.href}`
    }))
  }

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null
  }

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1
              const isFirst = index === 0

              return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                  )}

                  {isLast ? (
                    <span className="text-gray-900 font-medium" aria-current="page">
                      {isFirst && <Home className="w-4 h-4 inline mr-1" />}
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[#1d6896] hover:text-[#22c0b6] transition-colors flex items-center"
                    >
                      {isFirst && <Home className="w-4 h-4 inline mr-1" />}
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
