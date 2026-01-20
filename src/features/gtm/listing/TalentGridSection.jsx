import React, { useState, useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme";
import TalentFilters from "./TalentFilters";
import TalentCard from "./TalentCard";
// 1. Import API Service
import { getAllTalent } from "../../../services/api";

const TalentGridSection = () => {
  const { isLight } = useTheme();
  
  // 2. State for Real Data
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(15);

  // 3. Fetch Data on Mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTalent();
        setTalents(data);
      } catch (error) {
        console.error("Failed to load talent:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Pagination Logic
  const visibleWorkflows = talents.slice(0, visibleCount);
  const hasMore = visibleCount < talents.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  return (
    <section className="w-full px-6 lg:px-[80px] py-20">
      <div className="w-full max-w-[1440px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- LEFT COLUMN: FILTERS (Static for now) --- */}
          <div className="w-full lg:w-[300px] flex-shrink-0">
            <TalentFilters />
          </div>

          {/* --- RIGHT COLUMN: GRID --- */}
          <div className="flex-1">
            
            {/* Header / Count */}
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                Showing <span className="text-purple-500">{talents.length}</span> top matches
              </h2>
              
              <div className="flex items-center gap-2">
                <span className={`text-sm ${isLight ? "text-gray-500" : "text-[#666]"}`}>Sort by:</span>
                <select className={`bg-transparent border-none text-sm font-bold outline-none cursor-pointer ${isLight ? "text-gray-900" : "text-white"}`}>
                  <option>Recommended</option>
                  <option>Experience (High-Low)</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* THE GRID */}
            {loading ? (
              <div className="py-20 text-center text-gray-500">Loading profiles...</div>
            ) : talents.length === 0 ? (
              <div className="py-20 text-center text-gray-500">No profiles found.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleWorkflows.map((profile) => (
                  // Pass the MongoDB object directly
                  <TalentCard key={profile._id} profile={profile} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button 
                  onClick={handleLoadMore}
                  className={`
                    px-6 py-3 rounded-full text-sm font-bold border transition-all
                    ${isLight 
                      ? "border-gray-200 text-gray-600 hover:border-purple-500 hover:text-purple-600" 
                      : "border-[#333] text-[#bababa] hover:border-purple-500 hover:text-white"
                    }
                  `}
                >
                  Load More Profiles
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default TalentGridSection;