import React from "react";
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";
import { Link } from 'react-router-dom';

const SolutionHero = ({
  title = "Scale your AI capabilities with our top-tier experts",
  subtitle = "Unlock the full potential of artificial intelligence with GenSquad's vetted AI & ML developers. From predictive analytics to generative AI, we deliver scalable, secure, and innovative solutions tailored to your business needs.",
  ctaText = "Hire Developers",
  tag = "AI & ML"
}) => {
  const { theme, isLight } = useTheme();

  // 🎨 CARD BACKGROUND (Exact logic from your previous file)
  const darkBg = "/images/hero_dark.png";
  const lightBg = "/images/hero_light.png";
  const backgroundImage = theme === "light" ? lightBg : darkBg;

  // Overlay to ensure text readability on top of the image
  const overlayStyle = theme === "light"
    ? "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.7))"
    : "linear-gradient(rgba(4,4,6,0.8), rgba(4,4,6,0.6))";

  return (
    // Outer Section: Transparent, provides the padding/margins
    <section className="w-full px-4 sm:px-6 lg:px-[40px] py-3">

      {/* THE HERO CARD */}
      <div
        className={`
          w-full max-w-[1440px] mx-auto 
          rounded-[40px] overflow-hidden relative 
          min-h-[600px] flex items-center justify-center
          shadow-2xl
          ${isLight ? "shadow-purple-500/10 border border-white/50" : "shadow-black/50 border border-white/10"}
        `}
        style={{
          backgroundImage: `${overlayStyle}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >

        {/* Centered Content */}
        <div className="relative z-10 max-w-[900px] px-6 text-center flex flex-col items-center animate-fade-in-up">

          {/* 1. Tag */}
          <div className={`
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8
            ${isLight
              ? "bg-white/50 border-purple-200 text-purple-700 backdrop-blur-md"
              : "bg-white/10 border-white/10 text-purple-300 backdrop-blur-md"
            }
          `}>
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase font-space">{tag} Solutions</span>
          </div>

          {/* 2. Heading (Dynamic) */}
          <h1 className={`
            font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            {title}
          </h1>

          {/* 3. Subtitle (Dynamic) */}
          <p className={`
            text-lg sm:text-xl leading-relaxed mb-10 max-w-[750px]
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            {subtitle}
          </p>

          {/* 4. Buttons (Centered) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to='/talent'>
              <Button
                text={"Get Started"}
                text_font_size="18"
                text_font_weight="600"
                text_color="#ffffff"
                fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
                padding="16px 48px"
                border_border_radius="12px"
                className="shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform"
              />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionHero;