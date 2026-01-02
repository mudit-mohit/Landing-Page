import React, { useState, useEffect } from "react";
import { fetchJobs } from "../services/jsearchApi";
import JobHero from "../components/jobs/JobHero";
import JobCard from "../components/jobs/JobCard";
import JobDetailsModal from "../components/jobs/JobDetailsModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("GTM Marketing");
    const [selectedJob, setSelectedJob] = useState(null);
    const [filters, setFilters] = useState({ date_posted: 'all', employment_type: '', remote: false });

    // Pre-defined GTM categories
    const jobCategories = [
        "GTM Strategy", "Product Marketing", "Growth Lead",
        "Demand Generation", "Sales Operations", "Chief of Staff"
    ];

    useEffect(() => {
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
        getJobs();
    }, [searchQuery, filters]);

    return (
        <>
            <Helmet>
                <title>GTM & Marketing Jobs – Top Go-To-Market Roles | Outmate</title>
                <meta name="description" content="Browse the latest go-to-market and marketing jobs in one place. Discover roles across sales, growth, revops, and GTM teams curated by Outmate." />
                <link rel="canonical" href="https://outmate.ai/jobs" />
            </Helmet>
            <div className="min-h-screen w-full bg-[#f4f4f4] font-sans flex flex-col">
                <Navbar />

                <JobHero onSearch={setSearchQuery} filters={filters} setFilters={setFilters} />

                {/* Categories */}
                <div className="w-full max-w-[1280px] mx-auto px-6 mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {jobCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSearchQuery(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${searchQuery === cat ? "bg-black text-white border-black" : "bg-white text-gray-600 border-[#E1E2E3] hover:border-black"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <section className="w-full max-w-[1280px] mx-auto px-6 pb-20 flex-grow">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="h-[280px] rounded-2xl bg-white/50 animate-pulse border border-[#E1E2E3]"></div>
                            ))}
                        </div>
                    ) : jobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobCard key={job.job_id} job={job} onClick={() => setSelectedJob(job)} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl text-gray-500 font-display">No jobs found. Try adjusting your search.</h3>
                        </div>
                    )}
                </section>

                <Footer />

                {selectedJob && <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
            </div>
        </>
    );
};

export default JobsPage;