"use client";

import Link from "next/link";
import Image from "next/image";

// FOOTER COMPONENT
function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        
        {/* Top Section - Logo, Links, Subscribe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 mb-12">
          
          {/* Left Side - Logo and Links Stacked (3 columns) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Logo - UPDATED WITH ACTUAL LOGO */}
            <Link href="/" className="inline-flex items-center space-x-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/logo/Sarsen-Blue.svg" // Your logo from public/Logo folder
                  alt="Sarsen & Company Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 leading-tight">Sarsen</div>
                <div className="text-2xl font-bold text-gray-900 leading-tight">& Company</div>
              </div>
            </Link>
            
            {/* Links Below Logo */}
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-700 hover:text-[#002855] transition-colors text-lg">Careers</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-[#002855] transition-colors text-lg">Alumni</Link></li>
              <li><Link href="#" className="text-gray-700 hover:text-[#002855] transition-colors text-lg">Global locations</Link></li>
            </ul>
          </div>
          
          {/* Middle - Second Column Links (2 columns) */}
          <div className="lg:col-span-2">
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-700 hover:text-[#002855] transition-colors text-lg">About us</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-[#002855] transition-colors text-lg">Contact us</Link></li>
            </ul>
          </div>
          
          {/* Spacer (3 columns) */}
          <div className="lg:col-span-3"></div>
          
          {/* Right Side - Subscribe Section (4 columns) */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Subscribe</h3>
            <p className="text-gray-600 mb-5 text-sm leading-snug">Select topics and stay current with our latest insights</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#002855] text-gray-900 bg-white text-base"
              />
              <button className="px-8 py-3 bg-[#002855] text-white font-semibold rounded-md hover:bg-blue-900 transition-colors whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
          
        </div>
        
        {/* Divider */}
        <div className="mb-8"></div>
        
        {/* Bottom Section - Social Media and Legal Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          {/* Social Media Icons - Left */}
          <div className="flex space-x-3">
            <a href="#" className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" aria-label="X">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="#" className="w-11 h-11 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" aria-label="RSS">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"/>
              </svg>
            </a>
          </div>
          
          {/* Legal Links - Right */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 justify-end">
            <Link href="#" className="hover:text-[#002855] transition-colors">Scam warning</Link>
            <Link href="#" className="hover:text-[#002855] transition-colors">FAQ</Link>
            <Link href="#" className="hover:text-[#002855] transition-colors">Privacy policy</Link>
            <button className="hover:text-[#002855] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.5 1.5v3h-3v-3h3zm-4 0v3h-3v-3h3zm8 0v3h-3v-3h3zm0 4v3h-3v-3h3zm0 4v3h-3v-3h3zm-4 0v3h-3v-3h3zm-4 0v3h-3v-3h3zm0-4v3h-3v-3h3zm4 0v3h-3v-3h3z"/>
              </svg>
              Your privacy choices
            </button>
            <Link href="#" className="hover:text-[#002855] transition-colors">Cookie preferences</Link>
          </div>
          
        </div>
        
        {/* Second Row of Legal Links */}
        <div className="flex justify-end mt-4">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            <Link href="#" className="hover:text-[#002855] transition-colors">Terms of use</Link>
            <Link href="#" className="hover:text-[#002855] transition-colors">Local language information</Link>
            <Link href="#" className="hover:text-[#002855] transition-colors">Accessibility statement</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;