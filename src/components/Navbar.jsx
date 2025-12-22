import React from 'react';
import { Calendar } from 'lucide-react'; // Make sure to import the icon if you use it

const Navbar = () => {
  const handleScrollToCalendar = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById('BookingScheduler');
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // 1. Outer Wrapper: Positions the navbar fixed at the top with padding
    <div className="fixed top-0 w-full flex justify-center pt-5 px-4 z-50">
      
      {/* 2. The Navbar Container: White, rounded, bordered, shadow */}
      <nav className="w-full max-w-[1280px] h-[68px] bg-black border border-black rounded-xl px-4 md:px-6 pt-2 flex justify-between items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
        
        {/* LEFT: Logo (Updated) */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          {/* Replaced the SVG with your uploaded 'outmate' logo */}
          <img 
            src="/outmate.png" // Using root-relative path assuming public/outmate.png
            alt="Outmate Logo" 
            className="h-[130px] md:h-[150px] w-auto object-contain" // Adjusted height for mobile and desktop
          />
        </a>

        {/* RIGHT: "Let's connect" Button */}
        <a 
            href="#BookingScheduler"
            onClick={handleScrollToCalendar} 
            className="bg-gradient-to-b from-[#1679fa] to-[#0a61d1] text-white font-medium mb-2 py-2 px-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 text-sm md:text-base"
        >
            {/* Show Icon on Mobile, Text on Desktop/Tablet if needed, or just text that scales */}
            <span className="hidden md:inline">Let's connect</span>
            <span className="md:hidden">Book Call</span>
        </a>

      </nav>
    </div>
  );
};

export default Navbar;