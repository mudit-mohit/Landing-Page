import React from "react";

const WorkflowHero = ({ onSearch, onCategoryChange, activeCategory }) => {
  // 📋 DROPDOWN OPTIONS
  const categories = ["All", "Marketing", "Sales", "DevOps", "Finance", "HR", "Productivity", "Engineering"];

  // 📊 STATS DATA (Styled for Outmate)
  const stats = [
    { label: "Total Workflows", value: "4,343", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { label: "Active Contributors", value: "434", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { label: "Integrations", value: "250+", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Categories", value: "16", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 pt-28 pb-12">
      <div className="w-full bg-white border border-[#E1E2E3] rounded-3xl flex flex-col items-center py-16 px-6 shadow-[0_2px_20px_rgba(0,0,0,0.02)] text-center relative overflow-hidden">
        
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
            {/* 1. BADGE */}
            <div className="mb-6 border border-[#E1E2E3] bg-[#f4f4f4] rounded-full px-4 py-1.5 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1679fa] animate-pulse"></span>
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
                    n8n Community Library
                </p>
            </div>

            {/* 2. HEADING */}
            <h1 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black mb-6 max-w-4xl">
                Supercharge your automation with <span className="text-[#999999]">4,000+ Workflows</span>
            </h1>

            {/* 3. SUBHEADING */}
            <p className="font-display text-lg text-[#4d4d4d] max-w-2xl mx-auto mb-10 leading-relaxed">
                Discover, copy, and deploy production-ready automations for Marketing, DevOps, and AI. Save hundreds of hours instantly.
            </p>

            {/* 4. SEARCH BAR */}
            <div className="w-full max-w-2xl relative flex items-center mb-10">
                <div className="absolute left-6 text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
                
                <input 
                    type="text" 
                    placeholder="Search workflows (e.g. 'Slack notification', 'OpenAI')"
                    onChange={(e) => onSearch && onSearch(e.target.value)} 
                    className="w-full pl-14 pr-6 py-4 bg-white border border-[#E1E2E3] rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-sans text-base"
                />
            </div>

            {/* 5. CATEGORIES
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onCategoryChange && onCategoryChange(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                        activeCategory === cat 
                            ? "bg-black text-white border-black" 
                            : "bg-white text-[#4d4d4d] border-[#E1E2E3] hover:border-black"
                    }`}
                >
                    {cat}
                </button>
                ))}
            </div> */}

            {/* 6. STATS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
                {stats.map((stat, i) => (
                    <div 
                        key={i}
                        className="p-6 rounded-2xl border border-[#E1E2E3] bg-[#f8f9fa] flex flex-col items-center justify-center gap-2 transition-all hover:-translate-y-1"
                    >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 bg-white border border-[#E1E2E3] text-[#1679fa]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d={stat.icon} />
                            </svg>
                        </div>
                        <span className="text-2xl font-display font-bold text-black">
                            {stat.value}
                        </span>
                        <span className="text-xs font-sans font-medium uppercase tracking-wide text-[#4d4d4d]">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowHero;