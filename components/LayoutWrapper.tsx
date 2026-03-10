'use client'

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header'; // Adjust path if needed
import Footer from '@/components/layout/Footer'; // Adjust path if needed

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // In pages par Header aur Footer nahi dikhenge
  const isSpecialPage = pathname.startsWith('/admin') || pathname === '/login' || pathname === '/register';

  return (
    <>
      {!isSpecialPage && <Header />}
      <main className="grow">
        {children}
      </main>
      {!isSpecialPage && <Footer />}
    </>
  );
}