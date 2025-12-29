// app/admin/dashboard/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

// =====================================================
// TYPES AND INTERFACES
// =====================================================
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  submittedAt: string;
  status: 'unread' | 'read' | 'responded';
}

interface ServiceBooking {
  id: string;
  serviceType: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  companyName?: string;
  formData: Record<string, any>;
  submittedAt: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  publishedAt?: string;
  status: 'draft' | 'published' | 'scheduled';
  views: number;
}

interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
  source: string;
}

// =====================================================
// ADMIN PANEL MAIN COMPONENT
// =====================================================
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'bookings' | 'blogs' | 'subscribers'>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data - Replace with actual API calls
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      message: 'I need help with my startup strategy...',
      submittedAt: '2024-12-29T10:30:00',
      status: 'unread'
    }
  ]);

  const [serviceBookings, setServiceBookings] = useState<ServiceBooking[]>([
    {
      id: '1',
      serviceType: 'Growth & Revenue Strategy',
      clientName: 'Jane Smith',
      clientEmail: 'jane@company.com',
      clientPhone: '+91 98765 43211',
      companyName: 'TechStartup Inc.',
      formData: {
        currentRevenue: '50L-1Cr',
        targetRevenue: '5Cr+',
        timeline: '12 months',
        challenges: 'Customer acquisition cost too high'
      },
      submittedAt: '2024-12-29T09:15:00',
      status: 'pending'
    }
  ]);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Sample Blog Post',
      slug: 'sample-blog-post',
      content: '',
      excerpt: 'This is a sample blog post',
      author: 'Admin',
      category: 'Strategy',
      tags: ['startup', 'strategy'],
      publishedAt: '2024-12-29T12:00:00',
      status: 'draft',
      views: 0
    }
  ]);

  const [subscribers, setSubscribers] = useState<Subscriber[]>([
    {
      id: '1',
      email: 'subscriber@example.com',
      subscribedAt: '2024-12-20T14:30:00',
      status: 'active',
      source: 'Homepage'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* SIDEBAR */}
      <aside className={`bg-[#0A1E3D] text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex-shrink-0`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && (
              <h1 className="text-xl font-semibold">Admin Panel</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-blue-900/30 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'overview' ? 'bg-blue-600' : 'hover:bg-blue-900/30'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {sidebarOpen && <span>Overview</span>}
            </button>

            <button
              onClick={() => setActiveTab('contacts')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'contacts' ? 'bg-blue-600' : 'hover:bg-blue-900/30'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {sidebarOpen && (
                <div className="flex items-center justify-between w-full">
                  <span>Contact Messages</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {contactMessages.filter(m => m.status === 'unread').length}
                  </span>
                </div>
              )}
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'bookings' ? 'bg-blue-600' : 'hover:bg-blue-900/30'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {sidebarOpen && (
                <div className="flex items-center justify-between w-full">
                  <span>Service Bookings</span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {serviceBookings.filter(b => b.status === 'pending').length}
                  </span>
                </div>
              )}
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'blogs' ? 'bg-blue-600' : 'hover:bg-blue-900/30'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {sidebarOpen && <span>Blog Posts</span>}
            </button>

            <button
              onClick={() => setActiveTab('subscribers')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'subscribers' ? 'bg-blue-600' : 'hover:bg-blue-900/30'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {sidebarOpen && <span>Subscribers</span>}
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-900/30">
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-600/20 rounded-lg transition-colors text-red-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-3xl font-light text-gray-800 mb-2">
            {activeTab === 'overview' && 'Dashboard Overview'}
            {activeTab === 'contacts' && 'Contact Messages'}
            {activeTab === 'bookings' && 'Service Bookings'}
            {activeTab === 'blogs' && 'Blog Management'}
            {activeTab === 'subscribers' && 'Email Subscribers'}
          </h2>
          <p className="text-gray-600">
            {activeTab === 'overview' && 'Welcome back! Here\'s what\'s happening with your business today.'}
            {activeTab === 'contacts' && 'Manage all contact form submissions from your website.'}
            {activeTab === 'bookings' && 'View and manage all service booking requests from 35 different services.'}
            {activeTab === 'blogs' && 'Create, edit, and publish blog posts for your website.'}
            {activeTab === 'subscribers' && 'Manage your email newsletter subscriber list.'}
          </p>
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <OverviewTab 
            contactMessages={contactMessages}
            serviceBookings={serviceBookings}
            blogPosts={blogPosts}
            subscribers={subscribers}
          />
        )}

        {/* CONTACTS TAB */}
        {activeTab === 'contacts' && (
          <ContactsTab 
            contactMessages={contactMessages}
            setContactMessages={setContactMessages}
          />
        )}

        {/* BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <BookingsTab 
            serviceBookings={serviceBookings}
            setServiceBookings={setServiceBookings}
          />
        )}

        {/* BLOGS TAB */}
        {activeTab === 'blogs' && (
          <BlogsTab 
            blogPosts={blogPosts}
            setBlogPosts={setBlogPosts}
          />
        )}

        {/* SUBSCRIBERS TAB */}
        {activeTab === 'subscribers' && (
          <SubscribersTab 
            subscribers={subscribers}
            setSubscribers={setSubscribers}
          />
        )}

      </main>
    </div>
  );
}

// =====================================================
// OVERVIEW TAB COMPONENT
// =====================================================
function OverviewTab({ contactMessages, serviceBookings, blogPosts, subscribers }: {
  contactMessages: ContactMessage[];
  serviceBookings: ServiceBooking[];
  blogPosts: BlogPost[];
  subscribers: Subscriber[];
}) {
  const stats = [
    {
      title: 'Unread Messages',
      value: contactMessages.filter(m => m.status === 'unread').length,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-blue-500'
    },
    {
      title: 'Pending Bookings',
      value: serviceBookings.filter(b => b.status === 'pending').length,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'bg-orange-500'
    },
    {
      title: 'Published Posts',
      value: blogPosts.filter(p => p.status === 'published').length,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: 'bg-green-500'
    },
    {
      title: 'Active Subscribers',
      value: subscribers.filter(s => s.status === 'active').length,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                {stat.icon}
              </div>
              <span className="text-3xl font-light text-gray-800">{stat.value}</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Recent Messages */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Recent Messages</h3>
          <div className="space-y-3">
            {contactMessages.slice(0, 3).map((message) => (
              <div key={message.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-800">{message.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    message.status === 'unread' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {message.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Recent Bookings</h3>
          <div className="space-y-3">
            {serviceBookings.slice(0, 3).map((booking) => (
              <div key={booking.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-800">{booking.clientName}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === 'pending' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{booking.serviceType}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// =====================================================
// CONTACTS TAB COMPONENT
// =====================================================
function ContactsTab({ contactMessages, setContactMessages }: {
  contactMessages: ContactMessage[];
  setContactMessages: React.Dispatch<React.SetStateAction<ContactMessage[]>>;
}) {
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'read' | 'responded'>('all');

  const filteredMessages = filterStatus === 'all' 
    ? contactMessages 
    : contactMessages.filter(m => m.status === filterStatus);

  const markAsRead = (id: string) => {
    setContactMessages(prev => 
      prev.map(msg => msg.id === id ? { ...msg, status: 'read' as const } : msg)
    );
  };

  const deleteMessage = (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setContactMessages(prev => prev.filter(msg => msg.id !== id));
      setSelectedMessage(null);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex gap-2">
        {['all', 'unread', 'read', 'responded'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterStatus === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Messages List */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              onClick={() => {
                setSelectedMessage(message);
                if (message.status === 'unread') markAsRead(message.id);
              }}
              className={`p-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedMessage?.id === message.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-800">{message.name}</h4>
                  <p className="text-sm text-gray-600">{message.email}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  message.status === 'unread' ? 'bg-red-100 text-red-700' :
                  message.status === 'read' ? 'bg-blue-100 text-blue-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {message.status}
                </span>
              </div>
              <p className="text-sm text-gray-700 line-clamp-2 mb-2">{message.message}</p>
              <p className="text-xs text-gray-500">
                {new Date(message.submittedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Detail View */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          {selectedMessage ? (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">{selectedMessage.name}</h3>
                  <p className="text-gray-600">{selectedMessage.email}</p>
                  {selectedMessage.phone && (
                    <p className="text-gray-600">{selectedMessage.phone}</p>
                  )}
                </div>
                <button
                  onClick={() => deleteMessage(selectedMessage.id)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Message:</h4>
                <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">
                  Received: {new Date(selectedMessage.submittedAt).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                  Reply via Email
                </button>
                <button
                  onClick={() => {
                    setContactMessages(prev =>
                      prev.map(msg => msg.id === selectedMessage.id ? { ...msg, status: 'responded' as const } : msg)
                    );
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  Mark as Responded
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20">
              Select a message to view details
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
// =====================================================
// BOOKINGS TAB COMPONENT
// Handles all 35 different service bookings
// =====================================================
function BookingsTab({ serviceBookings, setServiceBookings }: {
  serviceBookings: ServiceBooking[];
  setServiceBookings: React.Dispatch<React.SetStateAction<ServiceBooking[]>>;
}) {
  const [selectedBooking, setSelectedBooking] = useState<ServiceBooking | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'in-progress' | 'completed' | 'cancelled'>('all');
  const [filterService, setFilterService] = useState<string>('all');

  const serviceTypes = [
    'Growth & Revenue Strategy',
    'Financial Planning & Capital',
    'Operations & Efficiency',
    'Strategic Planning & Positioning',
    'Product & Innovation',
    // Add all 35 service types here
  ];

  const filteredBookings = serviceBookings.filter(booking => {
    const statusMatch = filterStatus === 'all' || booking.status === filterStatus;
    const serviceMatch = filterService === 'all' || booking.serviceType === filterService;
    return statusMatch && serviceMatch;
  });

  const updateStatus = (id: string, newStatus: ServiceBooking['status']) => {
    setServiceBookings(prev =>
      prev.map(booking => booking.id === id ? { ...booking, status: newStatus } : booking)
    );
  };

  const deleteBooking = (id: string) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      setServiceBookings(prev => prev.filter(booking => booking.id !== id));
      setSelectedBooking(null);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Filter by Status:</label>
          <div className="flex flex-wrap gap-2">
            {['all', 'pending', 'in-progress', 'completed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Filter by Service:</label>
          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Services</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Bookings Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* List */}
        <div className="space-y-4 max-h-[calc(100vh-400px)] overflow-y-auto">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              onClick={() => setSelectedBooking(booking)}
              className={`bg-white rounded-xl p-6 shadow-sm border cursor-pointer hover:shadow-md transition-all ${
                selectedBooking?.id === booking.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">{booking.clientName}</h4>
                  <p className="text-sm text-gray-600">{booking.companyName || booking.clientEmail}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  booking.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                  booking.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  booking.status === 'completed' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {booking.status}
                </span>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <p className="text-sm font-medium text-blue-800">{booking.serviceType}</p>
              </div>

              <p className="text-xs text-gray-500">
                Submitted: {new Date(booking.submittedAt).toLocaleString()}
              </p>
            </div>
          ))}

          {filteredBookings.length === 0 && (
            <div className="text-center text-gray-500 py-20 bg-white rounded-xl">
              No bookings found
            </div>
          )}
        </div>

        {/* Detail View */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-4">
          {selectedBooking ? (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">{selectedBooking.clientName}</h3>
                  <p className="text-gray-600">{selectedBooking.clientEmail}</p>
                  <p className="text-gray-600">{selectedBooking.clientPhone}</p>
                  {selectedBooking.companyName && (
                    <p className="text-gray-600 font-medium mt-2">{selectedBooking.companyName}</p>
                  )}
                </div>
                <button
                  onClick={() => deleteBooking(selectedBooking.id)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 mb-1">Service Type:</p>
                <p className="text-lg font-medium text-blue-800">{selectedBooking.serviceType}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Form Data:</h4>
                <div className="space-y-3">
                  {Object.entries(selectedBooking.formData).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-gray-600 mb-1">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </p>
                      <p className="text-sm text-gray-800">{String(value)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 mb-4">
                  Submitted: {new Date(selectedBooking.submittedAt).toLocaleString()}
                </p>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 block">Update Status:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updateStatus(selectedBooking.id, 'pending')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedBooking.status === 'pending'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => updateStatus(selectedBooking.id, 'in-progress')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedBooking.status === 'in-progress'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => updateStatus(selectedBooking.id, 'completed')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedBooking.status === 'completed'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => updateStatus(selectedBooking.id, 'cancelled')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedBooking.status === 'cancelled'
                          ? 'bg-gray-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Cancelled
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                Contact Client
              </button>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-20">
              Select a booking to view details
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// =====================================================
// BLOGS TAB COMPONENT
// Create, edit, and manage blog posts
// =====================================================
function BlogsTab({ blogPosts, setBlogPosts }: {
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}) {
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: 'Admin',
    category: '',
    tags: [],
    status: 'draft'
  });

  const handleCreateNew = () => {
    setIsCreating(true);
    setEditingPost(null);
    setFormData({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      author: 'Admin',
      category: '',
      tags: [],
      status: 'draft'
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsCreating(true);
    setEditingPost(post);
    setFormData(post);
  };

  const handleSave = () => {
    if (!formData.title || !formData.content) {
      alert('Please fill in required fields');
      return;
    }

    if (editingPost) {
      // Update existing post
      setBlogPosts(prev =>
        prev.map(post => post.id === editingPost.id ? { ...post, ...formData } as BlogPost : post)
      );
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: formData.title!,
        slug: formData.slug || formData.title!.toLowerCase().replace(/\s+/g, '-'),
        content: formData.content!,
        excerpt: formData.excerpt || formData.content!.substring(0, 150) + '...',
        author: formData.author!,
        category: formData.category!,
        tags: formData.tags!,
        status: formData.status!,
        views: 0
      };
      setBlogPosts(prev => [...prev, newPost]);
    }

    setIsCreating(false);
    setEditingPost(null);
  };

  const handlePublish = (id: string) => {
    setBlogPosts(prev =>
      prev.map(post => post.id === id ? { ...post, status: 'published' as const, publishedAt: new Date().toISOString() } : post)
    );
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(prev => prev.filter(post => post.id !== id));
    }
  };

  if (isCreating) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-medium text-gray-800">
            {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h3>
          <button
            onClick={() => setIsCreating(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter post title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="url-friendly-slug"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief description of the post"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="Write your blog post content here... (Markdown supported)"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Strategy"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags?.join(', ')}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="startup, growth, funding"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as BlogPost['status'] })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={handleSave}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {editingPost ? 'Update Post' : 'Save Post'}
            </button>
            <button
              onClick={() => setIsCreating(false)}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header with Create Button */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
            All ({blogPosts.length})
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
            Published ({blogPosts.filter(p => p.status === 'published').length})
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
            Drafts ({blogPosts.filter(p => p.status === 'draft').length})
          </button>
        </div>
        <button
          onClick={handleCreateNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Post
        </button>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-medium text-gray-800">{post.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    post.status === 'published' ? 'bg-green-100 text-green-700' :
                    post.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {post.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                  {post.publishedAt && (
                    <>
                      <span>•</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(post)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Edit"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                {post.status !== 'published' && (
                  <button
                    onClick={() => handlePublish(post.id)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Publish"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =====================================================
// SUBSCRIBERS TAB COMPONENT
// Manage email newsletter subscribers
// =====================================================
function SubscribersTab({ subscribers, setSubscribers }: {
  subscribers: Subscriber[];
  setSubscribers: React.Dispatch<React.SetStateAction<Subscriber[]>>;
}) {
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'unsubscribed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubscribers = subscribers.filter(sub => {
    const statusMatch = filterStatus === 'all' || sub.status === filterStatus;
    const searchMatch = sub.email.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  const deleteSubscriber = (id: string) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
      setSubscribers(prev => prev.filter(sub => sub.id !== id));
    }
  };

  const toggleStatus = (id: string) => {
    setSubscribers(prev =>
      prev.map(sub => sub.id === id ? {
        ...sub,
        status: sub.status === 'active' ? 'unsubscribed' as const : 'active' as const
      } : sub)
    );
  };

  const exportToCSV = () => {
    const csv = [
      ['Email', 'Status', 'Subscribed At', 'Source'].join(','),
      ...filteredSubscribers.map(sub =>
        [sub.email, sub.status, sub.subscribedAt, sub.source].join(',')
      )
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      
      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Subscribers</p>
              <p className="text-3xl font-light text-gray-800">{subscribers.length}</p>
            </div>
            <div className="bg-blue-500 text-white p-3 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active</p>
              <p className="text-3xl font-light text-gray-800">
                {subscribers.filter(s => s.status === 'active').length}
              </p>
            </div>
            <div className="bg-green-500 text-white p-3 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1 ">Unsubscribed</p>
              <p className="text-3xl font-light text-gray-800">
                {subscribers.filter(s => s.status === 'unsubscribed').length}
              </p>
            </div>
            <div className="bg-gray-500 text-white p-3 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex gap-2">
          {['all', 'active', 'unsubscribed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by email..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <button
            onClick={exportToCSV}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Subscribed At
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSubscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-800">{subscriber.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      subscriber.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {subscriber.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(subscriber.subscribedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => toggleStatus(subscriber.id)}
                        className="text-blue-600 hover:text-blue-800 p-2"
                        title={subscriber.status === 'active' ? 'Unsubscribe' : 'Reactivate'}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {subscriber.status === 'active' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteSubscriber(subscriber.id)}
                        className="text-red-600 hover:text-red-800 p-2"
                        title="Delete"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredSubscribers.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No subscribers found
          </div>
        )}
      </div>

      {/* Bulk Actions */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Bulk Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Send Newsletter to All Active
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Export All Subscribers
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Delete All Unsubscribed
          </button>
        </div>
      </div>
    </div>
  );
}
