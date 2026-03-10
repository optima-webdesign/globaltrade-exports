'use client'

import { useState } from 'react';
import { 
  FiUser, FiGlobe, FiLock, FiBell, FiSave, FiCamera, FiCheck 
} from 'react-icons/fi';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // FIX: Notification state keys explicitly defined
  const [notifications, setNotifications] = useState({
    newInquiries: true,
    weeklyReport: false,
    securityAlerts: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaved(false);
    
    // Fake save delay
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1200);
  };

  // FIX: Properly structured data for mapping
  const notificationOptions = [
    { id: 'newInquiries', title: "New Inquiries", desc: "Get notified when a new quote request is submitted." },
    { id: 'weeklyReport', title: "Weekly Report", desc: "Receive a weekly summary of site traffic and stats." },
    { id: 'securityAlerts', title: "Security Alerts", desc: "Get notified of unusual login attempts." },
  ] as const;

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-black text-[#16232A] tracking-tight">Settings</h1>
        <p className="text-[#16232A]/60 font-medium mt-1">Manage your account preferences and global site details.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="w-full md:w-64 bg-white rounded-3xl shadow-sm border border-[#16232A]/5 p-4 shrink-0 sticky top-24">
          <nav className="flex flex-col space-y-1">
            {[
              { id: 'profile', name: 'My Profile', icon: FiUser },
              { id: 'company', name: 'Company Details', icon: FiGlobe },
              { id: 'security', name: 'Security & Password', icon: FiLock },
              { id: 'notifications', name: 'Notifications', icon: FiBell },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all text-left ${
                  activeTab === tab.id 
                    ? 'bg-[#F5F7FA] text-[#FF5B04]' 
                    : 'text-[#16232A]/60 hover:bg-[#F5F7FA]/50 hover:text-[#16232A]'
                }`}
              >
                <tab.icon className="text-lg" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 w-full">
          <div className="bg-white rounded-3xl shadow-sm border border-[#16232A]/5 p-8 md:p-10">
            
            <form onSubmit={handleSave}>
              
              {/* --- PROFILE TAB --- */}
              {activeTab === 'profile' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <h2 className="text-xl font-black text-[#16232A] tracking-tight mb-1">My Profile</h2>
                    <p className="text-[#16232A]/50 text-sm font-medium">Update your personal information and avatar.</p>
                  </div>
                  
                  <div className="flex items-center gap-6 pb-6 border-b border-[#16232A]/5">
                    <div className="w-24 h-24 rounded-2xl bg-[#075056] flex items-center justify-center text-white font-black text-3xl shadow-inner relative overflow-hidden group">
                      AD
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <FiCamera className="text-xl" />
                      </div>
                    </div>
                    <div>
                      <button type="button" className="bg-[#F5F7FA] text-[#16232A] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:border-[#16232A]/20 border border-transparent transition-colors mb-2">
                        Change Avatar
                      </button>
                      <p className="text-[#16232A]/40 text-xs font-medium">JPG, GIF or PNG. Max size 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="profileName" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Full Name</label>
                      <input id="profileName" type="text" defaultValue="Admin User" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="profileEmail" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Email Address</label>
                      <input id="profileEmail" type="email" defaultValue="admin@globaltrade.com" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="profilePhone" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Phone Number</label>
                      <input id="profilePhone" type="tel" defaultValue="+91 98765 43210" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="profileRole" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Role (Read Only)</label>
                      <input id="profileRole" type="text" defaultValue="Super Administrator" disabled className="w-full bg-slate-100 border border-transparent text-sm font-bold text-[#16232A]/50 px-4 py-3.5 rounded-xl outline-none cursor-not-allowed" />
                    </div>
                  </div>
                </div>
              )}

              {/* --- COMPANY TAB --- */}
              {activeTab === 'company' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <h2 className="text-xl font-black text-[#16232A] tracking-tight mb-1">Company Details</h2>
                    <p className="text-[#16232A]/50 text-sm font-medium">Update the public business information displayed on the website.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Company Name</label>
                      <input id="companyName" type="text" defaultValue="Varni Exim Enterprise" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyEmail" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Public Support Email</label>
                        <input id="companyEmail" type="email" defaultValue="sales@varnieximenterprise.com" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="companyPhone" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Public Phone Number</label>
                        <input id="companyPhone" type="tel" defaultValue="+91 7574075209" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="companyAddress" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Headquarters Address</label>
                      <textarea id="companyAddress" rows={3} defaultValue="Surat, Gujarat, India" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors resize-none"></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* --- SECURITY TAB --- */}
              {activeTab === 'security' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <h2 className="text-xl font-black text-[#16232A] tracking-tight mb-1">Security & Password</h2>
                    <p className="text-[#16232A]/50 text-sm font-medium">Ensure your account is using a long, random password to stay secure.</p>
                  </div>
                  
                  <div className="max-w-md space-y-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Current Password</label>
                      <div className="relative">
                        <FiLock className="absolute top-4 left-4 text-[#16232A]/40" />
                        <input id="currentPassword" type="password" placeholder="••••••••" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 pl-11 rounded-xl outline-none focus:border-[#075056] transition-colors" />
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[#16232A]/5">
                      <label htmlFor="newPassword" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">New Password</label>
                      <div className="relative">
                        <FiLock className="absolute top-4 left-4 text-[#16232A]/40" />
                        <input id="newPassword" type="password" placeholder="Enter new password" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 pl-11 rounded-xl outline-none focus:border-[#075056] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Confirm New Password</label>
                      <div className="relative">
                        <FiLock className="absolute top-4 left-4 text-[#16232A]/40" />
                        <input id="confirmPassword" type="password" placeholder="Confirm new password" className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 pl-11 rounded-xl outline-none focus:border-[#075056] transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* --- NOTIFICATIONS TAB --- */}
              {activeTab === 'notifications' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div>
                    <h2 className="text-xl font-black text-[#16232A] tracking-tight mb-1">Notification Preferences</h2>
                    <p className="text-[#16232A]/50 text-sm font-medium">Choose what updates you want to receive via email.</p>
                  </div>
                  
                  <div className="space-y-4">
                    {notificationOptions.map((pref) => (
                      <div key={pref.id} className="flex items-center justify-between p-5 bg-[#F5F7FA] rounded-2xl border border-[#16232A]/5">
                        <div>
                          <p className="font-bold text-[#16232A] text-sm">{pref.title}</p>
                          <p className="text-[#16232A]/50 text-xs mt-0.5">{pref.desc}</p>
                        </div>
                        
                        {/* FIX: Replaced buggy ARIA button with standard HTML visually-hidden Checkbox */}
                        <label className="relative inline-flex items-center cursor-pointer" aria-label={`Toggle ${pref.title}`}>
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={notifications[pref.id]}
                            onChange={() => toggleNotification(pref.id)}
                          />
                          <div className="w-12 h-6 bg-[#16232A]/20 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#075056]"></div>
                        </label>

                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SAVE ACTION FOOTER */}
              <div className="mt-10 pt-8 border-t border-[#16232A]/5 flex items-center justify-between">
                <div>
                  {saved && (
                    <span className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest animate-in fade-in">
                      <FiCheck className="text-lg" /> Changes Saved Successfully
                    </span>
                  )}
                </div>
                <button 
                  type="submit" 
                  disabled={isSaving}
                  className="bg-[#16232A] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#FF5B04] transition-colors shadow-lg flex items-center gap-2 disabled:opacity-70"
                >
                  {isSaving ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <FiSave className="text-base" />
                  )}
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>

            </form>
            
          </div>
        </div>

      </div>
    </div>
  );
}