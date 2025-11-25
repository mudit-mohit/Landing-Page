import React from 'react';

// --- Reusable SVG Icon Components ---

// Red 'X' Icon
const CloseIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" className="w-5 h-5 flex-shrink-0 mt-1">
    <path d="M10 20.6792C4.47715 20.6792 0 16.202 0 10.6792C0 5.15635 4.47715 0.679199 10 0.679199C15.5228 0.679199 20 5.15635 20 10.6792C20 16.202 15.5228 20.6792 10 20.6792Z" fill="#E36565" fillOpacity="0.2"/>
    <path d="M7.17202 6.43652L10.0005 9.26496L12.8289 6.43652L14.2431 7.85073L11.4147 10.6792L14.2431 13.5076L12.8289 14.9218L10.0005 12.0934L7.17202 14.9218L5.75781 13.5076L8.58625 10.6792L5.75781 7.85073L7.17202 6.43652Z" fill="#C33939"/>
  </svg>
);

// Green 'Check' Icon
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0 mt-1">
    <circle cx="12" cy="12" r="10" fill="#34C759" fillOpacity="0.2"/>
    <path d="M11.2071 15.8713L17.6642 9.41422L16.25 8L11.2071 13.0429L8.41422 10.25L7 11.6642L11.2071 15.8713Z" fill="#34C759"/>
  </svg>
);

// --- Data for the two lists ---
const oldWay = [
  "Build lists by filters in ZoomInfo & SalesNav",
  "Group only by job title & persona",
  "SDRs “personalize” to fix weak targeting",
  "Spray & pray with “personalized” messages",
  "Scale by headcount, not systems",
  "Conversions drop as costs rise"
];

const newWay = [
  "TAM mapped, scored & enriched with custom signals",
  "Data defines the segments & writes the messages",
  "Copy built per TAM segment and tested rigorously",
  "Scale each segment once message-segment fit is found",
  "Scale by systems, AI & automation",
  "Pipeline compounds while team stays lean"
];

const SystemDesignSection = () => {
  return (
    <section 
      id="system-design" 
      className="w-full max-w-[1280px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]"
    >
      {/* --- 1. Title Block --- */}
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6">
          
          {/* Pill: "SYSTEM DESIGN" */}
          <div className="flex items-center gap-4">
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
            <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
                SYSTEM DESIGN
              </p>
            </div>
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
          </div>
          
          {/* Main Title */}
          <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-center max-w-3xl leading-tight">
            Where traditional outbound breaks — and how we solved it:
          </h2>
        </div>
      </div>

      {/* --- 2. Main Content Card --- */}
      {/* This uses the same `animate-fade-scale` as the Foundation cards */}
      <div className="mt-12 bg-white border border-[#E1E2E3] rounded-2xl shadow-sm p-8 md:p-12 opacity-0 animate-fade-scale">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          
          {/* --- LEFT COLUMN: "The Old Way" vs "The New Way" --- */}
          <div className="flex flex-col gap-10">
            
            {/* "The Old Way" List */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] tracking-widest uppercase text-[#C33939] font-medium">THE OLD WAY</span>
                  <CloseIcon />
                </div>
                <h3 className="font-display font-semibold text-2xl text-black">
                  Outbound that breaks
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {oldWay.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CloseIcon />
                    <span className="font-display text-lg text-[#4d4d4d]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#E1E2E3]"></div>

            {/* "The New Way" List */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12px] tracking-widest uppercase text-green-700 font-medium">THE NEW WAY</span>
                  <CheckIcon />
                </div>
                <h3 className="font-display font-semibold text-2xl text-black">
                  Your outbound system with us
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {newWay.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-display text-lg text-[#4d4d4d]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Diagram --- */}
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="././public/outmate_system_design.png" 
              alt="System design diagram"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesignSection;