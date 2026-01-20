import React from "react";
import { useTheme } from "../../../hooks/useTheme";

const gradients = {
  green: "linear-gradient(90deg, #36904E 0%, #5CF666 100%)",
  purple: "linear-gradient(90deg, #513690 0%, #8B5CF6 100%)",
  red: "linear-gradient(90deg, #903637 0%, #F65C5F 100%)",
  pink: "linear-gradient(90deg, #903687 0%, #F35CF6 100%)",
};

const items = [
  { text: "Hire Cloud Engineers", gradient: gradients.purple },
  { text: "Strategy", gradient: gradients.pink },
  { text: "Product", gradient: gradients.green },
  { text: "People", gradient: gradients.red },
  { text: "Hire Cloud Engineers", gradient: gradients.purple },
  { text: "Strategy", gradient: gradients.pink },
  { text: "Product", gradient: gradients.green },
  { text: "People", gradient: gradients.red },
];

const ChipCategories = () => {
  const { isLight } = useTheme();

  return (
    <section
      className={`w-full overflow-hidden py-10 ${isLight ? "bg-[#fafafa]" : "bg-[#0a0a0a]"
        }`}
    >
      {/* ROW 1 → RIGHT */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
          {[...items, ...items].map((chip, i) => (
            <div
              key={i}
              className="px-6 py-2 rounded-xl text-white text-[20px] sm:text-[32px] font-dm font-medium shadow-sm"
              style={{ background: chip.gradient }}
            >
              {chip.text}
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 → LEFT */}
      <div className="relative w-full overflow-hidden mt-6">
        <div className="flex gap-4 animate-marquee-left whitespace-nowrap">
          {[...items, ...items].map((chip, i) => (
            <div
              key={i}
              className="px-6 py-2 rounded-xl text-white text-[20px] sm:text-[32px] font-dm font-medium shadow-sm"
              style={{ background: chip.gradient }}
            >
              {chip.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChipCategories;