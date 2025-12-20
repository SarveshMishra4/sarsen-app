import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
              <span className="text-xl font-bold">Sarsen</span>
            </div>
            <p className="text-gray-400">
              Productized strategy consulting powered by quantitative measurement 
              for early-stage startups.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/business-diagnostic" className="hover:text-white">Business Diagnostic</Link></li>
              <li><Link href="/services/go-to-market" className="hover:text-white">Go To Market</Link></li>
              <li><Link href="/services/product-market-fit" className="hover:text-white">Product Market Fit</Link></li>
              <li><Link href="/services/turnaround" className="hover:text-white">Turnaround</Link></li>
              <li><Link href="/services/fundraising" className="hover:text-white">Fundraising Readiness</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Ready to transform your startup with quantitative strategy?
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Sarsen Strategy Consulting. All rights reserved.</p>
          <p className="mt-2">Quantitative strategy for early-stage startups in India.</p>
        </div>
      </div>
    </footer>
  )
}