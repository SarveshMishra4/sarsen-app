"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("strategy");

  return (
    <div className="min-h-screen bg-[#002855] text-white">
      
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-12 md:pb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Left Side - Text Content */}
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-xs md:text-sm font-medium">Strategy Consulting</span>
                </div>
                
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Transforming Vision into
                  <span className="block text-white/90">Measurable Results</span>
                </h1>
                
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  We partner with forward-thinking organizations to design, execute, 
                  and scale strategies that drive sustainable growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 bg-white text-[#002855] font-semibold rounded-md hover:bg-blue-50 transition-colors shadow text-center text-sm md:text-base"
                  >
                    Start Your Journey
                  </Link>
                  <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm md:text-base">
                    View Case Studies
                  </button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div>
                    <div className="text-xl md:text-2xl font-bold">95%</div>
                    <div className="text-xs md:text-sm text-white/70">Client Retention</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">40+</div>
                    <div className="text-xs md:text-sm text-white/70">Industries Served</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">15+</div>
                    <div className="text-xs md:text-sm text-white/70">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Diagram/Visual */}
            <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative">
                {/* Main Circle - Reduced size */}
                <div className="w-full max-w-md mx-auto">
                  <div className="relative w-full aspect-square">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 border-3 border-white/20 rounded-full"></div>
                    
                    {/* Middle Ring */}
                    <div className="absolute inset-6 border-3 border-white/30 rounded-full"></div>
                    
                    {/* Inner Circle */}
                    <div className="absolute inset-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-lg md:text-xl font-bold mb-1">Your Growth</div>
                        <div className="text-xs md:text-sm text-white/80">Powered by Strategy</div>
                      </div>
                    </div>
                    
                    {/* Connection Points */}
                    {[
                      { angle: 0, label: "Research", color: "bg-blue-400" },
                      { angle: 60, label: "Analysis", color: "bg-blue-500" },
                      { angle: 120, label: "Planning", color: "bg-blue-600" },
                      { angle: 180, label: "Execution", color: "bg-blue-700" },
                      { angle: 240, label: "Monitor", color: "bg-blue-800" },
                      { angle: 300, label: "Optimize", color: "bg-blue-900" },
                    ].map((point, index) => {
                      const radius = 35; // Reduced from 40%
                      const angleInRad = (point.angle * Math.PI) / 180;
                      const x = 50 + radius * Math.cos(angleInRad);
                      const y = 50 + radius * Math.sin(angleInRad);
                      
                      return (
                        <div key={index}>
                          {/* Connection Line */}
                          <div 
                            className="absolute h-0.5 bg-white/30 transform origin-left"
                            style={{
                              left: '50%',
                              top: '50%',
                              width: `${radius}%`,
                              transform: `rotate(${point.angle}deg)`,
                              transformOrigin: '0 0',
                            }}
                          ></div>
                          
                          {/* Point */}
                          <div 
                            className={`absolute w-5 h-5 md:w-6 md:h-6 ${point.color} rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                            }}
                          >
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                          </div>
                          
                          {/* Label */}
                          <div 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-medium whitespace-nowrap"
                            style={{
                              left: `${x + (Math.cos(angleInRad) * 10)}%`,
                              top: `${y + (Math.sin(angleInRad) * 10)}%`,
                            }}
                          >
                            {point.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Floating elements - Reduced size */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm md:text-base font-bold">360°</div>
                    <div className="text-xs">Approach</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-14 h-14 md:w-18 md:h-18 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm md:text-base font-bold">100%</div>
                    <div className="text-xs">Custom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed for every stage of your strategic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Transformation",
                description: "Navigate the digital landscape with confidence through comprehensive transformation frameworks.",
                icon: "🔄",
                features: ["Digital Strategy", "Technology Roadmap", "Change Management"]
              },
              {
                title: "Market Expansion",
                description: "Identify and capitalize on new market opportunities with data-driven expansion strategies.",
                icon: "📈",
                features: ["Market Analysis", "Entry Strategy", "Localization"]
              },
              {
                title: "Operational Excellence",
                description: "Optimize processes and enhance efficiency to drive sustainable operational improvements.",
                icon: "⚙️",
                features: ["Process Optimization", "Cost Reduction", "Quality Improvement"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow transition-shadow duration-200">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-[#002855] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-5 py-2.5 bg-[#002855] text-white font-semibold rounded-md hover:bg-blue-900 transition-colors w-full text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-[#002855] py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
              A structured approach that delivers measurable results
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/20"></div>
            
            <div className="space-y-8 md:space-y-0">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description: "Deep dive into your organization's current state, challenges, and opportunities.",
                  align: "left"
                },
                {
                  step: "02",
                  title: "Strategy Design",
                  description: "Develop customized strategies aligned with your vision and market realities.",
                  align: "right"
                },
                {
                  step: "03",
                  title: "Implementation Plan",
                  description: "Create detailed roadmaps with clear milestones, resources, and timelines.",
                  align: "left"
                },
                {
                  step: "04",
                  title: "Execution & Support",
                  description: "Partner with your team to implement strategies and overcome obstacles.",
                  align: "right"
                },
                {
                  step: "05",
                  title: "Monitor & Optimize",
                  description: "Continuous tracking and refinement to ensure sustainable success.",
                  align: "left"
                }
              ].map((process, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${process.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-6`}>
                  <div className={`md:w-1/2 ${process.align === "left" ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="text-2xl font-bold text-white/40 mb-2">{process.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                      <p className="text-white/80 text-sm">{process.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-8 h-8 bg-[#002855] border-2 border-white rounded-full flex items-center justify-center z-10 relative">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    {index < 4 && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-white/20 md:hidden"></div>
                    )}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-[#002855] to-blue-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Strategy?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a complimentary consultation with our strategy experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-[#002855] font-semibold rounded-md hover:bg-blue-50 transition-colors shadow text-sm md:text-base"
              >
                Book Consultation
              </Link>
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm md:text-base">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}