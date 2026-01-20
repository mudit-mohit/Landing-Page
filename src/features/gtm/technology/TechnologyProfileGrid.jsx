import React, { useState } from 'react';
import Button from "../../../components/ui/Button';
import TalentCard from "../../../services/TalentCard'; 

const TechnologyProfileGrid = ({ slug, content, isLight, profiles = [], loading }) => {
  // ✅ CHANGE: Start with only 4 visible
  const [visibleCount, setVisibleCount] = useState(4); 

  const handleViewMore = () => {
    // ✅ CHANGE: Show ALL remaining profiles when clicked
    setVisibleCount(profiles.length); 
  };

  return (
    <section id="tech-experts" className="w-full py-10 px-6 lg:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-space font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
            {content.title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isLight ? "text-slate-600" : "text-gray-400"}`}>
            {content.subtitle}
          </p>
        </div>

        {loading ? (
            <div className={`text-center py-20 ${isLight ? "text-slate-500" : "text-gray-400"}`}>
                <p className="text-xl animate-pulse">Loading Specialists...</p>
            </div>
        ) : (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                  {/* Slice happens HERE now, controlled by the button */}
                  {profiles.slice(0, visibleCount).map((profile, index) => (
                     <TalentCard key={profile._id || index} profile={profile} />
                  ))}
                </div>

                {/* Show Button only if there are hidden profiles */}
                {visibleCount < profiles.length && (
                  <div className="flex justify-center">
                      <Button 
                          text="View All Profiles" 
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
                      No specialists currently listed for this technology.
                   </div>
                )}
            </>
        )}

      </div>
    </section>
  );
};

export default TechnologyProfileGrid;