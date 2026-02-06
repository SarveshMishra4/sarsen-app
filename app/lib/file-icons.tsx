// app/lib/file-icons.tsx
// Icon mappings for different file types and helper functions

import React from "react";

export const getFileIcon = (type: string): React.ReactElement => {
  const icons: Record<string, React.ReactElement> = {
    excel: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zm-4.5-7L11 16.5 8.5 13H7l3 4.5L7 22h1.5L11 18.5 13.5 22H15l-3-4.5L15 13h-1.5z" />
      </svg>
    ),

    pdf: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zm-4.5-7h-2v2h2v2h-2v2h-2v-6h4v2zm-5 0h-2v6h2v-2h1c1.1 0 2-.9 2-2s-.9-2-2-2zm0 3h-1v-2h1c.55 0 1 .45 1 1s-.45 1-1 1zm8-3h-2v6h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4v-2h1v2h-1z" />
      </svg>
    ),

    ppt: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zm-9-7h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v2H9v-8zm2 4h1v-2h-1v2z" />
      </svg>
    ),

    doc: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zm-9-7h6v2H9v-2zm0 4h6v2H9v-2z" />
      </svg>
    ),

    "google-sheet": (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-2h-2v2zm0-4h2v-2h-2v2zm-4 4h2v-2H8v2zm0-4h2v-2H8v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2z" />
      </svg>
    ),

    website: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
      </svg>
    ),

    other: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
      </svg>
    )
  };

  return icons[type] ?? icons.other;
};

export const getFileColor = (type: string): string => {
  const colors: Record<string, string> = {
    excel: "from-green-500 to-green-600",
    pdf: "from-red-500 to-red-600",
    ppt: "from-orange-500 to-orange-600",
    doc: "from-blue-500 to-blue-600",
    "google-sheet": "from-green-400 to-green-500",
    website: "from-purple-500 to-purple-600",
    other: "from-gray-500 to-gray-600"
  };

  return colors[type] ?? colors.other;
};

export const getFileTypeName = (type: string): string => {
  const names: Record<string, string> = {
    excel: "Excel Sheet",
    pdf: "PDF Document",
    ppt: "PowerPoint",
    doc: "Word Document",
    "google-sheet": "Google Sheet",
    website: "Website Link",
    other: "File"
  };

  return names[type] ?? names.other;
};
