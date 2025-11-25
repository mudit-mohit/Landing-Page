import React from 'react';

const Navbar = () => {
  return (
    // 1. Outer Wrapper: Positions the navbar fixed at the top with padding
    <div className="fixed top-0 w-full flex justify-center pt-5 px-4 z-50 ">
      
      {/* 2. The Navbar Container: White, rounded, bordered, shadow */}
      <nav className="w-full max-w-[1280px] h-[68px] bg-black border border-black rounded-xl px-6 pt-2 flex justify-between items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
        
        {/* LEFT: Logo (Updated) */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          {/* Replaced the SVG with your uploaded 'outmate' logo */}
          <img 
            src="././public/outmate.png" 
            alt="Outmate Logo" 
            className="h-[150px] w-auto" 
          />
        </a>

        {/* RIGHT: Hamburger Menu Icon (3 Lines) */}
        <div className="cursor-pointer p-2 rounded-md hover:bg-gray-50 transition-colors group">
          <div className="flex flex-col gap-[5px] items-end">
            <span className="w-6 h-[2px] bg-white rounded-full group-hover:bg-gray-700 transition-colors"></span>
            <span className="w-6 h-[2px] bg-white rounded-full group-hover:bg-gray-700 transition-colors"></span>
            <span className="w-6 h-[2px] bg-white rounded-full group-hover:bg-gray-700 transition-colors"></span>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;