import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme';

// Features
import TechStackHero from "../../features/gtm/techstack/TechStackHero';
import TechStackProfileGrid from "../../features/gtm/techstack/TechStackProfileGrid';
import TechStackFeatures from "../../features/gtm/techstack/TechStackFeatures';
import TechStackVetting from "../../features/gtm/techstack/TechStackVetting';
import CompanyLogos from "../../features/gtm/landing/CompanyLogos';
import Testimonials from "../../features/gtm/landing/Testimonials';
import FAQSection from "../../features/gtm/hiring/FAQSection';
import FinalCTA from "../../features/gtm/hiring/FinalCTA';

// Data
import { techStackContent } from '../data/techStackContent';
// ✅ Import API
import { getTalents } from "../../services/api';

const TechStackTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();

  // ✅ State for Real Profiles
  const [dbProfiles, setDbProfiles] = useState(null);
  const [loading, setLoading] = useState(true);

  const content = techStackContent[slug];

  // ✅ Fetch Real Profiles from DB (Race Condition Safe)
  useEffect(() => {
    let isMounted = true;

    const fetchProfiles = async () => {
      // 🛑 RESET STATE IMMEDIATELY ON SLUG CHANGE
      setLoading(true);
      setDbProfiles(null);

      console.log(`%c[TechStackTemplate] 🔄 NEW PAGE LOAD: ${slug}`, "background: indigo; color: white; font-weight: bold;");

      try {
        const data = await getTalents();

        if (!isMounted) return;

        if (Array.isArray(data)) {
          // Filter based on 'techStackSlugs'
          const filtered = data.filter(profile =>
            profile.techStackSlugs && profile.techStackSlugs.includes(slug)
          );

          if (filtered.length > 0) {
            console.log(`[TechStackTemplate] ✅ Found ${filtered.length} profiles for ${slug}`);
            setDbProfiles(filtered);
          } else {
            console.warn(`[TechStackTemplate] ⚠️ No profiles for ${slug}. Using static fallback.`);
            setDbProfiles([]); // Trigger fallback
          }
        }
      } catch (error) {
        console.error("[TechStackTemplate] ❌ API Error:", error);
        if (isMounted) setDbProfiles([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProfiles();

    return () => { isMounted = false; };
  }, [slug]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Tech Stack Page Not Found</h1>
      </div>
    );
  }

  // ✅ DISPLAY LOGIC
  let displayProfiles = [];
  if (loading) {
    displayProfiles = [];
  } else if (dbProfiles && dbProfiles.length > 0) {
    // Pass ALL profiles, let the grid handle slicing/view more
    displayProfiles = dbProfiles;
  } else {
    displayProfiles = content.talent?.profiles || []; // Static Fallback
  }

  // Consistent Global Gradient
  const pageBackground = {
    background: isLight 
      ? `radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), 
         radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
         linear-gradient(to bottom, #f8fafc, #f1f5f9)` 
      : "#050505",
    minHeight: "100vh"
  };

  return (
    <div style={pageBackground} className="min-h-screen w-full relative flex flex-col font-sans">
      <Helmet>
        <title>{content.hero.title} | GenSquad</title>
      </Helmet>

      {/* ❌ No Navbar here (Handled by MainLayout) */}

      <main className="flex-grow z-10">
        {/* 1. Hero */}
        <TechStackHero content={content.hero} isLight={isLight} />

        {/* 2. Logos */}
        <section className={``}>
             <CompanyLogos variant='industry'/> 
        </section>

        {/* 3. Profiles */}
        {/* We pass 'key' to force re-render, and 'profiles' to inject real data */}
        <TechStackProfileGrid 
            key={`${slug}-${loading}`}
            slug={slug} 
            isLight={isLight} 
            profiles={displayProfiles} // ✅ Passing Real Data
            loading={loading}
        />

        {/* 4. CTA */}
        <FinalCTA content={content.cta} isLight={isLight} />

        {/* 5. Features */}
        <TechStackFeatures features={content.features} isLight={isLight} />

        {/* 6. Vetting */}
        <TechStackVetting content={content.vetting} isLight={isLight} />

        {/* 7. Testimonialss */}
        <Testimonials variant='industry'/>

        {/* 8. FAQ */}
        <FAQSection faq={content.faq} isLight={isLight} />
      </main>

      {/* ❌ No Footer here (Handled by MainLayout) */}
    </div>
  );
};

export default TechStackTemplate;