'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// Dark blue background with contact headline
// =====================================================
const ContactHeroSection = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[400px] pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative stars/dots in background */}
      <div className="absolute top-20 right-10 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl text-white font-light mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Right Column - Decorative Diagram Space */}
          <div className="relative h-64 md:h-80 flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full h-full max-w-md ml-auto">
              {/* Connection lines diagram */}
              <g opacity="0.6">
                {/* Central node */}
                <circle cx="200" cy="150" r="30" stroke="#4A90E2" strokeWidth="2" fill="#0A1E3D" />
                <circle cx="200" cy="150" r="20" stroke="#4A90E2" strokeWidth="1" fill="none" />

                {/* Connecting lines to outer nodes */}
                <line x1="200" y1="150" x2="100" y2="80" stroke="#4A90E2" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="200" y1="150" x2="300" y2="80" stroke="#4A90E2" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="200" y1="150" x2="100" y2="220" stroke="#4A90E2" strokeWidth="1.5" strokeDasharray="3,3" />
                <line x1="200" y1="150" x2="300" y2="220" stroke="#4A90E2" strokeWidth="1.5" strokeDasharray="3,3" />

                {/* Outer nodes */}
                <circle cx="100" cy="80" r="15" stroke="#4A90E2" strokeWidth="2" fill="#1E5A8E" />
                <circle cx="300" cy="80" r="15" stroke="#4A90E2" strokeWidth="2" fill="#1E5A8E" />
                <circle cx="100" cy="220" r="15" stroke="#4A90E2" strokeWidth="2" fill="#1E5A8E" />
                <circle cx="300" cy="220" r="15" stroke="#4A90E2" strokeWidth="2" fill="#1E5A8E" />

                {/* Small decorative dots */}
                <circle cx="150" cy="100" r="3" fill="#4A90E2" />
                <circle cx="250" cy="100" r="3" fill="#4A90E2" />
                <circle cx="150" cy="200" r="3" fill="#4A90E2" />
                <circle cx="250" cy="200" r="3" fill="#4A90E2" />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// CONTACT FORM & INFO SECTION
// Light background with form and contact details
// =====================================================
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Send us a Message
            </h2>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Company Field */}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              {/* Phone Field */}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>

              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#1E5A8E] text-white py-4 px-6 rounded-lg hover:bg-[#2B7AB8] transition-colors duration-300 font-medium text-lg"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">

            {/* Contact Details Card */}
            <div className="bg-[#8B9EB0] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-light mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:contact@sareen.com" className="text-white/90 hover:text-white transition-colors">
                      contact@sareen.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+15550000000" className="text-white/90 hover:text-white transition-colors">
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Office Address</p>
                    <p className="text-white/90">
                      123 Business Street<br />
                      Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Business Hours</p>
                    <p className="text-white/90">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagram Space - Reserved for custom illustration */}
            <div className="bg-white rounded-lg p-8 shadow-md h-64 flex items-center justify-center">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                {/* Flowchart style diagram */}
                <g opacity="0.7">
                  {/* Top box */}
                  <rect x="100" y="20" width="100" height="40" rx="5" stroke="#4A90E2" strokeWidth="2" fill="none" />
                  <text x="150" y="45" textAnchor="middle" fill="#4A90E2" fontSize="12">Contact</text>

                  {/* Arrow down */}
                  <line x1="150" y1="60" x2="150" y2="85" stroke="#4A90E2" strokeWidth="2" />
                  <polygon points="150,90 145,80 155,80" fill="#4A90E2" />

                  {/* Middle box */}
                  <rect x="100" y="95" width="100" height="40" rx="5" stroke="#4A90E2" strokeWidth="2" fill="none" />
                  <text x="150" y="120" textAnchor="middle" fill="#4A90E2" fontSize="12">Review</text>

                  {/* Arrow down */}
                  <line x1="150" y1="135" x2="150" y2="160" stroke="#4A90E2" strokeWidth="2" />
                  <polygon points="150,165 145,155 155,155" fill="#4A90E2" />

                  {/* Bottom box */}
                  <rect x="100" y="170" width="100" height="40" rx="5" stroke="#4A90E2" strokeWidth="2" fill="#1E5A8E" fillOpacity="0.1" />
                  <text x="150" y="195" textAnchor="middle" fill="#4A90E2" fontSize="12">Response</text>
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
// FAQ SECTION
// Dark blue background with accordion-style questions
// =====================================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Sareen & Company offer?",
      answer: "Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder."
    },
    {
      question: "How long does the consultation process take?",
      answer: "Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder."
    },
    {
      question: "Do you offer remote consultations?",
      answer: "Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder."
    }
  ];

  const toggleFAQ = (index: number) => {
const [openIndex, setOpenIndex] = useState<number | null>(null);
  };



  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-sm">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#132B47] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1a3a5c] transition-colors"
              >
                <span className="text-white font-medium pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// LOCATION MAP SECTION
// Light background with map placeholder and directions
// =====================================================
const LocationMapSection = () => {
  return (
    <section className="bg-[#8B9EB0] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Map Placeholder */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
            {/* Reserved space for map integration */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
              {/* Map placeholder with location marker */}
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-30">
                {/* Grid lines to simulate map */}
                {[0, 100, 200, 300, 400].map((pos, i) => (
                  <g key={i}>
                    <line x1={pos} y1="0" x2={pos} y2="400" stroke="#999" strokeWidth="1" />
                    <line x1="0" y1={pos} x2="400" y2={pos} stroke="#999" strokeWidth="1" />
                  </g>
                ))}

                {/* Location marker */}
                <g transform="translate(200, 180)">
                  <path
                    d="M0,-40 Q-15,-40 -25,-28 Q-30,-20 -30,0 Q-30,20 0,50 Q30,20 30,0 Q30,-20 25,-28 Q15,-40 0,-40 Z"
                    fill="#1E5A8E"
                    opacity="0.8"
                  />
                  <circle cx="0" cy="-15" r="10" fill="white" />
                </g>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-gray-500 font-medium">Map Integration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Directions and Info */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Visit Our Office
            </h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-white/90">
                <strong className="text-white block mb-1">Address:</strong>
                123 Business Street, Suite 100<br />
                City, State 12345
              </p>

              <p className="text-white/90">
                <strong className="text-white block mb-1">Directions:</strong>
                Our office is conveniently located in the heart of the business district,
                easily accessible by public transportation or car. Free parking available
                in the building garage.
              </p>

              <p className="text-white/90">
                <strong className="text-white block mb-1">Nearby Landmarks:</strong>
                • Central Business Plaza (2 blocks east)<br />
                • Metro Station (5 minute walk)<br />
                • City Mall (0.5 miles north)
              </p>
            </div>

            <button className="mt-6 bg-white text-[#0A1E3D] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get Directions
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// CTA SECTION
// Dark blue background with call-to-action
// =====================================================
const CTASection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
          Ready to Get Started?
        </h2>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Schedule a consultation with our team to discuss how we can help your business grow
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#1E5A8E] text-white px-8 py-4 rounded-lg hover:bg-[#2B7AB8] transition-colors font-medium text-lg">
            Schedule Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0A1E3D] transition-colors font-medium text-lg">
            Download Brochure
          </button>
        </div>

        {/* Decorative diagram space */}
        <div className="mt-12">
          <svg viewBox="0 0 600 100" className="w-full h-24 opacity-40">
            {/* Simple connection flow diagram */}
            <g>
              {/* Left circle */}
              <circle cx="100" cy="50" r="25" stroke="#4A90E2" strokeWidth="2" fill="none" />
              <circle cx="100" cy="50" r="15" stroke="#4A90E2" strokeWidth="1" fill="none" />

              {/* Connecting line */}
              <line x1="125" y1="50" x2="225" y2="50" stroke="#4A90E2" strokeWidth="2" strokeDasharray="5,5" />
              <polygon points="230,50 220,45 220,55" fill="#4A90E2" />

              {/* Middle circle */}
              <circle cx="300" cy="50" r="30" stroke="#4A90E2" strokeWidth="2" fill="none" />
              <circle cx="300" cy="50" r="18" stroke="#4A90E2" strokeWidth="1" fill="none" />

              {/* Connecting line */}
              <line x1="330" y1="50" x2="445" y2="50" stroke="#4A90E2" strokeWidth="2" strokeDasharray="5,5" />
              <polygon points="450,50 440,45 440,55" fill="#4A90E2" />

              {/* Right circle */}
              <circle cx="500" cy="50" r="25" stroke="#4A90E2" strokeWidth="2" fill="#1E5A8E" fillOpacity="0.3" />
              <circle cx="500" cy="50" r="15" stroke="#4A90E2" strokeWidth="1" fill="none" />
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// MAIN CONTACT PAGE COMPONENT - EXPORTS ALL SECTIONS
// =====================================================
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
      <LocationMapSection />
      <CTASection />
    </main>
  );
}