// app/reports/[slug]/page.tsx
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { getReportBySlug } from '@/app/data/reports';
import type { Report } from '@/app/data/types';

// =====================================================
// NOT-FOUND FALLBACK COMPONENT
// Shown when the slug doesn't match any report in the
// dataset. Clean, branded, with a path back to listing.
// =====================================================
const ReportNotFound = () => {
  return (
    <div className="min-h-screen bg-[#0A1E3D] flex flex-col items-center justify-center px-4 text-center">
      <svg className="w-24 h-24 text-blue-400/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
      </svg>
      <h1 className="text-4xl sm:text-5xl text-white font-light mb-4">Report Not Found</h1>
      <p className="text-gray-400 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
        This report may have been moved or removed. Browse our full library to find what you need.
      </p>
      <a
        href="/reports"
        className="inline-flex items-center gap-2 bg-white text-[#0A1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Reports</span>
      </a>
    </div>
  );
};

// =====================================================
// REPORT HERO COMPONENT
// Full-width dark hero with title, meta, authors, and
// primary CTA. Mirrors the gradient + layout pattern
// used across all other page heroes in the site.
// =====================================================
const ReportHero = ({ report }: { report: Report }) => {
  return (
    <section className="relative bg-[#0A1E3D] pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="/reports" className="hover:text-blue-300 transition-colors">Reports</a>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 truncate max-w-xs">{report.title}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left + Center: Main content (spans 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category pill */}
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-blue-300 text-xs font-medium">
              {report.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
              {report.title}
            </h1>

            {/* Hero description */}
            <p className="text-xl sm:text-2xl text-blue-300 font-light leading-relaxed max-w-3xl">
              {report.heroDescription}
            </p>

            {/* Authors */}
            <div className="flex flex-wrap gap-4 pt-2">
              {report.authors.map((author, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{author.name}</p>
                    <p className="text-gray-400 text-xs">{author.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {report.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Purchase / Download card */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 sticky top-24">
              {/* Cover placeholder */}
              <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-xl h-48 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
                </div>
                <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>

              {/* Meta list */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Pages</span>
                  <span className="text-white font-medium">{report.pages}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Published</span>
                  <span className="text-white font-medium">{report.publishedDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last Updated</span>
                  <span className="text-white font-medium">{report.lastUpdated}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Downloads</span>
                  <span className="text-white font-medium">{report.downloads}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20 my-4"></div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-2xl font-light ${report.isFree ? 'text-green-400' : 'text-white'}`}>
                  {report.price}
                </span>
                {report.isFree && (
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">FREE</span>
                )}
              </div>

              <button className="w-full bg-white text-[#0A1E3D] py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg flex items-center justify-center gap-2 group">
                {report.isFree ? (
                  <>
                    <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Free Report</span>
                  </>
                ) : (
                  <>
                    <span>Purchase Report</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              {/* Sample download link */}
              {!report.isFree && (
                <button className="w-full mt-3 text-blue-300 hover:text-blue-200 text-sm transition-colors flex items-center justify-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Free Sample
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// KEY FINDINGS SECTION
// 4-column stat cards — same frosted treatment used
// in the events page PastEventsSection. Grounds the
// reader in the report's core numbers before the body.
// =====================================================
const KeyFindingsSection = ({ report }: { report: Report }) => {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-10 leading-tight">
          Key Findings
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {report.keyFindings.map((finding, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              {/* Big metric */}
              <div className="text-3xl sm:text-4xl font-light text-[#0A1E3D] mb-2">{finding.metric}</div>
              {/* Label */}
              <div className="text-gray-900 text-sm font-medium mb-1">{finding.label}</div>
              {/* Description */}
              <div className="text-gray-500 text-xs leading-relaxed">{finding.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// EXECUTIVE SUMMARY SECTION
// Dark section — one focused paragraph.
// Same gradient-card wrapper used in FeaturedReport.
// =====================================================
const ExecutiveSummarySection = ({ report }: { report: Report }) => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-6">
              EXECUTIVE SUMMARY
            </div>
            <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              {report.executiveSummary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// TABLE OF CONTENTS SECTION
// Light section with a clean, navigable TOC.
// Each section title is an anchor link. Subsections
// are indented bullet points beneath.
// =====================================================
const TableOfContentsSection = ({ report }: { report: Report }) => {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: Section header */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 leading-tight sticky top-24">
              Table of<br className="hidden lg:block" />Contents
            </h2>
            <p className="text-gray-600 text-base mt-4">
              {report.pages}-page deep-dive structured for both sequential reading and targeted reference.
            </p>
          </div>

          {/* Right: TOC list */}
          <div className="lg:col-span-2 space-y-4">
            {report.tableOfContents.map((section, idx) => (
              <a
                key={idx}
                href={`#${section.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-6 group"
              >
                {/* Section row: number + title + page */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Section number circle */}
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{idx + 1}</span>
                    </div>
                    {/* Title + subsections */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {section.title}
                      </h3>
                      {section.subsections && (
                        <div className="mt-2 space-y-1">
                          {section.subsections.map((sub, subIdx) => (
                            <p key={subIdx} className="text-sm text-gray-500 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                              {sub}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Page number */}
                  <span className="flex-shrink-0 text-sm text-gray-400 font-medium mt-0.5">
                    p. {section.page}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// =====================================================
// METHODOLOGY SECTION
// Dark section — horizontal step-by-step cards.
// Mirrors the "how we did this" credibility block
// that strategy firms lead with.
// =====================================================
const MethodologySection = ({ report }: { report: Report }) => {
  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
            Research Methodology
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Every finding in this report is grounded in a rigorous, reproducible analytical process.
          </p>
        </div>

        {/* Step cards — 2x2 on desktop, single stack on mobile */}
        <div className="grid sm:grid-cols-2 gap-6">
          {report.methodology.map((step, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Step number */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">{step.step}</span>
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// CONCLUSION SECTION
// Light section — mirrors the executive summary layout
// but uses the plain light background for visual relief.
// =====================================================
const ConclusionSection = ({ report }: { report: Report }) => {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#0A1E3D]/10 rounded-full text-[#0A1E3D] text-xs font-medium mb-6">
            CONCLUSION
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6 leading-tight">
            What This Means for You
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {report.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// RELATED REPORTS SECTION
// Dark section — pulls 3 other reports from the same
// dataset (excluding the current one) and renders them
// as compact horizontal cards. Drives cross-sell.
// =====================================================
const RelatedReportsSection = ({ currentReport }: { currentReport: Report }) => {
  // Lazy import inside component to keep module graph clean
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { reportsData } = require('@/app/data/reports');

  // Pick up to 3 reports that are NOT the current one,
  // preferring same-category first, then others
  const sameCategory = reportsData.filter(
    (r: Report) => r.slug !== currentReport.slug && r.category === currentReport.category
  );
  const otherCategory = reportsData.filter(
    (r: Report) => r.slug !== currentReport.slug && r.category !== currentReport.category
  );
  const related: Report[] = [...sameCategory, ...otherCategory].slice(0, 3);

  // Gradient palette — same 4-color rotation used site-wide
  const bgColors = [
    'from-[#1E5A8E] to-[#2B7AB8]',
    'from-[#2B7AB8] to-[#3A8BC8]',
    'from-[#7B8FA5] to-[#8B9EB0]',
  ];

  return (
    <section className="bg-[#0A1E3D] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              Related Reports
            </h2>
            <p className="text-gray-400 text-base mt-2">
              Continue your research with these related analyses.
            </p>
          </div>
          <a
            href="/reports"
            className="self-start sm:self-end text-blue-300 hover:text-blue-200 text-sm transition-colors flex items-center gap-1.5 group"
          >
            <span>View all reports</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((report, idx) => (
            <a
              key={idx}
              href={`/reports/${report.slug}`}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col group"
            >
              {/* Mini gradient header */}
              <div className={`bg-gradient-to-br ${bgColors[idx % bgColors.length]} h-28 flex items-center justify-center`}>
                <svg className="w-10 h-10 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-medium text-blue-400 bg-white/10 px-2 py-1 rounded self-start mb-3">
                  {report.category}
                </span>
                <h3 className="text-base font-medium text-white group-hover:text-blue-300 transition-colors leading-tight flex-grow">
                  {report.title}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10 text-xs text-gray-500">
                  <span>{report.pages} pages</span>
                  <span className={report.isFree ? 'text-green-400 font-medium' : 'text-gray-400'}>{report.price}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// =====================================================
// CTA SECTION
// Call-to-action for custom research / consultation.
// Light background variant — mirrors the events page
// corporate CTA for visual consistency.
// =====================================================
const CTASection = () => {
  return (
    <section className="bg-[#d4dce5] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
            Need a Custom Deep Dive?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            Every organisation faces unique strategic questions that standardised reports can only partially answer. 
            Our bespoke research engagements are built around your specific market, competitive set, and decision timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0A1E3D] text-white px-8 py-4 rounded-lg hover:bg-[#132B47] transition-colors font-medium shadow-lg inline-flex items-center justify-center gap-2 group">
              <span>Request Custom Research</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="bg-transparent border-2 border-[#0A1E3D] text-[#0A1E3D] px-8 py-4 rounded-lg hover:bg-[#0A1E3D]/5 transition-colors font-medium inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================
// MAIN DYNAMIC PAGE COMPONENT
// Assembles every section in order.
// Reads the [slug] param from the URL, looks up the
// matching report, and either renders the full page
// or the NotFound fallback.
// =====================================================
export default function ReportDetailPage() {
  // Next.js App Router hook — gives us the URL params
  const params = useParams();
  const slug = params.slug as string;

  // Look up this report from our local data store
  const report = getReportBySlug(slug);

  // If no match found, show the branded 404
  if (!report) {
    return <ReportNotFound />;
  }

  // Full page — sections assembled top to bottom
  return (
    <main className="min-h-screen">
      {/* Hero — title, authors, purchase card */}
      <ReportHero report={report} />

      {/* Key Findings — 4 stat cards */}
      <KeyFindingsSection report={report} />

      {/* Executive Summary — gradient block */}
      <ExecutiveSummarySection report={report} />

      {/* Table of Contents — navigable TOC */}
      <TableOfContentsSection report={report} />

      {/* Methodology — how the research was done */}
      <MethodologySection report={report} />

      {/* Conclusion — closing perspective */}
      <ConclusionSection report={report} />

      {/* Related Reports — cross-sell */}
      <RelatedReportsSection currentReport={report} />

      {/* CTA — custom research prompt */}
      <CTASection />
    </main>
  );
}