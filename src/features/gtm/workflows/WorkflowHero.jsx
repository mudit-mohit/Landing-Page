import React from "react";
import { useTheme } from "../../../hooks/useTheme";

// ✅ 1. Accept 'onCategoryChange' prop along with 'onSearch'
const WorkflowHero = ({ onSearch, onCategoryChange }) => {
  const { isLight } = useTheme();

  // 📋 DROPDOWN OPTIONS
  const categories = ["Marketing", "Sales", "DevOps", "Finance", "HR", "Productivity", "Engineering"];
  const complexities = ["Beginner", "Intermediate", "Advanced"];
  const triggers = ["Webhook", "Schedule", "App Event", "Manual"];

  // 📊 STATS DATA
  const stats = [
    { label: "Total Workflows", value: "4,343", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { label: "Active Contributors", value: "434", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { label: "Integrations", value: "250+", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Categories", value: "16", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }
  ];

  return (
    <section className="w-full relative pt-[60px] pb-10 px-6">
      
      {/* ✨ GRID PATTERN OVERLAY ✨ */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isLight 
            ? `linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)`
            : `linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: isLight ? 1 : 0.03 
        }}
      />

      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center animate-fade-in-up relative z-10">
        
        {/* 1. BADGE */}
        <div className={`
          inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8
          ${isLight 
            ? "bg-purple-50 border-purple-100 text-purple-700" 
            : "bg-white/5 border-white/10 text-purple-300"
          }
        `}>
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-xs font-bold tracking-wide uppercase font-space">n8n Community Library</span>
        </div>

        {/* 2. HEADING */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className={`
            font-space font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.2]
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            Supercharge your automation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6d5a] to-[#ff4f81]">4,000+ Workflows</span>
          </h1>
        </div>

        {/* 3. SUBHEADING */}
        <p className={`
          text-lg sm:text-xl leading-relaxed mb-12 max-w-[700px] mx-auto
          ${isLight ? "text-gray-600" : "text-[#bababa]"}
        `}>
          Discover, copy, and deploy production-ready automations for Marketing, DevOps, and AI. Save hundreds of hours instantly.
        </p>

        {/* 4. SEARCH BAR */}
        <div className="w-full max-w-2xl relative mb-8 group">
          <div className={`
            absolute -inset-1 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500
            ${isLight ? "bg-purple-400" : "bg-purple-600"}
          `}></div>
          
          <div className={`
            relative flex items-center w-full px-4 py-3 rounded-xl border transition-all
            ${isLight 
              ? "bg-white border-gray-200 shadow-xl shadow-purple-500/5" 
              : "bg-[#1a1a1a] border-[#333] shadow-2xl shadow-black/50"
            }
          `}>
            <svg width="20" height="20" className={`mr-3 flex-shrink-0 ${isLight ? "text-gray-400" : "text-[#666]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            
            <input 
              type="text" 
              placeholder="Search workflows (e.g. 'Slack notification', 'OpenAI')"
              onChange={(e) => onSearch && onSearch(e.target.value)} 
              className={`
                w-full bg-transparent outline-none text-base font-dm placeholder-opacity-60
                ${isLight ? "text-gray-900 placeholder-gray-400" : "text-white placeholder-[#666]"}
              `}
            />
          </div>
        </div>

        {/* 5. FILTERS ROW */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 w-full max-w-3xl">
          
          {/* ✅ UPDATED CATEGORY DROPDOWN */}
          {/* <div className="relative group">
            <select 
              onChange={(e) => onCategoryChange && onCategoryChange(e.target.value)} // Trigger Logic
              className={`
                appearance-none cursor-pointer px-5 py-2.5 pr-10 rounded-lg text-sm font-medium border outline-none transition-all
                ${isLight 
                  ? "bg-white border-gray-200 text-gray-700 hover:border-purple-400 hover:shadow-md" 
                  : "bg-[#161616] border-[#333] text-[#bababa] hover:border-white/30 hover:bg-[#222]"
                }
              `}
            >
              <option value="">All Categories</option>
              {categories.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <svg width="12" height="12" className={`absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${isLight ? "text-gray-400" : "text-[#666]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div> */}

          {/* Other filters (Visual only for now unless you want them wired too) */}
          {/* {[
            { label: "All Complexity", options: complexities },
            { label: "All Triggers", options: triggers }
          ].map((filter, idx) => (
            <div key={idx} className="relative group">
              <select className={`
                appearance-none cursor-pointer px-5 py-2.5 pr-10 rounded-lg text-sm font-medium border outline-none transition-all
                ${isLight 
                  ? "bg-white border-gray-200 text-gray-700 hover:border-purple-400 hover:shadow-md" 
                  : "bg-[#161616] border-[#333] text-[#bababa] hover:border-white/30 hover:bg-[#222]"
                }
              `}>
                <option value="">{filter.label}</option>
                {filter.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <svg width="12" height="12" className={`absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${isLight ? "text-gray-400" : "text-[#666]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          ))} */}
        </div>

        {/* 6. STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className={`
                p-6 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1
                ${isLight 
                  ? "bg-white/60 border-purple-100 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm" 
                  : "bg-[#121212]/60 border-white/5 hover:border-purple-500/30 hover:bg-[#1a1a1a] backdrop-blur-sm"
                }
              `}
            >
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center mb-1
                ${isLight ? "bg-orange-50 text-orange-500" : "bg-orange-900/20 text-orange-400"}
              `}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={stat.icon} />
                </svg>
              </div>
              <span className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                {stat.value}
              </span>
              <span className={`text-xs font-medium uppercase tracking-wide ${isLight ? "text-gray-500" : "text-[#666]"}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WorkflowHero;