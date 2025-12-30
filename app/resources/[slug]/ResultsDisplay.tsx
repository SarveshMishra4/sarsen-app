// app/resources/[slug]/ToolResultsDisplay.tsx
'use client';

import { Tool } from '../../data/tools';

interface Props {
  tool: Tool;
  // In reality, you'd pass results as props from parent
}

export default function ToolResultsDisplay({ tool }: Props) {
  // Mock results for display - in reality, these would come from props
  const mockResults = {
    revenueMultiple: 40000000,
    ebitdaMultiple: 45000000,
    dcf: 42000000,
    comparable: 38000000,
    range: "₹3,20,00,000 - ₹4,80,00,000",
    postMoney: 25000000,
    founderDilution: 20,
    runway: 10,
    investorOwnership: 20,
    pricePerShare: 200,
    cac: 4000,
    ltv: 30000,
    ltvCacRatio: 7.5,
    payback: 8,
    roi: 650
  };

  const formatValue = (value: any, format: string, prefix?: string, suffix?: string) => {
    switch (format) {
      case 'currency':
        return `${prefix || ''}${value.toLocaleString('en-IN')}${suffix || ''}`;
      case 'percentage':
        return `${value.toFixed(1)}${suffix || '%'}`;
      case 'number':
        return value.toFixed(2);
      case 'time':
        return `${value}${suffix || ''}`;
      default:
        return value;
    }
  };

  return (
    <div className="space-y-6">
      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tool.results.metrics.map((metric) => (
          <div key={metric.key} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
            <div className="text-2xl font-semibold text-gray-900 mb-2">
              {formatValue(mockResults[metric.key as keyof typeof mockResults], metric.format, metric.prefix, metric.suffix)}
            </div>
            {metric.description && (
              <div className="text-xs text-gray-500">{metric.description}</div>
            )}
          </div>
        ))}
      </div>

      {/* Insights & Recommendations */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-medium text-blue-800 mb-1">Insight</p>
            <p className="text-sm text-blue-700">
              Your {tool.title.toLowerCase()} looks strong. Consider these insights when making decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Export Options */}
      {tool.exportOptions && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-3">Export Results:</p>
          <div className="flex flex-wrap gap-3">
            {tool.exportOptions.pdf && (
              <button className="px-4 py-2 text-sm bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border border-red-200 transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                </svg>
                Save as PDF
              </button>
            )}
            {tool.exportOptions.excel && (
              <button className="px-4 py-2 text-sm bg-green-50 hover:bg-green-100 text-green-700 rounded-lg border border-green-200 transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Export to Excel
              </button>
            )}
            {tool.exportOptions.share && (
              <button className="px-4 py-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share Results
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}