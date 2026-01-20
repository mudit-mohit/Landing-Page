import React, { useState } from 'react';
// ❌ REMOVED: import { mockProfiles } from '../../data/mockProfiles'; 
import Button from "../../../components/ui/Button';
import TalentCard from "../../../services/TalentCard'; 

// ✅ Updated to accept 'profiles' and 'loading' from parent
const TechStackProfileGrid = ({ slug, isLight, profiles = [], loading }) => {
  // ✅ CHANGE: Start with only 4 visible
  const [visibleCount, setVisibleCount] = useState(4);

  // ❌ REMOVED Local Filtering (Logic is now in Parent)
  // const profiles = mockProfiles.filter(...) 

  const handleViewMore = () => {
    // ✅ CHANGE: Show ALL remaining profiles when clicked
    setVisibleCount(profiles.length);
  };

  return (
    <section id="stack-experts" className="w-full py-10 px-6 lg:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-space font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
            Available Experts
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isLight ? "text-slate-600" : "text-gray-400"}`}>
            Top-tier developers ready to join your project.
          </p>
        </div>

        {/* ✅ Loading State */}
        {loading ? (
            <div className={`text-center py-20 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                <p className="text-xl animate-pulse">Loading Specialists...</p>
            </div>
        ) : (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                  {/* ✅ Using the passed 'profiles' prop & slicing based on visibleCount */}
                  {profiles.slice(0, visibleCount).map((profile, index) => (
                     <TalentCard key={profile._id || index} profile={profile} />
                  ))}
                </div>

                {/* Show Button only if there are hidden profiles */}
                {visibleCount < profiles.length && (
                  <div className="flex justify-center">
                      <Button 
                          text="View More Profiles" 
                          onClick={handleViewMore}
                          text_font_size="16" 
                          text_font_weight="600" 
                          text_color={isLight ? "#333" : "#fff"} 
                          fill_background="transparent" 
                          border_border={isLight ? "1px solid #ddd" : "1px solid #333"} 
                          padding="14px 32px" 
                          border_border_radius="10px" 
                      />
                  </div>
                )}

                {!loading && profiles.length === 0 && (
                   <div className={`text-center py-10 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                      No specialists currently listed for this stack.
                   </div>
                )}
            </>
        )}

      </div>
    </section>
  );
};

export default TechStackProfileGrid;