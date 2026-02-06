// app/case-studies/page.tsx
'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// =====================================================
const CaseStudiesHero = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                Case Studies
              </h1>
              <p className="text-xl sm:text-2xl text-blue-300 font-light leading-relaxed">
                Real-world impact through diagnostic rigor, quantitative analysis, and fact-based strategic consulting.
              </p>
            </div>

            <div className="max-w-full lg:max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search case studies by industry, challenge..."
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 rounded-lg bg-[#1a3352] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg transition-all duration-300 border border-transparent hover:border-blue-500"
                  aria-label="Search case studies"
                />
                <svg
                  className="absolute right-4 sm:right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span className="text-sm sm:text-base">Measurable business outcomes across engagements</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span className="text-sm sm:text-base">Data-driven strategies that deliver tangible results</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 lg:h-[450px] flex items-center justify-center lg:justify-end">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full max-w-lg h-full bg-gradient-to-br from-blue-900/20 to-transparent rounded-lg flex items-center justify-center border border-blue-800/30">
                <div className="text-center text-blue-400/50 p-8">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  <p className="text-sm">Strategic Impact<br/>Visualization</p>
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
// FILTER TABS COMPONENT
// =====================================================
const FilterTabs = ({ activeFilter, setActiveFilter }: { activeFilter: string; setActiveFilter: (filter: string) => void }) => {
  const filters = [
    'All Case Studies',
    'Go-to-Market Strategy',
    'Growth & Scaling',
    'Market Entry',
    'Financial Strategy',
    'Operational Excellence'
  ];

  return (
    <div className="bg-[#d4dce5] py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#0A1E3D] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// =====================================================
// FEATURED CASE STUDY SECTION
// =====================================================
const FeaturedCaseStudySection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-4">
                FEATURED CASE STUDY
              </div>
              <h2 className="text-3xl sm:text-4xl text-white font-light mb-4 leading-tight">
                B2B SaaS Platform: Market Entry & Growth Strategy
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                A mid-stage B2B SaaS company looking to expand from enterprise to mid-market segment needed a 
                comprehensive go-to-market strategy. Through diagnostic analysis of customer acquisition economics 
                and quantitative market modeling, we developed a data-driven expansion roadmap.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-light text-white mb-1">3.2x</div>
                  <div className="text-white/80 text-xs">Revenue Growth</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-light text-white mb-1">45%</div>
                  <div className="text-white/80 text-xs">CAC Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-light text-white mb-1">500+</div>
                  <div className="text-white/80 text-xs">New Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-light text-white mb-1">18 mo</div>
                  <div className="text-white/80 text-xs">Implementation</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 bg-white text-[#0A1E3D] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg group">
                  <span>Read Full Case Study</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Impact Metrics<br/>Visualization</p>
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
// CASE STUDIES GRID SECTION
// =====================================================
const CaseStudiesGridSection = ({ activeFilter }: { activeFilter: string }) => {
  const allCaseStudies = [
    {
      category: 'Go-to-Market Strategy',
      title: 'B2B SaaS Platform: Market Entry & Growth Strategy',
      client: 'Enterprise Software Company',
      challenge: 'Mid-stage B2B SaaS needed to expand from enterprise to mid-market segment while maintaining unit economics.',
      approach: 'Conducted comprehensive market sizing, competitive positioning analysis, and customer acquisition cost modeling across segments.',
      outcomes: [
        '3.2x revenue growth in 18 months',
        '45% reduction in customer acquisition cost',
        '500+ new mid-market customers acquired'
      ],
      industry: 'SaaS',
      duration: '18 months',
      featured: true
    },
    {
      category: 'Growth & Scaling',
      title: 'D2C Brand: Omnichannel Expansion Strategy',
      client: 'Consumer Goods Startup',
      challenge: 'Fast-growing D2C brand needed strategy to expand into offline retail while preserving brand positioning and margins.',
      approach: 'Developed data-driven channel strategy with financial modeling, distribution partner evaluation, and pricing optimization.',
      outcomes: [
        '200% increase in total revenue',
        'Successful launch in 150+ retail locations',
        'Maintained 65% gross margins across channels'
      ],
      industry: 'Consumer',
      duration: '12 months',
      featured: false
    },
    {
      category: 'Market Entry',
      title: 'Fintech Platform: Tier 2 City Expansion',
      client: 'Digital Lending Platform',
      challenge: 'Fintech company sought to expand lending operations to tier 2 and tier 3 cities with different risk profiles and customer behaviors.',
      approach: 'Quantitative risk modeling, market demand analysis, and operational infrastructure assessment for target geographies.',
      outcomes: [
        '15 new cities launched successfully',
        '₹250 crore in loans disbursed',
        'NPAs maintained below 2.5%'
      ],
      industry: 'Fintech',
      duration: '10 months',
      featured: false
    },
    {
      category: 'Financial Strategy',
      title: 'Edtech Company: Unit Economics Optimization',
      client: 'K-12 Learning Platform',
      challenge: 'High customer acquisition costs and low retention threatening path to profitability despite strong product-market fit.',
      approach: 'Deep-dive diagnostic of customer lifecycle, cohort analysis, and development of retention-focused growth model.',
      outcomes: [
        'CAC payback reduced from 18 to 9 months',
        'Customer LTV increased by 85%',
        'Path to profitability achieved 12 months early'
      ],
      industry: 'Edtech',
      duration: '8 months',
      featured: false
    },
    {
      category: 'Operational Excellence',
      title: 'Logistics Startup: Operations & Efficiency Redesign',
      client: 'Last-Mile Delivery Platform',
      challenge: 'Rapid growth led to operational inefficiencies, rising costs per delivery, and declining service quality metrics.',
      approach: 'Comprehensive operational audit, route optimization modeling, and technology stack evaluation with implementation roadmap.',
      outcomes: [
        '35% reduction in cost per delivery',
        'On-time delivery rate improved to 94%',
        '₹8 crore annual cost savings'
      ],
      industry: 'Logistics',
      duration: '6 months',
      featured: false
    },
    {
      category: 'Growth & Scaling',
      title: 'Healthcare Tech: Revenue Model Pivot',
      client: 'Telemedicine Platform',
      challenge: 'B2C-focused telemedicine platform struggling with monetization needed to evaluate B2B2C and enterprise revenue streams.',
      approach: 'Market opportunity sizing, business model design, financial projections, and pilot program structure for enterprise segment.',
      outcomes: [
        '3 major enterprise partnerships signed',
        'B2B revenue contributing 40% of total',
        'Monthly recurring revenue up 250%'
      ],
      industry: 'Healthcare',
      duration: '14 months',
      featured: false
    },
    {
      category: 'Go-to-Market Strategy',
      title: 'B2B Marketplace: Seller Acquisition Strategy',
      client: 'Manufacturing Marketplace',
      challenge: 'Two-sided marketplace needed to rapidly scale seller base while maintaining quality standards and transaction velocity.',
      approach: 'Diagnostic analysis of seller economics, segmentation framework, and targeted acquisition strategy with quality controls.',
      outcomes: [
        '1,200+ verified sellers onboarded',
        'GMV growth of 4x in 12 months',
        'Average order value increased 60%'
      ],
      industry: 'B2B Marketplace',
      duration: '12 months',
      featured: false
    },
    {
      category: 'Market Entry',
      title: 'SaaS Product: International Expansion to SEA',
      client: 'HR Tech Platform',
      challenge: 'Indian HR tech platform evaluating expansion to Southeast Asian markets with limited understanding of local dynamics.',
      approach: 'Comprehensive market entry analysis including regulatory review, competitive landscape, and localization requirements.',
      outcomes: [
        'Successful launch in Singapore and Indonesia',
        '50+ enterprise clients in 8 months',
        'Product-market fit validated in new markets'
      ],
      industry: 'SaaS',
      duration: '16 months',
      featured: false
    },
    {
      category: 'Financial Strategy',
      title: 'Food Delivery: Profitability Roadmap',
      client: 'Cloud Kitchen Platform',
      challenge: 'Food delivery platform burning significant cash despite scale, needed clear path to unit-level profitability.',
      approach: 'Detailed P&L diagnostic by geography and cuisine, pricing optimization, and operational efficiency recommendations.',
      outcomes: [
        'Unit economics turned positive in 6 months',
        'Monthly burn reduced by 70%',
        'Contribution margin improved to 22%'
      ],
      industry: 'Food & Beverage',
      duration: '9 months',
      featured: false
    },
    {
      category: 'Operational Excellence',
      title: 'Fashion E-commerce: Inventory Optimization',
      client: 'Fashion Retail Platform',
      challenge: 'High inventory holding costs and frequent stockouts impacting profitability and customer satisfaction.',
      approach: 'Quantitative demand forecasting, inventory management framework, and supplier relationship restructuring.',
      outcomes: [
        'Inventory holding costs reduced 40%',
        'Stockout rate decreased from 18% to 5%',
        '₹12 crore working capital released'
      ],
      industry: 'E-commerce',
      duration: '7 months',
      featured: false
    }
  ];

  const filteredCaseStudies = activeFilter === 'All Case Studies' 
    ? allCaseStudies 
    : allCaseStudies.filter(study => study.category === activeFilter);

  const bgColors = [
    'from-[#1E5A8E] to-[#2B7AB8]',
    'from-[#2B7AB8] to-[#3A8BC8]',
    'from-[#7B8FA5] to-[#8B9EB0]',
    'from-[#3A8BC8] to-[#4A9CD8]',
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-800">
            {activeFilter === 'All Case Studies' ? 'All Case Studies' : activeFilter}
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'case study' : 'case studies'} available
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className={`bg-gradient-to-br ${bgColors[index % bgColors.length]} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 left-5 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-5 right-5 w-16 h-16 border-2 border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    <p className="text-xs opacity-90">{study.industry}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {study.category}
                  </span>
                  <span className="text-xs text-gray-500">{study.duration}</span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight">
                  {study.title}
                </h3>

                <div className="mb-4 space-y-3">
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-1">Approach</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {study.approach}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Key Outcomes</h4>
                  <div className="space-y-2">
                    {study.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        <span className="text-xs text-gray-600 leading-tight">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200">
                  <button className="w-full bg-[#0A1E3D] hover:bg-[#132B47] text-white py-3 px-4 rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2 group">
                    <span>Read Full Case Study</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No case studies found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// =====================================================
// IMPACT METRICS SECTION
// =====================================================
const ImpactMetricsSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Measurable Impact Across Engagements
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diagnostic, dividend-driven approach consistently delivers quantifiable business outcomes 
            for our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">50+</div>
            <div className="text-blue-300 text-sm">Client Engagements</div>
            <div className="text-gray-400 text-xs mt-2">Delivered Since Inception</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">₹2,500Cr+</div>
            <div className="text-blue-300 text-sm">Revenue Impact</div>
            <div className="text-gray-400 text-xs mt-2">Generated for Clients</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">3.5x</div>
            <div className="text-blue-300 text-sm">Average ROI</div>
            <div className="text-gray-400 text-xs mt-2">On Strategic Initiatives</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">15+</div>
            <div className="text-blue-300 text-sm">Industries Served</div>
            <div className="text-gray-400 text-xs mt-2">Across Sectors</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-lg font-medium mb-4 pb-3 border-b border-white/20">Revenue Growth</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Average Growth Rate</span>
                  <span className="font-medium">2.8x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Clients with 3x+ Growth</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Implementation Time</span>
                  <span className="font-medium">12 mo avg</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 pb-3 border-b border-white/20">Cost Optimization</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Average CAC Reduction</span>
                  <span className="font-medium">38%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Operational Efficiency Gain</span>
                  <span className="font-medium">32%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Working Capital Released</span>
                  <span className="font-medium">₹85Cr+</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 pb-3 border-b border-white/20">Market Expansion</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">New Markets Entered</span>
                  <span className="font-medium">40+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Customer Base Growth</span>
                  <span className="font-medium">4.2x avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Success Rate</span>
                  <span className="font-medium">92%</span>
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
// CLIENT TESTIMONIALS SECTION
// =====================================================
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The diagnostic rigor and quantitative approach transformed how we think about strategy. Their fact-based recommendations helped us achieve profitability 12 months ahead of plan.",
      author: "Founder & CEO",
      company: "Edtech Platform",
      industry: "Education Technology"
    },
    {
      quote: "Unlike typical consultants, they didn't just present frameworks. They rolled up their sleeves, analyzed our data, and developed actionable strategies grounded in our business reality.",
      author: "Chief Strategy Officer",
      company: "B2B SaaS Company",
      industry: "Enterprise Software"
    },
    {
      quote: "The market entry strategy they developed was instrumental in our Southeast Asia expansion. Their analytical rigor and market intelligence gave us confidence to execute boldly.",
      author: "VP of Business Development",
      company: "HR Tech Platform",
      industry: "SaaS"
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from founders and executives who have partnered with us on strategic initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-medium text-gray-900 text-sm">{testimonial.author}</p>
                <p className="text-xs text-gray-600">{testimonial.company}</p>
                <p className="text-xs text-blue-600 mt-1">{testimonial.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// CTA SECTION
// =====================================================
const CTASection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Ready to Drive Strategic Impact?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            Let's discuss how our diagnostic, data-driven approach can help your business achieve 
            measurable outcomes. Schedule a consultation to explore strategic opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg inline-flex items-center justify-center gap-2 group">
              <span>Schedule Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Capabilities Deck</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// MAIN CASE STUDIES PAGE COMPONENT
// =====================================================
export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All Case Studies');

  return (
    <main className="min-h-screen">
      <CaseStudiesHero />
      <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <FeaturedCaseStudySection />
      <CaseStudiesGridSection activeFilter={activeFilter} />
      <ImpactMetricsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}