import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme';

// Features
import TechnologyHero from "../../features/gtm/technology/TechnologyHero';
import TechnologyProfileGrid from "../../features/gtm/technology/TechnologyProfileGrid';
import TechnologyFeatures from "../../features/gtm/technology/TechnologyFeatures';
import TechnologyVetting from "../../features/gtm/technology/TechnologyVetting';
import CompanyLogos from "../../features/gtm/landing/CompanyLogos';
import Testimonials from "../../features/gtm/landing/Testimonials';
import FAQSection from "../../features/gtm/hiring/FAQSection';
import FinalCTA from "../../features/gtm/hiring/FinalCTA'; 

// Data
import { technologyContent } from '../data/technologyContent';
// API
import { getTalents } from "../../services/api';

const TechnologyTemplate = () => {
    const { slug } = useParams();
    const { isLight } = useTheme();

    const [dbProfiles, setDbProfiles] = useState(null);
    const [loading, setLoading] = useState(true);

    const content = technologyContent[slug];

    useEffect(() => {
        let isMounted = true;
        const fetchProfiles = async () => {
            setLoading(true);
            setDbProfiles(null);
            console.log(`%c[TechTemplate] 🔄 NEW PAGE LOAD: ${slug}`, "background: green; color: white; font-weight: bold;");

            try {
                const data = await getTalents();
                if (!isMounted) return;

                if (Array.isArray(data)) {
                    const filtered = data.filter(profile =>
                        profile.technologySlugs && profile.technologySlugs.includes(slug)
                    );

                    if (filtered.length > 0) {
                        console.log(`[TechTemplate] ✅ Found ${filtered.length} profiles for ${slug}`);
                        setDbProfiles(filtered);
                    } else {
                        console.warn(`[TechTemplate] ⚠️ No profiles for ${slug}. Using static fallback.`);
                        setDbProfiles([]);
                    }
                }
            } catch (error) {
                console.error("[TechTemplate] ❌ API Error:", error);
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
                <h1 className="text-2xl">Technology Page Not Found</h1>
            </div>
        );
    }

    // ✅ DISPLAY LOGIC: PASS ALL PROFILES (Don't slice here!)
    let displayProfiles = [];
    if (loading) {
        displayProfiles = [];
    } else if (dbProfiles && dbProfiles.length > 0) {
        // 🔴 CHANGE: Removed .slice(0, 4). Now passing ALL matches.
        displayProfiles = dbProfiles; 
    } else {
        displayProfiles = content.talent?.profiles || [];
    }

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

            <main className="flex-grow z-10">
                <TechnologyHero content={content.hero} isLight={isLight} />

                <section>
                    <CompanyLogos variant="industry" />
                </section>

                <TechnologyProfileGrid 
                    key={`${slug}-${loading}`}
                    slug={slug} 
                    content={content.talent} 
                    profiles={displayProfiles} 
                    loading={loading}
                    isLight={isLight} 
                />

                <FinalCTA content={content.cta} isLight={isLight} />
                <TechnologyFeatures features={content.features} isLight={isLight} />
                <TechnologyVetting content={content.vetting} isLight={isLight} />
                <Testimonials variant="industry" />
                <FAQSection faq={content.faq} isLight={isLight} />
            </main>
        </div>
    );
};

export default TechnologyTemplate;