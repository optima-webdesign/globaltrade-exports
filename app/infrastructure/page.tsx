'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiSettings, FiThermometer, FiBox, FiTruck, FiCheckCircle } from 'react-icons/fi';

export default function InfrastructurePage() {
  // Added strict Typescript Variants to prevent Framer Motion errors
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-[#0A192F]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0A192F] pt-40 pb-32 px-6 overflow-hidden border-b-8 border-[#D4AF37]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2000&auto=format&fit=crop" 
            alt="Warehouse Facility" 
            fill 
            className="object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0A192F] to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Core Strength</p>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[1.1]">
              World-Class <br/>
              <span className="text-gray-400">Infrastructure.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Equipped with cutting-edge processing technology and massive storage capabilities, our facility in Gujarat ensures that every commodity is handled with uncompromising precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SCALE NUMBERS (Data Bar) */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { label: 'Total Area', val: '50,000', unit: 'Sq.Ft' },
              { label: 'Storage Capacity', val: '10,000', unit: 'MT' },
              { label: 'Processing Speed', val: '150', unit: 'MT/Day' },
              { label: 'Proximity to Port', val: '300', unit: 'KM (Mundra)' },
            ].map((stat, i) => (
              <div key={i} className="p-8 text-center hover:bg-gray-50 transition-colors">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                <p className="text-3xl font-black text-[#0A192F]">{stat.val} <span className="text-sm text-[#D4AF37]">{stat.unit}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FACILITY DIVISIONS (Editorial Grid Layout) */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          
          {/* Processing Unit */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="order-2 lg:order-1 relative aspect-4/3 bg-gray-200 border border-gray-300">
              <Image src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1000&auto=format&fit=crop" alt="Processing Unit" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 border-l-4 border-[#D4AF37] shadow-lg">
                <span className="text-[#0A192F] text-[10px] font-black uppercase tracking-widest">Zone 01</span>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <FiSettings className="text-4xl text-[#D4AF37] mb-6" />
              <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tighter">Advanced Sortex & Processing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Our commodities pass through high-tech automated processing lines. We utilize advanced Color Sortex machines, destoners, and magnetic separators to ensure 99.9% purity in our grains and spices, strictly adhering to international food safety standards.
              </p>
              <ul className="space-y-3">
                {['Buhler Sortex Technology', 'Automated Destoning', 'Zero Human Touch Processing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#0A192F] uppercase tracking-wider">
                    <FiCheckCircle className="text-[#D4AF37]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warehousing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FiThermometer className="text-4xl text-[#D4AF37] mb-6" />
              <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tighter">Climate-Controlled Storage</h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Agri-commodities demand precise storage environments. Our warehouse is equipped with industrial-grade climate control and ventilation systems to maintain optimal moisture levels, preventing any microbial growth or quality degradation during storage.
              </p>
              <ul className="space-y-3">
                {['50,000 Sq.Ft Covered Area', 'Moisture & Temperature Monitored', 'Pest-Control Certified Premises'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#0A192F] uppercase tracking-wider">
                    <FiCheckCircle className="text-[#D4AF37]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative aspect-4/3 bg-gray-200 border border-gray-300">
              <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop" alt="Warehousing" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 right-4 bg-white px-4 py-2 border-r-4 border-[#D4AF37] shadow-lg">
                <span className="text-[#0A192F] text-[10px] font-black uppercase tracking-widest">Zone 02</span>
              </div>
            </motion.div>
          </div>

          {/* Packaging & Dispatch */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="order-2 lg:order-1 relative aspect-4/3 bg-gray-200 border border-gray-300">
              <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop" alt="Logistics" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 border-l-4 border-[#D4AF37] shadow-lg">
                <span className="text-[#0A192F] text-[10px] font-black uppercase tracking-widest">Zone 03</span>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <div className="flex gap-4 mb-6">
                <FiBox className="text-4xl text-[#D4AF37]" />
                <FiTruck className="text-4xl text-[#D4AF37]" />
              </div>
              <h2 className="text-3xl font-black text-[#0A192F] mb-6 uppercase tracking-tighter">OEM Packaging & Port Dispatch</h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Whether you need 50kg bulk Jute bags or retail-ready private labeling, our packaging unit handles it all. Once packed, shipments are containerized on-site and dispatched via our dedicated fleet to major ports like Mundra and Nhava Sheva.
              </p>
              <ul className="space-y-3">
                {['Custom Private Labeling (OEM)', 'On-site Container Stuffing', 'Direct Port Connectivity'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#0A192F] uppercase tracking-wider">
                    <FiCheckCircle className="text-[#D4AF37]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LAB TEST STRIP (Crucial for B2B) */}
      <section className="bg-[#0A192F] py-20 px-6 border-y border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">In-House Quality Control Lab</h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-light">
            We don&apos;t leave quality to chance. Before any container is sealed, the batch is tested in our internal laboratory for moisture limits, pesticide residues, and aflatoxin levels, ensuring compliance with US FDA and European Union standards.
          </p>
          <Link href="/get-quote" className="inline-block bg-[#D4AF37] text-[#0A192F] px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
            Request Sample / Quote
          </Link>
        </div>
      </section>

    </div>
  );
}