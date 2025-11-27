import React from 'react';

const Hero = () => {
  const handleScrollToCalendar = () => {
    const element = document.getElementById('BookingScheduler');
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    // Section wrapper with padding to clear the fixed navbar
    <section className="w-full max-w-[1280px] mx-auto  pt-28 pb-10">
      
      {/* The Main White Card Container */}
      <div className="relative w-full bg-white border border-[#E1E2E3] rounded-3xl flex flex-col items-center pt-14 pb-24 overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.02)] min-h-[650px] px-6">
        
        {/* --- 1. Top Pill with Arrows --- */}
        <div className="z-10 mb-8 flex items-center gap-4">
          {/* Left Arrow SVG (Extracted from Framer code) */}
          <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
            <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
          </svg>

          {/* Pill */}
          <div className="border border-[#E1E2E3] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
            <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
              For B2b Companies making $50k+/month
            </p>
          </div>

          {/* Right Arrow SVG (Same as left, but rotated) */}
          <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
            <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
          </svg>
        </div>

        {/* --- 2. The 3 Floating Icons --- */}
        <div className="flex gap-5 mb-10 z-10">
            
            {/* Icon 1: Blue Bolt (Wrapper for animation) */}
            <div className="animate-float-bob" style={{ animationDelay: '0s' }}>
              <div className="w-12 h-12 bg-white rounded-xl border border-[#E1E2E3] shadow-sm flex items-center justify-center transform -rotate-[11.1deg]">
                  <svg width="24" height="24" viewBox="0 0 35 35" fill="none" className="w-7 h-7">
                      <path d="M18.8868 33.3893C27.7034 32.7963 34.37 25.1683 33.777 16.3516C33.184 7.535 25.556 0.868427 16.7393 1.46143C7.92269 2.05443 1.25611 9.68245 1.84912 18.4991C2.44212 27.3158 10.0701 33.9823 18.8868 33.3893Z" fill="#0081FF"></path>
                      <path d="M13.4989 20.0332L9.26022 20.3183C9.11116 20.3283 9.00663 20.1735 9.07203 20.039L15.0638 7.71681L24.9999 7.04851C25.161 7.03768 25.2646 7.21641 25.1746 7.35087L20.7435 13.9739C20.6538 14.1083 20.7571 14.287 20.9182 14.2762L26.1025 13.9275C26.2774 13.9158 26.3774 14.1228 26.2594 14.2524L12.4466 29.4604C12.3153 29.6049 12.077 29.4879 12.1109 29.2957L13.7037 20.2607C13.7255 20.1367 13.6251 20.0247 13.4989 20.0332Z" fill="white"></path>
                  </svg>
              </div>
            </div>
            
            {/* Icon 2: Clay Logo (Wrapper for animation) */}
            <div className="animate-float-bob" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-white rounded-xl border border-[#E1E2E3] shadow-sm flex items-center justify-center p-2 transform rotate-[11.1deg]">
                  <img 
                      src="https://framerusercontent.com/images/LjeWXP4corofTIDWaofBHE7sXRM.png" 
                      alt="Clay Logo" 
                      className="w-full h-full object-contain"
                  />
              </div>
            </div>

            {/* Icon 3: Red Flash (Wrapper for animation) */}
            <div className="animate-float-bob" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-white rounded-xl border border-[#E1E2E3] shadow-sm flex items-center justify-center p-2 transform -rotate-[8.1deg]">
                  <svg width="24" height="24" viewBox="0 0 31 27" fill="none" className="w-7 h-7">
                      <path d="M 20.503 18.178 L 24.671 24.137 C 24.771 24.279 24.677 24.478 24.5 24.497 L 9.572 26.1 C 9.532 26.105 9.49 26.099 9.453 26.083 C 9.415 26.068 9.383 26.043 9.358 26.011 C 9.333 25.979 9.318 25.941 9.313 25.902 C 9.308 25.862 9.313 25.822 9.329 25.785 L 12.037 19.316 C 12.052 19.279 12.058 19.239 12.053 19.199 C 12.048 19.16 12.032 19.122 12.008 19.09 C 11.983 19.058 11.951 19.033 11.914 19.017 C 11.876 19.002 11.835 18.996 11.794 19 L 2.067 20.045 C 2.02 20.05 1.972 20.041 1.93 20.019 C 1.889 19.997 1.855 19.963 1.834 19.921 C 1.812 19.88 1.804 19.833 1.811 19.787 C 1.817 19.741 1.837 19.698 1.869 19.664 L 19.216 0.987 C 19.394 0.796 19.709 0.988 19.606 1.227 L 14.528 13.361 C 14.43 13.6 14.746 13.792 14.92 13.601 L 27.455 0.107 C 27.633 -0.084 27.949 0.108 27.846 0.347 L 20.473 17.966 C 20.458 18.001 20.452 18.039 20.456 18.077 C 20.46 18.115 20.474 18.151 20.497 18.183 Z" fill="#FF4D00"></path>
                  </svg>
              </div>
            </div>
        </div>

        {/* --- 3. Main Typography --- */}
        <div className="z-10 flex flex-col items-center text-center max-w-[980px] px-4 gap-6">
          <h1 className="font-display font-semibold text-5xl md:text-[64px] tracking-tight leading-[1.1] text-black">
            We engineer outbound into your primary <span className="text-[#999999]">revenue channel</span>
          </h1>
          
          <p className="font-display text-lg text-[#4d4d4d] max-w-[560px] leading-relaxed mt-2">
            Built on 130+ data sources and AI — start conversations with your entire market using your most relevant message
          </p>

          {/* --- 4. Button --- */}
          <a 
            onClick={handleScrollToCalendar}  
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 group flex items-center gap-3 bg-gradient-to-b from-[#1679fa] to-[#0a61d1] text-white px-5 py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="font-display font-medium text-lg">
              Book A Strategy Call
            </span>
            {/* Arrow Icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <path d="M 7.595 13 L 6.427 11.832 L 9.748 8.511 L 10.526 7.985 L 10.435 7.71 L 9.496 7.824 L 1 7.824 L 1 6.176 L 9.496 6.176 L 10.435 6.29 L 10.526 6.015 L 9.748 5.489 L 6.427 2.168 L 7.595 1 L 13 6.405 L 13 7.595 Z" fill="white"/>
            </svg>
          </a>
        </div>

        {/* --- 5. Background Canvas Simulation --- */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            {/* This is a simple CSS gradient to mimic the feel of the canvas animation */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;