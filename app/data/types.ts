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