// app/lib/user-types.ts
// TypeScript type definitions for user authentication and dashboard

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  companyName?: string;
  packagePurchased: string;
  purchaseDate: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin?: string;
}

export interface Questionnaire {
  id: string;
  title: string;
  description: string;
  sentBy: string; // Admin name
  sentAt: string;
  dueDate?: string;
  status: 'pending' | 'in-progress' | 'completed';
  questions: Question[];
  responses?: QuestionnaireResponse;
}

export interface Question {
  id: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'number' | 'date';
  question: string;
  required: boolean;
  options?: string[]; // For select, multiselect, radio
  placeholder?: string;
  helpText?: string;
}

export interface QuestionnaireResponse {
  questionnaireId: string;
  userId: string;
  responses: { [questionId: string]: any };
  submittedAt?: string;
  completedPercentage: number;
}

export interface Resource {
  id: string;
  name: string;
  type: 'excel' | 'pdf' | 'ppt' | 'doc' | 'google-sheet' | 'website' | 'other';
  url: string;
  sharedBy: string; // Admin name
  sharedAt: string;
  description?: string;
  size?: string;
}

export interface Notification {
  id: string;
  type: 'questionnaire' | 'resource' | 'message' | 'update';
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
  actionUrl?: string;
}

export interface UserSession {
  user: User;
  token: string;
  expiresAt: string;
}