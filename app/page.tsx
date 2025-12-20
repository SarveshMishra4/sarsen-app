import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#001F3F]">
      
      {/* ========================================
          HERO SECTION - Deep Blue with Geometric Diagrams
          ======================================== */}
      <section className="relative bg-[#001F3F] geometric-pattern min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Decorative Geometric Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-white/10 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border border-white/5 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/5 rounded-lg rotate-45"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-white space-y-8 animate-fade-in">
              
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                  🎯 Quantitative Strategy for Indian Startups
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Strategy Powered by
                <span className="block text-[#D4AF37] mt-2">
                  Mathematics, Not Guesswork
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl text-gray-300 leading-relaxed">
                Productized consulting services for early-stage startups. Clear deliverables, 
                fixed timelines, measurable outcomes. From ₹3.5L.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-[#D4AF37] text-[#001F3F] font-bold rounded-lg hover:bg-[#FFD700] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Explore Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#001F3F] transition-all flex items-center justify-center gap-2"
                >
                  Book Consultation
                </Link>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37]">39K+</div>
                  <div className="text-sm text-gray-400">Target Startups</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37]">₹1.4B</div>
                  <div className="text-sm text-gray-400">Market Size</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D4AF37]">3-8</div>
                  <div className="text-sm text-gray-400">Week Projects</div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Geometric Diagram */}
            <div className="relative animate-slide-up animation-delay-200">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                
                {/* Center Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 backdrop-blur-md border-2 border-[#D4AF37] rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-white font-bold text-sm">Sarsen</div>
                    </div>
                  </div>
                </div>
                
                {/* Top Node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="w-40 h-28 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl flex items-center justify-center hover:border-[#D4AF37] transition-all">
                    <div className="text-center px-3">
                      <svg className="w-6 h-6 text-blue-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="text-white font-semibold text-xs">Quantitative Analysis</div>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 w-0.5 h-24 bg-gradient-to-b from-[#D4AF37]/50 to-transparent"></div>
                </div>
                
                {/* Right Node */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="w-40 h-28 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl flex items-center justify-center hover:border-[#D4AF37] transition-all">
                    <div className="text-center px-3">
                      <svg className="w-6 h-6 text-purple-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div className="text-white font-semibold text-xs">Rapid Execution</div>
                    </div>
                  </div>
                  <div className="absolute right-full top-1/2 w-24 h-0.5 bg-gradient-to-l from-[#D4AF37]/50 to-transparent"></div>
                </div>
                
                {/* Bottom Node */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="w-40 h-28 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl flex items-center justify-center hover:border-[#D4AF37] transition-all">
                    <div className="text-center px-3">
                      <svg className="w-6 h-6 text-emerald-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <div className="text-white font-semibold text-xs">Measurable ROI</div>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 w-0.5 h-24 bg-gradient-to-t from-[#D4AF37]/50 to-transparent"></div>
                </div>
                
                {/* Left Node */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="w-40 h-28 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl flex items-center justify-center hover:border-[#D4AF37] transition-all">
                    <div className="text-center px-3">
                      <svg className="w-6 h-6 text-amber-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <div className="text-white font-semibold text-xs">Founder-Focused</div>
                    </div>
                  </div>
                  <div className="absolute left-full top-1/2 w-24 h-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ========================================
          VALUE PROPOSITION - Deep Blue Background
          ======================================== */}
      <section className="py-24 bg-[#002855]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Sarsen is Different
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional consulting is broken. We fixed it with productized services, 
              quantitative frameworks, and transparent pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 - Quantitative First */}
            <div className="group relative p-8 bg-[#003366] rounded-2xl hover:bg-[#004080] transition-all duration-300 border-2 border-white/10 hover:border-[#D4AF37] animate-fade-in shadow-lg">
              <div className="absolute top-4 right-4 w-16 h-16 bg-[#D4AF37]/10 rounded-full -z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Quantitative-First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every recommendation backed by mathematical models, data analysis, and measurable metrics. 
                  No fluff, no generic frameworks.
                </p>
              </div>
            </div>
            
            {/* Card 2 - Productized Services */}
            <div className="group relative p-8 bg-[#003366] rounded-2xl hover:bg-[#004080] transition-all duration-300 border-2 border-white/10 hover:border-[#D4AF37] animate-fade-in animation-delay-100 shadow-lg">
              <div className="absolute top-4 right-4 w-16 h-16 bg-[#D4AF37]/10 rounded-full -z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Productized Services</h3>
                <p className="text-gray-300 leading-relaxed">
                  Fixed scope, fixed timeline, fixed price. You know exactly what you're getting 
                  and when. No scope creep, no surprises.
                </p>
              </div>
            </div>
            
            {/* Card 3 - Founder Focused */}
            <div className="group relative p-8 bg-[#003366] rounded-2xl hover:bg-[#004080] transition-all duration-300 border-2 border-white/10 hover:border-[#D4AF37] animate-fade-in animation-delay-200 shadow-lg">
              <div className="absolute top-4 right-4 w-16 h-16 bg-[#D4AF37]/10 rounded-full -z-0"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Founder-Focused</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built specifically for early-stage Indian startups. We understand your constraints, 
                  timeline pressures, and growth ambitions.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES PREVIEW - Deep Blue with Professional Cards
          ======================================== */}
      <section className="py-24 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#D4AF37] text-[#001F3F] rounded-full text-sm font-bold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Productized Strategy Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right service for your startup stage. Each service is a complete package 
              with clear deliverables and timelines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service Card 1 - Diagnostic */}
            <Link href="/services/diagnostic" className="group">
              <div className="h-full p-8 bg-[#002855] rounded-2xl border-2 border-white/10 hover:border-[#D4AF37] hover:bg-[#003366] transition-all duration-300 shadow-lg">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Diagnostic & Direction
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Identify gaps, quantify opportunities, and chart your path forward with comprehensive analysis.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹4.5L</span>
                  <span className="text-sm text-gray-400">3-4 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service Card 2 - PMF */}
            <Link href="/services/product-market-fit" className="group">
              <div className="h-full p-8 bg-[#002855] rounded-2xl border-2 border-white/10 hover:border-[#D4AF37] hover:bg-[#003366] transition-all duration-300 shadow-lg">
                <div className="text-5xl mb-4">🎪</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Product Market Fit
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Find your perfect customer, validate demand, and build what people actually want to buy.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹5L</span>
                  <span className="text-sm text-gray-400">6-8 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service Card 3 - GTM */}
            <Link href="/services/go-to-market" className="group">
              <div className="h-full p-8 bg-[#002855] rounded-2xl border-2 border-white/10 hover:border-[#D4AF37] hover:bg-[#003366] transition-all duration-300 shadow-lg">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Go To Market Strategy
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Enter markets with precision, optimize channels, and scale customer acquisition efficiently.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹4L</span>
                  <span className="text-sm text-gray-400">4-6 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service Card 4 - Fundraising */}
            <Link href="/services/fundraising" className="group">
              <div className="h-full p-8 bg-[#002855] rounded-2xl border-2 border-white/10 hover:border-[#D4AF37] hover:bg-[#003366] transition-all duration-300 shadow-lg">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Fundraising Readiness
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Prepare, position, and pitch to investors with data-backed conviction and compelling narratives.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹5.5L</span>
                  <span className="text-sm text-gray-400">5-6 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service Card 5 - Turnaround */}
            <Link href="/services/turnaround" className="group">
              <div className="h-full p-8 bg-[#002855] rounded-2xl border-2 border-white/10 hover:border-[#D4AF37] hover:bg-[#003366] transition-all duration-300 shadow-lg">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Turnaround & Postmortem
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Diagnose failures, identify viable pivots, and engineer data-driven successful comebacks.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹3.5L</span>
                  <span className="text-sm text-gray-400">4-5 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* View All Services Card */}
            <Link href="/services" className="group">
              <div className="h-full p-8 bg-[#D4AF37] rounded-2xl border-2 border-[#D4AF37] hover:bg-[#FFD700] transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg">
                <svg className="w-12 h-12 text-[#001F3F] mb-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-3">
                  View All Services
                </h3>
                <p className="text-[#002855]">
                  Explore detailed service pages with complete information
                </p>
              </div>
            </Link>
            
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA - Deepest Blue
          ======================================== */}
      <section className="relative bg-[#001F3F] geometric-pattern py-24 overflow-hidden border-t border-white/10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-lg rotate-45"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Strategy with Data?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Book a free 30-minute consultation to discuss your startup's challenges 
            and explore how Sarsen can help you achieve measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-10 py-5 bg-[#D4AF37] text-[#001F3F] font-bold rounded-lg hover:bg-[#FFD700] transition-all text-lg shadow-xl"
            >
              Book Free Consultation
            </Link>
            
            <Link 
              href="/services"
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#001F3F] transition-all text-lg"
            >
              Explore Services
            </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-gray-400 text-sm">
              🚀 Trusted by 39,000+ early-stage startups across India
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}