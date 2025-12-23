import React from "react";
import { MapPin, Clock } from "lucide-react"; // Ensure lucide-react is installed

const JobCard = ({ job, onClick }) => {
  // Logic to handle missing logos
  const hasLogo = Boolean(job.employer_logo);
  const companyInitial = job.employer_name ? job.employer_name.charAt(0).toUpperCase() : "?";

  return (
    <div 
      onClick={onClick}
      className="group flex flex-col p-6 bg-white border border-[#E1E2E3] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 h-full"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl border border-[#E1E2E3] bg-white flex items-center justify-center overflow-hidden p-2">
          {hasLogo ? (
            <img src={job.employer_logo} alt="Company" className="w-full h-full object-contain" />
          ) : (
            <span className="font-display text-xl font-bold text-black">{companyInitial}</span>
          )}
        </div>
        {job.job_posted_at_datetime_utc && (
          <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md bg-[#f4f4f4] text-[#4d4d4d]">
            {new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-xl text-black mb-1 line-clamp-1">
        {job.job_title}
      </h3>
      <p className="text-sm font-sans font-medium text-[#1679fa] mb-4">
        {job.employer_name}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex items-center gap-1 text-[11px] px-2 py-1 rounded border border-[#E1E2E3] bg-[#f8f9fa] text-[#4d4d4d]">
          <MapPin size={12} />
          {job.job_city ? `${job.job_city}, ${job.job_country}` : "Remote"}
        </div>
        <div className="flex items-center gap-1 text-[11px] px-2 py-1 rounded border border-[#E1E2E3] bg-[#f8f9fa] text-[#4d4d4d]">
          <Clock size={12} />
          {job.job_employment_type || "Full Time"}
        </div>
      </div>

      {/* Description Preview */}
      <p className="text-sm font-sans text-[#4d4d4d] line-clamp-3 mb-6 flex-1">
        {job.job_description ? job.job_description.substring(0, 150) + "..." : "No description available."}
      </p>

      {/* Footer Button */}
      <div className="mt-auto pt-4 border-t border-[#E1E2E3] flex justify-end">
        <span className="text-sm font-medium text-black group-hover:text-[#1679fa] transition-colors flex items-center gap-1">
          View Details →
        </span>
      </div>
    </div>
  );
};

export default JobCard;