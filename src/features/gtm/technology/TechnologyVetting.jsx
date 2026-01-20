import React from 'react';

const TechnologyVetting = ({ content, isLight }) => {
  return (
    // ✅ BACKGROUND: Set to transparent to reveal the global page gradient
    <section className="w-full py-10 px-6 lg:px-[60px] bg-transparent">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
           <h2 className={`text-4xl font-space font-bold mb-6 ${isLight ? "text-slate-900" : "text-white"}`}>
             {content.title}
           </h2>
           <p className={`text-lg leading-relaxed ${isLight ? "text-slate-600" : "text-gray-400"}`}>
             {content.subtitle}
           </p>
        </div>

        {/* Right: Stats Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
           {content.stats.map((stat, i) => (
             <div key={i} className={`
                p-6 rounded-xl border backdrop-blur-sm transition-transform hover:-translate-y-1
                ${isLight ? "bg-white/60 border-slate-200 shadow-sm" : "bg-[#161616]/60 border-[#333] shadow-lg"}
             `}>
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.percentage}</div>
                <div className={`text-sm font-medium ${isLight ? "text-slate-700" : "text-gray-300"}`}>{stat.label}</div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologyVetting;