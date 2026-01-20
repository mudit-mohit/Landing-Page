import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Changed package for Vite

// Import features from the new location
import HeroSection from '../../features/gtm/landing/HeroSection';
import CompanyLogos from '../../features/gtm/landing/CompanyLogos';
import TalentMatching from '../../features/gtm/landing/TalentMatching';
import ChipCategories from '../../features/gtm/landing/ChipCategories';
import ExpertProfiles from '../../features/gtm/landing/ExpertProfiles';
import DevPartners from '../../features/gtm/landing/DevPartners';
import HowItWorks from '../../features/gtm/landing/HowItWorks';
import VettingProcess from '../../features/gtm/landing/VettingProcess';
import Testimonials from '../../features/gtm/landing/Testimonials';
import CallToAction from '../../features/gtm/landing/CallToAction';

// ✅ Import API
import { getTalents } from "../../services/api";

const Landing = () => {
    // ✅ State for Real Profiles
    const [dbProfiles, setDbProfiles] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch Real Profiles from DB
    useEffect(() => {
        let isMounted = true;

        const fetchProfiles = async () => {
            setLoading(true);
            setDbProfiles(null);

            try {
                const data = await getTalents();

                if (!isMounted) return;

                if (Array.isArray(data) && data.length > 0) {
                    // For Homepage, we might want to just show the first few, 
                    // or you could filter for a specific "featured" flag if you add one later.
                    // For now, we show the top 4 available profiles.
                    setDbProfiles(data);
                } else {
                    setDbProfiles([]); // Fallback to empty (component handles fallback)
                }
            } catch (error) {
                console.error("[Landing] ❌ API Error:", error);
                if (isMounted) setDbProfiles([]);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchProfiles();

        return () => { isMounted = false; };
    }, []);

    // ✅ Display Logic: Show top 4 profiles on the home page
    const displayProfiles = (dbProfiles && dbProfiles.length > 0)
        ? dbProfiles.slice(0, 4)
        : [];

    return (
        <>
            <Helmet>
                <title>Hire World-Class AI Engineers in 48 Hours</title>
            </Helmet>

            <HeroSection />
            <CompanyLogos />
            <TalentMatching />
            <ChipCategories />

            {/* ✅ CONNECTED TO BACKEND */}
            <ExpertProfiles
                subSection="home"
                page="home"
                // ✅ Pass Real Data
                profiles={displayProfiles}
                loading={loading}
            />

            <DevPartners />
            <HowItWorks />
            <VettingProcess />
            <Testimonials />
            {/* <CallToAction /> */}
        </>
    );
};

export default Landing;
