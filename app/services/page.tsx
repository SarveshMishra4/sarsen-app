import { services } from '../lib/services';
import ServiceCard from '../components/servicescard';
import CTAButton from '../components/ctabutton';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Productized Strategy Consulting
              <span className="block text-blue-800">Powered by Quantitative Analysis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Standardized frameworks with mathematical precision. Each service delivers measurable results 
              through data-driven methodologies, giving you control over your startup's trajectory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href="/contact" 
                text="Schedule Diagnostic Call" 
                variant="primary"
                className="text-lg px-8 py-4"
              />
              <CTAButton 
                href="#services" 
                text="Explore Services" 
                variant="outline"
                className="text-lg px-8 py-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Productized Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each service follows a standardized process with clear deliverables, timeline, and pricing.
          </p>
        </div>

        {/* Compact View for Overview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                compact={true}
              />
            ))}
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden`}
            >
              <div className={`${service.gradient} p-8`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center space-x-6 mb-6 md:mb-0">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-4xl text-white">
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

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-2">
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Description</h4>
                      <p className="text-gray-700">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((item, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
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
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">Our Process</h4>
                      <div className="space-y-6">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
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
                            className={`px-6 py-3 ${service.color} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Quantitative Strategy?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Schedule your free diagnostic session to understand how our mathematical models 
            can transform your startup's trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="/contact" 
              text="Book Free Diagnostic" 
              variant="white"
              className="text-lg px-8 py-4"
            />
            <CTAButton 
              href="tel:+911234567890" 
              text="Call Now: +91 12345 67890" 
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}