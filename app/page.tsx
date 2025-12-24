"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [typingText, setTypingText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const painPoints = [
    "Struggling with Customer Acquisition Cost",
    "Unable to reach your ARR targets",
    "Finding it hard to achieve Product-Market Fit",
    "Confused about your Go-To-Market strategy",
    "Facing challenges in fundraising readiness",
    "Needing clarity on unit economics"
  ];

  // Typing effect
  useEffect(() => {
    const currentPhrase = painPoints[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typingText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % painPoints.length);
      } else {
        setTypingText(
          isDeleting
            ? currentPhrase.substring(0, typingText.length - 1)
            : currentPhrase.substring(0, typingText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, currentPhraseIndex]);

  return (
    <div className="bg-[#002855] min-h-screen">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left: Search Bar and Text */}
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search ..." 
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Typing Text */}
            <div className="space-y-2 min-h-[80px]">
              <h1 className="text-2xl md:text-3xl text-white font-medium">
                {typingText}
                <span className="animate-pulse">|</span>
              </h1>
            </div>
          </div>

          {/* Right: Gear Flow Diagram */}
          <div className="flex justify-center items-center">
            <svg viewBox="0 0 450 280" className="w-full max-w-md">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Flowing Path */}
              <path 
                d="M 50 140 Q 120 80, 180 140 T 340 140 L 380 120" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />

              {/* Small Gear 1 */}
              <g transform="translate(80, 140)">
                <circle cx="0" cy="0" r="30" fill="none" stroke="#60A5FA" strokeWidth="2.5" filter="url(#glow)" />
                <circle cx="0" cy="0" r="12" fill="#60A5FA" opacity="0.3" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <line 
                    key={i}
                    x1="0" 
                    y1="0" 
                    x2={Math.cos(angle * Math.PI / 180) * 25} 
                    y2={Math.sin(angle * Math.PI / 180) * 25}
                    stroke="#60A5FA" 
                    strokeWidth="2"
                  />
                ))}
              </g>

              {/* Medium Gear 2 */}
              <g transform="translate(200, 140)">
                <circle cx="0" cy="0" r="45" fill="none" stroke="#3B82F6" strokeWidth="3" filter="url(#glow)" />
                <circle cx="0" cy="0" r="18" fill="#3B82F6" opacity="0.3" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line 
                    key={i}
                    x1="0" 
                    y1="0" 
                    x2={Math.cos(angle * Math.PI / 180) * 38} 
                    y2={Math.sin(angle * Math.PI / 180) * 38}
                    stroke="#3B82F6" 
                    strokeWidth="2.5"
                  />
                ))}
              </g>

              {/* Large Gear 3 */}
              <g transform="translate(340, 140)">
                <circle cx="0" cy="0" r="55" fill="none" stroke="#1D4ED8" strokeWidth="3.5" filter="url(#glow)" />
                <circle cx="0" cy="0" r="22" fill="#1D4ED8" opacity="0.3" />
                {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
                  <line 
                    key={i}
                    x1="0" 
                    y1="0" 
                    x2={Math.cos(angle * Math.PI / 180) * 48} 
                    y2={Math.sin(angle * Math.PI / 180) * 48}
                    stroke="#1D4ED8" 
                    strokeWidth="3"
                  />
                ))}
              </g>

              {/* Arrow */}
              <defs>
                <marker id="arrowhead-white" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="rgba(255,255,255,0.6)" />
                </marker>
              </defs>
              <path 
                d="M 395 120 L 420 100" 
                stroke="rgba(255,255,255,0.6)" 
                strokeWidth="2.5" 
                markerEnd="url(#arrowhead-white)"
              />

              {/* Sparkle */}
              <g transform="translate(410, 70)">
                <path d="M 0,-8 L 0,8 M -8,0 L 8,0" stroke="#60A5FA" strokeWidth="2" opacity="0.8" />
                <circle cx="0" cy="0" r="3" fill="#60A5FA" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* REPORT SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left: Text */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Report on Indian Landscape
                </h2>
                <div className="space-y-2 text-white/70 text-sm md:text-base">
                  <p>Are You a Founder ? Are You a Founder ?Are You a Founder ?Are You</p>
                  <p>a Founder ? Are You a Founder ?Are You a Founder ? Are You a</p>
                  <p>Founder ?</p>
                </div>
              </div>

              {/* Right: Report Card */}
              <div className="bg-white/10 p-8 md:p-12 flex flex-col justify-center items-center">
                <div className="w-full max-w-xs">
                  {/* Report Thumbnail */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-6 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <div className="w-16 h-16 border-4 border-white rounded-full mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">2025 Report</h3>
                      <p className="text-sm opacity-90">Indian Startup Landscape</p>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button className="w-full py-3 bg-white text-[#002855] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SARSEN & COMPANY HELPS SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sarsen & Company Helps
            </h2>
            <div className="space-y-2 text-white/70 text-sm md:text-base">
              <p>Are You a Founder ? Are You a Founder ?Are You a Founder ?Are You</p>
              <p>a Founder ? Are You a Founder ?Are You a Founder ? Are You a</p>
              <p>Founder ?</p>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-start gap-3 text-white">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base md:text-lg">Sarsen & Company Helps</p>
            </div>
            <div className="flex items-start gap-3 text-white">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base md:text-lg">Sarsen & Company Helps Sarsen & Company Helps</p>
            </div>
            <div className="flex items-start gap-3 text-white">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-base md:text-lg">Sarsen & Company Helps</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Quote Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="space-y-4 text-gray-700 text-sm md:text-base mb-6">
                <p>Are You a Founder ? Are You a Founder ?Are You a Founder ?Are You</p>
                <p>a Founder ? Are You a Founder ?Are You a Founder ? Are You a</p>
                <p>Founder ? Are You a Founder ?Are You a Founder ? Are You a Founder ?</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <p className="text-gray-900 font-semibold">- Kunal Shah (Cred)</p>
              </div>
            </div>

            {/* Right: Founder Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden shadow-2xl">
                {/* Placeholder for founder image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">Founder Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE RESOURCES SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center md:text-left">
            Free Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Resource 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-10 hover:bg-white/15 transition-all cursor-pointer group min-h-[200px] flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                Valuation Calculator
              </h3>
            </div>

            {/* Resource 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-10 hover:bg-white/15 transition-all cursor-pointer group min-h-[200px] flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                Psychometric Test
              </h3>
            </div>
          </div>

          <div className="text-center md:text-right">
            <button className="px-8 py-3 bg-white text-[#002855] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2">
              More Resources
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* END OF PART 1 */}

      {/* OUR STORY & PROCESS SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Story & Process
          </h2>
          
          <div className="space-y-3 text-white/70 text-sm md:text-base mb-12 max-w-4xl">
            <p>Are You a Founder ? Are You a Founder ?Are You a Founder ?Are You a Founder ? Are You a</p>
            <p>Founder ?Are You a Founder ? Are You a Founder ? Are You a Founder ?Are You a Founder ?</p>
            <p>Are You a Founder ?Are You a Founder ? Are You a Founder ?Are You a Founder ? Are You a</p>
            <p>Founder ?</p>
          </div>

          {/* Process Diagram */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-16">
            <svg viewBox="0 0 1200 400" className="w-full h-auto">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 0.3}} />
                  <stop offset="50%" style={{stopColor: '#34D399', stopOpacity: 0.5}} />
                  <stop offset="100%" style={{stopColor: '#60A5FA', stopOpacity: 0.3}} />
                </linearGradient>
                
                <filter id="glow2">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Horizontal Timeline */}
              <line x1="100" y1="200" x2="1100" y2="200" stroke="url(#grad1)" strokeWidth="3" />

              {/* Phase 1: Small Circle */}
              <g transform="translate(200, 200)">
                <circle cx="0" cy="0" r="60" fill="#1E40AF" opacity="0.2" filter="url(#glow2)" />
                <circle cx="0" cy="0" r="45" fill="none" stroke="#60A5FA" strokeWidth="3" />
                <text x="0" y="-70" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Diagnosis</text>
                <text x="0" y="5" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">01</text>
                
                {/* Branches */}
                <line x1="0" y1="-45" x2="0" y2="-90" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="32" y1="-32" x2="60" y2="-60" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="32" y1="32" x2="60" y2="60" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="0" y1="45" x2="0" y2="90" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="-32" y1="32" x2="-60" y2="60" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="-32" y1="-32" x2="-60" y2="-60" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
              </g>

              {/* Phase 2: Medium Circle */}
              <g transform="translate(500, 200)">
                <circle cx="0" cy="0" r="80" fill="#065F46" opacity="0.2" filter="url(#glow2)" />
                <circle cx="0" cy="0" r="60" fill="none" stroke="#34D399" strokeWidth="3" />
                <text x="0" y="-85" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Strategy</text>
                <text x="0" y="5" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">02</text>
                
                {/* Branches */}
                <line x1="0" y1="-60" x2="0" y2="-110" stroke="#34D399" strokeWidth="2" opacity="0.5" />
                <line x1="42" y1="-42" x2="75" y2="-75" stroke="#34D399" strokeWidth="2" opacity="0.5" />
                <line x1="60" y1="0" x2="105" y2="0" stroke="#34D399" strokeWidth="2" opacity="0.5" />
                <line x1="42" y1="42" x2="75" y2="75" stroke="#34D399" strokeWidth="2" opacity="0.5" />
                <line x1="0" y1="60" x2="0" y2="110" stroke="#34D399" strokeWidth="2" opacity="0.5" />
                <line x1="-42" y1="42" x2="-75" y2="75" stroke="#34D399" strokeWidth="2" opacity="0.5" />
                <line x1="-60" y1="0" x2="-105" y2="0" stroke="#34D399" strokeWidth="2" opacity="0.5" />
                <line x1="-42" y1="-42" x2="-75" y2="-75" stroke="#34D399" strokeWidth="2" opacity="0.5" />
              </g>

              {/* Phase 3: Large Circle */}
              <g transform="translate(850, 200)">
                <circle cx="0" cy="0" r="100" fill="#1E3A8A" opacity="0.2" filter="url(#glow2)" />
                <circle cx="0" cy="0" r="80" fill="none" stroke="#60A5FA" strokeWidth="4" />
                <text x="0" y="-105" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Execution</text>
                <text x="0" y="5" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">03</text>
                
                {/* Branches */}
                <line x1="0" y1="-80" x2="0" y2="-135" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="56" y1="-56" x2="95" y2="-95" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="80" y1="0" x2="130" y2="0" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="56" y1="56" x2="95" y2="95" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="0" y1="80" x2="0" y2="135" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="-56" y1="56" x2="-95" y2="95" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="-80" y1="0" x2="-130" y2="0" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
                <line x1="-56" y1="-56" x2="-95" y2="-95" stroke="#60A5FA" strokeWidth="2" opacity="0.5" />
              </g>

              {/* Labels */}
              <text x="600" y="380" textAnchor="middle" fill="white" fontSize="12" opacity="0.7">PROCESS</text>
              
              {/* Sparkles */}
              <g transform="translate(1050, 100)">
                <path d="M 0,-6 L 0,6 M -6,0 L 6,0" stroke="#60A5FA" strokeWidth="2" opacity="0.8" />
                <circle cx="0" cy="0" r="2" fill="#60A5FA" opacity="0.8" />
              </g>
              
              <g transform="translate(150, 320)">
                <path d="M 0,-5 L 0,5 M -5,0 L 5,0" stroke="#34D399" strokeWidth="1.5" opacity="0.6" />
                <circle cx="0" cy="0" r="1.5" fill="#34D399" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 md:p-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Startup?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation and discover how we can help you achieve predictable, sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-[#002855] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-xl">
                Book Free Consultation
              </button>
              <button className="px-10 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}