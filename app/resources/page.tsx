// app/resources/page.tsx
'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// Dark blue background with page title
// =====================================================
const ResourcesHero = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[400px] pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative stars/dots in background */}
      <div className="absolute top-20 right-10 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">
            Free Resources
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Powerful tools and calculators to help founders and business owners analyze their businesses, 
            make informed decisions, and drive growth. All resources are free to use.
          </p>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// FINANCIAL TOOLS SECTION
// Tools for valuation, financial planning, and analysis
// =====================================================
const FinancialToolsSection = () => {
  const tools = [
    {
      title: "Valuation Calculator",
      description: "Calculate your company's current valuation using multiple methods including DCF, market multiples, and comparable analysis. Get instant insights into your business worth.",
      link: "/tools/valuation-calculator",
      bg: "bg-[#1E5A8E]",
      icon: "💰"
    },
    {
      title: "Burn Rate Calculator",
      description: "Track your monthly cash burn rate and runway. Understand how long your current funding will last and plan your next fundraising round effectively.",
      link: "/tools/burn-rate",
      bg: "bg-[#2B7AB8]",
      icon: "🔥"
    },
    {
      title: "CAC Calculator",
      description: "Measure your Customer Acquisition Cost and compare it with Customer Lifetime Value. Optimize your marketing spend and improve unit economics.",
      link: "/tools/cac-calculator",
      bg: "bg-[#3A8BC8]",
      icon: "📊"
    },
    {
      title: "Break-Even Analysis",
      description: "Determine when your business will become profitable. Calculate your break-even point based on fixed costs, variable costs, and pricing strategy.",
      link: "/tools/break-even",
      bg: "bg-[#1E5A8E]",
      icon: "📈"
    }
  ];

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Financial Tools
          </h2>
          <p className="text-gray-600 text-sm max-w-3xl">
            Essential calculators for financial planning, valuation, and understanding your business metrics. 
            Make data-driven decisions with these powerful tools.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className={`${tool.bg} rounded-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-[1.02]`}
            >
              <div className="text-white">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {tool.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {tool.description}
                </p>
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
// Psychometric tests and team analysis tools
// =====================================================
const TeamCultureSection = () => {
  const tools = [
    {
      title: "Psychometric Test",
      description: "Assess your team's personality traits, working styles, and dynamics. Build better teams by understanding individual strengths and how they complement each other.",
      link: "/tools/psychometric-test",
      bg: "bg-[#7B8FA5]",
      icon: "🧠"
    },
    {
      title: "Team Compatibility Analyzer",
      description: "Evaluate team member compatibility and identify potential conflicts before they arise. Create harmonious teams that work well together.",
      link: "/tools/team-compatibility",
      bg: "bg-[#8B9EB0]",
      icon: "🤝"
    },
    {
      title: "Leadership Assessment",
      description: "Evaluate leadership qualities and management styles. Identify areas for development and build stronger leadership capabilities.",
      link: "/tools/leadership-assessment",
      bg: "bg-[#6B7F95]",
      icon: "👔"
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Team & Culture
          </h2>
          <p className="text-gray-300 text-sm max-w-3xl">
            Build stronger teams with assessments that reveal personality traits, working styles, and team dynamics. 
            Create a culture that drives performance.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className={`${tool.bg} rounded-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-[1.02]`}
            >
              <div className="text-white">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {tool.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// GROWTH & STRATEGY SECTION
// Tools for market analysis and growth planning
// =====================================================
const GrowthStrategySection = () => {
  const tools = [
    {
      title: "Market Size Calculator",
      description: "Estimate your Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) to understand your growth potential.",
      link: "/tools/market-size",
      bg: "bg-[#2B7AB8]",
      icon: "🌍"
    },
    {
      title: "Competitor Analysis Framework",
      description: "Systematically analyze your competitors' strengths, weaknesses, and market positioning. Identify gaps and opportunities in your market.",
      link: "/tools/competitor-analysis",
      bg: "bg-[#3A8BC8]",
      icon: "🎯"
    },
    {
      title: "Growth Rate Calculator",
      description: "Calculate your month-over-month and year-over-year growth rates. Track key metrics and forecast future performance based on historical data.",
      link: "/tools/growth-rate",
      bg: "bg-[#1E5A8E]",
      icon: "📈"
    },
    {
      title: "Pricing Strategy Tool",
      description: "Determine optimal pricing for your product or service. Compare different pricing models and understand price elasticity for your market.",
      link: "/tools/pricing-strategy",
      bg: "bg-[#2B7AB8]",
      icon: "💲"
    }
  ];

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Growth & Strategy
          </h2>
          <p className="text-gray-600 text-sm max-w-3xl">
            Strategic tools to help you understand your market, plan your growth trajectory, and make informed 
            decisions about scaling your business.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className={`${tool.bg} rounded-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-[1.02]`}
            >
              <div className="text-white">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {tool.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// OPERATIONS & EFFICIENCY SECTION
// Tools for operational improvement
// =====================================================
const OperationsSection = () => {
  const tools = [
    {
      title: "ROI Calculator",
      description: "Calculate return on investment for marketing campaigns, projects, or business initiatives. Make data-driven decisions about where to allocate resources.",
      link: "/tools/roi-calculator",
      bg: "bg-[#7B8FA5]",
      icon: "💹"
    },
    {
      title: "Productivity Analyzer",
      description: "Measure team productivity and identify bottlenecks in your operations. Optimize workflows and improve efficiency across your organization.",
      link: "/tools/productivity",
      bg: "bg-[#8B9EB0]",
      icon: "⚡"
    },
    {
      title: "Resource Allocation Planner",
      description: "Optimize how you allocate budget, time, and human resources across different projects and departments for maximum impact.",
      link: "/tools/resource-allocation",
      bg: "bg-[#6B7F95]",
      icon: "🎲"
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Operations & Efficiency
          </h2>
          <p className="text-gray-300 text-sm max-w-3xl">
            Streamline your operations and maximize efficiency. Tools to help you measure, analyze, and improve 
            how your business runs day-to-day.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className={`${tool.bg} rounded-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-[1.02]`}
            >
              <div className="text-white">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {tool.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// CTA SECTION
// Call-to-action for custom solutions
// =====================================================
const CTASection = () => {
  return (
    <section className="bg-[#8B9EB0] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Can't find the tool you're looking for? We create custom analysis tools and calculators 
            tailored to your specific business needs.
          </p>
          <button className="bg-white text-gray-700 px-8 py-4 rounded hover:shadow-xl transition-all duration-300 font-medium border border-gray-200 hover:scale-105">
            Request Custom Tool
          </button>
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
      <OperationsSection />
      <CTASection />
    </main>
  );
}