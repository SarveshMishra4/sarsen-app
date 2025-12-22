"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      title: "Integrity",
      description: "We believe in transparency, honesty, and ethical conduct in all our engagements.",
      icon: "🔒"
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in our work, delivering exceptional value to our clients.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work as partners with our clients, fostering open communication and shared success.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and approaches to solve complex business challenges.",
      icon: "💡"
    }
  ];

  const leadershipTeam = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "20+ years in strategic consulting with Fortune 500 companies. MBA from Harvard Business School.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Strategy Officer",
      bio: "Former McKinsey partner with expertise in digital transformation and market expansion.",
      image: "/team/michael.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      bio: "Operational excellence specialist with experience across manufacturing and service industries.",
      image: "/team/priya.jpg"
    },
    {
      name: "James Wilson",
      role: "Director of Client Success",
      bio: "15 years in client relationship management with focus on long-term partnership development.",
      image: "/team/james.jpg"
    }
  ];

  const timelineEvents = [
    {
      year: "2008",
      title: "Foundation",
      description: "Sarsen & Company was founded with a vision to redefine strategic consulting."
    },
    {
      year: "2012",
      title: "Global Expansion",
      description: "Opened first international offices in London and Singapore."
    },
    {
      year: "2016",
      title: "Digital Practice",
      description: "Established dedicated digital transformation practice."
    },
    {
      year: "2020",
      title: "Industry Recognition",
      description: "Named among top 10 strategic consulting firms by Business Today."
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Serving 200+ clients across 40+ industries worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-[#002855] text-white py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              About Sarsen & Company
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              We are a global strategy consulting firm dedicated to helping organizations 
              navigate complexity, seize opportunities, and achieve sustainable growth.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Since 2008</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower organizations with strategic clarity and execution excellence, 
                transforming their vision into measurable, sustainable results that create 
                lasting value for all stakeholders.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-4xl mb-4">👁️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the world's most trusted partner for strategic transformation, 
                recognized for our integrity, innovation, and unwavering commitment 
                to client success in an ever-evolving global landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global recognition, our journey is defined by 
              our commitment to excellence and client success.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12"}`}>
                    <div className={`bg-white rounded-lg p-6 border border-gray-200 shadow-sm ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <div className="text-sm text-[#002855] font-semibold mb-2">{event.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-8 h-8 bg-white border-2 border-[#002855] rounded-full flex items-center justify-center z-10 relative">
                      <div className="w-3 h-3 bg-[#002855] rounded-full"></div>
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-300 md:hidden"></div>
                    )}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and define who we are as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-gray-50 rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  activeValue === index ? "border-[#002855] bg-white shadow" : "border-gray-200 hover:border-gray-300"
                }`}
                onMouseEnter={() => setActiveValue(index)}
                onClick={() => setActiveValue(index)}
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our firm and partner with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                {/* Profile Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002855] to-blue-700 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div className="text-sm text-gray-600">Profile Image</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-sm text-[#002855] font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Serving clients worldwide with local expertise and global perspective.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#002855] to-blue-900 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">12</div>
                <div className="text-lg">Global Offices</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">40+</div>
                <div className="text-lg">Countries Served</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">250+</div>
                <div className="text-lg">Consultants Worldwide</div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="relative h-48 md:h-64 bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                {/* Simplified world map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🌍</div>
                    <div className="text-white text-lg font-semibold">Global Reach</div>
                    <div className="text-white/80 text-sm">North America • Europe • Asia • Australia</div>
                  </div>
                </div>
                
                {/* Location markers */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the hundreds of organizations that have transformed their strategy 
              and achieved remarkable results with our partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-[#002855] text-white font-semibold rounded-md hover:bg-blue-900 transition-colors shadow"
              >
                Contact Our Team
              </Link>
              <Link 
                href="/careers" 
                className="px-8 py-3 border border-gray-300 text-gray-900 font-semibold rounded-md hover:bg-gray-50 transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}