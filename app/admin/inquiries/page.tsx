'use client'

import { useState } from 'react';
// FIX: Hata diye FiPhone aur FiEye kyunki wo use nahi ho rahe the
import { 
  FiSearch, FiFilter, FiMail, 
  FiMapPin, FiCheckCircle, FiMoreVertical, FiClock 
} from 'react-icons/fi';

// DUMMY DATA FOR INQUIRIES
const dummyInquiries = [
  { 
    id: 'INQ-1001', 
    name: 'John Smith', 
    company: 'SpiceCorp USA',
    email: 'john.smith@spicecorp.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    product: 'Premium Turmeric Powder',
    qty: '5 Metric Tons',
    date: '10 Mar 2026, 09:30 AM',
    status: 'Pending'
  },
  { 
    id: 'INQ-1002', 
    name: 'Aisha Rahman', 
    company: 'Dubai Traders LLC',
    email: 'arahman@dubaitraders.ae',
    phone: '+971 50 123 4567',
    country: 'UAE',
    product: 'Basmati Rice (Export Grade)',
    qty: '20 Containers',
    date: '09 Mar 2026, 02:15 PM',
    status: 'Responded'
  },
  { 
    id: 'INQ-1003', 
    name: 'Michael Chen', 
    company: 'Zenith Herbal Naturals',
    email: 'm.chen@zenithherbal.com',
    phone: '+65 9123 4567',
    country: 'Singapore',
    product: 'Organic Ashwagandha Root',
    qty: '500 KG',
    date: '08 Mar 2026, 11:45 AM',
    status: 'Closed'
  },
  { 
    id: 'INQ-1004', 
    name: 'Sarah Connor', 
    company: 'Euro Grains UK',
    email: 'sconnor@eurograins.co.uk',
    phone: '+44 7700 900077',
    country: 'United Kingdom',
    product: 'IR64 White Rice',
    qty: '10 Metric Tons',
    date: '07 Mar 2026, 04:20 PM',
    status: 'Pending'
  },
  { 
    id: 'INQ-1005', 
    name: 'Rahul Patel', 
    company: 'Global Leather Co.',
    email: 'rahul.p@globalleather.in',
    phone: '+91 98765 43210',
    country: 'India',
    product: 'Executive Leather Wallet',
    qty: '2000 Pieces',
    date: '05 Mar 2026, 10:00 AM',
    status: 'Responded'
  },
];

export default function AdminInquiriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // Filter Logic
  const filteredInquiries = dummyInquiries.filter(inq => {
    const matchesSearch = inq.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          inq.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          inq.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'All' || inq.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#16232A] tracking-tight">Inquiries</h1>
          <p className="text-[#16232A]/60 font-medium mt-1">Manage quote requests and client communications.</p>
        </div>
        <button className="bg-white border border-[#16232A]/10 text-[#16232A] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-[#075056] hover:text-[#075056] transition-colors shadow-sm flex items-center gap-2 w-fit">
          Export CSV
        </button>
      </div>

      {/* DATA TABLE CARD */}
      <div className="bg-white rounded-3xl shadow-sm border border-[#16232A]/5 overflow-hidden">
        
        {/* TOOLBAR (Tabs & Search) */}
        <div className="p-6 border-b border-[#16232A]/5 flex flex-col lg:flex-row gap-6 justify-between items-center bg-[#F5F7FA]/50">
          
          {/* Status Tabs */}
          <div className="flex bg-white p-1 rounded-xl border border-[#16232A]/5 shadow-sm w-full lg:w-auto">
            {['All', 'Pending', 'Responded', 'Closed'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-[#16232A] text-white shadow-md' 
                    : 'text-[#16232A]/60 hover:text-[#16232A] hover:bg-[#F5F7FA]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex w-full lg:w-auto gap-3">
            <div className="relative w-full lg:w-72">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#16232A]/40">
                <FiSearch />
              </div>
              <input 
                type="text" 
                placeholder="Search by ID, Name or Company..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-[#16232A]/10 text-sm font-bold pl-11 pr-4 py-3 rounded-xl outline-none focus:border-[#FF5B04] transition-colors shadow-sm"
              />
            </div>
            {/* FIX: Added aria-label */}
            <button aria-label="Advanced Filters" className="flex items-center justify-center gap-2 bg-white text-[#16232A] px-4 py-3 rounded-xl text-lg hover:text-[#FF5B04] transition-colors border border-[#16232A]/10 shadow-sm" title="Advanced Filters">
              <FiFilter />
            </button>
          </div>

        </div>
        
        {/* TABLE */}
        <div className="overflow-x-auto">
          {/* FIX: Changed min-w-[1000px] to min-w-250 to satisfy Tailwind canonical classes rule */}
          <table className="w-full text-left border-collapse min-w-250">
            <thead>
              <tr className="bg-white border-b border-[#16232A]/5 text-[#16232A]/40 text-[10px] uppercase tracking-widest">
                <th className="p-5 font-bold">Inquiry Details</th>
                <th className="p-5 font-bold">Client Info</th>
                <th className="p-5 font-bold">Requirement</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-[#16232A]">
              {filteredInquiries.map((inq, index) => (
                <tr key={index} className="border-b border-[#16232A]/5 hover:bg-[#F5F7FA]/50 transition-colors group">
                  
                  {/* ID & Date */}
                  <td className="p-5">
                    <p className="font-black text-[#075056] mb-1">{inq.id}</p>
                    <p className="text-[#16232A]/50 text-xs flex items-center gap-1.5">
                      <FiClock className="text-[10px]" /> {inq.date}
                    </p>
                  </td>
                  
                  {/* Client Info (CRM Style) */}
                  <td className="p-5">
                    <p className="font-bold text-[#16232A] mb-0.5">{inq.name} <span className="text-[#16232A]/40 font-normal">({inq.company})</span></p>
                    <div className="flex items-center gap-4 text-[#16232A]/50 text-xs mt-2">
                      <span className="flex items-center gap-1.5"><FiMail className="text-[#FF5B04]" /> {inq.email}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin className="text-[#FF5B04]" /> {inq.country}</span>
                    </div>
                  </td>
                  
                  {/* Requirement */}
                  <td className="p-5">
                    <p className="font-bold text-[#16232A]">{inq.product}</p>
                    <p className="text-[#16232A]/50 text-xs mt-1">Qty: <span className="font-bold text-[#16232A]/70">{inq.qty}</span></p>
                  </td>
                  
                  {/* Status Badge */}
                  <td className="p-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                      inq.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                      inq.status === 'Responded' ? 'bg-[#075056]/10 text-[#075056] border border-[#075056]/20' :
                      'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {inq.status === 'Pending' && <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>}
                      {inq.status === 'Responded' && <FiCheckCircle className="text-xs" />}
                      {inq.status}
                    </span>
                  </td>
                  
                  {/* Actions */}
                  <td className="p-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <button className="px-4 py-2 rounded-lg bg-white border border-[#16232A]/10 flex items-center justify-center text-[#16232A] text-xs font-bold uppercase tracking-widest hover:text-white hover:bg-[#16232A] hover:border-[#16232A] transition-colors shadow-sm" title="View Details">
                        View
                      </button>
                      {/* FIX: Added aria-label to this icon-only button */}
                      <button aria-label="More options" className="w-9 h-9 rounded-lg bg-white border border-[#16232A]/10 flex items-center justify-center text-[#16232A]/50 hover:text-[#FF5B04] hover:border-[#FF5B04] transition-colors shadow-sm">
                        <FiMoreVertical className="text-lg" />
                      </button>
                    </div>
                  </td>
                  
                </tr>
              ))}

              {/* Empty State */}
              {filteredInquiries.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-16 text-center">
                    <div className="w-16 h-16 bg-[#F5F7FA] rounded-full flex items-center justify-center text-[#16232A]/20 mx-auto mb-4 text-2xl">
                      <FiSearch />
                    </div>
                    <p className="text-[#16232A] font-bold text-lg">No inquiries found</p>
                    <p className="text-[#16232A]/50 text-sm mt-1">Try adjusting your search or filters.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-5 border-t border-[#16232A]/5 flex items-center justify-between bg-white">
          <p className="text-xs text-[#16232A]/50 font-bold uppercase tracking-widest">
            Showing {filteredInquiries.length} results
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-[#F5F7FA] border border-[#16232A]/5 text-[10px] font-bold uppercase tracking-widest text-[#16232A]/40 cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-[#16232A]/10 text-[10px] font-bold uppercase tracking-widest text-[#16232A] hover:bg-[#F5F7FA] transition-colors shadow-sm">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
}