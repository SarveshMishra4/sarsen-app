// app/services/[slug]/FAQSection.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Service } from '@/app/data/types';

export default function FAQSection({ service }: { service: Service }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Common questions about this service. Don't see yours? 
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
            Ask us directly
          </Link>
        </p>

        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-300 group"
                aria-expanded={openIndex === index}
              >
                <span className="text-gray-800 font-medium pr-4 text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}