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
    setIsScrolled(latest > 20);
  });

  return (
    <>
      {/* TOP BAR - Exact Match with Ghanshaym Screenshot (Mirage Background, green WhatsApp) */}
      <div className="hidden lg:flex bg-[#16232A] text-white py-2 px-6 text-sm font-medium justify-between items-center z-50 relative">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center">
          
          {/* Left Info: Email & Phone */}
          <div className="flex gap-8">
            <a href="mailto:info@optimawebdesign.in" className="flex items-center gap-2 hover:text-[#FF5B04] transition-colors cursor-pointer">
              <FiMail className="text-[#FF5B04] text-lg" /> info@optimawebdesign.in
            </a>
            <a href="tel:+917574075209" className="flex items-center gap-2 hover:text-[#FF5B04] transition-colors cursor-pointer">
              <FiPhone className="text-[#FF5B04] text-lg" /> +91 7574075209
            </a>
          </div>
          
          {/* Right Info: Timing & WhatsApp */}
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2 text-white/80">
              <FiClock className="text-[#FF5B04] text-lg" /> Mon - Sat: 9:00 AM - 6:00 PM (IST)
            </span>
            <a href="https://wa.me/917574075209" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-1.5 rounded hover:bg-[#1DA851] transition-colors font-semibold shadow-sm">
              <FaWhatsapp className="text-xl" /> WhatsApp Sales
            </a>
          </div>

        </div>
      </div>

      {/* MAIN NAV - Crisp White Background matching the screenshot */}
      <motion.header 
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'py-3 shadow-md' : 'py-5 border-b border-gray-200'}`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo - Bold & Sharp (Left Aligned) */}
          <Link href="/" className="text-[2rem] font-bold text-[#16232A] tracking-tight flex items-baseline leading-none">
            Ghanshaym Store<span className="text-[#FF5B04] text-[2.5rem] leading-[0]">.</span>
          </Link>
          
          {/* Desktop Navigation - Natural Center */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-12 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-semibold transition-colors duration-200 relative
                    ${isActive ? "text-[#16232A]" : "text-gray-600 hover:text-[#16232A]"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Right Action Buttons - Login + Request Quote */}
          <div className="flex items-center gap-6">
            
            {/* Desktop Login - Added as requested */}
            <Link href="/login" className="hidden lg:block text-[#16232A] text-[15px] font-semibold hover:text-[#FF5B04] transition-colors">
              Login
            </Link>

            {/* Request Quote Button - Matches Blaze Orange style */}
            <Link href="/get-quote" className="hidden lg:flex items-center justify-center bg-[#FF5B04] text-white px-6 py-2.5 rounded text-[15px] font-semibold hover:bg-[#e04e00] transition-colors shadow-sm">
              Request Quote
            </Link>
            
            {/* Mobile Hamburger Icon */}
            <button 
              className="lg:hidden text-[#16232A] text-3xl focus:outline-none p-1" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white border-b-4 border-[#FF5B04] shadow-2xl lg:hidden overflow-hidden origin-top"
            >
              <div className="flex flex-col px-6 py-6 space-y-1">
                
                {/* Mobile Links */}
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-[15px] font-semibold py-3 border-b border-gray-100 transition-colors flex items-center justify-between
                        ${isActive ? "text-[#FF5B04]" : "text-gray-700 hover:text-[#FF5B04]"}
                      `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                {/* Mobile Login & Quote */}
                <div className="pt-4 pb-2 flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center text-[15px] font-semibold py-3 bg-gray-100 text-[#16232A] rounded transition-colors hover:bg-gray-200"
                  >
                    Login
                  </Link>

                  <Link 
                    href="/get-quote" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-[#FF5B04] text-white text-center py-3 rounded text-[15px] font-semibold shadow-sm hover:bg-[#e04e00] transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>
    </>
  );
}