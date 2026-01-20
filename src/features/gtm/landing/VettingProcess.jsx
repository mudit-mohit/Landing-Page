import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../../hooks/useTheme";

const VettingProcess = ({ variant = "home", title, subtitle, steps }) => {
  const { isLight } = useTheme();
  const isIndustry = variant === "industry";

  // Animation State
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 📋 DEFAULT DATA (Home Page / Fallback)
  // ✅ FIX: Adjusted 'width' values so 12% appears visibly larger than 1% while keeping text correct.
  const defaultSteps = [
    { title: "Pass Pre-Qualification", value: "68%", width: "75%" },
    { title: "Pass Skill Assessment", value: "36%", width: "45%" },
    { title: "Pass Technical Interview", value: "12%", width: "22%" }, // Increased width visually
    { title: "Final Reference Check & Onboarding", value: "Top 1%", width: "10%" }, // Smallest width
  ];

  // Use props if provided, else default
  const displaySteps = steps || defaultSteps;

  // 🎨 DYNAMIC STYLES (Preserving exact design)
  const sectionBg = isIndustry
    ? "bg-transparent"
    : isLight ? "bg-white" : "bg-[#0a0a0a]";

  const cardBg = isIndustry
    ? isLight
      ? "bg-white/70 backdrop-blur-xl border-white/50 shadow-2xl shadow-purple-500/10"
      : "bg-[#121212]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
    : isLight
      ? "border-[#8b5cf6] bg-white"
      : "border-[#ffffff20] bg-[#111111]";

  return (
    <section
      ref={sectionRef}
      className={`w-full px-4 sm:px-6 lg:px-[30px] py-10 ${sectionBg}`}
    >
      <div className="w-full max-w-[1166px] mx-auto flex flex-col items-center">

        {/* Header */}
        <h2 className={`
          text-[28px] sm:text-[40px] md:text-[50px] font-space font-medium text-center 
          leading-[32px] sm:leading-[48px] md:leading-[60px] pb-2
          ${isLight ? "text-gray-900" : "text-white"}
        `}>
          {title || "Excellence by Design."}
        </h2>

        <p className={`
          text-[14px] sm:text-[18px] md:text-[20px] font-dm text-center mt-4 leading-[28px] max-w-[800px]
          ${isLight ? "text-gray-600" : "text-[#bababa]"}
        `}>
          {subtitle || "Our vetting process analyzes 500+ data points, from code quality and problem-solving to soft skills and reliability, to ensure you hire the best."}
        </p>

        {/* CARD CONTAINER */}
        <div className={`
          w-full rounded-[32px] mt-[40px] p-6 sm:p-12 border transition-all duration-300
          ${cardBg}
        `}>
          {displaySteps.map((step, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 last:mb-0 gap-3 sm:gap-0">

              {/* Left Title */}
              <span className={`
                text-[16px] sm:text-[20px] font-dm w-full sm:w-[40%]
                ${isLight ? "text-gray-800" : "text-white"}
              `}>
                {step.title}
              </span>

              {/* Progress Bar Container */}
              <div className="w-full sm:w-[60%] flex items-center">
                <div className={`
                  w-full h-[26px] rounded-[8px] overflow-hidden
                  ${isLight ? "bg-purple-50" : "bg-[#2a2a2a]"}
                `}>
                  <div
                    className="h-full bg-[#8b5cf6] flex items-center justify-center text-white text-[12px] sm:text-[14px] font-medium transition-all duration-[1500ms] ease-out"
                    style={{
                      // Use width if provided, otherwise default to value (assuming it's a %)
                      width: isVisible ? (step.width || step.value) : "0%"
                    }}
                  >
                    <span className="whitespace-nowrap px-2">
                      {step.value}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VettingProcess;