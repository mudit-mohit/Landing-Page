import React from 'react';
import Button from "../../../components/ui/Button';

const TechStackHero = ({ content, isLight }) => {
  const scrollToProfiles = () => {
    const section = document.getElementById('stack-experts');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  // Extract the "Tech Name" from the card title (e.g., "Hire OpenAI Expert" -> "OpenAI")
  // Fallback to a safe default if parsing fails
  const techName = content.cardTitle?.replace('Hire ', '').replace(' Expert', '').replace(' Engineer', '') || "Tech";

  return (
    <section className="w-full pt-20 pb-10 px-6 lg:px-[60px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* --- LEFT SIDE: Copy (Unchanged) --- */}
        <div className="w-full lg:w-1/2 text-left z-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 ${isLight ? "bg-white/80 border-green-200 text-green-700" : "bg-green-900/20 border-green-500/30 text-green-300"}`}>
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-bold uppercase tracking-wide">Tech Stack Expert</span>
          </div>
          
          <h1 className={`font-space font-bold text-5xl md:text-6xl leading-[1.1] mb-6 ${isLight ? "text-slate-900" : "text-white"}`}>
            {content.title}
          </h1>
          
          <p className={`text-lg leading-relaxed mb-10 max-w-[580px] ${isLight ? "text-slate-600" : "text-gray-400"}`}>
            {content.subtitle}
          </p>
          
          <Button 
              text={content.primaryCta} 
              onClick={scrollToProfiles}
              text_font_size="18" 
              text_font_weight="600" 
              text_color="#ffffff" 
              fill_background="linear-gradient(90deg, #10b981 0%, #059669 100%)" 
              padding="16px 48px" 
              border_border_radius="12px" 
              className="shadow-xl shadow-green-500/20 hover:scale-105 transition-transform" 
          />
        </div>

        {/* --- RIGHT SIDE: "Orbital Access Card" Design --- */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[500px] perspective-[1200px]">
          
          {/* 1. Background Orbital System (Pure Visuals) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* Core Glow */}
             <div className={`w-[200px] h-[200px] rounded-full blur-[80px] opacity-60 ${isLight ? "bg-green-300" : "bg-green-600"}`}></div>
             
             {/* Inner Orbit */}
             <div className={`absolute w-[300px] h-[300px] rounded-full border-[1px] animate-[spin_10s_linear_infinite] ${isLight ? "border-green-200" : "border-green-500/20"}`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
             </div>

             {/* Outer Orbit (Reverse Spin) */}
             <div className={`absolute w-[450px] h-[450px] rounded-full border-[1px] border-dashed animate-[spin_20s_linear_infinite_reverse] ${isLight ? "border-slate-200" : "border-white/10"}`}>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full blur-[1px]"></div>
             </div>
          </div>

          {/* 2. The Main Floating "Access Card" */}
          <div className={`
             relative w-[380px] h-[240px] rounded-2xl p-6 flex flex-col justify-between overflow-hidden
             backdrop-blur-xl border shadow-2xl animate-float-slow z-10 group
             ${isLight 
               ? "bg-white/40 border-white/60 shadow-green-900/5" 
               : "bg-[#0a0a0a]/60 border-white/10 shadow-black/80"
             }
          `}>
             {/* Dynamic Shimmer Effect */}
             <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_3s_infinite]"></div>

             {/* Card Header */}
             <div className="flex justify-between items-start">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className={`text-[10px] font-mono tracking-widest opacity-60 ${isLight ? "text-slate-800" : "text-white"}`}>
                   GENSQUAD_VERIFIED
                </div>
             </div>

             {/* Card Body: THE MAIN TEXT */}
             <div className="flex flex-col items-center justify-center h-full text-center mt-2">
                <p className={`text-xs font-bold tracking-[0.2em] mb-2 uppercase ${isLight ? "text-green-600" : "text-green-400"}`}>
                   DEPLOYMENT READY
                </p>
                <h2 className={`text-4xl font-black font-space leading-none uppercase drop-shadow-sm ${isLight ? "text-slate-900" : "text-white"}`}>
                   HIRE<br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                     {techName}
                   </span><br/>
                   ENGINEER
                </h2>
             </div>

             {/* Card Footer: Badges */}
             <div className="flex justify-between items-end border-t pt-4 border-current border-opacity-10">
                 <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase opacity-50">Experience</span>
                    <span className="text-xs font-bold">Senior Level</span>
                 </div>
                 <div className="flex flex-col text-right">
                    <span className="text-[9px] uppercase opacity-50">Availability</span>
                    <span className="text-xs font-bold text-green-500">● Immediate</span>
                 </div>
             </div>
          </div>

          {/* 3. Floating "Satellite" Elements (Add depth) */}
          <div className={`
             absolute top-[20%] right-[5%] px-4 py-2 rounded-lg border backdrop-blur-md animate-float-medium
             ${isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#111]/80 border-[#333] shadow-lg z-20"}
          `}>
             <span className="text-xs font-bold">Top 1% Talent</span>
          </div>

          <div className={`
             absolute bottom-[20%] left-[5%] px-4 py-2 rounded-lg border backdrop-blur-md animate-float-fast
             ${isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#111]/80 border-[#333] shadow-lg z-20"}
          `}>
             <span className="text-xs font-bold">Pre-Vetted</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStackHero;