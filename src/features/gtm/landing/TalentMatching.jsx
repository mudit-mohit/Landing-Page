import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";
import { Link } from "react-router-dom";

const TalentMatching = () => {
  const { isLight } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  // 📋 CONTENT CONFIGURATION
  const stepContent = [
    {
      tab: "Share Your Vision",
      title: "Share Your Vision",
      description: "Tell us the roles you need, your AI roadmap, and the stack you run on. Our platform filters a global talent pool to surface a tight shortlist of engineers with verified experience in similar products, data setups, and industries.",
      image: "/images/img_rectangle_143.png"
    },
    {
      tab: "Interview Top Talent",
      title: "Interview Top Talent",
      description: "Tell us the roles you need, your AI roadmap, and the stack you run on. Our platform filters a global talent pool to surface a tight shortlist of engineers with verified experience in similar products, data setups, and industries.",
      image: "/images/img_rectangle_143.png"
    },
    {
      tab: "Deploy & Scale",
      title: "Deploy & Scale",
      description: "Once you say yes, we handle the details—from contracts to onboarding workflows. Your new AI engineers plug into your team within 48 hours, ready to ship features, own roadmaps, and scale with your product.",
      image: "/images/img_rectangle_143.png"
    }
  ];

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-14 py-[35px] sm:py-[70px] 
      ${isLight ? "bg-white" : "bg-[#0a0a0a]"}`}
    >
      <div className="w-full max-w-[1440px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col gap-[25px] sm:gap-[50px] items-center">

          <div className="flex flex-col items-center px-0 sm:px-[120px]">

            <h2
              className={`text-[25px] sm:text-[38px] md:text-[50px] 
              font-space font-medium text-center 
              ${isLight ? "text-black" : "text-white"}`}
            >
              AI Talent Matching, Simplified.
            </h2>

            <p
              className={`text-[10px] sm:text-[15px] md:text-[20px] 
              font-dm leading-[15px] sm:leading-[23px] md:leading-[30px] 
              text-center w-full 
              ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"}`}
            >
              Skip the search. Hire top-tier tech experts in just 3
              simple steps, from matching to onboarding - powered by our AI engine.
            </p>

            {/* STEPS TABS */}
            <div className="flex flex-col sm:flex-row gap-[7px] sm:gap-[14px] mt-4">
              {stepContent.map((step, index) => {
                const active = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`
                      text-[18px] px-4 py-2 rounded-md transition-all 
                      font-vietnam border

                      ${isLight
                        ? active
                          ? "bg-black text-white underline underline-offset-4 border-black"
                          : "bg-white text-[#8b8b8b] border-[#e5e5e5] hover:text-black"
                        : active
                          ? "bg-[#1A1A1A] text-white underline underline-offset-4"
                          : "text-[#bababa] hover:text-white"
                      }
                    `}
                  >
                    {step.tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CONTENT SECTION (Dynamic) */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full animate-fade-in-up">

            {/* LEFT IMAGE (Dynamic) */}
            <div className="w-full lg:w-[56%]">
              <img
                key={activeStep} // Key forces re-render animation on change
                src={stepContent[activeStep].image}
                alt={stepContent[activeStep].title}
                className="w-full rounded-[10px] sm:rounded-[20px] object-cover aspect-[16/10] animate-fade-in"
              />
            </div>

            {/* RIGHT TEXT (Dynamic) */}
            <div className="w-full lg:w-[38%] flex flex-col gap-[16px] sm:gap-[32px]">

              {/* ✅ FIXED: Explicit Line Heights to prevent overlapping */}
              <h3
                className={`
                  text-[25px] sm:text-[38px] md:text-[50px] 
                  font-space font-bold 
                  leading-[32px] sm:leading-[48px] md:leading-[60px]
                  pb-2
                  ${isLight ? "text-black" : "text-white"}
                `}
              >
                {stepContent[activeStep].title}
              </h3>

              <p
                className={`text-[10px] sm:text-[15px] md:text-[20px] font-dm 
                ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"}`}
              >
                {stepContent[activeStep].description}
              </p>
              <Link to="/talent">

                <Button
                  text="Get Started"
                  text_font_size="18"
                  text_font_family="Be Vietnam Pro"
                  text_font_weight="500"
                  text_line_height="23px"
                  text_color="#ffffff"
                  border_border="1px solid transparent"
                  border_border_radius="8px"
                  border_border_image="linear-gradient(90deg,#8b5cf6 0%, #513590 100%)"
                  fill_background_color={isLight ? "#6b46c1" : "#161616"}
                  padding="10px 40px 10px 26px"
                  className="inline-flex items-center gap-2 w-fit"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Simple fade animation for switching steps */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TalentMatching;