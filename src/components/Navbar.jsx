import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, FlaskConical, Database } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLabsActive = location.pathname.includes('/outmate-labs');

  return (
    <div className="fixed top-0 w-full flex justify-center pt-5 px-4 z-50">
      <nav className="w-full max-w-[1280px] h-[68px] bg-black border border-black rounded-xl px-4 md:px-6 flex justify-between items-center shadow-lg">

        {/* LEFT: Logo */}
        <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
          <img src="/outmate.png" alt="Outmate Logo" className="h-[130px] md:h-[150px] pt-1 w-auto object-contain" />
        </div>

        {/* CENTER: Navigation Links */}
        <div className="flex items-center pb-.5 gap-4 md:gap-8">
          <button onClick={() => navigate('/')} className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
            Home
          </button>

          {/* OUTMATE LABS DROPDOWN */}
          <div className="relative group">
            <button className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isLabsActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
              <FlaskConical size={14} className={isLabsActive ? "text-blue-500" : ""} />
              Outmate Labs
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 opacity-60" />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 hidden group-hover:block w-56">
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl p-2 shadow-2xl flex flex-col gap-1">
                <button onClick={() => navigate('/outmate-labs/gtm-hub')} className={`text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${location.pathname.includes('gtm-hub') ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  GTM Hub
                </button>
                <button onClick={() => navigate('/outmate-labs/workflows')} className={`text-left px-3 py-2.5 text-sm rounded-lg transition-colors flex items-center justify-between ${location.pathname.includes('workflows') ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  Workflows <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#1679fa] text-white leading-none">NEW</span>
                </button>
                
                {/* ✅ NEW GTM TOOLS LINK
                <button onClick={() => navigate('/outmate-labs/tools')} className={`text-left px-3 py-2.5 text-sm rounded-lg transition-colors flex items-center justify-between ${location.pathname.includes('tools') ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  GTM Tools Directory
                </button> */}

                {/* <button onClick={() => navigate('/outmate-labs/tips')} className={`text-left px-3 py-2.5 text-sm rounded-lg transition-colors flex items-center justify-between ${location.pathname.includes('tips') ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  Outbound Tips
                </button> */}
              </div>
            </div>
          </div>

          <button onClick={() => navigate('/jobs')} className={`text-sm font-medium transition-colors ${location.pathname === '/jobs' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
            Jobs
          </button>
        </div>

        {/* RIGHT: CTA Button */}
        <a href="#BookingScheduler" onClick={(e) => { e.preventDefault(); handleScrollToSection('BookingScheduler'); }} className="bg-gradient-to-b from-[#1679fa] to-[#0a61d1] text-white font-medium py-2 px-5 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 text-sm">
          <span className="hidden md:inline">Let's connect</span>
          <span className="md:hidden">Book</span>
        </a>

      </nav>
    </div>
  );
};

export default Navbar;