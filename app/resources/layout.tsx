// app/resources/[slug]/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Tools & Calculators | Sareen & Company',
  description: 'Free interactive business calculators for valuation, fundraising, marketing ROI, and more.',
};

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* You can add a header, navigation, or sidebar specific to tool pages here */}
      {children}
    </>
  );
}