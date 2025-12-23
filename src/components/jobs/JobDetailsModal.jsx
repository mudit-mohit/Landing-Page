import React from 'react';
import { X, ExternalLink, MapPin, Calendar, CheckCircle } from "lucide-react";

const JobDetailsModal = ({ job, onClose }) => {
  if (!job) return null;

  const hasLogo = Boolean(job.employer_logo);
  const companyInitial = job.employer_name ? job.employer_name.charAt(0).toUpperCase() : "?";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-scale">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative z-10 border border-[#E1E2E3]">
        
        {/* Header */}
        <div className="p-6 border-b border-[#E1E2E3] flex justify-between items-start bg-[#f9fafb]">
          <div className="flex gap-4 items-start">
            <div className="h-16 w-16 rounded-xl border border-[#E1E2E3] bg-white flex items-center justify-center overflow-hidden p-2 shrink-0">
              {hasLogo ? (
                <img src={job.employer_logo} alt={job.employer_name} className="h-full w-full object-contain" />
              ) : (
                <span className="text-2xl font-bold text-black">{companyInitial}</span>
              )}
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-black">{job.job_title}</h2>
              <p className="font-sans font-medium text-[#4d4d4d]">{job.employer_name}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto font-sans">
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 text-[#4d4d4d]">
              <MapPin size={16} />
              <span>{job.job_city || 'Remote'}, {job.job_country}</span>
            </div>
            <div className="flex items-center gap-2 text-[#4d4d4d]">
              <Calendar size={16} />
              <span>{job.job_employment_type || 'Full Time'}</span>
            </div>
          </div>

          <h3 className="font-display text-lg font-semibold mb-3 text-black">About the role</h3>
          <p className="text-[#4d4d4d] leading-relaxed whitespace-pre-line mb-8">
            {job.job_description ? (job.job_description.length > 1500 ? job.job_description.substring(0, 1500) + '...' : job.job_description) : "No details."}
          </p>
          
          <div className="flex justify-end pt-4">
             <a 
                href={job.job_apply_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition flex items-center gap-2"
              >
                Apply Now <ExternalLink size={18} />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;