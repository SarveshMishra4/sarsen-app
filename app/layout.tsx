import type { Metadata } from "next";
import "./globals.css";
import Header from "../app/components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Sarsen Strategy Consulting | Quantitative Strategy for Indian Startups",
  description: "Productized strategy consulting for early-stage startups. Data-driven insights, clear deliverables, measurable outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}