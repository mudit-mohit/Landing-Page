import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme';
import Button from "../../components/ui/Button';

// Import Features Components
import ExpertProfiles from "../../features/gtm/landing/ExpertProfiles';
import Testimonials from "../../features/gtm/landing/Testimonials'; 
import HeroSection from "../../features/gtm/hiring/HeroSection';
import FeatureGrid from "../../features/gtm/hiring/FeatureGrid';
import FinalCTA from "../../features/gtm/hiring/FinalCTA';
import FAQSection from "../../features/gtm/hiring/FAQSection';

// Import Data
import { hiringNeedContent } from '../data/hiringNeedContent';
// ✅ Import API
import { getTalents } from "../../services/api';

const HiringNeedTemplate = () => {
    const { slug } = useParams();
    const { isLight } = useTheme();
    
    // ✅ State: Initialize as NULL to differentiate "loading" vs "empty"
    const [dbProfiles, setDbProfiles] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. Get Static Content
    const content = hiringNeedContent[slug];

    // ✅ 2. Fetch Logic
    useEffect(() => {
        let isMounted = true;

        const fetchProfiles = async () => {
            // 🛑 RESET STATE IMMEDIATELY ON SLUG CHANGE
            setLoading(true);
            setDbProfiles(null); 
            
            console.log(`%c[HiringTemplate] 🔄 NEW PAGE LOAD: ${slug}`, "background: purple; color: white; font-weight: bold;");

            try {
                const data = await getTalents();
                
                if (!isMounted) return;

                if (Array.isArray(data)) {
                    // Filter profiles
                    const filtered = data.filter(profile => 
                        profile.hiringSlugs && profile.hiringSlugs.includes(slug)
                    );

                    if (filtered.length > 0) {
                        console.log(`[HiringTemplate] ✅ DB Success: Found ${filtered.length} profiles for ${slug}`);
                        setDbProfiles(filtered);
                    } else {
                        console.warn(`[HiringTemplate] ⚠️ DB Empty: No profiles for ${slug}. Will use static fallback.`);
                        setDbProfiles([]); // Set to empty array to trigger fallback logic
                    }
                }
            } catch (error) {
                console.error("[HiringTemplate] ❌ API Error:", error);
                if (isMounted) setDbProfiles([]); // Fallback on error
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchProfiles();

        return () => { isMounted = false; };
    }, [slug]);

    // 3. Handle Page Not Found
    if (!content) {
        return <div className="min-h-screen flex items-center justify-center"><h1>Page Not Found</h1></div>;
    }

    // ✅ DISPLAY LOGIC (The most important part)
    let displayProfiles = [];
    let source = "";

    if (loading) {
        displayProfiles = []; // Show nothing while loading
        source = "LOADING";
    } else if (dbProfiles && dbProfiles.length > 0) {
        displayProfiles = dbProfiles.slice(0, 4); // Show DB Data
        source = "DATABASE";
    } else {
        displayProfiles = content.expertProfiles?.profiles || []; // Show Static Data
        source = "STATIC FALLBACK";
    }

    // 🔍 DEBUG: Log exactly what is being rendered
    console.log(`[HiringTemplate] 🎨 RENDERING: ${source} | Count: ${displayProfiles.length} | First Profile: ${displayProfiles[0]?.name || displayProfiles[0]?.fullName || "None"}`);

    // 🎨 GLOBAL PAGE BACKGROUND
    const pageBackground = {
        background: isLight
            ? `radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
               radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
               linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)`
            : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "100vh"
    };

    return (
        <div style={pageBackground} className="min-h-screen w-full relative selection:bg-purple-500/30">
            <Helmet>
                <title>{content.hero.title} | GenSquad</title>
                <meta name="description" content={content.hero.subtitle} />
            </Helmet>

            <div className="relative z-10">
                <HeroSection content={content.hero} isLight={isLight} slug={slug} />

                {content.augmentationTypes && (
                    <FeatureGrid
                        title={content.augmentationTypes.title}
                        subtitle={content.augmentationTypes.subtitle}
                        cards={content.augmentationTypes.cards}
                        isLight={isLight}
                        variant="soft"
                    />
                )}

                {/* ✅ EXPERT PROFILES with Key to Force Re-mount */}
                <ExpertProfiles
                    key={`${slug}-${source}`} // Forces component to destroy and recreate if slug OR source changes
                    variant="industry"
                    title={content.expertProfiles?.title || "Meet Your Future Squad"}
                    subtitle={content.expertProfiles?.subtitle || "Browse available senior engineers ready to join your team within 48 hours."}
                    profiles={displayProfiles}
                    loading={loading}
                    subSection="hiring-need"
                    page={slug}
                />

                {content.customSquads && (
                    <FeatureGrid
                        title={content.customSquads.title}
                        subtitle={content.customSquads.subtitle}
                        cards={content.customSquads.cards}
                        isLight={isLight}
                        variant="bold"
                    />
                )}

                <Testimonials variant="industry" />

                {content.finalCTA && <FinalCTA content={content.finalCTA} isLight={isLight} />}
                {content.faq && <FAQSection faq={content.faq} isLight={isLight} />}
                
                {/* Global Animation Styles (Shortened for brevity) */}
                <style>{`
                  @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
                  .animate-gradient-x { background-size: 200% auto; animation: gradient-x 5s ease infinite; }
                `}</style>
            </div>
        </div>
    );
};

export default HiringNeedTemplate;