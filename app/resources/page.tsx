// app/resources/page.tsx - PART 1 OF 2
// Copy this first, then immediately copy Part 2 below it
'use client';

import React, { useState, useEffect, useRef } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// =====================================================
const ResourcesHero = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
                Resources & Tools
              </h1>
              <p className="text-xl sm:text-2xl text-blue-300 font-light leading-relaxed">
                Practical tools, insights, and frameworks to help you make better business decisions.
              </p>
            </div>

            <div className="max-w-full lg:max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tools, articles, frameworks..."
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 rounded-lg bg-[#1a3352] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg transition-all duration-300 border border-transparent hover:border-blue-500"
                  aria-label="Search resources"
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

            <div className="flex flex-wrap gap-3">
              <span className="text-gray-400 text-sm">Popular:</span>
              <a href="#" className="text-blue-300 text-sm hover:text-blue-200 transition-colors">Valuation Calculator</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-blue-300 text-sm hover:text-blue-200 transition-colors">Growth Strategy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-blue-300 text-sm hover:text-blue-200 transition-colors">Financial Planning</a>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 lg:h-[450px] flex items-center justify-center lg:justify-end">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full max-w-lg h-full bg-gradient-to-br from-blue-900/20 to-transparent rounded-lg flex items-center justify-center border border-blue-800/30">
                <div className="text-center text-blue-400/50 p-8">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                  <p className="text-sm">Resources Illustration<br/>Placeholder</p>
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
// FINANCIAL TOOLS SECTION
// =====================================================
const FinancialToolsSection = () => {
  const tools = [
    {
      title: "Startup Valuation Calculator",
      description: "Calculate your company's current valuation using multiple methodologies including DCF, market multiples, and comparable analysis. Get instant insights into your business worth.",
      link: "/tools/valuation-calculator"
    },
    {
      title: "Cash Flow Forecasting Tool",
      description: "Project your 13-week cash runway with scenario planning capabilities. Understand when you'll need funding or reach profitability with detailed cash flow projections.",
      link: "/tools/cash-flow"
    },
    {
      title: "CAC & LTV Calculator",
      description: "Measure Customer Acquisition Cost and compare with Customer Lifetime Value. Optimize marketing spend and improve unit economics with detailed analysis.",
      link: "/tools/cac-ltv"
    },
    {
      title: "Break-Even Analysis",
      description: "Determine when your business will become profitable. Calculate break-even points based on fixed costs, variable costs, and pricing strategy.",
      link: "/tools/break-even"
    },
    {
      title: "Financial Model Template",
      description: "Pre-built Excel model with P&L, balance sheet, and cash flow projections. Comprehensive financial planning tool for startups and growing businesses.",
      link: "/tools/financial-model"
    },
    {
      title: "ROI Calculator",
      description: "Calculate return on investment for marketing campaigns, projects, or business initiatives. Make data-driven decisions about resource allocation.",
      link: "/tools/roi-calculator"
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Financial Tools
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
            Essential calculators and models for financial planning, valuation, and understanding your business metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#0A1E3D] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Launch Tool</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TEAM & CULTURE TOOLS SECTION
// =====================================================
const TeamCultureSection = () => {
  const tools = [
    {
      title: "Team Psychometric Assessment",
      description: "Evaluate team dynamics, leadership styles, and cultural fit. Identify strengths and gaps in your team composition with comprehensive personality and working style analysis.",
      link: "/tools/psychometric"
    },
    {
      title: "Leadership Assessment Framework",
      description: "Evaluate leadership qualities and management styles across your organization. Identify development areas and build stronger leadership capabilities.",
      link: "/tools/leadership"
    },
    {
      title: "Team Compatibility Analyzer",
      description: "Assess team member compatibility and identify potential conflicts before they arise. Build harmonious, high-performing teams.",
      link: "/tools/team-compatibility"
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Team & Culture
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Build stronger teams with assessments that reveal personality traits, working styles, and team dynamics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-blue-800/30 hover:border-blue-700/50"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Launch Tool</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// CONTINUE TO PART 2...
// app/resources/page.tsx - PART 2 OF 2
// This continues directly from Part 1 - paste this immediately after Part 1

// =====================================================
// GROWTH & STRATEGY TOOLS SECTION
// =====================================================
const GrowthStrategySection = () => {
  const tools = [
    {
      title: "Market Sizing Framework",
      description: "Calculate TAM, SAM, and SOM for your business with templates designed for investor presentations. Understand your total addressable market and growth potential.",
      link: "/tools/market-sizing"
    },
    {
      title: "Competitor Analysis Framework",
      description: "Systematically analyze competitors' strengths, weaknesses, and market positioning. Identify gaps and opportunities in your competitive landscape.",
      link: "/tools/competitor-analysis"
    },
    {
      title: "Growth Rate Calculator",
      description: "Calculate month-over-month and year-over-year growth rates. Track key metrics and forecast future performance based on historical data.",
      link: "/tools/growth-rate"
    },
    {
      title: "Pricing Strategy Tool",
      description: "Determine optimal pricing for your product or service. Compare different pricing models and understand price elasticity for your target market.",
      link: "/tools/pricing-strategy"
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Growth & Strategy
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
            Strategic frameworks to understand your market, plan growth trajectory, and make informed scaling decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#0A1E3D] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Launch Tool</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// FEATURED BLOG POSTS SECTION
// =====================================================
const FeaturedBlogsSection = () => {
  const blogs = [
    {
      title: "The Real Cost of Delaying Strategic Planning",
      excerpt: "Why waiting until you 'have time' for strategy costs more than you think. Data from 200+ startups reveals the compounding cost of strategic drift.",
      category: "Strategy",
      readTime: "8 min read",
      link: "/blog/cost-of-delaying-strategy"
    },
    {
      title: "Unit Economics: The One Metric That Actually Matters",
      excerpt: "Forget vanity metrics. Learn why unit economics determine whether your business model is fundamentally sound or fundamentally broken.",
      category: "Finance",
      readTime: "6 min read",
      link: "/blog/unit-economics"
    },
    {
      title: "How to Build a Financial Model Investors Actually Trust",
      excerpt: "The difference between a financial model that raises funding and one that gets ignored comes down to these specific elements.",
      category: "Fundraising",
      readTime: "10 min read",
      link: "/blog/financial-model-investors"
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
              Featured Insights
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              In-depth articles on strategy, finance, and growth from our team's real-world experience.
            </p>
          </div>
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-base font-medium group"
          >
            <span>View All Articles</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border border-blue-800/30 hover:border-blue-700/50 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-blue-800/30 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// REPORTS CARD SECTION
// Prominent card highlighting industry reports
// =====================================================
const ReportsCardSection = () => {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            <div className="relative bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-4">
                  RESEARCH & ANALYSIS
                </div>
                
                <h2 className="text-3xl sm:text-4xl text-white font-light mb-4 leading-tight">
                  Industry-Standard Reports
                </h2>
                
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                  Sarsen & Company publishes comprehensive industry reports based on deep research and keen analysis. Our reports set the standard for quality, depth, and actionable insights.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <p className="text-white/90 text-sm">Rigorous primary and secondary research methodologies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <p className="text-white/90 text-sm">Data-driven insights from hundreds of interviews and surveys</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <p className="text-white/90 text-sm">Actionable recommendations for founders and investors</p>
                  </div>
                </div>

                <a 
                  href="/reports" 
                  className="inline-flex items-center gap-2 bg-white text-[#0A1E3D] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg group"
                >
                  <span>Explore All Reports</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12 flex items-center">
              <div className="w-full">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-20 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded flex-shrink-0 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Indian Startup Ecosystem Report 2024</h3>
                      <p className="text-gray-600 text-sm mb-3">Comprehensive analysis of funding trends, sector growth, and emerging opportunities.</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                          </svg>
                          142 pages
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                          </svg>
                          Dec 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">5,000+ startups analyzed</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">200+ investor interviews</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">15 major startup hubs covered</span>
                    </div>
                  </div>
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
// MAIN RESOURCES PAGE COMPONENT
// =====================================================
export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <ResourcesHero />
      <FinancialToolsSection />
      <TeamCultureSection />
      <GrowthStrategySection />
      <FeaturedBlogsSection />
      <ReportsCardSection />
    </main>
  );
}