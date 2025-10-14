'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const t = useTranslations('chatbot');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const bookingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-finalize booking after 60 seconds of inactivity
  useEffect(() => {
    // Clear existing timer
    if (bookingTimerRef.current) {
      clearTimeout(bookingTimerRef.current);
    }

    // Only start timer if chat is open and not loading
    if (isOpen && !isLoading && messages.length > 0) {
      console.log('[Chatbot] Starting 60-second timer for booking finalization');
      bookingTimerRef.current = setTimeout(async () => {
        console.log('[Chatbot] 60 seconds passed, attempting to finalize booking...');
        try {
          // Try to finalize any pending booking
          const response = await fetch('/api/chat/finalize-booking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sessionId: sessionId,
            }),
          });
          const data = await response.json();
          console.log('[Chatbot] Finalize booking response:', data);
        } catch (error) {
          console.error('[Chatbot] Failed to finalize booking:', error);
        }
      }, 60000); // 60 seconds
    }

    // Cleanup timer on unmount or when dependencies change
    return () => {
      if (bookingTimerRef.current) {
        clearTimeout(bookingTimerRef.current);
      }
    };
  }, [isOpen, isLoading, messages, sessionId]);

  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: t('welcomeMessage'),
        },
      ]);
    }
  }, [isOpen, messages.length, t]);

  const handleSend = async (messageText?: string) => {
    // If messageText is provided and is a string, use it. Otherwise use input.
    const textToSend = (typeof messageText === 'string' && messageText.trim()) ? messageText.trim() : input.trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: textToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          locale: locale,
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: t('errorMessage'),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label={t('openChat')}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ height: '600px', maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#22c0b6]" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('title')}</h3>
                  <p className="text-sm text-blue-100">{t('subtitle')}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 1 && messages[0].role === 'assistant' && (
                <div className="mb-4 space-y-2">
                  <p className="text-xs text-gray-500 text-center">{t('quickStart.title')}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedCategory === null ? (
                      // Show main categories
                      <>
                        <button
                          onClick={() => setSelectedCategory('booking')}
                          className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                        >
                          {t('quickStart.categories.booking.label')}
                        </button>
                        <button
                          onClick={() => setSelectedCategory('pricing')}
                          className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                        >
                          {t('quickStart.categories.pricing.label')}
                        </button>
                        <button
                          onClick={() => handleSend(t('quickStart.categories.hours.text'))}
                          className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                        >
                          {t('quickStart.categories.hours.label')}
                        </button>
                      </>
                    ) : (
                      // Show sub-options for selected category
                      <>
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className="text-left px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                        >
                          {t('quickStart.back')}
                        </button>
                        {selectedCategory === 'booking' && (
                          <>
                            <button
                              onClick={() => { handleSend(`I'd like to book ${t('quickStart.categories.booking.options.vetClinic')}`); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.booking.options.vetClinic')}
                            </button>
                            <button
                              onClick={() => { handleSend(`I'd like to book ${t('quickStart.categories.booking.options.vetHome')}`); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.booking.options.vetHome')}
                            </button>
                            <button
                              onClick={() => { handleSend(`I'd like to book ${t('quickStart.categories.booking.options.grooming')}`); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.booking.options.grooming')}
                            </button>
                            <button
                              onClick={() => { handleSend(`I'd like to book ${t('quickStart.categories.booking.options.daycare')}`); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.booking.options.daycare')}
                            </button>
                            <button
                              onClick={() => { handleSend(`I'd like to book ${t('quickStart.categories.booking.options.petCare')}`); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.booking.options.petCare')}
                            </button>
                          </>
                        )}
                        {selectedCategory === 'pricing' && (
                          <>
                            <button
                              onClick={() => { handleSend(t('quickStart.categories.pricing.options.veterinary')); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.pricing.options.veterinary')}
                            </button>
                            <button
                              onClick={() => { handleSend(t('quickStart.categories.pricing.options.grooming')); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.pricing.options.grooming')}
                            </button>
                            <button
                              onClick={() => { handleSend(t('quickStart.categories.pricing.options.daycare')); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.pricing.options.daycare')}
                            </button>
                            <button
                              onClick={() => { handleSend(t('quickStart.categories.pricing.options.petCare')); setSelectedCategory(null); }}
                              className="text-left px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#22c0b6] transition-colors text-sm"
                            >
                              {t('quickStart.categories.pricing.options.petCare')}
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white'
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 shadow-sm p-3 rounded-2xl flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">{t('typing')}</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('placeholder')}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#22c0b6] focus:border-transparent disabled:opacity-50"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white p-2 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={t('send')}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {t('disclaimer')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
