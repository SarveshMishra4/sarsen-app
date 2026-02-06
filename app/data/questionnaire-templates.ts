// app/data/questionnaire-templates.ts
// Pre-built questionnaire templates that admins can send to users



import { Question } from '../lib/user-types';

export interface QuestionnaireTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
}

export const questionnaireTemplates: QuestionnaireTemplate[] = [
  {
    id: 'business-diagnostic',
    title: 'Business Diagnostic Questionnaire',
    description: 'Comprehensive 314-question diagnostic to understand your business fundamentals',
    category: 'Diagnostic',
    questions: [
      {
        id: 'q1',
        type: 'text',
        question: 'What is your current monthly revenue?',
        required: true,
        placeholder: 'e.g., ₹10,00,000'
      },
      {
        id: 'q2',
        type: 'textarea',
        question: 'Describe your core business model in detail',
        required: true,
        placeholder: 'Explain how you create and deliver value...',
        helpText: 'Include revenue streams, customer segments, and key activities'
      },
      {
        id: 'q3',
        type: 'select',
        question: 'What is your primary customer segment?',
        required: true,
        options: ['B2B Enterprise', 'B2B SMB', 'B2C', 'B2B2C', 'Marketplace']
      },
      {
        id: 'q4',
        type: 'number',
        question: 'How many paying customers do you currently have?',
        required: true,
        placeholder: '0'
      },
      {
        id: 'q5',
        type: 'multiselect',
        question: 'What are your top 3 challenges right now?',
        required: true,
        options: [
          'Customer Acquisition',
          'Product-Market Fit',
          'Team Building',
          'Fundraising',
          'Operations',
          'Revenue Growth',
          'Profitability',
          'Market Competition'
        ]
      }
    ]
  },
  {
    id: 'market-research',
    title: 'Market & Customer Research',
    description: 'Deep dive into your market understanding and customer insights',
    category: 'Research',
    questions: [
      {
        id: 'q1',
        type: 'textarea',
        question: 'Who is your ideal customer? Describe in detail.',
        required: true,
        placeholder: 'Demographics, psychographics, behavior patterns...'
      },
      {
        id: 'q2',
        type: 'textarea',
        question: 'What specific problem are you solving for them?',
        required: true,
        placeholder: 'Describe the pain point in their own words...'
      },
      {
        id: 'q3',
        type: 'select',
        question: 'How critical is this problem for your customers?',
        required: true,
        options: ['Life-threatening', 'Business-critical', 'Important but not urgent', 'Nice to have']
      },
      {
        id: 'q4',
        type: 'textarea',
        question: 'What alternatives exist today? How do customers solve this problem currently?',
        required: true,
        placeholder: 'List competitors, substitutes, and workarounds...'
      }
    ]
  },
  {
    id: 'financial-deep-dive',
    title: 'Financial Deep Dive',
    description: 'Comprehensive financial metrics and unit economics analysis',
    category: 'Finance',
    questions: [
      {
        id: 'q1',
        type: 'number',
        question: 'What is your Customer Acquisition Cost (CAC)?',
        required: true,
        placeholder: '₹0'
      },
      {
        id: 'q2',
        type: 'number',
        question: 'What is your Customer Lifetime Value (LTV)?',
        required: true,
        placeholder: '₹0'
      },
      {
        id: 'q3',
        type: 'number',
        question: 'What is your monthly burn rate?',
        required: true,
        placeholder: '₹0'
      },
      {
        id: 'q4',
        type: 'number',
        question: 'How many months of runway do you have?',
        required: true,
        placeholder: '0'
      },
      {
        id: 'q5',
        type: 'select',
        question: 'What is your gross margin?',
        required: true,
        options: ['<20%', '20-40%', '40-60%', '60-80%', '>80%']
      }
    ]
  },
  {
    id: 'gtm-strategy',
    title: 'Go-To-Market Strategy Assessment',
    description: 'Evaluate your customer acquisition channels and sales process',
    category: 'GTM',
    questions: [
      {
        id: 'q1',
        type: 'multiselect',
        question: 'Which customer acquisition channels are you currently using?',
        required: true,
        options: [
          'Organic Search (SEO)',
          'Paid Search (Google Ads)',
          'Social Media Organic',
          'Social Media Paid',
          'Content Marketing',
          'Email Marketing',
          'Partnerships',
          'Direct Sales',
          'Events/Conferences',
          'Referrals',
          'Cold Outreach'
        ]
      },
      {
        id: 'q2',
        type: 'textarea',
        question: 'Which channel is performing best? Why?',
        required: true,
        placeholder: 'Describe your top channel and key metrics...'
      },
      {
        id: 'q3',
        type: 'select',
        question: 'What is your sales motion?',
        required: true,
        options: ['Self-service', 'Low-touch sales', 'High-touch sales', 'Enterprise sales', 'Hybrid']
      },
      {
        id: 'q4',
        type: 'number',
        question: 'What is your average sales cycle length (in days)?',
        required: true,
        placeholder: '0'
      }
    ]
  },
  {
    id: 'product-roadmap',
    title: 'Product & Roadmap Planning',
    description: 'Understand your product vision and development priorities',
    category: 'Product',
    questions: [
      {
        id: 'q1',
        type: 'textarea',
        question: 'What is your core product value proposition?',
        required: true,
        placeholder: 'What makes your product unique and valuable?'
      },
      {
        id: 'q2',
        type: 'multiselect',
        question: 'What are your top 3 product priorities for the next 6 months?',
        required: true,
        options: [
          'New feature development',
          'Product stability/bug fixes',
          'Performance optimization',
          'User experience improvements',
          'Platform expansion',
          'API/Integrations',
          'Mobile app',
          'Enterprise features'
        ]
      },
      {
        id: 'q3',
        type: 'textarea',
        question: 'What feedback are you getting most from users?',
        required: true,
        placeholder: 'List the top requests and complaints...'
      }
    ]
  },
  {
    id: 'team-organization',
    title: 'Team & Organization Assessment',
    description: 'Evaluate your team structure and hiring needs',
    category: 'Operations',
    questions: [
      {
        id: 'q1',
        type: 'number',
        question: 'How many full-time employees do you have?',
        required: true,
        placeholder: '0'
      },
      {
        id: 'q2',
        type: 'textarea',
        question: 'Describe your current org structure',
        required: true,
        placeholder: 'List departments and key roles...'
      },
      {
        id: 'q3',
        type: 'multiselect',
        question: 'What are your most critical hiring needs?',
        required: true,
        options: [
          'Engineering',
          'Product',
          'Sales',
          'Marketing',
          'Customer Success',
          'Operations',
          'Finance',
          'HR',
          'Design'
        ]
      },
      {
        id: 'q4',
        type: 'textarea',
        question: 'What are your biggest team challenges?',
        required: true,
        placeholder: 'Describe bottlenecks, skill gaps, culture issues...'
      }
    ]
  }
];

// Helper function to get template by ID
export const getTemplateById = (id: string): QuestionnaireTemplate | undefined => {
  return questionnaireTemplates.find(template => template.id === id);
};

// Helper function to create a questionnaire from template
export const createQuestionnaireFromTemplate = (
  templateId: string,
  userId: string,
  customQuestions?: Question[]
) => {
  const template = getTemplateById(templateId);
  if (!template) return null;

  return {
    id: `questionnaire-${Date.now()}`,
    title: template.title,
    description: template.description,
    sentBy: 'Admin',
    sentAt: new Date().toISOString(),
    status: 'pending' as const,
    questions: customQuestions || template.questions,
    responses: undefined
  };
};