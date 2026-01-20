import React from "react";
import { useTheme } from "../../../hooks/useTheme";

const IndustryWhyChoose = ({ title, subtitle, items }) => {
  const { isLight } = useTheme();

  return (
    <section className="w-full py-10 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className={`
            font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            {title || "Why Choose GenSquad"}
          </h2>
          <p className={`
            text-lg max-w-[800px] leading-relaxed
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            {subtitle}
          </p>
        </div>

        {/* DYNAMIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items?.map((item, i) => (
            <div 
              key={i}
              className={`
                group relative p-8 rounded-[24px] border transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${isLight 
                  ? "bg-white border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-purple-500/20" 
                  : "bg-[#161616] border-[#333] hover:border-purple-500/50 hover:shadow-purple-900/20"
                }
              `}
            >
              {/* Icon Container (Using a fallback SVG logic if icon name is missing) */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                ${isLight 
                  ? "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white" 
                  : "bg-purple-900/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                }
              `}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Render dynamic icon path or default checkmark */}
                  <path d={item.icon || "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} />
                </svg>
              </div>

              <h3 className={`
                text-xl font-space font-bold mb-3
                ${isLight ? "text-gray-900" : "text-white"}
              `}>
                {item.title}
              </h3>

              <p className={`
                text-base leading-relaxed
                ${isLight ? "text-gray-600" : "text-[#bababa]"}
              `}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustryWhyChoose;