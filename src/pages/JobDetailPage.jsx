import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/jobs/JobCard'; // ✅ Reusing your existing card
import { getJobDetails, fetchJobs } from '../services/jsearchApi';

// --- SUB-COMPONENT: SKELETON LOADER (Better UI) ---
const JobDetailSkeleton = () => (
  <div className="w-full min-h-screen bg-white animate-pulse">
    <Navbar />
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Header Skeleton */}
        <div className="mb-10">
          <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-xl bg-gray-200"></div>
            <div className="flex-1">
              <div className="h-8 w-1/2 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        {/* Body Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-64 bg-gray-100 rounded-2xl"></div>
            <div className="h-32 bg-gray-100 rounded-2xl"></div>
          </div>
          <div className="lg:col-span-1">
            <div className="h-64 bg-gray-100 rounded-2xl sticky top-32"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]); // ✅ State for related jobs
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when ID changes (important for "Related Job" clicks)
    window.scrollTo(0, 0);

    const loadData = async () => {
      setLoading(true);
      
      // 1. Fetch Main Job
      const jobData = await getJobDetails(jobId);
      
      if (jobData) {
        setJob(jobData);

        // 2. Fetch Related Jobs (Search by the same Job Title)
        // We run this *after* we get the job title
        const related = await fetchJobs({ 
            query: jobData.job_title, 
            remote: jobData.job_is_remote // Try to match remote preference
        });

        // Filter out the *current* job and take top 3
        const filtered = related
            .filter(j => j.job_id !== jobId)
            .slice(0, 3);
            
        setRelatedJobs(filtered);
      }
      
      setLoading(false);
    };

    loadData();
  }, [jobId]);

  // ✅ SHOW SKELETON INSTEAD OF TEXT
  if (loading) return <JobDetailSkeleton />;
  
  if (!job) return <div className="min-h-screen flex items-center justify-center">Job not found</div>;

  const formattedDate = new Date(job.job_posted_at_datetime_utc).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[1100px] mx-auto">
            
            {/* 1. HEADER SECTION */}
            <div className="mb-10">
                <button 
                    onClick={() => navigate(-1)} 
                    className="text-sm text-gray-500 hover:text-black mb-6 flex items-center gap-1 transition-colors"
                >
                    ← Back to Jobs
                </button>

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div className="flex gap-5 items-center">
                        <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                            {job.employer_logo ? (
                                <img src={job.employer_logo} alt={job.employer_name} className="w-full h-full object-contain p-2" />
                            ) : (
                                <span className="text-xl font-bold text-gray-400">{job.employer_name?.charAt(0)}</span>
                            )}
                        </div>
                        
                        <div>
                            <h1 className="text-3xl font-display font-medium text-gray-900 mb-1">
                                {job.job_title}
                            </h1>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <span className="font-semibold text-gray-900">{job.employer_name}</span>
                                <span>•</span>
                                <span>{job.job_city || job.job_country}</span>
                                <span>•</span>
                                <span className="text-green-600 font-medium">{job.job_employment_type}</span>
                            </div>
                        </div>
                    </div>

                    <a 
                        href={job.job_apply_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden md:inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                    >
                        Apply Now
                    </a>
                </div>
            </div>

            {/* 2. MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* LEFT: Description */}
                <div className="lg:col-span-2">
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Job Description</h2>
                        <div className="prose prose-blue max-w-none text-gray-600 whitespace-pre-line leading-relaxed">
                            {job.job_description}
                        </div>

                        {job.job_highlights?.Qualifications && (
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4">Qualifications</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    {job.job_highlights.Qualifications.map((q, i) => (
                                        <li key={i}>{q}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: Sticky Snapshot */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 space-y-6">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-4">Job Overview</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 mt-0.5 text-gray-400">📅</div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase font-bold">Posted</div>
                                        <div className="text-sm font-medium text-gray-700">{formattedDate}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 mt-0.5 text-gray-400">📍</div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase font-bold">Location</div>
                                        <div className="text-sm font-medium text-gray-700">
                                            {job.job_city}, {job.job_country} ({job.job_is_remote ? 'Remote' : 'On-site'})
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6 border-gray-200" />

                            <a 
                                href={job.job_apply_link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* ✅ 3. RELATED JOBS SECTION */}
            {relatedJobs.length > 0 && (
                <div className="mt-20 border-t border-gray-200 pt-12">
                    <h2 className="text-2xl font-display font-medium text-gray-900 mb-8">
                        Similar Jobs You Might Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedJobs.map((relatedJob) => (
                            // Using your existing JobCard component
                            <JobCard key={relatedJob.job_id} job={relatedJob} />
                        ))}
                    </div>
                </div>
            )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailPage;