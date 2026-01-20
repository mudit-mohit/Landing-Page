import React, { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { jobFilters } from "../../data/jobFilters";

const JobHero = ({ onSearch, filters, setFilters }) => {
  const { isLight } = useTheme();
  const [localSearch, setLocalSearch] = useState("Python AI Developer");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearch);
  };

  return (
    <section className="relative pt-20 pb-10 px-6 w-full flex flex-col items-center overflow-hidden">
      
      {/* --- 1. INJECTED STYLES FOR ANIMATION (No Config Needed) --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-shimmer { animation: shimmer 2s infinite; }
      `}</style>

      {/* --- 2. ANIMATED BACKGROUND LAYER --- */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle Grid Texture */}
        <div 
          className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isLight ? "bg-black" : "bg-white"}`}
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        ></div>

        {/* Floating Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* --- 3. HERO CONTENT --- */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        
        {/* Pulsing Badge */}
        <div className="flex justify-center mb-8">
          <div className={`
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md shadow-sm transition-transform hover:scale-105
            ${isLight ? "bg-white/60 border-orange-200 text-orange-600" : "bg-orange-500/10 border-orange-500/30 text-orange-400"}
          `}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Hiring Now</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`font-space font-bold text-5xl md:text-7xl mb-6 tracking-tight leading-[1.1] ${isLight ? "text-gray-900" : "text-white"}`}>
          Find your next <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-pulse">
            AI Career
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 ${isLight ? "text-gray-600" : "text-gray-400"}`}>
          Browse thousands of AI, Machine Learning, and Data Engineering jobs aggregated from across the web.
        </p>

        {/* --- 4. GLASSMORPHISM SEARCH BAR --- */}
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mb-12 relative group z-20">
          {/* Glowing Ring Effect on Hover/Focus */}
          <div className={`absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${isLight ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gradient-to-r from-purple-600 to-blue-600"}`}></div>
          
          <div className={`
            relative flex items-center p-1.5 sm:p-2 rounded-2xl border transition-all duration-300
            ${isLight 
              ? "bg-white/80 border-white/50 shadow-2xl shadow-purple-500/10 backdrop-blur-xl" 
              : "bg-black/40 border-white/10 shadow-2xl shadow-black/50 backdrop-blur-xl"
            }
          `}>
            {/* Search Icon - Adjusted padding for mobile */}
            <div className="pl-3 pr-2 sm:pl-4 sm:pr-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            
            {/* Input Field - Responsive Text & Padding */}
            <input 
              type="text" 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Job title, keywords..." 
              className={`
                flex-1 bg-transparent px-2 py-3 sm:py-4 outline-none font-medium text-base sm:text-lg min-w-0
                ${isLight ? "text-gray-900 placeholder-gray-400" : "text-white placeholder-gray-500"}
              `}
            />

            {/* Extraordinary Button with Shimmer - Responsive Size */}
            <button type="submit" className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg group-hover:shadow-purple-500/25 text-sm sm:text-base whitespace-nowrap">
               <div className="absolute top-0 left-0 w-full h-full transform -skew-x-12 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
               <span className="relative z-10">Search</span>
            </button>
          </div>
        </form>

        {/* --- 5. INTERACTIVE FILTERS --- */}
        <div className="flex flex-wrap justify-center gap-3 relative z-10">
          
          {/* Remote Toggle */}
          <button 
            type="button"
            onClick={() => setFilters({ ...filters, remote: !filters.remote })}
            className={`
              px-5 py-2.5 rounded-full text-sm font-semibold border transition-all flex items-center gap-2 cursor-pointer select-none hover:-translate-y-0.5
              ${filters.remote 
                ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/30" 
                : (isLight ? "bg-white/80 border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50" : "bg-[#111]/80 border-[#333] text-gray-400 hover:border-gray-600 hover:bg-[#222]")
              }
            `}
          >
            {filters.remote ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            ) : (
              <div className={`w-4 h-4 rounded-full border-2 ${isLight ? "border-gray-300" : "border-gray-600"}`} />
            )}
            Remote Only
          </button>

          {/* Dynamic Dropdowns */}
          {jobFilters.map((filter) => (
            <div key={filter.id} className="relative group/select">
              <select
                value={filters[filter.id] || ""}
                onChange={(e) => setFilters({ ...filters, [filter.id]: e.target.value })}
                className={`
                  appearance-none cursor-pointer px-5 py-2.5 pr-10 rounded-full text-sm font-semibold border outline-none transition-all hover:-translate-y-0.5
                  ${isLight 
                    ? "bg-white/80 border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50" 
                    : "bg-[#111]/80 border-[#333] text-gray-400 hover:border-gray-600 hover:bg-[#222]"
                  }
                `}
              >
                <option value="">{filter.label}</option>
                {filter.options.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover/select:text-purple-500 transition-colors">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default JobHero;