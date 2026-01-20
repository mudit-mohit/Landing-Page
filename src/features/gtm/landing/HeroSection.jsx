import React from "react";
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";
import { Link } from "react-router-dom";

// 📋 SEPARATE IMAGE GROUPS
// Column 1: Images 1, 2, 3
const imagesGroup1 = [
  "/images/ListImage1.png",
  "/images/ListImage2.png",
  "/images/ListImage3.png",
];

// Column 2: Images 4, 5, 6
const imagesGroup2 = [
  "/images/ListImage4.png",
  "/images/ListImage5.png",
  "/images/ListImage6.png",
];

// Duplicate each group to create the seamless infinite loop
const col1Images = [...imagesGroup1, ...imagesGroup1];
const col2Images = [...imagesGroup2, ...imagesGroup2];

const HeroSection = () => {
  const { isLight } = useTheme();

  return (
    // ✅ Added dynamic background classes based on isLight
    <section className={` 
      w-full relative overflow-hidden transition-colors duration-300
      ${isLight
        ? "bg-white"
        : "bg-[#050505]"
      }
    `}>
      <div className="w-full mt-20 mb-10 max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full min-h-[600px]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10 lg:pt-0">

            {/* Tag */}
            <div className={`
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6
              ${isLight
                ? "bg-purple-50 border-purple-100 text-purple-700"
                : "bg-white/5 border-white/10 text-purple-300"
              }
            `}>
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-wide uppercase font-space">Top 1% Talent</span>
            </div>

            {/* Heading */}
            <h1 className={`
              font-space font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-6
              ${isLight ? "text-gray-900" : "text-white"}
            `}>
              Hire Top-Tier AI Engineers <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">in Just 48 Hours</span>
            </h1>

            {/* Description */}
            <p className={`
              text-lg sm:text-xl leading-relaxed mb-10 max-w-[90%]
              ${isLight ? "text-gray-600" : "text-[#bababa]"}
            `}>
              Access a pre-vetted network of top 1% AI & software engineers. Reliable, specialized, and ready to deploy immediately.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Link to="/talent">
                <Button
                  text="Start Hiring"
                  text_font_size="18"
                  text_font_family="Be Vietnam Pro"
                  text_font_weight="500"
                  text_line_height="23px"
                  text_text_align="center"
                  text_color="#ffffff"
                  border_border="1px solid transparent"
                  border_border_image="linear-gradient(90deg,#8b5cf6 0%, #513590 100%)"
                  border_border_radius="8px"
                  fill_background_color={isLight ? "#6b46c1" : "#8b5cf6"}
                  layout_gap="8px"
                  padding="14px 40px"
                  className="inline-flex items-center gap-2 shadow-xl shadow-purple-500/20 hover:scale-105 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT IMAGE COLUMNS ================= */}
          {/* mask-gradient handles the fade transparency */}
          <div className="w-full lg:w-1/2 h-[600px] relative flex gap-6 overflow-hidden mask-gradient">

            {/* COLUMN 1: Moving UP */}
            <div className="w-1/2 relative h-full overflow-hidden">
              <div className="animate-scroll-up flex flex-col gap-6 absolute w-full top-0">
                {col1Images.map((src, i) => (
                  <div key={i} className={`w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shrink-0 ${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
                    <img
                      src={src}
                      alt={`Talent Group 1 - ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2: Moving DOWN */}
            <div className="w-1/2 relative h-full overflow-hidden">
              <div className="animate-scroll-down flex flex-col gap-6 absolute w-full top-0">
                {col2Images.map((src, i) => (
                  <div key={i} className={`w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shrink-0 ${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
                    <img
                      src={src}
                      alt={`Talent Group 2 - ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 🎬 ANIMATION STYLES */}
      <style>{`
        /* Scroll UP */
        @keyframes scrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        /* Scroll DOWN */
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }

        .animate-scroll-up {
          animation: scrollUp 40s linear infinite;
        }

        .animate-scroll-down {
          animation: scrollDown 40s linear infinite;
        }

        /* CSS MASK: This fades the content to transparent at top/bottom */
        .mask-gradient {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;