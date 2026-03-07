'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// Faltu unused icons (FiClock, FiGlobe, FiShield, FiAnchor) hata diye hain
import { 
  FiMapPin, FiMail, FiPhone, FiSend, 
  FiCheck, FiMessageSquare, FiChevronDown, FiFileText
} from 'react-icons/fi';
import { categories } from '@/lib/data';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number required"),
  company: z.string().min(2, "Company name required"),
  country: z.string().min(2, "Destination country required"),
  category: z.string().min(1, "Please select a category"),
  productName: z.string().min(2, "Specify product name"),
  quantity: z.string().min(1, "Estimated quantity required"),
  packaging: z.string().min(1, "Packaging requirement is required"),
  timeline: z.string().min(1, "Delivery timeline is required"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Unused data error ko fix karne ke liye console.log add kiya
    console.log("Quote Request Data:", data);
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 8000); 
  };

  const faqs = [
    { q: "How quickly will I receive a response?", a: "Our team usually responds to inquiries within 24 hours with a detailed commercial offer." },
    { q: "Do you export internationally?", a: "Yes, we export products to multiple countries worldwide across Europe, America, and Asia." },
    { q: "What is the minimum order quantity?", a: "Minimum order quantity depends on the product category and specific packaging requirements." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-[#FF5B04] selection:text-white pb-24">
      
      {/* 1. HERO SECTION - Clean Corporate Vibe */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1494412519320-ce3dc724497e?q=80&w=2000&auto=format&fit=crop" 
            alt="Shipping Logistics" 
            fill 
            className="object-cover opacity-20" 
            priority 
          />
          {/* bg-gradient-to-t ko bg-linear-to-t se replace kiya */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-80"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* Arbitrary h-[2px] ko standard h-0.5 se replace kiya */}
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
              We are here to assist you with your export inquiries. Whether you are looking for premium Indian products or a reliable export partner, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DIRECTORY & MAP - Modern Split */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-5">
              <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3">Directory</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Get In Touch</h3>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                If you have any questions about our products or export services, feel free to contact us. We respond to all business queries promptly.
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#FF5B04] shrink-0">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">Office Address</p>
                    <p className="font-bold text-slate-900">Surat, Gujarat, India</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#FF5B04] shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">Phone Numbers</p>
                    <div className="flex flex-col">
                      <a href="tel:+917574075209" className="font-bold text-slate-900 hover:text-[#FF5B04] transition-colors">+91 7574075209</a>
                      <a href="tel:+919512221656" className="font-bold text-slate-900 hover:text-[#FF5B04] transition-colors">+91 9512221656</a>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-[#FF5B04] shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">Email Address</p>
                    <a href="mailto:sales@varnieximenterprise.com" className="font-bold text-slate-900 hover:text-[#FF5B04] transition-colors break-all">sales@varnieximenterprise.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-3 hidden lg:block">Headquarters</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight hidden lg:block">Our Location</h3>
              {/* Arbitrary h-[400px] ko h-100 aur min-h-100 se replace kiya */}
              <div className="h-100 lg:h-full min-h-100 w-full bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative">
                {/* Inline CSS hataya aur usko tailwind classes mein likha */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.13670921495!2d72.4975549078696!3d23.02024341916305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale contrast-125"
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN FORM & FAQ SIDEBAR */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* The RFQ Form */}
            <div className="lg:col-span-8 bg-white border border-slate-200 shadow-xl rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#075056]"></div>
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="bg-slate-50 p-3 rounded-full border border-slate-200">
                  <FiFileText className="text-2xl text-[#FF5B04]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Submit Your Requirements</h2>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Request A Product Quote</p>
                </div>
              </div>

              <p className="text-slate-600 mb-10 text-lg">
                Looking for bulk export products? Fill out the form below with your specifications and we will provide a detailed official quotation.
              </p>

              {isSuccess && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-emerald-50 text-emerald-800 p-6 rounded-lg mb-8 text-sm font-bold flex items-center gap-3 border border-emerald-200">
                  <div className="bg-emerald-100 p-2 rounded-full"><FiCheck className="text-lg" /></div>
                  Inquiry submitted successfully. Our sales team will share the quotation shortly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Contact Information */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#075056]"></span> Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <input {...register("name")} className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. John Doe" />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                      <input {...register("email")} type="email" className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="john@company.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                      <input {...register("phone")} className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="+1 234 567 890" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                      <input {...register("company")} className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.company ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="Imports LLC" />
                      {errors.company && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.company.message}</p>}
                    </div>
                    <div className="flex flex-col md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Destination Country *</label>
                      <input {...register("country")} className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.country ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. Germany" />
                      {errors.country && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.country.message}</p>}
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                {/* Product Information */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#075056]"></span> Product Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col relative">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Product Category *</label>
                      <div className="relative">
                        <select {...register("category")} className={`w-full bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 appearance-none transition-all ${errors.category ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`}>
                          <option value="">-- Select Category --</option>
                          <option value="Spices">Spices</option>
                          <option value="Herbal Products">Herbal Products</option>
                          <option value="Food Grains">Food Grains</option>
                          <option value="Leather Products">Leather Products</option>
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.category && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.category.message}</p>}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Product Name *</label>
                      <input {...register("productName")} className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.productName ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. Turmeric Powder" />
                      {errors.productName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.productName.message}</p>}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Required Quantity *</label>
                      <input {...register("quantity")} className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.quantity ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. 1x 20ft Container" />
                      {errors.quantity && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.quantity.message}</p>}
                    </div>

                    <div className="flex flex-col relative">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Packaging Requirement *</label>
                      <div className="relative">
                        <select {...register("packaging")} className={`w-full bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 appearance-none transition-all ${errors.packaging ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`}>
                          <option value="">-- Select Packaging --</option>
                          <option value="Bulk PP Bags">Bulk PP Bags</option>
                          <option value="Jute Bags">Jute Bags</option>
                          <option value="Custom OEM">Custom OEM Labeling</option>
                          <option value="Other">Other</option>
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.packaging && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.packaging.message}</p>}
                    </div>

                    <div className="flex flex-col md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700 mb-2">Delivery Timeline *</label>
                      <input {...register("timeline")} className={`bg-slate-50 p-3 rounded-lg border outline-none font-medium text-slate-900 transition-all ${errors.timeline ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10'}`} placeholder="e.g. Immediate, Next Month" />
                      {errors.timeline && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.timeline.message}</p>}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-slate-700 mb-2">Additional Message / Requirements</label>
                  <textarea {...register("message")} rows={4} className="bg-slate-50 p-3 rounded-lg border border-slate-200 outline-none font-medium text-slate-900 focus:bg-white focus:border-[#075056] focus:ring-4 focus:ring-[#075056]/10 transition-all resize-none" placeholder="Any specific quality grades or lab tests required?"></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#FF5B04] text-white py-4 rounded-lg font-bold tracking-wide hover:bg-[#e04f03] shadow-lg shadow-[#FF5B04]/20 transition-all disabled:opacity-70 flex justify-center items-center group"
                  >
                    {isSubmitting ? "Processing Inquiry..." : (
                      <>Request Official Quote <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </div>
                
              </form>
            </div>

            {/* Sidebar (FAQ) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* FAQ Section */}
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
                  <FiMessageSquare /> FAQ
                </h3>
                <h4 className="text-2xl font-bold mb-6 tracking-tight">Quick Help</h4>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/10 pb-4 last:border-0">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full text-left font-semibold text-sm flex justify-between items-center hover:text-[#FF5B04] transition-colors"
                      >
                        {faq.q}
                        <FiChevronDown className={`text-[#FF5B04] transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeFaq === index && (
                          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pt-3 text-slate-400 text-sm leading-relaxed">{faq.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Markets */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-[#075056] font-bold text-sm tracking-widest uppercase mb-2">Export Markets</h3>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Global Network</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We export our products to buyers and distributors across various regions including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['North America', 'Europe', 'Middle East', 'Asia-Pacific'].map((region, i) => (
                    <span key={i} className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md text-xs font-bold text-slate-700">
                      {region}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - Standardized */}
      <section className="bg-slate-900 text-white py-24 px-6 mt-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-4">Initiate Business</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Partner With Us <br className="hidden md:block" />For Global Trade</h3>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Looking for reliable Indian suppliers for your business? Contact us today and let us help you source premium products from India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#FF5B04] text-white px-8 py-4 rounded font-bold hover:bg-[#e04f03] transition-colors shadow-lg">
              Scroll to Form
            </button>
            <Link href="/products" className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition-colors">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}