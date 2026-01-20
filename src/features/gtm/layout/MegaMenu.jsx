import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

const MegaMenu = ({ activeSection, closeMenu }) => {
  const { isLight } = useTheme();
  const [activeSubsection, setActiveSubsection] = useState(null);

  useEffect(() => {
    if (activeSection) {
      if (activeSection.subsections.length > 1 || activeSection.subsections[0].title !== "") {
        setActiveSubsection(activeSection.subsections[0]);
      } else {
        setActiveSubsection(activeSection.subsections[0]);
      }
    }
  }, [activeSection]);

  if (!activeSection) return null;

  const isCardLayout = activeSection.layout === "card";
  const isUnifiedLayout = activeSection.subsections.length === 1 && activeSection.subsections[0].title === "";

  const gridItems = isUnifiedLayout || isCardLayout
    ? activeSection.subsections[0].items
    : activeSubsection?.items || [];

  const headerInfo = isCardLayout ? activeSection.subsections[0] : null;

  return (
    <div
      className={`
        absolute left-0 top-full w-full 
        border-t shadow-2xl z-40
        transition-all duration-300 ease-in-out
        ${isLight
          ? "bg-white border-gray-100 text-gray-800"
          : "bg-[#0a0a0a] border-[#ffffff10] text-gray-200"
        }
      `}
      onMouseLeave={() => {
        setActiveSubsection(null);
        closeMenu();
      }}
      // ✅ FIX: Use 'auto' height for card layouts so it expands instead of scrolling
      style={{ minHeight: (isUnifiedLayout || isCardLayout) ? "auto" : "450px" }}
    >
      <div className="max-w-[1440px] mx-auto flex h-full">

        {/* =========================================================
            LAYOUT TYPE 1: CARD LAYOUT (About Us / For Companies)
           ========================================================= */}
        {isCardLayout && (
          <div className="w-full p-10 animate-fade-in-up">

            <div className="mb-10 max-w-3xl">
              <h3 className={`text-2xl font-space font-bold mb-3 ${isLight ? "text-gray-900" : "text-white"}`}>
                {headerInfo.title}
              </h3>
              <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                {headerInfo.description}
              </p>
            </div>

            {/* ✅ UPDATED GRID: Fits 5 cards in one row on large screens */}
            <div className={`
              grid gap-6
              ${gridItems.length >= 4
                ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-5" // 5-col layout for For Companies
                : "grid-cols-1 md:grid-cols-3"                // 3-col layout for About Us
              }
            `}>
              {gridItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  onClick={closeMenu}
                  className={`
                    group block p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col
                    ${isLight
                      ? "bg-gray-50 border-gray-100 hover:shadow-lg hover:shadow-purple-500/5 hover:border-purple-100"
                      : "bg-[#111] border-[#222] hover:bg-[#161616] hover:border-purple-500/30"
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors flex-shrink-0
                    ${isLight
                      ? "bg-white text-purple-600 shadow-sm group-hover:bg-purple-600 group-hover:text-white"
                      : "bg-[#222] text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                    }
                  `}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={item.icon || "M13 10V3L4 14h7v7l9-11h-7z"} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <h4 className={`text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>
                    {item.name}
                  </h4>

                  <p className={`text-sm leading-relaxed mb-4 line-clamp-3 flex-grow ${isLight ? "text-gray-600" : "text-[#888]"}`}>
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-medium text-purple-500 group-hover:translate-x-1 transition-transform mt-auto">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ... (Split Layout code remains exactly the same) ... */}
        {!isCardLayout && !isUnifiedLayout && (
          <div className={`w-[25%] flex flex-col py-6 px-2 border-r min-h-[450px] ${isLight ? "bg-gray-50 border-gray-100" : "bg-[#111] border-[#222]"}`}>
            {activeSection.subsections.map((sub, idx) => (
              <div key={idx} onMouseEnter={() => setActiveSubsection(sub)} className={`group flex items-center gap-3 px-4 py-3 mb-1 rounded-lg cursor-pointer transition-all duration-200 ${activeSubsection?.title === sub.title ? (isLight ? "bg-purple-50 text-purple-700" : "bg-[#1f1f1f] text-white") : (isLight ? "text-gray-500 hover:bg-gray-100 hover:text-gray-900" : "text-[#888] hover:bg-[#161616] hover:text-white")}`}>
                <div className={`p-2 rounded-md transition-colors ${activeSubsection?.title === sub.title ? "bg-purple-600 text-white" : (isLight ? "bg-gray-200 text-gray-500" : "bg-[#2a2a2a] text-[#666]")}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={sub.iconPath || "M13 10V3L4 14h7v7l9-11h-7z"} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span className="font-space font-medium text-[15px] flex-grow">{sub.title || "Menu"}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-300 opacity-0 -translate-x-2 ${activeSubsection?.title === sub.title ? "opacity-100 translate-x-0" : ""}`}><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            ))}
          </div>
        )}

        {/* ... (Right Content Panel for Split/Unified remains same) ... */}
        {!isCardLayout && (
          <div className={`relative p-8 overflow-y-auto max-h-[85vh] scrollbar-thin ${isUnifiedLayout ? "w-full" : "w-[75%]"}`}>
            {!isUnifiedLayout && activeSubsection && (
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-[#222]">
                <h3 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>{activeSubsection.title}</h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">{gridItems.length} options</span>
              </div>
            )}
            <div className={`grid gap-x-6 animate-fade-in-up ${isUnifiedLayout ? "grid-cols-4 lg:grid-cols-5 gap-y-1.5" : "grid-cols-3 gap-y-4"}`}>
              {gridItems.map((item, i) => (
                <Link key={i} to={item.href} onClick={closeMenu} className={`group flex items-center gap-2 p-1.5 rounded-lg transition-all duration-200 ${isLight ? "hover:bg-gray-50" : "hover:bg-[#1a1a1a]"}`}>
                  <div className="text-purple-400 group-hover:text-purple-600 transition-colors flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span className={`block text-[13px] font-medium transition-colors truncate ${isLight ? "text-gray-700 group-hover:text-purple-700" : "text-[#bababa] group-hover:text-white"}`}>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
      <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in-up { animation: fadeInUp 0.3s ease-out forwards; } .scrollbar-thin::-webkit-scrollbar { width: 6px; } .scrollbar-thin::-webkit-scrollbar-thumb { background-color: rgba(139, 92, 246, 0.2); border-radius: 10px; } .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }`}</style>
    </div>
  );
};

export default MegaMenu;