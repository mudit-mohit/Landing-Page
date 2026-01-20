import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../hooks/useTheme";
import { fetchJobs } from "../../services/jsearchApi";
import JobHero from "../../features/gtm/jobs/JobHero";
import JobCard from "../../features/gtm/jobs/JobCard";
import JobDetailsModal from "../../features/gtm/jobs/JobDetailsModal";

const JobsTemplate = () => {
    const { isLight } = useTheme();

    // State
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("Software Developer");
    const [selectedJob, setSelectedJob] = useState(null);

    // Filters State
    const [filters, setFilters] = useState({
        date_posted: 'all',
        employment_type: '',
        remote: false
    });

    const jobCategories = [
        "Software Developer", "Python Developer", "Full Stack Developer",
        "MERN Stack", "Java Developer", "React Native",
        "Data Scientist", "DevOps Engineer"
    ];

    // Fetch Logic
    const getJobs = async () => {
        setLoading(true);
        try {
            const data = await fetchJobs({
                query: searchQuery,
                datePosted: filters.date_posted,
                jobType: filters.employment_type,
                remote: filters.remote
            });
            setJobs(data || []);
        } catch (error) {
            console.error("Failed to fetch jobs", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getJobs();
    }, [searchQuery, filters]);

    const handleCategoryClick = (category) => {
        setSearchQuery(category);
    };

    // 🎨 UPDATED PAGE BACKGROUND (Matches SolutionTemplate)
    const pageBackground = {
        background: isLight
            ? `
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 0% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
        radial-gradient(circle at 100% 90%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)
      `
            : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "100vh"
    };

    return (
        <div style={pageBackground} className="min-h-screen font-sans relative">
            <Helmet>
                <title>AI Jobs Board | GenSquad</title>
            </Helmet>

            {/* HERO & FILTERS */}
            <JobHero
                onSearch={setSearchQuery}
                filters={filters}
                setFilters={setFilters}
            />

            {/* Quick Category Filters */}
            <div className="px-6 lg:px-[60px] max-w-[1440px] mx-auto mt-6">
                <div className="flex flex-wrap gap-3">
                    {jobCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                ${searchQuery === cat
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : isLight
                                        ? "bg-white/80 backdrop-blur-sm text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                                        : "bg-[#1a1a1a] text-gray-300 border-[#333] hover:border-blue-500 hover:text-blue-400"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* JOB GRID */}
            <section className="px-6 lg:px-[60px] max-w-[1440px] mx-auto pb-20">

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse mt-10">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className={`h-[280px] rounded-[20px] ${isLight ? "bg-white/50" : "bg-[#1a1a1a]"}`}></div>
                        ))}
                    </div>
                ) : jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {jobs.map((job) => (
                            <div key={job.job_id} onClick={() => setSelectedJob(job)} className="cursor-pointer group">
                                <JobCard job={job} isLight={isLight} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className={`text-xl ${isLight ? "text-gray-500" : "text-gray-400"}`}>No jobs found. Try adjusting your filters.</h3>
                    </div>
                )}

            </section>

            {/* --- RENDER NEW SEPARATE MODAL COMPONENT --- */}
            {selectedJob && (
                <JobDetailsModal
                    job={selectedJob}
                    onClose={() => setSelectedJob(null)}
                    isLight={isLight}
                />
            )}

        </div>
    );
};

export default JobsTemplate;