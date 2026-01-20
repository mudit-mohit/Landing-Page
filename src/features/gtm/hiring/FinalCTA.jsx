import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../../components/ui/Button";

const FinalCTA = ({ content, isLight }) => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-[60px] relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className={`relative w-full rounded-[40px] overflow-hidden border group ${isLight ? "bg-white border-gray-200 shadow-2xl shadow-purple-500/10" : "bg-[#050505] border-[#222] shadow-2xl shadow-purple-900/20"}`}>
          
          {/* Background & Animations */}
          <div className={`absolute inset-0 ${isLight ? "bg-white" : "bg-[#050505]"}`}></div>
          <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-[20%] left-[-10%] w-[40%] h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-streak-fast"></div>
            <div className="absolute top-[50%] left-[-20%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-streak-slow"></div>
            <div className="absolute top-[80%] left-[-15%] w-[50%] h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-streak-medium"></div>
          </div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none ${isLight ? "bg-purple-100/50" : "bg-purple-900/20"}`}></div>
          
          {/* Content */}
          <div className="relative z-20 px-6 py-24 flex flex-col items-center text-center">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-500 border ${isLight ? "bg-white border-purple-100 text-purple-600" : "bg-[#111] border-purple-900/30 text-purple-400"}`}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            
            {/* ✅ DYNAMIC TITLE FIXED HERE */}
            <h2 className={`text-4xl sm:text-5xl md:text-7xl font-space font-bold mb-6 max-w-4xl leading-[1.1] tracking-tight ${isLight ? "text-gray-900" : "text-white"}`}>
              {content.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient-x">
                {content.titleHighlight}
              </span>
            </h2>
            
            <p className={`text-lg sm:text-xl max-w-[650px] leading-relaxed mb-12 ${isLight ? "text-gray-600" : "text-[#888]"}`}>
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link to="/talent">
                <Button text={content.primaryCta} text_font_size="18" text_font_weight="600" text_color="#ffffff" fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)" padding="18px 48px" border_border_radius="14px" className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-all duration-300" />
              </Link>
              {/* {content.secondaryCta && (
                <Link to="/talent">
                  <Button text={content.secondaryCta} text_font_size="18" text_font_weight="600" text_color={isLight ? "#333" : "#fff"} fill_background="transparent" border_border={isLight ? "1px solid #e5e5e5" : "1px solid rgba(255,255,255,0.2)"} padding="18px 48px" border_border_radius="14px" className={`backdrop-blur-md hover:scale-105 transition-all duration-300 ${isLight ? "hover:bg-gray-50" : "hover:bg-white/5"}`} />
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;