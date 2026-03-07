'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { 
  FiMapPin, FiMail, FiPhone, FiClock, FiSend, 
  FiCheck, FiMessageSquare, FiGlobe, FiChevronDown
} from 'react-icons/fi';
import { categories } from '@/lib/data';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number required"),
  company: z.string().min(2, "Company name required"),
  country: z.string().min(2, "Destination country required"),
  category: z.string().min(1, "Please select a category"),
  quantity: z.string().min(1, "Estimated quantity required"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 8000); 
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-[#FF5B04] selection:text-white pb-24">
      
      {/* 1. HERO SECTION - Premium Corporate */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1494412519320-ce3dc724497e?q=80&w=2000&auto=format&fit=crop" 
            alt="Shipping Logistics" 
            fill 
            className="object-cover opacity-20" 
            priority 
          />
          {/* Updated background linear class */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-80"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* Updated arbitrary heights */}
              <span className="h-0.5 w-8 bg-[#FF5B04]"></span>
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                Trade Desk
              </span>
              <span className="h-0.5 w-8 bg-[#FF5B04]"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Contact Varni <br/>
              Exim <span className="text-[#FF5B04]">Enterprise.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
              Whether you are looking for premium Indian products or a reliable export partner, our team is ready to assist you with product details, quotations, and international trade support.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DIRECTORY & MAP - Clean Grid Layout */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Get In Touch - Directory */}
            <div>
              <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Reach Out</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Direct Contact Info</h3>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                If you have any questions about our products or export services, feel free to contact us. Our team will respond to your inquiry as quickly as possible.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-[#FF5B04]">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Office</p>
                    <p className="font-bold text-slate-900">Surat, Gujarat, India</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-[#FF5B04]">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                    <div className="flex flex-col">
                      <a href="tel:+917574075209" className="font-bold text-slate-900 hover:text-[#FF5B04] transition-colors">+91 7574075209</a>
                      <a href="tel:+919512221656" className="font-bold text-slate-900 hover:text-[#FF5B04] transition-colors">+91 9512221656</a>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-[#FF5B04]">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                    <a href="mailto:sales@varnieximenterprise.com" className="font-bold text-slate-900 hover:text-[#FF5B04] transition-colors text-sm break-all">sales@varnieximenterprise.com</a>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-[#FF5B04]">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Hours (IST)</p>
                    <p className="font-bold text-slate-900">Mon – Sat: 9 AM – 6 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Serving International Markets & Map */}
            <div className="space-y-8">
              <div className="bg-[#075056] text-white p-10 rounded-2xl shadow-lg">
                <FiGlobe className="text-4xl text-[#FF5B04] mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Serving International Markets</h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  We export premium Indian products to buyers and distributors across various regions. Our efficient logistics network ensures safe and timely delivery worldwide.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['North America', 'Europe', 'Middle East', 'Asia-Pacific'].map((region, i) => (
                    <span key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold border border-white/10">
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map Box - Replaced inline style with Tailwind class and updated arbitrary height */}
              <div className="h-62.5 w-full bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.13670921495!2d72.4975549078696!3d23.02024341916305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale contrast-125"
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN FORM SECTION & FAQ */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* The Hardcore B2B Form */}
            <div className="lg:col-span-8 bg-white border border-slate-200 shadow-xl rounded-2xl p-8 md:p-12">
              <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Request A Quote</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Send Us Your Requirements</h3>
              <p className="text-slate-600 mb-10 text-lg">
                Looking for bulk export products? Fill out the form below and we will provide a detailed official quotation.
              </p>
              
              {isSuccess && (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-lg mb-8 text-sm font-bold flex items-center gap-3 border border-emerald-200">
                  <div className="bg-emerald-100 p-2 rounded-full"><FiCheck className="text-lg" /></div>
                  Inquiry submitted successfully. Our sales team will contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                    <input {...register("name")} className={`bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. John Doe" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address *</label>
                    <input {...register("email")} type="email" className={`bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number *</label>
                    <input {...register("phone")} className={`bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="+1 234 567 890" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company Name *</label>
                    <input {...register("company")} className={`bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.company ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="Imports LLC" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Destination Country *</label>
                    <input {...register("country")} className={`bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.country ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. Germany" />
                  </div>
                  <div className="flex flex-col relative">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Product Category *</label>
                    <div className="relative">
                      <select {...register("category")} className={`w-full bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 appearance-none transition-all ${errors.category ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`}>
                        <option value="">Select a category</option>
                        {categories.map(c => <option key={c.id} value={c.slug}>{c.name}</option>)}
                      </select>
                      <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Estimated Order Quantity *</label>
                  <input {...register("quantity")} className={`bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.quantity ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. 1x 20ft Container (FCL)" />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message / Requirements *</label>
                  <textarea {...register("message")} rows={5} className={`bg-slate-50 p-4 rounded-lg border outline-none font-medium text-slate-900 resize-none transition-all ${errors.message ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="Please mention packaging type, delivery timeline, or any specific grade requirements..."></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#FF5B04] text-white py-4 rounded-lg font-bold tracking-wide hover:bg-[#e04f03] shadow-lg shadow-[#FF5B04]/20 transition-all disabled:opacity-70 flex justify-center items-center group"
                  >
                    {isSubmitting ? "Processing Inquiry..." : (
                      <>Submit Inquiry <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </div>
                
              </form>
            </div>

            {/* Sidebar (FAQ) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                  <FiMessageSquare className="text-[#FF5B04]" /> Frequent Queries
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5B04]"></div>
                      Response Time?
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed pl-3.5">Our sales team usually responds to all business inquiries within 24 working hours with detailed quotations.</p>
                  </div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5B04]"></div>
                      International Export?
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed pl-3.5">Yes, we handle end-to-end logistics and export premium goods to over 25+ countries globally.</p>
                  </div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5B04]"></div>
                      Minimum Order (MOQ)?
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed pl-3.5">MOQs vary based on the product type (e.g., LCL vs FCL). Please mention your required quantity in the form.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}