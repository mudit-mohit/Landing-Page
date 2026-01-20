import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const { isLight } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  // 📋 CONTENT CONFIGURATION (4 Steps)
  const stepContent = [
    {
      tab: "Define Requirements",
      title: "Define Requirements",
      description: "Outline your project scope, tech stack, and team size in a simple 2-minute brief. We help you crystalize exactly who you need to hire.",
      image: "/images/img_image_1.png" // Using existing asset
    },
    {
      tab: "Receive Curated Matches",
      title: "Receive Curated Matches",
      description: "Our algorithm identifies the best talent for your specific use case. You receive a shortlist of verified experts who match your timezone and tech stack.",
      image: "/images/img_image_1.png" // Using existing asset
    },
    {
      tab: "Interview & Select",
      title: "Interview & Select",
      description: "Review detailed profiles, conduct technical interviews, and choose your team. We facilitate the scheduling and feedback loop.",
      image: "/images/img_image_1.png" // Using existing asset
    },
    {
      tab: "Start Building",
      title: "Start Building",
      description: "Hire in as little as 48 hours and start shipping features. We handle contracts, compliance, and payments so you can focus on building.",
      image: "/images/img_image_1.png" // Using existing asset
    }
  ];

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-14 py-[35px] sm:py-[70px] 
      ${isLight ? "bg-white" : "bg-[#0a0a0a]"}`}
    >
      <div className="w-full max-w-[1440px] mx-auto">

        {/* HEADER & TABS CONTAINER */}
        <div className="flex flex-col gap-[25px] sm:gap-[50px] items-center mb-12 sm:mb-20">

          <div className="flex flex-col items-center px-0 sm:px-[120px]">

            {/* Main Heading */}
            <h2
              className={`text-[25px] sm:text-[38px] md:text-[50px] 
              font-space font-medium text-center 
              ${isLight ? "text-black" : "text-white"}`}
            >
              Here’s how it works...
            </h2>

            {/* Subheading */}
            <p
              className={`text-[10px] sm:text-[15px] md:text-[20px] 
              font-dm leading-[15px] sm:leading-[23px] md:leading-[30px] 
              text-center w-full mt-4
              ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"}`}
            >
              Define your needs and let our private network deliver curated, interview-ready candidates within 48 hours.
            </p>

            {/* STEPS TABS (Navigation) */}
            <div className="flex flex-wrap justify-center gap-[7px] sm:gap-[14px] mt-8">
              {stepContent.map((step, index) => {
                const active = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`
                      text-[14px] sm:text-[18px] px-4 py-2 rounded-md transition-all 
                      font-vietnam border whitespace-nowrap

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
        </div>

        {/* CONTENT SECTION (Split Layout) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full animate-fade-in-up">

          {/* LEFT IMAGE (Dynamic) */}
          <div className="w-full lg:w-[56%]">
            <img
              key={activeStep} // Triggers animation on change
              src={stepContent[activeStep].image}
              alt={stepContent[activeStep].title}
              className="w-full rounded-[10px] sm:rounded-[20px] object-cover aspect-[16/10] animate-fade-in"
            />
          </div>

          {/* RIGHT TEXT (Dynamic) */}
          <div className="w-full lg:w-[38%] flex flex-col gap-[16px] sm:gap-[32px]">

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

            <Link to='/talent'>
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

      {/* Animation Styles */}
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

export default HowItWorks;