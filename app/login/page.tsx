'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiArrowRight, FiAlertCircle, FiArrowLeft } from 'react-icons/fi';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@globaltrade.com');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Check agar pehle se login hai toh seedha admin me bhej do
  useEffect(() => {
    const isAuth = localStorage.getItem('isAdminAuth');
    if (isAuth === 'true') {
      router.push('/admin');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Fake API Delay
    setTimeout(() => {
      // Hardcoded Admin Logic
      if (email === 'admin@globaltrade.com' && password === 'admin123') {
        localStorage.setItem('isAdminAuth', 'true');
        router.push('/admin');
      } else {
        setError('Invalid Email or Password. Try again.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center p-6 font-sans text-[#16232A] relative">
      
      {/* BACK TO HOME BUTTON */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-[#16232A]/60 hover:text-[#FF5B04] transition-colors text-xs font-bold uppercase tracking-widest group"
        >
          <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
          Back to Website
        </Link>
      </div>

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white rounded-4xl shadow-xl border border-[#16232A]/5 p-10 md:p-12 relative overflow-hidden mt-12 md:mt-0">
        
        {/* Subtle Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FF5B04]"></div>

        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-black tracking-tighter mb-2 block">
            GLOBAL<span className="text-[#FF5B04]">TRADE.</span>
          </Link>
          <h1 className="text-2xl font-black mt-6 mb-2">Admin Portal</h1>
          <p className="text-[#16232A]/60 text-sm font-medium">Strictly restricted to authorized personnel.</p>
        </div>

        {/* Error Message Box */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2">
            <FiAlertCircle className="text-base shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Admin Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#16232A]/40">
                <FiMail />
              </div>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F5F7FA] border border-[#16232A]/10 text-sm font-bold pl-11 pr-4 py-4 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" 
                placeholder="admin@globaltrade.com" 
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#16232A]/40">
                <FiLock />
              </div>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F5F7FA] border border-[#16232A]/10 text-sm font-bold pl-11 pr-4 py-4 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" 
                placeholder="Hint: admin123" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#16232A] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#FF5B04] transition-colors shadow-lg flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
          >
            {isLoading ? 'Authenticating...' : 'Secure Login'}
            {!isLoading && <FiArrowRight />}
          </button>
        </form>

        <p className="text-center text-[#16232A]/50 text-[10px] font-bold uppercase tracking-widest mt-8">
          Unauthorized access is prohibited.
        </p>

      </div>
    </div>
  );
}