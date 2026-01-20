import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from "../../hooks/useTheme";

import ProfileBanner from "../../features/gtm/profile/ProfileBanner";
import ProfileSidebar from "../../features/gtm/profile/ProfileSidebar";
import ProfileDetails from "../../features/gtm/profile/ProfileDetails";
import SimilarTalent from "../../features/gtm/profile/SimilarTalent";
import { getTalentById, getAllTalent } from "../../services/api";

const TalentProfile = () => {
  const { id } = useParams();
  const { isLight } = useTheme();

  // 🎨 SHARED BACKGROUND STYLE
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

  // 1. Fetch Data
  const [profile, setProfile] = React.useState(null);
  const [similarTalents, setSimilarTalents] = React.useState([]); // State for Similar Profiles
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        
        // 1. Fetch CURRENT Profile
        const data = await getTalentById(id);

        // 2. Fetch ALL Profiles (for Similar Section)
        const allProfiles = await getAllTalent();
        
        // Filter out the current profile from the list
        const filteredSimilar = allProfiles.filter(p => p._id !== id);
        setSimilarTalents(filteredSimilar);

        // High Contrast & Bright Color Palette for Chart
        const COLORS = [
          "#8b5cf6", // Bright Purple (Primary)
          "#06b6d4", // Neon Cyan
          "#f43f5e", // Bright Rose
          "#eab308", // Vivid Yellow
          "#10b981", // Emerald Green
          "#3b82f6", // Royal Blue
          "#f97316"  // Bright Orange
        ];

        // MAP BACKEND DATA TO FRONTEND STRUCTURE
        const formattedProfile = {
          id: data._id,
          name: data.fullName,
          title: data.title,
          image: data.profileImage || "/images/img_ellipse_1.png",
          resume: data.resume || null,

          // Experience
          experience: data.experiences?.[0]?.expYears ? `${data.experiences[0].expYears} Years` : "Experienced",

          availability: data.status || "Available",
          location: data.address ? `${data.address.city}, ${data.address.country}` : "Remote",
          
          topSkills: data.topSkills?.map(s => s.name) || [],
          about: data.about || "",

          // Pie Chart Data
          pieData: data.topSkills?.map((s, index) => ({
            name: s.name,
            usage: parseInt(s.usage, 10) || 0,
            years: parseInt(s.exp, 10) || 0,
            color: COLORS[index % COLORS.length]
          })) || [],

          allSkills: data.topSkills?.map(s => s.name) || [],
          tools: data.tools || [],

          experienceLine: data.experiences?.map(exp => ({
            role: exp.role,
            company: exp.company,
            duration: `${exp.joinYear} - ${exp.endYear || 'Present'}`,
            description: exp.description
          })) || [],

          education: data.education?.map(edu => ({
            school: edu.institute,
            degree: edu.degree,
            year: `${edu.startYear} - ${edu.endYear}`
          })) || [],

          certifications: data.certifications?.map(cert => ({
            name: cert.displayTitle || cert.institution || "Certification",
            issuer: cert.displaySubtitle || cert.company || "Issuer",
            year: cert.joinYear || ""
          })) || []
        };

        setProfile(formattedProfile);
      } catch (err) {
        console.error("Error fetching talent:", err);
        setError("Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={pageBackground}>
        <div className={`text-xl ${isLight ? "text-black" : "text-white"}`}>Loading Profile...</div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={pageBackground}>
        <div className="text-red-400 text-xl">{error || "Profile not found"}</div>
      </div>
    );
  }

  return (
    <div style={pageBackground} className="min-h-screen w-full relative">
      <Helmet>
        <title>{profile.name} | GenSquad Profile</title>
      </Helmet>

      {/* Main Content Grid 
          ✅ FIX: Added pt-[120px] to clear navbar. 
          ✅ Layout handles mobile (flex-col) vs desktop (flex-row) correctly.
      */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-12 flex flex-col lg:flex-row gap-8">
        <ProfileSidebar profile={profile} />
        <ProfileDetails profile={profile} />
      </div>

      {/* Similar Talent Section (Passing Real Data) */}
      <SimilarTalent profiles={similarTalents} />

      {/* Extra Padding before Footer */}
      <div className="pb-10"></div>
    </div>
  );
};

export default TalentProfile;