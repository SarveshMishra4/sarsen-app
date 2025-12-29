// app/data/services.ts

import { Service } from './types';

// =====================================================
// ALL SERVICES DATA
// Add all your services here following this structure
// =====================================================
export const servicesData: Service[] = [
  
  // SERVICE 1: Go-to-Market Strategy
  {
    slug: "go-to-market-strategy",
    title: "Go-to-Market Strategy",
    shortDescription: "Know exactly who to target, where to find them, and what to say—so you stop wasting money on marketing that doesn't work.",
    price: "₹30,000",
    duration: "2 weeks",
    category: "Growth & Revenue Strategy",
    
    hero: {
      headline: "Stop Guessing Who Your Customer Is",
      subheadline: "Get a complete, execution-ready go-to-market plan that identifies your ideal customers, best channels, and winning messages—delivered in 2 weeks.",
      ctaText: "Book Discovery Call"
    },
    
    overview: "You've built something great, but customers aren't coming consistently. You've tried Facebook ads, LinkedIn, maybe cold emails—but nothing seems to work predictably. You're burning ₹50K-2L on marketing with unclear ROI. This service gives you a complete, execution-ready GTM plan based on proven frameworks used by ₹100Cr+ companies—adapted for your stage and budget.",
    
    idealFor: {
      title: "This Service Is Perfect For:",
      points: [
        "Businesses with product/service ready but struggling to get consistent customers (₹0-50L revenue)",
        "Founders who've tried marketing but nothing's working predictably",
        "B2B services, SaaS, D2C, manufacturing—any sector needing systematic customer acquisition",
        "Teams wasting money on random marketing tactics without a clear strategy",
        "Businesses ready to invest 2 weeks to get 18 months of clarity"
      ]
    },
    
    deliverables: {
      title: "What You'll Receive (Tangible Outputs):",
      items: [
        {
          name: "Ideal Customer Profile Document (5-8 pages)",
          description: "Complete breakdown of demographics, psychographics, pain points, buying behavior, decision-making process, and where they spend time online/offline"
        },
        {
          name: "Market Segmentation Analysis (Excel + 3-page report)",
          description: "3-5 customer segments identified with TAM-SAM-SOM calculation for each, plus prioritization matrix showing which segment to target first"
        },
        {
          name: "Channel Strategy Roadmap (10-page document)",
          description: "5-7 specific marketing channels identified for YOUR business, cost per acquisition estimates per channel, and 90-day testing plan with success metrics"
        },
        {
          name: "Messaging Framework (One-pager + scripts)",
          description: "Your value proposition in one clear sentence, pain-agitate-solution messaging, feature-benefit translation, objection handling scripts, and 10 ready-to-use social media post templates"
        },
        {
          name: "90-Day GTM Action Plan (Excel tracker)",
          description: "Week-by-week tasks, budget allocation, responsibility assignments, success/failure criteria, and pivot triggers"
        }
      ]
    },
    
    process: {
      title: "How We Work (Session-by-Session):",
      steps: [
        {
          number: "01",
          title: "Customer Discovery & ICP Building",
          description: "Deep dive into who your customers really are, their pain points, and buying behavior. We'll interview existing customers (if any) and analyze your market comprehensively.",
          duration: "90 minutes"
        },
        {
          number: "02",
          title: "Market Segmentation & Sizing",
          description: "Identify 3-5 potential customer segments, calculate TAM-SAM-SOM for each, and prioritize based on revenue potential and ease of acquisition.",
          duration: "90 minutes"
        },
        {
          number: "03",
          title: "Channel Identification & Prioritization",
          description: "Map out 5-7 channels where your customers are active, estimate costs and conversion rates, then create a testing plan for the next 90 days.",
          duration: "60 minutes"
        },
        {
          number: "04",
          title: "Messaging & Positioning Workshop",
          description: "Craft your value proposition, create pain-agitate-solution messaging, translate features to benefits, and prepare objection handlers.",
          duration: "90 minutes"
        },
        {
          number: "05",
          title: "90-Day Action Plan & Handoff",
          description: "Build week-by-week execution plan, assign responsibilities, set budgets, define success metrics, and prepare for implementation.",
          duration: "60 minutes"
        }
      ]
    },
    
    outcomes: {
      title: "Expected Outcomes:",
      points: [
        "Know EXACTLY who your ideal customer is (not vague 'SMBs' or 'millennials')",
        "Have a clear list of 5-7 channels to test, prioritized by likelihood of success",
        "Stop wasting money on channels that don't work for your business model",
        "Compress 18 months of trial-and-error into 1 quarter of focused testing",
        "Sales and marketing teams aligned on who to target and what to say",
        "Clear metrics to know if your GTM is working or needs adjustment"
      ]
    },
    
    pricing: {
      basePrice: "₹30,000",
      details: "Fixed price, all-inclusive. No hourly billing surprises. Includes all 5 sessions, all deliverables, and 2 follow-up emails post-engagement.",
      paymentTerms: "100% upfront payment required before Session 1. All deliverables provided within 2 weeks of engagement start."
    },
    
    faqs: [
      {
        question: "How is this different from hiring a marketing agency?",
        answer: "Marketing agencies execute campaigns. We give you the strategy and plan—what to do, who to target, where to focus. You can then execute internally or hire an agency to implement our plan. Think of us as the architects; agencies are the builders."
      },
      {
        question: "What if we've already tried some marketing channels?",
        answer: "Perfect. We'll analyze what you've tried, why it didn't work, and either fix your approach or redirect you to better channels. Your past experiments give us valuable data to build a better strategy."
      },
      {
        question: "Do you execute the marketing for us?",
        answer: "No. We provide the strategy, plan, and frameworks. Your team executes. However, we can recommend execution partners if needed, or you can hire us for ongoing advisory through a separate retainer arrangement."
      },
      {
        question: "What if our business model is unique or complex?",
        answer: "We've worked with SaaS, D2C, B2B services, manufacturing, marketplaces, and more. Every business thinks they're unique—but GTM frameworks are universal. We'll adapt our proven approach to your specific model and constraints."
      }
    ],
    
    relatedServices: [
      "sales-system-setup",
      "pricing-strategy-overhaul",
      "customer-retention-system"
    ],
    
    seo: {
      title: "Go-to-Market Strategy for Startups | Sareen & Company",
      description: "Get a complete GTM strategy in 2 weeks. Identify ideal customers, best channels, and winning messages. ₹30,000 fixed price.",
      keywords: ["go-to-market strategy", "GTM consulting India", "customer acquisition strategy", "marketing strategy startups", "B2B GTM plan"]
    }
  },

  // SERVICE 2: Fundraising Readiness
  {
    slug: "fundraising-readiness",
    title: "Fundraising Readiness",
    shortDescription: "Walk into investor meetings with bulletproof financials and strategy—so you raise capital, not get rejected.",
    price: "₹35,000",
    duration: "2 weeks",
    category: "Financial Planning & Capital",
    
    hero: {
      headline: "Stop Getting Rejected by Investors",
      subheadline: "Get investor-ready financials, funding strategy, and pitch preparation that passes due diligence—delivered in 2 weeks.",
      ctaText: "Book Discovery Call"
    },
    
    overview: "Investors reject 95% of pitches because the financials don't add up or the funding strategy is unclear. You need more than just a pitch deck—you need a bulletproof financial model, clear use of funds, investor targeting strategy, and due diligence readiness. This service delivers everything investors want to see before they write a check.",
    
    idealFor: {
      title: "This Service Is Perfect For:",
      points: [
        "Startups planning to raise ₹50L-3Cr in the next 3-6 months",
        "Founders who've pitched before but keep getting rejected on 'financials unclear'",
        "Businesses with ₹10L-2Cr revenue ready for their first institutional round",
        "Teams that need to model multiple scenarios (best case, worst case, realistic)",
        "Entrepreneurs who want to walk into investor meetings fully prepared, not winging it"
      ]
    },
    
    deliverables: {
      title: "What You'll Receive (Tangible Outputs):",
      items: [
        {
          name: "3-Year Financial Model (Unlocked Excel)",
          description: "Complete P&L projections, cash flow statements, unit economics breakdown, and scenario planning. Fully editable with formulas exposed so you can adjust assumptions."
        },
        {
          name: "Funding Requirements Document (8-10 pages)",
          description: "How much to raise with detailed justification, use of funds breakdown, milestone-based spending plan, and dilution calculator showing ownership impact."
        },
        {
          name: "Investor Targeting Strategy",
          description: "20 relevant investors mapped with investment thesis match analysis, ticket size alignment, sector focus, and warm intro pathways where possible."
        },
        {
          name: "Pitch Deck Framework (15-20 pages)",
          description: "Slide-by-slide guidance on what data to include, how to present financials, common investor questions, and red flags to avoid. NOT the deck itself—guidance to build yours."
        },
        {
          name: "Due Diligence Checklist",
          description: "Complete document list investors will request, data room structure recommendations, red flag identification, and fixes to implement before fundraising."
        }
      ]
    },
    
    process: {
      title: "How We Work (Session-by-Session):",
      steps: [
        {
          number: "01",
          title: "Business Model Deep Dive",
          description: "Understand your revenue model, unit economics, cost structure, and growth assumptions. Review any existing financials and identify gaps.",
          duration: "90 minutes"
        },
        {
          number: "02",
          title: "Revenue Streams & Pricing",
          description: "Break down all revenue sources, validate pricing strategy, model growth rates, account for seasonality, and build revenue projections.",
          duration: "60 minutes"
        },
        {
          number: "03",
          title: "Cost Structure & Unit Economics",
          description: "Map all costs (COGS, operating expenses, people costs), calculate unit economics (CAC, LTV, payback period), and model break-even scenarios.",
          duration: "90 minutes"
        },
        {
          number: "04",
          title: "Funding Strategy & Use of Funds",
          description: "Determine optimal raise amount (18-24 month runway), create milestone-based use of funds, model dilution scenarios, and prepare investor positioning.",
          duration: "60 minutes"
        },
        {
          number: "05",
          title: "Investor Landscape & Targeting",
          description: "Map investor landscape, identify 20 best-fit investors, analyze investment theses, create outreach strategy, and prepare pitch Q&A.",
          duration: "90 minutes"
        },
        {
          number: "06",
          title: "Pitch Preparation & Due Diligence",
          description: "Review pitch deck framework, practice investor Q&A, prepare due diligence documents, and create post-pitch follow-up strategy.",
          duration: "60 minutes"
        }
      ]
    },
    
    outcomes: {
      title: "Expected Outcomes:",
      points: [
        "Financial model that passes investor scrutiny (95% of founders get rejected on this)",
        "Clear funding amount with rock-solid justification (not 'we need ₹2Cr because')",
        "Know exactly which 20 investors to target and why they'd invest in you",
        "Pitch deck guidance that covers every question investors will ask",
        "Due diligence readiness so you don't scramble when investors ask for documents",
        "Confidence walking into investor meetings—you've thought through everything"
      ]
    },
    
    pricing: {
      basePrice: "₹35,000",
      details: "Fixed price, all-inclusive. Includes 6 sessions, all deliverables, and 2 follow-up email consultations after delivery.",
      paymentTerms: "100% upfront payment required before Session 1. All deliverables provided within 2 weeks."
    },
    
    faqs: [
      {
        question: "Do you guarantee we'll raise funding?",
        answer: "No. We prepare you to be investor-ready, but fundraising success depends on many factors (market conditions, your execution, investor appetite, timing). However, having bulletproof financials dramatically increases your chances—most rejections happen because financials are weak."
      },
      {
        question: "Can you introduce us to investors?",
        answer: "We can identify the right investors for you and suggest warm intro pathways where possible. However, we're not a fundraising broker or placement agent. Our focus is making YOU ready to approach investors confidently."
      },
      {
        question: "What if our financials are already prepared?",
        answer: "Great! We'll audit them, identify gaps or red flags, and strengthen them. Most 'prepared' financials have issues that investors spot immediately. We'll make sure yours passes scrutiny."
      },
      {
        question: "Is this only for tech startups?",
        answer: "No. We work with any business raising institutional capital—SaaS, D2C, manufacturing, services, marketplaces, etc. Investor expectations are similar across sectors, though specific metrics vary."
      }
    ],
    
    relatedServices: [
      "financial-model-projections",
      "business-valuation-exit-readiness",
      "go-to-market-strategy"
    ],
    
    seo: {
      title: "Fundraising Readiness for Indian Startups | Sareen & Company",
      description: "Get investor-ready in 2 weeks. Financial models, funding strategy, investor targeting. ₹35,000 fixed price. Book discovery call.",
      keywords: ["fundraising preparation", "investor pitch preparation", "startup financial model", "seed funding India", "Series A preparation"]
    }
  },

  // Add remaining 23 services following the same structure...
  // For brevity, I'm showing 2 complete examples
  // You should add all 25 services here

];

// =====================================================
// HELPER FUNCTIONS
// These make it easy to work with services data
// =====================================================

// Get single service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug);
}

// Get all service slugs (used for static generation)
export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}

// Get services by category
export function getServicesByCategory(category: string): Service[] {
  return servicesData.filter(service => service.category === category);
}

// Get related services
export function getRelatedServices(slugs: string[]): Service[] {
  return servicesData.filter(service => slugs.includes(service.slug));
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = servicesData.map(service => service.category);
  return Array.from(new Set(categories));
}