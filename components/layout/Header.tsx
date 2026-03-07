'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* TOP BAR - Clean Corporate Dark */}
      <div className="hidden lg:flex bg-slate-900 text-slate-300 py-2 px-6 text-sm font-medium justify-between items-center z-50 relative border-b border-slate-800">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex gap-8">
            <a href="/info@optimawebdesign.in" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <FiMail className="text-[#FF5B04] text-base" /> info@optimawebdesign.in
            </a>
            <a href="tel:+917574075209" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <FiPhone className="text-[#FF5B04] text-base" /> +91 7574075209
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2 text-slate-400">
              <FiClock className="text-[#FF5B04] text-base" /> Mon - Sat: 9:00 AM - 6:00 PM (IST)
            </span>
            <a href="https://wa.me/917574075209" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-[#25D366] px-4 py-1.5 rounded hover:bg-[#20bd5a] transition-colors shadow-sm font-semibold">
              <FaWhatsapp className="text-lg" /> WhatsApp Sales
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV - Clean White & Legible */}
      <motion.header 
        className={`sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-3 shadow-sm border-b border-slate-200' : 'py-5 border-b border-slate-200'}`}
      >
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Ghanshaym Store<span className="text-[#FF5B04]">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-2
                    ${isActive ? "text-[#075056]" : "text-slate-600 hover:text-[#075056]"}
                  `}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav" 
                      className="absolute bottom-0 left-0 right-0 h-0.5[#075056]" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/get-quote" className="hidden md:flex items-center gap-2 bg-[#FF5B04] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e04f03] transition-colors shadow-sm">
              Request Quote
            </Link>
            
            {/* Mobile Hamburger Icon */}
            <button 
              className="md:hidden text-slate-900 text-2xl focus:outline-none p-1" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN - Clean & Accessible */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-semibold py-3 border-b border-slate-100 transition-colors
                        ${isActive ? "text-[#075056]" : "text-slate-700 hover:text-[#075056]"}
                      `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="pt-4 pb-2">
                  <Link 
                    href="/get-quote" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-[#075056] text-white text-center py-3 rounded-lg text-sm font-bold shadow-sm"
                  >
                    Request Official Quote
                  </Link>
                </div>
                
                {/* Mobile Top Bar Info */}
                <div className="pt-6 mt-2 border-t border-slate-100 flex flex-col gap-4">
                   <a href="https://wa.me/917574075209" className="flex items-center justify-center gap-2 text-white bg-[#25D366] py-3 rounded-lg text-sm font-bold shadow-sm">
                     <FaWhatsapp className="text-xl" /> WhatsApp Us
                   </a>
                   <div className="flex items-center justify-center gap-2 text-slate-600 text-sm font-medium">
                     <FiMail className="text-[#FF5B04] text-lg" /> sales@varnieximenterprise.com
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>
    </>
  );
}