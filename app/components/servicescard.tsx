import Link from 'next/link';
import { Service } from '../lib/services';
import CTAButton from '../components/ctabutton';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
  className?: string;
}

export default function ServiceCard({ service, compact = false, className = '' }: ServiceCardProps) {
  if (compact) {
    return (
      <Link
        href={`/services/${service.id}`}
        className={`
          group relative bg-white rounded-xl shadow-md border border-gray-100 
          hover:shadow-xl hover:border-blue-200 hover:shadow-blue-100/50
          transition-all duration-300 transform hover:-translate-y-1 
          overflow-hidden ${className}
        `}
      >
        <div className="p-6">
          <div className="flex items-start space-x-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className={`w-14 h-14 rounded-xl ${service.gradient} flex items-center justify-center text-2xl text-white`}>
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                {service.shortTitle}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              
              {/* Tagline */}
              <div className="text-xs text-gray-500 italic">
                "{service.tagline}"
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <svg 
                  className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div 
      className={`
        group relative bg-white rounded-2xl shadow-lg border border-gray-200 
        hover:shadow-2xl hover:border-blue-300 hover:shadow-blue-200/30
        transition-all duration-300 overflow-hidden h-full flex flex-col ${className}
      `}
    >
      {/* Gradient Header */}
      <div className={`${service.gradient} p-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-3xl text-white">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-blue-100 text-sm">
                {service.shortTitle}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold text-lg">{service.pricing.standard}</div>
            <div className="text-blue-200 text-sm">Starting from</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow">
        {/* Tagline */}
        <p className="text-gray-700 italic mb-4 border-l-4 border-blue-600 pl-4">
          "{service.tagline}"
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          {service.description}
        </p>

        {/* Key Benefits */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className={`w-2 h-6 ${service.color.split(' ')[0]} rounded mr-2`}></span>
            Key Benefits
          </h4>
          <ul className="space-y-2">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              Duration
            </div>
            <div className="font-semibold text-gray-900">{service.timeline}</div>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              Meetings
            </div>
            <div className="font-semibold text-gray-900">{service.meetings.length}+ sessions</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link 
            href={`/services/${service.id}`}
            className={`block w-full ${service.color} text-white py-3 px-6 rounded-lg font-medium text-center hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg`}
          >
            Explore Service Details
          </Link>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/30 group-hover:to-indigo-50/30 transition-all duration-300 -z-10" />
    </div>
  );
}