import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTheme } from "../../hooks/useTheme";
import Button from "../../components/ui/Button";
import Testimonials from "../../features/gtm/landing/Testimonials";

const WhyUs = () => {
    const { isLight } = useTheme();

    return (
        <div className="w-full min-h-screen relative selection:bg-purple-500/30">
            <Helmet>
                <title>Why Us | GenSquad</title>
                <meta name="description" content="Discover why leading startups choose GenSquad for building high-performance AI teams." />
            </Helmet>

            {/* ==============================================================================
          🌍 GLOBAL BACKGROUND (Fixed & Seamless)
         ============================================================================== */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className={`absolute inset-0 ${isLight ? "bg-white" : "bg-[#050505]"}`}></div>

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: isLight
                            ? `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`
                            : `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Ambient Gradient Glows */}
                <div className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] rounded-full blur-[120px] ${isLight ? "bg-purple-500/10" : "bg-purple-900/15"}`}></div>
                <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] ${isLight ? "bg-blue-500/10" : "bg-blue-900/10"}`}></div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10">

                {/* =========================================
            SECTION 1: HERO - THE "PLUG-IN" VISUAL
           ========================================= */}
                <section className="w-full pt-20 pb-10 px-6 lg:px-[60px] overflow-hidden">
                    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* --- LEFT CONTENT (Text) --- */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">

                            {/* Badge */}
                            <div className={`
                inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8
                ${isLight
                                    ? "bg-purple-50 border-purple-200 text-purple-700"
                                    : "bg-purple-900/20 border-purple-500/30 text-purple-300"
                                }
              `}>
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                                <span className="text-xs font-bold tracking-wide uppercase font-space">The GenSquad Advantage</span>
                            </div>

                            {/* Headline */}
                            <h1 className={`
                font-space font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-6
                ${isLight ? "text-gray-900" : "text-white"}
              `}>
                                Why AI-first teams <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                                    choose GenSquad
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className={`
                text-lg sm:text-xl leading-relaxed mb-10 max-w-[580px]
                ${isLight ? "text-gray-600" : "text-[#bababa]"}
              `}>
                                GenSquad plugs senior, pre‑vetted AI and AdTech engineers directly into your roadmap, so you can ship reliable products faster, without gambling on unknown talent.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link to="/talent">
                                    <Button
                                        text="Start Hiring →"
                                        text_font_size="18"
                                        text_font_weight="600"
                                        text_color="#ffffff"
                                        fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
                                        padding="16px 48px"
                                        border_border_radius="12px"
                                        className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform w-full sm:w-auto"
                                    />
                                </Link>
                               
                            </div>
                        </div>

                        {/* --- RIGHT VISUAL (Reliable "IDE Import" UI) --- */}
                        <div className="w-full lg:w-1/2 relative flex items-center justify-center">

                            {/* Background Glow */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full blur-[100px] opacity-40 ${isLight ? "bg-purple-200" : "bg-purple-900"}`}></div>

                            {/* Main Container: The IDE Window */}
                            <div className={`
                relative w-full max-w-[550px] rounded-2xl border overflow-hidden shadow-2xl
                ${isLight
                                    ? "bg-white border-gray-200 shadow-purple-500/10"
                                    : "bg-[#0f0f0f] border-[#333] shadow-black"
                                }
              `}>

                                {/* Window Header */}
                                <div className={`h-10 border-b flex items-center px-4 gap-2 ${isLight ? "bg-gray-50 border-gray-200" : "bg-[#1a1a1a] border-[#333]"}`}>
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className={`ml-4 text-[10px] font-mono opacity-50 ${isLight ? "text-black" : "text-white"}`}>team_integration.tsx</div>
                                </div>

                                {/* IDE Body */}
                                <div className="p-6 md:p-8 font-mono text-sm relative">
                                    {/* Grid Lines inside IDE */}
                                    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isLight ? "bg-black" : "bg-white"}`} style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, currentColor 25%, currentColor 26%, transparent 27%, transparent 74%, currentColor 75%, currentColor 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, currentColor 25%, currentColor 26%, transparent 27%, transparent 74%, currentColor 75%, currentColor 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>

                                    {/* Code Line 1 */}
                                    <div className="flex gap-4 mb-4 opacity-50">
                                        <span className="text-gray-500 select-none">01</span>
                                        <span className={isLight ? "text-purple-700" : "text-purple-400"}>import</span>
                                        <span className={isLight ? "text-gray-800" : "text-gray-300"}>{`{ GenSquad }`}</span>
                                        <span className={isLight ? "text-purple-700" : "text-purple-400"}>from</span>
                                        <span className="text-green-500">'@talent/elite'</span>;
                                    </div>

                                    {/* Code Line 2 */}
                                    <div className="flex gap-4 mb-8 opacity-50">
                                        <span className="text-gray-500 select-none">02</span>
                                        <span className={isLight ? "text-blue-600" : "text-blue-400"}>const</span>
                                        <span className={isLight ? "text-yellow-600" : "text-yellow-400"}>teamVelocity</span>
                                        <span className={isLight ? "text-gray-800" : "text-gray-300"}>=</span>
                                        <span className={isLight ? "text-purple-700" : "text-purple-400"}>await</span>
                                        <span className={isLight ? "text-gray-800" : "text-gray-300"}>GenSquad.deploy();</span>
                                    </div>

                                    {/* Visual: The "Imported" Card (Centerpiece) */}
                                    <div className={`
                    relative p-5 rounded-xl border-2 flex items-center gap-4 transition-transform hover:scale-[1.02] duration-300
                    ${isLight
                                            ? "bg-white border-purple-200 shadow-xl"
                                            : "bg-[#161616] border-purple-500/40 shadow-xl shadow-purple-900/20"
                                        }
                  `}>
                                        {/* Verified Badge */}
                                        <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md">
                                            IMPORTED
                                        </div>

                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[2px]">
                                            <img src="/images/img_ellipse_1.png" className="w-full h-full rounded-full object-cover border-2 border-white dark:border-black" alt="Engineer" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className={`text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Senior AI Engineer</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-xs px-2 py-0.5 rounded ${isLight ? "bg-gray-100 text-gray-600" : "bg-[#222] text-gray-300"}`}>Python</span>
                                                <span className={`text-xs px-2 py-0.5 rounded ${isLight ? "bg-gray-100 text-gray-600" : "bg-[#222] text-gray-300"}`}>TensorFlow</span>
                                            </div>
                                        </div>

                                        {/* Status Indicator */}
                                        <div className="hidden sm:block text-right">
                                            <div className="text-[10px] uppercase font-bold text-gray-500 mb-1">Status</div>
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-green-500">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                Ready
                                            </div>
                                        </div>
                                    </div>

                                    {/* Code Line 3 (Closing) */}
                                    <div className="flex gap-4 mt-8 opacity-50">
                                        <span className="text-gray-500 select-none">03</span>
                                        <span className="text-gray-400">// Deployment successful in &lt;48h</span>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* =========================================
            SECTION 2: SPECIALIST VS GENERALIST (Talent Metrics Dashboard - Fixed Image Border)
           ========================================= */}
                <section className="w-full py-10 px-6 lg:px-[60px] relative z-10">
                    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* --- LEFT CONTENT --- */}
                        <div className="w-full lg:w-1/2 text-left">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-blue-900/20 text-blue-300 border-blue-500/20"}`}>
                                BUILT FOR AI, NOT GENERIC DEV WORK
                            </div>
                            <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-6  ${isLight ? "text-gray-900" : "text-white"}`}>
                                Specialist AI squads for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">AdTech</span>
                            </h2>
                            <p className={`text-lg sm:text-xl leading-relaxed mb-10 ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                                Skip generalists who are learning on your data. GenSquad brings senior engineers who live in AI, data, and AdTech, built around the growth use cases your team runs every day.
                            </p>

                            {/* High-Tech Bullet Points */}
                            <ul className="space-y-6">
                                {[
                                    "Deep ML, data engineering, and MLOps experience",
                                    "Proven work across AdTech, MarTech, and analytics",
                                    "Comfortable owning complex, high-volume data systems"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <div className={`relative w-6 h-6 mt-1 rounded-full flex items-center justify-center ${isLight ? "bg-blue-100 text-blue-600" : "bg-blue-900/30 text-blue-400"}`}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className={`text-lg leading-relaxed ${isLight ? "text-gray-800" : "text-gray-200"}`}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* --- RIGHT VISUAL: TALENT METRICS DASHBOARD (Reliable UI) --- */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                            {/* Main Card Container */}
                            <div className={`
                 relative w-full max-w-[500px] rounded-[24px] border p-8 shadow-2xl overflow-hidden
                 ${isLight ? "bg-white border-gray-200" : "bg-[#111] border-[#333]"}
               `}>
                                {/* Decorative background blur */}
                                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-40 ${isLight ? "bg-blue-200" : "bg-blue-900"}`}></div>

                                {/* Card Header: Profile - FIXED IMAGE BORDER */}
                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    {/* Gradient Border Container with padding */}
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-[3px]">
                                        {/* Image itself has no border now, just fills the padded container */}
                                        <img src="/images/img_ellipse_1.png" className="w-full h-full rounded-[13px] object-cover" alt="Senior Engineer" />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Senior AI Architect</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className={`text-xs px-2 py-0.5 rounded font-medium ${isLight ? "bg-gray-100 text-gray-600" : "bg-[#222] text-gray-400"}`}>10+ Years Exp</span>
                                            <span className={`text-xs px-2 py-0.5 rounded font-bold text-green-600 ${isLight ? "bg-green-50" : "bg-green-900/20"}`}>Verified</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Bars */}
                                <div className="space-y-6 relative z-10">

                                    {/* Metric 1 */}
                                    <div>
                                        <div className="flex justify-between text-sm font-bold mb-2">
                                            <span className={isLight ? "text-gray-700" : "text-gray-300"}>AdTech Domain Mastery</span>
                                            <span className="text-blue-500">98%</span>
                                        </div>
                                        <div className={`w-full h-2 rounded-full ${isLight ? "bg-gray-100" : "bg-[#222]"}`}>
                                            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 w-[98%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        </div>
                                    </div>

                                    {/* Metric 2 */}
                                    <div>
                                        <div className="flex justify-between text-sm font-bold mb-2">
                                            <span className={isLight ? "text-gray-700" : "text-gray-300"}>MLOps & Infrastructure</span>
                                            <span className="text-purple-500">95%</span>
                                        </div>
                                        <div className={`w-full h-2 rounded-full ${isLight ? "bg-gray-100" : "bg-[#222]"}`}>
                                            <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-[95%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                        </div>
                                    </div>

                                    {/* Metric 3 */}
                                    <div>
                                        <div className="flex justify-between text-sm font-bold mb-2">
                                            <span className={isLight ? "text-gray-700" : "text-gray-300"}>High-Volume Data Systems</span>
                                            <span className="text-cyan-500">99%</span>
                                        </div>
                                        <div className={`w-full h-2 rounded-full ${isLight ? "bg-gray-100" : "bg-[#222]"}`}>
                                            <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[99%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                                        </div>
                                    </div>

                                </div>

                                {/* Skills Footer */}
                                <div className={`mt-8 pt-6 border-t flex flex-wrap gap-2 ${isLight ? "border-gray-100" : "border-[#222]"}`}>
                                    {['Apache Spark', 'Kafka', 'TensorFlow', 'Kubernetes'].map((skill, i) => (
                                        <span key={i} className={`text-xs px-3 py-1.5 rounded-lg border font-mono ${isLight ? "bg-gray-50 border-gray-200 text-gray-600" : "bg-[#1a1a1a] border-[#333] text-gray-400"}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* =========================================
            SECTION 3: VETTING PROCESS (Reliable Card Row)
           ========================================= */}
                <section className="w-full py-10 px-6 lg:px-[60px] relative z-10">
                    <div className="max-w-[1200px] mx-auto">

                        {/* 1. Header */}
                        <div className="text-center mb-10">
                            <div className={`inline-block px-3 py-.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-purple-900/20 text-purple-300 border-purple-500/20"}`}>
                                A VETTING PROCESS YOU CAN TRUST
                            </div>
                            <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-6 max-w-[800px] mx-auto ${isLight ? "text-gray-900" : "text-white"}`}>
                                From 100% applicants to the 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-400"> Top 2% Elite</span>
                            </h2>
                            <p className={`text-lg max-w-[700px] mx-auto leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                                Every engineer starts with a rigorous background and experience check. Only proven senior profiles move forward.
                            </p>
                        </div>

                        {/* 2. The Funnel Cards (Horizontal Layout - No Left/Right Split) */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                            {/* --- CARD 1: 100% --- */}
                            <div className={`
                relative p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2
                ${isLight ? "bg-white border-gray-200 shadow-xl" : "bg-[#111] border-[#222] shadow-2xl"}
              `}>
                                <div className="w-16 h-16 mb-6 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-500 border-4 border-gray-200">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </div>
                                <div className={`text-3xl font-space font-bold mb-2 ${isLight ? "text-gray-400" : "text-gray-500"}`}>100%</div>
                                <h3 className={`text-lg font-bold mb-3 ${isLight ? "text-gray-900" : "text-white"}`}>Resume Review</h3>
                                <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                                    Manual review of LinkedIn, GitHub, and commercial experience. We filter out anyone without proven seniority.
                                </p>
                            </div>

                            {/* --- CARD 2: 15% --- */}
                            <div className={`
                relative p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2
                ${isLight ? "bg-white border-purple-100 shadow-xl" : "bg-[#111] border-[#222] shadow-2xl"}
              `}>
                                <div className="w-16 h-16 mb-6 rounded-full bg-purple-50 flex items-center justify-center text-2xl font-bold text-purple-500 border-4 border-purple-100">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className={`text-3xl font-space font-bold mb-2 ${isLight ? "text-purple-600" : "text-purple-500"}`}>15%</div>
                                <h3 className={`text-lg font-bold mb-3 ${isLight ? "text-gray-900" : "text-white"}`}>Communication</h3>
                                <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                                    Live screening for English fluency and remote-readiness. If they can't collaborate clearly, they don't pass.
                                </p>
                            </div>

                            {/* --- CARD 3: 5% --- */}
                            <div className={`
                relative p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2
                ${isLight ? "bg-white border-blue-100 shadow-xl" : "bg-[#111] border-[#222] shadow-2xl"}
              `}>
                                <div className="w-16 h-16 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-2xl font-bold text-blue-500 border-4 border-blue-100">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                </div>
                                <div className={`text-3xl font-space font-bold mb-2 ${isLight ? "text-blue-600" : "text-blue-500"}`}>5%</div>
                                <h3 className={`text-lg font-bold mb-3 ${isLight ? "text-gray-900" : "text-white"}`}>Tech Interview</h3>
                                <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                                    Senior-level architectural review and live coding. No LeetCode spam—real production challenges only.
                                </p>
                            </div>

                            {/* --- CARD 4: TOP 2% (The Winner) --- */}
                            <div className={`
                relative p-6 rounded-3xl border-2 flex flex-col items-center text-center transition-all duration-300 transform scale-105 shadow-2xl
                ${isLight ? "bg-white border-green-400 shadow-green-500/20" : "bg-[#0f0f0f] border-green-500 shadow-green-500/20"}
              `}>
                                {/* Glowing Badge */}
                                <div className="absolute -top-3 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                    GenSquad Elite
                                </div>

                                <div className="w-16 h-16 mb-6 rounded-full bg-green-50 flex items-center justify-center text-2xl font-bold text-green-600 border-4 border-green-100 relative">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    {/* Subtle Pulse - Reliable CSS */}
                                    <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-0 animate-ping-slow"></div>
                                </div>

                                <div className={`text-3xl font-space font-bold mb-2 text-green-500`}>Top 2%</div>
                                <h3 className={`text-lg font-bold mb-3 ${isLight ? "text-gray-900" : "text-white"}`}>Listed & Verified</h3>
                                <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                                    The final best. Skills validated, experience verified, and ready to deploy into your roadmap instantly.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* 🎬 Section-Specific Animation (Only simple, reliable ones) */}
                <style>{`
          @keyframes ping-slow {
            75%, 100% { transform: scale(1.4); opacity: 0; }
          }
          .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        `}</style>

                {/* =========================================
            SECTION 4: INDUSTRIES GRID (Improved Icons & Button)
           ========================================= */}
                <section className="w-full py-10 px-6 lg:px-[60px] relative z-10">
                    <div className="max-w-[1440px] mx-auto">

                        {/* 1. Header */}
                        <div className="text-center mb-10">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-blue-900/20 text-blue-300 border-blue-500/20"}`}>
                                DOMAIN EXPERTISE
                            </div>
                            <h2 className={`text-4xl sm:text-5xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
                                AI squads for the industries that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">move fast</span>
                            </h2>
                            <p className={`text-lg sm:text-xl max-w-[700px] mx-auto leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                                GenSquad matches you with engineers who understand your domain, data, and growth challenges—not just the tech.
                            </p>
                        </div>

                        {/* 2. Industry Nexus Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

                            {[
                                {
                                    title: "AdTech / MarTech",
                                    desc: "Optimise bidding, targeting, attribution, and creative with AI‑powered pipelines.",
                                    iconColor: "text-blue-500",
                                    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                },
                                {
                                    title: "E‑commerce",
                                    desc: "Power smarter search, recommendations, pricing, and merchandising at scale.",
                                    iconColor: "text-purple-500",
                                    iconPath: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"
                                },
                                {
                                    title: "EdTech",
                                    desc: "Personalise learning paths, assessments, and content with data‑driven insights.",
                                    iconColor: "text-green-500",
                                    iconPath: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                                },
                                {
                                    title: "Entertainment",
                                    desc: "Build discovery, ranking, and engagement systems for audiences at scale.",
                                    iconColor: "text-pink-500",
                                    iconPath: "M5 3l14 9-14 9V3z"
                                },
                                {
                                    title: "Fintech",
                                    desc: "Support risk, fraud, credit, and customer intelligence with robust ML.",
                                    iconColor: "text-indigo-500",
                                    iconPath: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                },
                                {
                                    title: "Gaming",
                                    desc: "Drive matchmaking, in‑game economy tuning, and player lifecycle models.",
                                    iconColor: "text-violet-500",
                                    iconPath: "M6 11h4M8 9v4 M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M18 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M2 12h20 M2 12a10 10 0 0 1 10-10 M22 12a10 10 0 0 1-10 10"
                                },
                                {
                                    title: "Health Tech",
                                    desc: "Enable compliant, data‑driven experiences and decision support systems.",
                                    iconColor: "text-teal-500",
                                    iconPath: "M22 12h-4l-3 9L9 3l-3 9H2"
                                },
                                {
                                    title: "Marketplace",
                                    desc: "Optimise matching, liquidity, pricing, and trust with marketplace‑specific AI.",
                                    iconColor: "text-orange-500",
                                    iconPath: "M3 3h18v18H3z M3 9h18 M9 21V9"
                                },
                            ].map((item, index) => (
                                <div key={index} className={`
                  group relative p-8 rounded-[32px] border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full
                  ${isLight
                                        ? "bg-white/80 border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-200"
                                        : "bg-[#111]/80 border-[#222] shadow-lg hover:shadow-2xl hover:border-blue-500/30"
                                    }
                `}>

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* SIMPLIFIED ICON CONTAINER */}
                                        {/* Removed double gradient border. Now a simple clean box. */}
                                        <div className={`
                      w-12 h-12 mb-6 rounded-xl flex items-center justify-center border transition-all duration-500
                      ${isLight
                                                ? "bg-gray-50 border-gray-100 group-hover:bg-white group-hover:shadow-md"
                                                : "bg-white/5 border-white/10 group-hover:bg-white/10"
                                            }
                    `}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${item.iconColor}`}>
                                                <path d={item.iconPath} />
                                            </svg>
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-xl font-bold mb-3 transition-colors ${isLight ? "text-gray-900 group-hover:text-blue-600" : "text-white group-hover:text-blue-400"}`}>
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className={`text-sm leading-relaxed flex-grow transition-colors ${isLight ? "text-gray-600 group-hover:text-gray-900" : "text-[#888] group-hover:text-gray-300"}`}>
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Bottom glow bar */}
                                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-current opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.iconColor}`}></div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
                {/* =========================================
            SECTION 5: TESTIMONIALS (Reused Component)
           ========================================= */}
                <Testimonials variant="industry" />

                {/* =========================================
            SECTION 6: Final CTA
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
        </div>
    );
};

export default WhyUs;