import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

  return (
    <div className="fixed top-0 w-full flex justify-center pt-5 px-4 z-50">
      <nav className="w-full max-w-[1280px] h-[68px] bg-black border border-black rounded-xl px-4 md:px-6 flex justify-between items-center shadow-lg">
        
        {/* LEFT: Logo */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <img 
            src="/outmate.png" 
            alt="Outmate Logo" 
            // Changed: Increased logo size to 110px on mobile
            className="h-[130px] md:h-[150px] pt-1 w-auto object-contain" 
          />
        </div>

        {/* CENTER: Navigation Links (Visible on mobile now) */}
        {/* Changed: Removed 'hidden md:flex' to make it visible on all screens */}
        <div className="flex items-center pb-.5 gap-4 md:gap-8">
           <button 
             onClick={() => navigate('/')}
             className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
           >
             Home
           </button>
           <button 
             onClick={() => navigate('/jobs')}
             className={`text-sm font-medium transition-colors ${location.pathname === '/jobs' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
           >
             Jobs
           </button>
        </div>

        {/* RIGHT: CTA Button */}
        <a 
            href="#BookingScheduler"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('BookingScheduler'); }} 
            className="bg-gradient-to-b from-[#1679fa] to-[#0a61d1] text-white font-medium py-2 px-5 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 text-sm"
        >
            <span className="hidden md:inline">Let's connect</span>
            <span className="md:hidden">Book</span>
        </a>

      </nav>
    </div>
  );
};

export default Navbar;