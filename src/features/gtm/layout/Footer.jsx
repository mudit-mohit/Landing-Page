import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

const Footer = () => {
  const { isLight } = useTheme();

  // 📋 FOOTER DATA
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Why us?", href: "/why-us" },
        { name: "Fractional CTO | CPO", href: "/fractal-cto-cpo" }
      ]
    },
    {
      title: "Hiring Need",
      links: [
        { name: "Team Augmentation", href: "/use-cases/hiring-need/team-augmentation" },
        { name: "Fully Managed Teams", href: "/use-cases/hiring-need/fully-managed-teams" },
        { name: "Build a Team", href: "/use-cases/hiring-need/build-a-team" },
        { name: "Fractional CTO/CPO", href: "/use-cases/hiring-need/fractional-leaders" }
      ]
    },
    {
      title: "Explore Industries",
      links: [
        { name: "AdTech/MarTech", href: "/use-cases/industry/adtech-martech" },
        { name: "E-commerce", href: "/use-cases/industry/e-commerce" },
        { name: "Ed - Tech", href: "/use-cases/industry/ed-tech" },
        { name: "Entertainment", href: "/use-cases/industry/entertainment" },
        { name: "Fintech", href: "/use-cases/industry/fintech" },
        { name: "Gaming", href: "/use-cases/industry/gaming" },
        { name: "Health Tech", href: "/use-cases/industry/health-tech" },
        { name: "Marketplace", href: "/use-cases/industry/marketplace" },
        { name: "Proptech", href: "/use-cases/industry/proptech" },
        { name: "Retail Tech", href: "/use-cases/industry/retail-tech" },
        { name: "SaaS", href: "/use-cases/industry/saas" },
        { name: "Transportation", href: "/use-cases/industry/transportation" }
      ]
    },
    {
      title: "Explore Solutions",
      links: [
        { name: "Generative AI", href: "/use-cases/solutions/gen-ai" },
        { name: "LLM & RAG Applications", href: "/use-cases/solutions/llm-rag-applications" },
        { name: "AI & ML Engineering", href: "/use-cases/solutions/ai-ml-engineering" },
        { name: "Data Platforms & Eng.", href: "/use-cases/solutions/data-platforms-engineering" },
        { name: "MLOps & Infrastructure", href: "/use-cases/solutions/mlops-infrastructure" },
        { name: "Cloud & DevOps", href: "/use-cases/solutions/cloud-devops-engineering" },
        { name: "Backend & API Platforms", href: "/use-cases/solutions/backend-api-platforms" },
        { name: "Automation & AI Agents", href: "/use-cases/solutions/automation-ai-agents" },
        { name: "Vector DB & Retrieval", href: "/use-cases/solutions/vector-database-retrieval" },
        { name: "Integration Engineering", href: "/use-cases/solutions/integration-engineering" },
        { name: "AI Quality & Testing", href: "/use-cases/solutions/ai-quality-testing" },
        { name: "Data Labeling & Annotation", href: "/use-cases/solutions/data-labeling-services" }
      ]
    },
    {
      title: "Explore Technologies",
      links: [
        { name: "Core AI & Machine Learning", href: "/use-cases/technology/core-ai-machine-learning" },
        { name: "LLMs & Natural Language", href: "/use-cases/technology/llms-natural-language" },
        { name: "Vision, Voice & Chatbots", href: "/use-cases/technology/vision-voice-chatbots" },
        { name: "Data Science & Analytics", href: "/use-cases/technology/data-science-analytics" },
        { name: "Data Engineering & Pipelines", href: "/use-cases/technology/data-engineering-pipelines" },
        { name: "MLOps, DevOps & Cloud", href: "/use-cases/technology/mlops-devops-cloud" },
        { name: "Backend & API Engineering", href: "/use-cases/technology/backend-api-engineering" },
        { name: "Automation Platforms", href: "/use-cases/technology/automation-platforms" },
        { name: "Vector Databases & Retrieval", href: "/use-cases/technology/vector-databases-retrieval" }
      ]
    }, {
      title: "Platform",
      links: [
        // { name: "How it works", href: "/how-it-works" },
        // { name: "Case studies", href: "/case-studies" },
        // { name: "Blog", href: "/blog" },
        // { name: "Client sign in", href: "/client-sign-in" },
        // { name: "Match with an agency", href: "/match-with-an-agency" },
        // ✅ NEW LINK ADDED HERE
        { name: "Vendor Dashboard", href: "/login" }
      ]
    },
  ];

  // Social Icons
  const socials = [
    { name: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
    // { name: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    // { name: "GitHub", d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" }
  ];

  return (
    <footer
      className={`
        relative w-full overflow-hidden border-t transition-colors duration-300
        ${isLight
          ? "bg-white border-gray-100 text-gray-900"
          : "bg-[#050505] border-[#222] text-white"
        }
      `}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 pb-10">

        {/* TOP SECTION: LOGO + CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
          <div className="max-w-md">
            <span className="text-3xl font-space font-bold tracking-tight mb-6 block">
              GenSquad
            </span>
            <p className={`text-lg leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
              Connecting ambitious companies with world-class AI engineers and tech talent in 48 hours. Vetted, Verified, and Ready to Deploy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-space font-bold text-xl">Ready to scale?</h4>
            <div className="flex flex-wrap gap-4">

              <Link to='/talent'>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/30 hover:scale-105">
                  Hire Talent
                </button>
              </Link>



            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: 6-COLUMN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-12 mb-20">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className={`font-space font-bold text-sm uppercase tracking-wider ${isLight ? "text-purple-700" : "text-purple-400"}`}>
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className={`
                        text-[13px] leading-relaxed transition-colors duration-200 hover:translate-x-1 inline-block
                        ${isLight ? "text-gray-600 hover:text-purple-600" : "text-[#888] hover:text-white"}
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SOCIALS */}
        <div className={`
          flex flex-col md:flex-row justify-between items-center pt-8 border-t 
          ${isLight ? "border-gray-100" : "border-[#222]"}
        `}>
          <div className={`text-sm ${isLight ? "text-gray-500" : "text-[#666]"}`}>
            © 2025 GenSquad Inc. All rights reserved.
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            {socials.map((social, i) => (
              <a
                key={i}
                href="https://www.linkedin.com/company/gen-squad/"
                className={`transition-colors ${isLight ? "text-gray-400 hover:text-purple-600" : "text-[#666] hover:text-white"}`}
                aria-label={social.name}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;