import React, { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";

const ProfileDetails = ({ profile }) => {
  const { isLight } = useTheme();
  
  // State for hover interaction (Chart Only)
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Helper styles
  const sectionClass = `p-8 rounded-[24px] mb-6 border ${isLight ?
    "bg-white border-gray-100 shadow-sm" : "bg-[#121212] border-white/10 shadow-lg"
  }`;

  const headingClass = `text-xl font-space font-bold mb-6 ${isLight ?
    "text-gray-900" : "text-white"
  }`;

  // 🛠️ CHART LOGIC
  const pieData = profile.pieData || [];
  const totalUsage = pieData.reduce((acc, item) => acc + (item.usage || 0), 0);
  
  const size = 160;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  let cumulativePercent = 0;

  return (
    <div className="flex-1 min-w-0">

      {/* 1. ABOUT */}
      <div className={sectionClass}>
        <h3 className={headingClass}>About</h3>
        <p className={`text-base leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
          {profile.about || "No bio available."}
        </p>
      </div>

      {/* 2. TOP SKILLS (INTERACTIVE SVG CHART) */}
      <div className={sectionClass}>
        <h3 className={headingClass}>Top Skills</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* VISUAL CHART AREA */}
          <div className="relative w-40 h-40 flex-shrink-0 group mx-auto md:mx-0">
            
            {/* TOOLTIP: "Black Box" appearing ONLY when hovering chart */}
            <div className={`
              absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 transition-opacity duration-200
              ${hoveredSkill ? "opacity-100" : "opacity-0"}
            `}>
              <div className="bg-black/90 text-white px-2 py-1.5 rounded-lg text-xs font-bold shadow-xl backdrop-blur-sm text-center border border-white/10 max-w-[110px]">
                <span className="block text-[10px] text-gray-300 uppercase tracking-wider mb-0.5 leading-tight line-clamp-2 break-words">
                  {hoveredSkill?.name}
                </span>
                <span className="text-lg text-purple-400 block">
                  {hoveredSkill?.usage}%
                </span>
              </div>
            </div>

            {/* SVG DONUT CHART */}
            <svg 
              width={size} 
              height={size} 
              viewBox={`0 0 ${size} ${size}`} 
              className="transform -rotate-90"
            >
              {pieData.length > 0 ? pieData.map((item, i) => {
                const percent = totalUsage > 0 ? (item.usage / totalUsage) : 0;
                const dashArray = circumference * percent;
                const offsetValue = -1 * (cumulativePercent * circumference);
                cumulativePercent += percent;

                return (
                  <circle
                    key={i}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none" 
                    stroke={item.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${dashArray} ${circumference}`}
                    strokeDashoffset={offsetValue}
                    strokeLinecap="butt"
                    className="transition-all duration-300 cursor-pointer hover:stroke-width-[24px] hover:opacity-100 opacity-90"
                    onMouseEnter={() => setHoveredSkill(item)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  />
                );
              }) : (
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={isLight ? "#e5e7eb" : "#333"}
                  strokeWidth={strokeWidth}
                />
              )}
            </svg>
          </div>

          {/* LEGEND TABLE (Static) */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className={`border-b ${isLight ?
                  "border-gray-100 text-gray-400" : "border-white/10 text-[#666]"}`}>
                  <th className="pb-2 font-medium">Skill</th>
                  <th className="pb-2 font-medium">Proficiency</th>
                  <th className="pb-2 font-medium">Experience</th>
                </tr>
              </thead>
              <tbody className={isLight ? "text-gray-600" : "text-[#bababa]"}>
                {pieData.map((item, i) => (
                  <tr 
                    key={i} 
                    className="group border-b last:border-0 border-gray-100 dark:border-white/5 transition-colors"
                  >
                    <td className="py-3 flex items-center gap-2 font-medium">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }}></span>
                      <span className={isLight ? "text-gray-900" : "text-white"}>
                        {item.name}
                      </span>
                    </td>
                    <td className="py-3 font-bold">{item.usage}%</td> 
                    <td className="py-3">{item.years} Years</td>
                  </tr>
                ))}
                {pieData.length === 0 && (
                  <tr>
                    <td colSpan="3" className="py-4 text-center text-gray-400 italic">
                      No skills listed.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. ALL SKILLS */}
      <div className={sectionClass}>
        <h3 className={headingClass}>All Skills</h3>
        <div className="flex flex-wrap gap-2">
          {(profile.allSkills || []).map((skill, i) => (
            <span
              key={i}
              className={`
                px-4 py-2 rounded-full text-sm border
                ${isLight
                  ? "bg-gray-50 border-gray-200 text-gray-700"
                  : "bg-[#1a1a1a] border-[#333] text-[#bababa]"
                }
              `}
            >
              {skill}
            </span>
          ))}
          {(!profile.allSkills || profile.allSkills.length === 0) && (
             <span className="text-gray-500 italic text-sm">No additional skills tags.</span>
          )}
        </div>
      </div>

      {/* 4. PREFERRED TOOLS */}
      <div className={sectionClass}>
        <h3 className={headingClass}>Preferred Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {(profile.tools || []).map((tool, i) => (
            <div
              key={i}
              className={`
                flex items-center gap-3 p-3 rounded-xl border transition-colors
                ${isLight ? "bg-gray-50 border-gray-100" : "bg-[#1a1a1a] border-[#222]"}
              `}
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <span className={`text-sm font-medium ${isLight ?
                "text-gray-700" : "text-[#ccc]"}`}>
                {tool}
              </span>
            </div>
          ))}
          {(!profile.tools || profile.tools.length === 0) && (
             <span className="text-gray-500 italic text-sm col-span-2">No tools listed.</span>
          )}
        </div>
      </div>

      {/* 5. EXPERIENCE */}
      <div className={sectionClass}>
        <h3 className={headingClass}>Experience</h3>
        <div className="relative pl-4 border-l border-gray-200 dark:border-[#333] space-y-8 ml-2">
          {(profile.experienceLine || []).map((job, i) => (
            <div key={i} className="relative">
              <div className={`
                absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 
                ${isLight ? "bg-white border-purple-500" : "bg-[#121212] border-purple-500"}
              `}></div>

              <h4 className={`text-base font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                {job.role}
              </h4>
              <div className="flex items-center gap-2 text-sm mt-1 mb-2">
                <span className={isLight ? "text-purple-600" : "text-purple-400"}>{job.company}</span>
                <span className="text-gray-400">•</span>
                <span className={isLight ? "text-gray-500" : "text-[#666]"}>{job.duration}</span>
              </div>
              <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                {job.description}
              </p>
            </div>
          ))}
          {(!profile.experienceLine || profile.experienceLine.length === 0) && (
             <p className="text-gray-500 italic text-sm pl-2">No experience history available.</p>
          )}
        </div>
      </div>

      {/* 6. EDUCATION */}
      <div className={sectionClass}>
        <h3 className={headingClass}>Education</h3>
        <div className="space-y-4">
          {(profile.education || []).map((edu, i) => (
            <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${isLight ? "bg-gray-50" : "bg-[#1a1a1a]"}`}>
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <div>
                <h4 className={`text-base font-bold ${isLight ? "text-gray-900" : "text-white"}`}>{edu.school}</h4>
                <p className={`text-sm ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>{edu.degree}</p>
                <p className={`text-xs mt-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>{edu.year}</p>
              </div>
            </div>
          ))}
          {(!profile.education || profile.education.length === 0) && (
             <p className="text-gray-500 italic text-sm">No education listed.</p>
          )}
        </div>
      </div>

      {/* 7. CERTIFICATIONS */}
      <div className={sectionClass}>
        <h3 className={headingClass}>Certifications</h3>
        <div className="space-y-4">
          {(profile.certifications || []).map((cert, i) => (
            <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${isLight ? "bg-gray-50" : "bg-[#1a1a1a]"}`}>
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-2 5l2 2l2 -2l-2 -5" /><path d="M14 4l0 2" /><path d="M10 4l0 2" /><path d="M12 12a5 5 0 1 0 0 -10a5 5 0 0 0 0 10z" /></svg>
              </div>
              <div>
                <h4 className={`text-base font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                  {cert.name}
                </h4>
                <p className={`text-sm ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs mt-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
                  Issued: {cert.year}
                </p>
              </div>
            </div>
          ))}
          {(!profile.certifications || profile.certifications.length === 0) && (
             <p className="text-gray-500 italic text-sm">No certifications listed.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProfileDetails;