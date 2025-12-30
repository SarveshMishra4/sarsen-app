// app/resources/[slug]/ToolCalculator.tsx
'use client';

import { useState } from 'react';
import { Tool } from '../../data/tools';

interface Props {
  tool: Tool;
}

export default function ToolCalculator({ tool }: Props) {
  // Initialize state with default values
  const [inputs, setInputs] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    tool.inputs.forEach(input => {
      initial[input.id] = input.defaultValue;
    });
    return initial;
  });

  const [results, setResults] = useState<Record<string, any> | null>(null);

  const handleInputChange = (id: string, value: any) => {
    setInputs(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const calculateResults = () => {
    // This is where you'd implement the actual calculation logic
    // For now, let's create mock results based on the tool type
    let calculatedResults: Record<string, any> = {};

    switch (tool.calculationType) {
      case 'valuation':
        // Business Valuation Calculation
        const revenue = inputs.annualRevenue || 0;
        const ebitdaMargin = inputs.ebitdaMargin || 0;
        const industry = inputs.industry;
        
        // Industry multiples
        const multiples: Record<string, { revenue: number, ebitda: number }> = {
          saas: { revenue: 8, ebitda: 15 },
          ecommerce: { revenue: 2.5, ebitda: 8 },
          marketplace: { revenue: 3, ebitda: 10 },
          services: { revenue: 1.5, ebitda: 5 },
          manufacturing: { revenue: 1.2, ebitda: 6 },
          d2c: { revenue: 2, ebitda: 7 }
        };

        const multiple = multiples[industry] || multiples.saas;
        
        calculatedResults = {
          revenueMultiple: revenue * multiple.revenue,
          ebitdaMultiple: (revenue * ebitdaMargin / 100) * multiple.ebitda,
          dcf: revenue * 5, // Simplified DCF
          comparable: revenue * multiple.revenue * 0.9,
          range: `${(revenue * multiple.revenue * 0.8).toLocaleString('en-IN')} - ${(revenue * multiple.revenue * 1.2).toLocaleString('en-IN')}`
        };
        break;

      case 'financial-projection':
        // Fundraising Calculation
        const preMoney = inputs.preMoneyValuation || 0;
        const raiseAmount = inputs.raiseAmount || 0;
        const monthlyBurn = inputs.monthlyBurn || 1;
        const esopPool = inputs.esopPool || 0;
        
        calculatedResults = {
          postMoney: preMoney + raiseAmount,
          founderDilution: (raiseAmount / (preMoney + raiseAmount)) * 100,
          runway: Math.floor(raiseAmount / monthlyBurn),
          investorOwnership: (raiseAmount / (preMoney + raiseAmount)) * 100,
          pricePerShare: preMoney / 1000000 // Simplified
        };
        break;

      case 'roi':
        // CAC:LTV Calculation
        const marketingSpend = inputs.marketingSpend || 0;
        const customersAcquired = inputs.customersAcquired || 1;
        const averageOrder = inputs.averageOrder || 0;
        const purchaseFrequency = inputs.purchaseFrequency || 1;
        const retentionYears = inputs.retentionYears || 1;
        const grossMargin = inputs.grossMargin || 0;
        
        const cac = marketingSpend / customersAcquired;
        const ltv = averageOrder * purchaseFrequency * retentionYears;
        const ltvCacRatio = ltv / cac;
        const payback = cac / (averageOrder * (grossMargin / 100));
        const roi = ((ltv - cac) / cac) * 100;
        
        calculatedResults = {
          cac,
          ltv,
          ltvCacRatio,
          payback: Math.ceil(payback),
          roi
        };
        break;

      default:
        calculatedResults = { message: "Calculation not implemented yet" };
    }

    setResults(calculatedResults);
  };

  const handleUseCase = (exampleValues: Record<string, any>) => {
    setInputs(exampleValues);
  };

  return (
    <div className="space-y-6">
      {/* Input Fields */}
      <div className="space-y-6">
        {tool.inputs.map((input) => (
          <div key={input.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {input.label}
              {input.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            
            {input.type === 'number' || input.type === 'percentage' ? (
              <div className="relative">
                <input
                  type="number"
                  value={inputs[input.id]}
                  onChange={(e) => handleInputChange(input.id, parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={input.placeholder}
                  min={input.min}
                  max={input.max}
                  step={input.step}
                />
                {input.unit && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    {input.unit}
                  </div>
                )}
              </div>
            ) : input.type === 'select' ? (
              <select
                value={inputs[input.id]}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {input.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : input.type === 'checkbox' ? (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={inputs[input.id]}
                  onChange={(e) => handleInputChange(input.id, e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-700">{input.placeholder}</label>
              </div>
            ) : (
              <input
                type="text"
                value={inputs[input.id]}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={input.placeholder}
              />
            )}
            
            {input.helpText && (
              <p className="text-sm text-gray-500">{input.helpText}</p>
            )}
          </div>
        ))}
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateResults}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
        style={{ backgroundColor: tool.color }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span>{tool.hero.ctaText}</span>
      </button>

      {/* Quick Use Cases */}
      {tool.useCases && tool.useCases.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-3">Quick Examples:</p>
          <div className="flex flex-wrap gap-2">
            {tool.useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => handleUseCase(useCase.exampleValues)}
                className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
              >
                {useCase.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}