import React from 'react';

const ProcessSection = () => {
  return (
    // Section wrapper with a top border, just like the Logos section
    <section 
      id="process" 
      className="w-full max-w-[1280px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]"
    >
      <div className="flex flex-col items-center gap-10">
        
        {/* --- 1. Title Block --- */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Pill: "THE FOUNDATION" */}
          <div className="flex items-center gap-4">
            {/* We can re-use the arrow SVGs from the Hero */}
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
            <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
                THE FOUNDATION
              </p>
            </div>
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
          </div>
          
          {/* Main Title */}
          <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-center">
            Process and timeline
          </h2>
        </div>

        {/* --- 2. The Timeline Image --- */}
        <div className="w-full bg-white border border-[#E1E2E3] rounded-2xl shadow-sm overflow-hidden mt-4">
          <img 
            src="https://framerusercontent.com/images/2uSDHOiE0IXJO2EVJMzpqUzHWj8.png" 
            alt="Prospeqt process and timeline" 
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;