import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { products, categories } from '@/lib/data';
import { FiCheckCircle, FiGlobe, FiBox, FiShield, FiFileText, FiMapPin, FiTruck, FiPackage, FiArrowRight } from 'react-icons/fi';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} | Varni Exim`,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const categoryName = categories.find(c => c.slug === product.category)?.name;

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-[#FF5B04] selection:text-white pb-24">
      
      {/* Breadcrumb Header */}
      <div className="bg-white pt-32 pb-4 px-6 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-sm text-slate-500 flex items-center gap-2 font-semibold">
            <Link href="/" className="hover:text-[#FF5B04] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#FF5B04] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#075056]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl py-12">
        
        {/* 1. HERO & IMAGE */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Left Side: Single Clean Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-50">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-slate-800 px-3 py-1.5 rounded-md flex items-center gap-2 text-xs font-bold uppercase tracking-wide shadow-sm border border-slate-100">
                <FiShield className="text-[#FF5B04] text-sm" /> Export Grade
              </div>
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-3 inline-block text-[#FF5B04] text-sm font-bold uppercase tracking-widest">
              {categoryName}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Premium quality product sourced from trusted farms and manufacturers in India. Processed with advanced technology to maintain purity and international trade standards.
            </p>
            
            {/* Quick Info Grid */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-10">
              <h3 className="text-xs font-bold text-[#075056] uppercase tracking-widest mb-4">Quick Details</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">Origin</p>
                  <p className="font-bold text-slate-900 text-base">India</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">Form</p>
                  <p className="font-bold text-slate-900 text-base">{product.specs['Form'] || 'Standard'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">Packaging</p>
                  <p className="font-bold text-slate-900 text-base">Bulk / Custom</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">MOQ</p>
                  <p className="font-bold text-[#FF5B04] text-base">On Request</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
               <Link href={`/get-quote?product=${product.slug}`} className="bg-[#075056] text-white px-8 py-3.5 rounded-lg font-bold text-sm text-center hover:bg-slate-900 transition-colors shadow-md flex items-center justify-center gap-2">
                 Request Official Quote <FiArrowRight />
               </Link>
               <Link href="/contact" className="bg-white border border-slate-300 text-slate-800 px-8 py-3.5 rounded-lg font-bold text-sm text-center hover:bg-slate-50 transition-colors">
                 Contact Sales Team
               </Link>
            </div>
          </div>
        </div>

        {/* 2 & 3. DESCRIPTION & SPECIFICATIONS */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#FF5B04] border border-slate-100"><FiFileText className="text-xl" /></div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Product Description</h2>
            </div>
            <div className="text-slate-600 text-base leading-relaxed space-y-4 mb-8">
              <p>{product.description}</p>
              <p>Processed and packed under strict quality control to ensure purity and freshness upon port arrival.</p>
            </div>
            
            <h3 className="text-xs font-bold text-[#075056] uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Common Applications:</h3>
            <ul className="grid grid-cols-2 gap-4 text-slate-800 font-semibold text-sm">
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#FF5B04] text-lg shrink-0" /> Food Industry</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#FF5B04] text-lg shrink-0" /> Pharmaceuticals</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#FF5B04] text-lg shrink-0" /> Cosmetics</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#FF5B04] text-lg shrink-0" /> Herbal Products</li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 tracking-tight">
               <FiBox className="text-[#FF5B04]" /> Technical Specs
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="text-slate-400 font-semibold">Product</span>
                <span className="font-bold text-right">{product.name}</span>
              </div>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-slate-700 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-400 font-semibold">{key}</span>
                  <span className="font-bold text-right text-white">{value as string}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 & 5. PACKAGING & EXPORT INFO */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 tracking-tight">
              <FiPackage className="text-[#FF5B04]" /> Packaging Options
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Flexible packaging solutions customized according to buyer requirements to ensure 100% safety during international transit.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['25kg Export Bags', '50kg Bulk Bags', 'Custom Packaging', 'Private Labeling'].map((pack, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-semibold text-slate-800 text-sm flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5B04]"></div> {pack}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#075056] p-8 rounded-2xl shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 tracking-tight">
              <FiGlobe className="text-[#FF5B04]" /> Export Details
            </h2>
            <p className="text-white/80 text-base mb-8 leading-relaxed">
              Worldwide export capability with complete documentation and safe transportation protocols.
            </p>
            <div className="space-y-4 bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="flex items-center justify-between"><div className="flex items-center gap-3"><FiMapPin className="text-[#FF5B04] text-lg"/><span className="text-slate-300 font-medium">Origin:</span></div> <strong className="text-white">India</strong></div>
              <div className="flex items-center justify-between"><div className="flex items-center gap-3"><FiShield className="text-[#FF5B04] text-lg"/><span className="text-slate-300 font-medium">Quality:</span></div> <strong className="text-white">Intl Standard</strong></div>
              <div className="flex items-center justify-between"><div className="flex items-center gap-3"><FiTruck className="text-[#FF5B04] text-lg"/><span className="text-slate-300 font-medium">Shipment:</span></div> <strong className="text-white">Sea / Air Freight</strong></div>
            </div>
          </div>

        </div>

      </div>

      {/* 6. INQUIRY FORM */}
      <section className="px-6 mb-16">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-[#FF5B04] font-bold text-sm tracking-widest uppercase mb-2">Direct Inquiry</h2>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Request Quote for {product.name}</h3>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 p-4 rounded-lg border border-slate-200 outline-none focus:border-[#075056] focus:bg-white focus:ring-2 focus:ring-[#075056]/20 font-medium text-slate-900 transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address *</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 p-4 rounded-lg border border-slate-200 outline-none focus:border-[#075056] focus:bg-white focus:ring-2 focus:ring-[#075056]/20 font-medium text-slate-900 transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number *</label>
                <input type="tel" placeholder="+1 234 567 890" className="w-full bg-slate-50 p-4 rounded-lg border border-slate-200 outline-none focus:border-[#075056] focus:bg-white focus:ring-2 focus:ring-[#075056]/20 font-medium text-slate-900 transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Destination Country *</label>
                <input type="text" placeholder="e.g. Germany" className="w-full bg-slate-50 p-4 rounded-lg border border-slate-200 outline-none focus:border-[#075056] focus:bg-white focus:ring-2 focus:ring-[#075056]/20 font-medium text-slate-900 transition-all" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Quantity Required *</label>
              <input type="text" placeholder="e.g. 1x 20ft Container" className="w-full bg-slate-50 p-4 rounded-lg border border-slate-200 outline-none focus:border-[#075056] focus:bg-white focus:ring-2 focus:ring-[#075056]/20 font-medium text-slate-900 transition-all" />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Specific Requirements</label>
              <textarea rows={4} placeholder="Mention packaging or grade requirements..." className="w-full bg-slate-50 p-4 rounded-lg border border-slate-200 outline-none focus:border-[#075056] focus:bg-white focus:ring-2 focus:ring-[#075056]/20 font-medium text-slate-900 resize-none transition-all"></textarea>
            </div>
            
            <div className="pt-2">
              <button type="button" className="w-full bg-[#FF5B04] text-white py-4 rounded-lg font-bold text-base hover:bg-[#e04f03] shadow-lg shadow-[#FF5B04]/20 transition-all">
                Submit RFQ
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}