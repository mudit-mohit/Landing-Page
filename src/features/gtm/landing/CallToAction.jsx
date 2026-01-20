import React from 'react';
import Button from "../../../components/ui/Button";

const CallToAction = () => {
  const rightImageIcon = {
    src: "/images/img_callmade.svg",
    width: 14,
    height: 14
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-14 py-[39px] sm:py-[78px] mt-[39px] sm:mt-[78px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[71px] sm:gap-[142px] justify-start items-start">
          {/* Main CTA Section */}
          <div className="flex justify-center items-center w-full px-[2px] sm:px-[4px]">
            <div className="flex flex-col gap-[24px] sm:gap-[48px] justify-start items-center w-[74%]">
              {/* Header */}
              <div className="flex flex-col justify-start items-center w-full">
                <h2 className="text-[25px] sm:text-[38px] md:text-[50px] font-space font-medium leading-[32px] sm:leading-[48px] md:leading-[64px] text-center text-[#f1f1f1]">
                  Accelerate your AI Talent Search
                </h2>
                <p className="text-[10px] sm:text-[15px] md:text-[20px] font-dm font-normal leading-[15px] sm:leading-[23px] md:leading-[30px] text-center text-[#bababa] w-full">
                  Connect with top-tier professionals who can transform your next breakthrough project
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full px-[94px] sm:px-[188px] gap-4">
                <Button
                  text="Get Started"
                  text_font_size="18"
                  text_font_family="Be Vietnam Pro"
                  text_font_weight="500"
                  text_line_height="23px"
                  text_text_align="center"
                  text_color="#ffffff"
                  border_border="1px solid transparent"
                  border_border_image="linear-gradient(90deg,#8b5cf6 0%, #513590 100%)"
                  border_border_radius="8px"
                  fill_background="linear-gradient(90deg,#8b5cf6 0%, #513690 100%)"
                  layout_gap="8px"
                  padding="8px 38px 8px 24px"
                  className="inline-flex items-center gap-2"
                >
                  Get Started
                  <img
                    src={rightImageIcon?.src}
                    alt=""
                    className="w-[14px] h-[14px]"
                  />
                </Button>

                <Button
                  text="Explore Talents"
                  text_font_size="18"
                  text_font_family="Be Vietnam Pro"
                  text_font_weight="500"
                  text_line_height="23px"
                  text_text_align="center"
                  text_color="#ffffff"
                  border_border="1px solid transparent"
                  border_border_image="linear-gradient(90deg,#8b5cf6 0%, #513590 100%)"
                  border_border_radius="8px"
                  fill_background_color="#161616"
                  padding="8px 24px"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col justify-end items-start w-[20%] px-[30px] sm:px-[60px]">
            <div className="bg-[#8b5cf6] p-[11px] sm:p-[22px] rounded-lg">
              <div className="mt-[120px] sm:mt-[240px]">
                <span className="text-[10px] sm:text-[20px] font-dm font-normal leading-[13px] sm:leading-[27px] text-center text-[#ffffff] block">
                  68%
                </span>
                <p className="text-[12px] sm:text-[24px] font-dm font-normal leading-[15px] sm:leading-[30px] text-left text-[#bababa] w-[76%] mt-[-2px] sm:mt-[-4px]">
                  Pre - qualification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;