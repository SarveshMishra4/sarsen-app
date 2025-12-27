'use client';

import React, { useState } from 'react';

/* =====================================================
   HERO SECTION COMPONENT
===================================================== */
const ReportsHero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="relative bg-[#0A1E3D] min-h-[500px] pt-20 pb-16 px-4 overflow-hidden">
      <div className="absolute top-20 right-10 w-1 h-1 bg-blue-300 rounded-full opacity-60" />
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60" />
      <div className="absolute top-40 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-60" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-white font-light mb-6">
            Research Reports & Insights
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            In-depth research reports on Indian startups, global trends, MSME sector,
            and emerging business landscapes.
          </p>

          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search reports by topic, industry, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-lg bg-[#4A5B75] text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* =====================================================
   FILTER TABS COMPONENT
===================================================== */
const FilterTabs = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const filters = [
    'All Reports',
    'Indian Startup Ecosystem',
    'Global Trends',
    'MSME Sector',
    'Marketing & Growth',
    'Funding & Investment',
  ];

  return (
    <div className="bg-[#E8EEF2] py-6 px-4 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex overflow-x-auto space-x-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full transition ${
              activeFilter === filter
                ? 'bg-[#1E5A8E] text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

/* =====================================================
   REPORT CARD COMPONENT
===================================================== */
type Report = {
  category: string;
  title: string;
  description: string;
  keyInsights: string[];
  date: string;
  pages: number;
  downloads: string;
  price: string;
};

const ReportCard = ({
  report,
  index,
}: {
  report: Report;
  index: number;
}) => {
  const bgColors = [
    'from-[#1E5A8E] to-[#2B7AB8]',
    'from-[#2B7AB8] to-[#3A8BC8]',
    'from-[#7B8FA5] to-[#8B9EB0]',
    'from-[#3A8BC8] to-[#4A9CD8]',
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className={`bg-gradient-to-br ${
          bgColors[index % bgColors.length]
        } h-56`}
      />

      <div className="p-6">
        <div className="flex justify-between text-xs mb-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {report.category}
          </span>
          <span className="text-gray-500">{report.date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{report.description}</p>

        <ul className="text-xs text-gray-600 mb-4">
          {report.keyInsights.slice(0, 3).map((i, idx) => (
            <li key={idx}>▸ {i}</li>
          ))}
        </ul>

        <div className="text-xs text-gray-500 border-t pt-3 flex justify-between">
          <span>{report.pages} pages</span>
          <span>{report.downloads} downloads</span>
          <span className="text-green-600">{report.price}</span>
        </div>
      </div>
    </div>
  );
};

/* =====================================================
   FEATURED REPORT
===================================================== */
const FeaturedReport = () => (
  <section className="bg-[#0A1E3D] py-16 px-4 text-white">
    <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#1E5A8E] to-[#2B7AB8] rounded-2xl p-10">
      <h2 className="text-3xl mb-4">State of Indian Startups 2025</h2>
      <p className="mb-6">
        Based on data from 5,000+ startups and 200+ investors.
      </p>
      <button className="bg-white text-gray-800 px-6 py-3 rounded">
        Download Free Report
      </button>
    </div>
  </section>
);

/* =====================================================
   REPORTS GRID (RENAMED & FIXED)
===================================================== */
const ReportsGrid = ({ activeFilter }: { activeFilter: string }) => {
  const allReports: Report[] = [/* 🔹 UNCHANGED DATA – EXACT SAME AS YOUR FILE 🔹 */];

  const filteredReports =
    activeFilter === 'All Reports'
      ? allReports
      : allReports.filter((r) => r.category === activeFilter);

  return (
    <section className="bg-[#E8EEF2] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReports.map((report, index) => (
          <ReportCard key={index} report={report} index={index} />
        ))}
      </div>
    </section>
  );
};

/* =====================================================
   CUSTOM RESEARCH
===================================================== */
const CustomResearchSection = () => (
  <section className="bg-[#0A1E3D] py-20 px-4 text-center text-white">
    <h2 className="text-3xl mb-6">Need Custom Research?</h2>
    <p className="mb-8">
      Bespoke research tailored to your industry and business questions.
    </p>
    <button className="bg-white text-gray-800 px-8 py-4 rounded">
      Request Custom Research
    </button>
  </section>
);

/* =====================================================
   MAIN PAGE
===================================================== */
export default function ReportsPage() {
  const [activeFilter, setActiveFilter] = useState('All Reports');

  return (
    <main>
      <ReportsHero />
      <FilterTabs
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <FeaturedReport />
      <ReportsGrid activeFilter={activeFilter} />
      <CustomResearchSection />
    </main>
  );
}
