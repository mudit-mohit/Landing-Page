import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme";

// Features
import ListingHero from "../../features/gtm/listing/ListingHero";
import CompanyLogos from "../../features/gtm/landing/CompanyLogos";
import TalentGridSection from "../../features/gtm/listing/TalentGridSection"; 

const TalentListing = () => {
  const { isLight } = useTheme();

  // 🎨 SHARED BACKGROUND STYLE (Included explicitly to fix the error)
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
    <div style={pageBackground} className="min-h-screen w-full relative">
      <Helmet>
        <title>Browse Top AI Talent | GenSquad</title>
      </Helmet>

      {/* 1. HERO SECTION */}
      <div className="">
        <ListingHero />
      </div>

      {/* 2. COMPANY LOGOS */}
      <CompanyLogos variant="industry" />

      {/* 3. TALENT GRID SECTION */}
      <TalentGridSection />

    </div>
  );
};

export default TalentListing;