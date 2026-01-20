import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../../../hooks/useTheme";

// Import Tabs
import TalentIdentity from "./tabs/TalentIdentity";
import TalentSocial from "./tabs/TalentSocial";
import TalentProfileDetails from "./tabs/TalentProfileDetails";

// --- TABS ---
const tabs = [
  { id: "identity", label: "TALENT IDENTITY" },
  { id: "social", label: "SOCIAL & EXTERNAL LINKS" },
  { id: "profile", label: "TALENT PROFILE" }
];

const TalentForm = ({ initialData = {}, onSuccess }) => {
  const { isLight } = useTheme();
  const [activeTab, setActiveTab] = useState("identity");
  
  const tabsRef = useRef([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentTabIdx = tabs.findIndex(t => t.id === activeTab);
    const currentEl = tabsRef.current[currentTabIdx];
    if (currentEl) {
      setPillStyle({
        left: currentEl.offsetLeft,
        width: currentEl.offsetWidth
      });
    }
  }, [activeTab]);

  return (
    <div className={`
      w-full max-w-6xl mx-auto p-6 sm:p-8 rounded-[24px] border shadow-sm transition-colors duration-300
      ${isLight 
        ? "bg-white border-gray-200 shadow-gray-200/50" 
        : "bg-[#050505] border-[#222] shadow-black/50" 
      }
    `}>
      
      {/* TABS HEADER */}
      <div className={`
        relative flex p-1 rounded-xl mb-10 border w-full sm:w-fit overflow-x-auto
        ${isLight ? "bg-gray-100 border-gray-200" : "bg-[#1f1f1f] border-[#333]"}
      `}>
        <div 
          className="absolute top-1 bottom-1 rounded-lg bg-[#B45CFF] transition-all duration-300 ease-out z-0"
          style={{ left: pillStyle.left, width: pillStyle.width }}
        />
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            ref={el => tabsRef.current[idx] = el}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative z-10 px-6 py-2.5 text-sm font-bold transition-colors duration-200 whitespace-nowrap
              ${activeTab === tab.id 
                ? "text-white" 
                : isLight ? "text-gray-500 hover:text-gray-900" : "text-[#BDBDBD] hover:text-white"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONDITIONAL RENDERING */}
      <div className="animate-fade-in-up">
        {activeTab === "identity" && (
          <TalentIdentity 
            isLight={isLight} 
            initialData={initialData} 
            onSuccess={onSuccess} // Pass success handler
          />
        )}
        {activeTab === "social" && (
          <TalentSocial 
            isLight={isLight} 
            initialData={initialData} 
            onSuccess={onSuccess} 
          />
        )}
        {activeTab === "profile" && (
          <TalentProfileDetails 
            isLight={isLight} 
            initialData={initialData} 
            onSuccess={onSuccess} 
          />
        )}
      </div>

    </div>
  );
};

export default TalentForm;