import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Premium Corporate Font
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

// Using Plus Jakarta Sans for a more solid, trustworthy corporate look
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  display: 'swap',
});

// Powerful B2B SEO Metadata
export const metadata: Metadata = {
  title: "GlobalTrade Exports | Premium Indian Commodities",
  description: "Leading Indian export company specializing in whole spices, food grains, leather goods, and herbal extracts. ISO 9001:2015 Certified and globally recognized.",
  keywords: ["Indian Exporter", "Bulk Spices", "Food Grains Export", "B2B Trading", "GlobalTrade Exports", "OEM Packaging India"],
  openGraph: {
    title: "GlobalTrade Exports | Global Scale. Precision Trade.",
    description: "Bridging the gap between Indian agriculture and global markets.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      {/* Removed pt-20, added antialiased for crisp text rendering */}
      <body className={`min-h-screen flex flex-col font-sans text-gray-900 bg-white antialiased`}>
        
        {/* Header should ideally sit outside the scroll container if it's fixed */}
        <Header /> 

        <SmoothScroll>
          {/* The actual scrollable area */}
          <main className="grow" data-scroll-container>
            {children}
            <Footer />
          </main>
        </SmoothScroll>
        
      </body>
    </html>
  );
}