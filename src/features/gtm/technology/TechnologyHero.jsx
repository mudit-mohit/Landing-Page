import React from 'react';
import Button from "../../../components/ui/Button';

const TechnologyHero = ({ content, isLight }) => {
  const scrollToProfiles = () => {
    const section = document.getElementById('tech-experts');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full pt-20 pb-10 px-6 lg:px-[60px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* LEFT SIDE: Copy */}
        <div className="w-full lg:w-1/2 text-left z-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 ${isLight ? "bg-white/80 border-blue-200 text-blue-700" : "bg-blue-900/20 border-blue-500/30 text-blue-300"}`}>
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
             <span className="text-xs font-bold uppercase tracking-wide">Technology Focus</span>
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
              fill_background="linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)" 
              padding="16px 48px" 
              border_border_radius="12px" 
              className="shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform" 
          />
        </div>

        {/* RIGHT SIDE: Floating "Holographic" Tech Card */}
        <div className="w-full lg:w-1/2 flex items-center justify-center perspective-[1000px]">
          <div className={`
             relative w-[340px] h-[450px] rounded-[24px] border backdrop-blur-xl p-6 flex flex-col items-center justify-between
             animate-float-slow transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700
             ${isLight ? "bg-white/60 border-white/80 shadow-2xl shadow-blue-500/10" : "bg-black/40 border-white/10 shadow-2xl shadow-blue-900/50"}
          `}>
             {/* Glow Effect */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[24px] pointer-events-none"></div>

             {/* Top: Chip & Wifi */}
             <div className="w-full flex justify-between items-center opacity-70">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={isLight ? "text-gray-800" : "text-white"}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <div className="flex gap-1">
                   <div className="w-1 h-3 bg-blue-500 rounded-full"></div>
                   <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                   <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
                </div>
             </div>

             {/* Middle: Profile Placeholder */}
             <div className="relative w-32 h-32 rounded-full border-[4px] p-1 border-blue-500/30">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden relative">
                   {/* Generic silhouette or user's image */}
                   <img src="/images/img_ellipse_1.png" alt="Expert" className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-white dark:border-black rounded-full"></div>
             </div>

             {/* Text Content */}
             <div className="text-center z-10">
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${isLight ? "text-blue-600" : "text-blue-400"}`}>Verified Expert</div>
                {/* Dynamic Page Name Injection */}
                <h3 className={`text-2xl font-bold font-space leading-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                  {content.cardTitle || "Hire Engineer"}
                </h3>
                <div className={`text-xs mt-2 font-mono ${isLight ? "text-slate-500" : "text-gray-400"}`}>ID: GENSQUAD-8X92</div>
             </div>

             {/* Bottom: Barcode feel */}
             <div className="w-full h-8 flex items-end justify-between gap-1 opacity-50">
                {[...Array(20)].map((_,i) => (
                  <div key={i} className={`w-1 rounded-full ${isLight ? "bg-slate-800" : "bg-white"}`} style={{ height: `${Math.random() * 100}%` }}></div>
                ))}
             </div>
          </div>

          {/* Background Orbit/Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[80px] -z-10 ${isLight ? "bg-blue-100" : "bg-blue-900/30"}`}></div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyHero;