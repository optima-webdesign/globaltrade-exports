import Link from 'next/link';
import { companyInfo } from '@/lib/data';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-8 font-sans relative border-t border-slate-200">
      
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#FF5B04] via-[#075056] to-slate-200"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Main Grid Layout - Fixed Spacing & Removed Empty Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6 block">
              Ghanshaym Store<span className="text-[#FF5B04]">.</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              A premier export house bringing the finest Indian agricultural commodities and crafted goods to the global market with uncompromising quality and absolute trust.
            </p>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-sm">
              <FiGlobe className="text-[#075056] text-xl" />
              <span className="text-sm font-semibold text-slate-800 tracking-wide">Exporting to 25+ Countries</span>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5B04]"></span> Company
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Contact'].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-600 text-sm font-medium hover:text-[#075056] transition-all flex items-center gap-2 group"
                  >
                    <FiArrowRight className="text-[#FF5B04] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Trade Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5B04]"></span> Resources
            </h4>
            <ul className="space-y-4">
              {['Terms of Trade', 'Quality Certifications', 'Packaging Options', 'Privacy Policy'].map((item, i) => (
                <li key={i}>
                  <Link 
                    href="#" 
                    className="text-slate-600 text-sm font-medium hover:text-[#075056] transition-all flex items-center gap-2 group"
                  >
                    <FiArrowRight className="text-[#FF5B04] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Global Desk (Contact) */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5B04]"></span> Global Desk
            </h4>
            <ul className="space-y-5 text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#075056] group-hover:bg-[#075056] group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <FiMapPin className="text-lg" />
                </div>
                <span className="leading-relaxed pt-2 group-hover:text-slate-900 transition-colors text-sm">
                  {companyInfo?.location || 'Surat, Gujarat, India'}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#075056] group-hover:bg-[#075056] group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <FiPhone className="text-lg" />
                </div>
                <span className="group-hover:text-slate-900 transition-colors text-sm">
                  {companyInfo?.phone || '+91 7574075209'}
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#075056] group-hover:bg-[#075056] group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <FiMail className="text-lg" />
                </div>
                <span className="group-hover:text-slate-900 transition-colors break-all text-sm">
                  {companyInfo?.email || 'sales@varnieximenterprise.com'}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Optima Web Design Credit */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Varni Exim Enterprise. All rights reserved.
          </div>
          <div className="text-slate-500 text-sm font-medium flex items-center gap-1.5">
            Powered by <a href="https://optimawebdesign.in" target="_blank" rel="noopener noreferrer" className="text-[#FF5B04] font-bold hover:underline transition-all">Optima Web Design</a>
          </div>
        </div>

      </div>
    </footer>
  );
}