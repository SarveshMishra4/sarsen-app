// app/resources/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolBySlug, getAllToolSlugs, getRelatedTools } from '../../data/tools';
import ToolCalculator from './ToolCalculator';
import ToolResultsDisplay from './ResultsDisplay';

// =====================================================
// GENERATE STATIC PARAMS
// =====================================================
export async function generateStaticParams() {
  const slugs = getAllToolSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// =====================================================
// GENERATE METADATA
// =====================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found | Sareen & Company',
      description: 'The tool you are looking for does not exist.',
    };
  }

  return {
    title: tool.seo.title,
    description: tool.seo.description,
    keywords: tool.seo.keywords.join(', '),
    openGraph: {
      title: tool.seo.title,
      description: tool.seo.description,
      type: 'website',
    },
  };
}

// =====================================================
// MAIN TOOL PAGE COMPONENT
// =====================================================
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  // If tool not found, show 404
  if (!tool) {
    notFound();
  }

  // Get related tools
  const relatedTools = getRelatedTools(tool.relatedTools);

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: `${tool.color}10` }} // Light version of tool color
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-3xl">{tool.icon}</div>
            <div>
              <div className="inline-block mb-4">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
                >
                  {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
                {tool.hero.headline}
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                {tool.hero.subheadline}
              </p>
            </div>
          </div>
          
          {/* Tool Stats */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{tool.readingTime || 'Quick Calculation'}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span>{tool.stats.calculations.toLocaleString()} calculations</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Updated {tool.stats.lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Calculator Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column: Calculator */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Calculator</h2>
                <p className="text-gray-600">{tool.overview}</p>
              </div>
              
              {/* Interactive Calculator Component */}
              <ToolCalculator tool={tool} />
            </div>
            
            {/* Right Column: Results & Insights */}
            <div className="space-y-8">
              {/* Results Display */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Results & Analysis</h2>
                <ToolResultsDisplay tool={tool} />
              </div>
              
              {/* Use Cases */}
              {tool.useCases && tool.useCases.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Use Cases</h2>
                  <div className="space-y-6">
                    {tool.useCases.map((useCase, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-medium text-gray-900 mb-2">{useCase.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{useCase.description}</p>
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                          Load this example →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Interpretation & Benchmarks */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{tool.interpretation.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Points */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  {tool.interpretation.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Industry Benchmarks */}
              {tool.interpretation.benchmarks && tool.interpretation.benchmarks.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Industry Benchmarks</h3>
                  <div className="space-y-4">
                    {tool.interpretation.benchmarks.map((benchmark, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-900">{benchmark.industry}</span>
                          <span className="text-blue-600 font-semibold">{benchmark.value}</span>
                        </div>
                        <p className="text-sm text-gray-600">{benchmark.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Related Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool) => (
                <Link
                  key={relatedTool.slug}
                  href={`/resources/${relatedTool.slug}`}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl">{relatedTool.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-900">{relatedTool.title}</h3>
                      <p className="text-sm text-gray-600">{relatedTool.shortDescription}</p>
                    </div>
                  </div>
                  <div className="text-blue-600 text-sm font-medium flex items-center gap-1">
                    <span>Use this tool</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1E3D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-6">Need Custom Calculations?</h2>
          <p className="text-gray-300 mb-8">
            We can build custom calculators tailored to your specific business model. 
            Contact us for enterprise-grade financial modeling tools.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            <span>Contact for Custom Tools</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}