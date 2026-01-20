import React from 'react';
import { X, ExternalLink, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const JobDetailsModal = ({ job, onClose, isLight }) => {
  if (!job) return null;

  // --- HELPER 1: Date Formatting (Fixes 1970 issue) ---
  const getFormattedDate = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    // If invalid date or specifically the Unix Epoch (1970), return "Recently"
    if (isNaN(date.getTime()) || date.getFullYear() === 1970) {
      return "Recently";
    }
    return date.toLocaleDateString();
  };

  // --- HELPER 2: Logo Logic (Fixes black space & missing logos) ---
  const hasLogo = Boolean(job.employer_logo);
  const companyInitial = job.employer_name ? job.employer_name.charAt(0).toUpperCase() : "?";

  // --- Styles based on Theme ---
  const modalBg = isLight ? "bg-white" : "bg-[#1a1a1a]";
  const textMain = isLight ? "text-gray-900" : "text-white";
  const textSub = isLight ? "text-gray-500" : "text-gray-400";
  const borderColor = isLight ? "border-gray-200" : "border-[#333]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop Click to Close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className={`${modalBg} w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative z-10`}>
        
        {/* --- HEADER --- */}
        <div className={`p-6 border-b ${borderColor} flex justify-between items-start`}>
          <div className="flex gap-4 items-start">
            
            {/* Logo Box: Always White BG to prevent black space on transparent logos */}
            <div className="h-16 w-16 min-w-[4rem] rounded-xl border border-gray-200 bg-white flex items-center justify-center overflow-hidden p-2 shrink-0">
              {hasLogo ? (
                <img 
                  src={job.employer_logo} 
                  alt={job.employer_name} 
                  className="h-full w-full object-contain" 
                />
              ) : (
                // Fallback: Show First Letter if no logo
                <span className="text-2xl font-bold text-blue-600">
                  {companyInitial}
                </span>
              )}
            </div>

            <div className="pt-1">
              {/* UPDATED: Changed leading-tight to leading-normal for better line spacing */}
              <h2 className={`text-2xl font-bold ${textMain}`}>
                {job.job_title}
              </h2>
              <p className={`font-medium ${textSub} mt-1`}>
                {job.employer_name}
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className={`p-2 rounded-full transition shrink-0 ${isLight ? "hover:bg-gray-100 text-gray-500" : "hover:bg-[#333] text-gray-400"}`}
          >
            <X size={24} />
          </button>
        </div>

        {/* --- BODY (Scrollable) --- */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className={`flex items-center gap-2 ${textSub}`}>
              <MapPin size={16} />
              <span>{job.job_city || 'Remote'}, {job.job_country}</span>
            </div>
            <div className={`flex items-center gap-2 ${textSub}`}>
              <Calendar size={16} />
              {/* Using the Helper Function to fix date */}
              <span>Posted {getFormattedDate(job.job_posted_at_datetime_utc)}</span>
            </div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium text-xs">
              {job.job_employment_type || 'Full Time'}
            </span>
          </div>

          <h3 className={`text-lg font-semibold mb-3 ${textMain}`}>About the role</h3>
          <p className={`leading-relaxed whitespace-pre-line mb-6 ${textSub}`}>
            {job.job_description ? (
               job.job_description.length > 2000 
               ? job.job_description.substring(0, 2000) + '...' 
               : job.job_description
            ) : "No description provided."}
          </p>

          {/* Highlights Section */}
          {job.job_highlights?.Qualifications && (
            <div className="mb-4">
              <h3 className={`text-lg font-semibold mb-3 ${textMain}`}>Qualifications</h3>
              <ul className="space-y-2">
                {job.job_highlights.Qualifications.map((item, index) => (
                  <li key={index} className={`flex items-start gap-2 ${textSub}`}>
                    <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* --- FOOTER --- */}
        <div className={`p-6 border-t ${borderColor} flex justify-end gap-3 ${isLight ? "bg-gray-50" : "bg-[#111]"}`}>
          <button 
            onClick={onClose}
            className={`px-6 py-3 rounded-lg font-medium border transition ${isLight ? "border-gray-300 text-gray-700 hover:bg-gray-100" : "border-[#333] text-gray-300 hover:bg-[#222]"}`}
          >
            Close
          </button>
          <a 
            href={job.job_apply_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2"
          >
            Apply Now <ExternalLink size={18} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsModal;