import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTheme } from "../../hooks/useTheme";
import Button from "../../components/ui/Button";

const AboutUs = () => {
  const { isLight } = useTheme();

  return (
    <div className="w-full min-h-screen relative selection:bg-purple-500/30 overflow-hidden">
      <Helmet>
        <title>About Us | GenSquad</title>
        <meta name="description" content="GenSquad embeds specialist AI teams into your product org to ship faster and turn GenAI ideas into reality." />
      </Helmet>

      {/* ==============================================================================
          🌍 GLOBAL BACKGROUND (Fixed & Seamless)
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
            SECTION 1: HERO - THE AI SHIPPING ENGINE
           ========================================= */}
        <section className="w-full pt-20 pb-5 px-6 lg:px-[60px]">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* --- LEFT CONTENT --- */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left animate-fade-in-up">
              
              {/* Pill Badge */}
              <div className={`
                inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8
                ${isLight 
                  ? "bg-white border-purple-200 text-purple-700 shadow-sm" 
                  : "bg-purple-900/20 border-purple-500/30 text-purple-300"
                }
              `}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <span className="text-xs font-bold tracking-wide uppercase font-space">Built for speed</span>
              </div>

              {/* Headline */}
              <h1 className={`
                font-space font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-6
                ${isLight ? "text-gray-900" : "text-white"}
              `}>
                AI squads that ship <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient-x">
                  real outcomes.
                </span>
              </h1>

              {/* Subheadline */}
              <p className={`
                text-lg sm:text-xl leading-relaxed mb-10 max-w-[550px]
                ${isLight ? "text-gray-600" : "text-[#bababa]"}
              `}>
                GenSquad embeds specialist AI teams into your product org so you can move faster, de‑risk experiments, and turn GenAI ideas into shipped features in weeks, not quarters.
              </p>

              {/* CTA Button */}
              <Link to="/talent">
                <Button
                  text="Explore Talents"
                  text_font_size="18"
                  text_font_weight="600"
                  text_color="#ffffff"
                  fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
                  padding="16px 48px"
                  border_border_radius="12px"
                  className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            {/* --- RIGHT VISUAL: THE DELIVERY PIPELINE --- */}
            <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center animate-fade-in delay-200">
              
              {/* Background Glow */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px] opacity-40 ${isLight ? "bg-blue-200" : "bg-blue-900"}`}></div>

              {/* The Pipeline Container */}
              <div className="relative w-full h-full max-w-[600px] perspective-1000">
                
                {/* 1. INPUT STAGE (Ideas) - Floating Left */}
                <div className={`absolute top-[20%] left-0 p-4 rounded-2xl backdrop-blur-md border animate-float-slow ${isLight ? "bg-white/60 border-purple-100" : "bg-[#111]/60 border-purple-900/30"}`}>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">💡</div>
                      <div className={`text-xs font-bold ${isLight ? "text-purple-900" : "text-purple-200"}`}>Raw Ideas</div>
                   </div>
                   {/* Abstract shapes floating in */}
                   <div className="absolute -left-8 top-4 w-6 h-6 rounded-full bg-purple-400/30 blur-sm animate-pulse"></div>
                   <div className="absolute -left-4 top-12 w-4 h-4 rounded-full bg-blue-400/30 blur-sm animate-pulse delay-300"></div>
                </div>

                {/* Connection Line 1 */}
                <svg className="absolute top-[30%] left-[20%] w-[30%] h-20" viewBox="0 0 100 50">
                   <path d="M0,25 C30,25 70,25 100,25" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-dash" />
                   <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient></defs>
                </svg>

                {/* 2. PROCESSING STAGE (The Squad Core) - Center */}
                <div className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[280px] h-[180px] rounded-[30px] border-2 backdrop-blur-xl flex flex-col items-center justify-center z-20 shadow-2xl
                  ${isLight ? "bg-white/80 border-blue-400/50 shadow-blue-500/20" : "bg-[#0a0a0a]/80 border-blue-500/50 shadow-blue-500/20"}
                `}>
                   {/* Header */}
                   <div className={`absolute -top-4 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-2 shadow-lg border-2 ${isLight ? "border-white" : "border-[#0a0a0a]"}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      GenSquad Core
                   </div>

                   {/* Squad Agents Icons */}
                   <div className="flex gap-4 mt-4 relative">
                      {/* Connecting beams between agents */}
                      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-500/30 -z-10"></div>
                      
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] relative">
                           <div className={`w-full h-full rounded-full flex items-center justify-center ${isLight ? "bg-white" : "bg-[#0a0a0a]"}`}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                           </div>
                           {/* Activity Dot */}
                           <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#0a0a0a] animate-ping"></div>
                        </div>
                      ))}
                   </div>
                   <div className={`mt-3 text-xs font-bold uppercase tracking-wider ${isLight ? "text-blue-900/60" : "text-blue-200/60"}`}>Processing & De-risking</div>
                </div>

                {/* Connection Line 2 */}
                <svg className="absolute top-[45%] right-[20%] w-[30%] h-20" viewBox="0 0 100 50">
                   <path d="M0,25 C30,25 70,25 100,25" stroke="url(#grad2)" strokeWidth="3" fill="none" strokeDasharray="4,4" className="animate-dash-reverse" />
                   <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#ec4899" stopOpacity="1" /></linearGradient></defs>
                </svg>
                
                {/* 3. OUTPUT STAGE (Shipped Feature) - Floating Right */}
                <div className={`
                  absolute top-[35%] right-0 p-6 rounded-[24px] border-2 backdrop-blur-md animate-float-delayed z-30
                  transform hover:scale-110 transition-transform duration-300
                  ${isLight 
                    ? "bg-white/90 border-pink-500 shadow-xl shadow-pink-500/20" 
                    : "bg-[#0a0a0a]/90 border-pink-500 shadow-xl shadow-pink-500/20"
                  }
                `}>
                   {/* Launch Trajectory Line */}
                   <svg className="absolute -top-10 -right-10 w-24 h-24 text-pink-500/50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6">
                      <path d="M0,100 Q50,0 100,0" markerEnd="url(#arrowhead)" />
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                        </marker>
                      </defs>
                   </svg>

                   <div className="flex flex-col items-center text-center relative z-10">
                      <div className="w-14 h-14 mb-3 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                      <h3 className={`text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Shipped Feature</h3>
                      <span className="text-xs font-bold text-pink-500 uppercase tracking-wider mt-1">Live in weeks</span>
                   </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            SECTION 2: WHY GENSQUAD EXISTS (Redesigned - Dynamic Integration)
           ========================================= */}
        <section className="w-full py-10 px-6 lg:px-[60px] relative overflow-hidden">
          
          {/* 🌟 Background Connecting Beams (Visualizing Integration) */}
          <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center" aria-hidden="true">
             {/* Central Core Glow */}
             <div className={`absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-40 ${isLight ? "bg-purple-300" : "bg-purple-900/60"} animate-pulse-slow`}></div>
             
             {/* Connecting Lines SVG */}
             <svg className="w-full max-w-[1200px] h-[800px] opacity-60" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M600 200 L250 500" stroke="url(#beamGrad1)" strokeWidth="2" strokeDasharray="10 10" className="animate-dash-flow" />
                <path d="M600 200 L600 500" stroke="url(#beamGrad2)" strokeWidth="2" strokeDasharray="10 10" className="animate-dash-flow delay-300" />
                <path d="M600 200 L950 500" stroke="url(#beamGrad3)" strokeWidth="2" strokeDasharray="10 10" className="animate-dash-flow delay-700" />
                <defs>
                   <linearGradient id="beamGrad1" x1="600" y1="200" x2="250" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor={isLight ? "#a855f7" : "#a855f7"} stopOpacity="0"/><stop offset="1" stopColor={isLight ? "#3b82f6" : "#3b82f6"}/></linearGradient>
                   <linearGradient id="beamGrad2" x1="600" y1="200" x2="600" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor={isLight ? "#a855f7" : "#a855f7"} stopOpacity="0"/><stop offset="1" stopColor={isLight ? "#a855f7" : "#a855f7"}/></linearGradient>
                   <linearGradient id="beamGrad3" x1="600" y1="200" x2="950" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor={isLight ? "#a855f7" : "#a855f7"} stopOpacity="0"/><stop offset="1" stopColor={isLight ? "#ec4899" : "#ec4899"}/></linearGradient>
                </defs>
             </svg>
          </div>


          <div className="max-w-[1200px] mx-auto relative z-10">
            
            {/* Header with Central Anchor */}
            <div className="text-center mb-24 relative">

              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-blue-900/20 text-blue-300 border-blue-500/20"}`}>
                WHAT WE BUILD FOR
              </div>
              <h2 className={`text-4xl sm:text-6xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
                Why GenSquad exists
              </h2>
              <p className={`text-lg sm:text-xl max-w-[800px] mx-auto leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                Every product team has AI ideas stuck on the whiteboard. GenSquad turns those stalled concepts into shipped, measurable outcomes by plugging in AI squads that operate as part of your team.
              </p>
            </div>

            {/* Dynamic Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-10">
              
              {/* Card 1: Move with the market (Scanner/Radar Visual) */}
              <div className={`
                group relative p-8 rounded-[32px] border-2 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
                ${isLight 
                  ? "bg-white/60 border-purple-100/50 shadow-xl shadow-purple-500/10 hover:border-purple-300/80 hover:shadow-purple-500/30" 
                  : "bg-[#111]/60 border-purple-900/30 shadow-xl shadow-purple-900/10 hover:border-purple-500/50 hover:shadow-purple-500/20"
                }
              `}>
                {/* Animated Abstract Visual */}
                <div className="h-32 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5">
                  <div className={`absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity ${isLight ? "bg-purple-500/10" : "bg-purple-500/20"}`}></div>
                  {/* CSS Radar Scan Animation */}
                  <div className="w-24 h-24 relative transform-style-3d rotate-x-60 animate-spin-slow-reverse">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-500/30"></div>
                    <div className="absolute inset-4 rounded-full border-2 border-purple-500/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent w-full h-1/2 bottom-1/2 origin-bottom animate-scan"></div>
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500`}>
                  Move with the market
                </h3>
                <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                  GenAI and LLMs change weekly. We bring practitioners who live in this space so you can <span className="text-purple-500 font-medium">respond to change</span> instantly.
                </p>
              </div>

              {/* Card 2: Build more, hire less (Elastic/Breathing Lattice Visual) */}
              <div className={`
                group relative p-8 rounded-[32px] border-2 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
                ${isLight 
                  ? "bg-white/60 border-blue-100/50 shadow-xl shadow-blue-500/10 hover:border-blue-300/80 hover:shadow-blue-500/30" 
                  : "bg-[#111]/60 border-blue-900/30 shadow-xl shadow-blue-900/10 hover:border-blue-500/50 hover:shadow-blue-500/20"
                }
              `}>
                {/* Animated Abstract Visual */}
                <div className="h-32 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
                   <div className={`absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity ${isLight ? "bg-blue-500/10" : "bg-blue-500/20"}`}></div>
                   {/* CSS Elastic Lattice Animation */}
                   <div className="relative w-20 h-20 animate-breathe">
                      <div className="absolute inset-0 border-2 border-blue-400/40 rounded-xl transform rotate-45 group-hover:rotate-90 transition-transform duration-[2s]"></div>
                      <div className="absolute inset-2 border-2 border-blue-500/60 rounded-xl transform -rotate-45 group-hover:-rotate-90 transition-transform duration-[2s]"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                   </div>
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500`}>
                  Build more, hire less
                </h3>
                <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                  Avoid over-hiring permanent roles. Flex up or down with GenSquad pods as a <span className="text-blue-500 font-medium">flexible variable cost</span>.
                </p>
              </div>

              {/* Card 3: Ship fast (Velocity Stream Visual) */}
              <div className={`
                group relative p-8 rounded-[32px] border-2 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
                ${isLight 
                  ? "bg-white/60 border-pink-100/50 shadow-xl shadow-pink-500/10 hover:border-pink-300/80 hover:shadow-pink-500/30" 
                  : "bg-[#111]/60 border-pink-900/30 shadow-xl shadow-pink-900/10 hover:border-pink-500/50 hover:shadow-pink-500/20"
                }
              `}>
                {/* Animated Abstract Visual */}
                <div className="h-32 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/5 to-purple-500/5">
                   <div className={`absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity ${isLight ? "bg-pink-500/10" : "bg-pink-500/20"}`}></div>
                   {/* CSS Velocity Stream Animation */}
                   <div className="relative w-full h-full flex justify-center items-end gap-2 pb-4 mask-gradient-b">
                      <div className="w-2 h-12 bg-pink-400/40 rounded-full animate-stream-up" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-20 bg-pink-500/60 rounded-full animate-stream-up" style={{animationDelay: '0.3s'}}></div>
                      <div className="w-2 h-16 bg-pink-400/40 rounded-full animate-stream-up" style={{animationDelay: '0.5s'}}></div>
                      {/* Upward Arrow Head */}
                      <svg className="absolute top-4 text-pink-500 w-8 h-8 animate-bounce-small" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                   </div>
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-500`}>
                  Ship fast, see results
                </h3>
                <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                  Squads arrive with proven ways to discover and deliver so you can launch pilots and <span className="text-pink-500 font-medium">scale winners quickly</span>.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 🎬 Section-Specific Animations */}
        <style>{`
          .transform-style-3d { transform-style: preserve-3d; }
          .mask-gradient-b { mask-image: linear-gradient(to top, black 60%, transparent 100%); }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
          }
          .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }

          @keyframes spin-slow { 100% { transform: translateX(-50%) rotate(360deg); } }
          .animate-spin-slow { animation: spin-slow 12s linear infinite; }
          
          @keyframes spin-slow-reverse { 100% { transform: rotateX(60deg) rotate(-360deg); } }
          .animate-spin-slow-reverse { animation: spin-slow-reverse 15s linear infinite; }

          @keyframes dash-flow {
            to { stroke-dashoffset: -200; }
          }
          .animate-dash-flow { animation: dash-flow 10s linear infinite; }

          @keyframes scan {
            0% { transform: rotate(0deg); opacity: 0.5; }
            50% { opacity: 1; }
            100% { transform: rotate(360deg); opacity: 0.5; }
          }
          .animate-scan { animation: scan 4s linear infinite; }

          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          .animate-breathe { animation: breathe 4s ease-in-out infinite; }

          @keyframes stream-up {
            0% { transform: translateY(100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-150%); opacity: 0; }
          }
          .animate-stream-up { animation: stream-up 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
          
          @keyframes bounce-small {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-small { animation: bounce-small 2s ease-in-out infinite; }
        `}</style>          
      </div>
      
      {/* Keyframe Animations (Local scope) */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(15px) rotate(-2deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        
        @keyframes dash { to { stroke-dashoffset: -100; } }
        @keyframes dash-reverse { to { stroke-dashoffset: 100; } }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-dash-reverse { animation: dash-reverse 20s linear infinite; }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 5s linear infinite;
        }
      `}</style>

      {/* =========================================
            SECTION 3: HOW GENSQUAD WORKS (Premium Bento Grid)
           ========================================= */}
        <section className="w-full py-10 px-6 lg:px-[60px] relative">
          <div className="max-w-[1200px] mx-auto relative z-10">
            
            {/* Header */}
            <div className="text-center mb-20">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-purple-900/20 text-purple-300 border-purple-500/20"}`}>
                OPERATING MODEL
              </div>
              <h2 className={`text-4xl sm:text-6xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                How GenSquad works
              </h2>
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>

                <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isLight ? "text-gray-900" : "text-white"}`}>
                  Embedded squads, <span className="text-blue-500">not vendors</span>
                </h3>
                <p className={`text-base leading-relaxed relative z-10 ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                  Squads join your ceremonies, tools, and roadmap. Collaboration feels like a natural extension of your team because we sync with your workflow, not the other way around.
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>

                <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isLight ? "text-gray-900" : "text-white"}`}>
                  Full‑stack <span className="text-purple-500">AI delivery</span>
                </h3>
                <p className={`text-base leading-relaxed relative z-10 ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                  From problem framing and data readiness to LLM integration and eval. The squad covers the entire lifecycle so you don't have to piece together fragmented roles.
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                </div>

                <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isLight ? "text-gray-900" : "text-white"}`}>
                  <span className="text-green-500">Outcome‑based</span> engagement
                </h3>
                <p className={`text-base leading-relaxed relative z-10 ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                  Work is framed around clear problem statements and business metrics, not just tickets and hours. We align our success with your product's impact.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

            </div>

          </div>
        </section>

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
                  <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-6  ${isLight ? "text-gray-900" : "text-white"}`}>
                    Ready for your first <br />
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
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
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

export default AboutUs;