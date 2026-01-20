import React from "react";
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";
import { FiCheckCircle, FiCpu, FiCode, FiZap, FiSearch } from "react-icons/fi";

const ListingHero = () => {
  const { isLight } = useTheme();

  // 🎨 THEME COLORS
  const bgMain = isLight ? "bg-slate-50" : "bg-[#050505]";
  
  // Card Styles - Reliable Solid/Glass Hybrid for readability
  const cardBase = isLight 
    ? "bg-white border-slate-200 shadow-2xl shadow-purple-500/10" 
    : "bg-[#0F0F12] border-white/10 shadow-2xl shadow-black/80";

  const textTitle = isLight ? "text-slate-900" : "text-white";
  const textSub = isLight ? "text-slate-500" : "text-slate-400";
  const iconBg = isLight ? "bg-purple-50 text-purple-600" : "bg-purple-500/20 text-purple-300";

  return (
    <section className={`w-full relative pb-10 pt-20 overflow-hidden ${bgMain} transition-colors duration-300`}>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isLight ? 'bg-purple-400' : 'bg-purple-900'}`}></div>
         {/* Subtle Grid Pattern */}
         <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: `radial-gradient(${isLight ? '#000' : '#fff'} 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
         </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[80px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 h-full min-h-[650px] pt-12 lg:pt-0">
          
          {/* ================= LEFT CONTENT (Unchanged) ================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
            <div className={`
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6
              ${isLight ? "bg-purple-50 border-purple-100 text-purple-700" : "bg-white/5 border-white/10 text-purple-300"}
            `}>
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-wide uppercase font-space">Top 1% Talent</span>
            </div>

            <h1 className={`
              font-space font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-6
              ${textTitle}
            `}>
              Hire the world's best <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Developers</span>
            </h1>

            <p className={`
              text-lg sm:text-xl leading-relaxed mb-10 max-w-[90%]
              ${isLight ? "text-slate-600" : "text-[#bababa]"}
            `}>
              Access a curated network of vetted experts ready to tackle your most complex challenges. From AI to Full Stack, we have the specialists you need.
            </p>

            <Button
              text="Get Started"
              text_font_size="18"
              text_font_weight="600"
              text_color="#ffffff"
              fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
              padding="16px 48px"
              border_border_radius="12px"
              className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* ================= NEW RIGHT CONTENT: GENERIC TALENT CARD ================= */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end h-[500px] perspective-1000">
            
            {/* Animated Glow Behind Card */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-gradient-to-b from-purple-500 to-blue-500 blur-[80px] opacity-30 animate-pulse`}></div>

            {/* MAIN CARD: "The Hiring Profile" */}
            <div className={`relative w-full max-w-[400px] rounded-3xl p-8 border ${cardBase} z-20 flex flex-col animate-float-slow`}>
                
                {/* Header: Role & Status */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        {/* Abstract Avatar Icon */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner ${isLight ? "bg-slate-100 text-slate-400" : "bg-[#1A1A24] text-slate-500"}`}>
                            <FiCpu />
                        </div>
                        <div>
                            <div className={`text-xl font-bold font-space ${textTitle}`}>Senior Expert</div>
                            <div className={`text-sm ${textSub}`}>GenSquad Network</div>
                        </div>
                    </div>
                    {/* Status Badge */}
                    <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Available
                    </div>
                </div>

                {/* Body: Skills Visualization */}
                <div className="mb-8 space-y-4">
                    {/* Skill 1 */}
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-1 uppercase tracking-wide opacity-70">
                            <span className={textTitle}>Technical Vetting</span>
                            <span className="text-green-500">Passed</span>
                        </div>
                        <div className={`w-full h-2 rounded-full overflow-hidden ${isLight ? "bg-slate-100" : "bg-white/5"}`}>
                            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[98%] rounded-full"></div>
                        </div>
                    </div>
                    {/* Skill 2 */}
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-1 uppercase tracking-wide opacity-70">
                            <span className={textTitle}>Communication</span>
                            <span className="text-green-500">Expert</span>
                        </div>
                        <div className={`w-full h-2 rounded-full overflow-hidden ${isLight ? "bg-slate-100" : "bg-white/5"}`}>
                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-[95%] rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {["Expert Vetted", "Timezone Aligned", "Immediate Start"].map((tag, i) => (
                        <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-white/5 border-white/10 text-slate-300'}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA Area */}
                <div className={`pt-6 border-t ${isLight ? "border-slate-100" : "border-white/5"}`}>
                    <div className="text-center mt-3 text-xs opacity-50">
                        No hiring fees • Risk-free trial
                    </div>
                </div>
            </div>

            {/* Floating Widget: "Search" (Top Right) */}
            <div className={`absolute -top-6 -right-10 p-3 rounded-xl flex items-center gap-3 animate-bounce-slow z-30 border ${cardBase}`}>
                <div className={`p-2 rounded-lg ${iconBg}`}>
                    <FiSearch size={20} />
                </div>
                <div className="pr-2">
                    <div className={`font-bold text-sm ${textTitle}`}>Matching...</div>
                    <div className={`text-xs ${textSub}`}>Finding best fit</div>
                </div>
            </div>

            {/* Floating Widget: "Verified" (Bottom Left) */}
            <div className={`absolute bottom-10 left-3 p-3 rounded-xl flex items-center gap-3 animate-float-medium z-30 border ${cardBase}`}>
                <div className={`p-2 rounded-lg bg-green-500/10 text-green-500`}>
                    <FiCheckCircle size={20} />
                </div>
                <div className="pr-2">
                    <div className={`font-bold text-sm ${textTitle}`}>100% Verified</div>
                    <div className={`text-xs ${textSub}`}>Pre-screened talent</div>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* 🎬 ANIMATION STYLES */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(8px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-slow 5s ease-in-out infinite 1s; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ListingHero;