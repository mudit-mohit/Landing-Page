import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Added for Link
import { useTheme } from "../../hooks/useTheme";
import { companyFaqData } from "../data/companyFaqData";
import Button from "../../components/ui/Button'; // Added Button

const FaqForCompanies = () => {
  const { isLight } = useTheme();
  
  // State
  const [activeCategory, setActiveCategory] = useState(companyFaqData[0].category);
  const [openIndex, setOpenIndex] = useState(0); 

  // Get active data based on selection
  const activeContent = companyFaqData.find(item => item.category === activeCategory);

  // Toggle Accordion logic
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 🎨 1. SHARED GRADIENT BACKGROUND
  const pageBackground = {
    background: isLight 
      ? `
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 0% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
        radial-gradient(circle at 100% 90%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)
      ` 
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  };

  return (
    <div style={pageBackground} className="min-h-screen relative w-full overflow-hidden">
      <Helmet>
        <title>FAQ for Companies | GenSquad</title>
        <meta name="description" content="Answers to common questions about billing, vetting, and hiring AI talent through GenSquad." />
      </Helmet>

      {/* 🎨 2. GRID PATTERN OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none fixed"
        style={{
          backgroundImage: isLight 
            ? `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`
            : `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: isLight ? 0.6 : 0.3,
          zIndex: 0
        }}
      />

      {/* 🌟 AMBIENT GLOW (Hero Specific) */}
      <div className={`
        absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full blur-[120px] -z-10
        ${isLight ? "bg-purple-500/10" : "bg-purple-900/15"}
      `}></div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10">

        {/* =========================================
            1. HERO SECTION (Redesigned Split Layout)
           ========================================= */}
        <section className="w-full pt-[120px] pb-20 px-6 lg:px-[60px]">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* --- LEFT CONTENT --- */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              
              {/* Pill Badge */}
              <div className={`
                inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8
                ${isLight 
                  ? "bg-white border-purple-200 text-purple-700 shadow-sm" 
                  : "bg-purple-900/20 border-purple-500/30 text-purple-300"
                }
              `}>
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide uppercase font-space">SUPPORT CENTER</span>
              </div>

              {/* Headline */}
              <h1 className={`
                font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6
                ${isLight ? "text-gray-900" : "text-white"}
              `}>
                Questions? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  We have answers.
                </span>
              </h1>

              {/* Subheadline */}
              <p className={`
                text-lg sm:text-xl leading-relaxed mb-10 max-w-[550px]
                ${isLight ? "text-gray-600" : "text-[#bababa]"}
              `}>
                Everything you need to know about hiring top 1% AI talent, transparent billing, and our rigorous vetting process.
              </p>

              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  text="View Categories ↓"
                  onClick={() => document.getElementById('faq-content').scrollIntoView({ behavior: 'smooth' })}
                  text_font_size="18"
                  text_font_weight="600"
                  text_color="#ffffff"
                  fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
                  padding="16px 48px"
                  border_border_radius="12px"
                  className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform w-full sm:w-auto"
                />
              </div>
            </div>

            {/* --- RIGHT VISUAL (Floating Cards / Knowledge Base) --- */}
            <div className="w-full lg:w-1/2 relative h-[450px] flex items-center justify-center">
              
              {/* Background Glow */}
              <div className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[90px] opacity-50
                ${isLight ? "bg-purple-200" : "bg-purple-900"}
              `}></div>

              {/* Floating Card 1: Billing (Top Left) */}
              <div className={`
                absolute top-12 left-0 sm:left-12 w-[200px] p-4 rounded-2xl border transform -rotate-6 animate-float-slow
                ${isLight ? "bg-white border-gray-200 shadow-lg shadow-purple-500/5" : "bg-[#161616] border-[#333] shadow-xl"}
              `}>
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isLight ? "bg-green-100 text-green-600" : "bg-green-900/30 text-green-400"}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>
                 </div>
                 <div className={`h-2.5 w-1/2 rounded mb-2 ${isLight ? "bg-gray-200" : "bg-gray-700"}`}></div>
                 <div className={`text-sm font-bold ${isLight ? "text-gray-800" : "text-white"}`}>Billing & Rates</div>
              </div>

              {/* Floating Card 2: Vetting (Bottom Right) */}
              <div className={`
                absolute bottom-12 right-0 sm:right-12 w-[200px] p-4 rounded-2xl border transform rotate-6 animate-float-delayed
                ${isLight ? "bg-white border-gray-200 shadow-lg shadow-purple-500/5" : "bg-[#161616] border-[#333] shadow-xl"}
              `}>
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isLight ? "bg-blue-100 text-blue-600" : "bg-blue-900/30 text-blue-400"}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div className={`h-2.5 w-1/2 rounded mb-2 ${isLight ? "bg-gray-200" : "bg-gray-700"}`}></div>
                 <div className={`text-sm font-bold ${isLight ? "text-gray-800" : "text-white"}`}>How We Vet</div>
              </div>

              {/* Center Card: Main Focus */}
              <div className={`
                relative z-20 w-[260px] p-6 rounded-[24px] border-2 transform hover:scale-105 transition-all duration-500
                ${isLight 
                  ? "bg-white border-purple-500 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.2)]" 
                  : "bg-[#0f0f0f] border-purple-500 shadow-2xl shadow-purple-500/20"
                }
              `}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase ${isLight ? "text-gray-400" : "text-gray-500"}`}>GenSquad</div>
                    <div className={`text-base font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Support Hub</div>
                  </div>
                </div>
                
                <div className={`h-px w-full my-4 ${isLight ? "bg-gray-100" : "bg-[#222]"}`}></div>
                
                <div className="space-y-3">
                  <div className={`flex items-center gap-2 text-sm ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> 24/7 Response
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Dedicated Mgr
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> IP Protection
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================
            2. FAQ CONTENT SECTION (Reused Layout)
           ========================================= */}
        <section id="faq-content" className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-20">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            
            {/* LEFT SIDEBAR (Categories) */}
            <div className="lg:w-[300px] flex-shrink-0">
              <div className="sticky top-28">
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 pl-1 lg:pl-4 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
                  Categories
                </h3>
                
                {/* Desktop: Vertical List / Mobile: Horizontal Scroll */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
                  {companyFaqData.map((section) => (
                    <button
                      key={section.category}
                      onClick={() => {
                        setActiveCategory(section.category);
                        setOpenIndex(null); 
                      }}
                      className={`
                        px-5 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 whitespace-nowrap
                        ${activeCategory === section.category
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                          : isLight 
                            ? "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900" 
                            : "text-[#888] hover:bg-[#1a1a1a] hover:text-white"
                        }
                      `}
                    >
                      {section.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT (Questions) */}
            <div className="flex-1 min-h-[500px] animate-fade-in-up">
              <div className="mb-6 sm:mb-8">
                <h2 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                  {activeCategory}
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {activeContent?.questions.map((item, index) => {
                  const isOpen = openIndex === index;
                  
                  return (
                    <div 
                      key={index}
                      onClick={() => toggleQuestion(index)}
                      className={`
                        rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group
                        ${isLight 
                          ? `bg-white/80 backdrop-blur-sm ${isOpen ? "border-purple-200 shadow-lg shadow-purple-500/5" : "border-gray-200 hover:border-purple-200"}` 
                          : `bg-[#121212]/80 backdrop-blur-sm ${isOpen ? "border-purple-500/30" : "border-[#222] hover:border-[#333]"}`
                        }
                      `}
                    >
                      {/* QUESTION HEADER */}
                      <div className="flex justify-between items-center p-5 sm:p-6">
                        <h3 className={`text-base sm:text-lg font-medium pr-8 leading-snug ${isLight ? "text-gray-900" : "text-white group-hover:text-purple-300 transition-colors"}`}>
                          {item.q}
                        </h3>
                        
                        {/* Icon */}
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0
                          ${isOpen 
                            ? "bg-purple-600 text-white rotate-180" 
                            : isLight ? "bg-gray-100 text-gray-500" : "bg-[#222] text-[#666]"
                          }
                        `}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6"/>
                          </svg>
                        </div>
                      </div>

                      {/* ANSWER BODY */}
                      <div 
                        className={`
                          grid transition-[grid-template-rows] duration-300 ease-out
                          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                        `}
                      >
                        <div className="overflow-hidden">
                          <div className={`px-5 sm:px-6 pb-6 pt-0 text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                            {item.a.split('\n').map((line, i) => (
                              <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

      </div>
      
      {/* 🎬 Floating Animation for Hero Cards */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(10px) rotate(6deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
      `}</style>

    </div>
  );
};

export default FaqForCompanies;