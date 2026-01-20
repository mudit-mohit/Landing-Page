import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTheme } from "../../hooks/useTheme';
import Button from "../../components/ui/Button';
import Testimonials from "../../features/gtm/landing/Testimonials';


const FractionalCTO = () => {
  const { isLight } = useTheme();

  return (
    <div className="w-full min-h-screen relative selection:bg-purple-500/30">
      <Helmet>
        <title>Fractional CTO | GenSquad</title>
        <meta name="description" content="Expert technical leadership on demand. Scale your AI and engineering teams with GenSquad's Fractional CTO services." />
      </Helmet>

      {/* ==============================================================================
          🌍 GLOBAL BACKGROUND
         ============================================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 ${isLight ? "bg-white" : "bg-[#050505]"}`}></div>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: isLight
              ? `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`
              : `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] rounded-full blur-[120px] ${isLight ? "bg-purple-500/10" : "bg-purple-900/15"}`}></div>
        <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] ${isLight ? "bg-blue-500/10" : "bg-blue-900/10"}`}></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* =========================================
            SECTION 1: HERO - THE EXECUTIVE ACCESS CARD
           ========================================= */}
        <section className="w-full pt-[140px] pb-24 px-6 lg:px-[60px] overflow-hidden">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* --- LEFT CONTENT (Text) --- */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">

              {/* Badge */}
              <div className={`
                inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8
                ${isLight
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-blue-900/20 border-blue-500/30 text-blue-300"
                }
              `}>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide uppercase font-space">Strategic Leadership</span>
              </div>

              {/* Headline */}
              <h1 className={`
                font-space font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-6
                ${isLight ? "text-gray-900" : "text-white"}
              `}>
                Hire a fractional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 animate-gradient-x">
                  AI leader
                </span> to guide your roadmap
              </h1>

              {/* Subheadline */}
              <p className={`
                text-lg sm:text-xl leading-relaxed mb-10 max-w-[580px]
                ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                Get the strategic CTO/CPO firepower you need to make the right AI bets, de‑risk execution, and turn ideas into shippable product work—without committing to a full‑time executive hire.
              </p>

              {/* Single CTA Button */}
              <Link to="/talent">
                <Button
                  text="Get started"
                  text_font_size="18"
                  text_font_weight="600"
                  text_color="#ffffff"
                  fill_background="linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)"
                  padding="16px 48px"
                  border_border_radius="12px"
                  className="shadow-xl shadow-blue-500/30 hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            {/* --- RIGHT VISUAL (Solid Executive Card) --- */}
            <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center perspective-[1000px]">

              {/* Background Glow */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[120px] opacity-40 ${isLight ? "bg-blue-300" : "bg-blue-900"}`}></div>

              {/* The "Access Card" Container */}
              <div className={`
                relative w-full max-w-[400px] rounded-[32px] border-2 p-1 overflow-hidden transition-all duration-500 animate-float-slow
                ${isLight
                  ? "bg-white/60 border-white/80 shadow-2xl backdrop-blur-xl"
                  : "bg-[#111]/60 border-white/10 shadow-2xl shadow-black/50 backdrop-blur-xl"
                }
              `}>

                {/* Holographic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

                {/* Inner Card Content */}
                <div className={`
                  w-full h-full rounded-[28px] p-8 flex flex-col items-center
                  ${isLight ? "bg-gradient-to-b from-white to-blue-50/50" : "bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]"}
                `}>

                  {/* Header: Verified Badge */}
                  <div className="w-full flex justify-between items-center mb-8 border-b pb-4 border-dashed border-gray-200 dark:border-gray-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Executive Access</div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-bold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      VERIFIED
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="relative mb-6">
                    {/* Ring Animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent animate-spin-slow opacity-50"></div>
                    <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-600">
                      <img src="/images/img_ellipse_1.png" alt="CTO" className={`w-full h-full rounded-full object-cover ${isLight ? "border-2 border-white" : "border-2 border-black"}`} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white border-4 border-white dark:border-black shadow-lg">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>Fractional CTO</h3>
                    <p className={`text-sm ${isLight ? "text-gray-500" : "text-gray-400"}`}>Strategic AI & Product Leadership</p>
                  </div>

                  {/* Active Modules (The 3 Pillars from Copy) */}
                  <div className="w-full space-y-3">

                    {/* Module 1: Strategy */}
                    <div className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${isLight ? "bg-white border-gray-100 shadow-sm" : "bg-[#222] border-[#333]"}`}>
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" /></svg>
                      </div>
                      <div className="text-sm font-bold">AI Strategy & Bets</div>
                    </div>

                    {/* Module 2: De-risk */}
                    <div className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${isLight ? "bg-white border-gray-100 shadow-sm" : "bg-[#222] border-[#333]"}`}>
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      </div>
                      <div className="text-sm font-bold">Execution De-risking</div>
                    </div>

                    {/* Module 3: Shipping */}
                    <div className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${isLight ? "bg-white border-gray-100 shadow-sm" : "bg-[#222] border-[#333]"}`}>
                      <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div className="text-sm font-bold">Shippable Product</div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* 🎬 CSS Animations for this page */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 5s ease infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }

        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }

        .perspective-\[1000px\] { perspective: 1000px; }
      `}</style>

      {/* =========================================
            SECTION 2: HOW GENSQUAD WORKS (Premium Bento Grid)
           ========================================= */}
      <section className="w-full py-10 px-6 lg:px-[60px] relative">
        <div className="max-w-[1200px] mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-10">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-purple-900/20 text-purple-300 border-purple-500/20"}`}>
              OPERATING MODEL
            </div>
            <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
              How it works
            </h2>
            <p className={`text-lg sm:text-xl max-w-[900px] mx-auto leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
              Finding your fractional AI leader is as simple as telling us what you’re building and where you need the most leverage. GenSquad handles the rest.
            </p>
          </div>

          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* --- CARD 1: EMBEDDED SQUADS --- */}
            <div className={`
                relative p-8 rounded-[32px] border overflow-hidden group transition-all duration-300 hover:-translate-y-1
                ${isLight
                ? "bg-white border-gray-200 shadow-xl shadow-blue-500/5 hover:border-blue-200"
                : "bg-[#111] border-[#222] hover:border-blue-900/50 shadow-2xl"
              }
              `}>
              {/* Background Number Watermark */}
              <div className={`absolute -right-4 -top-6 text-[180px] font-space font-bold opacity-[0.03] select-none ${isLight ? "text-blue-900" : "text-blue-500"}`}>
                1
              </div>

              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-2xl relative z-10 ${isLight ? "bg-blue-50 text-blue-600" : "bg-blue-900/20 text-blue-400"}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>

              <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isLight ? "text-gray-900" : "text-white"}`}>
                Tell us what you need <span className="text-blue-500">help with</span>
              </h3>
              <p className={`text-base leading-relaxed relative z-10 ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                Share your product stage, tech stack, and the decisions you need support on—from roadmap and org design to architecture and AI strategy. This gives us the context to find the right fractional CTO or CPO match.
              </p>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>


            {/* --- CARD 2: FULL-STACK AI --- */}
            <div className={`
                relative p-8 rounded-[32px] border overflow-hidden group transition-all duration-300 hover:-translate-y-1
                ${isLight
                ? "bg-white border-gray-200 shadow-xl shadow-purple-500/5 hover:border-purple-200"
                : "bg-[#111] border-[#222] hover:border-purple-900/50 shadow-2xl"
              }
              `}>
              <div className={`absolute -right-4 -top-6 text-[180px] font-space font-bold opacity-[0.03] select-none ${isLight ? "text-purple-900" : "text-purple-500"}`}>
                2
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-2xl relative z-10 ${isLight ? "bg-purple-50 text-purple-600" : "bg-purple-900/20 text-purple-400"}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>

              <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isLight ? "text-gray-900" : "text-white"}`}>
                Match with your <span className="text-purple-500">fractional leader</span>
              </h3>
              <p className={`text-base leading-relaxed relative z-10 ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                Get introduced to a fractional CTO or CPO tailored to your needs. Join a 1:1 intro call to walk through your challenges, ask questions, and gauge chemistry before committing.
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>


            {/* --- CARD 3: OUTCOME BASED --- */}
            <div className={`
                relative p-8 rounded-[32px] border overflow-hidden group transition-all duration-300 hover:-translate-y-1
                ${isLight
                ? "bg-white border-gray-200 shadow-xl shadow-green-500/5 hover:border-green-200"
                : "bg-[#111] border-[#222] hover:border-green-900/50 shadow-2xl"
              }
              `}>
              <div className={`absolute -right-4 -top-6 text-[180px] font-space font-bold opacity-[0.03] select-none ${isLight ? "text-green-900" : "text-green-500"}`}>
                3
              </div>

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-2xl relative z-10 ${isLight ? "bg-green-50 text-green-600" : "bg-green-900/20 text-green-400"}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
              </div>

              <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isLight ? "text-gray-900" : "text-white"}`}>Define the engagement and
                <span className="text-green-500"> start work</span>
              </h3>
              <p className={`text-base leading-relaxed relative z-10 ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                Align on scope, cadence, and outcomes, then make it official. Your fractional leader joins your rituals, reviews key decisions, and helps you turn strategy into a clear, actionable plan.
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
            SECTION 3: ENGAGEMENT BLUEPRINTS (2x2 Strategic Grid)
           ========================================= */}
      {/* =========================================
            SECTION 2: ENGAGEMENT MODELS (Strategic Impact Grid)
           ========================================= */}
        <section className="w-full py-10 px-6 lg:px-[60px] relative z-10">
          <div className="max-w-[1200px] mx-auto">
            
            {/* 1. Section Header */}
            <div className="text-center mb-20">
               <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-purple-900/20 text-purple-300 border-purple-500/20"}`}>
                REAL-WORLD IMPACT
              </div>
              <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
                See how companies engage <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">fractional AI leaders</span>
              </h2>
              <p className={`text-lg sm:text-xl max-w-[800px] mx-auto leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                From AI strategy and roadmap decisions to architecture reviews and platform builds, product teams tap fractional CTOs and CPOs to de‑risk their most important work.
              </p>
            </div>

            {/* 2. The Blueprint Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* --- CARD 1: AI STRATEGY --- */}
              <div className={`
                group relative p-8 rounded-[32px] border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full
                ${isLight 
                  ? "bg-white border-gray-200 shadow-lg hover:border-purple-300" 
                  : "bg-[#111] border-[#222] shadow-lg hover:border-purple-500/40"
                }
              `}>
                {/* Technical Grid Background (Reveals on Hover) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${isLight ? "bg-[url('/images/grid-dark.svg')]" : "bg-[url('/images/grid-light.svg')]"}`} style={{backgroundSize: '30px 30px'}}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-purple-500 transition-colors ${isLight ? "bg-purple-50 group-hover:bg-purple-100" : "bg-purple-900/20 group-hover:bg-purple-900/30"}`}>
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>
                    </div>
                    {/* Status Pill */}
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border flex items-center gap-2 ${isLight ? "bg-purple-50 text-purple-600 border-purple-100" : "bg-purple-900/10 text-purple-400 border-purple-500/20"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                      Strategy
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                    AI strategy and roadmap for B2B SaaS
                  </h3>
                  <p className={`text-base leading-relaxed mb-8 flex-grow ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                    A SaaS company brought in a fractional CTO to prioritise AI features, align stakeholders, and turn a long ideas list into a focused 12‑month roadmap.
                  </p>

                  {/* Progress Bar Visual */}
                  <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-3/4 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* --- CARD 2: ARCHITECTURE --- */}
              <div className={`
                group relative p-8 rounded-[32px] border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full
                ${isLight 
                  ? "bg-white border-gray-200 shadow-lg hover:border-blue-300" 
                  : "bg-[#111] border-[#222] shadow-lg hover:border-blue-500/40"
                }
              `}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${isLight ? "bg-[url('/images/grid-dark.svg')]" : "bg-[url('/images/grid-light.svg')]"}`} style={{backgroundSize: '30px 30px'}}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-blue-500 transition-colors ${isLight ? "bg-blue-50 group-hover:bg-blue-100" : "bg-blue-900/20 group-hover:bg-blue-900/30"}`}>
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border flex items-center gap-2 ${isLight ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-blue-900/10 text-blue-400 border-blue-500/20"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      Scale
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                    Architecture overhaul for a scaling marketplace
                  </h3>
                  <p className={`text-base leading-relaxed mb-8 flex-grow ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                    A high‑growth marketplace leaned on a fractional CTO to review the stack, redesign core services, and prepare the platform for 10x traffic.
                  </p>

                   <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* --- CARD 3: EXPERIMENTATION --- */}
              <div className={`
                group relative p-8 rounded-[32px] border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full
                ${isLight 
                  ? "bg-white border-gray-200 shadow-lg hover:border-pink-300" 
                  : "bg-[#111] border-[#222] shadow-lg hover:border-pink-500/40"
                }
              `}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${isLight ? "bg-[url('/images/grid-dark.svg')]" : "bg-[url('/images/grid-light.svg')]"}`} style={{backgroundSize: '30px 30px'}}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-pink-500 transition-colors ${isLight ? "bg-pink-50 group-hover:bg-pink-100" : "bg-pink-900/20 group-hover:bg-pink-900/30"}`}>
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border flex items-center gap-2 ${isLight ? "bg-pink-50 text-pink-600 border-pink-100" : "bg-pink-900/10 text-pink-400 border-pink-500/20"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
                      Product
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                    Experimentation and analytics for a consumer app
                  </h3>
                  <p className={`text-base leading-relaxed mb-8 flex-grow ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                    A product team partnered with a fractional CPO to define metrics, ship an experimentation framework, and make data‑driven bets on new features.
                  </p>

                   <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 w-4/5 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* --- CARD 4: DATA & ML --- */}
              <div className={`
                group relative p-8 rounded-[32px] border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full
                ${isLight 
                  ? "bg-white border-gray-200 shadow-lg hover:border-teal-300" 
                  : "bg-[#111] border-[#222] shadow-lg hover:border-teal-500/40"
                }
              `}>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${isLight ? "bg-[url('/images/grid-dark.svg')]" : "bg-[url('/images/grid-light.svg')]"}`} style={{backgroundSize: '30px 30px'}}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-teal-500 transition-colors ${isLight ? "bg-teal-50 group-hover:bg-teal-100" : "bg-teal-900/20 group-hover:bg-teal-900/30"}`}>
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border flex items-center gap-2 ${isLight ? "bg-teal-50 text-teal-600 border-teal-100" : "bg-teal-900/10 text-teal-400 border-teal-500/20"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                      Compliance
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                    Data & ML platform advisory for Fintech
                  </h3>
                  <p className={`text-base leading-relaxed mb-8 flex-grow ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                    A Fintech startup engaged a fractional AI leader to shape its data platform, MLOps practices, and guardrails around risk, compliance, and reliability.
                  </p>

                   <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 w-full rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      {/* <section>
        <Testimonials
          variant="industry"
        // No items passed -> uses default global testimonials
        />
      </section> */}

      {/* =========================================
            SECTION 4: FINAL CTA (Fixed Heading & Contrast)
           ========================================= */}
      <section className="w-full py-10 px-6 lg:px-[60px] relative z-10">
        <div className="max-w-[1200px] mx-auto">

          <div
            className={`
                relative w-full rounded-[32px] border overflow-hidden
                ${isLight
                ? "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 shadow-xl" // Darker background for Light Mode
                : "bg-[#0f0f0f] border-purple-900/30 shadow-2xl shadow-black"
              }
              `}
          >
            {/* Subtle Background Gradients */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16 gap-12">

              {/* Left Content */}
              <div className="lg:w-1/2 text-left">
                {/* Fixed: Increased line-height to 'leading-normal' to stop collapsing */}
                <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-6 leading-normal ${isLight ? "text-gray-900" : "text-white"}`}>
                  Ready for your first <br /><br />
                  <span className="text-purple-600">AI squad?</span>
                </h2>

                <p className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-[500px] ${isLight ? "text-gray-600" : "text-gray-300"}`}>
                  Share your product context and priorities, and get matched with a tailored GenSquad pod within 48 Hours. Start with a focused initiative, prove the value, and scale from there.
                </p>

                <Link to="/talent">
                  <Button
                    text="Start Hiring"
                    text_font_size="18"
                    text_font_weight="600"
                    text_color="#ffffff"
                    fill_background="linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)"
                    padding="18px 48px"
                    border_border_radius="12px"
                    className="shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              {/* Right Visual - Clean "Match Card" */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className={`
                    relative w-full max-w-[340px] p-6 rounded-3xl border backdrop-blur-sm
                    ${isLight
                    ? "bg-white border-gray-200 shadow-lg" // Card stays white to pop against the darker gray container
                    : "bg-[#1a1a1a]/90 border-white/10 shadow-2xl"
                  }
                  `}>

                  {/* Header of Card */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${isLight ? "text-gray-900" : "text-white"}`}>GenSquad Pod</div>
                        <div className="text-xs text-green-500 font-bold flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Available Now
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Squad Members List */}
                  <div className="space-y-4">
                    {/* Member 1 */}
                    <div className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${isLight ? "bg-gray-50 hover:bg-gray-100" : "bg-black/40 hover:bg-black/60"}`}>
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">AI</div>
                      <div className="flex-1">
                        <div className={`text-sm font-bold ${isLight ? "text-gray-800" : "text-gray-200"}`}>Senior AI Engineer</div>
                        <div className="text-xs text-gray-500">LLM & RAG Specialist</div>
                      </div>
                    </div>
                    {/* Member 2 */}
                    <div className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${isLight ? "bg-gray-50 hover:bg-gray-100" : "bg-black/40 hover:bg-black/60"}`}>
                      <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">DE</div>
                      <div className="flex-1">
                        <div className={`text-sm font-bold ${isLight ? "text-gray-800" : "text-gray-200"}`}>Data Engineer</div>
                        <div className="text-xs text-gray-500">Pipeline Architecture</div>
                      </div>
                    </div>
                  </div>

                  {/* Success Metric */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-center">
                    <div className={`text-xs uppercase tracking-wider font-bold mb-1 ${isLight ? "text-gray-400" : "text-gray-500"}`}>Match Time</div>
                    <div className="text-3xl font-space font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                      &lt; 48 Hours
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FractionalCTO;