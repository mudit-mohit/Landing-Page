import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../../components/ui/Button';

const HeroSection = ({ content, isLight, slug }) => {
    return (
        <section className="w-full pt-28 pb-16 px-6 lg:px-[60px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* --- LEFT CONTENT --- */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">
                    {content.badge && (
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 ${isLight ? "bg-purple-50 border-purple-200 text-purple-700" : "bg-purple-900/20 border-purple-500/30 text-purple-300"}`}>
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-wide uppercase font-space">{content.badge}</span>
                        </div>
                    )}
                    <h1 className={`font-space font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
                        {content.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 animate-gradient-x">
                            {content.titleHighlight}
                        </span>
                    </h1>
                    <p className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-[580px] ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                        {content.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="/talent">
                            <Button text={content.primaryCta} text_font_size="18" text_font_weight="600" text_color="#ffffff" fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)" padding="16px 48px" border_border_radius="12px" className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform w-full sm:w-auto" />
                        </Link>
                        {/* {content.secondaryCta && (
                            <Button text={content.secondaryCta} onClick={() => window.location.href = '/talent'} text_font_size="18" text_font_weight="600" text_color={isLight ? "#333" : "#fff"} fill_background="transparent" border_border={isLight ? "1px solid #e5e5e5" : "1px solid rgba(255,255,255,0.2)"} padding="16px 48px" border_border_radius="12px" className={`hover:scale-105 transition-transform w-full sm:w-auto ${isLight ? "hover:bg-gray-50" : "hover:bg-white/5"}`} />
                        )} */}
                    </div>
                </div>

                {/* --- RIGHT VISUAL --- */}
                <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">

                    {/* VISUAL 1: Team Augmentation (Velocity) */}
                    {slug === 'team-augmentation' && (
                        <>
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px] opacity-40 ${isLight ? "bg-purple-200" : "bg-purple-900"}`}></div>
                            <div className={`relative w-full max-w-[500px] rounded-[32px] border overflow-hidden shadow-2xl backdrop-blur-xl ${isLight ? "bg-white/60 border-purple-100/80 shadow-purple-500/10" : "bg-[#111]/60 border-white/10 shadow-black/50"}`}>
                                <div className={`p-6 border-b flex justify-between items-center ${isLight ? "border-gray-100 bg-white/50" : "border-white/5 bg-black/20"}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                        </div>
                                        <div>
                                            <div className={`text-xs font-bold uppercase tracking-wider ${isLight ? "text-gray-500" : "text-gray-400"}`}>Sprint Velocity</div>
                                            <div className={`text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Accelerated</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>+140%
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="space-y-2">
                                        <div className={`text-xs font-bold uppercase ${isLight ? "text-gray-400" : "text-gray-500"}`}>Your Core Team</div>
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (<div key={i} className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold ${isLight ? "bg-gray-100 border-white text-gray-600" : "bg-[#222] border-[#111] text-gray-400"}`}>Dev</div>))}
                                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold ${isLight ? "bg-gray-50 border-white text-gray-400" : "bg-[#1a1a1a] border-[#111] text-gray-600"}`}>+</div>
                                        </div>
                                    </div>
                                    <div className="relative py-4">
                                        <div className={`absolute top-1/2 left-0 w-full h-[2px] ${isLight ? "bg-gray-100" : "bg-[#222]"}`}></div>
                                        <div className="absolute top-1/2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 animate-beam-load"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className={`text-xs font-bold uppercase flex justify-between ${isLight ? "text-purple-600" : "text-purple-400"}`}><span>GenSquad Augmented</span><span className="animate-pulse">Connecting...</span></div>
                                        <div className="grid gap-3">
                                            <div className={`flex items-center justify-between p-3 rounded-xl border animate-slide-in-right ${isLight ? "bg-purple-50 border-purple-100" : "bg-purple-900/10 border-purple-500/20"}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[2px]"><img src="/images/img_ellipse_1.png" className="w-full h-full rounded-full object-cover border border-white dark:border-black" alt="AI" /></div>
                                                    <div><div className={`text-sm font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Senior AI Engineer</div><div className="text-xs text-purple-500">LLM Specialist</div></div>
                                                </div>
                                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div className={`flex items-center justify-between p-3 rounded-xl border animate-slide-in-right-delayed ${isLight ? "bg-blue-50 border-blue-100" : "bg-blue-900/10 border-blue-500/20"}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]"><div className={`w-full h-full rounded-full flex items-center justify-center text-[10px] font-bold ${isLight ? "bg-white text-blue-600" : "bg-black text-blue-400"}`}>DE</div></div>
                                                    <div><div className={`text-sm font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Data Engineer</div><div className="text-xs text-blue-500">Pipeline Arch.</div></div>
                                                </div>
                                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* VISUAL 2: Fully Managed Teams (Squad Orbit) */}
                    {slug === 'fully-managed-teams' && (
                        <div className="relative w-full h-[500px] flex items-center justify-center">
                            <div className={`absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-40 ${isLight ? "bg-blue-300" : "bg-blue-900"}`}></div>
                            <div className="relative w-[360px] h-[360px] animate-spin-ultra-slow">
                                <div className={`absolute inset-0 rounded-full border-2 border-dashed ${isLight ? "border-purple-200" : "border-purple-900/40"}`}></div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto">
                                    <div className={`animate-spin-reverse-ultra-slow p-3 rounded-2xl border shadow-lg flex items-center gap-3 whitespace-nowrap ${isLight ? "bg-white/90 border-purple-100" : "bg-[#111]/90 border-purple-500/30"}`}>
                                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">PM</div>
                                        <div className={`text-xs font-bold ${isLight ? "text-gray-800" : "text-white"}`}>Product Mgr</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-[15%] right-[0%] translate-x-1/2">
                                    <div className={`animate-spin-reverse-ultra-slow p-3 rounded-2xl border shadow-lg flex items-center gap-3 whitespace-nowrap ${isLight ? "bg-white/90 border-blue-100" : "bg-[#111]/90 border-blue-500/30"}`}>
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">TL</div>
                                        <div className={`text-xs font-bold ${isLight ? "text-gray-800" : "text-white"}`}>Tech Lead</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-[15%] left-[0%] -translate-x-1/2">
                                    <div className={`animate-spin-reverse-ultra-slow p-3 rounded-2xl border shadow-lg flex items-center gap-3 whitespace-nowrap ${isLight ? "bg-white/90 border-green-100" : "bg-[#111]/90 border-green-500/30"}`}>
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">QA</div>
                                        <div className={`text-xs font-bold ${isLight ? "text-gray-800" : "text-white"}`}>QA Engineer</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 flex flex-col items-center justify-center text-center shadow-2xl z-10 ${isLight ? "bg-white border-purple-50 text-gray-900 shadow-purple-500/20" : "bg-[#050505] border-purple-900/50 text-white shadow-purple-900/40"}`}>
                                <div className="text-3xl mb-1">🚀</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-purple-500">Your Product</div>
                                <div className={`text-sm font-medium mt-1 ${isLight ? "text-gray-500" : "text-gray-400"}`}>Roadmap</div>
                            </div>
                        </div>
                    )}



                    {/* ✅ 3. BUILD A TEAM VISUAL (The New Extraordinary Design) */}
                    {slug === 'build-a-team' && (
                        <div className="relative w-full max-w-[650px] transform transition-transform duration-500 hover:scale-[1.02]">

                            {/* --- BACKGROUND GLOW --- */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[90px] opacity-20 ${isLight ? "bg-blue-300" : "bg-purple-900"}`}></div>

                            {/* --- MAIN INTERFACE CONTAINER --- */}
                            <div className={`
                relative w-full rounded-[24px] border overflow-hidden shadow-2xl flex flex-col
                ${isLight ? "bg-white/80 border-white/50 backdrop-blur-xl shadow-purple-500/10" : "bg-[#0a0a0a]/90 border-white/10 backdrop-blur-xl shadow-black/80"}
              `}>

                                {/* 1. Header Bar */}
                                <div className={`h-14 border-b flex items-center justify-between px-6 ${isLight ? "border-gray-100 bg-white/50" : "border-white/5 bg-[#111]/50"}`}>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className={`text-[10px] font-mono tracking-widest uppercase opacity-50 ${isLight ? "text-gray-900" : "text-white"}`}>GenSquad Matcher v2.0</div>
                                </div>

                                {/* 2. Main Workspace */}
                                <div className="flex-1 p-8 grid grid-cols-12 gap-6 relative">

                                    {/* --- LEFT COL: REQUIREMENTS (Input) --- */}
                                    <div className="col-span-4 flex flex-col gap-4 z-10">
                                        <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${isLight ? "text-gray-400" : "text-gray-500"}`}>Requirements</div>

                                        {/* Requirement Card 1 */}
                                        <div className={`p-3 rounded-xl border flex items-center gap-3 animate-slide-in-right ${isLight ? "bg-white border-gray-100 shadow-sm" : "bg-[#151515] border-[#222]"}`}>
                                            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">Py</div>
                                            <div>
                                                <div className={`text-xs font-bold ${isLight ? "text-gray-800" : "text-gray-200"}`}>Python</div>
                                                <div className="text-[10px] text-gray-400">Expert Level</div>
                                            </div>
                                        </div>

                                        {/* Requirement Card 2 */}
                                        <div className={`p-3 rounded-xl border flex items-center gap-3 animate-slide-in-right-delayed ${isLight ? "bg-white border-gray-100 shadow-sm" : "bg-[#151515] border-[#222]"}`}>
                                            <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">TF</div>
                                            <div>
                                                <div className={`text-xs font-bold ${isLight ? "text-gray-800" : "text-gray-200"}`}>TensorFlow</div>
                                                <div className="text-[10px] text-gray-400">Senior Level</div>
                                            </div>
                                        </div>

                                        {/* Requirement Card 3 */}
                                        <div className={`p-3 rounded-xl border flex items-center gap-3 animate-slide-in-right-delayed ${isLight ? "bg-white border-gray-100 shadow-sm" : "bg-[#151515] border-[#222]"}`}>
                                            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">LLM</div>
                                            <div>
                                                <div className={`text-xs font-bold ${isLight ? "text-gray-800" : "text-gray-200"}`}>LLM Ops</div>
                                                <div className="text-[10px] text-gray-400">Architect</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- CENTER COL: PROCESSING ENGINE --- */}
                                    <div className="col-span-4 flex flex-col items-center justify-center relative z-10">
                                        <div className="relative w-24 h-24 flex items-center justify-center">
                                            {/* Spinning Rings */}
                                            <div className={`absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow ${isLight ? "border-purple-200" : "border-purple-500/30"}`}></div>
                                            <div className={`absolute inset-2 rounded-full border-2 border-dashed animate-spin-reverse-slow ${isLight ? "border-blue-200" : "border-blue-500/30"}`}></div>

                                            {/* Center Core */}
                                            <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10
                        ${isLight ? "bg-white text-purple-600 shadow-purple-200" : "bg-[#222] text-white shadow-purple-900/50"}
                      `}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            </div>
                                        </div>

                                        {/* Connecting Lines (CSS) */}
                                        <div className={`absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 -z-10 ${isLight ? "bg-gray-100" : "bg-[#222]"}`}></div>
                                        <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 -z-10 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
                                    </div>

                                    {/* --- RIGHT COL: MATCH RESULT (Output) --- */}
                                    <div className="col-span-4 flex flex-col gap-4 z-10 justify-center">
                                        <div className={`text-xs font-bold uppercase tracking-wide mb-1 text-right ${isLight ? "text-gray-400" : "text-gray-500"}`}>Best Match</div>

                                        <div className={`
                        relative p-4 rounded-2xl border shadow-xl transform transition-all hover:scale-105
                        ${isLight ? "bg-gradient-to-b from-white to-purple-50 border-purple-100" : "bg-gradient-to-b from-[#1a1a1a] to-[#111] border-purple-500/30"}
                     `}>
                                            <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">98% Match</div>

                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-[#333] overflow-hidden border-2 border-white dark:border-[#444]">
                                                    <img src="/images/img_ellipse_1.png" className="w-full h-full object-cover" alt="Profile" />
                                                </div>
                                                <div>
                                                    <div className={`text-sm font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Sarah J.</div>
                                                    <div className="text-[10px] text-purple-500">Senior AI Architect</div>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 mb-3">
                                                <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${isLight ? "bg-gray-100" : "bg-[#333]"}`}>
                                                    <div className="h-full bg-green-500 w-[98%]"></div>
                                                </div>
                                            </div>

                                            <div className={`text-[10px] leading-tight ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                                                "Expert in deploying LLMs at scale. Ex-Google Brain."
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* 3. Bottom Status Bar */}
                                <div className={`h-10 border-t flex items-center justify-between px-6 text-[10px] font-mono ${isLight ? "border-gray-100 bg-gray-50 text-gray-500" : "border-white/5 bg-[#111] text-gray-500"}`}>
                                    <div className="flex gap-4">
                                        <span>Latency: 12ms</span>
                                        <span className="text-green-500">System: Online</span>
                                    </div>
                                    <div>Scanning global talent pool...</div>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* ✅ 4. FRACTIONAL LEADERS VISUAL: "Premium Executive Profile" */}
                    {slug === 'fractional-leaders' && (
                        <div className="relative w-full h-[550px] flex items-center justify-center">

                            {/* --- BACKGROUND ATMOSPHERE --- */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[120px] opacity-30 ${isLight ? "bg-cyan-200" : "bg-cyan-900"}`}></div>
                            <div className={`absolute inset-0 opacity-20 ${isLight ? "bg-[radial-gradient(#0891b2_1px,transparent_1px)]" : "bg-[radial-gradient(#22d3ee_1px,transparent_1px)]"}`} style={{ backgroundSize: '24px 24px' }}></div>

                            {/* --- MAIN EXECUTIVE CARD --- */}
                            <div className={`
                relative w-80 p-6 rounded-[32px] border backdrop-blur-xl shadow-2xl flex flex-col items-center text-center z-5 animate-float-slow
                ${isLight ? "bg-white/60 border-white/80 shadow-cyan-500/10" : "bg-black/40 border-white/10 shadow-black/50"}
              `}>

                                {/* Avatar / Profile Image */}
                                <div className="relative w-24 h-24 mb-6">
                                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isLight ? "bg-cyan-400" : "bg-cyan-500"}`}></div>
                                    <div className={`relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-cyan-400 to-blue-600`}>
                                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-black bg-gray-200 dark:bg-gray-800">
                                            <img src="/images/img_ellipse_1.png" className="w-full h-full object-cover" alt="Executive" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center border-2 border-white dark:border-black shadow-lg">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                                    </div>
                                </div>

                                {/* Name & Title */}
                                <h3 className={`text-2xl font-bold mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>Senior Leader</h3>
                                <div className={`text-sm font-medium mb-6 ${isLight ? "text-cyan-600" : "text-cyan-400"}`}>Fractional CTO / CPO</div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap justify-center gap-2 w-full">
                                    {['Strategy', 'Scalability', 'Leadership'].map((tag, i) => (
                                        <span key={i} className={`text-[10px] font-bold px-3 py-1.5 rounded-full border ${isLight ? "bg-white border-gray-200 text-gray-600" : "bg-white/5 border-white/10 text-gray-300"}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Status */}
                                <div className={`mt-8 w-full pt-4 border-t flex justify-between items-center text-[10px] font-mono ${isLight ? "border-gray-200 text-gray-500" : "border-white/10 text-gray-400"}`}>
                                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Available now</span>
                                    <span>Exp: 15+ Yrs</span>
                                </div>
                            </div>

                            {/* --- FLOATING IMPACT CARDS --- */}
 

                            {/* Card 2: Strategic Value (Left)
                            <div className={`
                absolute bottom-20 -left-4 lg:left-10 w-48 p-4 rounded-2xl border backdrop-blur-md shadow-xl z-10 animate-float-fast
                ${isLight ? "bg-white/80 border-white shadow-purple-500/10" : "bg-[#111]/80 border-white/10 shadow-black/50"}
              `}>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <div className={`text-xs font-bold ${isLight ? "text-gray-900" : "text-white"}`}>Vetted Experts</div>
                                        <div className={`text-[10px] leading-tight mt-1 ${isLight ? "text-gray-500" : "text-gray-400"}`}>Top 1% of global tech leaders.</div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default HeroSection;