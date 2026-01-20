import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTheme } from "../../hooks/useTheme';
import Button from "../../components/ui/Button';
import Testimonials from "../../features/gtm/landing/Testimonials';
import CompanyLogos from "../../features/gtm/landing/CompanyLogos';

const HowWeVet = () => {
  const { isLight } = useTheme();

  const scrollToFunnel = () => {
    const element = document.getElementById('vetting-funnel');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen relative selection:bg-purple-500/30">
      <Helmet>
        <title>How We Vet | GenSquad</title>
        <meta name="description" content="From thousands of applicants, only the top 1% earn a GenSquad badge." />
      </Helmet>

      {/* ==============================================================================
          🌍 GLOBAL BACKGROUND (Fixed & Seamless)
         ============================================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Color */}
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

        {/* 1. HERO SECTION */}
        <section className="w-full pt-20 pb-10 px-6 lg:px-[60px]">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 ${isLight ? "bg-white border-purple-200 text-purple-700 shadow-sm" : "bg-purple-900/20 border-purple-500/30 text-purple-300"}`}>
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide uppercase font-space">rigorous process</span>
              </div>
              <h1 className={`font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
                Our vetting process <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">in detail.</span>
              </h1>
              <p className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-[550px] ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                From thousands of applicants, only a small fraction earn a GenSquad badge, giving you startup‑ready AI and AdTech experts you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/talent">
                  <Button
                    text="Hire Vetted Talent"
                    text_font_size="18"
                    text_font_weight="600"
                    text_color="#ffffff"
                    fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
                    padding="16px 48px"
                    border_border_radius="12px"
                    className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform w-full sm:w-auto"
                  />
                </Link>
                <Button
                  text="How we filter ↓"
                  onClick={scrollToFunnel}
                  text_font_size="18"
                  text_font_weight="600"
                  text_color={isLight ? "#111" : "#ffffff"} 
                  fill_background="transparent"
                  border_border={isLight ? "1px solid #e5e5e5" : "1px solid rgba(255,255,255,0.3)"}
                  padding="16px 48px"
                  border_border_radius="12px"
                  className={`transition-all hover:scale-105 w-full sm:w-auto ${isLight ? "hover:bg-gray-100" : "hover:bg-white/10 hover:border-white"}`}
                />
              </div>
            </div>

            {/* Right Visual */}
            <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full blur-[90px] opacity-60 ${isLight ? "bg-purple-200" : "bg-purple-900"}`}></div>
              
              <div className={`absolute top-10 left-0 sm:left-10 w-[240px] p-5 rounded-2xl border transform -rotate-12 scale-90 blur-[1px] ${isLight ? "bg-white border-gray-200 opacity-60 shadow-sm" : "bg-[#1a1a1a] border-[#333] opacity-40"}`}>
                <div className="w-12 h-12 rounded-full bg-red-500/10 mb-3"></div>
                <div className={`h-4 w-3/4 rounded mb-2 ${isLight ? "bg-gray-100" : "bg-gray-400/30"}`}></div>
                <div className={`h-3 w-1/2 rounded ${isLight ? "bg-gray-100" : "bg-gray-400/30"}`}></div>
                <div className="mt-4 px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded w-fit border border-red-200">Rejected</div>
              </div>

              <div className={`absolute bottom-10 right-0 sm:right-10 w-[240px] p-5 rounded-2xl border transform rotate-6 scale-90 blur-[1px] ${isLight ? "bg-white border-gray-200 opacity-60 shadow-sm" : "bg-[#1a1a1a] border-[#333] opacity-40"}`}>
                <div className="w-12 h-12 rounded-full bg-gray-500/10 mb-3"></div>
                <div className={`h-4 w-3/4 rounded mb-2 ${isLight ? "bg-gray-100" : "bg-gray-400/30"}`}></div>
                <div className="mt-4 px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded w-fit border border-gray-200">Screening...</div>
              </div>

              <div className={`relative z-20 w-[300px] p-6 rounded-[24px] border-2 transform hover:scale-105 transition-all duration-500 ${isLight ? "bg-white border-purple-500 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)]" : "bg-[#0f0f0f] border-purple-500 shadow-2xl shadow-purple-500/20"}`}>
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border-2 border-white dark:border-[#0f0f0f]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  VERIFIED
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[2px]">
                    <img src="/images/img_ellipse_1.png" className="w-full h-full rounded-full object-cover border-2 border-white dark:border-black" alt="Winner" />
                  </div>
                  <div>
                    <h3 className={`font-space font-bold text-lg ${isLight ? "text-gray-900" : "text-white"}`}>Senior AI Engineer</h3>
                    <p className="text-purple-600 font-bold text-sm">Top 1% Scorer</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["LLM", "Python", "React", "AWS"].map(tag => (
                    <span key={tag} className={`text-xs font-bold px-2 py-1 rounded border ${isLight ? "bg-gray-50 text-gray-700 border-gray-200" : "bg-[#1a1a1a] text-gray-300 border-[#333]"}`}>{tag}</span>
                  ))}
                </div>
                <div className={`flex justify-between items-center pt-4 border-t ${isLight ? "border-gray-100" : "border-[#222]"}`}>
                  <div><div className={`text-xs font-medium ${isLight ? "text-gray-500" : "text-gray-400"}`}>Experience</div><div className={`font-bold ${isLight ? "text-gray-900" : "text-white"}`}>8 Years</div></div>
                  <div className="text-right"><div className={`text-xs font-medium ${isLight ? "text-gray-500" : "text-gray-400"}`}>Tech Score</div><div className="font-bold text-green-600">98/100</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FUNNEL SECTION */}
        <section id="vetting-funnel" className="w-full py-10 px-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-20">
              <h2 className={`text-3xl sm:text-5xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
                The 4‑Stage Elimination
              </h2>
              <p className={`text-lg max-w-[700px] mx-auto ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                Rigorous screening ensures only proven experts make it to your dashboard.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { pct: "100%", title: "CV Review", desc: "Automated and manual checks of LinkedIn, GitHub, and past commercial experience.", color: "gray", h: "w-full" },
                { pct: "15%", title: "Soft Skills", desc: "Video interviews testing English fluency, communication style, and remote-work readiness.", color: "blue", h: "w-[15%]" },
                { pct: "5%", title: "Tech Interview", desc: "Deep-dive technical assessment, live coding scenarios, and system design challenges.", color: "orange", h: "w-[5%]" },
                { pct: "2%", title: "GenSquad Elite", desc: "The final roster. Skills validated, experience verified, and ready to deploy instantly.", color: "purple", h: "w-[2%]", special: true }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col p-8 rounded-[24px] border h-full transition-all hover:-translate-y-1 relative overflow-hidden ${isLight ? "bg-white border-gray-200 shadow-sm" : "bg-[#111] border-[#222]"}`}>
                  {step.special && <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">HIRED</div>}
                  <div className={`w-full h-1 rounded-full mb-8 overflow-hidden ${isLight ? `bg-${step.color}-50` : "bg-[#222]"}`}>
                    <div className={`h-full ${step.special ? "bg-purple-500" : "bg-gray-400"} ${step.h}`}></div>
                  </div>
                  <div className={`text-5xl font-space font-bold mb-4 ${step.special ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" : isLight ? `text-${step.color}-400` : `text-${step.color}-900`}`}>{step.pct}</div>
                  <h3 className={`text-xl font-bold mb-3 ${isLight ? "text-gray-900" : "text-white"}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-gray-400"}`}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHAT WE LOOK FOR (Border Removed) */}
        <section className="w-full py-10 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-32">
                <h2 className={`text-3xl sm:text-4xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>
                  What We <br/> Look For
                </h2>
                <p className={`text-lg leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                  We go beyond keywords. We verify the specific traits that separate senior engineers from average coders.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 gap-6">
                {[
                  { title: "Proven Commercial Impact", desc: "Engineers must show shipped work that moved metrics like ROAS, CPA, or latency.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "blue" },
                  { title: "Fundamentals in AI & Systems", desc: "We test their grasp of modeling and distributed systems for production-ready solutions.", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4", color: "green" },
                  { title: "Remote-First Collaboration", desc: "We screen for clear writing, async updates, and ownership for global teams.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", color: "orange" }
                ].map((card, i) => (
                  <div key={i} className={`p-8 rounded-[24px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isLight ? "bg-white border-gray-100" : "bg-[#161616] border-white/5"}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${card.color}-500/10 text-${card.color}-500`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={card.icon}/></svg>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${isLight ? "text-gray-900" : "text-white"}`}>{card.title}</h3>
                    <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. INSIDE THE INTERVIEW (Border Removed) */}
        <section className="w-full py-10 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>Inside the GenSquad Interview</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Real-Project Deep Dives", desc: "Walking through past architectures, scale issues, and trade-offs.", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
                { title: "Non-Googleable Scenarios", desc: "Open-ended AI problems to test thinking, debugging, and design under pressure.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                { title: "Hands-On Challenges", desc: "Live coding and system-design tasks to verify production-grade skills.", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center text-center p-8 rounded-2xl ${isLight ? "bg-white border border-gray-100 shadow-sm" : "bg-[#161616] border border-white/5"}`}>
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={item.icon}/></svg>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>{item.title}</h3>
                  <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. STARTUP-READY (Border Removed) */}
        <section className="w-full py-10 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border ${isLight ? "bg-green-50 text-green-700 border-green-200" : "bg-green-900/20 text-green-300 border-green-500/20"}`}>Startups Choice</div>
              <h2 className={`text-3xl sm:text-5xl font-space font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>Startup-ready by design</h2>
              <p className={`text-lg mb-10 ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>Engineers screened to thrive in fast, ambiguous, high‑growth environments.</p>
              <ul className="space-y-6">
                {[
                  { title: "Comfortable with changing specs", desc: "Used to shifting priorities without losing momentum." },
                  { title: "Owns problems end-to-end", desc: "They design, build, ship, and iterate until features deliver impact." },
                  { title: "Ships fast, learns faster", desc: "Track record of launching quickly and folding learnings back in." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg></div>
                    <div><h4 className={`text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>{item.title}</h4><p className={`text-sm mt-1 ${isLight ? "text-gray-600" : "text-[#888]"}`}>{item.desc}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className={`relative p-10 rounded-[40px] border shadow-2xl ${isLight ? "bg-white border-gray-100 shadow-purple-500/10" : "bg-[#161616] border-white/10 shadow-black"}`}>
                <div className="text-center mb-10">
                  <span className="text-6xl sm:text-8xl font-space font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600 block mb-2">&lt;48 hrs</span>
                  <p className={`text-lg ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>Median time from brief to your first interview.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-6 rounded-2xl text-center ${isLight ? "bg-gray-50" : "bg-[#0f0f0f]"}`}><span className={`block text-3xl font-bold mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>5 Days</span><span className={`text-xs uppercase font-bold tracking-wider ${isLight ? "text-gray-500" : "text-gray-500"}`}>Avg to first PR</span></div>
                  <div className={`p-6 rounded-2xl text-center ${isLight ? "bg-gray-50" : "bg-[#0f0f0f]"}`}><span className={`block text-3xl font-bold mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>90%+</span><span className={`text-xs uppercase font-bold tracking-wider ${isLight ? "text-gray-500" : "text-gray-500"}`}>Retention Rate</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS */}
        <Testimonials variant="industry" />

        {/* 7. FOOTER CTA */}
        <section className="w-full py-10 px-6 text-center">
          <h2 className={`text-3xl sm:text-5xl font-space font-bold mb-6 ${isLight ? "text-gray-900" : "text-white"}`}>Ready to hire?</h2>
          <p className={`text-lg sm:text-xl mb-10 max-w-[700px] mx-auto ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>GenSquad connects you with pre‑vetted senior AI engineers in as little as 48 hours.</p>
          <Link to="/talent"><Button text="Start Hiring →" text_font_size="20" text_font_weight="600" text_color="#ffffff" fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)" padding="18px 56px" border_border_radius="100px" className="shadow-xl hover:scale-105 transition-all" /></Link>
        </section>

      </div>
    </div>
  );
};

export default HowWeVet;