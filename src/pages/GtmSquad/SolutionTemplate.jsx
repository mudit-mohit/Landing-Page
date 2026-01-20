import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme';

// Import Data
import { solutionContent } from '../data/solutionContent';
// ✅ Import API
import { getTalents } from "../../services/api';

// Features
import SolutionHero from "../../features/gtm/solution/SolutionHero';
import CompanyLogos from "../../features/gtm/landing/CompanyLogos';
import SolutionProcess from "../../features/gtm/solution/SolutionProcess';
import SolutionCapabilities from "../../features/gtm/solution/SolutionCapabilities';
import ExpertProfiles from "../../features/gtm/landing/ExpertProfiles';
import SolutionWhyChoose from "../../features/gtm/solution/SolutionWhyChoose';
import Testimonials from "../../features/gtm/landing/Testimonials';
import IndustryFAQ from "../../features/gtm/industry/IndustryFAQ';
import SolutionCTA from "../../features/gtm/solution/SolutionCTA';

const SolutionTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();

  // ✅ State for Real Profiles
  const [dbProfiles, setDbProfiles] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Get Data for current slug
  const content = solutionContent[slug];

  // ✅ 2. Fetch Real Profiles from DB (Race Condition Safe)
  useEffect(() => {
    let isMounted = true;

    const fetchProfiles = async () => {
      // 🛑 RESET STATE IMMEDIATELY ON SLUG CHANGE
      setLoading(true);
      setDbProfiles(null);

      console.log(`%c[SolutionTemplate] 🔄 NEW PAGE LOAD: ${slug}`, "background: blue; color: white; font-weight: bold;");

      try {
        const data = await getTalents();

        if (!isMounted) return;

        if (Array.isArray(data)) {
          // Filter based on 'serviceSlugs' (Solutions usually map to services)
          const filtered = data.filter(profile =>
            profile.serviceSlugs && profile.serviceSlugs.includes(slug)
          );

          if (filtered.length > 0) {
            console.log(`[SolutionTemplate] ✅ Found ${filtered.length} profiles for ${slug}`);
            setDbProfiles(filtered);
          } else {
            console.warn(`[SolutionTemplate] ⚠️ No profiles for ${slug}. Using static fallback.`);
            setDbProfiles([]); // Trigger fallback
          }
        }
      } catch (error) {
        console.error("[SolutionTemplate] ❌ API Error:", error);
        if (isMounted) setDbProfiles([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProfiles();

    return () => { isMounted = false; };
  }, [slug]);

  // 3. Handle Not Found
  if (!content) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isLight ? "bg-white text-black" : "bg-black text-white"}`}>
        <h1 className="text-3xl font-bold">Solution Not Found</h1>
      </div>
    );
  }

  // ✅ DISPLAY LOGIC
  let displayProfiles = [];
  if (loading) {
    displayProfiles = [];
  } else if (dbProfiles && dbProfiles.length > 0) {
    displayProfiles = dbProfiles.slice(0, 4); // Top 4 from DB
  } else {
    displayProfiles = content.talent?.profiles || []; // Static Fallback
  }

  // 🎨 GLOBAL PAGE BACKGROUND
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
    <div style={pageBackground}>
      <Helmet>
        <title>{content.hero.title} | GenSquad</title>
        <meta name="description" content={content.hero.subtitle} />
      </Helmet>

      {/* 1. HERO SECTION */}
      <div className="pt-20 pb-10">
        <SolutionHero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          ctaText={content.hero.ctaText}
        />
      </div>

      {/* 2. LOGOS */}
      <CompanyLogos variant="industry" />

      {/* 3. PROCESS */}
      <SolutionProcess data={content.process} />

      {/* 4. CAPABILITIES */}
      <SolutionCapabilities data={content.services} />

      {/* 5. EXPERTS (PROFILES from Backend/Dummy) */}
      <ExpertProfiles
        key={`${slug}-${loading}`} // ✅ Forces re-render on slug change or load finish
        variant="industry"
        title={content.talent.title}
        subtitle={content.talent.subtitle}
        profiles={displayProfiles} // ✅ Passes Real Data
        loading={loading}
        subSection="solution"
        page={slug}
      />

      {/* 6. USE CASES */}
      <SolutionWhyChoose data={content.useCases} />

      {/* 7. TESTIMONIALS (Global Data) */}
      <Testimonials
        variant="industry"
      // No items passed -> uses default global testimonials
      />

      {/* 8. FAQ */}
      <IndustryFAQ data={content.faq} />

      {/* 9. CTA */}
      <SolutionCTA data={content.finalCTA} />

      {/* Spacing for footer */}
      <div className="pb-20"></div>

    </div>
  );
};

export default SolutionTemplate;