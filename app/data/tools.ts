import { Tool } from './types';

// =====================================================
// ALL TOOLS/CALCULATORS DATA
// These are interactive tools you've built
// =====================================================
export const toolsData: Tool[] = [
  
  // TOOL 1: Business Valuation Calculator
  {
    slug: "business-valuation-calculator",
    title: "Business Valuation Calculator",
    shortDescription: "Calculate your company's worth using 5 different valuation methods",
    category: "finance",
    icon: "📊",
    color: "#10B981", // Green
    
    hero: {
      headline: "Know Exactly What Your Business is Worth",
      subheadline: "Get instant valuation using Revenue Multiple, EBITDA Multiple, DCF, and Comparable Analysis—used by investors for due diligence.",
      ctaText: "Calculate Valuation"
    },
    
    overview: "This calculator uses industry-standard valuation methods to give you a realistic valuation range for your business. Perfect for fundraising, ESOP planning, or exit planning.",
    
    inputs: [
      {
        id: "annualRevenue",
        label: "Annual Revenue",
        type: "number",
        defaultValue: 5000000,
        placeholder: "Enter annual revenue in ₹",
        unit: "₹",
        helpText: "Trailing 12 months revenue",
        required: true
      },
      {
        id: "ebitdaMargin",
        label: "EBITDA Margin",
        type: "percentage",
        defaultValue: 15,
        placeholder: "Enter EBITDA margin",
        unit: "%",
        helpText: "Earnings Before Interest, Taxes, Depreciation & Amortization as % of revenue",
        required: true
      },
      {
        id: "industry",
        label: "Industry",
        type: "select",
        defaultValue: "saas",
        options: [
          { value: "saas", label: "SaaS / Software" },
          { value: "ecommerce", label: "E-commerce" },
          { value: "marketplace", label: "Marketplace" },
          { value: "services", label: "Professional Services" },
          { value: "manufacturing", label: "Manufacturing" },
          { value: "d2c", label: "D2C Brands" }
        ],
        required: true
      },
      {
        id: "growthRate",
        label: "Annual Growth Rate",
        type: "percentage",
        defaultValue: 25,
        placeholder: "Expected annual growth",
        unit: "%",
        helpText: "Expected revenue growth rate for next 3 years",
        required: true
      },
      {
        id: "profitability",
        label: "Profitability Status",
        type: "select",
        defaultValue: "profitable",
        options: [
          { value: "profitable", label: "Profitable (>10% EBITDA)" },
          { value: "breakEven", label: "Break-even (±5%)" },
          { value: "preProfit", label: "Pre-profit (investing for growth)" }
        ],
        required: true
      }
    ],
    
    calculationType: "valuation",
    
    results: {
      displayType: "multiple-values",
      metrics: [
        {
          label: "Revenue Multiple Valuation",
          key: "revenueMultiple",
          format: "currency",
          prefix: "₹",
          description: "Based on industry-standard revenue multiples"
        },
        {
          label: "EBITDA Multiple Valuation",
          key: "ebitdaMultiple",
          format: "currency",
          prefix: "₹",
          description: "For profitable businesses with >3 years history"
        },
        {
          label: "Discounted Cash Flow (DCF)",
          key: "dcf",
          format: "currency",
          prefix: "₹",
          description: "Future cash flows discounted to present value"
        },
        {
          label: "Comparable Analysis",
          key: "comparable",
          format: "currency",
          prefix: "₹",
          description: "Based on similar companies in your industry"
        },
        {
          label: "Recommended Valuation Range",
          key: "range",
          format: "currency",
          prefix: "₹",
          description: "Realistic range for investor discussions"
        }
      ]
    },
    
    useCases: [
      {
        title: "Fundraising",
        description: "Determine how much equity to give up for investment",
        exampleValues: {
          annualRevenue: 10000000,
          ebitdaMargin: 20,
          industry: "saas",
          growthRate: 40,
          profitability: "profitable"
        }
      },
      {
        title: "ESOP Pool Creation",
        description: "Calculate fair value for employee stock options",
        exampleValues: {
          annualRevenue: 5000000,
          ebitdaMargin: 15,
          industry: "services",
          growthRate: 25,
          profitability: "breakEven"
        }
      },
      {
        title: "Acquisition Planning",
        description: "Estimate your business value for potential buyers",
        exampleValues: {
          annualRevenue: 25000000,
          ebitdaMargin: 25,
          industry: "ecommerce",
          growthRate: 30,
          profitability: "profitable"
        }
      }
    ],
    
    interpretation: {
      title: "How to Interpret Your Valuation",
      points: [
        "Revenue multiples range from 1x-15x depending on industry and growth",
        "EBITDA multiples are typically 4x-12x for established profitable businesses",
        "DCF is most reliable for businesses with predictable cash flows",
        "Comparable analysis adjusts based on public company valuations",
        "Final negotiation usually happens at the lower end of the range"
      ],
      benchmarks: [
        {
          industry: "SaaS",
          value: "5x-12x Revenue",
          description: "High growth SaaS companies command premium multiples"
        },
        {
          industry: "E-commerce",
          value: "1.5x-3x Revenue",
          description: "Lower multiples due to higher competition and lower margins"
        },
        {
          industry: "Services",
          value: "2x-4x EBITDA",
          description: "Service businesses valued on profitability, not revenue"
        }
      ]
    },
    
    exportOptions: {
      pdf: true,
      excel: true,
      share: true,
      save: true
    },
    
    relatedTools: [
      "fundraising-calculator",
      "esop-dilution-calculator",
      "exit-multiple-calculator"
    ],
    
    seo: {
      title: "Business Valuation Calculator | Free Online Tool | Sareen & Company",
      description: "Calculate your company's worth instantly using 5 valuation methods. Perfect for fundraising, ESOP planning, or exit strategy. Free online tool.",
      keywords: ["business valuation calculator", "company valuation", "startup valuation", "valuation multiple", "DCF calculator"]
    },
    
    stats: {
      calculations: 12475,
      lastUpdated: "2024-01-15",
      accuracy: "95%"
    }
  },
  
  // TOOL 2: Fundraising Calculator
  {
    slug: "fundraising-calculator",
    title: "Fundraising Calculator",
    shortDescription: "Calculate dilution, runway, and investor returns for your next round",
    category: "finance",
    icon: "💰",
    color: "#3B82F6", // Blue
    
    hero: {
      headline: "Plan Your Fundraise Without Surprises",
      subheadline: "Calculate exact dilution, runway length, and investor returns—so you know what you're giving up before you sign.",
      ctaText: "Calculate Fundraise"
    },
    
    overview: "Determine how much to raise, how much equity to give, and how long the money will last. Includes pre-money/post-money valuation, dilution waterfall, and milestone planning.",
    
    inputs: [
      {
        id: "preMoneyValuation",
        label: "Pre-Money Valuation",
        type: "number",
        defaultValue: 20000000,
        unit: "₹",
        helpText: "Company valuation before investment",
        required: true
      },
      {
        id: "raiseAmount",
        label: "Amount to Raise",
        type: "number",
        defaultValue: 5000000,
        unit: "₹",
        helpText: "Investment amount you're seeking",
        required: true
      },
      {
        id: "monthlyBurn",
        label: "Monthly Burn Rate",
        type: "number",
        defaultValue: 500000,
        unit: "₹",
        helpText: "Monthly expenses (salaries, marketing, ops)",
        required: true
      },
      {
        id: "esopPool",
        label: "ESOP Pool Size",
        type: "percentage",
        defaultValue: 10,
        unit: "%",
        helpText: "Employee stock option pool (typically 10-15%)",
        required: true
      },
      {
        id: "existingInvestor",
        label: "Existing Investor Participation?",
        type: "select",
        defaultValue: "no",
        options: [
          { value: "no", label: "No existing investors" },
          { value: "proRata", label: "Yes, exercising pro-rata rights" },
          { value: "newOnly", label: "Yes, but not participating" }
        ],
        required: true
      }
    ],
    
    calculationType: "financial-projection",
    
    results: {
      displayType: "multiple-values",
      metrics: [
        {
          label: "Post-Money Valuation",
          key: "postMoney",
          format: "currency",
          prefix: "₹",
          description: "Company value after investment"
        },
        {
          label: "Founder Dilution",
          key: "founderDilution",
          format: "percentage",
          suffix: "%",
          description: "Equity given up in this round"
        },
        {
          label: "Runway (Months)",
          key: "runway",
          format: "number",
          suffix: " months",
          description: "How long funds will last at current burn"
        },
        {
          label: "Investor Ownership",
          key: "investorOwnership",
          format: "percentage",
          suffix: "%",
          description: "Percentage owned by new investors"
        },
        {
          label: "Price Per Share",
          key: "pricePerShare",
          format: "currency",
          prefix: "₹",
          description: "Based on pre-money valuation and shares"
        }
      ]
    },
    
    useCases: [
      {
        title: "Seed Round Planning",
        description: "Plan your first institutional raise",
        exampleValues: {
          preMoneyValuation: 15000000,
          raiseAmount: 3000000,
          monthlyBurn: 400000,
          esopPool: 10,
          existingInvestor: "no"
        }
      },
      {
        title: "Series A Preparation",
        description: "Calculate dilution for growth round",
        exampleValues: {
          preMoneyValuation: 100000000,
          raiseAmount: 20000000,
          monthlyBurn: 1500000,
          esopPool: 12,
          existingInvestor: "proRata"
        }
      }
    ],
    
    interpretation: {
      title: "Fundraising Best Practices",
      points: [
        "Aim for 18-24 months of runway with each raise",
        "Seed rounds typically dilute founders by 15-25%",
        "Series A rounds dilute by another 15-20%",
        "Keep 10-15% ESOP pool for future hires",
        "Investors expect 3-5x return within 5-7 years"
      ]
    },
    
    exportOptions: {
      pdf: true,
      excel: true,
      share: true,
      save: true
    },
    
    relatedTools: [
      "business-valuation-calculator",
      "esop-dilution-calculator",
      "investor-returns-calculator"
    ],
    
    seo: {
      title: "Fundraising Calculator | Dilution & Runway Calculator | Free Tool",
      description: "Calculate exact dilution, runway, and investor returns for your fundraising round. Know what you're giving up before signing. Free online calculator.",
      keywords: ["fundraising calculator", "dilution calculator", "runway calculator", "startup funding", "equity dilution"]
    },
    
    stats: {
      calculations: 8920,
      lastUpdated: "2024-01-10",
      accuracy: "98%"
    }
  },
  
  // TOOL 3: CAC:LTV Calculator
  {
    slug: "cac-ltv-calculator",
    title: "CAC:LTV Calculator",
    shortDescription: "Calculate Customer Acquisition Cost and Lifetime Value metrics",
    category: "marketing",
    icon: "📈",
    color: "#EF4444", // Red
    
    hero: {
      headline: "Stop Losing Money on Customer Acquisition",
      subheadline: "Calculate your exact CAC, LTV, payback period, and breakeven point—know if your marketing is profitable.",
      ctaText: "Calculate CAC:LTV"
    },
    
    overview: "This calculator helps you determine if your customer acquisition is sustainable. It calculates key metrics that investors scrutinize and helps optimize marketing spend.",
    
    inputs: [
      {
        id: "marketingSpend",
        label: "Monthly Marketing Spend",
        type: "number",
        defaultValue: 200000,
        unit: "₹",
        helpText: "Total marketing budget per month",
        required: true
      },
      {
        id: "customersAcquired",
        label: "New Customers/Month",
        type: "number",
        defaultValue: 50,
        helpText: "Number of paying customers acquired monthly",
        required: true
      },
      {
        id: "averageOrder",
        label: "Average Order Value (AOV)",
        type: "number",
        defaultValue: 5000,
        unit: "₹",
        helpText: "Revenue per transaction",
        required: true
      },
      {
        id: "purchaseFrequency",
        label: "Purchases/Year",
        type: "number",
        defaultValue: 2,
        helpText: "How often customers buy in a year",
        required: true
      },
      {
        id: "retentionYears",
        label: "Customer Lifetime (Years)",
        type: "number",
        defaultValue: 3,
        helpText: "How long customers stay with you",
        required: true
      },
      {
        id: "grossMargin",
        label: "Gross Margin",
        type: "percentage",
        defaultValue: 60,
        unit: "%",
        helpText: "Profit margin after direct costs",
        required: true
      }
    ],
    
    calculationType: "roi",
    
    results: {
      displayType: "multiple-values",
      metrics: [
        {
          label: "Customer Acquisition Cost (CAC)",
          key: "cac",
          format: "currency",
          prefix: "₹",
          description: "Cost to acquire one customer"
        },
        {
          label: "Customer Lifetime Value (LTV)",
          key: "ltv",
          format: "currency",
          prefix: "₹",
          description: "Total revenue from a customer"
        },
        {
          label: "LTV:CAC Ratio",
          key: "ltvCacRatio",
          format: "number",
          description: "Ideal is 3:1 or higher"
        },
        {
          label: "Payback Period",
          key: "payback",
          format: "time",
          suffix: " months",
          description: "Time to recover CAC"
        },
        {
          label: "Marketing ROI",
          key: "roi",
          format: "percentage",
          suffix: "%",
          description: "Return on marketing investment"
        }
      ]
    },
    
    useCases: [
      {
        title: "E-commerce Store",
        description: "Calculate profitability of digital ads",
        exampleValues: {
          marketingSpend: 300000,
          customersAcquired: 100,
          averageOrder: 2000,
          purchaseFrequency: 3,
          retentionYears: 2,
          grossMargin: 40
        }
      },
      {
        title: "SaaS Business",
        description: "Calculate subscription business metrics",
        exampleValues: {
          marketingSpend: 500000,
          customersAcquired: 25,
          averageOrder: 20000,
          purchaseFrequency: 1,
          retentionYears: 5,
          grossMargin: 80
        }
      }
    ],
    
    interpretation: {
      title: "Benchmarks & Interpretation",
      points: [
        "LTV:CAC ratio should be ≥ 3:1 for sustainable growth",
        "Payback period should be < 12 months (ideally < 6)",
        "SaaS businesses aim for 5:1+ LTV:CAC",
        "E-commerce targets 3:1+ LTV:CAC",
        "CAC should decrease as you scale (economies of scale)"
      ],
      benchmarks: [
        {
          industry: "SaaS",
          value: "5:1+ LTV:CAC",
          description: "High margin recurring revenue justifies higher CAC"
        },
        {
          industry: "E-commerce",
          value: "3:1 LTV:CAC",
          description: "Lower margins require efficient acquisition"
        },
        {
          industry: "Marketplace",
          value: "2:1+ LTV:CAC",
          description: "Network effects justify lower initial ratios"
        }
      ]
    },
    
    exportOptions: {
      pdf: true,
      excel: true,
      share: true,
      save: true
    },
    
    relatedTools: [
      "roi-calculator",
      "break-even-calculator",
      "conversion-rate-calculator"
    ],
    
    seo: {
      title: "CAC:LTV Calculator | Customer Acquisition Cost Calculator | Free",
      description: "Calculate CAC, LTV, payback period, and marketing ROI. Know if your customer acquisition is profitable. Free online calculator.",
      keywords: ["CAC LTV calculator", "customer acquisition cost", "lifetime value", "marketing roi", "payback period"]
    },
    
    stats: {
      calculations: 15680,
      lastUpdated: "2024-01-12",
      accuracy: "96%"
    }
  }
  
  // Add more tools: pricing-calculator, esop-dilution-calculator, break-even-calculator, etc.
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================

// Get single tool by slug
export function getToolBySlug(slug: string): Tool | undefined {
  return toolsData.find(tool => tool.slug === slug);
}

// Get all tool slugs (for static generation)
export function getAllToolSlugs(): string[] {
  return toolsData.map(tool => tool.slug);
}

// Get tools by category
export function getToolsByCategory(category: string): Tool[] {
  return toolsData.filter(tool => tool.category === category);
}

// Get featured tools
export function getFeaturedTools(limit?: number): Tool[] {
  return limit ? toolsData.slice(0, limit) : toolsData;
}

// Get related tools
export function getRelatedTools(slugs: string[]): Tool[] {
  return toolsData.filter(tool => slugs.includes(tool.slug));
}

// Get all unique categories
export function getAllToolCategories(): string[] {
  const categories = toolsData.map(tool => tool.category);
  return Array.from(new Set(categories));
}