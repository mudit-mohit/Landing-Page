import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme';

// Import Features
import IndustryHero from "../../features/gtm/industry/IndustryHero';
import CompanyLogos from "../../features/gtm/landing/CompanyLogos';
import IndustrySolutionsTabs from "../../features/gtm/industry/IndustrySolutionsTabs';
import IndustryWhyChoose from "../../features/gtm/industry/IndustryWhyChoose';
import ExpertProfiles from "../../features/gtm/landing/ExpertProfiles';
import IndustryInfoGrid from "../../features/gtm/industry/IndustryInfoGrid';
import VettingProcess from "../../features/gtm/landing/VettingProcess';
import Testimonials from "../../features/gtm/landing/Testimonials';
import IndustryFAQ from "../../features/gtm/industry/IndustryFAQ';

// Import Data
import { industryContent } from '../data/industryContent';
import { getTalents } from "../../services/api';

const IndustryTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();
  const [dbProfiles, setDbProfiles] = useState([]);

  const content = industryContent[slug];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        console.log(`📡 Fetching profiles for industry: ${slug}`); // DEBUG LOG
        const data = await getTalents();

        console.log("📦 All Profiles from DB:", data); // DEBUG LOG

        if (Array.isArray(data)) {
          // Filter profiles
          const filtered = data.filter(profile => {
            // Check if industrySlugs exists and includes the current slug
            const hasSlug = profile.industrySlugs && profile.industrySlugs.includes(slug);
            return hasSlug;
          });

          console.log(`🔍 Found ${filtered.length} matches for ${slug}`, filtered); // DEBUG LOG
          setDbProfiles(filtered);
        }
      } catch (error) {
        console.error("❌ Error fetching industry profiles:", error);
      }
    };

    fetchProfiles();
  }, [slug]);

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center"><h1>Industry Not Found</h1></div>;
  }

  // ✅ DISPLAY LOGIC
  const top4Profiles = dbProfiles.slice(0, 4);

  // If we have DB profiles, use them. Otherwise, use static content.
  const displayProfiles = top4Profiles.length > 0 ? top4Profiles : content.talent.profiles;

  const sharedBackgroundStyle = {
    background: isLight
      ? `radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
         radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
         linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)`
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  };

  return (
    <>
      <Helmet>
        <title>{content.hero.title} | GenSquad</title>
        <meta name="description" content={content.hero.subtitle} />
      </Helmet>

      <IndustryHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.ctaText}
      />

      <div className="w-full relative" style={sharedBackgroundStyle}>
        <div className="pt-10">
          <CompanyLogos variant="industry" />
        </div>
        <IndustrySolutionsTabs data={content.techSpecs} />
        <IndustryInfoGrid
          title={content.services.title}
          subtitle={content.services.subtitle}
          items={content.services.cards}
        />

        {/* EXPERT PROFILES */}
        <ExpertProfiles
          variant="industry"
          title={content.talent.title}
          subtitle={content.talent.subtitle}
          profiles={displayProfiles}
          subSection="industry"
          page={slug}
        />

        <IndustryWhyChoose
          title={content.solutions.title}
          subtitle={content.solutions.subtitle}
          items={content.solutions.cards}
        />

        <VettingProcess
          variant="industry"
          title={content.vetting.title}
          subtitle={content.vetting.subtitle}
          steps={content.vetting.steps}
        />

        <Testimonials
          variant="industry"
          title={content.testimonials.title}
          subtitle={content.testimonials.subtitle}
          items={content.testimonials.items}
        />

        <IndustryFAQ data={content.faq} />

        <div className="pb-32"></div>
      </div>
    </>
  );
};

export default IndustryTemplate;