// app/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

// =====================================================
// TYPING EFFECT HOOK
// Creates typewriter animation for rotating text phrases
// =====================================================
const useTypingEffect = (phrases: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

// =====================================================
// HERO SECTION COMPONENT
// =====================================================
const HeroSection = () => {
  const problemPhrases = [
    "Struggling with customer acquisition costs?",
    "Unable to find the right clients?",
    "Cash flow issues keeping you up at night?",
    "Losing deals to competitors on price?",
    "Marketing spend with no clear ROI?",
    "Team growing but revenue stagnant?",
    "Need funding but don't know where to start?"
  ];

  const typedProblem = useTypingEffect(problemPhrases, 80, 40, 2500);

  return (
    <section className="relative bg-[#0A1E3D] min-h-[600px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 lg:space-y-10">
            <div className="max-w-full lg:max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, reports, tools..."
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 rounded-lg bg-[#1a3352] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg transition-all duration-300 border border-transparent hover:border-blue-500"
                  aria-label="Search for services, reports, or tools"
                />
                <svg
                  className="absolute right-4 sm:right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl text-white font-light tracking-wide">
                Are you an entrepreneur?
              </h2>
              
              <div className="min-h-[80px] sm:min-h-[100px]">
                <p className="text-2xl sm:text-3xl md:text-4xl text-blue-300 font-light leading-tight">
                  {typedProblem}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 lg:h-[450px] flex items-center justify-center lg:justify-end">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full max-w-lg h-full bg-gradient-to-br from-blue-900/20 to-transparent rounded-lg flex items-center justify-center border border-blue-800/30">
                <div className="text-center text-blue-400/50 p-8">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.3l8-4.5 8 4.5V12c0 4.41-3.59 8-8 8z"/>
                  </svg>
                  <p className="text-sm">SVG Illustration<br/>Placeholder</p>
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
// REPORT SECTION COMPONENT
// =====================================================
const ReportSection = () => {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
              Indian Startup Ecosystem Report 2024
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Comprehensive analysis of India's startup landscape covering funding trends, 
                sector-wise growth patterns, emerging opportunities across tier-1 and tier-2 
                cities, and strategic insights for founders and investors.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Based on data from 5,000+ startups, 200+ investor interviews, and ground-level 
                research across 15 major startup hubs. Essential reading for anyone navigating 
                the Indian entrepreneurial ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
                </svg>
                <span>142 pages</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span>Last updated: Dec 2024</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full transform transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] h-72 sm:h-80 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">Indian Startup</h3>
                  <h3 className="text-2xl font-bold mb-4">Ecosystem Report</h3>
                  <div className="text-sm opacity-90">2024 Edition</div>
                </div>

                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <button className="w-full bg-[#0A1E3D] hover:bg-[#132B47] text-white py-3.5 px-6 rounded-lg transition-all duration-300 font-medium text-base flex items-center justify-center gap-2 group">
                  <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Report
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
// COMPANY HELPS SECTION - REDESIGNED WITH CARDS
// Cards with dissolve animation on scroll
// No numbering, outcomes integrated into description
// Space for SVG diagram at top
// =====================================================
const CompanyHelpsSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const expertiseAreas = [
    {
      title: "Growth & Revenue Strategy",
      description: "Go-to-market planning, sales system development, pricing optimization, customer acquisition frameworks, and revenue diversification strategies for businesses from pre-revenue to ₹10Cr. We help reduce customer acquisition costs, systematize sales processes, and diversify revenue streams effectively.",
    },
    {
      title: "Financial Planning & Capital",
      description: "Cash flow management systems, fundraising readiness, financial modeling, profit improvement planning, and business valuation for funding, scaling, or exit scenarios. Our work prepares businesses for fundraising, optimizes cash flow, and improves margins sustainably.",
    },
    {
      title: "Operations & Efficiency",
      description: "Business process optimization, cost reduction audits, supply chain management, team structure design, and performance management systems that drive operational excellence. Expect process efficiency gains, significant cost reduction, and enhanced team productivity.",
    },
    {
      title: "Strategic Planning & Positioning",
      description: "Annual strategic planning, competitive intelligence, market positioning, digital transformation roadmaps, and turnaround strategies for businesses facing critical inflection points. We deliver strategic clarity, competitive differentiation, and strong market positioning.",
    },
    {
      title: "Product & Innovation",
      description: "Product-market fit validation, new product launch planning, innovation frameworks, and customer feedback systems to ensure you're building what the market actually wants. Our approach validates products, ensures launch success, and builds innovation capability within teams.",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
        const cardIndex = Math.min(
          Math.floor(scrollProgress * expertiseAreas.length),
          expertiseAreas.length - 1
        );
        setActiveCard(cardIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expertiseAreas.length]);

  return (
    <section ref={sectionRef} className="bg-[#0A1E3D] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            What Sareen & Company Specializes In
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We serve businesses from self-funded startups to ₹10Cr revenue companies. Our expertise 
            has been sharpened in the most resource-constrained environments—early-stage startups—where 
            every decision matters and every rupee counts.
          </p>
        </div>

        <div className="mb-16 bg-[#132B47] rounded-2xl p-8 border border-blue-900/30">
          <div className="text-center text-blue-400/50 py-12">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            <p className="text-sm">SVG Diagram Placeholder<br/>Add your custom diagram here</p>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeCard ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-2xl p-8 sm:p-10 lg:p-12 border border-blue-800/30 hover:border-blue-700/50 transition-all duration-300">
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 leading-tight">
                  {area.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {expertiseAreas.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeCard 
                  ? 'bg-blue-500 w-12 h-3' 
                  : 'bg-blue-800/50 w-3 h-3 hover:bg-blue-700/50'
              }`}
              aria-label={`View service ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 sm:mt-20 pt-12 border-t border-blue-900/30">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-gray-300 text-base sm:text-lg mb-2">
                Every engagement delivers tangible outputs—financial models, strategic roadmaps, 
                process documents, and frameworks you can implement immediately.
              </p>
              <p className="text-gray-500 text-sm">
                No vague advice. No consulting dependency. Just clear plans your team can execute.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl flex items-center gap-3 group">
                <span>View All Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// =====================================================
// TESTIMONIALS SECTION - REDESIGNED
// Reduced height, no shadow on image
// Image positioned at bottom edge with no padding
// =====================================================
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const entrepreneurs = [
    {
      id: 1,
      name: "Naval Ravikant",
      title: "Founder, AngelList",
      quote: "Play long-term games with long-term people. Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now. Building anything great requires careful strategic thinking combined with relentless execution.",
      image: "/placeholder1.jpg"
    },
    {
      id: 2,
      name: "Paul Graham",
      title: "Co-founder, Y Combinator",
      quote: "The way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself. The best ideas seem obvious in retrospect, but finding them requires deep strategic insight into market needs.",
      image: "/placeholder2.jpg"
    },
    {
      id: 3,
      name: "Peter Thiel",
      title: "Co-founder, PayPal & Palantir",
      quote: "Competition is for losers. If you want to create lasting value, build a monopoly. But building something truly valuable requires intense focus on a specific problem and strategic positioning that others haven't thought of.",
      image: "/placeholder3.jpg"
    },
    {
      id: 4,
      name: "Reid Hoffman",
      title: "Co-founder, LinkedIn",
      quote: "An entrepreneur is someone who jumps off a cliff and builds a plane on the way down. But the smartest entrepreneurs don't just build—they strategize, they plan, they seek counsel from those who've jumped before.",
      image: "/placeholder4.jpg"
    },
    {
      id: 5,
      name: "Marc Andreessen",
      title: "Co-founder, Andreessen Horowitz",
      quote: "Software is eating the world, but strategy guides where it bites. The difference between success and failure often comes down to making the right strategic decisions at the right time with the right guidance.",
      image: "/placeholder5.jpg"
    },
    {
      id: 6,
      name: "Brian Chesky",
      title: "Co-founder, Airbnb",
      quote: "Build something 100 people love, not something 1 million people kind of like. This requires deep customer understanding and strategic focus—something that benefits immensely from experienced guidance and external perspective.",
      image: "/placeholder6.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % entrepreneurs.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [entrepreneurs.length]);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-6">
            Accomplished Entrepreneurs Understand What You Don't
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Those who have built billion-dollar businesses emphasize the critical importance of 
            strategic thinking, external guidance, and making informed decisions at every stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          
          <div className="order-2 lg:order-1">
            <div 
              key={`card-${activeIndex}`}
              className="animate-slideInLeft"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200">
                
                <div className="text-blue-500 mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>

                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                  "{entrepreneurs[activeIndex].quote}"
                </blockquote>

                <div className="pt-4 border-t border-gray-300">
                  <p className="text-gray-900 font-semibold text-lg mb-1">
                    {entrepreneurs[activeIndex].name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {entrepreneurs[activeIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-56 sm:h-64 lg:h-72 flex items-end justify-center lg:justify-end">
            
            <div 
              key={`image-${activeIndex}`}
              className="relative w-full max-w-xs h-full rounded-t-2xl overflow-hidden animate-dissolve"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-end justify-center pb-0">
                
                <div className="text-center pb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  
                  <div className="text-white px-4">
                    <p className="font-semibold text-lg sm:text-xl mb-1">
                      {entrepreneurs[activeIndex].name}
                    </p>
                    <p className="text-sm text-gray-200">
                      {entrepreneurs[activeIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {entrepreneurs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex 
                      ? 'bg-blue-500 w-8 h-3' 
                      : 'bg-gray-400 w-3 h-3 hover:bg-gray-500'
                  }`}
                  aria-label={`View entrepreneur ${index + 1}`}
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
// FREE RESOURCES SECTION - REDESIGNED
// Horizontal scrollable strip with navigation buttons
// =====================================================
const FreeResourcesSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const resources = [
    {
      title: "Startup Valuation Calculator",
      description: "Calculate your company's valuation using multiple methodologies - DCF, comparable analysis, and revenue multiples.",
      visualType: "chart",
      bg: "bg-gradient-to-br from-[#7B8FA5] to-[#8B9EB0]"
    },
    {
      title: "Team Psychometric Assessment",
      description: "Evaluate team dynamics, leadership styles, and cultural fit. Identify strengths and gaps in your team.",
      visualType: "graph",
      bg: "bg-gradient-to-br from-[#6B7F95] to-[#7B8FA5]"
    },
    {
      title: "Cash Flow Forecasting Tool",
      description: "Project your 13-week cash runway with scenario planning. See when you'll need funding or reach profitability.",
      visualType: "bars",
      bg: "bg-gradient-to-br from-[#8B9EB0] to-[#9BAEC0]"
    },
    {
      title: "Market Sizing Framework",
      description: "Calculate TAM, SAM, and SOM for your business with templates to present to investors.",
      visualType: "star",
      bg: "bg-gradient-to-br from-[#7B8FA5] to-[#8B9EB0]"
    },
    {
      title: "Financial Model Template",
      description: "Pre-built Excel model with P&L, balance sheet, and cash flow projections for startups.",
      visualType: "chart",
      bg: "bg-gradient-to-br from-[#6B7F95] to-[#7B8FA5]"
    },
    {
      title: "Pitch Deck Framework",
      description: "Comprehensive slide-by-slide guide for creating investor-ready pitch decks that convert.",
      visualType: "star",
      bg: "bg-gradient-to-br from-[#8B9EB0] to-[#9BAEC0]"
    }
  ];

  const renderVisualIcon = (type: string) => {
    switch(type) {
      case 'chart':
        return (
          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'graph':
        return (
          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'bars':
        return (
          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current 
    ? scrollPosition < (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10)
    : true;

  return (
    <section className="bg-[#E8EEF2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
            Free Resources
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Practical tools and calculators to help you make data-driven decisions. 
            No signup required—start using them right away.
          </p>
        </div>

        <div className="relative">
          
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ${
              canScrollLeft 
                ? 'hover:bg-gray-100 cursor-pointer opacity-100' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ${
              canScrollRight 
                ? 'hover:bg-gray-100 cursor-pointer opacity-100' 
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => setScrollPosition((e.target as HTMLDivElement).scrollLeft)}
          >
            {resources.map((resource, index) => (
              <div 
                key={index}
                className={`${resource.bg} rounded-2xl p-8 min-w-[320px] sm:min-w-[340px] h-[260px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden flex-shrink-0`}
              >
                
                <div className="relative z-10">
                  <h3 className="text-white text-xl sm:text-2xl font-medium mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 text-white/20 group-hover:text-white/30 transition-colors duration-300">
                  {renderVisualIcon(resource.visualType)}
                </div>

                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium border border-gray-300 hover:border-gray-400 flex items-center gap-2 group">
            <span>More Resources</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// STORY & PROCESS SECTION
// =====================================================
const StoryProcessSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            Our Story & Process
          </h2>
          
          <div className="max-w-4xl">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Founded by entrepreneurs who have built, scaled, and exited businesses across multiple 
              industries, we bring real-world expertise to every engagement. We've lived the challenges 
              our clients face—from bootstrapping with zero capital to managing ₹10Cr operations.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              That experience taught us one thing: strategy without execution is worthless. Our process 
              is designed to deliver clarity, actionable plans, and measurable results—fast.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-8">
            How We Work
          </h3>
        </div>

        <div className="bg-[#132B47] rounded-2xl p-6 sm:p-8 lg:p-12 overflow-x-auto border border-blue-900/30">
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

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="text-center">
            <div className="text-blue-400 mb-3">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-white text-lg sm:text-xl font-medium mb-2">Fast Turnaround</h4>
            <p className="text-gray-400 text-sm">Most projects: 2 weeks. You get answers fast, not in 3-month engagements.</p>
          </div>

          <div className="text-center">
            <div className="text-blue-400 mb-3">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-white text-lg sm:text-xl font-medium mb-2">Tangible Outputs</h4>
            <p className="text-gray-400 text-sm">Excel models, frameworks, plans—things you can use immediately, not vague advice.</p>
          </div>

          <div className="text-center">
            <div className="text-blue-400 mb-3">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h4 className="text-white text-lg sm:text-xl font-medium mb-2">Execution-Ready</h4>
            <p className="text-gray-400 text-sm">Your team can implement immediately. No consulting dependency created.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SIMPLE DIVIDER SECTION
// =====================================================
const SimpleDivider = () => {
  return (
    <div className="w-full h-24 bg-gray-300 border-b-2 border-gray-400"></div>
  );
};

// =====================================================
// MAIN HOMEPAGE COMPONENT
// =====================================================
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ReportSection />
      <CompanyHelpsSection />
      <TestimonialsSection />
      <FreeResourcesSection />
      <StoryProcessSection />
      <SimpleDivider />
    </main>
  );
}