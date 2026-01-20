import React from "react";
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";
// Ensure this path is correct based on your project structure
import SplashCursor from "../../../components/SplashCursor";
import { Link } from "react-router-dom";

const IndustryHero = ({ title, subtitle, ctaText }) => {
  const { isLight } = useTheme();

  // 🎨 BACKGROUND CONFIGURATION
  const backgroundStyle = {
    background: isLight
      ? "radial-gradient(circle at 15% 15%, rgba(139, 92, 246, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.35) 0%, transparent 45%), linear-gradient(to bottom, #f3f0ff, #f0f9ff)"
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
  };

  return (
    <section
      className="w-full relative flex items-center justify-center min-h-screen pt-20 pb-10 overflow-hidden"
      style={backgroundStyle}
    >

      <div className="absolute inset-0 z-0">
        <SplashCursor />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isLight
            ? `linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)`
            : `linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: isLight ? 1 : 0.03
        }}
      />

      {/* CONTENT LAYER */}
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 text-center relative z-10 pointer-events-none">
        <div className="flex flex-col items-center justify-center gap-6">

          {/* 1. Pill Label */}
          <div className={`
            px-4 py-1.5 rounded-full border text-sm font-medium pointer-events-auto
            ${isLight
              ? "bg-white/60 border-purple-300 text-purple-800 backdrop-blur-sm"
              : "bg-white/5 border-white/10 text-purple-300"
            }
          `}>
            Industry Expertise
          </div>

          {/* 2. Main Heading - FIXED LINE HEIGHT */}
          <h1 className={`
            font-space font-bold 
            text-4xl sm:text-5xl md:text-7xl 
            leading-[1.2]
            max-w-[1100px] pb-2
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            {title}
          </h1>

          {/* 3. Subtitle */}
          <p className={`
            text-lg sm:text-xl max-w-[800px] mx-auto leading-relaxed
            ${isLight ? "text-gray-700" : "text-[#bababa]"}
          `}>
            {subtitle}
          </p>

          {/* 4. Single Button with Dynamic Text */}
          <div className="mt-8 flex justify-center w-full pointer-events-auto">
            <Link to='/talent'>
            <Button
              text={"Get Started"}
              text_font_size="18"
              text_font_weight="500"
              text_color="#ffffff"
              fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
              padding="14px 48px"
              border_border_radius="8px"
              className="shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-200"
            />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryHero;