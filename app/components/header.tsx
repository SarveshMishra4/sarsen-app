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
        { 
          label: "Our Story", 
          href: "/about/story",
          description: "Discover our journey and founding principles"
        },
        { 
          label: "Our Team", 
          href: "/about/team",
          description: "Meet the experts driving our success"
        },
        { 
          label: "Leadership", 
          href: "/about/leadership",
          description: "Learn about our executive leadership"
        },
        { 
          label: "Careers", 
          href: "/about/careers",
          description: "Join our team of innovators"
        },
        { 
          label: "Global Locations", 
          href: "/about/locations",
          description: "Find our offices worldwide"
        },
      ],
      highlight: {
        title: "Join Our Team",
        description: "Explore career opportunities",
        thumbnail: "/images/careers-thumb.jpg",
        buttonText: "View Openings"
      }
    },
    resources: {
      title: "Resources & Insights",
      description: "Access our latest research, case studies, and industry insights.",
      links: [
        { 
          label: "Case Studies", 
          href: "/resources/case-studies",
          description: "Real-world examples of our solutions"
        },
        { 
          label: "White Papers", 
          href: "/resources/white-papers",
          description: "In-depth research and analysis"
        },
        { 
          label: "Industry Reports", 
          href: "/resources/reports",
          description: "Comprehensive market insights"
        },
        { 
          label: "Blog", 
          href: "/resources/blog",
          description: "Latest news and perspectives"
        },
        { 
          label: "Webinars", 
          href: "/resources/webinars",
          description: "Live and recorded sessions"
        },
      ],
      highlight: {
        title: "Latest Report",
        description: "Q4 2024 Market Analysis",
        thumbnail: "/images/report-thumb.jpg",
        buttonText: "Download PDF"
      }
    },
    reports: {
      title: "Reports & Analytics",
      description: "Comprehensive analysis and data-driven insights for your business.",
      links: [
        { 
          label: "Market Analysis", 
          href: "/reports/market",
          description: "Detailed market trends and forecasts"
        },
        { 
          label: "Financial Reports", 
          href: "/reports/financial",
          description: "Quarterly and annual financial data"
        },
        { 
          label: "Growth Forecasts", 
          href: "/reports/growth",
          description: "Projections and growth opportunities"
        },
        { 
          label: "Sector Insights", 
          href: "/reports/sector",
          description: "Industry-specific analysis"
        },
        { 
          label: "Custom Reports", 
          href: "/reports/custom",
          description: "Tailored research for your needs"
        },
      ],
      highlight: {
        title: "New Release",
        description: "2025 Startup Landscape",
        thumbnail: "/images/startup-thumb.jpg",
        buttonText: "Get Report"
      }
    },
    tools: {
      title: "Tools & Solutions",
      description: "Powerful tools to accelerate your strategic initiatives.",
      links: [
        { 
          label: "Strategy Canvas", 
          href: "/tools/canvas",
          description: "Visual strategic planning tool"
        },
        { 
          label: "ROI Calculator", 
          href: "/tools/calculator",
          description: "Calculate investment returns"
        },
        { 
          label: "Market Mapper", 
          href: "/tools/mapper",
          description: "Map market opportunities"
        },
        { 
          label: "Analytics Dashboard", 
          href: "/tools/dashboard",
          description: "Real-time data visualization"
        },
        { 
          label: "Planning Templates", 
          href: "/tools/templates",
          description: "Ready-to-use planning frameworks"
        },
      ],
      highlight: {
        title: "Featured Tool",
        description: "AI Strategy Assistant",
        thumbnail: "/images/ai-tool-thumb.jpg",
        buttonText: "Try Now"
      }
    },
    investors: {
      title: "Investor Relations",
      description: "Information and resources for our investors and stakeholders.",
      links: [
        { 
          label: "Financial Information", 
          href: "/investors/financial",
          description: "Financial statements and data"
        },
        { 
          label: "Press Releases", 
          href: "/investors/press",
          description: "Latest company announcements"
        },
        { 
          label: "Governance", 
          href: "/investors/governance",
          description: "Corporate governance details"
        },
        { 
          label: "Contact IR", 
          href: "/investors/contact",
          description: "Reach our investor relations team"
        },
        { 
          label: "Reports & Filings", 
          href: "/investors/reports",
          description: "Regulatory filings and reports"
        },
      ],
      highlight: {
        title: "Q4 Results",
        description: "View latest earnings",
        thumbnail: "/images/earnings-thumb.jpg",
        buttonText: "View Details"
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
                    ? 'text-[#002855] bg-white pt-3 pb-6' 
                    : 'text-white hover:text-blue-200 py-3'
                } ${activeMenu === menu ? 'rounded-t-lg' : ''}`}
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

                {/* Section 2: Links - Single column with descriptions */}
                <div className="w-[50%] p-8 border-r border-gray-200">
                  
                  <div className="space-y-1">
                    {megaMenuContent[activeMenu].links.slice(0, 7).map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="block py-2 px-3 hover:text-[#002855] transition-colors duration-200 group cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-[15px] text-gray-900 group-hover:text-[#002855]">
                            {link.label}
                          </span>
                          <span className="text-gray-500 text-xs mt-0.5 group-hover:text-gray-700 leading-tight">
                            {link.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Section 3: Highlight with Thumbnail */}
                <div className="w-[20%] p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="h-full flex flex-col">
                    {/* Thumbnail Image */}
                    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                        {/* Placeholder for thumbnail image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20"></div>
                        <div className="relative z-10 text-center p-4">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {megaMenuContent[activeMenu].highlight.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {megaMenuContent[activeMenu].highlight.description}
                        </div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <button className="mt-auto w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                      {megaMenuContent[activeMenu].highlight.buttonText}
                    </button>
                    
                    {/* Quick Tip */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        All resources are available for download
                      </p>
                    </div>
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
                      
                      {/* Mobile Links - With descriptions */}
                      <div className="space-y-1">
                        {megaMenuContent[menu].links.slice(0, 7).map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="block py-2 px-3 hover:text-[#002855] transition-colors duration-200 group cursor-pointer"
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-[15px] text-gray-900 group-hover:text-[#002855]">
                                {link.label}
                              </span>
                              <span className="text-gray-500 text-xs mt-0.5 group-hover:text-gray-700 leading-tight">
                                {link.description}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                      
                      {/* Mobile Highlight Section */}
                      <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-sm">
                              {megaMenuContent[menu].highlight.title}
                            </h4>
                            <p className="text-gray-600 text-xs mt-1">
                              {megaMenuContent[menu].highlight.description}
                            </p>
                            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-semibold w-full">
                              {megaMenuContent[menu].highlight.buttonText}
                            </button>
                          </div>
                        </div>
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