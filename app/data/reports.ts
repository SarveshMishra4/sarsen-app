// =====================================================
// CREATE THIS FILE AT: app/data/reports.ts
// =====================================================
// Single source of truth for all report data.
// Imported by:
//   → app/reports/page.tsx          (listing grid)
//   → app/reports/[slug]/page.tsx   (individual report detail)
//
// To add a new report: copy one object in the array,
// change the slug, fill in the fields. Both pages
// update automatically. No other files need touching.
// =====================================================

import { Report } from './types';

export const reportsData: Report[] = [

  // ─────────────────────────────────────────────────
  // REPORT 1 — Indian Startup Ecosystem
  // ─────────────────────────────────────────────────
  {
    // ── listing fields ──
    slug: 'indian-startup-ecosystem-report-2024',
    category: 'Market Analysis',
    title: 'Indian Startup Ecosystem Report 2024',
    description: 'Comprehensive analysis of India\'s startup landscape covering funding trends, sector-wise growth patterns, emerging opportunities across tier-1 and tier-2 cities, and strategic insights for founders and investors.',
    keyInsights: [
      '5,000+ startups analyzed across 15 major hubs',
      '₹2.1 lakh crore in total funding tracked',
      'Detailed sector-wise breakdown and growth patterns'
    ],
    date: 'Dec 2024',
    pages: 142,
    downloads: '2,500+',
    price: 'Free',
    isFree: true,

    // ── detail fields ──
    heroDescription: 'Our most comprehensive annual report — a data-driven deep-dive into the Indian startup ecosystem. We analyzed over 5,000 startups, tracked ₹2.1 lakh crore in funding flows, and identified the structural shifts that will define the next phase of India\'s innovation economy. This report is built for founders, investors, and strategy teams who need ground-truth data, not opinions.',
    authors: [
      { name: 'Rajesh Kumar', role: 'Senior Strategy Partner' },
      { name: 'Priya Sharma', role: 'Head of Market Intelligence' },
    ],
    publishedDate: 'December 15, 2024',
    lastUpdated: 'December 28, 2024',
    tags: ['Startup Ecosystem', 'India', 'Funding Trends', 'Market Analysis', '2024'],
    keyFindings: [
      { metric: '5,000+', label: 'Startups Analyzed', description: 'Across 15 major startup hubs in India' },
      { metric: '₹2.1L Cr', label: 'Total Funding Tracked', description: 'Across Series A through Series F rounds' },
      { metric: '34%', label: 'YoY Growth in Seed Rounds', description: 'Early-stage activity accelerated sharply' },
      { metric: '18', label: 'Sectors Benchmarked', description: 'From fintech to climate-tech and healthtech' },
    ],
    tableOfContents: [
      {
        id: 'executive-summary',
        title: 'Executive Summary',
        page: 1,
        subsections: ['Key Takeaways', 'Report Methodology']
      },
      {
        id: 'funding-landscape',
        title: 'Funding Landscape 2024',
        page: 12,
        subsections: ['Total Deal Volume', 'Stage-wise Breakdown', 'Quarter-on-Quarter Trends']
      },
      {
        id: 'sector-analysis',
        title: 'Sector-Wise Analysis',
        page: 38,
        subsections: ['Fintech', 'Healthtech', 'Edtech', 'D2C & E-commerce', 'Climate Tech']
      },
      {
        id: 'geographic-spread',
        title: 'Geographic Spread & Tier-2 Emergence',
        page: 72,
        subsections: ['Top 15 Startup Cities', 'Tier-2 City Deep Dives', 'Infrastructure Readiness']
      },
      {
        id: 'investor-sentiment',
        title: 'Investor Sentiment & Deal Dynamics',
        page: 98,
        subsections: ['VC Activity Trends', 'Down Rounds Analysis', 'Exit Landscape']
      },
      {
        id: 'strategic-outlook',
        title: 'Strategic Outlook 2025',
        page: 118,
        subsections: ['Emerging Opportunities', 'Risks to Monitor', 'Recommendations']
      },
      { id: 'appendix', title: 'Appendix & Data Sources', page: 136 }
    ],
    methodology: [
      { step: 1, title: 'Data Collection', description: 'Aggregated data from 12 primary and secondary sources including public filings, funding databases, regulatory disclosures, and proprietary deal-flow records.' },
      { step: 2, title: 'Quantitative Screening', description: 'Applied standardised filters across 5,000+ startups to ensure consistency in stage classification, sector tagging, and funding attribution.' },
      { step: 3, title: 'Sectoral Benchmarking', description: 'Compared metrics across 18 sectors using normalised unit economics — CAC, LTV, burn multiples — to derive defensible benchmarks.' },
      { step: 4, title: 'Expert Validation', description: 'Cross-referenced findings with 40+ interviews with founders, investors, and domain specialists before finalisation.' },
    ],
    executiveSummary: 'India\'s startup ecosystem in 2024 showed a clear two-speed recovery: seed and Series A rounds surged 34% YoY, signalling renewed early-stage confidence, while later-stage deals remained cautious with a 12% contraction in Series C+ volume. Geographically, tier-2 cities emerged as the most significant structural shift, with Pune, Hyderabad, and Bangalore collectively accounting for 41% of new registrations. Fintech and healthtech led sector-wise momentum, but climate-tech recorded the highest growth rate from a smaller base.',
    conclusion: 'The Indian startup ecosystem is entering a phase of selective maturation — high deal activity at early stages, disciplined capital allocation at growth stages, and a genuine geographic diversification beyond the traditional metros. For founders and investors alike, the imperative is clear: build for defensibility from day one, because the market is now rewarding fundamentals over narrative.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 2 — SaaS Financial Benchmarking
  // ─────────────────────────────────────────────────
  {
    slug: 'saas-financial-benchmarking-report-2024',
    category: 'Financial Reports',
    title: 'SaaS Financial Benchmarking Report 2024',
    description: 'Financial metrics and benchmarks from 500+ Indian SaaS companies across growth stages.',
    keyInsights: [
      'Revenue growth benchmarks by ARR stage',
      'CAC payback periods and unit economics',
      'Burn multiple and efficiency metrics'
    ],
    date: 'Nov 2024',
    pages: 98,
    downloads: '1,200+',
    price: '₹3,999',
    isFree: false,

    heroDescription: 'The definitive benchmarking resource for Indian SaaS companies. We pulled financial data from over 500 SaaS businesses — from pre-revenue to $10M+ ARR — and distilled it into the benchmarks that actually matter: CAC payback, net revenue retention, burn multiples, and gross margins by stage. If you\'re building, investing in, or advising a SaaS business in India, this is the report that grounds your decisions in data.',
    authors: [
      { name: 'Arjun Mehta', role: 'Director, Analytics & Insights' },
      { name: 'Ananya Iyer', role: 'Strategy Analyst' },
    ],
    publishedDate: 'November 10, 2024',
    lastUpdated: 'November 22, 2024',
    tags: ['SaaS', 'Financial Benchmarks', 'Unit Economics', 'India', 'B2B'],
    keyFindings: [
      { metric: '500+', label: 'SaaS Companies Benchmarked', description: 'Across seed to Series C stages' },
      { metric: '18 months', label: 'Median CAC Payback', description: 'At Series A stage — 6 months faster than 2023' },
      { metric: '114%', label: 'Median Net Revenue Retention', description: 'Top-quartile Indian SaaS companies' },
      { metric: '2.1x', label: 'Median Burn Multiple', description: 'Improving but still above global benchmarks' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary', page: 1, subsections: ['What Changed in 2024', 'How to Read This Report'] },
      { id: 'revenue-benchmarks', title: 'Revenue & Growth Benchmarks', page: 10, subsections: ['ARR Growth by Stage', 'Logo & Net Dollar Retention', 'Expansion Revenue Patterns'] },
      { id: 'unit-economics', title: 'Unit Economics Deep Dive', page: 28, subsections: ['CAC by Channel', 'LTV:CAC Ratios', 'Payback Period Analysis'] },
      { id: 'efficiency-metrics', title: 'Efficiency & Burn Metrics', page: 48, subsections: ['Burn Multiple Trends', 'Rule of 40 Compliance', 'Gross Margin Benchmarks'] },
      { id: 'go-to-market', title: 'Go-to-Market Benchmarks', page: 68, subsections: ['Sales Cycle Length', 'Average Contract Value', 'Channel Mix Analysis'] },
      { id: 'recommendations', title: 'Actionable Recommendations', page: 84 },
      { id: 'appendix', title: 'Appendix & Methodology', page: 92 },
    ],
    methodology: [
      { step: 1, title: 'Company Selection', description: 'Surveyed 800+ Indian SaaS companies; 500+ met inclusion criteria across minimum ARR thresholds and data completeness standards.' },
      { step: 2, title: 'Financial Normalisation', description: 'Standardised all metrics to a common framework — ARR-based staging, consistent CAC attribution, and unified margin definitions.' },
      { step: 3, title: 'Peer Group Segmentation', description: 'Segmented companies into 6 cohorts by ARR stage and 4 by primary go-to-market motion for accurate apples-to-apples benchmarking.' },
      { step: 4, title: 'Quartile Mapping', description: 'Mapped each metric to P25/P50/P75/P90 percentiles to give readers a clear sense of where "good" actually sits.' },
    ],
    executiveSummary: 'Indian SaaS companies are getting leaner, faster, and more capital-efficient — but the gap to global benchmarks remains real. Median CAC payback dropped to 18 months at Series A, a meaningful 6-month improvement, while net revenue retention in the top quartile crossed 114%. The most striking finding: companies that crossed $1M ARR with a burn multiple below 2x were 3x more likely to raise their next round within 6 months.',
    conclusion: 'The Indian SaaS market is maturing rapidly, and the benchmarks are proof. Founders who treat unit economics as a board-level metric from day one — not an afterthought at Series B — are the ones pulling ahead. The data is unambiguous: efficiency is no longer optional. It is the primary signal investors are reading.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 3 — Indian Tech Startup Growth Forecast
  // ─────────────────────────────────────────────────
  {
    slug: 'indian-tech-startup-growth-forecast-2025-2027',
    category: 'Growth Forecasts',
    title: 'Indian Tech Startup Growth Forecast 2025–2027',
    description: 'Three-year growth projections for Indian tech startups across major sectors.',
    keyInsights: [
      'Sector-wise growth predictions and drivers',
      'Emerging technologies and adoption trends',
      'Investment flow forecasts by quarter'
    ],
    date: 'Oct 2024',
    pages: 76,
    downloads: '850+',
    price: '₹4,999',
    isFree: false,

    heroDescription: 'Where is Indian tech headed over the next three years? This report answers that question with rigorous scenario modelling, not guesswork. We mapped growth trajectories across 12 high-signal sectors, stress-tested them against macro variables, and produced quarterly investment-flow forecasts grounded in current deal-velocity data. Built for strategic planning teams and investors with a medium-term horizon.',
    authors: [
      { name: 'Priya Sharma', role: 'Head of Market Intelligence' },
      { name: 'Rajesh Kumar', role: 'Senior Strategy Partner' },
    ],
    publishedDate: 'October 8, 2024',
    lastUpdated: 'October 20, 2024',
    tags: ['Growth Forecast', 'India Tech', '2025–2027', 'Scenario Modelling', 'Investment'],
    keyFindings: [
      { metric: '₹4.8L Cr', label: 'Projected Cumulative Funding', description: 'Across Indian tech startups, 2025–2027' },
      { metric: '22%', label: 'CAGR in Climate-Tech', description: 'Fastest projected growth sector' },
      { metric: '3', label: 'New Unicorn Sectors', description: 'Healthcare, agritech, and defense-tech flagged' },
      { metric: 'Q2 2026', label: 'Peak Series B Window', description: 'Based on current deal-velocity modelling' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary & Scenario Framework', page: 1 },
      { id: 'macro-context', title: 'Macro Context & Assumptions', page: 8, subsections: ['GDP & Inflation Assumptions', 'Regulatory Outlook', 'Global Capital Flow Trends'] },
      { id: 'sector-forecasts', title: 'Sector-by-Sector Forecasts', page: 20, subsections: ['Fintech', 'Healthtech', 'Climate-Tech', 'Agritech', 'Enterprise SaaS', 'Defense-Tech'] },
      { id: 'investment-flows', title: 'Quarterly Investment Flow Model', page: 48, subsections: ['Base Case', 'Bull Case', 'Bear Case'] },
      { id: 'strategic-implications', title: 'Strategic Implications', page: 62, subsections: ['For Founders', 'For Investors', 'For Corporates'] },
      { id: 'appendix', title: 'Appendix: Model Assumptions & Sources', page: 70 },
    ],
    methodology: [
      { step: 1, title: 'Historical Baseline', description: 'Built a 5-year historical baseline (2019–2024) for each sector using verified deal data, revenue disclosures, and regulatory filings.' },
      { step: 2, title: 'Scenario Construction', description: 'Modelled three scenarios (base / bull / bear) using Monte Carlo simulation across 40+ input variables per sector.' },
      { step: 3, title: 'Cross-Validation', description: 'Validated forecasts against independent projections from 8 institutional sources and stress-tested for macro shocks.' },
      { step: 4, title: 'Expert Panel Review', description: 'Presented draft forecasts to a 15-member expert panel of founders, VCs, and policymakers for calibration.' },
    ],
    executiveSummary: 'The 2025–2027 window represents a structural inflection for Indian tech — not a boom-bust cycle, but a deepening. Climate-tech emerges as the fastest-growth sector at 22% CAGR, while fintech stabilises into a scale-and-consolidation phase. Three sectors — healthtech, agritech, and defense-tech — show the profile of future unicorn factories. Quarterly investment flows peak in Q2 2026 under the base case, suggesting a closing window for Series B entries.',
    conclusion: 'The next three years will separate Indian tech into two tiers: companies building on structural tailwinds with defensible unit economics, and those riding narrative alone. The forecast is clear — capital will flow toward the former, and it will do so with increasing speed. Strategic positioning today, grounded in this data, is the single highest-leverage move available.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 4 — Fintech Sector Deep Dive
  // ─────────────────────────────────────────────────
  {
    slug: 'fintech-sector-deep-dive-2024',
    category: 'Sector Insights',
    title: 'Fintech Sector Deep Dive 2024',
    description: 'Analysis of India\'s fintech landscape covering payments, lending, neobanking, and insurtech.',
    keyInsights: [
      'Regulatory landscape and compliance requirements',
      'Customer acquisition strategies and costs',
      'Partnership models and revenue streams'
    ],
    date: 'Sep 2024',
    pages: 124,
    downloads: '1,800+',
    price: '₹5,999',
    isFree: false,

    heroDescription: 'India\'s fintech sector is being reshaped by regulation, not just innovation. This deep-dive maps the full landscape — payments, lending, neobanking, insurtech — and goes beyond market sizing to answer the harder questions: What does the new regulatory stack actually mean for unit economics? Where are the real moats forming? Which partnership models are generating sustainable revenue? Built for fintech founders, bank strategists, and investors evaluating the space.',
    authors: [
      { name: 'Ananya Iyer', role: 'Strategy Analyst' },
      { name: 'Arjun Mehta', role: 'Director, Analytics & Insights' },
    ],
    publishedDate: 'September 5, 2024',
    lastUpdated: 'September 18, 2024',
    tags: ['Fintech', 'India', 'Payments', 'Lending', 'Regulation', 'Neobanking'],
    keyFindings: [
      { metric: '₹8.2L Cr', label: 'Fintech Market Size (2024)', description: 'Transaction value across all fintech verticals' },
      { metric: '67%', label: 'Payments Share of GMV', description: 'Payments dominates but lending is the margin story' },
      { metric: '2.4x', label: 'CAC Reduction via Partnerships', description: 'Bank-fintech co-branded models vs. standalone' },
      { metric: '12', label: 'New RBI Guidelines in 2024', description: 'Reshaped compliance cost structures across the board' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary', page: 1 },
      { id: 'market-overview', title: 'Market Overview & Sizing', page: 8, subsections: ['TAM / SAM / SOM Breakdown', 'Vertical-wise Revenue Split', 'YoY Growth Comparison'] },
      { id: 'payments', title: 'Payments Deep Dive', page: 28, subsections: ['UPI Ecosystem Dynamics', 'Cross-Border Payments', 'Merchant Acquiring'] },
      { id: 'lending', title: 'Lending & Credit', page: 48, subsections: ['NBFC Landscape', 'Alternative Scoring', 'Default Rate Benchmarks'] },
      { id: 'neobanking', title: 'Neobanking & Insurance', page: 72, subsections: ['Account Opening Funnels', 'Insurtech Distribution Models'] },
      { id: 'regulatory', title: 'Regulatory Landscape & Compliance', page: 92, subsections: ['RBI 2024 Guidelines Summary', 'Compliance Cost Analysis', 'What\'s Coming in 2025'] },
      { id: 'appendix', title: 'Appendix', page: 118 },
    ],
    methodology: [
      { step: 1, title: 'Vertical Mapping', description: 'Categorised 600+ fintech companies into 8 sub-verticals using a standardised taxonomy aligned with RBI classification.' },
      { step: 2, title: 'Transaction Data Analysis', description: 'Analysed aggregated (anonymised) transaction data from 4 payment networks and 3 lending platforms.' },
      { step: 3, title: 'Regulatory Impact Modelling', description: 'Mapped each of the 12 new RBI guidelines to specific cost-line impacts for each sub-vertical.' },
      { step: 4, title: 'Partnership Case Studies', description: 'Deep-dived 20 bank-fintech partnership models to isolate the structural drivers of CAC reduction.' },
    ],
    executiveSummary: 'India\'s fintech sector is moving from a land-grab phase to a margin-building phase, and regulation is the primary force behind that shift. Payments remains the dominant volume driver at 67% of GMV, but lending is where the margin story lives — and the companies building there with proper credit infrastructure are the ones that will scale. The most important structural finding: fintech companies partnering with banks on co-branded products are acquiring customers at 2.4x lower CAC than those going direct.',
    conclusion: 'The fintech companies that will win in India are not the ones with the slickest app — they are the ones that have solved the regulatory and unit-economics puzzle simultaneously. The data shows this clearly: partnership-first models, disciplined credit underwriting, and deep compliance investment are the three pillars every fintech leader needs to treat as non-negotiable.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 5 — Tier 2 & 3 Cities Startup Landscape
  // ─────────────────────────────────────────────────
  {
    slug: 'tier-2-3-cities-startup-landscape',
    category: 'Market Analysis',
    title: 'Tier 2 & 3 Cities Startup Landscape',
    description: 'Emerging startup ecosystems in smaller Indian cities and their unique characteristics.',
    keyInsights: [
      'Top 20 emerging startup cities ranked',
      'Local market dynamics and opportunities',
      'Infrastructure and talent availability'
    ],
    date: 'Aug 2024',
    pages: 89,
    downloads: '620+',
    price: '₹2,999',
    isFree: false,

    heroDescription: 'The next wave of Indian startups is not coming from Bangalore or Delhi. It is coming from Pune, Hyderabad, Jaipur, Ahmedabad — and a dozen cities most investors haven\'t mapped yet. This report is the first systematic study of startup activity outside the top 3 metros, covering 20 cities, ranking them across 14 dimensions, and identifying the structural advantages that are pulling founders, talent, and capital away from the crowded top tier.',
    authors: [
      { name: 'Priya Sharma', role: 'Head of Market Intelligence' },
      { name: 'Ananya Iyer', role: 'Strategy Analyst' },
    ],
    publishedDate: 'August 12, 2024',
    lastUpdated: 'August 25, 2024',
    tags: ['Tier 2 Cities', 'Tier 3 Cities', 'Emerging Ecosystems', 'India', 'Startup Hubs'],
    keyFindings: [
      { metric: '20', label: 'Cities Systematically Ranked', description: 'Across 14 dimensions from talent to infra' },
      { metric: '38%', label: 'YoY Startup Registration Growth', description: 'In top-5 tier-2 cities vs 12% in metros' },
      { metric: '2.3x', label: 'Lower Cost of Operations', description: 'Tier-2 vs Bangalore for equivalent teams' },
      { metric: '₹1,200 Cr', label: 'VC Funding in Tier-2 (2024)', description: 'Up 4x from 2021 — the inflection is real' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary', page: 1 },
      { id: 'why-tier-2', title: 'Why Tier 2 & 3 — The Structural Case', page: 6, subsections: ['Cost Advantage Analysis', 'Talent Pipeline Data', 'Government Incentive Mapping'] },
      { id: 'city-rankings', title: 'City-by-City Rankings', page: 20, subsections: ['Methodology', 'Top 5 Deep Dives', 'Emerging Watch List'] },
      { id: 'sector-opportunities', title: 'Sector Opportunities by City', page: 48, subsections: ['Agritech Hubs', 'Healthtech Clusters', 'EdTech Corridors'] },
      { id: 'infrastructure', title: 'Infrastructure & Ecosystem Readiness', page: 64, subsections: ['Co-working & Incubator Density', 'Connectivity & Digital Access', 'Regulatory Environment'] },
      { id: 'recommendations', title: 'Strategic Recommendations', page: 80 },
      { id: 'appendix', title: 'Appendix & Data Sources', page: 85 },
    ],
    methodology: [
      { step: 1, title: 'City Selection', description: 'Screened 80+ Indian cities, selected top 20 based on minimum startup registration volume and VC deal activity thresholds.' },
      { step: 2, title: 'Multi-Dimensional Scoring', description: 'Scored each city across 14 dimensions: talent density, cost of living, infrastructure, government support, and 10 others.' },
      { step: 3, title: 'On-Ground Validation', description: 'Conducted 60+ interviews with local founders and incubator leads across the top 10 cities to validate quantitative scores.' },
      { step: 4, title: 'Sector Overlay', description: 'Mapped local industry clusters and educational institutions to identify natural sector-startup fit for each city.' },
    ],
    executiveSummary: 'The tier-2 startup revolution in India is no longer a trend — it is a structural shift. Startup registrations in the top 5 tier-2 cities grew 38% YoY, three times the rate of the metros. More critically, VC funding into tier-2 companies quadrupled since 2021, signalling that capital is following the founders. Pune, Hyderabad, and Jaipur lead the pack, but cities like Bhopal and Lucknow are building the foundations for the next wave.',
    conclusion: 'For founders, the message is clear: building outside the metros is no longer a compromise — it is increasingly a competitive advantage. For investors, the opportunity window in tier-2 India is open but narrowing. The cities that get serious about startup infrastructure in the next 12–18 months will capture disproportionate value. The data is already pointing the way.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 6 — D2C E-commerce Growth Report
  // ─────────────────────────────────────────────────
  {
    slug: 'd2c-ecommerce-growth-report-2024',
    category: 'Growth Forecasts',
    title: 'D2C E-commerce Growth Report 2024',
    description: 'Analysis of direct-to-consumer brands in India and projected growth trajectories.',
    keyInsights: [
      'Category-wise growth rates and saturation',
      'Customer acquisition and retention costs',
      'Distribution and logistics strategies'
    ],
    date: 'Jul 2024',
    pages: 102,
    downloads: '1,450+',
    price: 'Free',
    isFree: true,

    heroDescription: 'India\'s D2C economy is growing fast — but not all categories are growing equally. This report separates signal from noise by mapping growth trajectories, saturation curves, and unit economics across 15 D2C categories. We tracked 300+ brands, benchmarked their acquisition costs and retention rates, and built a forward-looking model that shows where the real white space still exists. Free and open because we believe the whole ecosystem benefits from better data on this.',
    authors: [
      { name: 'Arjun Mehta', role: 'Director, Analytics & Insights' },
      { name: 'Priya Sharma', role: 'Head of Market Intelligence' },
    ],
    publishedDate: 'July 18, 2024',
    lastUpdated: 'July 30, 2024',
    tags: ['D2C', 'E-commerce', 'Consumer Brands', 'India', 'Growth Forecast'],
    keyFindings: [
      { metric: '300+', label: 'D2C Brands Benchmarked', description: 'Across 15 consumer categories' },
      { metric: '₹45K Cr', label: 'D2C Market GMV (2024)', description: 'Growing at 28% CAGR through 2027' },
      { metric: '42%', label: 'Repeat Purchase Rate (Top Quartile)', description: 'vs 18% median — retention is the battleground' },
      { metric: '3', label: 'Categories Near Saturation', description: 'Beauty, supplements, and basic apparel flagged' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary', page: 1 },
      { id: 'market-sizing', title: 'Market Sizing & Category Breakdown', page: 8, subsections: ['GMV by Category', 'Average Order Value Trends', 'Platform vs Own-Site Split'] },
      { id: 'acquisition', title: 'Customer Acquisition Economics', page: 28, subsections: ['CAC by Channel', 'Social vs Search vs Marketplace', 'Blended CAC Benchmarks'] },
      { id: 'retention', title: 'Retention & LTV Analysis', page: 46, subsections: ['Repeat Purchase Curves', 'Subscription vs One-Time Models', 'LTV:CAC by Category'] },
      { id: 'logistics', title: 'Distribution & Logistics Deep Dive', page: 64, subsections: ['Own vs 3PL Comparison', 'Last-Mile Economics', 'Returns Management'] },
      { id: 'whitespace', title: 'White Space Opportunities', page: 82 },
      { id: 'appendix', title: 'Appendix', page: 96 },
    ],
    methodology: [
      { step: 1, title: 'Brand Census', description: 'Mapped 500+ D2C brands; selected 300+ that met minimum revenue and data-availability thresholds across 15 categories.' },
      { step: 2, title: 'Transactional Benchmarking', description: 'Benchmarked AOV, repeat rate, and CAC using anonymised transaction data from 3 major e-commerce platforms.' },
      { step: 3, title: 'Saturation Modelling', description: 'Built category-level saturation curves using historical growth rates, market size, and competitive density metrics.' },
      { step: 4, title: 'Logistics Cost Mapping', description: 'Mapped fulfillment cost structures across own-logistics and 3PL models for 50 brands to derive true unit margins.' },
    ],
    executiveSummary: 'India\'s D2C market is a tale of two halves: categories with strong retention economics pulling ahead, and categories where customer acquisition costs are outpacing repeat revenue. The top-quartile brands in this study show repeat purchase rates of 42% — more than double the median. Three categories (beauty, supplements, basic apparel) are showing saturation signals, while home, wellness, and sustainable fashion still have structural white space. The brands that win will be the ones that crack retention, not just acquisition.',
    conclusion: 'D2C in India is transitioning from a "land and grab" market to a "build and retain" market. The winners are already visible in the data — they are the brands with the highest repeat rates, the most diversified acquisition channels, and the most disciplined unit economics. For anyone entering or scaling in this space, the framework is simple: acquire efficiently, retain relentlessly, and build a brand that earns repeat without paying for it twice.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 7 — Edtech Sector Analysis
  // ─────────────────────────────────────────────────
  {
    slug: 'edtech-sector-analysis-2024',
    category: 'Sector Insights',
    title: 'Edtech Sector Analysis 2024',
    description: 'Comprehensive analysis of India\'s education technology sector post-pandemic.',
    keyInsights: [
      'Market size and segmentation by category',
      'User acquisition costs and retention',
      'Regulatory challenges and opportunities'
    ],
    date: 'Jun 2024',
    pages: 115,
    downloads: '2,100+',
    price: '₹4,499',
    isFree: false,

    heroDescription: 'Post-pandemic edtech in India is a story of correction, consolidation, and — for the right companies — genuine opportunity. This report maps where the sector actually stands today: not the inflated 2021 numbers, but the real 2024 reality. We analysed 200+ edtech companies, benchmarked their unit economics, and identified the 5 sub-segments where structural demand is outpacing supply. For founders rebuilding after the correction and investors re-entering with discipline, this is the ground-truth map.',
    authors: [
      { name: 'Rajesh Kumar', role: 'Senior Strategy Partner' },
      { name: 'Ananya Iyer', role: 'Strategy Analyst' },
    ],
    publishedDate: 'June 22, 2024',
    lastUpdated: 'July 5, 2024',
    tags: ['Edtech', 'Education Technology', 'India', 'Post-Pandemic', 'Sector Analysis'],
    keyFindings: [
      { metric: '200+', label: 'Edtech Companies Analysed', description: 'Post-correction reality mapped' },
      { metric: '₹3.1L Cr', label: 'Edtech Market Size (2024)', description: 'Down 22% from peak — but stable' },
      { metric: '5', label: 'High-Signal Sub-Segments', description: 'Where demand structurally exceeds supply' },
      { metric: '58%', label: 'Enterprise Edtech Growth', description: 'B2B segment growing while B2C consolidates' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary', page: 1 },
      { id: 'post-pandemic', title: 'Post-Pandemic Reality Check', page: 8, subsections: ['The Correction in Numbers', 'What Survived and Why', 'Structural vs Cyclical Demand'] },
      { id: 'segmentation', title: 'Market Segmentation & Sizing', page: 24, subsections: ['K-12 vs Higher Ed vs Upskilling', 'B2B vs B2C Split', 'Regional Language Opportunity'] },
      { id: 'unit-economics', title: 'Unit Economics Benchmarks', page: 42, subsections: ['CAC by Acquisition Channel', 'Course Completion & Certification Rates', 'LTV in Subscription Models'] },
      { id: 'regulatory', title: 'Regulatory Landscape', page: 62, subsections: ['AICTE & NEP 2020 Implications', 'Data Privacy in Education', 'Upcoming Policy Shifts'] },
      { id: 'opportunities', title: 'High-Signal Opportunities', page: 82, subsections: ['Enterprise Learning', 'Credentialing & Certification', 'Regional Language EdTech'] },
      { id: 'appendix', title: 'Appendix & Methodology', page: 108 },
    ],
    methodology: [
      { step: 1, title: 'Landscape Mapping', description: 'Catalogued 400+ edtech companies; selected 200+ with sufficient revenue or user data for meaningful benchmarking.' },
      { step: 2, title: 'Pre/Post Correction Comparison', description: 'Compared 2021 peak metrics to 2024 actuals across revenue, funding, and user metrics to isolate what was real vs inflated.' },
      { step: 3, title: 'Sub-Segment White Space Analysis', description: 'Mapped demand signals (search volume, employer spend, government policy) against supply (number of active players, funding) per sub-segment.' },
      { step: 4, title: 'Employer Survey', description: 'Surveyed 150 L&D heads at Indian corporates on edtech adoption plans and willingness-to-pay benchmarks.' },
    ],
    executiveSummary: 'India\'s edtech sector has come down from its 2021 fever — but the correction is revealing, not destroying, the real opportunity. The B2C consumer segment is consolidating fast, but enterprise edtech is growing at 58% and is structurally underpenetrated. Five sub-segments — enterprise upskilling, credentialing, regional-language learning, K-12 supplementary, and corporate compliance training — show demand-supply gaps large enough to build defensible businesses on.',
    conclusion: 'The edtech companies that survived the correction are the ones that had real unit economics underneath the growth narrative. For the next phase, the winners will be enterprise-first, outcome-oriented, and built on genuine learning science — not engagement hacks. The market has self-corrected. Now it is ready to be built properly.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 8 — Startup Valuation Trends Q3
  // ─────────────────────────────────────────────────
  {
    slug: 'startup-valuation-trends-q3-2024',
    category: 'Financial Reports',
    title: 'Startup Valuation Trends Q3 2024',
    description: 'Analysis of valuation multiples and trends across Indian startup funding rounds.',
    keyInsights: [
      'Median valuation multiples by sector',
      'Down rounds and flat rounds analysis',
      'Investor sentiment and deal dynamics'
    ],
    date: 'Sep 2024',
    pages: 67,
    downloads: '950+',
    price: '₹3,499',
    isFree: false,

    heroDescription: 'Valuations are the single most debated number in startup fundraising — and the least transparently reported. This report cuts through the noise with actual Q3 2024 data: median multiples by sector and stage, down-round frequency, and the deal terms that are actually getting signed. If you are raising, investing, or advising on a round right now, this is the closest thing to a real-time valuation benchmark available for Indian startups.',
    authors: [
      { name: 'Arjun Mehta', role: 'Director, Analytics & Insights' },
      { name: 'Rajesh Kumar', role: 'Senior Strategy Partner' },
    ],
    publishedDate: 'September 28, 2024',
    lastUpdated: 'October 5, 2024',
    tags: ['Valuation', 'Funding Rounds', 'India Startups', 'Q3 2024', 'Deal Dynamics'],
    keyFindings: [
      { metric: '14x', label: 'Median Series A Revenue Multiple', description: 'Down 18% from Q3 2023 — correction continuing' },
      { metric: '23%', label: 'Down Round Frequency', description: 'Nearly 1 in 4 rounds was a down or flat round' },
      { metric: '8.2 weeks', label: 'Median Time to Close', description: 'Series A — up from 6.1 weeks in 2023' },
      { metric: '2.1x', label: 'Dilution at Series B', description: 'Median dilution — highest in 3 years' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary', page: 1 },
      { id: 'valuation-multiples', title: 'Valuation Multiples by Stage', page: 6, subsections: ['Seed & Pre-Seed', 'Series A', 'Series B', 'Series C+'] },
      { id: 'sector-multiples', title: 'Sector-Wise Multiple Comparison', page: 24, subsections: ['Fintech', 'SaaS', 'Consumer', 'Healthcare', 'Climate Tech'] },
      { id: 'down-rounds', title: 'Down Round & Flat Round Analysis', page: 36, subsections: ['Frequency by Sector', 'Causes & Triggers', 'Negotiation Dynamics'] },
      { id: 'deal-terms', title: 'Deal Terms & Investor Preferences', page: 48, subsections: ['Liquidation Preferences', 'Anti-Dilution Clauses', 'Board Composition Trends'] },
      { id: 'outlook', title: 'Q4 2024 Outlook', page: 58 },
      { id: 'appendix', title: 'Appendix & Methodology', page: 62 },
    ],
    methodology: [
      { step: 1, title: 'Deal Data Collection', description: 'Compiled verified data on 380+ funding rounds closed in Q3 2024 from regulatory filings, cap-table data, and investor disclosures.' },
      { step: 2, title: 'Multiple Calculation', description: 'Computed pre-money valuation multiples on both revenue and ARR bases, with clear separation of pre-revenue rounds.' },
      { step: 3, title: 'Down Round Classification', description: 'Defined and classified down rounds using the most conservative methodology — any round below the last 409A or funding-round valuation.' },
      { step: 4, title: 'Term Sheet Analysis', description: 'Reviewed 120+ term sheets to extract and benchmark standard and non-standard deal terms across stages.' },
    ],
    executiveSummary: 'Q3 2024 confirms that Indian startup valuations are in a sustained correction — not a crash, but a repricing toward fundamentals. Median Series A revenue multiples dropped to 14x, and nearly one in four rounds was priced flat or down. The most significant signal: investors are taking longer to close (8.2 weeks median) and demanding more protective terms. Companies with clear unit economics and visible paths to profitability are still commanding premium multiples — the gap between "good" and "average" deals has widened, not narrowed.',
    conclusion: 'The valuation environment is not going back to 2021. Founders who internalize this and build their fundraising strategy around fundamentals — ARR growth, retention, burn efficiency — will raise faster and on better terms. The data is unambiguous: in a repricing market, story loses to numbers. Every time.',
  },

  // ─────────────────────────────────────────────────
  // REPORT 9 — Healthcare Tech Market Opportunity
  // ─────────────────────────────────────────────────
  {
    slug: 'healthcare-tech-market-opportunity',
    category: 'Custom Reports',
    title: 'Healthcare Tech Market Opportunity',
    description: 'Custom research on healthcare technology opportunities in Indian market.',
    keyInsights: [
      'Market sizing and segmentation',
      'Regulatory and compliance landscape',
      'Go-to-market strategies for healthtech'
    ],
    date: 'May 2024',
    pages: 134,
    downloads: '420+',
    price: '₹7,999',
    isFree: false,

    heroDescription: 'Healthcare technology in India is one of the largest untapped opportunities in the country — and one of the most regulation-sensitive. This custom research report maps the full opportunity: from telemedicine and diagnostics to hospital management systems and health insurance tech. We sized every sub-segment, mapped the regulatory maze, and built go-to-market playbooks grounded in what has actually worked for the companies that have scaled here. Commissioned research, now available to the broader ecosystem.',
    authors: [
      { name: 'Rajesh Kumar', role: 'Senior Strategy Partner' },
      { name: 'Priya Sharma', role: 'Head of Market Intelligence' },
      { name: 'Ananya Iyer', role: 'Strategy Analyst' },
    ],
    publishedDate: 'May 14, 2024',
    lastUpdated: 'May 28, 2024',
    tags: ['Healthtech', 'Healthcare Technology', 'India', 'Telemedicine', 'Market Opportunity', 'Custom Research'],
    keyFindings: [
      { metric: '₹12L Cr', label: 'Healthtech TAM by 2027', description: 'Including digital health, medtech, and health insurance' },
      { metric: '8', label: 'High-Priority Sub-Segments', description: 'Identified via demand-supply gap analysis' },
      { metric: '3.2x', label: 'Insurance Tech Growth Rate', description: 'Fastest growing healthtech vertical' },
      { metric: '45%', label: 'Hospital Digitisation Gap', description: 'Tier-2/3 hospitals — the largest white space' },
    ],
    tableOfContents: [
      { id: 'executive-summary', title: 'Executive Summary', page: 1 },
      { id: 'market-sizing', title: 'Market Sizing & Segmentation', page: 10, subsections: ['TAM / SAM / SOM by Vertical', 'Digital Health vs Medtech vs Insurance', 'Geographic Opportunity Mapping'] },
      { id: 'telemedicine', title: 'Telemedicine & Digital Consultation', page: 30, subsections: ['Platform Landscape', 'Monetisation Models', 'Regulatory Framework'] },
      { id: 'diagnostics', title: 'Diagnostics & AI in Healthcare', page: 48, subsections: ['Imaging & Pathology AI', 'Point-of-Care Testing', 'Lab Automation'] },
      { id: 'hospital-tech', title: 'Hospital Management & Operations', page: 64, subsections: ['HMIS Landscape', 'EMR Adoption Barriers', 'Tier-2/3 Hospital Deep Dive'] },
      { id: 'insurance-tech', title: 'Health Insurance Technology', page: 84, subsections: ['Claims Automation', 'Underwriting Innovation', 'Distribution & Aggregation'] },
      { id: 'regulatory', title: 'Regulatory & Compliance Map', page: 102, subsections: ['NCISM & AYUSH', 'Digital Health Framework', 'PDPB Implications'] },
      { id: 'go-to-market', title: 'Go-to-Market Playbooks', page: 116 },
      { id: 'appendix', title: 'Appendix', page: 128 },
    ],
    methodology: [
      { step: 1, title: 'Top-Down Sizing', description: 'Built TAM estimates from government health expenditure data, insurance penetration, and digital adoption rates — cross-validated with bottom-up company-level revenue aggregation.' },
      { step: 2, title: 'Competitive Mapping', description: 'Mapped 150+ healthtech companies across 8 sub-segments, scoring each on traction, funding, regulatory compliance, and scalability.' },
      { step: 3, title: 'Clinical & Hospital Interviews', description: 'Conducted 80+ interviews with hospital administrators, clinicians, and insurance executives to validate demand signals.' },
      { step: 4, title: 'Regulatory Scenario Planning', description: 'Modelled the impact of 6 pending regulatory changes on each sub-segment\'s economics and competitive dynamics.' },
    ],
    executiveSummary: 'India\'s healthtech opportunity is real, large, and structurally underbuilt — but it demands a different playbook than other tech sectors. The ₹12 lakh crore TAM by 2027 is not evenly distributed: insurance tech and hospital digitisation in tier-2/3 cities represent the two largest white spaces. The companies that will win are the ones that treat regulation as a feature, not a bug — because in healthcare, compliance is the moat.',
    conclusion: 'Healthtech in India is not a "move fast and break things" market. It is a "move deliberately and build trust" market. The opportunity is enormous, but it accrues to companies with deep clinical validation, genuine hospital relationships, and a regulatory strategy that is as rigorous as their product strategy. The data shows this clearly — and the playbooks in this report are built around it.',
  },
];

// ─────────────────────────────────────────────────
// HELPER: get a single report by its slug
// Used by the dynamic [slug] page
// ─────────────────────────────────────────────────
export function getReportBySlug(slug: string): Report | undefined {
  return reportsData.find((report) => report.slug === slug);
}

// ─────────────────────────────────────────────────
// HELPER: get all unique category names
// Used by the filter tabs on the listing page
// ─────────────────────────────────────────────────
export function getReportCategories(): string[] {
  const categories = reportsData.map((report) => report.category);
  return ['All Reports', ...new Set(categories)];
}