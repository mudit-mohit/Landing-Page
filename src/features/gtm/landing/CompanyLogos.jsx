import React from 'react';
import { useTheme } from "../../../hooks/useTheme";

const CompanyLogos = ({ variant = "home" }) => {
  const { isLight } = useTheme();
  const isIndustry = variant === "industry";

  // LOGO DATA
  const logos = [
    { src: "/images/img_logo.svg", width: "68px" },
    { src: "/images/img_logo_white_a700.svg", width: "98px" },
    { src: "/images/img_logo_white_a700_34x68.svg", width: "68px" },
    { src: "/images/img_logo_black_900.svg", width: "76px" },
    { src: "/images/img_logo_white_a700_34x78.svg", width: "78px" },
  ];

  return (
    <section
      className="w-full transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: isIndustry
          ? "transparent"
          : isLight ? "#ffffff" : "#181818",
        borderBottom: isIndustry
          ? "none"
          : isLight ? "1px solid #f3f4f6" : "none",
        borderTop: "none"
      }}
    >
      {/* --- INJECT KEYFRAMES --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* =========================================
          1. MOBILE & TABLET DESIGN: Infinite Marquee
          (Visible on screens smaller than 1024px)
      ========================================= */}
      <div className="block lg:hidden py-8">
        <div className="relative w-full overflow-hidden">

          {/* Fading Edges (Left & Right) */}
          <div className={`absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r ${isIndustry ? "from-transparent" : (isLight ? "from-white" : "from-[#181818]")} to-transparent`}></div>
          <div className={`absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l ${isIndustry ? "from-transparent" : (isLight ? "from-white" : "from-[#181818]")} to-transparent`}></div>

          {/* Scrolling Track */}
          <div
            className="flex items-center gap-10 w-max"
            style={{
              filter: isLight ? "invert(1) opacity(0.8)" : "opacity(0.9)",
              animation: "marquee 20s linear infinite" // Animation applied directly here
            }}
          >
            {/* Render logos 4 times to ensure seamless loop on wider tablets */}
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt="Company Logo"
                style={{ width: logo.width }}
                className="h-[28px] object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          2. DESKTOP DESIGN: Static & Clean
          (Visible only on Large screens 1024px+)
      ========================================= */}
      <div className="hidden lg:block w-full px-[124px] py-[20px]">
        <div
          className="flex justify-between items-center transition-all duration-300"
          style={{
            filter: isLight ? "invert(1) opacity(0.8)" : "opacity(0.9)"
          }}
        >
          {logos.map((logo, index) => (
            <React.Fragment key={index}>
              <img
                src={logo.src}
                alt="Logo"
                style={{ width: logo.width }}
                className="h-[34px] object-contain"
              />
              {/* Divider */}
              {index !== logos.length - 1 && (
                <div className="w-[1px] h-[54px] bg-[#f1f1f3] opacity-30"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CompanyLogos;