import React from 'react';

// --- Reusable SVG Icon Components (Extracted from Framer code) ---

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
    <circle cx="12" cy="12" r="10" fill="#34C759" fillOpacity="0.2"/>
    <path d="M11.2071 15.8713L17.6642 9.41422L16.25 8L11.2071 13.0429L8.41422 10.25L7 11.6642L11.2071 15.8713Z" fill="#34C759"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z" fill="#E36565" fillOpacity="0.2"/>
    <path d="M9.17202 7.75781L12.0005 10.5863L14.8289 7.75781L16.2431 9.17202L13.4147 12.0005L16.7431 14.8289L15.3289 16.2431L12.0005 13.4147L9.17202 16.2431L8.25781 14.8289L11.0863 12.0005L8.25781 9.17202L9.67202 7.75781Z" fill="#E36565"/>
  </svg>
);

const QuestionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0">
    <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z" fill="black" fillOpacity="0.15"/>
  </svg>
);

// --- Data for the table ---
const features = [
  "Systems & data ownership",
  "TAM mapping & segmentation",
  "Boosted response rate",
  "Ready to deploy automated workflows",
  "Built for scale",
  "Aligned incentives"
];

const outmateData = [
  "You own all the systems & data",
  "TAM fully mapped, enriched, segmented",
  "57% more positive replies per 100 contacts",
  "Proven workflows from 3M+ emails & 30+ B2B clients",
  "Scale to 1M+ emails reliably",
  "Incentives aligned on revenue growth"
];

const agenciesData = [
  "You're renting, no ownership",
  "Usually skipped due to cost",
  "They set the avg we beat",
  "Only if you find a great agency",
  "Things break at scale",
  "Retainer-first mindset"
];

const inhouseData = [
  "6+ months + $100K to build",
  "Hire dev + $50K in tools",
  "Hard to find this expertise",
  "Doesn’t exist in most CVs",
  "Doesn’t exist in most CVs",
  "Expertise gap limits impact"
];

const agenciesIcons = ["close", "close", "close", "question", "close", "close"];
const inhouseIcons = ["question", "question", "question", "close", "close", "close"];

const ComparisonSection = () => {
  return (
    <section 
      id="why-us" 
      className="w-full max-w-[1280px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]"
    >
      {/* --- 1. Title Block --- */}
      <div className="flex flex-col items-center gap-10 mb-12">
        <div className="flex flex-col items-center gap-6">
          
          {/* Pill: "ENGINEERED ADVANTAGE" */}
          <div className="flex items-center gap-4">
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
            <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
                ENGINEERED ADVANTAGE
              </p>
            </div>
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
          </div>
          
          {/* Main Title */}
          <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-center max-w-3xl">
            Why B2B revenue teams choose outmate:
          </h2>
        </div>
      </div>

      {/* --- 2. Comparison Table --- */}
      {/* We'll add the animation class here later */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4">
          
          {/* Col 1: Features */}
          <div className="flex flex-col">
            <div className="h-20"></div> {/* Spacer for header */}
            {features.map((item, index) => (
              <div key={index} className="flex items-center h-20 border-b border-[#E1E2E3]">
                <h3 className="font-display text-sm font-medium text-black">{item}</h3>
              </div>
            ))}
          </div>
          
          {/* Col 2: outmate.co */}
          <div className="flex flex-col bg-white border border-[#E1E2E3] rounded-2xl overflow-hidden shadow-sm">
            <div className="h-20 p-4 flex items-center">
              <h4 className="font-display font-semibold text-lg text-black">outmate.ai</h4>
            </div>
            {outmateData.map((item, index) => (
              <div key={index} className="flex items-start gap-3 h-20 p-4 border-t border-[#E1E2E3]">
                <CheckIcon />
                <p className="font-display text-sm text-black">{item}</p>
              </div>
            ))}
          </div>

          {/* Col 3: Other Agencies */}
          <div className="flex flex-col mt-6 md:mt-0">
            <div className="h-20 p-4 flex items-center">
              <h4 className="font-display font-semibold text-lg text-black">Other Clay & Outbound Agencies</h4>
            </div>
            {agenciesData.map((item, index) => (
              <div key={index} className="flex items-start gap-3 h-20 p-4 border-b border-[#E1E2E3]">
                {agenciesIcons[index] === 'close' ? <CloseIcon /> : <QuestionIcon />}
                <p className="font-display text-sm text-black/70">{item}</p>
              </div>
            ))}
          </div>

          {/* Col 4: In-house */}
          <div className="flex flex-col mt-6 md:mt-0">
            <div className="h-20 p-4 flex items-center">
              <h4 className="font-display font-semibold text-lg text-black">In-house</h4>
            </div>
            {inhouseData.map((item, index) => (
              <div key={index} className="flex items-start gap-3 h-20 p-4 border-b border-[#E1E2E3]">
                {inhouseIcons[index] === 'close' ? <CloseIcon /> : <QuestionIcon />}
                <p className="font-display text-sm text-black/70">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;