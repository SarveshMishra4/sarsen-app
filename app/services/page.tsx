// app/services/page.tsx - PART 1 OF 2
// Copy this first, then immediately copy Part 2 below it
'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// =====================================================
const ServicesHero = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
            Strategy Consulting for Businesses
          </h1>
          <p className="text-xl sm:text-2xl text-blue-300 font-light leading-relaxed mb-8">
            Productized, quantifiable strategic services designed for execution readiness and measurable outcomes.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We serve businesses from pre-revenue startups to established enterprises generating ₹10Cr+ in annual revenue. Our specialty is early-stage businesses, where capital is limited, decisions are irreversible, and execution discipline matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// SIX STRATEGIC PILLARS SECTION
// =====================================================
const StrategicPillarsSection = () => {
  const pillars = [
    {
      title: "Growth & Revenue Strategy",
      description: "Predictable acquisition, stronger conversion, market expansion, and diversified revenue engines",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Financial Health & Planning",
      description: "Cash flow management, funding readiness, profitability optimization, and exit preparation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Operations & Efficiency",
      description: "Process optimization, cost reduction, scaling systems, and performance management",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Strategic Planning & Positioning",
      description: "Long-term direction, competitive differentiation, turnaround strategies, and digital transformation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Product & Innovation",
      description: "Product-market fit validation, launch planning, innovation frameworks, and customer feedback systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Specialized Startup Services",
      description: "Founder advisory, fundraising readiness, accelerator alternatives, and pre-revenue validation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Six Strategic Service Pillars
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Clearly defined, outcome-driven services with fixed scope, pricing, timelines, and tangible deliverables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {pillar.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#0A1E3D] transition-colors mb-2 leading-tight">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// STARTUP SERVICES SECTION
// =====================================================
const StartupServicesSection = () => {
  const services = [
    {
      category: "Growth & Revenue Strategy",
      title: "Go-to-Market Strategy",
      description: "Build comprehensive customer acquisition frameworks with channel selection, messaging architecture, and launch sequencing for predictable market entry.",
      outcomes: "Clear path to first 100 customers"
    },
    {
      category: "Financial Health & Planning",
      title: "Funding Readiness Package",
      description: "Prepare comprehensive investor materials including pitch deck, financial models, and due diligence documentation that instill confidence and accelerate capital raising.",
      outcomes: "Investor-ready documentation"
    },
    {
      category: "Product & Innovation",
      title: "Product-Market Fit Diagnostics",
      description: "Validate demand signals, identify gaps between product and market needs, and establish systematic iteration frameworks to achieve sustainable PMF.",
      outcomes: "Validated product direction"
    },
    {
      category: "Specialized Startup Services",
      title: "Founder Advisory Retainer",
      description: "Ongoing strategic counsel for critical decisions, execution challenges, and high-stakes pivots. Monthly access to experienced guidance at decision-making moments.",
      outcomes: "Continuous strategic support"
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full text-blue-400 text-xs font-medium mb-4">
            EARLY-STAGE BUSINESSES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Services for Startups
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Purpose-built for early-stage startups where speed, capital efficiency, and decision quality are critical. Designed to prevent costly missteps and accelerate validation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-lg p-6 border border-blue-800/30 hover:border-blue-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-blue-400 bg-blue-600/20 px-2 py-1 rounded">
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>{service.outcomes}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services/startups"
            className="inline-flex items-center gap-2 bg-white text-[#0A1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg group"
          >
            <span>View All Startup Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

// CONTINUE TO PART 2...
// app/services/page.tsx - PART 2 OF 2
// This continues directly from Part 1 - paste this immediately after Part 1

// =====================================================
// SME SERVICES SECTION
// =====================================================
const SMEServicesSection = () => {
  const services = [
    {
      category: "Operations & Efficiency",
      title: "Business Process Optimization",
      description: "Eliminate bottlenecks, streamline workflows, and create repeatable systems that enable faster execution and consistent output quality across operations.",
      outcomes: "30-50% efficiency improvement"
    },
    {
      category: "Financial Health & Planning",
      title: "Profit Improvement Plans",
      description: "Analyze margin structures, identify cost leakage, and implement targeted initiatives to enhance profitability without compromising quality or market position.",
      outcomes: "Measurable margin expansion"
    },
    {
      category: "Growth & Revenue Strategy",
      title: "Revenue Diversification Strategy",
      description: "Reduce dependency on single revenue sources by identifying and validating new market opportunities, product extensions, or business model innovations.",
      outcomes: "Multiple revenue streams"
    },
    {
      category: "Strategic Planning & Positioning",
      title: "Competitive Intelligence & Positioning",
      description: "Develop sustainable competitive advantages through systematic market insight, customer research, and strategic differentiation in crowded markets.",
      outcomes: "Defensible market position"
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full text-blue-800 text-xs font-medium mb-4">
            SCALING BUSINESSES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Services for Small & Medium Enterprises
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
            Built for organizations experiencing growth friction, operational complexity, or market challenges. Focus on sustainable scaling and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#0A1E3D] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>{service.outcomes}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services/sme"
            className="inline-flex items-center gap-2 bg-[#0A1E3D] text-white px-8 py-4 rounded-lg hover:bg-[#132B47] transition-colors font-medium shadow-lg group"
          >
            <span>View All SME Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// UNICORN & INNOVATIVE STARTUPS SECTION
// =====================================================
const UnicornServicesSection = () => {
  const services = [
    {
      category: "Strategic Planning & Positioning",
      title: "Digital Transformation Roadmaps",
      description: "Navigate large-scale technology adoption with phased implementation plans, change management frameworks, and measurable transformation outcomes.",
      outcomes: "Systematic digital evolution"
    },
    {
      category: "Growth & Revenue Strategy",
      title: "Market Expansion Strategy",
      description: "Enter new geographies or customer segments with comprehensive market research, localization strategies, and risk-mitigated rollout plans.",
      outcomes: "Validated expansion path"
    },
    {
      category: "Financial Health & Planning",
      title: "Business Valuation & Exit Readiness",
      description: "Prepare for acquisition, merger, or strategic exit with comprehensive valuation analysis, documentation, and strategic positioning for maximum value realization.",
      outcomes: "Exit-ready documentation"
    },
    {
      category: "Product & Innovation",
      title: "Innovation Frameworks & Pipelines",
      description: "Build repeatable systems for generating, evaluating, and executing new opportunities while maintaining core business focus and resource discipline.",
      outcomes: "Systematic innovation capability"
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full text-blue-400 text-xs font-medium mb-4">
            HIGH-GROWTH STAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Services for Unicorns & Innovative Startups
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Designed for high-growth companies navigating complexity at scale. Focus on strategic transformation, market leadership, and sustainable competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-lg p-6 border border-blue-800/30 hover:border-blue-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-blue-400 bg-blue-600/20 px-2 py-1 rounded">
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>{service.outcomes}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services/unicorn"
            className="inline-flex items-center gap-2 bg-white text-[#0A1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg group"
          >
            <span>View All High-Growth Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// CORPORATE SERVICES SECTION
// =====================================================
const CorporateServicesSection = () => {
  const services = [
    {
      category: "Strategic Planning & Positioning",
      title: "Business Diagnostics & Turnaround Plans",
      description: "Comprehensive assessment of underperforming business units with detailed recovery roadmaps, restructuring strategies, and execution frameworks for sustainable turnaround.",
      outcomes: "Recovery roadmap with milestones"
    },
    {
      category: "Operations & Efficiency",
      title: "Performance Management Systems",
      description: "Create enterprise-wide accountability frameworks with KPI cascades, performance dashboards, and incentive structures that drive consistent results across departments.",
      outcomes: "Organization-wide alignment"
    },
    {
      category: "Growth & Revenue Strategy",
      title: "Partnership & Channel Strategy",
      description: "Develop strategic partnerships, distribution networks, and channel ecosystems that accelerate market penetration and create multiplicative growth effects.",
      outcomes: "Scalable distribution network"
    },
    {
      category: "Strategic Planning & Positioning",
      title: "Annual Strategic Planning",
      description: "Align leadership teams, capital allocation, and organizational strategy under clear multi-year direction with quarterly milestones and accountability mechanisms.",
      outcomes: "Multi-year strategic roadmap"
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full text-blue-800 text-xs font-medium mb-4">
            ENTERPRISE SCALE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Services for Corporations
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
            Strategic advisory for established enterprises seeking transformation, turnaround, or competitive repositioning. Focus on organizational alignment and measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#0A1E3D] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>{service.outcomes}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services/corporate"
            className="inline-flex items-center gap-2 bg-[#0A1E3D] text-white px-8 py-4 rounded-lg hover:bg-[#132B47] transition-colors font-medium shadow-lg group"
          >
            <span>View All Corporate Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// HOW WE WORK SECTION
// =====================================================
const HowWeWorkSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            How Clients Engage With Us
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Every engagement is designed to transfer capability, not create dependence. We deliver execution-ready strategy that your team can implement immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">Clearly Scoped Services</h3>
            <p className="text-gray-400 text-sm">Fixed-price engagements with defined timelines and specific outputs</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">Tangible Deliverables</h3>
            <p className="text-gray-400 text-sm">Strategy documents, financial models, process maps, execution plans</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">Implementation Ready</h3>
            <p className="text-gray-400 text-sm">Assets designed for immediate execution by client teams</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">Accessible Pricing</h3>
            <p className="text-gray-400 text-sm">World-class thinking without legacy overhead or brand premiums</p>
          </div>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// CUSTOM SOLUTIONS SECTION
// =====================================================
const CustomSolutionsSection = () => {
  return (
    <section className="bg-[#8B9EB0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Custom Solutions
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Every business is unique. If our standard services don't quite fit your needs, 
              we create custom consulting engagements tailored to your specific challenges and goals.
            </p>
            <ul className="space-y-3 text-white mb-8">
              <li className="flex items-start">
                <span className="text-blue-300 mr-3 mt-1">✓</span>
                <span className="text-white/90">Flexible engagement models</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-3 mt-1">✓</span>
                <span className="text-white/90">Customized deliverables and timelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-3 mt-1">✓</span>
                <span className="text-white/90">Industry-specific expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-3 mt-1">✓</span>
                <span className="text-white/90">Ongoing support and advisory</span>
              </li>
            </ul>
            <button className="bg-white text-gray-700 px-8 py-4 rounded hover:shadow-xl transition-all duration-300 font-medium">
              Discuss Your Needs
            </button>
          </div>

          {/* Right Column - Decorative Element */}
          <div className="relative h-96 flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
              {/* Interconnected circles representing custom solutions */}
              <circle cx="200" cy="200" r="80" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.3" />
              <circle cx="200" cy="200" r="60" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.5" />
              <circle cx="200" cy="200" r="40" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.7" />
              
              {/* Outer nodes */}
              <circle cx="140" cy="120" r="25" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="260" cy="120" r="25" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="300" cy="200" r="25" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="260" cy="280" r="25" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="140" cy="280" r="25" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="100" cy="200" r="25" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" strokeWidth="1.5" />
              
              {/* Connecting lines */}
              <line x1="200" y1="200" x2="140" y2="120" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
              <line x1="200" y1="200" x2="260" y2="120" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
              <line x1="200" y1="200" x2="300" y2="200" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
              <line x1="200" y1="200" x2="260" y2="280" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
              <line x1="200" y1="200" x2="140" y2="280" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
              <line x1="200" y1="200" x2="100" y2="200" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// FAQ SECTION
// =====================================================
const FAQSection = () => {
  const faqs = [
    {
      question: "How do you price your services?",
      answer: "Our pricing is based on the scope, complexity, and duration of the engagement. The ranges provided include all deliverables, meetings, and support during the project. We provide detailed proposals after an initial consultation to understand your specific needs."
    },
    {
      question: "Can I combine multiple services?",
      answer: "Absolutely! Many clients benefit from combining services. For example, Diagnostic & Direction often leads to a Go-To-Market or Growth Acceleration engagement. We can create bundled packages that offer better value."
    },
    {
      question: "What is your typical engagement process?",
      answer: "We start with a free consultation to understand your challenges and goals. Then we provide a detailed proposal outlining scope, deliverables, timeline, and investment. Once agreed, we kick off with an onboarding session and begin the engagement with regular check-ins and milestone reviews."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes, we work with businesses at all stages, from pre-revenue startups to established companies. Our services are tailored to your stage, challenges, and budget. We also offer founder coaching for first-time entrepreneurs."
    }
  ];

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


// =====================================================
// MAIN SERVICES PAGE COMPONENT
// =====================================================
export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <StrategicPillarsSection />
      <StartupServicesSection />
      <SMEServicesSection />
      <UnicornServicesSection />
      <CorporateServicesSection />
      <HowWeWorkSection />
      <CustomSolutionsSection />
      <FAQSection />
    </main>
  );
}
