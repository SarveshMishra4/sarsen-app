'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// Dark blue background with company tagline
// =====================================================
const AboutHeroSection = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[400px] pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative stars/dots in background */}
      <div className="absolute top-20 right-10 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">
            About Sareen & Company
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Empowering founders with strategic insights and solutions for sustainable growth
          </p>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// OUR STORY SECTION
// Light background with story content and circular illustration
// =====================================================
const OurStorySection = () => {
  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Story Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
                Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
                Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder.
              </p>
              <p>
                Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
                Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder.
              </p>
              <p>
                Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
                Are You a Founder / Are You a Founder / Are You a Founder.
              </p>
            </div>
          </div>

          {/* Right Column - Circular Illustration */}
          <div className="relative h-96 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full max-w-md">
              {/* Outer circle */}
              <circle cx="150" cy="150" r="140" stroke="#4A90E2" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.3" />
              
              {/* Main segmented circle */}
              <circle cx="150" cy="150" r="120" stroke="#1E5A8E" strokeWidth="3" fill="none" strokeDasharray="20,5" />
              
              {/* Inner circle */}
              <circle cx="150" cy="150" r="100" stroke="#4A90E2" strokeWidth="2" fill="none" />
              
              {/* Center circle */}
              <circle cx="150" cy="150" r="80" fill="#1E5A8E" opacity="0.1" />
              <circle cx="150" cy="150" r="60" fill="#1E5A8E" opacity="0.2" />
              
              {/* Decorative lines radiating from center */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 150 + 65 * Math.cos(rad);
                const y1 = 150 + 65 * Math.sin(rad);
                const x2 = 150 + 115 * Math.cos(rad);
                const y2 = 150 + 115 * Math.sin(rad);
                return (
                  <line 
                    key={i}
                    x1={x1} 
                    y1={y1} 
                    x2={x2} 
                    y2={y2} 
                    stroke="#4A90E2" 
                    strokeWidth="1" 
                    opacity="0.5"
                  />
                );
              })}
              
              {/* Small dots around the circle */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 150 + 130 * Math.cos(rad);
                const y = 150 + 130 * Math.sin(rad);
                return (
                  <circle 
                    key={i}
                    cx={x} 
                    cy={y} 
                    r="4" 
                    fill="#4A90E2"
                  />
                );
              })}
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// OUR PROCESS SECTION
// Dark blue background with timeline visualization
// =====================================================
const OurProcessSection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            Our Story & Process
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-4xl">
            Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
            Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
            Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder.
          </p>
        </div>

        {/* Process Timeline with Overlapping Circles */}
        <div className="relative mt-16 overflow-x-auto">
          <div className="bg-[#132B47] rounded-lg p-8 min-w-[900px]">
            <svg viewBox="0 0 1000 300" className="w-full h-64">
              {/* Horizontal baseline */}
              <line x1="20" y1="150" x2="980" y2="150" stroke="#2C5282" strokeWidth="2" />
              
              {/* Week markers and labels */}
              {[
                { x: 50, week: 1, size: 40, opacity: 0.3, color: '#4A90E2' },
                { x: 150, week: 2, size: 50, opacity: 0.4, color: '#5BA3E8' },
                { x: 250, week: 3, size: 60, opacity: 0.5, color: '#6CB4EE' },
                { x: 350, week: 4, size: 80, opacity: 0.6, color: '#7EC8F5' },
                { x: 500, week: 5, size: 100, opacity: 0.7, color: '#90D5F7' },
                { x: 650, week: 6, size: 90, opacity: 0.65, color: '#7EC8F5' },
                { x: 800, week: 7, size: 70, opacity: 0.55, color: '#6CB4EE' },
                { x: 920, week: 8, size: 50, opacity: 0.5, color: '#5BA3E8', isLaunch: true }
              ].map((item, i) => (
                <g key={i}>
                  {/* Vertical line */}
                  <line 
                    x1={item.x} 
                    y1={150 - item.size/2 - 10} 
                    x2={item.x} 
                    y2={150 + item.size/2 + 10} 
                    stroke="#4A90E2" 
                    strokeWidth="1" 
                    opacity="0.3"
                  />
                  
                  {/* Overlapping circles */}
                  <circle 
                    cx={item.x} 
                    cy={150} 
                    r={item.size} 
                    fill={item.color} 
                    opacity={item.opacity * 0.3}
                  />
                  <circle 
                    cx={item.x} 
                    cy={150} 
                    r={item.size * 0.7} 
                    fill={item.color} 
                    opacity={item.opacity * 0.5}
                  />
                  <circle 
                    cx={item.x} 
                    cy={150} 
                    r={item.size * 0.4} 
                    fill={item.color} 
                    opacity={item.opacity}
                  />
                  
                  {/* Week label */}
                  <text 
                    x={item.x} 
                    y={item.isLaunch ? 70 : 250} 
                    textAnchor="middle" 
                    fill="#A0AEC0" 
                    fontSize="11"
                    fontWeight="500"
                  >
                    {item.isLaunch ? 'LAUNCH' : `WEEK ${item.week}`}
                  </text>
                  
                  {/* Test labels */}
                  <text 
                    x={item.x} 
                    y={item.isLaunch ? 85 : 235} 
                    textAnchor="middle" 
                    fill="#718096" 
                    fontSize="9"
                  >
                    TEST {i * 2 + 1}
                  </text>
                  <text 
                    x={item.x} 
                    y={item.isLaunch ? 97 : 223} 
                    textAnchor="middle" 
                    fill="#718096" 
                    fontSize="9"
                  >
                    TEST {i * 2 + 2}
                  </text>
                </g>
              ))}
              
              {/* Decorative elements */}
              <circle cx="100" cy="50" r="2" fill="#4A90E2" opacity="0.4" />
              <circle cx="700" cy="270" r="2" fill="#4A90E2" opacity="0.4" />
              <circle cx="450" cy="40" r="1.5" fill="#4A90E2" opacity="0.3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// MISSION & VISION SECTION
// Light gray background with two columns
// =====================================================
const MissionVisionSection = () => {
  return (
    <section className="bg-[#8B9EB0] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Our Mission
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
              Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
              Are You a Founder / Are You a Founder.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Our Vision
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
              Are You a Founder / Are You a Founder / Are You a Founder / Are You a Founder / 
              Are You a Founder / Are You a Founder.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// OUR VALUES SECTION
// Dark blue background with value cards
// =====================================================
const OurValuesSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "We continuously seek new and better ways to solve problems and create value for our clients."
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all our relationships and business dealings."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality results and exceeding expectations."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of working together to achieve extraordinary outcomes."
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-[#132B47] rounded-lg p-6 hover:bg-[#1a3a5c] transition-colors duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500/40"></div>
                </div>
              </div>
              <h3 className="text-xl text-white font-medium mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// OUR TEAM SECTION
// Light background with team member cards organized by role
// =====================================================
const OurTeamSection = () => {
  const teamSections = [
    {
      title: "Leadership Team",
      members: [
        { name: "Komal Shah", role: "CEO & Founder", image: "/team/komal.jpg", linkedin: "#" },
        { name: "John Doe", role: "Chief Technology Officer", image: "/team/john.jpg", linkedin: "#" },
        { name: "Jane Smith", role: "Chief Operating Officer", image: "/team/jane.jpg", linkedin: "#" }
      ]
    },
    {
      title: "Advisory Board",
      members: [
        { name: "Michael Chen", role: "Strategic Advisor", image: "/team/michael.jpg", linkedin: "#" },
        { name: "Sarah Williams", role: "Financial Advisor", image: "/team/sarah.jpg", linkedin: "#" },
        { name: "David Brown", role: "Technology Advisor", image: "/team/david.jpg", linkedin: "#" }
      ]
    },
    {
      title: "Core Team",
      members: [
        { name: "Emily Davis", role: "Senior Consultant", image: "/team/emily.jpg", linkedin: "#" },
        { name: "Robert Wilson", role: "Business Analyst", image: "/team/robert.jpg", linkedin: "#" },
        { name: "Lisa Anderson", role: "Marketing Lead", image: "/team/lisa.jpg", linkedin: "#" },
        { name: "James Taylor", role: "Product Manager", image: "/team/james.jpg", linkedin: "#" }
      ]
    }
  ];

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Meet the talented individuals who make our mission possible
          </p>
        </div>

        {/* Team Sections */}
        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16 last:mb-0">
            
            {/* Section Title */}
            <h3 className="text-2xl font-light text-gray-800 mb-8 pb-4 border-b-2 border-[#8B9EB0]">
              {section.title}
            </h3>

            {/* Team Members Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.members.map((member, memberIndex) => (
                <a
                  key={memberIndex}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    
                    {/* Member Photo */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
                      {/* Placeholder - Replace with actual images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300"></div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {member.role}
                      </p>
                      
                      {/* LinkedIn Icon */}
                      <div className="mt-4 flex items-center text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        View Profile
                      </div>
                    </div>

                  </div>
                </a>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

// =====================================================
// MAIN ABOUT PAGE COMPONENT - EXPORTS ALL SECTIONS
// =====================================================
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <OurStorySection />
      <OurProcessSection />
      <MissionVisionSection />
      <OurValuesSection />
      <OurTeamSection />
    </main>
  );
}