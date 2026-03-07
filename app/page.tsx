'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, FiGlobe, FiShield, FiCheck, 
  FiAward, FiTrendingUp, FiStar, FiTruck, FiBox, FiLayers
} from 'react-icons/fi';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-800 selection:bg-[#FF5B04] selection:text-white">
      {/* Layout fix: pb-24 yahan se hata diya gaya hai */}
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-160ex items-center justify-center px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Global Export Logistics" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* Linter fix: h-[2px] ki jagah h-0.5 */}
              <span className="h-0.5 w-8 sm:w-12 bg-[#FF5B04]"></span>
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                Premium Indian Exports
              </span>
              <span className="h-0.5 w-8 sm:w-12 bg-[#FF5B04]"></span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Global Trade, <br /> Delivered with <span className="text-[#FF5B04]">Trust.</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl mb-10 font-medium">
              Sourcing and delivering authentic Indian agricultural and manufactured goods to 25+ countries with absolute reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="bg-[#FF5B04] text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-[#075056] transition-all duration-300 shadow-lg shadow-[#FF5B04]/20">
                Explore Catalog
              </Link>
              <Link href="/contact" className="bg-transparent border border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-[#075056] transition-all duration-300">
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Strip */}
      <div className="bg-white border-b border-slate-200 shadow-sm relative z-20 -mt-8 mx-6 lg:mx-auto max-w-6xl rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="flex items-center gap-4 p-6 w-full md:w-1/3 justify-center md:justify-start">
            <div className="bg-slate-50 p-3 rounded-full"><FiGlobe className="text-[#075056] text-2xl" /></div>
            <div>
              <p className="text-2xl font-black text-slate-900">25+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Countries Served</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 w-full md:w-1/3 justify-center md:justify-start">
            <div className="bg-slate-50 p-3 rounded-full"><FiTrendingUp className="text-[#075056] text-2xl" /></div>
            <div>
              <p className="text-2xl font-black text-slate-900">15</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Years Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 w-full md:w-1/3 justify-center md:justify-start">
            <div className="bg-slate-50 p-3 rounded-full"><FiShield className="text-[#075056] text-2xl" /></div>
            <div>
              <p className="text-2xl font-black text-slate-900">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="container mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Recognized & Certified By</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-black font-serif tracking-tighter">ISO 9001:2015</div>
            <div className="text-xl font-black font-serif tracking-tighter">APEDA</div>
            <div className="text-xl font-black font-serif tracking-tighter">FSSAI</div>
            <div className="text-xl font-black font-serif tracking-tighter">SPICES BOARD</div>
            <div className="text-xl font-black font-serif tracking-tighter">FIEO</div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT COMPANY */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Linter fix: h-[550px] ki jagah min-h-[34rem] use kiya */}
            <div className="relative min-h-136full rounded-2xl overflow-hidden">
              <Image src="/about.png" alt="Company Logistics" fill className="object-cover" />
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <FiAward className="text-[#FF5B04] text-3xl mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Government Recognized</h4>
                <p className="text-sm text-slate-500">Authorized Star Export House</p>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">About Varni Exim</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Bridging Indian Quality with Global Demand.</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We are a premier merchant export enterprise operating out of Surat, India. Our core competency lies in sourcing the highest grade agricultural commodities and manufactured goods directly from vetted producers.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                By maintaining strict quality control and handling complex port logistics in-house, we eliminate supply chain friction for our international buyers.
              </p>
              <ul className="space-y-3 mb-10">
                {["Direct Sourcing Network", "Stringent Quality Control (QC)", "End-to-End Logistics & Customs"].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <FiCheck className="text-[#FF5B04]" /> {point}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-white bg-[#075056] px-6 py-3 rounded font-bold hover:bg-slate-900 transition-colors">
                Read Full Profile <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INFRASTRUCTURE */}
      <section className="py-24 px-6 bg-[#075056] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Our Backbone</h2>
            <h3 className="text-4xl font-bold tracking-tight">World-Class Infrastructure</h3>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">We have invested heavily in our supply chain infrastructure to ensure that every shipment reaches you in perfect condition and exactly on time.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a636a] p-8 rounded-xl border border-white/10 hover:border-[#FF5B04]/50 transition-colors">
              <FiBox className="text-[#FF5B04] text-4xl mb-6" />
              <h4 className="text-xl font-bold mb-3">Modern Warehousing</h4>
              <p className="text-slate-300 leading-relaxed">Temperature-controlled storage facilities spreading across 50,000 sq ft to maintain optimal product freshness and safety before dispatch.</p>
            </div>
            <div className="bg-[#0a636a] p-8 rounded-xl border border-white/10 hover:border-[#FF5B04]/50 transition-colors">
              <FiLayers className="text-[#FF5B04] text-4xl mb-6" />
              <h4 className="text-xl font-bold mb-3">In-House Quality Lab</h4>
              <p className="text-slate-300 leading-relaxed">Dedicated testing facility equipped with modern machinery to verify moisture levels, purity, and grade compliance for all agricultural goods.</p>
            </div>
            <div className="bg-[#0a636a] p-8 rounded-xl border border-white/10 hover:border-[#FF5B04]/50 transition-colors">
              <FiTruck className="text-[#FF5B04] text-4xl mb-6" />
              <h4 className="text-xl font-bold mb-3">Port Connectivity</h4>
              <p className="text-slate-300 leading-relaxed">Strategic tie-ups with major transport fleets for rapid transit from our facilities to the nearest major seaports, minimizing transit delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Our Core Exports</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Premium Commodities</h3>
            </div>
            <Link href="/products" className="text-[#075056] font-bold hover:text-[#FF5B04] transition-colors flex items-center gap-2 border-b-2 border-transparent hover:border-[#FF5B04] pb-1">
              View All Products <FiArrowRight />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Indian Spices", desc: "Whole & ground spices from prime harvesting regions.", img: "/spices.png" },
              { title: "Herbal Extracts", desc: "Standardized botanical ingredients for nutraceuticals.", img: "/herbs.png" },
              { title: "Agro Grains", desc: "Export-grade Basmati rice, wheat, and pulses.", img: "/grains.png" },
              { title: "Leather Goods", desc: "Finished leather accessories for global retail.", img: "/leather.png" }
            ].map((cat, i) => (
              <div key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-56 relative bg-slate-200 overflow-hidden">
                  <Image src={cat.img} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h4>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <span className="text-sm font-bold text-[#FF5B04] group-hover:underline">Explore Category</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Client Feedback</h2>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900">Trusted by Importers Worldwide</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { review: "Varni Exim has completely streamlined our spice procurement from India. Their paperwork is always flawless.", name: "David R.", role: "Procurement Head, USA" },
              { review: "Consistent quality over the last 3 years. Their team handles the shipping logistics effortlessly. Highly recommended.", name: "Ahmed A.", role: "Wholesale Distributor, UAE" },
              { review: "The transparency in pricing and timely container tracking makes them our preferred Indian supplier.", name: "Elena S.", role: "Import Director, Germany" }
            ].map((test, i) => (
              <div key={i} className="bg-white border border-slate-200 shadow-sm p-8 rounded-xl relative flex flex-col justify-between min-h-56">
                <div>
                  <FiStar className="text-[#FF5B04] text-xl absolute top-8 right-8" />
                  <p className="text-slate-600 italic mb-8 leading-relaxed pr-6 text-[15px]">&quot;{test.review}&quot;</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">{test.name}</h5>
                  <p className="text-sm text-slate-500">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Our Operations</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Clear & Secure Trade Process</h3>
          </div>
          
          <div className="relative">
            {/* Linter fix: top-[40px] ki jagah top-10 */}
            <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-px bg-slate-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { n: "01", t: "RFQ", d: "Submit required specifications & volume." },
                { n: "02", t: "Terms", d: "Agree on CIF/FOB pricing & incoterms." },
                { n: "03", t: "Finance", d: "LC or advance payment clearance." },
                { n: "04", t: "Dispatch", d: "Quality check and container loading." },
                { n: "05", t: "Delivery", d: "Customs clearance & final handover." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-[#075056] rounded-full flex items-center justify-center font-black text-xl mb-6 border border-white">
                    {step.n}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{step.t}</h4>
                  {/* Linter fix: max-w-[160px] ki jagah max-w-40 */}
                  <p className="text-[15px] text-slate-500 max-w-40 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}