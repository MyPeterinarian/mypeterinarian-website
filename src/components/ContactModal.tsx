'use client';

import { useState } from 'react';
import { X, Mail, Copy, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

export default function ContactModal({ isOpen, onClose, subject }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = 'hej@mypeterinarian.com';

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleOpenEmail = () => {
    const mailtoLink = subject
      ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
      : `mailto:${email}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#22c0b6] to-[#1d6896] rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Send us an email and we'll get back to you as soon as possible!
          </p>

          {/* Email display */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500 mb-2">Email us at:</p>
            <p className="text-lg font-semibold text-[#1d6896]">{email}</p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={handleOpenEmail}
              className="w-full bg-gradient-to-r from-[#22c0b6] to-[#1d6896] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Open Email Client
            </button>

            <button
              onClick={handleCopyEmail}
              className="w-full border-2 border-[#1d6896] text-[#1d6896] px-6 py-3 rounded-lg font-semibold hover:bg-[#1d6896] hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy Email Address
                </>
              )}
            </button>
          </div>

          {/* Additional info */}
          <p className="text-sm text-gray-500 mt-6">
            You can also call us at{' '}
            <a href="tel:+4561667611" className="text-[#1d6896] hover:underline font-semibold">
              +45 61 66 76 11
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
