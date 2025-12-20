export interface ProcessStep {
  step: string;
  description: string;
}

export interface Meeting {
  type: string;
  count: string;
  duration: string;
  focus: string;
}

export interface Pricing {
  standard: string;
  premium: string;
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
  icon: string;
  color: string;
  gradient: string;
  scenario: string;
  benefits: string[];
  deliverables: string[];
  process: ProcessStep[];
  meetings: Meeting[];
  idealFor: string[];
  pricing: Pricing;
  timeline: string;
  cta: {
    text: string;
    href: string;
  };
}

export const services: Service[] = [
  {
    id: "diagnostic",
    title: "Diagnostic & Direction",
    shortTitle: "Diagnostic",
    description: "Comprehensive analysis to identify gaps, quantify opportunities, and chart your strategic path forward",
    tagline: "Identify gaps, quantify opportunities, and chart your path forward",
    icon: "🎯",
    color: "from-blue-600 to-blue-800",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    scenario: "Choose this service when you're facing strategic uncertainty, preparing for fundraising, or experiencing stagnant growth despite market potential. Perfect for startups that need clarity on their next moves.",
    benefits: [
      "Comprehensive 360-degree business health assessment",
      "Quantitative gap analysis with measurable metrics",
      "Data-driven opportunity identification and prioritization",
      "Clear strategic roadmap with actionable milestones",
      "Investor-ready positioning and narrative development"
    ],
    deliverables: [
      "Executive Business Diagnostic Report (40-50 pages)",
      "Quantitative Market Opportunity Analysis",
      "Competitive Positioning Matrix",
      "Strategic Roadmap with Quarterly Milestones",
      "KPI Dashboard Template",
      "Investor Positioning Brief"
    ],
    process: [
      {
        step: "Discovery & Data Collection",
        description: "Comprehensive assessment of current state, market position, and internal capabilities"
      },
      {
        step: "Quantitative Analysis",
        description: "Deep-dive into metrics, market data, and competitive landscape using mathematical models"
      },
      {
        step: "Strategic Synthesis",
        description: "Identify key gaps, opportunities, and develop prioritized action plans"
      },
      {
        step: "Roadmap Development",
        description: "Create detailed execution roadmap with clear milestones and success metrics"
      }
    ],
    meetings: [
      {
        type: "Kickoff Session",
        count: "1",
        duration: "2 hours",
        focus: "Align on objectives, data requirements, and timeline"
      },
      {
        type: "Progress Reviews",
        count: "2-3",
        duration: "1 hour each",
        focus: "Review findings, discuss insights, refine analysis"
      },
      {
        type: "Final Presentation",
        count: "1",
        duration: "3 hours",
        focus: "Present comprehensive findings and strategic roadmap"
      }
    ],
    idealFor: [
      "Startups with 6-18 months runway seeking strategic clarity",
      "Founders preparing for next fundraising round",
      "Companies experiencing growth plateau",
      "Teams facing multiple strategic options needing prioritization",
      "Startups requiring investor-ready strategic narrative"
    ],
    pricing: {
      standard: "₹4,50,000",
      premium: "₹6,50,000"
    },
    timeline: "3-4 weeks",
    cta: {
      text: "Start Your Diagnostic",
      href: "/contact?service=diagnostic"
    }
  },
  {
    id: "product-market-fit",
    title: "Product Market Fit",
    shortTitle: "PMF",
    description: "Validate demand, identify your perfect customer, and build products people actually want to buy",
    tagline: "Find your perfect customer, validate demand, and build what people actually want",
    icon: "🎪",
    color: "from-purple-600 to-purple-800",
    gradient: "bg-gradient-to-br from-purple-50 to-purple-100",
    scenario: "Essential for early-stage startups validating product ideas, companies with low retention rates, or businesses struggling to find their core customer segment. Use this when you need to confirm product-market fit before scaling.",
    benefits: [
      "Scientific validation of product-market fit using quantitative frameworks",
      "Precise customer segmentation with ICP definition",
      "Data-backed feature prioritization roadmap",
      "Retention and engagement optimization strategies",
      "Clear go/no-go recommendation with evidence"
    ],
    deliverables: [
      "Product-Market Fit Assessment Report (45-55 pages)",
      "Ideal Customer Profile (ICP) Definition",
      "Customer Segmentation Analysis",
      "Feature Priority Matrix",
      "Retention Improvement Playbook",
      "PMF Scorecard and Tracking Framework"
    ],
    process: [
      {
        step: "Customer Discovery",
        description: "In-depth interviews, surveys, and behavioral data analysis to understand customer needs"
      },
      {
        step: "Product Analysis",
        description: "Evaluate product usage patterns, engagement metrics, and value delivery"
      },
      {
        step: "Fit Assessment",
        description: "Quantify PMF score, identify gaps, and validate assumptions with data"
      },
      {
        step: "Optimization Roadmap",
        description: "Develop actionable plan to achieve or strengthen product-market fit"
      }
    ],
    meetings: [
      {
        type: "Kickoff Workshop",
        count: "1",
        duration: "3 hours",
        focus: "Product deep-dive, hypothesis formation, research plan"
      },
      {
        type: "Customer Research Sessions",
        count: "4-6",
        duration: "1 hour each",
        focus: "User interviews and feedback collection"
      },
      {
        type: "Findings Review",
        count: "2",
        duration: "1.5 hours each",
        focus: "Interim findings, adjust research direction"
      },
      {
        type: "Final Presentation",
        count: "1",
        duration: "2.5 hours",
        focus: "PMF assessment and optimization roadmap"
      }
    ],
    idealFor: [
      "Pre-seed to seed stage startups validating product ideas",
      "Products with low user retention or engagement",
      "Companies unsure about their target customer",
      "Teams building products based on assumptions vs. data",
      "Startups before major product development investment"
    ],
    pricing: {
      standard: "₹5,00,000",
      premium: "₹7,50,000"
    },
    timeline: "6-8 weeks",
    cta: {
      text: "Validate Your PMF",
      href: "/contact?service=product-market-fit"
    }
  },
  {
    id: "go-to-market",
    title: "Go To Market Strategy",
    shortTitle: "GTM",
    description: "Enter markets with precision, optimize acquisition channels, and scale customer acquisition efficiently",
    tagline: "Enter markets with precision, optimize channels, and scale efficiently",
    icon: "🚀",
    color: "from-emerald-600 to-emerald-800",
    gradient: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    scenario: "Critical for startups launching MVPs, entering new markets, or scaling customer acquisition. Use this when you need a data-driven plan to reach customers efficiently and cost-effectively.",
    benefits: [
      "Quantitative channel evaluation and prioritization",
      "Customer acquisition cost (CAC) optimization framework",
      "Market entry strategy with phased rollout plan",
      "Scalable sales and marketing playbook",
      "ROI-focused growth metrics and tracking"
    ],
    deliverables: [
      "Go-To-Market Strategy Document (50-60 pages)",
      "Channel Strategy & Prioritization Matrix",
      "Customer Acquisition Model & CAC Analysis",
      "90-Day Execution Playbook",
      "Marketing & Sales Collateral Guidelines",
      "Growth Metrics Dashboard"
    ],
    process: [
      {
        step: "Market Analysis",
        description: "Evaluate market size, competition, and entry barriers with quantitative models"
      },
      {
        step: "Channel Evaluation",
        description: "Test and model various acquisition channels for efficiency and scalability"
      },
      {
        step: "Strategy Development",
        description: "Design phased market entry plan with resource allocation and timelines"
      },
      {
        step: "Playbook Creation",
        description: "Build detailed execution playbook with tactics, budgets, and success metrics"
      }
    ],
    meetings: [
      {
        type: "Strategy Workshop",
        count: "1",
        duration: "3 hours",
        focus: "Market landscape, target segments, strategic options"
      },
      {
        type: "Channel Review Sessions",
        count: "3-4",
        duration: "1.5 hours each",
        focus: "Evaluate channel experiments and refine approach"
      },
      {
        type: "Final Strategy Review",
        count: "1",
        duration: "3 hours",
        focus: "Complete GTM strategy and execution playbook"
      }
    ],
    idealFor: [
      "Startups launching their MVP or new product lines",
      "Companies entering new geographic or customer segments",
      "Teams scaling from initial traction to growth phase",
      "Businesses with inefficient customer acquisition",
      "Founders needing systematic market entry approach"
    ],
    pricing: {
      standard: "₹4,00,000",
      premium: "₹6,00,000"
    },
    timeline: "4-6 weeks",
    cta: {
      text: "Build Your GTM Strategy",
      href: "/contact?service=go-to-market"
    }
  },
  {
    id: "fundraising",
    title: "Fundraising Readiness",
    shortTitle: "Fundraising",
    description: "Prepare, position, and pitch to investors with data-backed conviction and compelling narratives",
    tagline: "Prepare, position, and pitch to investors with data-backed conviction",
    icon: "💰",
    color: "from-amber-600 to-amber-800",
    gradient: "bg-gradient-to-br from-amber-50 to-amber-100",
    scenario: "Essential for startups preparing for seed or Series A funding rounds. Use this when you need to strengthen your investor narrative, validate your financial projections, or prepare comprehensive fundraising materials.",
    benefits: [
      "Investor-grade financial model with realistic projections",
      "Compelling narrative backed by quantitative evidence",
      "Competitive positioning and market sizing analysis",
      "Due diligence readiness assessment and gap closure",
      "Pitch deck optimization with data storytelling"
    ],
    deliverables: [
      "Fundraising Strategy Report (35-45 pages)",
      "Financial Model (3-5 year projections)",
      "Investor Pitch Deck (15-20 slides)",
      "Due Diligence Checklist & Data Room Prep",
      "Investor Targeting Matrix",
      "Pitch Training & Q&A Prep Document"
    ],
    process: [
      {
        step: "Readiness Assessment",
        description: "Evaluate current state, identify gaps, and assess fundraising positioning"
      },
      {
        step: "Financial Modeling",
        description: "Build robust financial projections with scenario analysis and key drivers"
      },
      {
        step: "Narrative Development",
        description: "Craft compelling investor story with data-backed market opportunity"
      },
      {
        step: "Materials Preparation",
        description: "Create pitch deck, financial model, and prepare for due diligence"
      }
    ],
    meetings: [
      {
        type: "Readiness Workshop",
        count: "1",
        duration: "2.5 hours",
        focus: "Assess current status, define fundraising goals"
      },
      {
        type: "Model Review Sessions",
        count: "3-4",
        duration: "1.5 hours each",
        focus: "Refine financial projections and assumptions"
      },
      {
        type: "Pitch Practice Sessions",
        count: "2-3",
        duration: "2 hours each",
        focus: "Rehearse pitch, refine messaging, Q&A prep"
      },
      {
        type: "Final Review",
        count: "1",
        duration: "2 hours",
        focus: "Final materials review and strategy alignment"
      }
    ],
    idealFor: [
      "Startups planning seed or Series A fundraise in 3-6 months",
      "Founders refining their investor narrative and positioning",
      "Companies needing robust financial projections",
      "Teams preparing for due diligence process",
      "Businesses with traction seeking growth capital"
    ],
    pricing: {
      standard: "₹5,50,000",
      premium: "₹8,00,000"
    },
    timeline: "5-6 weeks",
    cta: {
      text: "Prepare for Fundraising",
      href: "/contact?service=fundraising"
    }
  },
  {
    id: "turnaround",
    title: "Turnaround & Postmortem Analysis",
    shortTitle: "Turnaround",
    description: "Diagnose failures, identify viable pivots, and engineer data-driven comebacks",
    tagline: "Diagnose failures, identify pivots, and engineer successful comebacks",
    icon: "🔄",
    color: "from-red-600 to-red-800",
    gradient: "bg-gradient-to-br from-red-50 to-red-100",
    scenario: "For struggling startups needing strategic pivots, businesses analyzing past failures, or companies requiring rapid course correction. Use this when conventional strategies have failed and you need objective, data-driven intervention.",
    benefits: [
      "Objective failure analysis without emotional bias",
      "Quantitative assessment of pivot opportunities",
      "Rapid turnaround strategy with clear priorities",
      "Resource optimization and runway extension planning",
      "Actionable comeback roadmap with success metrics"
    ],
    deliverables: [
      "Turnaround Analysis Report (40-50 pages)",
      "Root Cause Analysis with Data Evidence",
      "Pivot Options Evaluation Matrix",
      "Rapid Action Plan (30-60-90 days)",
      "Resource Reallocation Strategy",
      "Recovery Metrics Dashboard"
    ],
    process: [
      {
        step: "Diagnostic Review",
        description: "Comprehensive analysis of what went wrong, backed by data and metrics"
      },
      {
        step: "Opportunity Assessment",
        description: "Evaluate viable pivot options and turnaround scenarios quantitatively"
      },
      {
        step: "Strategy Formulation",
        description: "Develop rapid action plan with clear priorities and resource allocation"
      },
      {
        step: "Execution Planning",
        description: "Create detailed 30-60-90 day plan with accountability framework"
      }
    ],
    meetings: [
      {
        type: "Diagnostic Session",
        count: "1",
        duration: "3 hours",
        focus: "Deep-dive into current challenges and historical data"
      },
      {
        type: "Analysis Review",
        count: "2-3",
        duration: "1.5 hours each",
        focus: "Review findings, explore pivot options"
      },
      {
        type: "Strategy Workshop",
        count: "1",
        duration: "4 hours",
        focus: "Finalize turnaround strategy and action plan"
      },
      {
        type: "Implementation Kickoff",
        count: "1",
        duration: "2 hours",
        focus: "Launch execution plan with team alignment"
      }
    ],
    idealFor: [
      "Startups experiencing declining metrics or runway crisis",
      "Founders considering strategic pivot decisions",
      "Companies analyzing failed initiatives for learning",
      "Teams needing objective third-party assessment",
      "Businesses requiring rapid course correction"
    ],
    pricing: {
      standard: "₹3,50,000",
      premium: "₹5,50,000"
    },
    timeline: "4-5 weeks",
    cta: {
      text: "Start Your Turnaround",
      href: "/contact?service=turnaround"
    }
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getRelatedServices = (currentId: string, count: number = 3): Service[] => {
  return services.filter(service => service.id !== currentId).slice(0, count);
};