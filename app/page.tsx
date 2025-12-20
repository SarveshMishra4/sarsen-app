import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#001F3F]">
      
      {/* ========================================
          HERO SECTION - Loss Aversion Hook
          ======================================== */}
      <section className="relative bg-[#001F3F] min-h-[85vh] flex items-center overflow-hidden border-b border-white/10">
        
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 geometric-pattern opacity-30"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-white/10 rounded-lg -rotate-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Main Headline - Loss Aversion */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Your next decision will either save your startup—
              <span className="block text-[#D4AF37] mt-3">
                or quietly kill it.
              </span>
            </h1>
            
            {/* Sub-headline - Authority + Empathy */}
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We help Indian founders make high-stakes decisions using data, not opinions. 
              Because when survival is on the line, intuition isn't enough.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
              <Link 
                href="/contact"
                className="px-10 py-5 bg-[#D4AF37] text-[#001F3F] font-bold rounded-lg hover:bg-[#FFD700] transition-all text-lg shadow-2xl"
              >
                Book Free 30-Min Diagnostic Call
              </Link>
              
              <Link 
                href="/services"
                className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#001F3F] transition-all text-lg"
              >
                Explore Services
              </Link>
            </div>
            
            {/* Trust Badge */}
            <div className="pt-12 border-t border-white/20 mt-12">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">Trusted by Startups At Critical Inflection Points</p>
              <div className="flex items-center justify-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">39K+</div>
                  <div className="text-sm text-gray-400">Target Startups</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">₹1.4B</div>
                  <div className="text-sm text-gray-400">Annual Market</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">3-8</div>
                  <div className="text-sm text-gray-400">Week Engagements</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ========================================
          PROBLEM SECTION - Empathy & Understanding
          ======================================== */}
      <section className="py-24 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Opening Statement */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              You're not failing because you lack intelligence or effort.
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              You're failing because every critical decision feels like a coin flip.
            </p>
          </div>
          
          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl">
              <div className="text-5xl mb-4">❓</div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Should we pivot the product or double down?
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Is this the right market, or are we chasing the wrong customers?
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl">
              <div className="text-5xl mb-4">💰</div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Will investors believe our numbers, or see through the gaps?
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl">
              <div className="text-5xl mb-4">⏰</div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Do we have 6 months of runway left—or 3?
              </p>
            </div>
            
          </div>
          
          {/* Truth Bomb */}
          <div className="text-center p-12 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] rounded-2xl">
            <p className="text-3xl font-bold text-white mb-4">The truth?</p>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Most startups don't die from bad ideas. They die from good founders making 
              reasonable decisions with <span className="text-[#D4AF37] font-semibold">incomplete information.</span>
            </p>
            <p className="text-xl text-gray-400 mt-6 italic">
              And by the time the data proves you wrong, it's too late.
            </p>
          </div>
          
        </div>
      </section>

      {/* ========================================
          DIAGRAM PLACEHOLDER 1 - Decision Tree
          ======================================== */}
      <section className="py-20 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-12 text-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-400 text-lg">Diagram Placeholder</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic">
              DIAGRAM NEEDED: Decision-making flowchart showing "Intuition vs Data-Driven" paths. 
              Left path (red) shows wrong decisions cascading. Right path (gold) shows validated decisions 
              leading to success. Visual metaphor for structured decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          FOUNDER QUOTES - Social Proof
          ======================================== */}
      <section className="py-24 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              This is what we hear from every founder we work with:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-xl">
              <p className="text-xl text-gray-300 italic mb-4">
                "We're moving fast, but we're not sure if we're moving in the right direction."
              </p>
              <p className="text-sm text-gray-500">— Seed-stage founder, Bangalore</p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-xl">
              <p className="text-xl text-gray-300 italic mb-4">
                "Every advisor gives different advice. We don't know who to trust."
              </p>
              <p className="text-sm text-gray-500">— Pre-Series A founder, Mumbai</p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-xl">
              <p className="text-xl text-gray-300 italic mb-4">
                "Our metrics look okay, but something feels off."
              </p>
              <p className="text-sm text-gray-500">— Post-PMF startup, Delhi</p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-xl">
              <p className="text-xl text-gray-300 italic mb-4">
                "We need to raise in 4 months, and our story isn't landing."
              </p>
              <p className="text-sm text-gray-500">— Growth-stage founder, Hyderabad</p>
            </div>
            
          </div>
          
          <div className="text-center mt-12">
            <p className="text-3xl font-bold text-white">Sound familiar?</p>
            <p className="text-2xl text-gray-400 mt-3">You're not alone.</p>
          </div>
          
        </div>
      </section>

      {/* ========================================
          SOLUTION SECTION - Value Proposition
          ======================================== */}
      <section className="py-24 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-[#D4AF37] text-[#001F3F] rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
              The Solution
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              We bring structure to chaos.
              <span className="block text-[#D4AF37] mt-2">Certainty to confusion.</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Sarsen is a productized strategy consulting firm built for early-stage Indian 
              startups facing make-or-break moments.
            </p>
          </div>
          
          {/* What We Don't Do */}
          <div className="mb-16 p-10 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">We don't give generic advice.</h3>
            <p className="text-xl text-gray-300 text-center">
              We don't rely on "experience" or gut feel.
            </p>
          </div>
          
          {/* What We Do */}
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Diagnose your business like a system</h4>
              <p className="text-lg text-gray-300">
                Quantitatively analyze product, market, growth, and financials to understand what's actually happening.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Identify the 2-3 decisions that matter</h4>
              <p className="text-lg text-gray-300">
                Not everything is a priority. We show you what will move the needle and what's just noise.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Show you the math behind every recommendation</h4>
              <p className="text-lg text-gray-300">
                Every insight is traceable back to data, assumptions, and measurable trade-offs. No hand-waving.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl hover:border-[#D4AF37] transition-all">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Build execution roadmaps you can trust</h4>
              <p className="text-lg text-gray-300">
                Clear milestones, success metrics, and accountability frameworks—not vague strategic guidance.
              </p>
            </div>
            
          </div>
          
          {/* Differentiation Statement */}
          <div className="mt-16 text-center p-10 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] rounded-2xl">
            <p className="text-2xl font-bold text-white mb-4">
              Every engagement is fixed-scope, time-bound, and outcome-driven.
            </p>
            <p className="text-xl text-gray-300">
              No ambiguity. No endless consulting cycles. <span className="text-[#D4AF37] font-semibold">Just clarity when you need it most.</span>
            </p>
          </div>
          
        </div>
      </section>

      {/* ========================================
          DIAGRAM PLACEHOLDER 2 - Process Flow
          ======================================== */}
      <section className="py-20 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-12 text-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🔄</div>
                <p className="text-gray-400 text-lg">Diagram Placeholder</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic">
              DIAGRAM NEEDED: 4-step process visualization showing: 1) Data Collection → 2) Quantitative Analysis 
              → 3) Strategic Synthesis → 4) Execution Roadmap. Use arrows connecting each stage. 
              Clean, linear flow from left to right with icons for each stage.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY THIS MATTERS - Urgency
          ======================================== */}
      <section className="py-24 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          
          <h2 className="text-5xl font-bold text-white mb-8">
            Why This Matters Now
          </h2>
          
          <div className="space-y-8">
            <div className="p-10 bg-white/5 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-xl">
              <p className="text-3xl font-bold text-white mb-4">Capital is tightening.</p>
              <p className="text-xl text-gray-300">
                The era of "figure it out as you go" is over. Investors want proof, not promises.
              </p>
            </div>
            
            <div className="p-10 bg-white/5 backdrop-blur-sm border-l-4 border-[#D4AF37] rounded-xl">
              <p className="text-3xl font-bold text-white mb-4">Execution windows are shrinking.</p>
              <p className="text-xl text-gray-300">
                You don't have 18 months to test and learn. Every misstep burns runway you can't get back.
              </p>
            </div>
            
            <div className="p-10 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] rounded-xl">
              <p className="text-3xl font-bold text-white mb-4">
                The founders who survive aren't the ones with the best ideas.
              </p>
              <p className="text-2xl text-[#D4AF37]">
                They're the ones who make fewer costly mistakes and execute with precision.
              </p>
              <p className="text-xl text-gray-400 mt-6">
                That's where we come in.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* ========================================
          SERVICES PREVIEW
          ======================================== */}
      <section className="py-24 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-[#D4AF37] text-[#001F3F] rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
              Our Services
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              5 Productized Engagements
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Built for the critical decisions that define your startup's trajectory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1 */}
            <Link href="/services/diagnostic" className="group">
              <div className="h-full p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#D4AF37] rounded-2xl transition-all">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Diagnostic & Direction
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Get clarity on where you actually stand before you raise, pivot, or scale.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹4.5L</span>
                  <span className="text-sm text-gray-400">3-4 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service 2 */}
            <Link href="/services/product-market-fit" className="group">
              <div className="h-full p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#D4AF37] rounded-2xl transition-all">
                <div className="text-5xl mb-4">🎪</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Product-Market Fit
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Stop building what you think people want. Start building what they'll pay for.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹5L</span>
                  <span className="text-sm text-gray-400">6-8 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service 3 */}
            <Link href="/services/go-to-market" className="group">
              <div className="h-full p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#D4AF37] rounded-2xl transition-all">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Go-To-Market Strategy
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Build repeatable growth systems—not lucky wins that can't scale.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹4L</span>
                  <span className="text-sm text-gray-400">4-6 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service 4 */}
            <Link href="/services/fundraising" className="group">
              <div className="h-full p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#D4AF37] rounded-2xl transition-all">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Fundraising Readiness
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Make your story mathematically defensible so investors fund inevitable outcomes.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹5.5L</span>
                  <span className="text-sm text-gray-400">5-6 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* Service 5 */}
            <Link href="/services/turnaround" className="group">
              <div className="h-full p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-[#D4AF37] rounded-2xl transition-all">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Turnaround & Postmortem
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Diagnose what broke before it's too late. Failing fast is fine. Failing blind is not.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold text-[#D4AF37]">₹3.5L</span>
                  <span className="text-sm text-gray-400">4-5 weeks</span>
                </div>
              </div>
            </Link>
            
            {/* View All */}
            <Link href="/services" className="group">
              <div className="h-full p-8 bg-[#D4AF37] rounded-2xl hover:bg-[#FFD700] transition-all flex flex-col items-center justify-center text-center">
                <svg className="w-12 h-12 text-[#001F3F] mb-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-3">
                  View All Services
                </h3>
                <p className="text-[#002855]">
                  Detailed breakdowns with deliverables and process
                </p>
              </div>
            </Link>
            
          </div>
        </div>
      </section>

      {/* ========================================
          SOCIAL PROOF - Testimonial
          ======================================== */}
      <section className="py-24 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="p-12 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] rounded-2xl">
            <div className="text-6xl mb-6">💬</div>
            <p className="text-3xl text-white italic mb-6 leading-relaxed">
              "The diagnostic saved us from a $200K mistake we were about to make. 
              Worth every rupee."
            </p>
            <p className="text-lg text-gray-400">— Seed-stage founder, Bangalore</p>
          </div>
        </div>
      </section>

      {/* ========================================
          DIAGRAM PLACEHOLDER 3 - Before/After
          ======================================== */}
      <section className="py-20 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-12 text-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-gray-400 text-lg">Diagram Placeholder</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic">
              DIAGRAM NEEDED: Before/After comparison. Left side shows "Without Sarsen" - scattered 
              decisions, wasted runway, confusion (use red/declining graph). Right side shows 
              "With Sarsen" - structured path, efficient execution, growth (use gold/ascending graph). 
              Visual contrast between chaos and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          GUARANTEE SECTION - Risk Reversal
          ======================================== */}
      <section className="py-24 bg-[#001F3F] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Founder-First Promise
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl text-center">
              <div className="text-5xl mb-4">🚫</div>
              <h3 className="text-2xl font-bold text-white mb-3">No Gatekeeping</h3>
              <p className="text-gray-300">
                We'll tell you upfront if we can help—or if you're better off solving this internally.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-3">No Fluff</h3>
              <p className="text-gray-300">
                Every deliverable is actionable. Every recommendation is backed by data.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">No Surprises</h3>
              <p className="text-gray-300">
                Fixed pricing. Fixed timelines. Fixed scope. You know exactly what you're getting.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA - Strong Close
          ======================================== */}
      <section className="relative py-32 bg-[#001F3F] overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-lg rotate-45"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            The startups that survive don't get lucky.
            <span className="block text-[#D4AF37] mt-4">They get deliberate.</span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            If you're facing a decision that could define the next 12 months of your startup's life, 
            let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link 
              href="/contact"
              className="px-12 py-6 bg-[#D4AF37] text-[#001F3F] font-bold rounded-lg hover:bg-[#FFD700] transition-all text-xl shadow-2xl"
            >
              Book Free Diagnostic Call
            </Link>
            
            <Link 
              href="/services"
              className="px-12 py-6 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#001F3F] transition-all text-xl"
            >
              Explore Services
            </Link>
          </div>
          
          <div className="pt-12 border-t border-white/20">
            <p className="text-gray-400 text-lg">
              🚀 Supporting 39,000+ early-stage startups across India at their most critical moments
            </p>
          </div>
          
        </div>
      </section>

    </main>
  );
}