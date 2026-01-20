import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";
import { navigationData } from "../data/navigationData";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSection(null);
  }, [location]);

  const handleMouseEnter = (section) => setActiveSection(section);
  const handleMouseLeave = () => setActiveSection(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className="
          w-full fixed top-0 left-0 z-50
          backdrop-blur-md transition-colors duration-300
          bg-white/90 dark:bg-black/90
          border-b border-gray-200 dark:border-gray-800
        "
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 relative z-50">

          {/* LEFT: LOGO */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-black dark:text-white z-50">
            GenSquad
          </Link>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8 h-full">

            {/* 1. Mapped Dropdown Menus */}
            {navigationData.map((section, idx) => (
              <div
                key={idx}
                className="relative group h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(section)}
              >
                <button
                  className={`
                    text-sm font-medium transition-colors flex items-center gap-1 py-4
                    ${activeSection?.title === section.title
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
                    }
                  `}
                >
                  {section.title}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform duration-200 ${activeSection?.title === section.title ? "rotate-180" : ""}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              </div>
            ))}

            {/* 2. N8N Workflow Direct Link */}
            <Link
              to="/n8n-workflows"
              className="text-sm font-medium text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
            >
              N8N Workflows
              {/* Optional 'New' Badge */}
              <span className="bg-orange-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold tracking-wide">
                NEW
              </span>
            </Link>

            {/* 3. ✅ ADDED: Jobs Direct Link */}
            <Link
              to="/jobs"
              className="text-sm font-medium text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
            >
              Jobs
              <span className="bg-orange-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold tracking-wide">
                NEW
              </span>
            </Link>

          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-4 z-50">

            <button
              onClick={toggleTheme}
              className="
                flex items-center gap-2 px-3 py-2 rounded-md
                text-black dark:text-white
                hover:bg-gray-100 dark:hover:bg-white/10
                transition-all
              "
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84 5 3.09 3.59 4.5l1.75 1.75L6.76 4.84zM1 13h3v-1H1v1zM21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              )}
            </button>

            <Link
              to="/talent"
              className="hidden lg:block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Hire Talent
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-black dark:text-white"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-full">
          <MegaMenu activeSection={activeSection} closeMenu={handleMouseLeave} />
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default NavBar;