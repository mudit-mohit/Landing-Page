import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme";

const IndustryFAQ = ({ data }) => {
  const { isLight } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle Logic
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no data, don't render
  if (!data || data.length === 0) return null;

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-[40px] ">
      <div className="max-w-[900px] mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className={`
            inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 border
            ${isLight 
              ? "bg-purple-50 text-purple-700 border-purple-100" 
              : "bg-purple-900/20 text-purple-300 border-purple-500/20"
            }
          `}>
            Support
          </div>
          <h2 className={`
            font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            Frequently Asked Questions
          </h2>
          <p className={`
            text-lg sm:text-xl leading-relaxed max-w-[600px] mx-auto
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            Everything you need to know about vetting, hiring, and scaling your team with GenSquad.
          </p>
        </div>

        {/* DROPDOWN LIST */}
        <div className={`
          rounded-[24px] border overflow-hidden
          ${isLight 
            ? "bg-white border-gray-200 shadow-sm" 
            : "bg-[#121212] border-[#222]"
          }
        `}>
          {data.map((item, index) => (
            <FAQItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index} 
              onClick={() => toggleFAQ(index)} 
              isLight={isLight}
              isLast={index === data.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// Separate Component for smoother individual animations
const FAQItem = ({ item, isOpen, onClick, isLight, isLast }) => {
  const contentRef = useRef(null);

  return (
    <div 
      className={`
        border-b last:border-none transition-colors duration-300
        ${isLight ? "border-gray-100" : "border-[#222]"}
        ${isOpen 
          ? (isLight ? "bg-gray-50" : "bg-[#1a1a1a]") 
          : "bg-transparent"
        }
      `}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 sm:p-8 text-left focus:outline-none group"
      >
        <span className={`
          text-lg font-space font-bold pr-8 transition-colors
          ${isLight 
            ? (isOpen ? "text-purple-600" : "text-gray-900 group-hover:text-purple-600") 
            : (isOpen ? "text-purple-400" : "text-white group-hover:text-purple-400")
          }
        `}>
          {item.question}
        </span>
        
        {/* Animated Icon */}
        <div className={`
          relative w-6 h-6 flex-shrink-0 transition-transform duration-300
          ${isOpen ? "rotate-180" : "rotate-0"}
        `}>
          {/* Vertical Line */}
          <span className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full rounded-full transition-all duration-300
            ${isOpen ? "h-0 opacity-0" : "h-full opacity-100"}
            ${isLight ? "bg-gray-400" : "bg-gray-500"}
          `}></span>
          {/* Horizontal Line */}
          <span className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] rounded-full
            ${isLight 
              ? (isOpen ? "bg-purple-600" : "bg-gray-400") 
              : (isOpen ? "bg-purple-400" : "bg-gray-500")
            }
          `}></span>
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0
        }}
      >
        <p className={`
          px-6 sm:px-8 pb-8 text-base leading-relaxed
          ${isLight ? "text-gray-600" : "text-[#bababa]"}
        `}>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default IndustryFAQ;