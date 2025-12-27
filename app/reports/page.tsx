// app/reports/page.tsx - PART 1 OF 2
// Copy this first, then immediately copy Part 2 below it
'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// =====================================================
const ReportsHero = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                Research Reports
              </h1>
              <p className="text-xl sm:text-2xl text-blue-300 font-light leading-relaxed">
                Industry-standard research reports based on deep analysis and rigorous methodology.
              </p>
            </div>

            <div className="max-w-full lg:max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reports by topic, industry..."
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 rounded-lg bg-[#1a3352] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg transition-all duration-300 border border-transparent hover:border-blue-500"
                  aria-label="Search reports"
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
                <span className="text-sm sm:text-base">Based on extensive primary and secondary research</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span className="text-sm sm:text-base">Data-driven insights and actionable recommendations</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 lg:h-[450px] flex items-center justify-center lg:justify-end">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full max-w-lg h-full bg-gradient-to-br from-blue-900/20 to-transparent rounded-lg flex items-center justify-center border border-blue-800/30">
                <div className="text-center text-blue-400/50 p-8">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  </svg>
                  <p className="text-sm">Reports Illustration<br/>Placeholder</p>
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
    'All Reports',
    'Market Analysis',
    'Financial Reports',
    'Growth Forecasts',
    'Sector Insights',
    'Custom Reports'
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
// FEATURED REPORT SECTION
// =====================================================
const FeaturedReportSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-4">
                FEATURED REPORT
              </div>
              <h2 className="text-3xl sm:text-4xl text-white font-light mb-4 leading-tight">
                Indian Startup Ecosystem Report 2024
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                Comprehensive analysis of India's startup landscape covering funding trends, sector-wise growth patterns, emerging opportunities across tier-1 and tier-2 cities, and strategic insights for founders and investors.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                  </svg>
                  <span>142 pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>Updated Dec 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/>
                  </svg>
                  <span>5,000+ startups analyzed</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 bg-white text-[#0A1E3D] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg group">
                  <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Free Sample</span>
                </button>
                <button className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
                  <span>Purchase Full Report</span>
                  <span className="text-sm">₹4,999</span>
                </button>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 p-8 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Featured Report<br/>Preview</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// CONTINUE TO PART 2...
// app/reports/page.tsx - PART 2 OF 2
// This continues directly from Part 1 - paste this immediately after Part 1

// =====================================================
// REPORTS GRID SECTION
// =====================================================
const ReportsGridSection = ({ activeFilter }: { activeFilter: string }) => {
  const allReports = [
    {
      category: 'Market Analysis',
      title: 'Indian Startup Ecosystem Report 2024',
      description: 'Comprehensive analysis of funding trends, sector growth, and emerging opportunities across India.',
      keyInsights: [
        '5,000+ startups analyzed across 15 major hubs',
        '₹2.1 lakh crore in total funding tracked',
        'Detailed sector-wise breakdown and growth patterns'
      ],
      date: 'Dec 2024',
      pages: 142,
      downloads: '2,500+',
      price: 'Free',
      isFree: true
    },
    {
      category: 'Financial Reports',
      title: 'SaaS Financial Benchmarking Report 2024',
      description: 'Financial metrics and benchmarks from 500+ Indian SaaS companies across growth stages.',
      keyInsights: [
        'Revenue growth benchmarks by ARR stage',
        'CAC payback periods and unit economics',
        'Burn multiple and efficiency metrics'
      ],
      date: 'Nov 2024',
      pages: 98,
      downloads: '1,200+',
      price: '₹3,999',
      isFree: false
    },
    {
      category: 'Growth Forecasts',
      title: 'Indian Tech Startup Growth Forecast 2025-2027',
      description: 'Three-year growth projections for Indian tech startups across major sectors.',
      keyInsights: [
        'Sector-wise growth predictions and drivers',
        'Emerging technologies and adoption trends',
        'Investment flow forecasts by quarter'
      ],
      date: 'Oct 2024',
      pages: 76,
      downloads: '850+',
      price: '₹4,999',
      isFree: false
    },
    {
      category: 'Sector Insights',
      title: 'Fintech Sector Deep Dive 2024',
      description: 'Analysis of India\'s fintech landscape covering payments, lending, neobanking, and insurtech.',
      keyInsights: [
        'Regulatory landscape and compliance requirements',
        'Customer acquisition strategies and costs',
        'Partnership models and revenue streams'
      ],
      date: 'Sep 2024',
      pages: 124,
      downloads: '1,800+',
      price: '₹5,999',
      isFree: false
    },
    {
      category: 'Market Analysis',
      title: 'Tier 2 & 3 Cities Startup Landscape',
      description: 'Emerging startup ecosystems in smaller Indian cities and their unique characteristics.',
      keyInsights: [
        'Top 20 emerging startup cities ranked',
        'Local market dynamics and opportunities',
        'Infrastructure and talent availability'
      ],
      date: 'Aug 2024',
      pages: 89,
      downloads: '620+',
      price: '₹2,999',
      isFree: false
    },
    {
      category: 'Growth Forecasts',
      title: 'D2C E-commerce Growth Report 2024',
      description: 'Analysis of direct-to-consumer brands in India and projected growth trajectories.',
      keyInsights: [
        'Category-wise growth rates and saturation',
        'Customer acquisition and retention costs',
        'Distribution and logistics strategies'
      ],
      date: 'Jul 2024',
      pages: 102,
      downloads: '1,450+',
      price: 'Free',
      isFree: true
    },
    {
      category: 'Sector Insights',
      title: 'Edtech Sector Analysis 2024',
      description: 'Comprehensive analysis of India\'s education technology sector post-pandemic.',
      keyInsights: [
        'Market size and segmentation by category',
        'User acquisition costs and retention',
        'Regulatory challenges and opportunities'
      ],
      date: 'Jun 2024',
      pages: 115,
      downloads: '2,100+',
      price: '₹4,499',
      isFree: false
    },
    {
      category: 'Financial Reports',
      title: 'Startup Valuation Trends Q3 2024',
      description: 'Analysis of valuation multiples and trends across Indian startup funding rounds.',
      keyInsights: [
        'Median valuation multiples by sector',
        'Down rounds and flat rounds analysis',
        'Investor sentiment and deal dynamics'
      ],
      date: 'Sep 2024',
      pages: 67,
      downloads: '950+',
      price: '₹3,499',
      isFree: false
    },
    {
      category: 'Custom Reports',
      title: 'Healthcare Tech Market Opportunity',
      description: 'Custom research on healthcare technology opportunities in Indian market.',
      keyInsights: [
        'Market sizing and segmentation',
        'Regulatory and compliance landscape',
        'Go-to-market strategies for healthtech'
      ],
      date: 'May 2024',
      pages: 134,
      downloads: '420+',
      price: '₹7,999',
      isFree: false
    }
  ];

  const filteredReports = activeFilter === 'All Reports' 
    ? allReports 
    : allReports.filter(report => report.category === activeFilter);

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
            {activeFilter === 'All Reports' ? 'All Research Reports' : activeFilter}
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            {filteredReports.length} {filteredReports.length === 1 ? 'report' : 'reports'} available
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className={`bg-gradient-to-br ${bgColors[index % bgColors.length]} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 left-5 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-5 right-5 w-16 h-16 border-2 border-white rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    <p className="text-xs opacity-90">{report.pages} Pages</p>
                  </div>
                </div>
                {report.isFree && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FREE
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {report.category}
                  </span>
                  <span className="text-xs text-gray-500">{report.date}</span>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
                  {report.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {report.description}
                </p>

                <div className="mb-4 space-y-2">
                  {report.keyInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      <span className="text-xs text-gray-600 leading-tight">{insight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                      </svg>
                      {report.pages}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                      </svg>
                      {report.downloads}
                    </span>
                  </div>
                  <span className={`font-semibold ${report.isFree ? 'text-green-600' : 'text-gray-900'}`}>
                    {report.price}
                  </span>
                </div>

                <button className="mt-4 w-full bg-[#0A1E3D] hover:bg-[#132B47] text-white py-3 px-4 rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2 group">
                  {report.isFree ? (
                    <>
                      <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download Free</span>
                    </>
                  ) : (
                    <>
                      <span>Purchase Report</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No reports found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// =====================================================
// CUSTOM RESEARCH CTA SECTION
// =====================================================
const CustomResearchSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Need Custom Research?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            We conduct bespoke research tailored to your specific industry, market, or business questions. 
            Get insights that matter to your unique situation with custom analysis and recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg inline-flex items-center justify-center gap-2 group">
              <span>Request Custom Research</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// MAIN REPORTS PAGE COMPONENT
// =====================================================
export default function ReportsPage() {
  const [activeFilter, setActiveFilter] = useState('All Reports');

  return (
    <main className="min-h-screen">
      <ReportsHero />
      <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <FeaturedReportSection />
      <ReportsGridSection activeFilter={activeFilter} />
      <CustomResearchSection />
    </main>
  );
}