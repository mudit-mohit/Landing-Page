import React from 'react';
import Button from "../../../components/ui/Button";

const ServiceHero = ({ content, isLight, slug }) => {
  
  // Function to handle scroll to profile grid
  const scrollToProfiles = () => {
    const section = document.getElementById('available-experts');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to determine role titles based on slug for the visual cards
  const getRoleTitle = (index) => {
    let roles = ["Senior Engineer", "Tech Lead", "Specialist"];
    
    if (slug.includes("ai")) roles = ["Senior AI Engineer", "ML Architect", "NLP Specialist"];
    if (slug.includes("data")) roles = ["Lead Data Scientist", "Data Engineer", "Analytics Lead"];
    if (slug.includes("cloud")) roles = ["Cloud Architect", "DevOps Lead", "SRE"];
    
    return roles[index] || "Senior Engineer";
  };

  return (
    <section className="w-full pt-20  px-6 lg:px-[60px] overflow-hidden relative">
      
      {/* ✅ 1. BACKGROUND TEXTURE (Transparent, lets page gradient show through) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {isLight ? (
          <>
            {/* Texture Only (No white bg) */}
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
            
            {/* Ambient Orbs - Deeper colors for better contrast against blue bg */}
            <div className="absolute -top-[10%] right-0 w-[600px] h-[600px] rounded-full bg-purple-200/40 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-300/30 blur-[100px]"></div>
          </>
        ) : (
          /* Dark Mode Glow */
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2e1065_0%,transparent_40%)] opacity-60"></div>
        )}
      </div>
      
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* --- LEFT CONTENT --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 ${isLight ? "bg-white/80 border-purple-200 text-purple-700 shadow-sm backdrop-blur-sm" : "bg-purple-900/20 border-purple-500/30 text-purple-300"}`}>
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
             <span className="text-xs font-bold tracking-wide uppercase font-space">Pre-Vetted Talent</span>
          </div>
          
          <h1 className={`font-space font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-6 ${isLight ? "text-slate-900" : "text-white"}`}>
            {content.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient-x">
              {content.titleHighlight}
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-[580px] ${isLight ? "text-slate-700 font-medium" : "text-[#bababa]"}`}>
            {content.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
                text={content.primaryCta} 
                onClick={scrollToProfiles}
                text_font_size="18" 
                text_font_weight="600" 
                text_color="#ffffff" 
                fill_background="linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)" 
                padding="16px 48px" 
                border_border_radius="12px" 
                className={`shadow-xl hover:scale-105 transition-transform ${isLight ? "shadow-blue-500/25" : "shadow-purple-500/30"}`} 
            />
          </div>
        </div>

        {/* --- RIGHT VISUAL: STACKED PROFILE CARDS --- */}
        <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
          
          {/* Depth Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] ${isLight ? "bg-white/40" : "bg-purple-900 opacity-30"}`}></div>

          {/* Container for Cards */}
          <div className="relative w-full max-w-[500px] h-[500px]">
            
            {/* CARD 1: Top Right (Floating) */}
            <div className={`
               absolute top-0 right-4 w-64 p-4 rounded-2xl border shadow-2xl backdrop-blur-md animate-float-slow z-10
               ${isLight ? "bg-white/90 border-white/60 shadow-xl shadow-blue-900/5" : "bg-[#1a1a1a]/90 border-white/10 shadow-black/50"}
            `}>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-400">
                     <img src="/images/img_ellipse_1.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <div className={`text-sm font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Sarah J.</div>
                     <div className="text-xs text-purple-600 font-medium">{getRoleTitle(0)}</div>
                  </div>
               </div>
               <div className="mt-3 flex gap-2">
                  <span className={`text-[10px] px-2 py-1 rounded-md ${isLight ? "bg-slate-100 text-slate-600 border border-slate-200" : "bg-[#333] text-gray-300"}`}>Python</span>
                  <span className={`text-[10px] px-2 py-1 rounded-md ${isLight ? "bg-slate-100 text-slate-600 border border-slate-200" : "bg-[#333] text-gray-300"}`}>TensorFlow</span>
               </div>
               <div className={`mt-3 pt-3 border-t flex justify-between items-center text-[10px] font-bold ${isLight ? "border-slate-100 text-slate-500" : "border-white/10 text-gray-400"}`}>
                  <span className="text-green-600">● Available</span>
                  <span>5.0 ★</span>
               </div>
            </div>

            {/* CARD 2: Center Left (Dominant) */}
            <div className={`
               absolute top-[140px] left-0 w-72 p-5 rounded-2xl border shadow-2xl backdrop-blur-xl animate-float-medium z-20
               ${isLight ? "bg-white border-white/80 shadow-2xl shadow-blue-600/10" : "bg-[#222] border-white/20 shadow-black"}
            `}>
               <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">Top 1%</div>
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600">
                     <img src="/images/img_ellipse_1.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <div className={`text-base font-bold ${isLight ? "text-slate-900" : "text-white"}`}>David R.</div>
                     <div className="text-sm text-blue-600 font-medium">{getRoleTitle(1)}</div>
                  </div>
               </div>
               <div className="mt-4 flex flex-wrap gap-2">
                  <span className={`text-[10px] px-2 py-1 rounded-md ${isLight ? "bg-blue-50 text-blue-700 border border-blue-100" : "bg-blue-900/30 text-blue-300"}`}>Ex-Google</span>
                  <span className={`text-[10px] px-2 py-1 rounded-md ${isLight ? "bg-slate-100 text-slate-600 border border-slate-200" : "bg-[#333] text-gray-300"}`}>PyTorch</span>
                  <span className={`text-[10px] px-2 py-1 rounded-md ${isLight ? "bg-slate-100 text-slate-600 border border-slate-200" : "bg-[#333] text-gray-300"}`}>AWS</span>
               </div>
               <div className={`mt-4 w-full h-1.5 rounded-full overflow-hidden ${isLight ? "bg-slate-100" : "bg-[#333]"}`}>
                  <div className="bg-blue-600 h-full w-[95%]"></div>
               </div>
               <div className={`mt-2 flex justify-between text-[10px] ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                  <span>Skill Match</span>
                  <span className="font-bold text-blue-600">98%</span>
               </div>
            </div>

            {/* CARD 3: Bottom Right (Floating) */}
            <div className={`
               absolute bottom-10 right-8 w-60 p-4 rounded-2xl border shadow-2xl backdrop-blur-md animate-float-fast z-10
               ${isLight ? "bg-white/90 border-white/60 shadow-xl shadow-green-900/5" : "bg-[#1a1a1a]/90 border-white/10 shadow-black/50"}
            `}>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
                     <img src="/images/img_ellipse_1.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <div className={`text-sm font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Alex M.</div>
                     <div className="text-xs text-green-600 font-medium">{getRoleTitle(2)}</div>
                  </div>
               </div>
               <div className={`mt-3 text-[10px] leading-relaxed italic ${isLight ? "text-slate-600" : "text-gray-400"}`}>
                  "Expert in deploying LLMs at scale. Available for fractional roles."
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceHero;