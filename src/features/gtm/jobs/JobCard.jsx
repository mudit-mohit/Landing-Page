import React from "react";
import Button from "../../../components/ui/Button";

const JobCard = ({ job, isLight }) => {

  // --- LOGIC 1: Handle Missing/Invalid Dates (Fixing the 1970 glitch) ---
  const getValidDate = () => {
    if (!job.job_posted_at_datetime_utc) return null;
    const date = new Date(job.job_posted_at_datetime_utc);
    // If invalid or specifically 1970 (Unix Epoch start), return null
    if (isNaN(date.getTime()) || date.getFullYear() === 1970) {
      return null;
    }
    return date.toLocaleDateString();
  };

  const postedDate = getValidDate();

  // --- LOGIC 2: Handle Missing Logos (Show Initials) ---
  const hasLogo = Boolean(job.employer_logo);
  const companyInitial = job.employer_name ? job.employer_name.charAt(0).toUpperCase() : "?";

  const handleApply = (e) => {
    e.stopPropagation();
    if (job.job_apply_link) {
      window.open(job.job_apply_link, "_blank");
    }
  };

  return (
    <div className={`
      group flex flex-col p-6 rounded-[20px] border transition-all duration-300 hover:-translate-y-1
      ${isLight
        ? "bg-white/80 border-purple-100/50 shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
        : "bg-[#111] border-[#222] shadow-lg hover:border-purple-500/30"
      }
    `}>

      {/* HEADER: Logo + Date */}
      <div className="flex justify-between items-start mb-4">

        {/* LOGO BOX: Shows Image if available, otherwise Initials */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden p-2 ${isLight ? "bg-white shadow-sm" : "bg-white"}`}>
          {hasLogo ? (
            <img src={job.employer_logo} alt="Company" className="w-full h-full object-contain" />
          ) : (
            <span className="text-xl font-bold text-gray-800">
              {companyInitial}
            </span>
          )}
        </div>

        {/* DATE BADGE: Only renders if valid date exists */}
        {postedDate && (
          <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md ${isLight ? "bg-white border border-gray-200 text-gray-500" : "bg-[#222] text-[#666]"}`}>
            {postedDate}
          </span>
        )}
      </div>

      {/* TITLES */}
      <h3 className={`font-space font-bold text-lg leading-tight mb-1 line-clamp-1 ${isLight ? "text-gray-900" : "text-white"}`}>
        {job.job_title}
      </h3>
      <p className={`text-sm font-medium mb-4 ${isLight ? "text-purple-600" : "text-purple-400"}`}>
        {job.employer_name}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className={`text-[11px] px-2 py-1 rounded border ${isLight ? "bg-white border-gray-200 text-gray-600" : "bg-[#1a1a1a] border-[#333] text-[#aaa]"}`}>
          {job.job_city ? `${job.job_city}, ${job.job_country}` : "Remote"}
        </span>
        <span className={`text-[11px] px-2 py-1 rounded border ${isLight ? "bg-white border-gray-200 text-gray-600" : "bg-[#1a1a1a] border-[#333] text-[#aaa]"}`}>
          {job.job_employment_type || "Full Time"}
        </span>
      </div>

      {/* DESCRIPTION SNIPPET */}
      <p className={`text-xs line-clamp-3 mb-6 flex-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
        {job.job_description ? job.job_description.substring(0, 150) + "..." : "No description available."}
      </p>

      {/* FOOTER */}
      <div className="mt-auto">
        <Button
          text="Apply Now"
          onClick={handleApply}
          width="100%"
          padding="10px"
          // ✅ FIX: Added className to FORCE styles (Black Button/White Text in Light Mode)
          className={isLight ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"}
          // Keeping these props as fallback
          fill_background={isLight ? "#000000" : "#ffffff"}
          text_color={isLight ? "#ffffff" : "#000000"}
        />
      </div>
    </div>
  );
};

export default JobCard;