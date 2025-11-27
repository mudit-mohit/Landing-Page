import React from 'react';

// --- Clean text logos ---
const logosRow1 = [
  "Alpha Corp", "Beta Solutions", "Gamma Systems", "Delta Technologies", "Omega Labs"
];

const logosRow2 = [
  "Momentm", "Orbit Tech", "Pinnacle Solutions", "AuraTeq", "Evolve Tech"
];

// Duplicate the arrays for the infinite scroll effect
const fullLogos1 = [...logosRow1, ...logosRow1];
const fullLogos2 = [...logosRow2, ...logosRow2];

const Logos = () => {
  return (
    // This container has the top border ("rule line") and padding
    <div className="w-full max-w-[1280px] mx-auto px-4 pb-20 pt-10 border-t border-[#E1E2E3] z-10">
      
      {/* This is the title you were asking for */}
      <h2 className="text-center font-display text-lg font-medium text-[#4d4d4d] mb-8">
        30+ B2B revenue teams served
      </h2>

      {/* Marquee Wrapper: "group" is for pausing on hover */}
      <div className="relative flex flex-col gap-6 group">
        
        {/* Gradient Fade-out Masks */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f4f4f4] via-[#f4f4f4] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f4f4f4] via-[#f4f4f4] to-transparent z-20 pointer-events-none" />

        {/* --- Row 1 (Scrolls Left) --- */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-scroll">
            {fullLogos1.map((text, index) => (
              <div key={index} className="px-12 h-16 flex items-center justify-center whitespace-nowrap">
                <span className="font-display text-2xl font-semibold text-black/50 transition-colors duration-300 group-hover:text-black/80">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Row 2 (Scrolls Right) --- */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-scroll-slow">
            {fullLogos2.map((text, index) => (
              <div key={index} className="px-12 h-16 flex items-center justify-center whitespace-nowrap">
                <span className="font-display text-2xl font-semibold text-black/50 transition-colors duration-300 group-hover:text-black/80">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Logos;