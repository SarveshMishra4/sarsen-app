// app/reports/page.tsx
'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// Dark blue background with search and filter
// =====================================================
const ReportsHero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative stars/dots in background */}
      <div className="absolute top-20 right-10 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">
            Research Reports & Insights
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            In-depth research reports on Indian startups, global trends, MSME sector, 
            and emerging business landscapes. Data-driven insights to inform your strategic decisions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search reports by topic, industry, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-[#4A5B75] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
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
        </div>
      </div>
    </section>
  );
};

// =====================================================
// FILTER TABS COMPONENT
// Category filter with active state
// =====================================================
const FilterTabs = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    'All Reports',
    'Indian Startup Ecosystem',
    'Global Trends',
    'MSME Sector',
    'Marketing & Growth',
    'Funding & Investment'
  ];

  return (
    <div className="bg-[#E8EEF2] py-6 px-4 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#1E5A8E] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
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
// REPORT CARD COMPONENT
// Individual report card with preview
// =====================================================
const ReportCard = ({ report, index }) => {
  const bgColors = [
    'from-[#1E5A8E] to-[#2B7AB8]',
    'from-[#2B7AB8] to-[#3A8BC8]',
    'from-[#7B8FA5] to-[#8B9EB0]',
    'from-[#3A8BC8] to-[#4A9CD8]',
    'from-[#1E5A8E] to-[#2D6BA0]',
    'from-[#6B7F95] to-[#7B8FA5]'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      {/* Report Preview Image */}
      <div className={`bg-gradient-to-br ${bgColors[index % bgColors.length]} h-56 relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-white text-center">
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-white/40"></div>
              </div>
            </div>
            {/* Page indicator dots */}
            <div className="flex justify-center space-x-2 absolute bottom-6 left-0 right-0">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
          </div>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Report Details */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {report.category}
          </span>
          <span className="text-gray-500 text-xs">{report.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {report.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {report.description}
        </p>

        {/* Key Insights */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">Key Insights:</p>
          <ul className="space-y-1">
            {report.keyInsights.slice(0, 3).map((insight, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 mr-2 text-xs mt-0.5">▸</span>
                <span className="text-gray-600 text-xs">{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-3 border-t">
          <span>{report.pages} pages</span>
          <span>•</span>
          <span>{report.downloads} downloads</span>
          <span>•</span>
          <span className="text-green-600 font-medium">{report.price}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-[#1E5A8E] text-white py-2.5 px-4 rounded hover:bg-[#2B7AB8] transition-colors text-sm font-medium">
            Download Report
          </button>
          <button className="px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded hover:border-[#1E5A8E] hover:text-[#1E5A8E] transition-colors text-sm">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

// =====================================================
// FEATURED REPORT SECTION
// Large highlighted report
// =====================================================
const FeaturedReport = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column - Content */}
            <div className="p-8 lg:p-12">
              <span className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full mb-4">
                FEATURED REPORT
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                State of Indian Startups 2025
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-6">
                Comprehensive analysis of the Indian startup ecosystem covering funding trends, 
                sector performance, unicorn evolution, and emerging opportunities. Based on data 
                from 5,000+ startups and 200+ investor interviews.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold text-white mb-1">120+</p>
                  <p className="text-white/80 text-xs">Pages</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold text-white mb-1">50+</p>
                  <p className="text-white/80 text-xs">Charts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold text-white mb-1">5K+</p>
                  <p className="text-white/80 text-xs">Data Points</p>
                </div>
              </div>

              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg">
                Download Free Report
              </button>
            </div>

            {/* Right Column - Visual */}
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0A1E3D]/50 flex items-center justify-center p-8">
                <svg viewBox="0 0 300 400" className="w-full h-full">
                  {/* Report visualization */}
                  <rect x="50" y="50" width="200" height="280" rx="8" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2" />
                  
                  {/* Title area */}
                  <rect x="70" y="70" width="160" height="40" rx="4" fill="rgba(255,255,255,0.3)" />
                  
                  {/* Graph visualization */}
                  <path d="M 70 150 L 100 180 L 130 140 L 160 160 L 190 120 L 220 140" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="70" cy="150" r="4" fill="white" />
                  <circle cx="100" cy="180" r="4" fill="white" />
                  <circle cx="130" cy="140" r="4" fill="white" />
                  <circle cx="160" cy="160" r="4" fill="white" />
                  <circle cx="190" cy="120" r="4" fill="white" />
                  <circle cx="220" cy="140" r="4" fill="white" />
                  
                  {/* Content lines */}
                  <rect x="70" y="200" width="120" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  <rect x="70" y="210" width="140" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  <rect x="70" y="220" width="100" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  
                  <rect x="70" y="240" width="80" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  <rect x="70" y="250" width="110" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  <rect x="70" y="260" width="90" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// REPORTS GRID SECTION
// Main section with all reports
// =====================================================
const ReportsGrid = ({ activeFilter }) => {
  const allReports = [
    {
      category: 'Indian Startup Ecosystem',
      title: 'Tier 2 & 3 City Startup Emergence Report',
      description: 'Analysis of the rapid growth of startups in smaller Indian cities, including Jaipur, Kochi, Indore, and Chandigarh. Explores talent availability, cost advantages, and unique challenges.',
      keyInsights: [
        '300% growth in tier-2 city startups over 3 years',
        'Average CAC 40% lower than metro cities',
        'Government incentives driving local entrepreneurship'
      ],
      date: 'Dec 2024',
      pages: 45,
      downloads: '2.3K',
      price: 'Free'
    },
    {
      category: 'MSME Sector',
      title: 'Digital Transformation in Indian MSMEs',
      description: 'Comprehensive study on how micro, small and medium enterprises are adopting digital tools, challenges they face, and the impact on productivity and revenue.',
      keyInsights: [
        '65% of MSMEs now use digital payment systems',
        'Cloud adoption increased by 180% post-pandemic',
        'Digital MSMEs grow 3x faster than traditional ones'
      ],
      date: 'Nov 2024',
      pages: 58,
      downloads: '3.1K',
      price: 'Free'
    },
    {
      category: 'Global Trends',
      title: 'AI Adoption in Global Startups 2024',
      description: 'International survey of 1,000+ startups across US, EU, and Asia on AI/ML implementation, use cases, ROI, and future plans.',
      keyInsights: [
        '78% of startups now use AI in some capacity',
        'Customer service and marketing are top use cases',
        'Average 35% efficiency gain reported'
      ],
      date: 'Oct 2024',
      pages: 72,
      downloads: '5.8K',
      price: '₹999'
    },
    {
      category: 'Funding & Investment',
      title: 'Indian VC Landscape Report Q4 2024',
      description: 'Quarterly analysis of venture capital activity in India including deal volume, sector preferences, average check sizes, and investor sentiment.',
      keyInsights: [
        '$2.8B deployed across 280 deals in Q4',
        'B2B SaaS and FinTech lead funding activity',
        'Early-stage deals up 25% quarter-over-quarter'
      ],
      date: 'Dec 2024',
      pages: 38,
      downloads: '4.2K',
      price: 'Free'
    },
    {
      category: 'Marketing & Growth',
      title: 'Customer Acquisition Strategies for D2C Brands',
      description: 'Deep dive into successful customer acquisition channels, strategies, and unit economics for direct-to-consumer brands in India.',
      keyInsights: [
        'Instagram drives 45% of D2C customer acquisition',
        'Influencer marketing ROI averages 5.8x',
        'Customer retention costs 6x less than acquisition'
      ],
      date: 'Nov 2024',
      pages: 52,
      downloads: '6.1K',
      price: '₹499'
    },
    {
      category: 'Indian Startup Ecosystem',
      title: 'SaaS Startup Benchmarking Report 2024',
      description: 'Key metrics and benchmarks for Indian B2B SaaS companies including ARR growth, churn rates, CAC payback, and sales efficiency metrics.',
      keyInsights: [
        'Median ARR growth of 120% for early-stage SaaS',
        'Average CAC payback period of 14 months',
        'Net revenue retention of 105% for successful SaaS'
      ],
      date: 'Oct 2024',
      pages: 64,
      downloads: '3.9K',
      price: '₹1,499'
    },
    {
      category: 'MSME Sector',
      title: 'Women-Led MSME Growth Study',
      description: 'Research on women entrepreneurs in the MSME sector, challenges faced, government schemes utilized, and success factors.',
      keyInsights: [
        'Women-led MSMEs grew by 45% in last 2 years',
        'Access to credit remains top challenge',
        'E-commerce enabling rural women entrepreneurs'
      ],
      date: 'Sep 2024',
      pages: 41,
      downloads: '2.7K',
      price: 'Free'
    },
    {
      category: 'Global Trends',
      title: 'Climate Tech Investment Trends 2024',
      description: 'Global analysis of climate technology investments, emerging technologies, regulatory impacts, and market opportunities.',
      keyInsights: [
        '$48B invested in climate tech globally in 2024',
        'Carbon capture and green hydrogen lead funding',
        'Policy incentives driving 60% of investments'
      ],
      date: 'Nov 2024',
      pages: 68,
      downloads: '4.5K',
      price: '₹1,999'
    },
    {
      category: 'Marketing & Growth',
      title: 'Content Marketing ROI Study',
      description: 'Data-driven analysis of content marketing effectiveness across industries, channels, and formats with ROI benchmarks.',
      keyInsights: [
        'Long-form content generates 4x more leads',
        'Video content has 12x higher engagement',
        'Content marketing costs 62% less than paid ads'
      ],
      date: 'Oct 2024',
      pages: 48,
      downloads: '5.3K',
      price: '₹799'
    },
    {
      category: 'Funding & Investment',
      title: 'Angel Investing Guide for India',
      description: 'Comprehensive guide for angel investors including legal frameworks, valuation methods, due diligence checklists, and portfolio strategy.',
      keyInsights: [
        'Average angel check size is ₹25-50 lakhs',
        'Expected portfolio success rate: 1 in 10',
        'Tax benefits under Section 54GB'
      ],
      date: 'Dec 2024',
      pages: 76,
      downloads: '1.8K',
      price: '₹2,499'
    },
    {
      category: 'Indian Startup Ecosystem',
      title: 'EdTech Market Analysis 2024',
      description: 'Complete overview of the Indian education technology sector including market size, user behavior, business models, and future outlook.',
      keyInsights: [
        'Market size reached $4.7B in 2024',
        'K-12 segment dominates with 48% share',
        'Hybrid learning models gaining traction'
      ],
      date: 'Nov 2024',
      pages: 55,
      downloads: '4.8K',
      price: 'Free'
    },
    {
      category: 'Global Trends',
      title: 'Remote Work & Distributed Teams Report',
      description: 'International study on remote work trends, productivity metrics, tool adoption, and best practices from 500+ companies.',
      keyInsights: [
        '68% of companies now offer hybrid work',
        'Productivity remained stable or increased',
        'Communication tools market grew 220%'
      ],
      date: 'Sep 2024',
      pages: 62,
      downloads: '7.2K',
      price: '₹999'
    }
  ];

  // Filter reports based on active filter
  const filteredReports = activeFilter === 'All Reports' 
    ? allReports 
    : allReports.filter(report => report.category === activeFilter);

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 text-sm">
            Showing <span className="font-semibold">{filteredReports.length}</span> reports
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReports.map((report, index) => (
            <ReportCard key={index} report={report} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {filteredReports.length > 9 && (
          <div className="mt-12 text-center">
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium border border-gray-300">
              Load More Reports
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

// =====================================================
// CUSTOM RESEARCH SECTION
// =====================================================
const CustomResearchSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Need Custom Research?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We conduct bespoke research studies tailored to your specific industry, market, 
            or business question. Get data-driven insights that directly inform your strategic decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium">
              Request Custom Research
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-700 transition-all duration-300 font-medium">
              View Sample Reports
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
      <FeaturedReport />
      <ReportsGrid activeFilter={activeFilter} />
      <CustomResearchSection />
    </main>
  );
}