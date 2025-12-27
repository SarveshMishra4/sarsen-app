// app/about/page.tsx
'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// Dark blue background with company tagline
// =====================================================
const AboutHeroSection = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[450px] pt-24 pb-20 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 leading-tight">
            About Sareen & Company
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Strategic consulting built on real entrepreneurial experience. 
            We help businesses from pre-revenue to ₹10Cr scale with clarity, speed, and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// OUR STORY SECTION
// Light background with founder story and company journey
// =====================================================
const OurStorySection = () => {
  return (
    <section className="bg-[#E8EEF2] py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Story Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-8">
              Our Story
            </h2>
            <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Sareen & Company was founded by entrepreneurs who have been in your shoes. We've bootstrapped 
                businesses from zero, scaled operations to multiple crores in revenue, and navigated the chaos 
                of rapid growth without external funding. We understand the sleepless nights, the cash flow anxiety, 
                and the pressure of making decisions with limited resources.
              </p>
              <p>
                That experience taught us something critical: most businesses don't fail because of bad ideas. 
                They fail because of poor execution, unclear strategy, and preventable operational mistakes. 
                The difference between struggling and thriving often comes down to having the right guidance at 
                the right moment.
              </p>
              <p>
                We built Sareen & Company to bridge that gap. Our approach combines the strategic rigor of 
                top-tier consulting with the practical, boots-on-the-ground mindset of operators who have 
                actually built businesses. We don't give theoretical advice. We deliver frameworks, models, 
                and plans that you can implement immediately.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Today, we serve clients across industries—from tech startups to traditional businesses—helping 
                them solve their most critical growth, financial, and operational challenges. Every engagement 
                is designed to deliver measurable impact, fast.
              </p>
            </div>
          </div>

          {/* Right Column - Abstract Illustration */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-lg">
              {/* Outer decorative ring */}
              <circle cx="200" cy="200" r="180" stroke="#4A90E2" strokeWidth="1" fill="none" strokeDasharray="10,8" opacity="0.2" />
              
              {/* Main growth spiral */}
              <path 
                d="M 200 200 Q 180 150, 200 100 T 250 80 T 300 120 T 310 200 T 270 280 T 200 300 T 130 270 T 100 200 T 140 130"
                stroke="#1E5A8E" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round"
              />
              
              {/* Connection nodes */}
              <circle cx="200" cy="100" r="8" fill="#1E5A8E" />
              <circle cx="250" cy="80" r="6" fill="#4A90E2" />
              <circle cx="300" cy="120" r="7" fill="#1E5A8E" />
              <circle cx="310" cy="200" r="9" fill="#4A90E2" />
              <circle cx="270" cy="280" r="6" fill="#1E5A8E" />
              <circle cx="200" cy="300" r="8" fill="#4A90E2" />
              <circle cx="130" cy="270" r="7" fill="#1E5A8E" />
              <circle cx="100" cy="200" r="6" fill="#4A90E2" />
              
              {/* Center core */}
              <circle cx="200" cy="200" r="120" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.3" />
              <circle cx="200" cy="200" r="90" fill="#1E5A8E" opacity="0.05" />
              <circle cx="200" cy="200" r="60" fill="#1E5A8E" opacity="0.1" />
              <circle cx="200" cy="200" r="30" fill="#4A90E2" opacity="0.2" />
              
              {/* Radiating lines */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 200 + 35 * Math.cos(rad);
                const y1 = 200 + 35 * Math.sin(rad);
                const x2 = 200 + 85 * Math.cos(rad);
                const y2 = 200 + 85 * Math.sin(rad);
                return (
                  <line 
                    key={i}
                    x1={x1} 
                    y1={y1} 
                    x2={x2} 
                    y2={y2} 
                    stroke="#4A90E2" 
                    strokeWidth="1.5" 
                    opacity="0.4"
                  />
                );
              })}
              
              {/* Orbital dots */}
              {[30, 90, 150, 210, 270, 330].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 200 + 160 * Math.cos(rad);
                const y = 200 + 160 * Math.sin(rad);
                return (
                  <circle 
                    key={`orbit-${i}`}
                    cx={x} 
                    cy={y} 
                    r="3" 
                    fill="#4A90E2"
                    opacity="0.6"
                  />
                );
              })}
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// WHY WE'RE DIFFERENT SECTION
// White background highlighting unique approach
// =====================================================
const WhyDifferentSection = () => {
  const differentiators = [
    {
      title: "Operator Experience",
      description: "We're not career consultants. We've built, scaled, and exited businesses. Every recommendation comes from real-world experience, not textbook theory.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Speed & Efficiency",
      description: "Most projects complete in 2 weeks. We don't drag engagements out. You get clear answers and actionable plans quickly so you can move forward with confidence.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Tangible Deliverables",
      description: "Every engagement produces concrete outputs: financial models, strategic roadmaps, process documents, frameworks. No vague advice—just tools you can implement immediately.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "No Dependency Created",
      description: "We design solutions your team can execute without us. The goal isn't to keep you as a client forever—it's to solve your problem and empower you to move forward independently.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Resource-Constrained Mindset",
      description: "Our expertise was sharpened in early-stage startups where every rupee matters. We bring that same discipline to all clients, ensuring maximum impact from available resources.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Industry Agnostic",
      description: "We work across sectors—tech, manufacturing, services, retail. Strategic and operational principles transcend industries. What matters is solving your specific business challenge.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6">
            Why We're Different
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We're not traditional consultants. We're entrepreneurs who happen to consult. 
            That distinction shapes everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                
                <div className="text-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl text-gray-800 font-medium mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// HOW WE WORK SECTION
// Dark blue background with process visualization
// =====================================================
const HowWeWorkSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            How We Work
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
            Our process is designed for speed and impact. Most engagements follow this 5-stage framework, 
            typically completing in 2-3 weeks. We adapt based on complexity, but the core approach remains consistent.
          </p>
        </div>

        <div className="bg-[#132B47] rounded-2xl p-8 md:p-12 overflow-x-auto border border-blue-900/30 mb-12">
          <svg 
            viewBox="0 0 1200 400" 
            className="w-full h-auto min-w-[800px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <line x1="100" y1="200" x2="1100" y2="200" stroke="#4A90E2" strokeWidth="3" strokeLinecap="round" />

            <g>
              <line x1="150" y1="180" x2="150" y2="220" stroke="#4A90E2" strokeWidth="2" />
              <circle cx="150" cy="200" r="40" fill="rgba(74, 144, 226, 0.2)" stroke="#4A90E2" strokeWidth="3" />
              <circle cx="150" cy="200" r="25" fill="rgba(74, 144, 226, 0.4)" />
              <text x="150" y="210" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">1</text>
              <text x="150" y="130" textAnchor="middle" fill="#A0AEC0" fontSize="16" fontWeight="500">DISCOVERY</text>
              <text x="150" y="280" textAnchor="middle" fill="#CBD5E0" fontSize="13">Deep dive into</text>
              <text x="150" y="300" textAnchor="middle" fill="#CBD5E0" fontSize="13">your business</text>
            </g>

            <g>
              <line x1="325" y1="180" x2="325" y2="220" stroke="#4A90E2" strokeWidth="2" />
              <circle cx="325" cy="200" r="45" fill="rgba(74, 144, 226, 0.25)" stroke="#4A90E2" strokeWidth="3" />
              <circle cx="325" cy="200" r="28" fill="rgba(74, 144, 226, 0.45)" />
              <text x="325" y="210" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">2</text>
              <text x="325" y="130" textAnchor="middle" fill="#A0AEC0" fontSize="16" fontWeight="500">DIAGNOSIS</text>
              <text x="325" y="280" textAnchor="middle" fill="#CBD5E0" fontSize="13">Identify root</text>
              <text x="325" y="300" textAnchor="middle" fill="#CBD5E0" fontSize="13">problems & gaps</text>
            </g>

            <g>
              <line x1="550" y1="170" x2="550" y2="230" stroke="#4A90E2" strokeWidth="2" />
              <circle cx="550" cy="200" r="55" fill="rgba(74, 144, 226, 0.3)" stroke="#4A90E2" strokeWidth="4" />
              <circle cx="550" cy="200" r="35" fill="rgba(74, 144, 226, 0.5)" />
              <text x="550" y="212" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold">3</text>
              <text x="550" y="120" textAnchor="middle" fill="#4A90E2" fontSize="18" fontWeight="600">STRATEGY</text>
              <text x="550" y="290" textAnchor="middle" fill="#CBD5E0" fontSize="13">Build execution-</text>
              <text x="550" y="310" textAnchor="middle" fill="#CBD5E0" fontSize="13">ready roadmap</text>
            </g>

            <g>
              <line x1="775" y1="180" x2="775" y2="220" stroke="#4A90E2" strokeWidth="2" />
              <circle cx="775" cy="200" r="45" fill="rgba(74, 144, 226, 0.25)" stroke="#4A90E2" strokeWidth="3" />
              <circle cx="775" cy="200" r="28" fill="rgba(74, 144, 226, 0.45)" />
              <text x="775" y="210" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">4</text>
              <text x="775" y="130" textAnchor="middle" fill="#A0AEC0" fontSize="16" fontWeight="500">DELIVERY</text>
              <text x="775" y="280" textAnchor="middle" fill="#CBD5E0" fontSize="13">Hand over all</text>
              <text x="775" y="300" textAnchor="middle" fill="#CBD5E0" fontSize="13">documents & tools</text>
            </g>

            <g>
              <line x1="1000" y1="180" x2="1000" y2="220" stroke="#4A90E2" strokeWidth="2" />
              <circle cx="1000" cy="200" r="40" fill="rgba(74, 144, 226, 0.2)" stroke="#4A90E2" strokeWidth="3" />
              <circle cx="1000" cy="200" r="25" fill="rgba(74, 144, 226, 0.4)" />
              <text x="1000" y="210" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">5</text>
              <text x="1000" y="130" textAnchor="middle" fill="#A0AEC0" fontSize="16" fontWeight="500">SUPPORT</text>
              <text x="1000" y="280" textAnchor="middle" fill="#CBD5E0" fontSize="13">Follow-up for</text>
              <text x="1000" y="300" textAnchor="middle" fill="#CBD5E0" fontSize="13">implementation</text>
            </g>

            <path d="M 1090 200 L 1110 190 L 1110 210 Z" fill="#4A90E2" />
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <div className="text-center">
            <div className="text-blue-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-white text-lg md:text-xl font-medium mb-3">Fast Turnaround</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Most projects complete in 2 weeks. You get answers fast, not in 3-month engagements that drag on indefinitely.
            </p>
          </div>

          <div className="text-center">
            <div className="text-blue-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-white text-lg md:text-xl font-medium mb-3">Tangible Outputs</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Excel models, frameworks, strategic plans—things you can use immediately, not vague recommendations.
            </p>
          </div>

          <div className="text-center">
            <div className="text-blue-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h4 className="text-white text-lg md:text-xl font-medium mb-3">Execution-Ready</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Your team can implement immediately. No consulting dependency created. You own the solution.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// MAIN ABOUT PAGE COMPONENT - EXPORTS ALL SECTIONS
// =====================================================
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <OurStorySection />
      {/* <OurProcessSection />
      <MissionVisionSection />
      <OurValuesSection />
      <OurTeamSection /> */}
    </main>
  );
}