"use client";

import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<keyof typeof megaMenuContent | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<keyof typeof megaMenuContent | null>(null);

  const megaMenuContent = {
    about: {
      title: "About Sarsen & Company",
      description: "Learn more about our vision, mission, and the team behind our success.",
      links: [
        { label: "Our Story", href: "/about/story" },
        { label: "Our Team", href: "/about/team" },
        { label: "Leadership", href: "/about/leadership" },
        { label: "Careers", href: "/about/careers" },
        { label: "Global Locations", href: "/about/locations" },
      ],
      highlight: {
        title: "Join Our Team",
        description: "Explore career opportunities",
      }
    },
    resources: {
      title: "Resources & Insights",
      description: "Access our latest research, case studies, and industry insights.",
      links: [
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "White Papers", href: "/resources/white-papers" },
        { label: "Industry Reports", href: "/resources/reports" },
        { label: "Blog", href: "/resources/blog" },
        { label: "Webinars", href: "/resources/webinars" },
      ],
      highlight: {
        title: "Latest Report",
        description: "Q4 2024 Market Analysis",
      }
    },
    reports: {
      title: "Reports & Analytics",
      description: "Comprehensive analysis and data-driven insights for your business.",
      links: [
        { label: "Market Analysis", href: "/reports/market" },
        { label: "Financial Reports", href: "/reports/financial" },
        { label: "Growth Forecasts", href: "/reports/growth" },
        { label: "Sector Insights", href: "/reports/sector" },
        { label: "Custom Reports", href: "/reports/custom" },
      ],
      highlight: {
        title: "New Release",
        description: "2025 Startup Landscape",
      }
    },
    tools: {
      title: "Tools & Solutions",
      description: "Powerful tools to accelerate your strategic initiatives.",
      links: [
        { label: "Strategy Canvas", href: "/tools/canvas" },
        { label: "ROI Calculator", href: "/tools/calculator" },
        { label: "Market Mapper", href: "/tools/mapper" },
        { label: "Analytics Dashboard", href: "/tools/dashboard" },
        { label: "Planning Templates", href: "/tools/templates" },
      ],
      highlight: {
        title: "Featured Tool",
        description: "AI Strategy Assistant",
      }
    },
    investors: {
      title: "Investor Relations",
      description: "Information and resources for our investors and stakeholders.",
      links: [
        { label: "Financial Information", href: "/investors/financial" },
        { label: "Press Releases", href: "/investors/press" },
        { label: "Governance", href: "/investors/governance" },
        { label: "Contact IR", href: "/investors/contact" },
        { label: "Reports & Filings", href: "/investors/reports" },
      ],
      highlight: {
        title: "Q4 Results",
        description: "View latest earnings",
      }
    },
  };

  const handleMouseEnter = (menu: keyof typeof megaMenuContent) => {
    if (window.innerWidth >= 768) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveMenu(null);
    }
  };

  const toggleMobileSubmenu = (menu: keyof typeof megaMenuContent) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#002855]">
      <nav 
        className="max-w-[1400px] mx-auto px-4 md:px-8 relative"
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between h-16 md:h-20 relative z-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg md:text-xl">S</span>
            </div>
            <div className="text-white">
              <div className="text-lg md:text-xl font-bold leading-tight">Sarsen</div>
              <div className="text-xs md:text-sm font-light leading-tight">& Company</div>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 ml-16 relative z-20">
            {Object.keys(megaMenuContent).map((menu) => (
              <a
                key={menu}
                href={`/${menu}`}
                className={`px-5 font-medium relative ${
                  activeMenu === menu 
                    ? 'text-[#002855] bg-white rounded-t-lg pt-3 pb-6' 
                    : 'text-white hover:text-blue-200 py-3'
                }`}
                onMouseEnter={() => handleMouseEnter(menu as keyof typeof megaMenuContent)}
                style={{
                  marginBottom: activeMenu === menu ? '-1.25rem' : '0',
                  zIndex: activeMenu === menu ? 30 : 20,
                  transition: 'none'
                }}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </a>
            ))}
          </div>
          
          {/* Contact Us Button - Desktop */}
          <a 
            href="/contact" 
            className="hidden md:block px-6 md:px-8 py-2 md:py-3 bg-white text-[#002855] font-semibold rounded-md hover:bg-blue-50 transition-colors shadow-lg text-sm md:text-base"
          >
            Contact Us
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white z-10 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
        </div>

        {/* Desktop Mega Menu Dropdown - FUSED WITH TAB */}
        {activeMenu && megaMenuContent[activeMenu] && (
          <div 
            className="hidden md:block absolute left-8 right-8 z-10 animate-fadeIn"
            style={{ top: '100%' }}
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >            
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="flex min-h-[320px]">
                
                {/* Section 1: Title */}
                <div className="w-[30%] bg-gradient-to-br from-blue-50 to-white p-8 border-r border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {megaMenuContent[activeMenu].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {megaMenuContent[activeMenu].description}
                  </p>
                </div>

                {/* Section 2: Links */}
                <div className="w-[50%] p-8 border-r border-gray-200">
                  <div className="border-t-2 border-blue-600 pt-6 mb-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-4">
                      Explore {activeMenu}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {megaMenuContent[activeMenu].links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 hover:translate-x-1 transform duration-200"
                      >
                        {link.label}
                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Section 3: Highlight */}
                <div className="w-[20%] bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      {megaMenuContent[activeMenu].highlight.title}
                    </h4>
                    <p className="text-blue-100 text-sm mb-4">
                      {megaMenuContent[activeMenu].highlight.description}
                    </p>
                    <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {Object.keys(megaMenuContent).map((menu) => (
                <div key={menu} className="border-b border-gray-200 pb-2">
                  <button
                    className="w-full flex items-center justify-between py-3 text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                    onClick={() => toggleMobileSubmenu(menu as keyof typeof megaMenuContent)}
                  >
                    <span className="capitalize">{menu}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${mobileSubmenu === menu ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {mobileSubmenu === menu && (
                    <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-3">
                        {megaMenuContent[menu].description}
                      </p>
                      {megaMenuContent[menu].links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                          {link.label}
                          <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      ))}
                      <div className="mt-4 p-4 bg-blue-600 rounded-lg text-white">
                        <h4 className="font-bold mb-1">
                          {megaMenuContent[menu].highlight.title}
                        </h4>
                        <p className="text-blue-100 text-sm mb-3">
                          {megaMenuContent[menu].highlight.description}
                        </p>
                        <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-semibold w-full">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <a 
                href="/contact" 
                className="block w-full mt-4 px-6 py-3 bg-[#002855] text-white font-semibold rounded-md hover:bg-blue-900 transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
        
      </nav>
    </header>
  );
}