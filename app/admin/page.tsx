'use client'

import { FiUsers, FiBox, FiTrendingUp, FiAlertCircle, FiEye, FiCheck, FiX } from 'react-icons/fi';

// DUMMY DATA FOR DASHBOARD
const statsData = [
  { title: "Total Products", value: "124", icon: FiBox, color: "text-[#075056]", bg: "bg-[#075056]/10" },
  { title: "Total Inquiries", value: "856", icon: FiUsers, color: "text-[#FF5B04]", bg: "bg-[#FF5B04]/10" },
  { title: "Pending Quotes", value: "12", icon: FiAlertCircle, color: "text-amber-500", bg: "bg-amber-500/10" },
  { title: "Conversion Rate", value: "24%", icon: FiTrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

const recentInquiries = [
  { id: "#INV-001", name: "John Smith", company: "SpiceCorp USA", product: "Turmeric Powder", date: "Today, 10:23 AM", status: "Pending" },
  { id: "#INV-002", name: "Aisha Rahman", company: "Dubai Traders", product: "Basmati Rice", date: "Yesterday", status: "Responded" },
  { id: "#INV-003", name: "Michael Chen", company: "Zenith Herbal", product: "Ashwagandha", date: "Mar 04, 2026", status: "Closed" },
  { id: "#INV-004", name: "Sarah Connor", company: "Euro Grains UK", product: "IR64 White Rice", date: "Mar 02, 2026", status: "Pending" },
  { id: "#INV-005", name: "Rahul Patel", company: "Global Leather", product: "Leather Wallets", date: "Feb 28, 2026", status: "Responded" },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-black text-[#16232A] tracking-tight">Dashboard</h1>
        <p className="text-[#16232A]/60 font-medium mt-1">Welcome back, here's what's happening with your export business today.</p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-[#16232A]/5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${stat.bg} ${stat.color}`}>
                <stat.icon />
              </div>
            </div>
            <div>
              <p className="text-[#16232A]/50 text-[11px] font-bold uppercase tracking-widest mb-1">{stat.title}</p>
              <h3 className="text-3xl font-black text-[#16232A]">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* RECENT INQUIRIES TABLE */}
      <div className="bg-white rounded-3xl shadow-sm border border-[#16232A]/5 overflow-hidden">
        <div className="p-6 md:p-8 border-b border-[#16232A]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-[#16232A] tracking-tight">Recent Inquiries</h2>
            <p className="text-[#16232A]/50 text-sm font-medium mt-1">Latest product quote requests from website.</p>
          </div>
          <button className="bg-[#E4EEFO]/50 text-[#16232A] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#16232A] hover:text-white transition-colors">
            View All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F5F7FA] text-[#16232A]/50 text-[10px] uppercase tracking-widest">
                <th className="p-5 font-bold">Inquiry ID</th>
                <th className="p-5 font-bold">Client Detail</th>
                <th className="p-5 font-bold">Interested Product</th>
                <th className="p-5 font-bold">Date</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-[#16232A]">
              {recentInquiries.map((inquiry, index) => (
                <tr key={index} className="border-b border-[#16232A]/5 hover:bg-[#F5F7FA]/50 transition-colors">
                  <td className="p-5 font-bold text-[#075056]">{inquiry.id}</td>
                  <td className="p-5">
                    <p className="font-bold">{inquiry.name}</p>
                    <p className="text-[#16232A]/50 text-xs">{inquiry.company}</p>
                  </td>
                  <td className="p-5">{inquiry.product}</td>
                  <td className="p-5 text-[#16232A]/60 text-xs">{inquiry.date}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      inquiry.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      inquiry.status === 'Responded' ? 'bg-[#075056]/10 text-[#075056]' :
                      'bg-slate-100 text-slate-500'
                    }`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="p-5 flex justify-center gap-2">
                    <button className="w-8 h-8 rounded-lg bg-[#E4EEFO]/50 flex items-center justify-center text-[#16232A] hover:bg-[#FF5B04] hover:text-white transition-colors" title="View Details">
                      <FiEye />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#E4EEFO]/50 flex items-center justify-center text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors" title="Mark Responded">
                      <FiCheck />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}