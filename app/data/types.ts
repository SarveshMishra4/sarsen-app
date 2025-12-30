// app/data/types.ts

// =====================================================
// SERVICE DATA STRUCTURE
// Defines the shape of each service object
// =====================================================
export interface Service {
  // Basic Info (used everywhere)
  slug: string;                    // URL identifier (e.g., "go-to-market-strategy")
  title: string;                   // Full service name
  shortDescription: string;        // One-liner for cards/previews
  price: string;                   // e.g., "₹30,000"
  duration: string;                // e.g., "2 weeks"
  category: string;                // e.g., "Growth & Revenue Strategy"
  
  // Hero Section Data
  hero: {
    headline: string;              // Main hero headline
    subheadline: string;           // Supporting text
    ctaText: string;               // Button text
  };
  
  // Overview Section
  overview: string;                // Long-form description
  
  // Ideal For Section
  idealFor: {
    title: string;
    points: string[];              // Array of bullet points
  };
  
  // Deliverables Section
  deliverables: {
    title: string;
    items: Array<{
      name: string;                // Deliverable name
      description: string;         // What it includes
    }>;
  };
  
  // Process Section
  process: {
    title: string;
    steps: Array<{
      number: string;              // "01", "02", etc.
      title: string;               // Step title
      description: string;         // Step details
      duration: string;            // Time per step
    }>;
  };
  
  // Outcomes Section
  outcomes: {
    title: string;
    points: string[];              // Expected results
  };
  
  // Pricing Section
  pricing: {
    basePrice: string;
    details: string;
    paymentTerms: string;
  };
  
  // FAQ Section
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // Related Services (for cross-linking)
  relatedServices: string[];       // Array of slugs
  
  // SEO Metadata
  seo: {
    title: string;                 // Page title for search engines
    description: string;           // Meta description
    keywords: string[];            // SEO keywords
  };
}

// Add this to your existing types.ts file

// =====================================================
// TOOL/CALCULATOR DATA STRUCTURE
// Resources are actually interactive tools
// =====================================================
export interface Tool {
  // Basic Info
  slug: string;                    // URL identifier (e.g., "valuation-calculator")
  title: string;                   // Tool title
  shortDescription: string;        // One-liner
  category: 'finance' | 'sales' | 'marketing' | 'operations' | 'hr' | 'legal';
  icon: string;                    // Icon name or URL
  color: string;                   // Theme color e.g., "#3B82F6"
  
  // Hero Section
  hero: {
    headline: string;              // Main headline
    subheadline: string;           // Supporting text
    ctaText: string;               // Button text (e.g., "Calculate Now")
  };
  
  // Tool Overview
  overview: string;                // What this tool does
  
  // Tool Inputs Configuration
  inputs: Array<{
    id: string;                    // Unique ID for the input
    label: string;                 // Display label
    type: 'number' | 'text' | 'select' | 'checkbox' | 'range' | 'percentage';
    defaultValue: any;             // Default value
    placeholder?: string;          // Placeholder text
    options?: Array<{             // For select/radio inputs
      value: string;
      label: string;
    }>;
    min?: number;                  // For number/range inputs
    max?: number;
    step?: number;
    unit?: string;                 // e.g., "₹", "%", "months"
    helpText?: string;             // Helper text below input
    required: boolean;
  }>;
  
  // Calculation Logic (this would be implemented in component)
  calculationType: 'valuation' | 'pricing' | 'roi' | 'break-even' | 'conversion' | 'financial-projection';
  
  // Results Display Configuration
  results: {
    displayType: 'single-value' | 'multiple-values' | 'chart' | 'table' | 'timeline';
    metrics: Array<{
      label: string;               // Metric name
      key: string;                 // Result key
      format: 'currency' | 'percentage' | 'number' | 'time' | 'custom';
      prefix?: string;             // e.g., "₹"
      suffix?: string;             // e.g., "%"
      description?: string;        // Explanation of metric
    }>;
    chartType?: 'bar' | 'line' | 'pie' | 'donut'; // If displayType is chart
  };
  
  // Use Cases
  useCases: Array<{
    title: string;
    description: string;
    exampleValues: Record<string, any>; // Pre-filled inputs for this use case
  }>;
  
  // Interpretation Guide
  interpretation: {
    title: string;
    points: string[];              // How to interpret results
    benchmarks?: Array<{           // Industry benchmarks
      industry: string;
      value: string;
      description: string;
    }>;
  };
  
  // Export Options
  exportOptions: {
    pdf: boolean;
    excel: boolean;
    share: boolean;
    save: boolean;
  };
  
  // Related Tools
  relatedTools: string[];          // Array of slugs
  
  // SEO Metadata
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  
  // Tool Stats
  stats: {
    calculations: number;          // Number of calculations done
    lastUpdated: string;           // Last update date
    accuracy: string;              // e.g., "95% accurate"
  };
}

// Tool Calculation Result Type
export interface ToolResult {
  success: boolean;
  data: Record<string, any>;
  insights: string[];
  recommendations: string[];
  timestamp: string;
}