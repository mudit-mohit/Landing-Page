import React, { useState } from 'react';

// --- Reusable SVG Icon for the Plus/Minus ---
const PlusIcon = ({ isOpen }) => (
  <div className="relative w-4 h-4 flex-shrink-0">
    {/* Horizontal line */}
    <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-black rounded-full transition-transform duration-300 ease-out"></div>
    {/* Vertical line (rotates) */}
    <div 
      className={`absolute top-0 left-1/2 w-0.5 h-4 bg-black rounded-full transition-transform duration-300 ease-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}
    ></div>
  </div>
);

// --- Data for the FAQ Items ---
const faqData = [
  {
    question: "What is Outmate and what do you do?",
    answer: "Outmate is a growth partner that builds, manages, and optimizes your entire outbound system. We handle everything from infrastructure setup and TAM mapping to copywriting and inbox management, turning cold outreach into your primary, predictable revenue channel."
  },
  {
    question: "How do I know this will work for my business?",
    answer: "Our system is designed for B2B companies (especially services, agencies, and SaaS) with a proven offer and at least $50k/month in revenue. If you are looking to scale your lead generation systematically, this will work for you. We've proven it across 30+ B2B revenue teams."
  },
  {
    question: "We’ve tried cold outreach before and it didn’t work. Why would this be different?",
    answer: "Most outreach fails due to poor data, generic messaging, and bad deliverability. We solve this by building a 'data-first' system, enriching your entire market with 130+ data points, and creating hyper-relevant messages for each specific segment. We don't just 'do outreach'; we engineer a complete system."
  },
  {
    question: "How do you send that many emails without hurting our domain or ending up in SPAM?",
    answer: "We build a completely separate, parallel infrastructure of sending domains and inboxes. Your primary corporate domain is never used for cold outreach, ensuring its reputation remains pristine. We handle all technical setup (DMARC, DKIM, SPF) and automated warmups."
  },
  {
    question: "What visibility do I have over your campaigns?",
    answer: "You have 100% visibility. We build everything inside your own dedicated tech stack (your own Clay, Instantly, and CRM accounts). You own all the data, all the systems, and all the assets from day one. We just build and operate it for you."
  },
  {
    question: "If I choose to work with your team, what kind of engagement, support and communication can I expect?",
    answer: "You get a dedicated Slack channel with our team for real-time communication. We hold weekly strategy calls to review performance, analyze market feedback, and plan new campaign 'angles'. We become an extension of your internal team."
  },
  {
    question: "What results should we expect in the first 90 days?",
    answer: "Month 1 is 'The Foundation'—we build your infrastructure, map your TAM, and launch initial test campaigns. Months 2 and 3 are for 'Optimization & Scaling'—we analyze winning segments, double down on what works, and build a predictable pipeline of qualified meetings."
  },
  {
    question: "Do I need to commit to a monthly subscription?",
    answer: "Yes, we work on a monthly retainer basis. Building a predictable revenue engine takes time to optimize. We are a long-term growth partner, not a one-time list provider. Our incentives are aligned with your long-term revenue growth."
  }
];

// --- Helper Component for each FAQ row ---
const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E1E2E3]">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-display font-semibold text-lg md:text-xl text-black pr-4">
          {item.question}
        </h3>
        <PlusIcon isOpen={isOpen} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-sans text-base md:text-lg text-[#4D4D4D] max-w-3xl leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};


// --- Main FAQ Section Component ---
const FaqSection = () => {
  return (
    <section 
      id="faq" 
      className="w-full max-w-[1280px] mx-auto px-4 pt-16 pb-20 border-t border-[#E1E2E3]"
    >
      {/* --- 1. Title Block --- */}
      <div className="flex flex-col items-center gap-10 mb-12">
        <div className="flex flex-col items-center gap-6">
          
          {/* Pill: "FAQ" */}
          <div className="flex items-center gap-4">
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
            <div className="border border-[#e2e2e2] bg-white rounded-full px-5 py-2 shadow-sm whitespace-nowrap">
              <p className="font-mono text-[11px] tracking-widest uppercase text-[#4D4D4D] font-medium">
                FAQ
              </p>
            </div>
            <svg width="40" height="10" viewBox="0 0 50 13" fill="none" className="opacity-20 hidden md:block rotate-180">
              <path d="M42.9956 10.5L42.0222 9.52672L44.7897 6.75954L45.4386 6.32061L45.3624 6.0916L44.5798 6.18702L0.5 6.18703L0.5 4.81298L44.5798 4.81298L45.3624 4.9084L45.4386 4.67939L44.7897 4.24046L42.0222 1.47328L42.9956 0.5L47.5 5.00382V5.99618L42.9956 10.5Z" fill="black"/>
            </svg>
          </div>
          
          {/* Main Title */}
          <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tight text-black text-center">
            Your questions answered
          </h2>
        </div>
      </div>

      {/* --- 2. Accordion Container --- */}
      <div className="w-full max-w-4xl mx-auto bg-white border border-[#E1E2E3] rounded-2xl shadow-sm px-6 md:px-12">
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;