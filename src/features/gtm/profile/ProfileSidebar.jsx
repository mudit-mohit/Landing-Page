import React from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";

const ProfileSidebar = ({ profile }) => {
  const { isLight } = useTheme();
  const navigate = useNavigate(); 

  // Handler to redirect to Booking Calendar
  const handleHireClick = () => {
    navigate(`/book-call?talentName=${encodeURIComponent(profile.name || "")}`);
  };

  return (
    <div className={`
      w-full lg:w-[350px] flex-shrink-0 p-6 rounded-[24px] border h-fit 
      relative lg:sticky lg:top-28 z-20 
      ${isLight
        ? "bg-white border-gray-100 shadow-xl shadow-purple-500/5"
        : "bg-[#121212] border-white/10 shadow-xl shadow-black/50"
      }
    `}>

      {/* 1. Header: Image & Name */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-4">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-purple-500/20"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-4 border-white dark:border-[#121212]"></div>
        </div>

        <h2 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
          {profile.name}
        </h2>
        <p className={`text-sm font-medium mt-1 ${isLight ? "text-purple-600" : "text-purple-400"}`}>
          {profile.title}
        </p>
      </div>

      {/* 2. Stats Grid */}
      <div className={`
        grid grid-cols-2 gap-4 mb-6 py-4 border-y
        ${isLight ? "border-gray-100" : "border-white/5"}
      `}>
        <div className="text-center border-r border-gray-100 dark:border-white/5">
          <span className={`block text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
            {profile.experience}
          </span>
          <span className={`text-xs ${isLight ? "text-gray-500" : "text-[#666]"}`}>Experience</span>
        </div>
        <div className="text-center">
          <span className={`block text-lg font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
            {profile.availability || "Immediate"}
          </span>
          <span className={`text-xs ${isLight ? "text-gray-500" : "text-[#666]"}`}>Availability</span>
        </div>
      </div>

      {/* 3. Hire Button */}
      <div className="mb-8">
        <Button
          text="Hire Now"
          onClick={handleHireClick}
          text_font_size="16"
          text_font_weight="600"
          text_color="#ffffff"
          fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
          padding="12px 0"
          layout_width="100%"
          border_border_radius="12px"
          className="shadow-lg shadow-purple-500/25 mb-3"
        />
        
        {/* Resume Download Button */}
        {profile.resume ? (
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            download 
            className={`
              block w-full py-3 rounded-xl text-sm font-medium border transition-colors text-center no-underline cursor-pointer
              ${isLight
                ? "border-gray-200 text-gray-600 hover:bg-gray-50"
                : "border-white/10 text-[#bababa] hover:bg-white/5"
              }
            `}
          >
            Download Resume
          </a>
        ) : (
          <button
            disabled
            className={`
              block w-full py-3 rounded-xl text-sm font-medium border transition-colors text-center opacity-50 cursor-not-allowed
              ${isLight
                ? "border-gray-200 text-gray-400"
                : "border-white/10 text-[#555]"
              }
            `}
          >
            No Resume Available
          </button>
        )}
      </div>

      {/* 4. Top Skills */}
      <div>
        <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
          Top Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {profile.topSkills && profile.topSkills.map((skill, i) => (
            <span
              key={i}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-medium
                ${isLight
                  ? "bg-purple-50 text-purple-700"
                  : "bg-purple-900/20 text-purple-300"
                }
              `}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProfileSidebar;