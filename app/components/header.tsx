"use client";

import { useState } from "react";

export default function Header() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // State to track which mega menu is currently active (desktop)
  const [activeMenu, setActiveMenu] = useState<keyof typeof megaMenuContent | null>(null);
  // State to control mobile menu open/close
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to track which submenu is open in mobile view
  const [mobileSubmenu, setMobileSubmenu] = useState<keyof typeof megaMenuContent | null>(null);

  // ============================================================================
  // MEGA MENU CONTENT CONFIGURATION
  // ============================================================================
  // This object defines all the navigation items and their submenu content
  // Each key corresponds to a main navigation item
  const megaMenuContent = {
    // ----------------------------------------------------------------------------
    // HOME NAVIGATION
    // ----------------------------------------------------------------------------
    // home: {
    //   title: "Welcome to Sarsen",
    //   description: "Your gateway to strategic excellence and innovative solutions.",
    //   links: [
    //     {
    //       label: "User Dashboard",
    //       href: "/home#user-dashboard",
    //       description: "Access your personalized dashboard"
    //     },
    //     {
    //       label: "Admin Dashboard",
    //       href: "/home#admin-dashboard",
    //       description: "Administrative control panel"
    //     },
    //     {
    //       label: "User Login",
    //       href: "/home#user-login",
    //       description: "Sign in to your account"
    //     },
    //     {
    //       label: "Admin Login",
    //       href: "/home#admin-login",
    //       description: "Administrator access portal"
    //     },
    //     {
    //       label: "Career Applications",
    //       href: "/home#career-applications",
    //       description: "View and manage job applications"
    //     },
    //   ],
    //   highlight: {
    //     title: "Quick Access",
    //     description: "Dashboard & Login",
    //     thumbnail: "/images/dashboard-thumb.jpg",
    //     buttonText: "Get Started"
    //   }
    // },

    // ----------------------------------------------------------------------------
    // ABOUT NAVIGATION
    // ----------------------------------------------------------------------------
    about: {
      title: "About Sarsen & Company",
      description: "Learn about our philosophy, approach, and the people driving our mission.",
      links: [
        {
          label: "How We Think",
          href: "/about#how-we-think",
          description: "Our operating philosophy"
        },
        {
          label: "How We Approach",
          href: "/about#how-we-approach",
          description: "Our strategic methodology"
        },
        {
          label: "The People Behind the Work",
          href: "/about#people",
          description: "Meet our team of experts"
        },
        {
          label: "How We Are And How We Become",
          href: "/about#evolution",
          description: "Our journey and transformation"
        },
      ],
      highlight: {
        title: "Our Philosophy",
        description: "Discover our approach",
        thumbnail: "/images/philosophy-thumb.jpg",
        buttonText: "Learn More"
      }
    },

    // ----------------------------------------------------------------------------
    // RESOURCES NAVIGATION
    // ----------------------------------------------------------------------------
    resources: {
      title: "Resources & Insights",
      description: "Access our comprehensive library of frameworks, research, and industry insights.",
      links: [
        {
          label: "Frameworks We Use",
          href: "/resources#frameworks",
          description: "Strategic frameworks and methodologies"
        },
        {
          label: "Case Studies",
          href: "/resources#case-studies",
          description: "Real-world success stories"
        },
        {
          label: "Tools (By Request)",
          href: "/resources#tools",
          description: "Specialized analytical tools"
        },
        {
          label: "Research & Reports",
          href: "/resources#research",
          description: "In-depth analysis and insights"
        },
      ],
      highlight: {
        title: "Latest Framework",
        description: "Strategic Planning Guide",
        thumbnail: "/images/framework-thumb.jpg",
        buttonText: "View Resources"
      }
    },

    // ----------------------------------------------------------------------------
    // WORK NAVIGATION
    // ----------------------------------------------------------------------------
    work: {
      title: "Our Engagement Portfolio",
      description: "Explore our work across industries and see the impact we've delivered.",
      links: [
        {
          label: "Work on Engagement (Combo Use)",
          href: "/work#engagement",
          description: "Combined engagement approaches"
        },
        {
          label: "Communication & Guidance",
          href: "/work#communication",
          description: "Strategic communication services"
        },
        {
          label: "Work by Sector",
          href: "/work#by-sector",
          description: "Industry-specific solutions"
        },
        {
          label: "Storytelling & Presentations",
          href: "/work#storytelling",
          description: "Narrative development and delivery"
        },
      ],
      highlight: {
        title: "Featured Work",
        description: "Recent client success",
        thumbnail: "/images/work-thumb.jpg",
        buttonText: "View Portfolio"
      }
    },

    // ----------------------------------------------------------------------------
    // SERVICES NAVIGATION
    // ----------------------------------------------------------------------------
    services: {
      title: "Our Service Offerings",
      description: "Comprehensive solutions tailored to drive your business forward.",
      links: [
        {
          label: "Clarity Reset",
          href: "/services#clarity-reset",
          description: "Strategic clarity and realignment"
        },
        {
          label: "Idea Review",
          href: "/services#idea-review",
          description: "Concept validation and refinement"
        },
        {
          label: "PMF Check",
          href: "/services#pmf-check",
          description: "Product-Market Fit analysis"
        },
        {
          label: "Revenue Diagnosis",
          href: "/services#revenue-diagnosis",
          description: "Revenue optimization assessment"
        },
        {
          label: "Growth Bottleneck",
          href: "/services#growth-bottleneck",
          description: "Identify and remove growth barriers"
        },
        {
          label: "Capital Readiness",
          href: "/services#capital-readiness",
          description: "Prepare for funding rounds"
        },
        {
          label: "Scale Review",
          href: "/services#scale-review",
          description: "Scalability assessment"
        },
      ],
      highlight: {
        title: "Popular Service",
        description: "Clarity Reset Program",
        thumbnail: "/images/service-thumb.jpg",
        buttonText: "Explore Services"
      }
    },


  };

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  /**
   * Handles mouse enter event on desktop navigation items
   * Only activates on desktop screens (width >= 768px)
   */
  const handleMouseEnter = (menu: keyof typeof megaMenuContent) => {
    if (window.innerWidth >= 768) {
      setActiveMenu(menu);
    }
  };

  /**
   * Handles mouse leave event to close mega menu on desktop
   */
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveMenu(null);
    }
  };

  /**
   * Toggles submenu visibility in mobile view
   * If the same menu is clicked, it closes; otherwise it opens the new menu
   */
  const toggleMobileSubmenu = (menu: keyof typeof megaMenuContent) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* ========================================================================== */}
      {/* CURVED TAB STYLING */}
      {/* ========================================================================== */}
      {/* Creates rounded corners on active navigation tab to blend with dropdown */}
      <style jsx>{`
        .active-tab-curved {
          position: relative;
          border-radius: 8px 8px 0 0;
        }
        
        /* Left curve - creates rounded corner on left side */
        .active-tab-curved::before {
          content: '';
          position: absolute;
          left: -8px;
          bottom: 0;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle at 0 0, transparent 8px, white 8px);
        }
        
        /* Right curve - creates rounded corner on right side */
        .active-tab-curved::after {
          content: '';
          position: absolute;
          right: -8px;
          bottom: 0;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle at 100% 0, transparent 8px, white 8px);
        }
      `}</style>

      {/* ========================================================================== */}
      {/* HEADER CONTAINER */}
      {/* ========================================================================== */}
      {/* Sticky header with dark blue background */}
      <header className="sticky top-0 z-50 bg-[#002855]">
        <nav
          className="max-w-[1400px] mx-auto px-4 md:px-8 relative"
          onMouseLeave={handleMouseLeave}
        >
          {/* ====================================================================== */}
          {/* TOP BAR - Logo, Navigation, CTA Button */}
          {/* ====================================================================== */}
          <div className="flex items-center justify-between h-16 md:h-20 relative z-20">

            {/* ---------------------------------------------------------------------- */}
            {/* LOGO SECTION */}
            {/* ---------------------------------------------------------------------- */}
            <a href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <img
                  src="/logo/Sarsen-White.svg"
                  alt="Sarsen Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white">
                <div className="text-lg md:text-xl font-bold leading-tight">Sarsen</div>
                <div className="text-xs md:text-sm font-light leading-tight">& Company</div>
              </div>
            </a>

            {/* ---------------------------------------------------------------------- */}
            {/* DESKTOP NAVIGATION MENU */}
            {/* ---------------------------------------------------------------------- */}
            {/* Hidden on mobile (md:flex), shows navigation items horizontally */}
            <div className="hidden md:flex items-center space-x-2 ml-16 relative z-20">
              {Object.keys(megaMenuContent).map((menu) => (
<a

                key = { menu }
                  href = {`/${menu}`}
              className={`px-5 font-medium relative ${activeMenu === menu
                  ? 'text-[#002855] bg-white pt-3 pb-6 active-tab-curved'
                  : 'text-white hover:text-blue-200 py-3'
                }`}
              onMouseEnter={() => handleMouseEnter(menu as keyof typeof megaMenuContent)}
              style={{
                marginBottom: activeMenu === menu ? '-1.25rem' : '0',
                zIndex: activeMenu === menu ? 30 : 20,
                transition: 'none'
              }}
                >
              {/* Capitalize first letter of menu name */}
              {menu.charAt(0).toUpperCase() + menu.slice(1)}
            </a>
              ))}
          </div>

          {/* ---------------------------------------------------------------------- */}
          {/* CONTACT US BUTTON - Desktop Only */}
          {/* ---------------------------------------------------------------------- */}
          <a
            href="/contact"
            className="hidden md:block px-6 md:px-8 py-2 md:py-3 bg-white text-[#002855] font-semibold rounded-md hover:bg-blue-50 transition-colors shadow-lg text-sm md:text-base"
          >
            Contact Us
          </a>

          {/* ---------------------------------------------------------------------- */}
          {/* MOBILE HAMBURGER MENU TOGGLE */}
          {/* ---------------------------------------------------------------------- */}
          {/* Shows on mobile (md:hidden), toggles mobile menu */}
          <button
            className="md:hidden text-white z-10 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* X icon when menu is open */}
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
        {/* ====================================================================== */}
        {/* DESKTOP MEGA MENU DROPDOWN */}
        {/* ====================================================================== */}
        {/* Only shows when a menu item is hovered (activeMenu is set) */}
        {activeMenu && megaMenuContent[activeMenu] && (
          <div
            className="hidden md:block absolute left-8 right-8 z-10 animate-fadeIn"
            style={{ top: '100%' }}
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="flex min-h-[320px]">

                {/* ------------------------------------------------------------------ */}
                {/* SECTION 1: Title & Description (30% width) */}
                {/* ------------------------------------------------------------------ */}
                <div className="w-[30%] bg-gradient-to-br from-blue-50 to-white p-8 border-r border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {megaMenuContent[activeMenu].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {megaMenuContent[activeMenu].description}
                  </p>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* SECTION 2: Navigation Links (50% width) */}
                {/* ------------------------------------------------------------------ */}
                {/* Displays up to 7 links with anchor scrolling to page sections */}
                <div className="w-[50%] p-8 border-r border-gray-200">
                  <div className="space-y-1">
                    {megaMenuContent[activeMenu].links.slice(0, 7).map((link, idx) => (
 <a

                      key = { idx }
                          href = { link.href }
                          className = "block py-2 px-3 hover:text-[#002855] transition-colors duration-200 group cursor-pointer"
                      >
                      <div className="flex flex-col">
                        {/* Link label (main text) */}
                        <span className="font-medium text-[15px] text-gray-900 group-hover:text-[#002855]">
                          {link.label}
                        </span>
                        {/* Link description (subtext) */}
                        <span className="text-gray-500 text-xs mt-0.5 group-hover:text-gray-700 leading-tight">
                          {link.description}
                        </span>
                      </div>
                        </a>
                      ))}
                </div>
              </div>

              {/* ------------------------------------------------------------------ */}
              {/* SECTION 3: Highlight Card (20% width) */}
              {/* ------------------------------------------------------------------ */}
              {/* Featured content with thumbnail and CTA button */}
              <div className="w-[20%] p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="h-full flex flex-col">
                  {/* Thumbnail/visual card */}
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20"></div>
                      <div className="relative z-10 text-center p-4">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Card content */}
                    <div className="p-3 bg-white">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {megaMenuContent[activeMenu].highlight.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {megaMenuContent[activeMenu].highlight.description}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-auto w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                    {megaMenuContent[activeMenu].highlight.buttonText}
                  </button>

                  {/* Footer note */}
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

      {/* ====================================================================== */}
      {/* MOBILE MENU */}
      {/* ====================================================================== */}
      {/* Full-width dropdown menu for mobile devices */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {/* Loop through all menu items */}
            {Object.keys(megaMenuContent).map((menu) => (
              <div key={menu} className="border-b border-gray-200 pb-2">
                {/* -------------------------------------------------------------- */}
                {/* Mobile menu item header (accordion trigger) */}
                {/* -------------------------------------------------------------- */}
                <button
                  className="w-full flex items-center justify-between py-3 text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                  onClick={() => toggleMobileSubmenu(menu as keyof typeof megaMenuContent)}
                >
                  <span className="capitalize">{menu}</span>
                  {/* Chevron icon - rotates when submenu is open */}
                  <svg
                    className={`w-5 h-5 transition-transform ${mobileSubmenu === menu ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* -------------------------------------------------------------- */}
                {/* Mobile submenu content (accordion panel) */}
                {/* -------------------------------------------------------------- */}
                {mobileSubmenu === menu && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded-lg">
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3">
                      {megaMenuContent[menu].description}
                    </p>

                    {/* Links list with anchor scrolling */}
                    <div className="space-y-1">
                      {megaMenuContent[menu].links.slice(0, 7).map((link, idx) => (
<a
                        key = { idx }
                              href = { link.href }
                              className = "block py-2 px-3 hover:text-[#002855] transition-colors duration-200 group cursor-pointer"
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
                        
                        {/* Highlight card for mobile */}
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                  <div className="flex items-start space-x-3">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">
                        {megaMenuContent[menu].highlight.title}
                      </h4>
                      <p className="text-gray-600 text-xs mt-1">
                        {megaMenuContent[menu].highlight.description}
                      </p>
                      {/* CTA Button */}
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

          {/* -------------------------------------------------------------- */}
          {/* Mobile Contact CTA Button */}
          {/* -------------------------------------------------------------- */}
          <a
            href="/contact"
            className="block w-full mt-4 px-6 py-3 bg-[#002855] text-white font-semibold rounded-md hover:bg-blue-900 transition-colors text-center"
          >
            Contact Us
          </a>
        </div>
            </div >
          )
}
          
        </nav >
      </header >
    </>
  );
}