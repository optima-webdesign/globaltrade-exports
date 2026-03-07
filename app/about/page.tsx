'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Unused icons (FiPackage, FiArrowRight) ko hata diya gaya hai
import { 
  FiTarget, FiEye, FiGlobe, 
  FiAward, FiCheck, FiBriefcase, FiTrendingUp
} from 'react-icons/fi';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-[#FF5B04] selection:text-white pb-24">
      
      {/* 1. HERO SECTION - Premium Banner */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000&auto=format&fit=crop" 
            alt="Cargo Logistics" 
            fill 
            className="object-cover opacity-20" 
            priority 
          />
          {/* Updated gradient class here */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-80"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* Updated height class here */}
              <span className="h-0.5 w-8 bg-[#FF5B04]"></span>
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                Company Profile
              </span>
              {/* Updated height class here */}
              <span className="h-0.5 w-8 bg-[#FF5B04]"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Delivering Indian <br/>
              Excellence <span className="text-[#FF5B04]">Globally.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
              We are committed to connecting global buyers with the finest products sourced from India while maintaining the highest standards of quality and transparency in international trade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE - Clean Split Layout */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Who We Are</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Trusted Sourcing & Global Trade Partners.</h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Varni Exim Enterprise is a trusted Indian export company dedicated to supplying premium quality products to international markets. Our focus is on delivering authentic Indian goods while maintaining strict quality standards.
                </p>
                <p>
                  With a strong supplier network and experienced team, we work closely with farmers, manufacturers, and distributors to source the best products and deliver them to global buyers efficiently.
                </p>
              </div>
              <div className="mt-8 bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <FiAward className="text-[#075056] text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Core Objective</h4>
                  <p className="text-slate-600 text-sm">To build long-term partnerships with importers by ensuring every shipment meets international standards and arrives on time.</p>
                </div>
              </div>
            </motion.div>

            {/* Updated height class here */}
            <div className="relative h-125 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="/about.png" alt="Company Operations" fill className="object-cover" />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-xl text-center">
                <p className="text-4xl font-black text-[#FF5B04]">15+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mt-1">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION - Elegant Cards */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-8 border border-slate-100">
                <FiTarget className="text-3xl text-[#FF5B04]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To promote the richness of Indian products across global markets by providing reliable export services, premium quality products, and transparent business practices. We aim to support international buyers with efficient logistics, competitive pricing, and consistent supply.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-8 border border-slate-100">
                <FiEye className="text-3xl text-[#FF5B04]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a globally recognized export company known for quality, trust, and excellence in international trade. We strive to expand our global presence while continuously improving product quality, supply chain efficiency, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES - Clean Grid */}
      <section className="py-24 px-6 bg-[#075056] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Our Foundation</h2>
            <h3 className="text-4xl font-bold tracking-tight">Company Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Quality Assurance", icon: <FiCheck /> },
              { title: "Business Transparency", icon: <FiEye /> },
              { title: "Long-Term Relationships", icon: <FiBriefcase /> },
              { title: "Timely Delivery", icon: <FiTrendingUp /> },
              { title: "Ethical Practices", icon: <FiAward /> },
              { title: "Customer Satisfaction", icon: <FiTarget /> }
            ].map((value, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#FF5B04] text-white rounded-lg flex items-center justify-center text-xl shrink-0">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-lg">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL REACH & QUALITY - Data-Driven */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Global Reach */}
            <div>
              <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mb-6">
                <FiGlobe className="text-3xl text-[#075056]" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Serving Clients Worldwide</h3>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                We export our products to buyers and distributors across multiple regions. Our robust logistics network ensures safe, compliant, and timely delivery to international destinations.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
                <p className="text-sm font-bold uppercase tracking-widest text-[#FF5B04] mb-6">Active Export Markets</p>
                <div className="grid grid-cols-2 gap-y-6">
                  {['North America', 'European Union', 'Middle East', 'Asia-Pacific'].map((region, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#075056]"></div>
                      <span className="font-semibold text-slate-800">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quality Certifications */}
            <div className="bg-slate-900 text-white p-10 md:p-14 rounded-2xl shadow-xl">
               <FiAward className="text-4xl text-[#FF5B04] mb-6" />
               <h3 className="text-3xl font-bold mb-6 tracking-tight">Commitment To Quality</h3>
               <p className="text-slate-300 text-lg leading-relaxed mb-10">
                 Quality is the foundation of our export business. Every product goes through strict quality inspection to meet international benchmarks before container loading.
               </p>
               
               <p className="text-sm font-bold uppercase tracking-widest text-[#FF5B04] mb-6">Certifications & Compliance</p>
               <ul className="space-y-4">
                 {['ISO 9001:2015 Certified', 'HACCP Standards Maintained', 'Organic Certification Available', 'Complete Export Compliance'].map((cert, i) => (
                   <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                     <FiCheck className="text-[#FF5B04] text-xl shrink-0" />
                     <span className="font-medium text-slate-100">{cert}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - Aligned with Homepage */}
      <section className="bg-slate-900 text-white py-24 px-6 mt-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-4">Initiate Business</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Partner With Us <br className="hidden md:block" />For Global Trade</h3>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            {/* Apostrophe escape kiya gaya hai yahan */}
            Looking for a reliable export partner from India? We are committed to delivering high-quality products with dependable export services. Let&apos;s discuss your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#FF5B04] text-white px-8 py-4 rounded font-bold hover:bg-[#e04f03] transition-colors shadow-lg">
              Contact Sales Team
            </Link>
            <Link href="/get-quote" className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Request Official Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}