'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '@/lib/data';
// FiArrowRight removed as it was unused
import { 
  FiCheckCircle, FiGlobe, FiShield, 
  FiPackage, FiBriefcase, FiSunrise, FiCoffee, 
  FiFeather, FiMapPin
} from 'react-icons/fi';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-[#FF5B04] selection:text-white pb-24">
      
      {/* 1. HERO SECTION - Clean Corporate Banner */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000&auto=format&fit=crop" 
            alt="Export Commodities" 
            fill 
            className="object-cover opacity-20" 
            priority
          />
          {/* Replaced bg-gradient-to-t with bg-linear-to-t */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-80"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* Replaced h-[2px] with h-0.5 */}
              <span className="h-0.5 w-8 bg-[#FF5B04]"></span>
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                Varni Exim Enterprise
              </span>
              <span className="h-0.5 w-8 bg-[#FF5B04]"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Premium Indian <br/> <span className="text-[#FF5B04]">Export Portfolio.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our diverse range of world-class commodities, sourced responsibly from India and delivered globally with absolute trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCT CATALOG - Clean Grid with Individual Pill Tabs */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          
          <div className="flex flex-col gap-8 mb-12">
            <div className="text-center md:text-left">
                <span className="text-[#FF5B04] font-bold tracking-widest uppercase text-sm mb-2 block">Live Catalog</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Featured Commodities</h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setActiveCategory('all')} 
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === 'all' 
                    ? 'bg-[#075056] text-white border-[#075056] shadow-md' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button 
                  key={cat.id} 
                  onClick={() => setActiveCategory(cat.slug)} 
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeCategory === cat.slug 
                      ? 'bg-[#075056] text-white border-[#075056] shadow-md' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT GRID - Clean Cards */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id} 
                  layout 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.95 }} 
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#075056]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                     <Image 
                       src={product.image} 
                       alt={product.name} 
                       fill 
                       sizes="(max-width: 768px) 100vw, 25vw" 
                       className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                     />
                  </div>
                  
                  {/* Replaced flex-grow with grow */}
                  <div className="p-6 flex flex-col grow">
                    <p className="text-xs font-bold text-[#FF5B04] uppercase tracking-wider mb-2">
                        {categories.find(c => c.slug === product.category)?.name}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight line-clamp-1">{product.name}</h3>
                    <p className="text-slate-600 text-sm mb-6 grow line-clamp-2 leading-relaxed">{product.shortDesc}</p>
                    
                    <div className="flex gap-3 mt-auto">
                      <Link href={`/products/${product.slug}`} className="flex-1 bg-white border border-slate-200 text-slate-800 py-2.5 rounded-lg text-center text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                        Details
                      </Link>
                      <Link href={`/get-quote?product=${product.slug}`} className="flex-1 bg-[#075056] text-white py-2.5 rounded-lg text-center text-sm font-semibold hover:bg-slate-900 transition-colors shadow-sm">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. EXPLORE CATEGORIES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF5B04] mb-3">What We Do</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Our Core Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FiCoffee, name: "Spices", desc: "Authentic, aromatic Indian spices meeting global standards.", items: "Turmeric, Chili, Cumin" },
              { icon: FiFeather, name: "Herbal", desc: "Ayurvedic herbs for international wellness and cosmetics.", items: "Ashwagandha, Moringa" },
              { icon: FiSunrise, name: "Grains", desc: "Premium rice and pulses meticulously packed for staple markets.", items: "Basmati Rice, Wheat" },
              { icon: FiBriefcase, name: "Leather", desc: "Durable handcrafted leather products for fashion and utility.", items: "Bags, Wallets, Belts" }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full border border-slate-200">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-[#FF5B04] text-2xl mb-6 shadow-sm group-hover:bg-[#075056] group-hover:text-white transition-colors duration-300">
                  <cat.icon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">{cat.name}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed grow">{cat.desc}</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#075056] mb-2">Key Products</p>
                  <p className="text-sm font-semibold text-slate-800">
                    {cat.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY US & PACKAGING - Clean Split */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Quality Assurance */}
            <div className="bg-slate-50 p-10 md:p-12 rounded-2xl border border-slate-200 flex flex-col justify-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-[#FF5B04] text-2xl shadow-sm">
                <FiShield />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Export Quality Assurance</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our commodities meet stringent international standards and are prepared specifically to thrive in global markets.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium Quality Sourcing",
                  "Strict Multi-level Inspection",
                  "Export Grade Packaging",
                  "Competitive Global Pricing"
                ].map((reason, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold text-base">
                    <FiCheckCircle className="text-[#075056] text-xl shrink-0" /> {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* Export Packaging */}
            <div className="bg-[#075056] text-white p-10 md:p-12 rounded-2xl shadow-lg relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-[#FF5B04] text-2xl">
                  <FiPackage />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Secured Packaging</h3>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">
                  We provide safe, customized, and durable packaging options to ensure product integrity during international transit.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <span className="bg-white/10 p-4 rounded-xl text-center font-semibold text-sm">Bulk Packaging</span>
                    <span className="bg-white/10 p-4 rounded-xl text-center font-semibold text-sm">Private Labeling</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. GLOBAL REACH */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <FiGlobe className="text-6xl text-[#075056] mx-auto mb-8" />
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Global Supply Network</h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            Serving distributors, wholesalers, and importers across major international regions with an efficient, timely logistics setup.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['North America', 'Europe', 'Middle East', 'Asia-Pacific'].map((region, i) => (
              <span key={i} className="bg-white border border-slate-200 text-slate-800 px-6 py-3 rounded-full font-semibold shadow-sm flex items-center gap-2 uppercase tracking-wide text-sm cursor-default">
                <FiMapPin className="text-[#FF5B04]" /> {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="bg-slate-900 text-white py-24 px-6 mt-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-4">Export With Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Looking For Reliable <br className="hidden md:block" /> Export Products?</h3>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your product requirements and receive a customized quotation for global shipment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-quote" className="bg-[#FF5B04] text-white px-8 py-4 rounded font-bold hover:bg-[#e04f03] transition-colors shadow-lg">
              Request Official Quote
            </Link>
            <Link href="/contact" className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}