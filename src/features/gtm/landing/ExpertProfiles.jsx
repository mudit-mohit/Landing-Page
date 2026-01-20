import React, { useState, useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { Link } from 'react-router-dom';
import { getExperts } from "../../../services/api"; // Keep for fallback if needed

const ExpertProfiles = ({ variant = "home", title, subtitle, profiles = [], loading = false, subSection, page }) => {
  const { isLight } = useTheme();

  // 1. ORIGINAL DUMMY DATA (Fallback)
  const defaultExperts = [
    {
      id: 1,
      name: "Akash Sharma",
      role: "Senior Full-Stack Developer | 10 Yrs Exp.",
      image: "/images/img_ellipse_1.png",
      skills: ["Fintech", "Java", "Python", "React", "System Design"],
      description: "Results-oriented architect specializing in secure Fintech infrastructure and scalable Python/Java backends. Proven track record in high-frequency trading systems.",
      badges: [
        { icon: "/images/fintech.svg", text: "Fintech", bg: "#f4b840e5" },
        { icon: "/images/iit.svg", text: "IIT", bg: "#13a210" },
      ],
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Lead AI Engineer | 8 Yrs Exp.",
      image: "/images/img_ellipse_1.png",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      description: "Expert in building enterprise-grade NLP models and Computer Vision pipelines. Specializes in deploying scalable AI solutions using TensorFlow and PyTorch.",
      badges: [
        { icon: "/images/fintech.svg", text: "HealthTech", bg: "#3b82f6" },
        { icon: "/images/iit.svg", text: "BITS", bg: "#ef4444" },
      ],
    },
    {
      id: 3,
      name: "David Chen",
      role: "MLOps Specialist | 7 Yrs Exp.",
      image: "/images/img_ellipse_1.png",
      skills: ["AWS SageMaker", "Docker", "Kubernetes", "MLflow", "CI/CD"],
      description: "Focused on streamlining the ML lifecycle. Expert in Dockerizing models and building robust CI/CD pipelines for seamless production deployment on AWS.",
      badges: [
        { icon: "/images/fintech.svg", text: "SaaS", bg: "#8b5cf6" },
        { icon: "/images/iit.svg", text: "Stanford", bg: "#10b981" },
      ],
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Blockchain Architect | 5 Yrs Exp.",
      image: "/images/img_ellipse_1.png",
      skills: ["Solidity", "Rust", "Smart Contracts", "Web3.js", "Ethereum"],
      description: "Passionate about DeFi protocols and smart contract security. Successfully audited 50+ contracts and built decentralized applications (dApps) for high-growth startups.",
      badges: [
        { icon: "/images/fintech.svg", text: "DeFi", bg: "#f59e0b" },
        { icon: "/images/iit.svg", text: "MIT", bg: "#6366f1" },
      ],
    },
  ];

  // 2. STATE
  // Initialize with empty if loading, otherwise defaults
  const [displayedExperts, setDisplayedExperts] = useState(defaultExperts);
  const [expandedDesc, setExpandedDesc] = useState({});
  const [expandedSkills, setExpandedSkills] = useState({});

  // 3. FETCH & MAP DATA
  useEffect(() => {
    let isMounted = true;

    const handleData = async () => {
      // ✅ CASE A: Props passed from parent (e.g. Landing.jsx or TechnologyTemplate)
      if (profiles && profiles.length > 0) {
        const normalizedProps = profiles.map((p, i) => normalizeProfile(p, i));
        if (isMounted) setDisplayedExperts(normalizedProps);
        return;
      }

      // ✅ CASE B: Parent passed empty array explicitly (Search results found nothing)
      if (profiles && profiles.length === 0 && !loading) {
        // If specifically passed empty array, show empty. 
        // But if we are in "initial load" (loading=true), wait.
        if (isMounted) setDisplayedExperts([]);
        return;
      }

      // ✅ CASE C: Internal Fetch (Fallback for standalone usage)
      if (!profiles && subSection && page) {
        try {
          const data = await getExperts(subSection, page);
          if (isMounted && data.length > 0) {
            const normalizedDB = data.map((p, i) => normalizeProfile(p, i, true));
            setDisplayedExperts(normalizedDB);
          }
        } catch (err) {
          console.error("Failed to load experts internally", err);
        }
      }
    };

    handleData();
    return () => { isMounted = false; };
  }, [subSection, page, profiles, loading]);

  // 4. HELPER: Normalize Data to Match Design
  const normalizeProfile = (data, index, isFromDB = false) => {
    // Ensure skills is always an array of strings
    let safeSkills = ["Tech Expert"];
    if (Array.isArray(data.skills)) {
      safeSkills = data.skills;
    } else if (data.topSkills && Array.isArray(data.topSkills)) {
      // Handle case where skills might be objects { name: "Java", ... }
      safeSkills = data.topSkills.map(s => (typeof s === 'object' ? s.name : s));
    }

    return {
      id: data._id || data.id || index,
      name: data.fullName || data.name || "GenSquad Expert",
      role: data.title || data.role || "Senior Developer",
      image: data.profileImage || data.image || "/images/img_ellipse_1.png",
      skills: safeSkills,
      description: data.about || data.description || "Expert developer with proven track record in delivering scalable solutions.",
      badges: data.badges || [
        { icon: "/images/fintech.svg", text: "Verified", bg: "#3b82f6" },
        { icon: "/images/iit.svg", text: "Senior", bg: "#10b981" }
      ]
    };
  };

  const toggleDescription = (id) =>
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleSkills = (id) =>
    setExpandedSkills((prev) => ({ ...prev, [id]: !prev[id] }));

  // Background Logic
  const sectionClass = variant === "industry"
    ? "bg-transparent" // Transparent for Industry/Hiring Pages
    : isLight ? "bg-white" : "bg-[#0a0a0a]"; // Solid for Home Page

  return (
    <section className={`w-full px-4 sm:px-6 lg:px-[30px] ${sectionClass}`}>
      <div className="w-full max-w-[1166px] mx-auto pt-[40px] pb-[40px]">

        {/* HEADER */}
        <div className="flex flex-col justify-start items-center w-full px-[20px] sm:px-[80px]">
          <h2
            className={`text-[28px] sm:text-[38px] md:text-[50px] font-space font-medium 
              text-center ${isLight ? "text-black" : "text-[#f1f1f1]"
              }`}
          >
            {title || "Meet Our Elite AI Experts"}
          </h2>

          <p
            className={`text-[12px] sm:text-[15px] md:text-[20px] text-center mt-2 ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            {subtitle || "Every engineer passes rigorous multi-stage screening, real-world technical challenges, and in-depth communication reviews, ensuring only truly exceptional talent joins our network."}
          </p>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="w-full py-20 text-center animate-pulse">
            <p className={`text-xl ${isLight ? "text-gray-400" : "text-gray-600"}`}>Finding the best matches...</p>
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && displayedExperts.length === 0 && (
          <div className="w-full py-20 text-center">
            <p className={`text-lg ${isLight ? "text-gray-500" : "text-gray-400"}`}>No specific experts found for this category yet.</p>
          </div>
        )}

        {/* GRID (Mobile: 1 col, Desktop: 2 cols - displaying 4 cards total) */}
        {!loading && displayedExperts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mt-10">
            {displayedExperts.map((expert, idx) => {
              const isDescExpanded = expandedDesc[expert.id];
              const isSkillsExpanded = expandedSkills[expert.id];

              const visibleSkills = isSkillsExpanded
                ? expert.skills
                : expert.skills.slice(0, 6);

              return (
                <div
                  key={expert.id || idx}
                  // ✅ UPDATED: Added 'relative z-10' and explicit solid colors (bg-[#111]) to block grid lines
                  className={`
                  flex flex-col gap-4 rounded-[14px] p-[20px] shadow-md transition-all relative z-10
                  ${isLight
                      ? "bg-white border border-[#e6e6e6]"
                      : "bg-[#111] border border-[#222] shadow-[0_8px_30px_rgba(0,0,0,0.6)]" // Solid Dark Background
                    }
                `}
                >
                  {/* HEADER: Image + Name */}
                  <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center">
                    <img
                      src={expert.image}
                      className="w-[64px] h-[64px] rounded-full object-cover"
                      alt={expert.name}
                      onError={(e) => { e.target.src = "/images/img_ellipse_1.png" }} // Fallback image
                    />

                    <div>
                      <h3
                        className={`text-[20px] sm:text-[22px] font-dm font-semibold ${isLight ? "text-black" : "text-white"
                          }`}
                      >
                        {expert.name}
                      </h3>

                      <p
                        className={`text-[12px] sm:text-[14px] ${isLight ? "text-[#777]" : "text-[#bababa]"
                          }`}
                      >
                        {expert.role}
                      </p>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {expert.badges.map((badge, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-1 rounded-[6px]"
                            style={{ background: badge.bg }}
                          >
                            <img
                              src={badge.icon}
                              className="w-[18px] h-[18px]"
                              alt={badge.text}
                            />
                            <span className="text-white text-[12px] font-medium">
                              {badge.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {visibleSkills.map((skill, i) => (
                      <span
                        key={i}
                        className={`text-[13px] px-3 py-[6px] rounded-md ${isLight
                          ? "bg-[#f4f4f4] text-[#444]"
                          : "bg-[#2f2f2f] text-[#dcdcdc]"
                          }`}
                      >
                        {skill}
                      </span>
                    ))}

                    {!isSkillsExpanded && expert.skills.length > 6 && (
                      <button
                        onClick={() => toggleSkills(expert.id)}
                        className={`text-[13px] underline ${isLight ? "text-[#666]" : "text-[#bbbbbb]"
                          }`}
                      >
                        +{expert.skills.length - 6} more
                      </button>
                    )}

                    {isSkillsExpanded && (
                      <button
                        onClick={() => toggleSkills(expert.id)}
                        className={`text-[13px] underline ${isLight ? "text-[#666]" : "text-[#bbbbbb]"
                          }`}
                      >
                        Show less
                      </button>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className={`leading-[22px] 
                    text-[14px] ${isLight ? "text-[#444]" : "text-[#bababa]"
                      }`}
                  >
                    {isDescExpanded
                      ? expert.description
                      : expert.description.slice(0, 110) + "... "}
                    <button
                      onClick={() => toggleDescription(expert.id)}
                      className={`underline font-medium ${isLight ? "text-[#6b46c1]" : "text-white"
                        }`}
                    >
                      {isDescExpanded ? "Read Less" : "Read More"}
                    </button>
                  </p>

                  {/* BUTTON */}
                  <div className="mt-auto pt-4">
                    <div className="p-[2px] rounded-[10px] bg-gradient-to-r from-[#8b5cf6] to-[#513590] inline-block w-full sm:w-auto">
                      <Link to={`/talent/${expert.id}`} className="w-full">
                        <button
                          className={`w-full sm:w-auto px-8 py-3 rounded-[8px] text-[16px] flex items-center justify-center gap-2
                          ${isLight
                              ? "bg-white text-black"
                              : "bg-[#1b1b1b] text-white" // Button bg matches card slightly or contrasts
                            }`}
                        >
                          View Profile
                          <img
                            src="/images/img_callmade.svg"
                            className="w-[14px] h-[14px]"
                            alt="arrow"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MORE CTA */}
        <div className="flex justify-center mt-[40px]">
          <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#8b5cf6] to-[#513590] inline-block">
            <Link to="/talent">
              <button
                className={`px-10 py-3 rounded-[8px] text-[16px] font-semibold ${isLight ? "bg-white text-black" : "bg-[#161616] text-white"
                  }`}
              >
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfiles;