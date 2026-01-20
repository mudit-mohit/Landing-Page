import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme';

// Components
import BookingCalendar from "../../features/gtm/hiring/BookingCalendar';
import FAQSection from "../../features/gtm/hiring/FAQSection';
import Button from "../../components/ui/Button';

const BookCall = () => {
  const { isLight } = useTheme();
  const [searchParams] = useSearchParams();
  
  const talentName = searchParams.get("talentName") || "an expert";

  const faqData = [
    {
      question: "What is this call for?",
      answer: "A short strategy session to understand your needs, suggest the right talent profiles, and outline possible next steps."
    },
    {
      question: "Do I need a final scope before booking?",
      answer: "No. You can come with rough ideas or a draft brief—we’ll help you shape it into a clear plan."
    },
    {
      question: "Is there any cost or commitment?",
      answer: "The call is free and there’s no obligation to hire; it’s purely to explore fit and options."
    },
    {
      question: "How long does it take to start working with someone?",
      answer: "In most cases, you can review candidates within a few days and kick off a project shortly after."
    },
    {
      question: "Can I invite my teammates to join?",
      answer: "Yes, feel free to add founders, product, or engineering leads so everyone hears the same context."
    }
  ];

  // Global Background
  const pageBackground = {
    background: isLight 
      ? `radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.1) 0%, transparent 60%), #f8fafc` 
      : `radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 60%), #050505`,
    minHeight: "100vh"
  };

  const scrollToCalendar = () => {
    const section = document.getElementById('booking-calendar');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={pageBackground} className="min-h-screen w-full relative flex flex-col font-sans">
      <Helmet>
        <title>Book a Strategy Call | GenSquad</title>
      </Helmet>

      {/* 1. HERO SECTION (Left/Right Layout) */}
      <section className="w-full pt-20 pb-10 px-6 lg:px-[60px] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            
            {/* LEFT: Content */}
            <div className="w-full lg:w-1/2 text-left z-20">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 text-xs font-bold uppercase tracking-wider ${isLight ? "bg-white border-slate-200 text-slate-500" : "bg-white/5 border-white/10 text-gray-400"}`}>
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   Taking New Clients
                </div>
                
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-space font-bold mb-6 leading-[1.1] ${isLight ? "text-slate-900" : "text-white"}`}>
                   Book your AI <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
                     Strategy Call.
                   </span>
                </h1>
                
                <p className={`text-lg md:text-xl leading-relaxed mb-10 max-w-lg ${isLight ? "text-slate-600" : "text-gray-400"}`}>
                   Schedule a 30‑minute Google Meet with a GenSquad expert to plan your hiring roadmap for {talentName !== "an expert" ? `talent like ${talentName}` : "the right AI talent"}.
                </p>

                <div className="flex gap-4">
                    <Button 
                        text="Pick a Date" 
                        onClick={scrollToCalendar}
                        text_font_size="18" 
                        text_font_weight="600" 
                        text_color="#ffffff" 
                        fill_background="linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)" 
                        padding="16px 48px" 
                        border_border_radius="12px" 
                        className="shadow-xl shadow-blue-500/30 hover:scale-105 transition-transform" 
                    />
                </div>
            </div>

            {/* RIGHT: Visual (Holographic Meeting Pass) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center perspective-[1000px]">
                <div className={`
                    relative w-[400px] h-[500px] rounded-[32px] p-8 flex flex-col justify-between
                    backdrop-blur-xl border animate-float-slow transition-all duration-500 hover:rotate-0 rotate-y-[-10deg] rotate-x-[5deg]
                    ${isLight ? "bg-white/40 border-white/60 shadow-2xl shadow-blue-900/10" : "bg-white/5 border-white/10 shadow-2xl shadow-black"}
                `}>
                    {/* Top Detail */}
                    <div className="flex justify-between items-center">
                        <div className={`text-xs font-bold tracking-widest uppercase ${isLight ? "text-slate-400" : "text-gray-500"}`}>GENSQUAD PASS</div>
                        <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center opacity-50">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
                        </div>
                    </div>

                    {/* Middle Detail */}
                    <div className="text-center">
                        <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${isLight ? "text-blue-600" : "text-blue-400"}`}>ADMIT ONE</div>
                        <h2 className={`text-4xl font-black font-space uppercase ${isLight ? "text-slate-900" : "text-white"}`}>
                            STRATEGY<br/>SESSION
                        </h2>
                        <div className={`mt-4 inline-block px-4 py-2 rounded-lg text-sm font-mono ${isLight ? "bg-slate-100 text-slate-600" : "bg-[#222] text-gray-400"}`}>
                            30 MIN • GOOGLE MEET
                        </div>
                    </div>

                    {/* Bottom Detail */}
                    <div className="space-y-2">
                        <div className={`h-[1px] w-full ${isLight ? "bg-slate-300" : "bg-white/10"}`}></div>
                        <div className="flex justify-between text-xs font-mono opacity-60">
                            <span>ID: 8X-924</span>
                            <span>PRIORITY ACCESS</span>
                        </div>
                        {/* Barcode Visual
                        <div className="flex gap-1 h-8 mt-2 opacity-40 justify-center">
                           {[...Array(25)].map((_,i) => <div key={i} className={`w-1 rounded-full ${isLight?"bg-black":"bg-white"}`} style={{height: `${Math.random()*100}%`}}></div>)}
                        </div> */}
                    </div>
                </div>

                {/* Back Glow */}
                <div className={`absolute -z-10 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 ${isLight ? "bg-blue-300" : "bg-blue-900"}`}></div>
            </div>
        </div>
      </section>

      {/* 2. CALENDAR SECTION */}
      <section id="booking-calendar" className="w-full py-10 px-6 lg:px-[60px]">
         <div className="text-center mb-10">
            <h2 className={`text-3xl font-bold font-space mb-3 ${isLight ? "text-slate-900" : "text-white"}`}>Pick a time that works for you</h2>
            <p className={`text-lg ${isLight ? "text-slate-500" : "text-gray-500"}`}>Select a date and slot to add to everyone's calendar.</p>
         </div>
         
         <BookingCalendar isLight={isLight} />
      </section>

      {/* 3. FAQ SECTION (Transparent Background) */}
      <section className=" bg-transparent ">
         <FAQSection faq={faqData} isLight={isLight} />
      </section>

      {/* 4. FINAL CTA SECTION */}
      {/* 4. FINAL CTA SECTION (REDESIGNED) */}
      <section className="w-full py-10 px-6 lg:px-[60px]">
         <div className={`
            w-full max-w-[1200px] mx-auto rounded-[32px] px-8 py-20 md:p-20 text-center relative overflow-hidden group
            ${isLight ? "bg-white border border-slate-200 shadow-2xl shadow-blue-900/10" : "bg-[#111] border border-[#333] shadow-2xl shadow-black/50"}
         `}>
            {/* Animated Gradient Background */}
            <div className={`absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent group-hover:opacity-50`}></div>

            <div className="relative z-10 flex flex-col items-center">
               <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 text-xs font-bold uppercase tracking-wider ${isLight ? "bg-slate-100 border-slate-200 text-slate-500" : "bg-white/5 border-white/10 text-gray-400"}`}>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Limited Slots Available
               </div>

               <h2 className={`text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-6 ${isLight ? "text-slate-900" : "text-white"}`}>
                  Ready to move from <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    ideas to talent?
                  </span>
               </h2>

               <p className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${isLight ? "text-slate-600" : "text-gray-400"}`}>
                  Lock in your strategy call and start matching with vetted AI professionals who can ship your next breakthrough project.
               </p>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <Button 
                     text="Confirm Booking" 
                     onClick={scrollToCalendar}
                     padding="18px 48px"
                     fill_background="linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)"
                     text_color="#fff"
                     text_font_size="18"
                     text_font_weight="600"
                     className="w-full sm:w-auto shadow-xl shadow-blue-500/30 hover:scale-105 transition-transform"
                  />
                  <Link to="/hire/hire-ai-engineers" className="w-full sm:w-auto">
                     <Button 
                        text="Browse more talent" 
                        padding="18px 48px"
                        fill_background="transparent"
                        border_border={isLight ? "1px solid #cbd5e1" : "1px solid #333"}
                        text_color={isLight ? "#333" : "#fff"}
                        text_font_size="18"
                        text_font_weight="600"
                        className="w-full sm:w-auto hover:bg-slate-50 dark:hover:bg-[#1a1a1a]"
                     />
                  </Link>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default BookCall;