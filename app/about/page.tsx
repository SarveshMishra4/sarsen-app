import CTAButton from '../components/ctabutton'

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Sarsen Strategy Consulting
          </h1>
          <p className="text-xl text-gray-600">
            We transform abstract strategy into measurable, executable frameworks for 
            early-stage startups through quantitative analysis and productized consulting.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To provide every early-stage founder with data-driven clarity through 
              standardized diagnostic frameworks, mathematical models, and quantitative 
              market analysis that removes uncertainty from strategic decision-making.
            </p>
            <p className="text-gray-600">
              We believe strategy should be measurable, repeatable, and grounded in 
              numbers—not just intuition.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To become India's leading productized strategy consulting firm by 2030, 
              recognized for our quantitative approach to startup growth and our 
              standardized frameworks that deliver consistent results.
            </p>
            <p className="text-gray-600">
              We aim to process strategy through mathematical models, giving founders 
              control over their entire operational systems.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Quantitative Approach</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Research & Analysis</h3>
                <p className="text-gray-600">
                  Deep secondary market research, competitor analysis, and TAM sizing 
                  using proprietary data models to quantify market opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6">
                <span className="text-2xl">🧮</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mathematical Calculation</h3>
                <p className="text-gray-600">
                  Development of financial models, unit economics calculations, and 
                  growth projections based on quantitative metrics rather than assumptions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                <p className="text-gray-600">
                  Creation of detailed execution roadmaps with measurable KPIs, 
                  milestones, and resource allocation based on data-driven insights.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-6">
                <span className="text-2xl">📄</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Articulation & Documentation</h3>
                <p className="text-gray-600">
                  Clear communication of strategies through investor-ready documents, 
                  pitch decks, and operational playbooks that align teams around data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why We're Different</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Traditional consulting relies on experience and intuition. We replace ambiguity 
              with algorithms, qualitative opinions with quantitative metrics, and abstract 
              advice with standardized frameworks.
            </p>
            <p className="text-gray-300">
              Our productized services ensure consistent quality, predictable outcomes, 
              and scalable delivery—making elite strategy accessible to every early-stage startup.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-6">Ready for Data-Driven Strategy?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing number of founders who have transformed their startups 
            through our quantitative consulting approach.
          </p>
          <CTAButton href="/contact" text="Start Your Quantitative Journey" />
        </div>
      </div>
    </div>
  )
}