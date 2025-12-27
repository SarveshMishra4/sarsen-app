
// app/contact/page.tsx
'use client';

import React, { useState } from 'react';

// =====================================================
// CONTACT HERO SECTION
// Dark blue background with headline and illustration
// Matches home page hero aesthetic
// =====================================================
const ContactHeroSection = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ==================== LEFT COLUMN ==================== */}
          {/* Headline and Subtext */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
              Whether you're a bootstrapped startup or doing ₹10Cr annually, 
              we're here to help you make smarter strategic decisions.
            </p>
            <div className="pt-4">
              <p className="text-gray-400 text-base">
                Fill out the form and we'll respond within 24 hours. 
                Or reach out directly via email or phone.
              </p>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN ==================== */}
          {/* Illustration - Connection/Communication Theme */}
          <div className="relative h-80 sm:h-96 lg:h-[450px] flex items-center justify-center lg:justify-end">
            <div className="w-full h-full flex items-center justify-center">
              
              {/* SVG Illustration - Network/Communication */}
              <svg viewBox="0 0 400 400" className="w-full max-w-md h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2B7AB8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Central Hub (You/Business) */}
                <g>
                  <circle cx="200" cy="200" r="45" fill="rgba(74, 144, 226, 0.15)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="200" cy="200" r="30" fill="rgba(74, 144, 226, 0.25)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="200" cy="200" r="18" fill="#4A90E2" />
                  
                  {/* Center Icon - Communication */}
                  <path d="M 200 190 L 200 210 M 190 200 L 210 200" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* Connecting Lines to Outer Nodes */}
                <g opacity="0.6">
                  <line x1="200" y1="200" x2="120" y2="100" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4,4" />
                  <line x1="200" y1="200" x2="280" y2="100" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4,4" />
                  <line x1="200" y1="200" x2="320" y2="200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4,4" />
                  <line x1="200" y1="200" x2="280" y2="300" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4,4" />
                  <line x1="200" y1="200" x2="120" y2="300" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4,4" />
                  <line x1="200" y1="200" x2="80" y2="200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4,4" />
                </g>

                {/* Outer Nodes (Services/Solutions) */}
                <g>
                  {/* Top Left */}
                  <circle cx="120" cy="100" r="20" fill="rgba(30, 90, 142, 0.3)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="120" cy="100" r="10" fill="#1E5A8E" />
                  
                  {/* Top Right */}
                  <circle cx="280" cy="100" r="20" fill="rgba(30, 90, 142, 0.3)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="280" cy="100" r="10" fill="#1E5A8E" />
                  
                  {/* Right */}
                  <circle cx="320" cy="200" r="20" fill="rgba(30, 90, 142, 0.3)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="320" cy="200" r="10" fill="#1E5A8E" />
                  
                  {/* Bottom Right */}
                  <circle cx="280" cy="300" r="20" fill="rgba(30, 90, 142, 0.3)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="280" cy="300" r="10" fill="#1E5A8E" />
                  
                  {/* Bottom Left */}
                  <circle cx="120" cy="300" r="20" fill="rgba(30, 90, 142, 0.3)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="120" cy="300" r="10" fill="#1E5A8E" />
                  
                  {/* Left */}
                  <circle cx="80" cy="200" r="20" fill="rgba(30, 90, 142, 0.3)" stroke="#4A90E2" strokeWidth="2" />
                  <circle cx="80" cy="200" r="10" fill="#1E5A8E" />
                </g>

                {/* Animated Pulse Circles */}
                <g className="animate-pulse" opacity="0.4">
                  <circle cx="200" cy="200" r="60" fill="none" stroke="#4A90E2" strokeWidth="1" />
                  <circle cx="200" cy="200" r="75" fill="none" stroke="#4A90E2" strokeWidth="1" opacity="0.5" />
                </g>
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// CONTACT FORM & INFO SECTION
// Light background - matches report section aesthetic
// LEFT: Contact form | RIGHT: Contact info + quick links
// =====================================================
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    revenueStage: '',
    serviceInterest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          revenueStage: '',
          serviceInterest: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ==================== LEFT COLUMN - CONTACT FORM ==================== */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12">
              
              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-3">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-base">
                  Tell us about your business and what you're looking for. 
                  We'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800"
                    placeholder="Rajesh Kumar"
                  />
                </div>

                {/* Email and Phone - Side by Side */}
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800"
                      placeholder="rajesh@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800"
                    placeholder="Your Company Pvt Ltd"
                  />
                </div>

                {/* Revenue Stage and Service Interest - Side by Side */}
                <div className="grid sm:grid-cols-2 gap-6">
                  
                  {/* Revenue Stage */}
                  <div>
                    <label htmlFor="revenueStage" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Stage
                    </label>
                    <select
                      id="revenueStage"
                      name="revenueStage"
                      value={formData.revenueStage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
                    >
                      <option value="">Select stage</option>
                      <option value="pre-revenue">Pre-revenue</option>
                      <option value="0-10l">₹0-10L revenue</option>
                      <option value="10l-50l">₹10L-50L revenue</option>
                      <option value="50l-1cr">₹50L-1Cr revenue</option>
                      <option value="1cr-5cr">₹1-5Cr revenue</option>
                      <option value="5cr-10cr">₹5-10Cr revenue</option>
                      <option value="10cr+">₹10Cr+ revenue</option>
                    </select>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested In
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 bg-white"
                    >
                      <option value="">Select service</option>
                      <option value="growth">Growth & Revenue Strategy</option>
                      <option value="financial">Financial Planning & Capital</option>
                      <option value="operations">Operations & Efficiency</option>
                      <option value="strategic">Strategic Planning</option>
                      <option value="product">Product & Innovation</option>
                      <option value="not-sure">Not sure / Multiple areas</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your challenge <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none transition-all duration-300 text-gray-800"
                    placeholder="Describe your business situation, what challenges you're facing, and what kind of help you're looking for..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A1E3D] hover:bg-[#132B47] text-white py-4 px-6 rounded-lg transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-green-800 font-medium">Message sent successfully!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

              </form>

            </div>
          </div>

          {/* ==================== RIGHT COLUMN - CONTACT INFO ==================== */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Information Card */}
            <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-light mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm uppercase tracking-wide">Email</p>
                    <a href="mailto:contact@sareen.com" className="text-white/90 hover:text-white transition-colors text-lg">
                      contact@sareen.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm uppercase tracking-wide">Phone</p>
                    <a href="tel:+919876543210" className="text-white/90 hover:text-white transition-colors text-lg">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm uppercase tracking-wide">Office</p>
                    <p className="text-white/90 text-base leading-relaxed">
                      123 Business District<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm uppercase tracking-wide">Hours</p>
                    <p className="text-white/90 text-base leading-relaxed">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 2:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Quick Links
              </h3>
              
              <div className="space-y-3">
                <a href="/services" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-2 group">
                  <span>View All Services</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a href="/resources" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-2 group">
                  <span>Free Resources</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a href="/about" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-2 group">
                  <span>About Us</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a href="/blog" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-2 group">
                  <span>Blog & Insights</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Response Time Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-blue-800 font-medium text-sm">Quick Response Guarantee</p>
                  <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                    We typically respond to all inquiries within 24 hours. 
                    Urgent matters will be addressed even faster.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// FAQ SECTION
// Dark blue background with accordion
// Matches home page dark sections
// =====================================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with businesses from pre-revenue startups to ₹10Cr revenue companies across all industries. Our expertise has been honed in resource-constrained startup environments, which means we bring exceptional value-per-rupee thinking to every client—whether you're bootstrapped or well-funded, B2B or B2C, tech or traditional."
    },
    {
      question: "How long does a typical engagement last?",
      answer: "Most of our projects are designed for 2-week delivery cycles. We believe in fast turnaround without compromising quality. Some services like retainer advisory are ongoing (3-month minimum), while workshops are single-day intensives. Unlike traditional consulting that drags on for months, we deliver actionable outputs quickly so you can start implementing immediately."
    },
    {
      question: "What exactly will I receive at the end of the engagement?",
      answer: "You'll receive tangible, execution-ready deliverables—not vague PowerPoint advice. This includes Excel financial models (unlocked, with formulas), strategic roadmaps, process documents, frameworks, templates, and tools. Everything is designed for your team to implement without ongoing consulting dependency. You own all deliverables completely."
    },
    {
      question: "How is your pricing structured?",
      answer: "Our services range from ₹15,000 to ₹75,000 depending on scope and complexity. This is approximately 1/10th the cost of traditional Big 4 consulting. We offer fixed-price project-based engagements (no hourly billing surprises), monthly retainers for ongoing support, and group workshops at ₹7,000 per participant. Payment is typically 100% upfront for projects under ₹40,000, or 50% upfront + 50% at midpoint for larger engagements."
    },
    {
      question: "Do you offer services remotely or only in-person?",
      answer: "We work both remotely and in-person, depending on your preference and project needs. Most of our engagements are conducted via video calls, which allows us to serve clients across India efficiently. For certain workshops or intensive sessions, in-person meetings can be arranged in major metros. Our remote delivery model is battle-tested and highly effective—we've worked with 100+ clients successfully via video."
    },
    {
      question: "What makes you different from other consulting firms?",
      answer: "Three key differences: (1) Startup-honed discipline—we learned strategy where every rupee matters, so we eliminate fluff; (2) Execution-ready outputs—you get working models and frameworks, not just presentations; (3) Accessible pricing—we're 1/10th the cost of Big 4 because we don't have marble lobbies and bloated overhead. Plus, we've been entrepreneurs ourselves—we understand your challenges from lived experience, not just textbooks."
    },
    {
      question: "Can you help with implementation, or just strategy?",
      answer: "Our core offering is strategic consulting—we provide the plan, frameworks, and roadmap. However, we design everything to be immediately executable by your team. For ongoing implementation support, we offer retainer-based advisory where you can check in with us as you execute. We intentionally don't create consulting dependency—our goal is to empower you to run your business independently after our engagement."
    },
    {
      question: "What if I'm not sure which service I need?",
      answer: "That's completely normal. Book a free 30-minute discovery call with us. We'll discuss your business situation, identify your most pressing challenges, and recommend the right service (or combination of services). There's no pressure or sales pitch—just honest advice on what would help you most. Sometimes the answer is 'you don't need us yet'—and we'll tell you that."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0A1E3D] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Common questions about our services, process, and pricing. 
            Don't see your question? Send us a message above.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#132B47] rounded-xl overflow-hidden transition-all duration-300 border border-blue-900/30 hover:border-blue-700/50"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-[#1a3a5c] transition-colors duration-300 group"
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium pr-4 text-base sm:text-lg group-hover:text-blue-300 transition-colors duration-300">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-400 transition-transform duration-300 flex-shrink-0 ${
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
                <div className="px-6 sm:px-8 pb-5 sm:pb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-base mb-4">
            Still have questions?
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 flex items-center gap-2 mx-auto group"
          >
            <span>Send us a message</span>
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// OFFICE LOCATION SECTION
// Light background with map and directions
// Matches free resources section aesthetic
// =====================================================
const OfficeLocationSection = () => {
  return (
    <section className="bg-[#E8EEF2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Located in the heart of Bangalore's business district. 
            Drop by for a coffee and a conversation about your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ==================== LEFT COLUMN - MAP PLACEHOLDER ==================== */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-96 sm:h-[450px]">
              
              {/* Map Placeholder - Replace with actual map integration */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center relative">
                
                {/* Grid Pattern Background */}
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-20 absolute inset-0">
                  {[0, 80, 160, 240, 320, 400].map((pos, i) => (
                    <g key={i}>
                      <line x1={pos} y1="0" x2={pos} y2="400" stroke="#666" strokeWidth="1" />
                      <line x1="0" y1={pos} x2="400" y2={pos} stroke="#666" strokeWidth="1" />
                    </g>
                  ))}
                </svg>

                {/* Location Marker */}
                <div className="relative z-10">
                  <svg width="80" height="100" viewBox="0 0 80 100" className="drop-shadow-xl">
                    {/* Marker Pin */}
                    <path
                      d="M 40 10 Q 25 10 15 22 Q 10 30 10 45 Q 10 65 40 95 Q 70 65 70 45 Q 70 30 65 22 Q 55 10 40 10 Z"
                      fill="#1E5A8E"
                      stroke="#0A1E3D"
                      strokeWidth="2"
                    />
                    {/* Inner Circle */}
                    <circle cx="40" cy="38" r="15" fill="white" />
                    <circle cx="40" cy="38" r="8" fill="#1E5A8E" />
                  </svg>
                  
                  <div className="text-center mt-4">
                    <p className="text-gray-700 font-medium text-lg">Bangalore Office</p>
                    <p className="text-gray-600 text-sm">Karnataka, India</p>
                  </div>
                </div>

                {/* Map Integration Placeholder Text */}
                <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
                  <p className="text-gray-600 text-xs">
                    🗺️ Google Maps Integration
                  </p>
                </div>

              </div>

            </div>

            {/* Get Directions Button */}
            <div className="mt-6">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A1E3D] hover:bg-[#132B47] text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>Get Directions</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN - LOCATION INFO ==================== */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Address Card */}
            <div className="bg-gradient-to-br from-[#7B8FA5] to-[#8B9EB0] rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-medium mb-3">Our Address</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Sareen & Company<br />
                    123 Business District Road<br />
                    Koramangala, 4th Block<br />
                    Bangalore, Karnataka 560034<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Directions & Landmarks */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                How to Reach Us
              </h3>
              
              <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                <div>
                  <p className="font-medium text-gray-800 mb-1">By Metro:</p>
                  <p className="text-gray-600">
                    Nearest station: Koramangala Metro (Purple Line)<br />
                    5-minute walk from Exit B
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800 mb-1">By Car:</p>
                  <p className="text-gray-600">
                    Visitor parking available in basement<br />
                    Entry via Gate 2 (Sony World Signal side)
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800 mb-1">Nearby Landmarks:</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• Forum Mall (2 min walk)</li>
                    <li>• Sony World Junction (opposite)</li>
                    <li>• Jyoti Nivas College (5 min walk)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Office Hours Highlight */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-blue-800 font-medium text-sm">Walk-ins Welcome</p>
                  <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 2:00 PM<br />
                    <span className="text-blue-600 italic">We recommend scheduling ahead to ensure availability.</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// FINAL CTA SECTION
// Dark blue background - strong call to action
// Matches home page dark sections
// =====================================================
const FinalCTASection = () => {
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
          Ready to Make Smarter Strategic Decisions?
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg sm:text-xl mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
          Whether you need help with fundraising, growth strategy, or operations—we're here. 
          Book a free 30-minute discovery call to discuss your challenges.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          
          {/* Primary CTA */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-300 font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
          >
            <span>Book Free Discovery Call</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Secondary CTA */}
          <a 
            href="/services"
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#0A1E3D] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg transition-all duration-300 font-medium text-base sm:text-lg flex items-center justify-center gap-3 group"
          >
            <span>Explore Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 pt-12 border-t border-blue-900/30">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            
            <div>
              <div className="text-blue-400 mb-2">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg mb-1">2-Week Delivery</p>
              <p className="text-gray-400 text-sm">Fast turnaround on most projects</p>
            </div>

            <div>
              <div className="text-blue-400 mb-2">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg mb-1">Tangible Outputs</p>
              <p className="text-gray-400 text-sm">Models, frameworks, not vague advice</p>
            </div>

            <div>
              <div className="text-blue-400 mb-2">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white font-medium text-lg mb-1">1/10th the Cost</p>
              <p className="text-gray-400 text-sm">Compared to Big 4 consulting</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// SIMPLE DIVIDER SECTION
// Matches home page divider
// =====================================================
const SimpleDivider = () => {
  return (
    <div className="w-full h-24 bg-gray-300 border-b-2 border-gray-400"></div>
  );
};

// =====================================================
// MAIN CONTACT PAGE COMPONENT
// Exports all sections in order
// Fully responsive and matches home page design language
// =====================================================
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
      <OfficeLocationSection />
      <FinalCTASection />
      <SimpleDivider />
      
      {/* Footer would go here (shared across all pages) */}
    </main>
  );
}