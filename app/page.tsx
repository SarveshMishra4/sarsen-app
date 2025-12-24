// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// Dark blue background with search bar and illustration
// =====================================================
const HeroSection = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative stars/dots in background */}
      <div className="absolute top-20 right-10 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Search Bar */}
          <div className="space-y-8">
            {/* Search Bar Container */}
            <div className="max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, reports, resources..."
                  className="w-full px-6 py-4 rounded-lg bg-[#4A5B75] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Headline Text */}
            <div>
              <h1 className="text-2xl md:text-3xl text-white font-light">
                Struggling with Customer Acquisition Cost?
              </h1>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative h-64 md:h-80 flex items-center justify-center">
            {/* Placeholder for SVG Illustration - Replace with your own */}
            <div className="relative w-full h-full flex items-center justify-end">
              {/* Curved path with gears illustration */}
              <svg viewBox="0 0 400 300" className="w-full h-full max-w-md ml-auto">
                {/* Curved flowing line */}
                <path
                  d="M 50 150 Q 150 80, 250 150 T 380 120"
                  stroke="#4A90E2"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.6"
                />
                
                {/* Small gear - left */}
                <circle cx="80" cy="120" r="25" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <circle cx="80" cy="120" r="15" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <line x1="65" y1="120" x2="95" y2="120" stroke="#4A90E2" strokeWidth="1" />
                <line x1="80" y1="105" x2="80" y2="135" stroke="#4A90E2" strokeWidth="1" />
                
                {/* Medium gear - center */}
                <circle cx="200" cy="150" r="35" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <circle cx="200" cy="150" r="20" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <line x1="180" y1="150" x2="220" y2="150" stroke="#4A90E2" strokeWidth="1" />
                <line x1="200" y1="130" x2="200" y2="170" stroke="#4A90E2" strokeWidth="1" />
                
                {/* Large gear - right */}
                <circle cx="330" cy="140" r="45" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <circle cx="330" cy="140" r="28" stroke="#4A90E2" strokeWidth="2" fill="none" />
                <line x1="305" y1="140" x2="355" y2="140" stroke="#4A90E2" strokeWidth="1" />
                <line x1="330" y1="115" x2="330" y2="165" stroke="#4A90E2" strokeWidth="1" />
                
                {/* Arrow at the end */}
                <path d="M 370 120 L 390 130 L 370 140" stroke="#4A90E2" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// REPORT SECTION COMPONENT
// Light blue/gray background with report preview card
// =====================================================
const ReportSection = () => {
  return (
    <section className="bg-[#8B9EB0] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Report on Indian Startup Landscape
            </h2>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed">
                Get comprehensive insights into the Indian startup ecosystem with our latest research report. 
                Covering funding trends, sector-wise analysis, growth metrics, and emerging opportunities 
                across tier-1 and tier-2 cities. Essential reading for founders, investors, and business 
                leaders looking to understand the evolving landscape of Indian entrepreneurship.
              </p>
            </div>
          </div>

          {/* Right Column - Report Card */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-md ml-auto">
              {/* Report Preview Image - Replace with actual report preview */}
              <div className="bg-[#1E5A8E] h-64 relative">
                {/* Blue gradient background representing report cover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    {/* Circular elements */}
                    <div className="flex justify-center items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/40"></div>
                      </div>
                    </div>
                    {/* Vertical dots indicator */}
                    <div className="flex flex-col items-end absolute right-8 top-1/2 transform -translate-y-1/2 space-y-2">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                      <div className="w-3 h-3 rounded-full bg-white/60"></div>
                      <div className="w-3 h-3 rounded-full bg-white/40"></div>
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                    <div className="text-xs uppercase tracking-wider">Report Preview</div>
                  </div>
                </div>
              </div>
              
              {/* Download Button */}
              <div className="p-6 bg-white">
                <button className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors font-medium">
                  Download
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// COMPANY HELPS SECTION
// Dark blue background with bullet points
// =====================================================
const CompanyHelpsSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            How Sareen & Company Helps
          </h2>

          {/* Description Text */}
          <div className="mb-8">
            <p className="text-gray-300 text-sm leading-relaxed">
              We partner with founders and business leaders to navigate the complexities of building 
              and scaling successful ventures. Our data-driven approach combines strategic consulting, 
              hands-on execution support, and deep industry expertise to help you achieve sustainable 
              growth and overcome critical business challenges.
            </p>
          </div>

          {/* Bullet Point List */}
          <ul className="space-y-3 text-white">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span className="text-gray-300">Strategic business diagnostics and direction setting for sustainable growth</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span className="text-gray-300">Product-market fit validation and go-to-market strategy development</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span className="text-gray-300">Business turnaround services and operational excellence implementation</span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// FOUNDERS SECTION COMPONENT
// Dark blue background with animated founder cards
// Features: Dissolving image animation + card sliding from left
// =====================================================
const FoundersSection = () => {
  const [activeFounder, setActiveFounder] = useState(0);

  // Array of founders data - Replace with actual founder information
  const founders = [
    {
      id: 1,
      name: "Komal Shah",
      role: "Founder & CEO",
      quote: "Every startup faces unique challenges, but the fundamentals of building a successful business remain consistent. At Sareen & Company, we help founders navigate uncertainty with clarity, data, and actionable strategies that drive real results.",
      image: "/founder1.jpg"
    },
    {
      id: 2,
      name: "Rajesh Sareen",
      role: "Co-Founder & Strategy Head",
      quote: "Innovation without execution is just imagination. We work alongside founders to transform strategic vision into operational reality, ensuring that every decision moves the business forward.",
      image: "/founder2.jpg"
    },
    {
      id: 3,
      name: "Priya Malhotra",
      role: "Partner, Growth & Marketing",
      quote: "Customer acquisition is both an art and a science. Our approach combines creative thinking with rigorous data analysis to help businesses build sustainable growth engines that scale.",
      image: "/founder3.jpg"
    },
    {
      id: 4,
      name: "Amit Verma",
      role: "Partner, Operations",
      quote: "Operational excellence isn't about perfection, it's about continuous improvement. We help businesses build systems that adapt, scale, and deliver consistent value to customers.",
      image: "/founder4.jpg"
    }
  ];

  // Auto-rotate founders every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % founders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [founders.length]);

  return (
    <section className="bg-[#0A1E3D] py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Quote Card with Slide-in Animation */}
          <div 
            key={`card-${activeFounder}`}
            className="animate-slideInLeft"
          >
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-2xl max-w-xl">
              <div className="space-y-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {founders[activeFounder].quote}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-900 font-semibold text-lg">
                    {founders[activeFounder].name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {founders[activeFounder].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Founder Image with Dissolve Animation */}
          <div className="relative h-96 flex items-center justify-center lg:justify-end">
            <div 
              key={`image-${activeFounder}`}
              className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl animate-dissolve"
            >
              {/* Placeholder for founder image - Replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <p className="font-semibold text-lg">{founders[activeFounder].name}</p>
                </div>
              </div>
              {/* Uncomment below and use Next.js Image when you have actual images */}
              {/* <Image 
                src={founders[activeFounder].image} 
                alt={founders[activeFounder].name}
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-8 flex space-x-2">
              {founders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFounder(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFounder 
                      ? 'bg-blue-400 w-8' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`View founder ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// FREE RESOURCES SECTION
// Light background with resource cards
// =====================================================
const FreeResourcesSection = () => {
  const resources = [
    {
      title: "Valuation Calculator",
      description: "Calculate your company's valuation",
      bg: "bg-[#8B9EB0]"
    },
    {
      title: "Psychometric Test",
      description: "Assess your team's dynamics",
      bg: "bg-[#7B8FA5]"
    }
  ];

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Free Resources
          </h2>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className={`${resource.bg} rounded-lg p-12 h-64 flex items-end hover:shadow-xl transition-shadow duration-300 cursor-pointer group`}
            >
              <div className="text-white">
                <h3 className="text-2xl font-medium mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {resource.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Resources Button */}
        <div className="flex justify-end">
          <button className="bg-white text-gray-700 px-8 py-3 rounded hover:shadow-lg transition-shadow duration-300 font-medium border border-gray-200">
            More Resources
          </button>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// STORY & PROCESS SECTION
// Dark blue background with timeline/process illustration
// =====================================================
const StoryProcessSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            Our Story & Process
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-4xl">
            Founded by experienced entrepreneurs who have built, scaled, and sold businesses across 
            multiple industries, Sareen & Company brings real-world expertise to strategic consulting. 
            We understand the challenges founders face because we've lived them. Our proven process 
            combines deep diagnostics, strategic planning, and hands-on implementation support to help 
            businesses achieve breakthrough results. We don't just provide advice—we partner with you 
            to execute and deliver measurable outcomes.
          </p>
        </div>

        {/* Process Timeline Illustration */}
        <div className="relative mt-16">
          {/* Replace with your own SVG */}
          <div className="bg-[#132B47] rounded-lg p-8 overflow-x-auto">
            <svg viewBox="0 0 1000 300" className="w-full h-64">
              {/* Horizontal timeline base */}
              <line x1="50" y1="150" x2="950" y2="150" stroke="#4A90E2" strokeWidth="2" />
              
              {/* Process circles - representing stages */}
              {[150, 300, 500, 700, 850].map((x, i) => (
                <g key={i}>
                  {/* Vertical line */}
                  <line x1={x} y1="130" x2={x} y2="170" stroke="#4A90E2" strokeWidth="1" />
                  
                  {/* Circle */}
                  <circle 
                    cx={x} 
                    cy={150} 
                    r={30 + (i === 2 ? 20 : 0)} 
                    fill={`rgba(74, 144, 226, ${0.2 + i * 0.15})`} 
                    stroke="#4A90E2" 
                    strokeWidth="2" 
                  />
                  <circle 
                    cx={x} 
                    cy={150} 
                    r={15 + (i === 2 ? 10 : 0)} 
                    fill={`rgba(74, 144, 226, ${0.4 + i * 0.1})`} 
                  />
                  
                  {/* Labels above */}
                  <text 
                    x={x} 
                    y={100} 
                    textAnchor="middle" 
                    fill="#A0AEC0" 
                    fontSize="12"
                  >
                    Stage {i + 1}
                  </text>
                </g>
              ))}
              
              {/* Decorative elements */}
              <circle cx="100" cy="80" r="3" fill="#4A90E2" opacity="0.6" />
              <circle cx="900" cy="220" r="3" fill="#4A90E2" opacity="0.6" />
              <circle cx="450" cy="60" r="2" fill="#4A90E2" opacity="0.4" />
              <circle cx="750" cy="240" r="2" fill="#4A90E2" opacity="0.4" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// MAIN HOMEPAGE COMPONENT - EXPORTS ALL SECTIONS
// =====================================================
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ReportSection />
      <CompanyHelpsSection />
      <FoundersSection />
      <FreeResourcesSection />
      <StoryProcessSection />
    </main>
  );
}