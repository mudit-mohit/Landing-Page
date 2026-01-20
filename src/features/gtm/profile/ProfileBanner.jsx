import React from "react";

const ProfileBanner = ({ bannerUrl }) => {
  // Use the provided URL or fall back to the placeholder
  const imageSrc = bannerUrl || "/images/profile_banner_placeholder.jpg";

  return (
    // SECTION CONTAINER
    // Increased padding to match the global layout (px-6 lg:px-8)
    <section className="w-full pt-[100px] pb-0 flex justify-center px-4 sm:px-6 lg:px-8">
      
      {/* BANNER WRAPPER
          - max-w-[1440px]: Updated to match your Navbar/Hero width (was 1146px).
          - aspect-[21/6]: A cinematic widescreen ratio that looks great at 1440px width (approx 400px height).
          - rounded-[32px]: Slightly more rounded for the larger size.
      */}
      <div 
        className="relative w-full max-w-[1440px] aspect-[21/6] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-[#121212]"
      >
         
         {/* Loading Skeleton / Fallback Background */}
         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 animate-pulse z-0"></div>

         <img
           src={imageSrc}
           alt="Profile Banner"
           className="absolute inset-0 w-full h-full object-cover z-10"
           onError={(e) => {
             e.target.style.display = 'none';
           }}
         />
         
         {/* Optional: Gradient Overlay at bottom for text readability if you add text later */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default ProfileBanner;