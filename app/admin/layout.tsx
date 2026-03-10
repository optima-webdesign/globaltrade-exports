'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiHome, FiBox, FiMessageSquare, FiSettings, FiLogOut, FiBell } from 'react-icons/fi';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // FIX: Switched to an initial 'loading' state instead of false, 
  // to prevent immediate redirect logic flashing or unnecessary renders.
  const [isLoading, setIsLoading] = useState(true);

  // Authentication Guard (Locks the admin panel)
  useEffect(() => {
    // Wrap in a short timeout or immediate check without causing render loop
    const checkAuth = () => {
      const isAuth = localStorage.getItem('isAdminAuth');
      if (isAuth !== 'true') {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuth'); // Login token delete karo
    router.push('/login'); // Wapas login screen par bhejo
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: FiHome },
    { name: 'Products', href: '/admin/products', icon: FiBox },
    { name: 'Inquiries', href: '/admin/inquiries', icon: FiMessageSquare },
    { name: 'Settings', href: '/admin/settings', icon: FiSettings },
  ];

  // Jab tak check chal raha hai, loading dikhao (taaki UI glitch na kare)
  if (isLoading) {
    return (
      <div className="h-screen w-full bg-[#F5F7FA] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#16232A]/20 border-t-[#FF5B04] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#F5F7FA] font-sans text-[#16232A]">
      
      {/* SIDEBAR (Mirage Dark Theme) */}
      {/* FIX: Removed conflicting 'flex' class before 'hidden md:flex' to satisfy canonical class ordering */}
      <aside className="w-64 bg-[#16232A] text-white shadow-2xl z-20 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-8 border-b border-white/10 shrink-0">
          <span className="text-2xl font-black tracking-tighter">
            GLOBAL<span className="text-[#FF5B04]">ADMIN</span>
          </span>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                  isActive 
                    ? 'bg-[#FF5B04] text-white shadow-lg shadow-[#FF5B04]/20' 
                    : 'text-[#E4EEFO]/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="text-lg shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 shrink-0">
          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm text-[#E4EEFO]/60 hover:bg-white/5 hover:text-red-400 transition-all"
          >
            <FiLogOut className="text-lg shrink-0" />
            Logout Securely
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* TOP HEADER */}
        <header className="h-20 bg-white border-b border-[#16232A]/5 flex items-center justify-between px-8 z-10 shadow-sm shrink-0">
          <h2 className="text-xl font-black text-[#16232A] tracking-tight">Overview</h2>
          
          <div className="flex items-center gap-6">
            {/* FIX: Added aria-label for accessibility on icon-only button */}
            <button aria-label="Notifications" className="relative text-[#16232A]/60 hover:text-[#FF5B04] transition-colors">
              <FiBell className="text-xl" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF5B04] rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-[#16232A]/10 cursor-pointer group">
              <div className="w-10 h-10 bg-[#075056] rounded-full flex items-center justify-center text-white font-bold shadow-sm group-hover:bg-[#FF5B04] transition-colors">
                AD
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-[#16232A] leading-none">Admin User</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#16232A]/50 mt-1">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>

      </main>
    </div>
  );
}