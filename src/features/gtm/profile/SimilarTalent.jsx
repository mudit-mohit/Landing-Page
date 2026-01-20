import React, { useRef } from "react";
import { useTheme } from "../../../hooks/useTheme";
import TalentCard from "../listing/TalentCard";

const SimilarTalent = ({ profiles = [] }) => {
  const { isLight } = useTheme();
  const scrollRef = useRef(null);

  // Scroll Handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one-third of the container width
      const scrollAmount = current.clientWidth / 3;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  if (!profiles || profiles.length === 0) return null;

  return (
    <section className="w-full py-10 mb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER & CONTROLS */}
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
            Similar Talent
          </h2>

          <div className="flex gap-3">
            {/* Left Button */}
            <button 
              onClick={() => scroll("left")}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center border transition-all
                ${isLight 
                  ? "border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300" 
                  : "border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }
              `}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Right Button */}
            <button 
              onClick={() => scroll("right")}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center border transition-all
                ${isLight 
                  ? "border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300" 
                  : "border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }
              `}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* SCROLLABLE LIST */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {profiles.map((profile) => (
            <div 
              key={profile.id || profile._id} 
              // 🛠️ FIX: Calculates exact width to fit 3 items (minus gap space)
              className="w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-16px)] snap-center flex-shrink-0"
            >
              <TalentCard profile={profile} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SimilarTalent;