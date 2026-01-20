import React from "react";
import { useTheme } from "../../../hooks/useTheme";

const TalentFilters = () => {
  const { isLight } = useTheme();

  // Helper for checkbox style
  const checkboxClass = `
    w-4 h-4 rounded border flex items-center justify-center transition-all
    ${isLight 
      ? "border-gray-300 checked:bg-purple-600 checked:border-purple-600" 
      : "border-[#444] bg-[#222] checked:bg-purple-600 checked:border-purple-600"
    }
  `;

  return (
    <div className={`
      w-full p-6 rounded-[24px] border sticky top-24
      ${isLight 
        ? "bg-white border-gray-200" 
        : "bg-[#161616] border-[#333]"
      }
    `}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className={`font-space font-bold text-lg ${isLight ? "text-gray-900" : "text-white"}`}>
          Filters
        </h3>
        <button className="text-xs text-purple-500 hover:underline">Clear all</button>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className={`
          flex items-center px-3 py-2.5 rounded-xl border
          ${isLight ? "bg-gray-50 border-gray-200" : "bg-[#222] border-[#333]"}
        `}>
          <svg width="16" height="16" className={`mr-2 ${isLight ? "text-gray-400" : "text-[#666]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input 
            type="text" 
            placeholder="Search skills..." 
            className="bg-transparent outline-none text-sm w-full font-dm text-inherit"
          />
        </div>
      </div>

      {/* Section: Role */}
      <div className="mb-8">
        <h4 className={`text-sm font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>Role</h4>
        <div className="flex flex-col gap-3">
          {["Frontend Dev", "Backend Dev", "Full Stack", "AI Engineer", "Data Scientist"].map((role) => (
            <label key={role} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="accent-purple-600 w-4 h-4" />
              <span className={`text-sm ${isLight ? "text-gray-600 group-hover:text-purple-700" : "text-[#bababa] group-hover:text-white"}`}>
                {role}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Section: Experience */}
      <div className="mb-8">
        <h4 className={`text-sm font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>Experience</h4>
        <div className="flex flex-col gap-3">
          {["Junior (1-3 yrs)", "Mid-Level (3-5 yrs)", "Senior (5-8 yrs)", "Lead (8+ yrs)"].map((exp) => (
            <label key={exp} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="accent-purple-600 w-4 h-4" />
              <span className={`text-sm ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                {exp}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Section: Availability */}
      <div>
        <h4 className={`text-sm font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>Availability</h4>
        <div className="flex flex-col gap-3">
          {["Full-time", "Part-time", "Hourly Contract"].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="accent-purple-600 w-4 h-4" />
              <span className={`text-sm ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                {opt}
              </span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TalentFilters;