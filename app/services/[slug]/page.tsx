// app/services/[slug]/page.tsx
// REMOVED: 'use client' directive
// In app/services/[slug]/page.tsx
import { getServiceBySlug, getAllServiceSlugs, getRelatedServices } from '../../data/services';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { Service } from '@/app/data/types';
import FAQSection from './FAQSection';

// =====================================================
// GENERATE STATIC PARAMS
// Tells Next.js which service pages to pre-build
// =====================================================
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// =====================================================
// GENERATE METADATA (SEO)
// Sets page title, description for each service
// =====================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // IMPORTANT: Await the params Promise
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | Sareen & Company',
      description: 'The service you are looking for does not exist.',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords.join(', '),
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'website',
    },
  };
}

// =====================================================
// MAIN SERVICE PAGE COMPONENT
// Renders different sections based on service data
// =====================================================
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  // Get related services for bottom section
  const relatedServices = getRelatedServices(service.relatedServices);

  return (
    <main className="min-h-screen">
      <ServiceHeroSection service={service} />
      <ServiceOverviewSection service={service} />
      <IdealForSection service={service} />
      <DeliverablesSection service={service} />
      <ProcessSection service={service} />
      <OutcomesSection service={service} />
      <PricingSection service={service} />
      <FAQSection service={service} />
      {relatedServices.length > 0 && <RelatedServicesSection services={relatedServices} />}
      <ServiceCTASection service={service} />
    </main>
  );
}

// =====================================================
// HERO SECTION COMPONENT
// Dark blue background with service headline
// =====================================================
function ServiceHeroSection({ service }: { service: Service }) {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-blue-300">{service.title}</span>
            </div>

            {/* Category Badge */}
            <div className="inline-block">
              <span className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-700/50">
                {service.category}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
              {service.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
              {service.hero.subheadline}
            </p>

            {/* Price & Duration */}
            <div className="flex flex-wrap gap-6 items-center pt-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Investment</p>
                <p className="text-white text-3xl font-medium">{service.price}</p>
              </div>
              <div className="w-px h-16 bg-blue-800"></div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Timeline</p>
                <p className="text-white text-3xl font-medium">{service.duration}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl flex items-center gap-3 group"
              >
                <span>{service.hero.ctaText}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A1E3D] text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Right Column - Illustration Placeholder */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            <div className="w-full max-w-md h-full bg-gradient-to-br from-blue-900/20 to-transparent rounded-2xl flex items-center justify-center border border-blue-800/30">
              <div className="text-center text-blue-400/50 p-8">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
                <p className="text-sm">Service Illustration<br/>Placeholder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// =====================================================
// OVERVIEW SECTION
// Light background with service overview
// =====================================================
function ServiceOverviewSection({ service }: { service: Service }) {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-8">
          What This Service Delivers
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            {service.overview}
          </p>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// IDEAL FOR SECTION
// White background with checkmark points
// =====================================================
function IdealForSection({ service }: { service: Service }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-12 text-center">
          {service.idealFor.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.idealFor.points.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// DELIVERABLES SECTION
// Light background with deliverable cards
// =====================================================
function DeliverablesSection({ service }: { service: Service }) {
  return (
    <section className="bg-[#E8EEF2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 text-center">
          {service.deliverables.title}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Everything you receive is tangible, executable, and yours to keep forever. 
          No vague consulting advice—just real tools and documents.
        </p>

        <div className="space-y-6">
          {service.deliverables.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-start gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="hidden sm:block flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// PROCESS SECTION
// Dark blue background with timeline
// =====================================================
function ProcessSection({ service }: { service: Service }) {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 text-center">
          {service.process.title}
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Our proven process ensures you get maximum value in minimum time. 
          Every session is structured, focused, and moves you forward.
        </p>

        <div className="space-y-8">
          {service.process.steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Connector Line (except for last item) */}
              {index < service.process.steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-blue-800 hidden md:block"></div>
              )}

              <div className="bg-[#132B47] rounded-xl p-8 hover:bg-[#1a3a5c] transition-all duration-300 border border-blue-900/30">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center relative z-10">
                      <span className="text-white font-semibold text-xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-2xl font-medium text-white mb-2 sm:mb-0">
                        {step.title}
                      </h3>
                      <span className="text-blue-300 text-sm font-medium bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// OUTCOMES SECTION
// White background with outcome points
// =====================================================
function OutcomesSection({ service }: { service: Service }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-12 text-center">
          {service.outcomes.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.outcomes.points.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Box */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-blue-800 font-medium text-sm">Our Commitment</p>
              <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                If you implement our recommendations and don't see the expected outcomes within 
                90 days, we'll provide a free 60-minute consultation to troubleshoot and adjust the strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// PRICING SECTION
// Light background with pricing details
// =====================================================
function PricingSection({ service }: { service: Service }) {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Pricing Header */}
          <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-2">
              Investment
            </h2>
            <div className="text-5xl sm:text-6xl font-semibold text-white mb-2">
              {service.pricing.basePrice}
            </div>
            <p className="text-blue-100 text-lg">
              {service.duration} engagement
            </p>
          </div>

          {/* Pricing Details */}
          <div className="p-8 sm:p-10">
            <div className="space-y-6">
              
              {/* What's Included */}
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  What's Included:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.pricing.details}
                </p>
              </div>

              {/* Payment Terms */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  Payment Terms:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.pricing.paymentTerms}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link 
                  href="/contact"
                  className="w-full bg-[#0A1E3D] hover:bg-[#132B47] text-white py-4 px-6 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <span>Get Started Today</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Additional Note */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Questions about pricing or payment options? 
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}

// =====================================================
// RELATED SERVICES SECTION
// Light background with service cards
// =====================================================
function RelatedServicesSection({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  return (
    <section className="bg-[#E8EEF2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 text-center">
          You Might Also Need
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Services that commonly pair well with this one. Many clients combine 
          multiple services for comprehensive support.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-500">
                
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-gray-500 text-xs">From</p>
                    <p className="text-gray-800 font-semibold">{service.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">Timeline</p>
                    <p className="text-gray-800 font-semibold">{service.duration}</p>
                  </div>
                </div>

                {/* Learn More */}
                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// SERVICE CTA SECTION (Bottom)
// Dark blue background with final call-to-action
// =====================================================
function ServiceCTASection({ service }: { service: Service }) {
  return (
    <section className="bg-[#0A1E3D] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <circle cx="200" cy="200" r="300" fill="#4A90E2" />
          <circle cx="800" cy="800" r="400" fill="#2B7AB8" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
          Ready to Get Started with {service.title}?
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg sm:text-xl mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
          Book a free 30-minute discovery call. We'll discuss your specific situation, 
          answer your questions, and determine if this service is the right fit—with zero pressure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          
          {/* Primary CTA */}
          <Link 
            href="/contact"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-300 font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
          >
            <span>Book Free Discovery Call</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Secondary CTA */}
          <Link 
            href="/services"
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#0A1E3D] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-300 font-medium text-base sm:text-lg flex items-center justify-center gap-3 group"
          >
            <span>Explore Other Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-blue-900/30">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            
            <div>
              <div className="text-blue-400 mb-3">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg mb-1">{service.duration}</p>
              <p className="text-gray-400 text-sm">Delivery Timeline</p>
            </div>

            <div>
              <div className="text-blue-400 mb-3">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg mb-1">{service.deliverables.items.length}+ Deliverables</p>
              <p className="text-gray-400 text-sm">Tangible Outputs</p>
            </div>

            <div>
              <div className="text-blue-400 mb-3">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg mb-1">{service.price}</p>
              <p className="text-gray-400 text-sm">Fixed Investment</p>
            </div>

          </div>
        </div>

        {/* Testimonial (if available) */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-[#132B47] rounded-xl p-8 border border-blue-900/30 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <div>
                <p className="text-gray-300 italic leading-relaxed mb-4">
                  "Working with Sareen & Company transformed how we approach strategy. 
                  The deliverables were immediately actionable, and the results exceeded our expectations. 
                  Best investment we made this year."
                </p>
                <div className="text-left">
                  <p className="text-white font-medium">Rajesh Kumar</p>
                  <p className="text-gray-400 text-sm">Founder, TechVentures Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}