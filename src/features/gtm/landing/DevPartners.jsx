import React from "react";
import Button from "../../../components/ui/Button";
import { useTheme } from "../../../hooks/useTheme";

const DevPartners = () => {
  const { isLight } = useTheme();

  const features = [
    { title: "Hire in 48 Hours", image: "/images/img_rectangle_157.png" },
    { title: "Vetted Experts", image: "/images/img_rectangle_157.png" },
    { title: "Flexible Engagements", image: "/images/img_rectangle_157.png" },
    { title: "Proven Success", image: "/images/img_rectangle_157.png" }
  ];

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-[30px] pt-[20px] pb-[40px] ${isLight ? "bg-white" : "bg-[#0a0a0a]"
        }`}
    >
      <div className="w-full max-w-[1166px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-[10px] sm:gap-[20px] justify-start items-center w-[70%] mx-auto mb-[23px] sm:mb-[46px]">
          <h2
            className={`text-[25px] sm:text-[38px] md:text-[50px] font-space font-medium leading-[25px] sm:leading-[38px] md:leading-[50px] text-center w-full ${isLight ? "text-black" : "text-[#f1f1f1]"
              }`}
          >
            Accelerate Growth with Verified Tech Partners
          </h2>

          <p
            className={`text-[10px] sm:text-[15px] md:text-[20px] font-dm font-normal leading-[15px] sm:leading-[23px] md:leading-[30px] text-center w-full ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            Scale smarter, not harder. Partner with pre-vetted engineering squads and fractional leaders who deliver speed, precision, and enterprise-grade execution.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[16px] w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-[278px] h-[197px] sm:h-[394px] rounded-[14px] overflow-hidden ${isLight ? "bg-[#ffffff] shadow-md" : "bg-[#1a1a1a]"
                }`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover opacity-[0.92]"
              />

              {/* Purple Label */}
              <Button
                text={feature.title}
                text_font_size="18"
                text_font_family="Montserrat"
                text_font_weight="500"
                text_line_height="22px"
                text_text_align="left"
                text_color="#ffffff"
                border_border_radius="6px"
                fill_background_color="#8b5cf6"
                padding="4px 12px"
                className="absolute top-[10px] sm:top-[20px] left-[10px] sm:left-[20px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevPartners;