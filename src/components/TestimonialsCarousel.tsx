'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Review {
  text: string
  author: string
  pet: string
  rating: number
  source?: 'google' | 'trustpilot'
  date?: string
}

interface TestimonialsCarouselProps {
  reviews: Review[]
  autoRotateInterval?: number
}

export default function TestimonialsCarousel({
  reviews,
  autoRotateInterval = 5000
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || reviews.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, autoRotateInterval, reviews.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  if (reviews.length === 0) return null

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-12 rounded-xl shadow-lg"
          >
            {/* Rating Stars */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < reviews[currentIndex].rating
                        ? 'fill-current'
                        : 'fill-none'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-lg md:text-xl text-center mb-6 italic leading-relaxed">
              &quot;{reviews[currentIndex].text}&quot;
            </p>

            {/* Author Info */}
            <div className="text-center">
              <p className="font-semibold text-gray-900 text-lg">
                {reviews[currentIndex].author}
              </p>
              <p className="text-sm text-gray-500">
                {reviews[currentIndex].pet}
              </p>
              {reviews[currentIndex].source && (
                <p className="text-xs text-gray-400 mt-1">
                  via {reviews[currentIndex].source === 'google' ? 'Google' : 'Trustpilot'}
                  {reviews[currentIndex].date && ` • ${reviews[currentIndex].date}`}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {reviews.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {reviews.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play toggle */}
      {reviews.length > 1 && (
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-0 right-0 text-xs text-gray-500 hover:text-gray-700"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  )
}
