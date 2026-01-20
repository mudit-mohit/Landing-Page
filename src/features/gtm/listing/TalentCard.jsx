import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

const TalentCard = ({ profile }) => {
  const { isLight } = useTheme();

  // 🛠️ DATA NORMALIZATION
  const name = profile.fullName || profile.name;
  const role = profile.title || profile.role;
  const image = profile.profileImage || profile.image || `https://ui-avatars.com/api/?name=${name}&background=random`;
  
  const currentExp = profile.experiences && profile.experiences.length > 0 
    ? profile.experiences[0] 
    : { company: profile.company || "Freelance", location: profile.address?.city || "Remote" };
    
  const location = profile.address?.city 
    ? `${profile.address.city}, ${profile.address.country || ""}` 
    : "Remote";

  const displaySkills = profile.topSkills || [];
  
  const maxTags = 4;
  const showTags = displaySkills.slice(0, maxTags);
  const remainingTags = displaySkills.length - maxTags;

  return (
    <div 
      className={`
        w-full max-w-full rounded-[24px] p-6 border transition-all duration-300 group
        hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between h-full
        ${isLight 
          ? "bg-white border-gray-100 shadow-sm shadow-purple-500/5" 
          : "bg-[#161616] border-[#333] shadow-lg shadow-black/50"
        }
      `}
    >
      
      {/* --- TOP SECTION: AVATAR & HEADLINE --- */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/20"
          />
          {/* Verified Badge */}
          <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white p-1 rounded-full border-2 border-white dark:border-[#161616]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>
       
        <div className="min-w-0">
          <h3 className={`text-xl font-space font-bold truncate ${isLight ? "text-gray-900" : "text-white"}`}>
            {name}
          </h3>
          <p className={`text-sm font-medium truncate ${isLight ? "text-purple-600" : "text-purple-400"}`}>
            {role}
          </p>
          <p className={`text-xs mt-1 truncate ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            {currentExp.company} • {location}
          </p>
        </div>
      </div>

      {/* --- MIDDLE SECTION: DESCRIPTION & SKILLS --- */}
      <div className="mb-6">
        {/* 🛠️ FIX: Added whitespace-normal and break-words to prevent overflow */}
        <p className={`
          text-sm leading-relaxed mb-4 line-clamp-3 min-h-[60px] whitespace-normal break-words
          ${isLight ? "text-gray-600" : "text-[#bababa]"}
        `}>
          {profile.about || profile.description || "No description available for this talent."}
        </p>

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-2">
          {showTags.map((skill, i) => {
             const skillName = typeof skill === 'string' ? skill : skill.name;
             const skillColor = typeof skill === 'object' ? skill.color : null;

             return (
              <span 
                key={i}
                className={`
                  px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 whitespace-nowrap
                  ${isLight 
                    ? "bg-gray-100 text-gray-700 border border-gray-200" 
                    : "bg-[#252525] text-[#d4d4d4] border border-[#333]"
                  }
                `}
              >
                {skillColor && (
                  <span 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: skillColor }}
                  ></span>
                )}
                {skillName}
              </span>
           );
          })}
          
          {remainingTags > 0 && (
             <span className={`text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap ${isLight?"bg-gray-50 text-gray-500":"bg-[#1f1f1f] text-[#666]"}`}>
               +{remainingTags}
             </span>
          )}
        </div>
      </div>

      {/* --- BOTTOM FOOTER: AVAILABILITY & CTA --- */}
      <div className={`pt-4 mt-auto border-t flex items-center justify-between ${isLight ? "border-gray-100" : "border-[#2a2a2a]"}`}>
        
        {/* Left: Availability */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${profile.status === 'Active' ? 'bg-green-400' : 'bg-gray-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${profile.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
          </span>
          <span className={`text-xs font-medium ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
            {profile.status}
          </span>
        </div>

        {/* Right: View Profile Button */}
        <Link 
          to={`/talent/${profile._id || profile.id}`} 
          className={`
            text-sm font-bold flex items-center gap-1 transition-all group-hover:translate-x-1
            ${isLight ? "text-purple-600" : "text-purple-400"}
          `}
        >
          View Profile
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>

      </div>
    </div>
  );
};

export default TalentCard;