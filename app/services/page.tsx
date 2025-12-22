"use client";

import { useState } from "react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  color: string;
  timeline: string;
  pricing: {
    standard: string;
  };
  idealFor: string[];
  benefits: string[];
  process: Array<{
    step: string;
    description: string;
  }>;
}

const services: Service[] = [
  {
    id: "growth-forecasting",
    title: "Growth Forecasting",
    tagline: "Predictable revenue modeling with 90%+ accuracy",
    description: "Advanced statistical models to forecast growth trajectories, identify inflection points, and optimize resource allocation based on data-driven predictions.",
    icon: "📈",
    gradient: "bg-gradient-to-r from-[#002855] to-blue-800",
    color: "bg-[#002855]",
    timeline: "3-4 weeks",
    pricing: {
      standard: "$8,500"
    },
    idealFor: [
      "Series A-B startups",
      "High-growth SaaS companies",
      "VC-backed businesses"
    ],
    benefits: [
      "90%+ prediction accuracy on revenue forecasts",
      "Identify growth bottlenecks before they impact revenue",
      "Optimize hiring and spending based on predicted cash flow",
      "Quarterly forecasting updates included"
    ],
    process: [
      {
        step: "Data Collection",
        description: "Historical performance, market data, and growth metrics analysis"
      },
      {
        step: "Model Development",
        description: "Statistical modeling using regression, time-series analysis"
      },
      {
        step: "Scenario Analysis",
        description: "Multiple growth scenarios with probability assessment"
      },
      {
        step: "Implementation Plan",
        description: "Actionable recommendations with risk mitigation"
      }
    ]
  },
  {
    id: "market-entry",
    title: "Market Entry Strategy",
    tagline: "Data-driven entry with minimum 40% success probability",
    description: "Quantitative market analysis to identify optimal entry points, competitive positioning, and go-to-market strategy with calculated risk assessment.",
    icon: "🎯",
    gradient: "bg-gradient-to-r from-[#002855] to-blue-700",
    color: "bg-[#002855]",
    timeline: "4-5 weeks",
    pricing: {
      standard: "$12,000"
    },
    idealFor: [
      "Expanding to new regions",
      "New product category entry",
      "International expansion"
    ],
    benefits: [
      "Comprehensive competitor mapping with SWOT analysis",
      "Customer segmentation using clustering algorithms",
      "Pricing optimization using conjoint analysis",
      "Risk assessment with Monte Carlo simulations"
    ],
    process: [
      {
        step: "Market Sizing",
        description: "TAM, SAM, SOM calculation with growth projections"
      },
      {
        step: "Competitor Analysis",
        description: "Quantitative benchmarking and positioning strategy"
      },
      {
        step: "Entry Strategy",
        description: "Optimal entry method and timeline planning"
      },
      {
        step: "Risk Assessment",
        description: "Probability-weighted success analysis"
      }
    ]
  },
  {
    id: "operational-efficiency",
    title: "Operational Efficiency",
    tagline: "Process optimization delivering 25-40% cost reduction",
    description: "Workflow analysis and process optimization using queuing theory and linear programming to maximize throughput while minimizing costs.",
    icon: "⚙️",
    gradient: "bg-gradient-to-r from-[#002855] to-blue-600",
    color: "bg-[#002855]",
    timeline: "5-6 weeks",
    pricing: {
      standard: "$10,500"
    },
    idealFor: [
      "Manufacturing optimization",
      "Service delivery improvement",
      "Cost reduction initiatives"
    ],
    benefits: [
      "25-40% reduction in operational costs",
      "30%+ improvement in process efficiency",
      "Bottleneck identification using queuing theory",
      "Resource allocation optimization models"
    ],
    process: [
      {
        step: "Process Mapping",
        description: "Value stream mapping and bottleneck identification"
      },
      {
        step: "Data Analysis",
        description: "Statistical analysis of operational metrics"
      },
      {
        step: "Optimization Modeling",
        description: "Linear programming for resource allocation"
      },
      {
        step: "Implementation Roadmap",
        description: "Phased implementation with KPI tracking"
      }
    ]
  },
  {
    id: "pricing-strategy",
    title: "Pricing Strategy",
    tagline: "Value-based pricing with 15-30% margin improvement",
    description: "Advanced conjoint analysis and willingness-to-pay studies to optimize pricing across customer segments and product lines.",
    icon: "💰",
    gradient: "bg-gradient-to-r from-[#002855] to-blue-900",
    color: "bg-[#002855]",
    timeline: "3-4 weeks",
    pricing: {
      standard: "$7,500"
    },
    idealFor: [
      "B2B SaaS companies",
      "Product portfolio optimization",
      "New product launches"
    ],
    benefits: [
      "15-30% improvement in gross margins",
      "Customer segmentation for tiered pricing",
      "Competitive pricing analysis with positioning",
      "Dynamic pricing model development"
    ],
    process: [
      {
        step: "Value Analysis",
        description: "Customer willingness-to-pay assessment"
      },
      {
        step: "Competitive Benchmarking",
        description: "Pricing landscape and positioning analysis"
      },
      {
        step: "Pricing Model",
        description: "Optimized pricing structure development"
      },
      {
        step: "Implementation Plan",
        description: "Rollout strategy and change management"
      }
    ]
  },
  {
    id: "risk-assessment",
    title: "Quantitative Risk Assessment",
    tagline: "Probabilistic risk modeling with 95% confidence intervals",
    description: "Monte Carlo simulations and sensitivity analysis to quantify business risks and develop mitigation strategies with statistical confidence.",
    icon: "🛡️",
    gradient: "bg-gradient-to-r from-[#002855] to-blue-800",
    color: "bg-[#002855]",
    timeline: "4-5 weeks",
    pricing: {
      standard: "$9,000"
    },
    idealFor: [
      "Investment decision support",
      "Strategic initiative evaluation",
      "Regulatory compliance planning"
    ],
    benefits: [
      "95% confidence intervals for risk assessments",
      "Monte Carlo simulation for scenario analysis",
      "Sensitivity analysis for key variables",
      "Risk-adjusted return on investment calculations"
    ],
    process: [
      {
        step: "Risk Identification",
        description: "Comprehensive risk factor cataloging"
      },
      {
        step: "Probability Modeling",
        description: "Statistical probability distributions"
      },
      {
        step: "Simulation Analysis",
        description: "Monte Carlo and sensitivity analysis"
      },
      {
        step: "Mitigation Strategy",
        description: "Risk mitigation with contingency planning"
      }
    ]
  },
  {
    id: "customer-analytics",
    title: "Customer Analytics",
    tagline: "CLV optimization with 35%+ retention improvement",
    description: "Customer lifetime value modeling, churn prediction, and segmentation using machine learning algorithms to maximize customer profitability.",
    icon: "👥",
    gradient: "bg-gradient-to-r from-[#002855] to-blue-700",
    color: "bg-[#002855]",
    timeline: "5-6 weeks",
    pricing: {
      standard: "$11,000"
    },
    idealFor: [
      "Subscription-based businesses",
      "E-commerce optimization",
      "Customer retention focus"
    ],
    benefits: [
      "35%+ improvement in customer retention",
      "Customer lifetime value prediction models",
      "Churn prediction with 85%+ accuracy",
      "Segmentation for targeted marketing"
    ],
    process: [
      {
        step: "Data Collection",
        description: "Customer behavior and transaction data"
      },
      {
        step: "CLV Modeling",
        description: "Predictive modeling of customer lifetime value"
      },
      {
        step: "Segmentation Analysis",
        description: "Cluster analysis for customer segmentation"
      },
      {
        step: "Action Plan",
        description: "Personalized engagement strategies"
      }
    ]
  }
];

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-[#002855] text-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Productized Strategy Consulting
              <span className="block text-white/90">Powered by Quantitative Analysis</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Standardized frameworks with mathematical precision. Each service delivers measurable results 
              through data-driven methodologies, giving you control over your business trajectory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-[#002855] font-semibold rounded-md hover:bg-blue-50 transition-colors shadow text-center text-lg"
              >
                Schedule Diagnostic Call
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-center text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section id="services" className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Productized Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each service follows a standardized process with clear deliverables, timeline, and pricing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#002855] to-blue-700 flex items-center justify-center text-2xl text-white">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{service.pricing.standard}</div>
                    <div className="text-xs text-gray-500">Standard Package</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.idealFor.slice(0, 2).map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{service.timeline}</span>
                  <button className="text-[#002855] font-semibold text-sm hover:text-blue-900 transition-colors">
                    {expandedService === service.id ? 'View Less' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services View */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Details
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In-depth overview of each service including process, deliverables, and outcomes
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
                  expandedService === service.id ? 'shadow-lg' : ''
                }`}
              >
                {/* Service Header */}
                <div 
                  className={`${service.gradient} p-6 cursor-pointer`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center gap-6 mb-6 md:mb-0">
                      <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-3xl text-white">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-blue-100">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white mb-1">{service.pricing.standard}</div>
                      <div className="text-blue-200">Standard Package</div>
                      <div className="text-sm text-blue-100 mt-2">{service.timeline} timeline</div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedService === service.id && (
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column */}
                      <div className="lg:col-span-2 space-y-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Description</h4>
                          <p className="text-gray-700">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Ideal For</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.idealFor.map((item, idx) => (
                              <span 
                                key={idx}
                                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✓</span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - Process */}
                      <div>
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-6">Our Process</h4>
                          <div className="space-y-6">
                            {service.process.map((step, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 rounded-full bg-[#002855] flex items-center justify-center text-white font-bold text-sm">
                                    {idx + 1}
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <h5 className="font-medium text-gray-900 mb-1">{step.step}</h5>
                                  <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-2xl font-bold text-gray-900">{service.pricing.standard}</div>
                                <div className="text-sm text-gray-500">All-inclusive package</div>
                              </div>
                              <Link
                                href={`/services/${service.id}`}
                                className="px-6 py-3 bg-[#002855] text-white rounded-lg font-medium hover:bg-blue-900 transition-colors"
                              >
                                Book This Service
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-[#002855] to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready for Quantitative Strategy?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule your free diagnostic session to understand how our mathematical models 
              can transform your business trajectory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-[#002855] font-semibold rounded-md hover:bg-blue-50 transition-colors shadow"
              >
                Book Free Diagnostic
              </Link>
              <a 
                href="tel:+911234567890" 
                className="px-8 py-4 border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Call Now: +91 12345 67890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}