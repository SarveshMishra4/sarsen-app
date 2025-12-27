// app/careers/page.tsx - PART 1 OF 2
// Copy this first, then immediately copy Part 2 below it
'use client';

import React, { useState } from 'react';

// =====================================================
// HERO SECTION COMPONENT
// =====================================================
const CareersHero = () => {
  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
            Build Your Career in Strategic Consulting
          </h1>
          <p className="text-xl sm:text-2xl text-blue-300 font-light leading-relaxed mb-8">
            Join a team that values clarity, execution, and measurable impact over legacy consulting theatrics.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            At Sarsen & Company, we're building a different kind of consulting firm—one that delivers execution-ready strategy without the overhead, politics, or empty promises of traditional firms.
          </p>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// WHY JOIN US SECTION
// =====================================================
const WhyJoinUsSection = () => {
  const reasons = [
    {
      title: "Real Impact, No Fluff",
      description: "Work on projects where your analysis and recommendations directly influence business outcomes. No endless PowerPoints that gather dust—our deliverables get executed.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Accelerated Learning",
      description: "Exposure to diverse industries, business models, and strategic challenges across startups to enterprises. Build capabilities faster than traditional corporate roles.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Ownership & Autonomy",
      description: "Lead entire workstreams from research to final delivery. We hire people who can think independently and take initiative, not box-checkers waiting for instructions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Transparent Growth Path",
      description: "Clear progression based on capability and results, not politics or tenure. Your advancement depends on the value you create, not how well you navigate office dynamics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Work-Life Integration",
      description: "Demanding work with intelligent time management. We respect your life outside consulting and believe sustained excellence requires sustainable work patterns.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Build Something New",
      description: "Join a growing firm where your contributions shape our culture, methodologies, and trajectory. Early team members define what we become.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Why Join Sarsen & Company?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We're looking for people who want to do exceptional work without the baggage of traditional consulting culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#0A1E3D] transition-colors mb-2 leading-tight">
                    {reason.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// OPEN POSITIONS SECTION
// =====================================================
const OpenPositionsSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const positions = [
    {
      title: "Strategy Consultant",
      department: "Consulting",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-5 years",
      description: "Lead client engagements across growth strategy, market entry, and operational optimization. Requires strong analytical skills, business acumen, and ability to translate strategy into executable plans."
    },
    {
      title: "Senior Strategy Consultant",
      department: "Consulting",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "5-8 years",
      description: "Manage complex client engagements, mentor junior consultants, and contribute to firm's intellectual capital. Deep expertise in at least two of our service pillars required."
    },
    {
      title: "Business Analyst",
      department: "Consulting",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "0-2 years",
      description: "Support consulting engagements with research, data analysis, financial modeling, and deliverable creation. Perfect entry point for high-potential individuals starting their consulting career."
    },
    {
      title: "Financial Modeling Specialist",
      department: "Consulting",
      location: "Remote / Hybrid",
      type: "Full-time / Contract",
      experience: "3-6 years",
      description: "Build sophisticated financial models for valuations, fundraising, scenario planning, and investment decisions. Strong Excel/Python skills and financial analysis background required."
    }
  ];

  const departments = ['All', 'Consulting', 'Operations', 'Growth'];

  const filteredPositions = selectedDepartment === 'All' 
    ? positions 
    : positions.filter(pos => pos.department === selectedDepartment);

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight text-center">
            Current Openings
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-8">
            Explore opportunities to join our growing team. All positions offer competitive compensation, professional development, and meaningful work.
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-white text-[#0A1E3D] shadow-lg'
                    : 'bg-blue-900/30 text-blue-300 hover:bg-blue-900/50'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Positions List */}
        {filteredPositions.length > 0 ? (
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-lg p-6 border border-blue-800/30 hover:border-blue-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs font-medium text-blue-400 bg-blue-600/20 px-3 py-1 rounded">
                        {position.department}
                      </span>
                      <span className="text-xs font-medium text-gray-300 bg-gray-700/30 px-3 py-1 rounded">
                        {position.location}
                      </span>
                      <span className="text-xs font-medium text-gray-300 bg-gray-700/30 px-3 py-1 rounded">
                        {position.type}
                      </span>
                      <span className="text-xs font-medium text-gray-300 bg-gray-700/30 px-3 py-1 rounded">
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="bg-white text-[#0A1E3D] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium whitespace-nowrap self-start lg:self-center">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No positions available in this department currently.</p>
          </div>
        )}

      </div>
    </section>
  );
};

// =====================================================
// LINKEDIN CTA SECTION
// =====================================================
const LinkedInCTASection = () => {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A1E3D] to-[#1a3a5c] rounded-2xl p-8 sm:p-12 lg:p-16 border border-blue-800/30 shadow-2xl">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0077B5] rounded-lg mb-6 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
              Stay Updated on Career Opportunities
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Don't see the right role today? Follow us on LinkedIn where we post new career opportunities regularly, share insights about our work, and give you a behind-the-scenes look at life at Sarsen & Company.
            </p>

            <a
              href="https://www.linkedin.com/company/sarsen-and-company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0077B5] text-white px-8 py-4 rounded-lg hover:bg-[#006396] transition-all duration-300 font-medium shadow-lg group text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Follow Us on LinkedIn</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-blue-700/30">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-300 mb-2">500+</div>
              <div className="text-gray-400 text-sm">LinkedIn Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-300 mb-2">Weekly</div>
              <div className="text-gray-400 text-sm">New Opportunities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-blue-300 mb-2">2-3 Days</div>
              <div className="text-gray-400 text-sm">Average Response Time</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// CONTINUE TO PART 2...
// app/careers/page.tsx - PART 2 OF 2
// This continues directly from Part 1 - paste this immediately after Part 1

// =====================================================
// WHO WE'RE LOOKING FOR SECTION
// =====================================================
const WhoWereLookingForSection = () => {
  const qualities = [
    {
      title: "Strategic Thinkers",
      description: "You see patterns others miss, connect disparate ideas, and can articulate why something matters beyond surface-level analysis."
    },
    {
      title: "Exceptional Communicators",
      description: "You explain complex ideas simply, write with clarity and precision, and can influence without authority through logic and persuasion."
    },
    {
      title: "Relentlessly Curious",
      description: "You dig until you understand root causes, ask better questions than you answer, and constantly seek to expand your mental models."
    },
    {
      title: "Execution-Oriented",
      description: "You understand that perfect analysis without implementation is worthless. Your work is designed to be used, not admired."
    },
    {
      title: "Intellectually Honest",
      description: "You say 'I don't know' when you don't know, admit mistakes quickly, and update your views based on evidence rather than ego."
    },
    {
      title: "High Standards",
      description: "You're never satisfied with 'good enough,' yet you know when to ship. You balance excellence with pragmatism."
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Who We're Looking For
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Skills can be taught. We hire for characteristics that can't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-lg p-6 border border-blue-800/30 hover:border-blue-700/50 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-medium text-white mb-3">
                {quality.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// APPLICATION PROCESS SECTION
// =====================================================
const ApplicationProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Send your resume and a brief cover letter explaining why you're interested in Sarsen & Company and what unique value you bring.",
      duration: "5 minutes"
    },
    {
      number: "02",
      title: "Initial Review",
      description: "We review all applications thoroughly. If there's potential fit, we'll reach out within 5-7 business days.",
      duration: "5-7 days"
    },
    {
      number: "03",
      title: "Screening Call",
      description: "30-minute conversation to discuss your background, understand your career goals, and explain our work in detail.",
      duration: "30 minutes"
    },
    {
      number: "04",
      title: "Case Study",
      description: "Real business problem similar to our client work. Demonstrates your analytical thinking and problem-solving approach.",
      duration: "3-4 hours"
    },
    {
      number: "05",
      title: "Final Interview",
      description: "In-depth discussion with senior team members covering case study, technical capabilities, and cultural fit.",
      duration: "90 minutes"
    },
    {
      number: "06",
      title: "Offer Decision",
      description: "If successful, we extend an offer within 48 hours of final interview. You have time to consider and ask questions.",
      duration: "2 days"
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Our Application Process
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Transparent, respectful, and designed to identify mutual fit efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-full flex items-center justify-center text-white font-medium shadow-lg">
                {step.number}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {step.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Total timeline from application to offer typically takes 2-3 weeks. We move quickly for candidates we're excited about.
          </p>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// BENEFITS & COMPENSATION SECTION
// =====================================================
const BenefitsSection = () => {
  const benefits = [
    {
      category: "Compensation",
      items: [
        "Market-competitive base salary",
        "Performance-based bonuses",
        "Equity participation for senior roles",
        "Annual compensation reviews"
      ]
    },
    {
      category: "Professional Development",
      items: [
        "Training budget for courses and certifications",
        "Conference and event attendance",
        "Mentorship from senior consultants",
        "Clear career progression framework"
      ]
    },
    {
      category: "Work Flexibility",
      items: [
        "Remote-first with optional office access",
        "Flexible working hours",
        "Unlimited PTO policy",
        "Work-from-anywhere options"
      ]
    },
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Mental health support",
        "Wellness stipend",
        "Ergonomic home office setup"
      ]
    },
    {
      category: "Team Culture",
      items: [
        "Quarterly team offsites",
        "Regular knowledge-sharing sessions",
        "Collaborative environment",
        "Transparent communication"
      ]
    },
    {
      category: "Other Perks",
      items: [
        "Latest tools and software",
        "Premium subscriptions (research, data, news)",
        "Books and learning materials",
        "Referral bonuses"
      ]
    }
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Benefits & Compensation
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We invest in people who invest in excellence. Competitive compensation is table stakes—we also provide the environment and support for you to do your best work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#132B47] to-[#1a3a5c] rounded-lg p-6 border border-blue-800/30 hover:border-blue-700/50 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-medium text-white mb-4 pb-3 border-b border-blue-700/30">
                {benefit.category}
              </h3>
              <ul className="space-y-3">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// FAQ SECTION
// =====================================================
const CareersFAQSection = () => {
  const faqs = [
    {
      question: "Do you hire fresh graduates?",
      answer: "Yes, for our Business Analyst roles. We look for exceptional problem-solving ability, strong communication skills, and genuine intellectual curiosity. Relevant internships or project experience in consulting, finance, or strategy roles is a plus."
    },
    {
      question: "Is prior consulting experience required?",
      answer: "Not necessarily. While consulting experience is valuable, we also hire talented individuals from industry, finance, operations, and other fields who demonstrate strategic thinking and strong execution capabilities."
    },
    {
      question: "What does remote-first mean for your team?",
      answer: "Most work happens remotely with flexibility on location and hours. We have quarterly in-person offsites for team building and strategic planning. Some client engagements may require occasional travel or on-site work."
    },
    {
      question: "How long does career progression typically take?",
      answer: "Progression is capability-based, not time-based. High performers can advance faster than traditional firms. Typical timeline is 18-24 months between levels for strong performers, but exceptional cases can move faster."
    },
    {
      question: "What if I don't see a role that fits my background?",
      answer: "Send us your resume anyway at careers@sarsenandcompany.com. We're always looking for exceptional talent and may have upcoming roles that aren't posted yet. Also follow us on LinkedIn for regular updates."
    }
  ];

  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// =====================================================
// FINAL CTA SECTION
// =====================================================
const FinalCTASection = () => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
          Ready to Build Something Meaningful?
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          If you're looking for a place where your work matters, your ideas are valued, and excellence is the standard—we should talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-[#0A1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg">
            View Open Positions
          </button>
          
           <a href="https://www.linkedin.com/company/sarsen-and-company"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-8 py-4 rounded-lg hover:bg-[#006396] transition-colors font-medium shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>Follow on LinkedIn</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-700/30">
          <p className="text-gray-400 text-sm">
            Questions about careers at Sarsen & Company?{' '}
            <a href="mailto:careers@sarsenandcompany.com" className="text-blue-400 hover:text-blue-300 underline">
              careers@sarsenandcompany.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

// =====================================================
// MAIN CAREERS PAGE COMPONENT
// =====================================================
export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <WhyJoinUsSection />
      <OpenPositionsSection />
      <LinkedInCTASection />
      <WhoWereLookingForSection />
      <ApplicationProcessSection />
      <BenefitsSection />
      <CareersFAQSection />
      <FinalCTASection />
    </main>
  );
}