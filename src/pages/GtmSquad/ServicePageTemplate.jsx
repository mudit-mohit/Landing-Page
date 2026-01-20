import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme";

// Features
import ServiceHero from "../../features/gtm/services/ServiceHero";
import ServiceProfileGrid from "../../features/gtm/services/ServiceProfileGrid";
import Testimonials from "../../features/gtm/landing/Testimonials";
import FinalCTA from "../../features/gtm/hiring/FinalCTA";
import FAQSection from "../../features/gtm/hiring/FAQSection";
import CompanyLogos from "../../features/gtm/landing/CompanyLogos";

// Data
import { servicePagesContent } from '../../features/gtm/data/servicePagesContent';
// ✅ Import API
import { getTalents } from "../../services/api";

const ServicePageTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();

  // ✅ State for Real Profiles
  const [dbProfiles, setDbProfiles] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Get Data
  const content = servicePagesContent[slug];

  // ✅ 2. Fetch Real Profiles from DB
  useEffect(() => {
    let isMounted = true;

    const fetchProfiles = async () => {
      // 🛑 RESET STATE IMMEDIATELY ON SLUG CHANGE
      setLoading(true);
      setDbProfiles(null);

      console.log(`%c[ServiceTemplate] 🔄 NEW PAGE LOAD: ${slug}`, "background: teal; color: white; font-weight: bold;");

      try {
        const data = await getTalents();

        if (!isMounted) return;

        if (Array.isArray(data)) {
          // ✅ Filter Logic: Check 'hiringSlugs' for pages like "hire-ai-engineers"
          const filtered = data.filter(profile =>
            profile.hiringSlugs && profile.hiringSlugs.includes(slug)
          );

          if (filtered.length > 0) {
            console.log(`[ServiceTemplate] ✅ Found ${filtered.length} profiles for ${slug}`);
            setDbProfiles(filtered);
          } else {
            console.warn(`[ServiceTemplate] ⚠️ No profiles for ${slug}. Using static fallback.`);
            setDbProfiles([]); // Trigger fallback
          }
        }
      } catch (error) {
        console.error("[ServiceTemplate] ❌ API Error:", error);
        if (isMounted) setDbProfiles([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProfiles();

    return () => { isMounted = false; };
  }, [slug]);

  // 2. Handle Not Found
  if (!content) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isLight ? "bg-white text-black" : "bg-black text-white"}`}>
        <h1 className="text-3xl font-bold">Service Page Not Found</h1>
      </div>
    );
  }

  // ✅ DISPLAY LOGIC
  let displayProfiles = [];
  if (loading) {
    displayProfiles = [];
  } else if (dbProfiles && dbProfiles.length > 0) {
    // Pass ALL profiles, let the grid handle slicing
    displayProfiles = dbProfiles;
  } else {
    // Fallback if no DB matches
    displayProfiles = [];
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
    <div style={pageBackground} className="min-h-screen w-full relative flex flex-col font-sans transition-colors duration-300">
      <Helmet>
        <title>{content.hero.title} {content.hero.titleHighlight} | GenSquad</title>
      </Helmet>

      <main className="flex-grow z-10">

        {/* 1. HERO */}
        <ServiceHero content={content.hero} isLight={isLight} slug={slug} />

        {/* 2. LOGOS */}
        <section className='pt-10'>
          <CompanyLogos variant="industry" />
        </section>

        {/* 3. PROFILE LISTING */}
        <div id="available-experts">
          {/* ✅ Pass Real Data & Loading State */}
          <ServiceProfileGrid
            key={`${slug}-${loading}`}
            slug={slug}
            isLight={isLight}
            profiles={displayProfiles} // Real Data
            loading={loading}
          />
        </div>

        {/* 4. TestimonialsS */}
        <Testimonials variant="industry" />

        {/* 5. FINAL CTA */}
        {content.finalCTA && <FinalCTA content={content.finalCTA} isLight={isLight} />}

        {/* 6. FAQ */}
        {content.faq && <FAQSection faq={content.faq} isLight={isLight} />}

      </main>

    </div>
  );
};

export default ServicePageTemplate;