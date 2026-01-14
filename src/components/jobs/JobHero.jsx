import React, { useState } from "react";

const JobHero = ({ onSearch, filters, setFilters }) => {
  const [localSearch, setLocalSearch] = useState("GTM Strategy");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearch);
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 pt-28 pb-12">
      <div className="w-full bg-white border border-[#E1E2E3] rounded-3xl flex flex-col items-center py-16 px-6 shadow-[0_2px_20px_rgba(0,0,0,0.02)] text-center">
        
        {/* Badge */}
        <div className="mb-6 border border-[#E1E2E3] bg-[#f4f4f4] rounded-full px-4 py-1.5 shadow-sm">
          <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
            Updated daily 
          </p>
        </div>

        <h1 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black mb-6">
           Find your next <span className="text-[#1679fa]">GTM Insight</span>
        </h1>
        
        <p className="font-display text-lg text-[#4d4d4d] max-w-2xl mx-auto mb-10">
          Browse thousands of curated GTM strategies, marketing insights, and growth tactics aggregated from top leaders across the web.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl relative flex items-center mb-10">
           <input 
              type="text" 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search roles (e.g. Growth Manager)..." 
              className="w-full pl-6 pr-32 py-4 bg-white border border-[#E1E2E3] rounded-2xl outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-sans"
            />
            <button type="submit" className="absolute right-2 bg-black text-white px-6 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              Search
            </button>
        </form>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
             <button 
                type="button"
                onClick={() => setFilters({ ...filters, remote: !filters.remote })}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${filters.remote ? "bg-black text-white border-black" : "bg-white text-[#4d4d4d] border-[#E1E2E3] hover:border-black"}`}
              >
                Remote Only
              </button>
              
              <select
                value={filters.date_posted}
                onChange={(e) => setFilters({ ...filters, date_posted: e.target.value })}
                className="px-5 py-2 rounded-full text-sm font-medium border border-[#E1E2E3] bg-white text-[#4d4d4d] outline-none hover:border-black cursor-pointer"
              >
                 <option value="all">Any Time</option>
                 <option value="today">Today</option>
                 <option value="3days">Last 3 Days</option>
                 <option value="week">Last Week</option>
              </select>
        </div>

      </div>
    </section>
  );
};

export default JobHero;