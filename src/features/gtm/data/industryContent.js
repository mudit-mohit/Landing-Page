// Helper for default tech specs (unchanged)
const defaultTechSpecs = (industryName) => ({
  title: `Tailored Tech Specs for ${industryName}`,
  description: "Explore the specialized technologies and frameworks our vetted engineers use to build world-class solutions in your sector.",
  tabs: [
    { title: "AI & Machine Learning", image: "/images/industry_tab_1.png" },
    { title: "Cloud Infrastructure", image: "/images/industry_tab_2.png" },
    { title: "Data & Security", image: "/images/industry_tab_3.png" }
  ]
});

export const industryContent = {
  "adtech-martech": {
    hero: {
      title: "Your AI-Native Partner in AdTech Innovation",
      subtitle: "Build high-performing advertising platforms that optimize real-time bidding, targeting, and measurement with elite AI and engineering talent on demand.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("AdTech"), 
    services: {
      title: "End-to-End AI & AdTech Engineering Services",
      subtitle: "Access specialized AI talent for every stage of your advertising technology stack.",
      cards: [
        { title: "AI Model & Data Engineering", description: "Design, train, and deploy custom AI, ML, LLM, NLP, deep learning, and computer vision models. Data engineers build robust pipelines for analytics and targeting.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { title: "Ad Platform & Backend Dev", description: "Build and scale high-performing ad platforms—including bidding engines, exchanges, programmatic APIs, and real-time analytics.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { title: "MLOps & Cloud Infrastructure", description: "Streamline AI delivery with MLOps engineers and cloud specialists who automate model deployment, manage scalable infra, and ensure security.", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" },
        { title: "Data & Campaign Automation", description: "Unlock campaign efficiency with ChatGPT, n8n, Zapier, and Airflow. Enhance segmentation, reporting, and decisioning workflows.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { title: "Generative AI Solutions", description: "Deliver next-gen user experiences with LLM, RAG, voice AI, and prompt engineering experts to power search, chat, and intelligent assistants.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
        { title: "AI Product Leadership", description: "Bring strategic oversight with fractional AI product managers and solution architects to accelerate delivery and guarantee impact.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
      ]
    },
    solutions: {
      title: "AI-Powered Solutions for Every Industry",
      subtitle: "Specialized squads who understand your domain, data, and compliance needs.",
      cards: [
        { title: "E-commerce & Retail", description: "Build personalized shopping journeys and high-ROI campaigns with AI-driven targeting." },
        { title: "Fintech & Banking", description: "Increase customer acquisition with compliant AI for risk-aware targeting and fraud detection." },
        { title: "Media & Streaming", description: "Power real-time bidding, dynamic ad insertion, and content recommendations." },
        { title: "SaaS & B2B", description: "Accelerate pipeline with intelligent lead scoring and AI copilots embedded into your product." },
        { title: "Healthcare", description: "Deploy privacy-conscious AI for patient engagement while respecting regulatory standards." },
        { title: "Mobility & IoT", description: "Optimize routing and demand prediction with AI models tapping into real-time sensor data." }
      ]
    },
    talent: {
      title: "Work With Proven AdTech Talent",
      subtitle: "Tap into a curated network of senior specialists ready to plug into your roadmap.",
      profiles: [
        { name: "Senior Data Engineer", role: "Focus: Real-Time Bidding, Big Data", description: "Expert in building low-latency bidding engines and processing petabytes of bidstream data." },
        { name: "Full Stack Developer", role: "Focus: Programmatic Platforms", description: "Specialized in React/Node.js for high-frequency ad exchanges and dashboards." },
        { name: "Python Developer", role: "Focus: Ad Fraud Detection", description: "Built ML models to detect bot traffic and click fraud in real-time." },
        { name: "DevOps Specialist", role: "Focus: AdTech Infrastructure", description: "Manages high-load infrastructure handling millions of QPS with 99.99% uptime." }
      ]
    },
    vetting: {
      title: "Find top-performing AdTech teams effortlessly.",
      subtitle: "Our vetting process analyzes 500+ data points from performance and skills to culture and stability.",
      steps: [
        { title: "Pre-qualification & Benchmarks", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review & Feedback", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Leading startups and enterprises trust us with their most important initiatives.",
      items: [
        { quote: "Their clear and structured agency selection process helped us find our perfect product partner in just a few steps.", author: "Reiner Neusser", role: "Founder & CEO, Nestle" },
        { quote: "We narrowed down and created a high-quality shortlist, enabling us to start a relationship with our agency immediately.", author: "Pete Becker", role: "Product Manager, Fintech Solutions" },
        { quote: "The offering of top talent from specialized agencies delivers. It connected us to innovation partners around the world.", author: "Ayne Santiago", role: "Software Engineer, PLDT" }
      ]
    },
    faq: [
      { question: "What kind of talent can I hire through GenSquad?", answer: "GenSquad connects you with pre-vetted AI and engineering experts, including AI/ML and LLM engineers, data scientists, data and MLOps engineers, backend and cloud developers, automation specialists, and fractional AI product and solution leaders." },
      { question: "How fast can I start working with an engineer or squad?", answer: "Most teams receive a curated shortlist within 48 hours, then move straight to interviews and onboarding, so new talent can start contributing in days instead of months." },
      { question: "How do you vet AI and engineering talent?", answer: "Every expert goes through multi-step screening that covers technical depth, real-world project experience, communication skills, and professionalism, with only a small percentage accepted into the network." },
      { question: "Can I hire for short-term projects as well as long-term roles?", answer: "Yes. You can engage individual experts or full squads for rapid experiments, fixed-scope builds, ongoing team extensions, or fractional leadership roles." },
      { question: "How does pricing work?", answer: "GenSquad supports flexible models, hourly, monthly, and project-based, so you can match cost to your roadmap, team size, and level of seniority without hidden fees." },
      { question: "What if a match doesn't work out?", answer: "If a hire isn't the right fit, you can request a replacement during the initial engagement window, and GenSquad will quickly rematch you with alternative experts." }
    ]
  },
  
  "e-commerce": {
    hero: {
      title: "Your AI-Native Partner in E-commerce Innovation",
      subtitle: "Partner with pre-vetted AI engineers and product teams who design, ship, and scale personalization, search, and revenue optimization for modern online stores.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("E-commerce"),
    services: {
      title: "Our Ecommerce AI & Engineering Services",
      subtitle: "End-to-end builds across the ecommerce funnel, powered by specialized AI squads.",
      cards: [
        { title: "Personalization Engines", description: "Deploy recommendation engines and dynamic bundles that adapt to each shopper in real time to lift conversion.", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
        { title: "Search & Discovery", description: "Upgrade search with NLP, vector search, and smarter ranking so customers find the right products faster.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
        { title: "Pricing & Merchandising", description: "Implement dynamic pricing and discount engines that balance demand, inventory, and margin.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { title: "Demand Forecasting", description: "Use predictive models to forecast demand, optimize stock levels, and reduce returns.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
        { title: "Fraud, Risk & Trust", description: "Build ML systems to detect payment fraud, promo abuse, and fake accounts before they impact your bottom line.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
        { title: "Marketing Automation", description: "Connect LLMs and workflow tools to automate campaigns, customer support, and reporting.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547" }
      ]
    },
    solutions: {
      title: "E-commerce Solutions for Every Sector",
      subtitle: "Flexible squads that adapt proven AI patterns to your specific ecommerce model.",
      cards: [
        { title: "Marketplaces", description: "Enable smarter matching with AI-driven ranking and dynamic fees." },
        { title: "D2C & Brand Stores", description: "Unlock higher LTV with personalization and retention models built around your brand." },
        { title: "Quick Commerce", description: "Forecast hyper-local demand and optimize slots for speed and availability." },
        { title: "Fashion & Lifestyle", description: "Power visual search, style discovery, and fit-aware recommendations." },
        { title: "Electronics", description: "Guide complex decisions with comparison tools and recommendation systems." },
        { title: "B2B Wholesale", description: "Support complex catalogs and contract pricing with AI that predicts demand." }
      ]
    },
    talent: {
      title: "Work With Proven E-commerce Talent",
      subtitle: "Scale your team with specialized developers experienced in modern commerce stacks.",
      profiles: [
        { name: "Senior Magento Dev", role: "Focus: PHP, Node.js", description: "Expert in Enterprise Commerce, optimizing high-traffic storefronts." },
        { name: "Shopify Plus Expert", role: "Focus: Liquid, API Integration", description: "Specialized in custom themes and complex app integrations." },
        { name: "Mobile Commerce Eng", role: "Focus: React Native, iOS", description: "Building seamless m-commerce apps with high conversion rates." },
        { name: "Full Stack Developer", role: "Focus: Headless Commerce", description: "Architecting decoupled frontends for speed and flexibility." }
      ]
    },
    vetting: {
      title: "Find top-performing E-commerce teams effortlessly.",
      subtitle: "Our vetting process analyzes 500+ data points to ensure you work with the top 1% of talent.",
      steps: [
        { title: "Pre-qualification (Benchmarks)", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Leading retail brands trust us with their most important initiatives.",
      items: [
        { quote: "GenSquad helped us find the perfect product partner in just a few steps.", author: "Reiner Neusser", role: "Founder & CEO, Nestlé" },
        { quote: "We identified a mobile engineering partner to help with our roadmap.", author: "Tom Drapeau", role: "VP of Engineering" },
        { quote: "They helped us narrow down a high-quality shortlist for our agency choice.", author: "Phillip Mundy", role: "Founder & CEO" }
      ]
    },
    faq: [
      { question: "What ecommerce use cases can GenSquad help with?", answer: "GenSquad supports a wide range of ecommerce initiatives including product recommendations, on-site personalization, search and discovery, dynamic pricing and promotions, demand forecasting, fraud detection, and marketing automation." },
      { question: "Do you work with specific ecommerce platforms?", answer: "GenSquad engineers integrate with major platforms and stacks such as custom storefronts, headless commerce setups, and popular SaaS platforms, as well as adjacent tools like CDPs, CRMs, payment gateways, and marketing automation systems." },
      { question: "How long does it take to see impact from ecommerce AI projects?", answer: "Simple pilots like recommendations, search tuning, or basic automation can show measurable results within a few weeks, while deeper platform work typically ships in phased releases over a few months." },
      { question: "Can you work with our existing data and analytics setup?", answer: "Yes, teams can plug into your current data warehouses, tracking, and BI tools, then design pipelines and models that make better use of the data you already collect instead of forcing a full rebuild." },
      { question: "How do you handle data privacy and compliance for ecommerce brands?", answer: "GenSquad squads design solutions with privacy and compliance in mind, following regional regulations, minimizing data exposure, and aligning with your existing security, consent, and retention policies." },
      { question: "What if we don't have in-house AI expertise yet?", answer: "You can start with fractional AI leaders and senior engineers who help shape your roadmap, define use cases, set up the initial stack, and upskill your existing team as you go." }
    ]
  },

  "ed-tech": {
    hero: {
      title: "Your Trusted AI-Native Partner in EdTech Innovation",
      subtitle: "Build immersive, adaptive learning platforms and scalable education software that engage learners and empower educators.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("EdTech"),
    services: {
      title: "Our EdTech Development Services",
      subtitle: "End-to-end solutions across the learning journey, from core platforms to AI-powered experiences.",
      cards: [
        { title: "Adaptive Learning", description: "Design adaptive learning engines and mastery models that personalize content and pacing.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3" },
        { title: "Learning Analytics", description: "Build unified data platforms that ingest events from LMS and classroom tools for rich dashboards.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" },
        { title: "LMS & Portals", description: "Develop and scale LMS, student portals, and educator dashboards with high-availability architectures.", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
        { title: "Conversational AI", description: "Create AI tutors and voice bots that answer questions and guide practice across chat and web.", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 01-2 2h-5l-5 5v-5z" },
        { title: "Lifecycle Automation", description: "Automate admissions, grading, and reporting by connecting LMS, SIS, and CRM tools.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { title: "Program Strategy", description: "Define EdTech AI roadmaps, run pilots, and manage high-quality training data annotation.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
      ]
    },
    solutions: {
      title: "AI-Powered EdTech for Every Environment",
      subtitle: "Specialized squads adapting AI patterns to your curriculum and learners.",
      cards: [
        { title: "K-12 Schools", description: "Adaptive practice and classroom analytics to support differentiated instruction." },
        { title: "Universities", description: "Personalized degree planning and retention intervention systems." },
        { title: "Online Programs", description: "Recommendation engines and automated grading for global cohorts." },
        { title: "Corporate L&D", description: "Role-based learning paths and AI coaching connected to business outcomes." },
        { title: "Test Prep", description: "Secure, AI-enhanced assessment platforms with adaptive tests." },
        { title: "Inclusive Education", description: "Accessible experiences using speech and vision AI for diverse needs." }
      ]
    },
    talent: {
      title: "Work With Proven EdTech Talent",
      subtitle: "Scale your team with engineers who understand pedagogical standards.",
      profiles: [
        { name: "Senior LMS Architect", role: "Focus: Moodle, Canvas API", description: "Architecting scalable learning management systems." },
        { name: "EdTech Full Stack", role: "Focus: React, Gamification", description: "Building engaging, gamified student experiences." },
        { name: "Mobile Learning", role: "Focus: Flutter, Offline-First", description: "Creating accessible mobile learning apps for all regions." },
        { name: "AI Education Eng", role: "Focus: Adaptive Algorithms", description: "Developing personalization engines for student success." }
      ]
    },
    vetting: {
      title: "Find top-performing EdTech teams effortlessly.",
      subtitle: "Our vetting process analyzes 500+ data points to ensure you work with the top 1% of talent.",
      steps: [
        { title: "Technical Pre-qualification", value: "68%" },
        { title: "Organizational & Security Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Leading EdTech startups trust GenSquad.",
      items: [
        { quote: "GenSquad helped us find our perfect LMS partner in just a few steps.", author: "Reiner Neusser", role: "CEO, EdTech Innovators" },
        { quote: "We identified a mobile partner for our interactive learning roadmap.", author: "Tom Drapeau", role: "VP Engineering" },
        { quote: "They helped us build a powerful relationship with our dev agency.", author: "Phillip Mundy", role: "CEO, LearnFast" }
      ]
    },
    faq: [
      { question: "What kind of EdTech talent can we hire through GenSquad?", answer: "You can hire AI/ML and LLM engineers, data scientists, data engineers, full-stack and backend developers, MLOps and cloud engineers, as well as AI architects and PMs who have shipped LMS, virtual classroom, assessment, and learning analytics products." },
      { question: "Do GenSquad engineers have real EdTech domain experience?", answer: "Yes. Many candidates have worked on learning platforms, student data systems, adaptive learning engines, proctoring tools, or analytics for schools, universities, and corporate L&D teams." },
      { question: "How quickly can we start interviewing EdTech-focused engineers?", answer: "You typically receive a curated shortlist of pre-vetted EdTech engineers within 48 hours, allowing you to schedule interviews immediately and make hiring decisions in days, not months." },
      { question: "Can we hire for short-term pilots or fractional EdTech roles?", answer: "You can staff short proof-of-concepts, urgent feature sprints, or fractional AI leadership roles, as well as longer-term team extensions for ongoing platform development." },
      { question: "How are EdTech engineers vetted before they appear in our shortlist?", answer: "Every engineer passes multi-stage vetting that covers technical depth, past project quality, communication skills, and professionalism, so you only see candidates who can work effectively with product, pedagogy, and ops teams." },
      { question: "What if an EdTech hire doesn't turn out to be the right fit?", answer: "If a match isn't working, you can request a replacement and GenSquad will quickly rematch you with alternative engineers aligned to your requirements and culture." }
    ]
  },

  "entertainment": {
    hero: {
      title: "Your Trusted AI-Native Partner in Entertainment Tech",
      subtitle: "Build high-performing streaming platforms, immersive games, and interactive media applications that engage millions.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("Entertainment"),
    services: {
      title: "Our Entertainment AI & Engineering Services",
      subtitle: "Cross-functional squads for streaming, gaming, and interactive media.",
      cards: [
        { title: "Media Intelligence", description: "Design models for content recommendations, watch-time optimization, and moderation.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" },
        { title: "Media Platforms", description: "Build streaming backends, catalogue systems, and partner APIs that keep content in sync.", icon: "M4 6h16M4 10h16M4 14h16" },
        { title: "Generative Experiences", description: "Ship AI co-hosts, content discovery copilots, and smart search for media libraries.", icon: "M19.428 15.428a2 2 0 00-1.022-.547" },
        { title: "Automation & Tools", description: "Automate ingest, publishing, and royalties workflows by wiring CMS and DAM tools together.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { title: "Real-Time Engagement", description: "Build voice and chat interfaces for fan engagement and interactive storylines.", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5" },
        { title: "Delivery & QA", description: "Manage multi-platform releases and rigorously test media quality and AI behavior.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
      ]
    },
    solutions: {
      title: "AI-Powered Entertainment for Every Format",
      subtitle: "Squads tuned to the realities of high-traffic media and fandoms.",
      cards: [
        { title: "Video Streaming", description: "Low-latency streaming with AI-driven recommendations and churn prediction." },
        { title: "Music & Audio", description: "Power personalized playlists and smart audio search across devices." },
        { title: "Gaming", description: "Enhance games with AI NPC behavior, matchmaking, and analytics pipelines." },
        { title: "Sports & Live", description: "Deliver real-time stats and fan engagement bots that react instantly." },
        { title: "Digital Publishing", description: "Build reading experiences with adaptive recommendations and discovery." },
        { title: "Creator Platforms", description: "Match creators with fans using ranking and campaign analytics." }
      ]
    },
    talent: {
      title: "Work With Proven Entertainment Talent",
      subtitle: "Scale your team with engineers experienced in high-load media systems.",
      profiles: [
        { name: "Streaming Architect", role: "Focus: WebRTC, Node.js", description: "Expert in building scalable live streaming infrastructure." },
        { name: "Unity Developer", role: "Focus: C#, 3D Rendering", description: "Creating immersive mobile and console gaming experiences." },
        { name: "Media Backend Eng", role: "Focus: Python, DRM", description: "Securing content and managing rights management systems." },
        { name: "Smart TV Dev", role: "Focus: React Native, tvOS", description: "Building engaging apps for the big screen." }
      ]
    },
    vetting: {
      title: "Find top Media teams.",
      subtitle: "Our vetting process ensures you work with the top 1% of talent.",
      steps: [
        { title: "Technical Pre-qualification", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Leading media companies trust GenSquad.",
      items: [
        { quote: "GenSquad helped us find a mobile partner for our iHeartRadio roadmap.", author: "Tom Drapeau", role: "VP of Engineering" },
        { quote: "They helped us build a powerful relationship with our agency of choice.", author: "Phillip Mundy", role: "CEO, StreamLine" },
        { quote: "We found a great agency for our gaming project.", author: "Cordel Robbin", role: "Co-Founder & CEO" }
      ]
    },
    faq: [
      { question: "What kind of AI and engineering talent can we hire for entertainment projects?", answer: "You can hire AI/ML and LLM engineers, data scientists, backend and cloud engineers, streaming and media-backend specialists, game and real-time experience developers, automation engineers, and AI architects with domain experience in video, audio, or gaming." },
      { question: "How fast can we get candidates for our streaming or gaming team?", answer: "GenSquad typically shares a curated shortlist of pre-vetted engineers within 48 hours, so you can move straight to interviews and make hiring decisions in days instead of months." },
      { question: "Do your candidates have experience with media and entertainment stacks?", answer: "Many profiles come with hands-on experience in OTT platforms, CDNs, video processing, recommendation systems, real-time data pipelines, or game engines, and are matched to your specific tech stack and use case." },
      { question: "Can we hire for short-term projects, pilots, or fractional roles?", answer: "Yes. You can bring in contractors or fractional specialists for spikes in workload, PoCs, or targeted initiatives such as recommendation tuning or data pipeline setup—as well as longer-term team extensions." },
      { question: "How does GenSquad vet AI engineers before adding them to the marketplace?", answer: "Engineers go through multi-step screening that covers technical depth, real-world project experience, communication skills, and professionalism, so you only see candidates who are ready to contribute quickly." },
      { question: "What happens if an engineer isn't the right fit for our media product?", answer: "If a hire doesn't work out, you can request a replacement, and GenSquad will rematch you with alternative, pre-vetted candidates aligned to your requirements." }
    ]
  },

  "fintech": {
    hero: {
      title: "Your Trusted AI-Native Partner in Fintech Innovation",
      subtitle: "Build secure, compliant financial platforms and next-gen banking experiences with pre-vetted AI and engineering talent.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("Fintech"),
    services: {
      title: "Our Fintech AI & Engineering Services",
      subtitle: "Specialized squads for secure, compliant financial products.",
      cards: [
        { title: "Digital Banking", description: "Build mobile and web banking experiences, account services, and ledgers that scale securely.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
        { title: "Payments & Risk", description: "Power payment routing, real-time fraud detection, and PCI-aligned integrations.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
        { title: "Trading & Quant", description: "Build trading engines, pricing models, and analytics for markets and derivatives.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
        { title: "Blockchain & DeFi", description: "Ship wallets, DeFi protocols, and on/off-ramp integrations with smart contract engineers.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { title: "RegTech & Compliance", description: "Automate KYC/AML checks, sanctions screening, and regulatory reporting workflows.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { title: "Automation & Ops", description: "Orchestrate workflows, harden infra, and ensure safe, reliable releases with DevOps teams.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
      ]
    },
    solutions: {
      title: "AI Talent for Every Fintech Vertical",
      subtitle: "Pre-vetted engineers matched to your specific financial domain.",
      cards: [
        { title: "Digital Banks", description: "Build cloud-native banking stacks and KYC flows." },
        { title: "Payments & Wallets", description: "Implement payment gateways and real-time fraud detection." },
        { title: "Wealth & Crypto", description: "Power robo-advisors and on-chain exchanges." },
        { title: "Lending & Credit", description: "Design scoring models and underwriting engines." },
        { title: "Compliance", description: "Implement audit-ready architectures and reporting." },
        { title: "Personal Finance", description: "Build spend management and financial SaaS tools." }
      ]
    },
    talent: {
      title: "Work With Proven Fintech Talent",
      subtitle: "Access a curated bench of engineers who've shipped regulated products.",
      profiles: [
        { name: "Blockchain Architect", role: "Focus: Solidity, Ethereum", description: "Building secure smart contracts and DeFi protocols." },
        { name: "Security Engineer", role: "Focus: PCI-DSS, Pen Testing", description: "Ensuring bank-grade security for financial apps." },
        { name: "Quant Developer", role: "Focus: Python, Algo Trading", description: "Developing high-frequency trading algorithms." },
        { name: "Mobile Banking Dev", role: "Focus: Swift, Biometrics", description: "Creating secure and intuitive banking mobile apps." }
      ]
    },
    vetting: {
      title: "Find top-performing Fintech teams effortlessly.",
      subtitle: "Our vetting process analyzes 500+ data points to ensure you work with the top 1% of talent.",
      steps: [
        { title: "Technical & Security Benchmarks", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Financial institutions trust GenSquad.",
      items: [
        { quote: "GenSquad helped us build our mobile app ensuring total security and speed.", author: "Product Lead", role: "Wise" },
        { quote: "We identified a blockchain partner to launch our DeFi wallet quickly.", author: "Raymond Spoljaric", role: "CEO, CryptoStart" },
        { quote: "They helped us navigate the regulatory landscape with a RegTech partner.", author: "Compliance Director", role: "Mashreq Bank" }
      ]
    },
    faq: [
      { question: "What kind of Fintech talent can we hire through GenSquad?", answer: "You can hire AI/ML and data specialists, backend and full-stack engineers, cloud and security engineers, blockchain and smart-contract developers, quant engineers, and Fintech-focused architects and PMs with experience in banking, payments, trading, and compliance." },
      { question: "Do GenSquad engineers understand financial regulations and security requirements?", answer: "Yes. Many candidates have worked with PCI-DSS, SOC 2, PSD2, GDPR, KYC/AML workflows, and bank-grade security practices, and are matched based on both technical stack and regulatory context." },
      { question: "How fast can we start interviewing Fintech engineers?", answer: "You typically receive a curated shortlist of pre-vetted Fintech engineers within 48-72 hours, allowing you to move straight into interviews and technical evaluations." },
      { question: "Can we hire for short-term projects, audits, or pilots instead of long-term roles?", answer: "Yes. GenSquad supports flexible engagements, from short proof-of-concepts, security reviews, and migrations to longer-term team extensions and fractional architecture or PM roles." },
      { question: "How does vetting work for sensitive financial projects?", answer: "Engineers go through multi-step screening that covers core engineering skills, security mindset, past Fintech projects, and communication, so you only meet candidates who can operate in regulated, high-stakes environments." },
      { question: "What if a Fintech hire is not the right fit for our product?", answer: "If a match does not work out, you can request a replacement, and GenSquad will quickly rematch you with alternative, pre-vetted engineers aligned to your technical, domain, and compliance requirements." }
    ]
  },

  "gaming": {
    hero: {
      title: "Create Immersive Gaming Experiences",
      subtitle: "Build next-generation games and interactive experiences with AI Engineers, Backend Developers, and Technical Artists.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("Gaming"),
    services: {
      title: "Our Game Tech Engineering Services",
      subtitle: "Squads of pre-vetted engineers to power gameplay, data, and live-ops.",
      cards: [
        { title: "Core Gameplay", description: "Build core game logic, progression systems, and economies with AI and Backend devs.", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" },
        { title: "Multiplayer & Live-Ops", description: "Design low-latency services, matchmaking, and leaderboards for scale.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { title: "AI Player Intelligence", description: "Deliver personalization, smart NPC behavior, and in-game assistants.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3" },
        { title: "Data & Analytics", description: "Build data pipelines and analytics to optimize engagement and monetization.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" },
        { title: "Automation & Tools", description: "Automate build pipelines, ops workflows, and player messaging.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { title: "Quality & Training", description: "Manage roadmaps, enforce quality, and create labeled datasets for AI features.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
      ]
    },
    solutions: {
      title: "AI Talent for Every Game Type",
      subtitle: "Pre-vetted engineers matched to your genre and platform.",
      cards: [
        { title: "Mobile Games", description: "Optimize core loops and monetization for high-volume titles." },
        { title: "AAA Experiences", description: "Support complex systems and real-time telemetry on PC/console." },
        { title: "Esports", description: "Power matchmaking, ranking, and anti-cheat signals." },
        { title: "Live-Ops", description: "Automate events, offers, and player messaging." },
        { title: "Web3 Gaming", description: "Support complex economies and creator tools." },
        { title: "Serious Games", description: "Build simulations and adaptive difficulty for training." }
      ]
    },
    talent: {
      title: "Work With Proven Game Tech Talent",
      subtitle: "Build your next hit with engineers ready to plug into your pipeline.",
      profiles: [
        { name: "Senior Unity Dev", role: "Focus: Mobile Optimization", description: "Expert in C# and optimizing shaders for mobile performance." },
        { name: "Unreal Architect", role: "Focus: Blueprints, C++", description: "Building AAA physics and gameplay systems." },
        { name: "Technical Artist", role: "Focus: VFX, Rigging", description: "Bridging the gap between art and code for stunning visuals." },
        { name: "Backend Game Eng", role: "Focus: Golang, GameLift", description: "Scaling real-time multiplayer networking infrastructure." }
      ]
    },
    vetting: {
      title: "Find Top Game Engineers.",
      subtitle: "Multi-stage vetting for game-ready talent.",
      steps: [
        { title: "Technical Proficiency (Code & Art)", value: "68%" },
        { title: "Studio Organization & Pipeline", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Culture & Creativity", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Game teams rely on GenSquad.",
      items: [
        { quote: "GenSquad helped us staff AI and backend engineers to stabilize our live game.", author: "Creative Director", role: "Mobile RPG Studio" },
        { quote: "The engineers improved player retention within the first season.", author: "Head of Online Services", role: "Competitive Shooter" },
        { quote: "They matched us with engineers who plugged straight into our pipeline.", author: "Founder & CEO", role: "Indie Studio" }
      ]
    },
    faq: [
      { question: "What kind of gaming talent can we hire through GenSquad?", answer: "You can hire AI Engineers, ML Engineers, LLM Engineers, Data Scientists, Backend and Full-Stack Developers, DevOps and MLOps Engineers, Cloud Engineers, and Automation Specialists to power gameplay, analytics, and live-ops." },
      { question: "Do your engineers have real experience with game backends and live-ops?", answer: "Yes. Many Backend Developers, Cloud Engineers, and MLOps Engineers in the network have built real-time services such as matchmaking, leaderboards, and telemetry pipelines for high-concurrency games." },
      { question: "How fast can we start interviewing engineers for our game project?", answer: "GenSquad typically shares a curated shortlist of pre-vetted engineers within 48 hours so your team can move straight into interviews and technical assessments without slowing production." },
      { question: "Can we use GenSquad for short-term milestones or live-ops firefighting?", answer: "You can bring in AI Engineers, Backend Developers, or Automation Specialists for fixed milestones, performance tuning, analytics setup, or live-ops support, as well as for longer-term team extensions." },
      { question: "Can GenSquad help us add AI features like personalization, bots, or recommendations?", answer: "Yes. AI, ML, LLM, and RAG Engineers, supported by Data Engineers, can design and integrate features such as smart recommendations, player segmentation, chat or support bots, and AI-driven content into your current stack." },
      { question: "How are gaming-focused engineers vetted before they appear in our shortlist?", answer: "Engineers go through multi-step vetting covering core skills for their role (e.g., backend performance, data modeling, MLOps), code and project reviews, and communication checks so you only meet candidates ready to contribute quickly." }
    ]
  },

  "health-tech": {
    hero: {
      title: "Your Trusted AI-Native Partner in Health Tech Innovation",
      subtitle: "Build HIPAA-ready platforms, telemedicine apps, and AI-driven diagnostics with pre-vetted AI Engineers and Data Experts.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("Health Tech"),
    services: {
      title: "Our Health Tech AI & Engineering Services",
      subtitle: "Cross-functional squads for compliant data and patient-centric experiences.",
      cards: [
        { title: "Clinical Data Platforms", description: "Modernize EHR workflows and build FHIR/HL7 APIs for analytics.", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
        { title: "Telemedicine Products", description: "Power secure video visits, scheduling, and AI-assisted triage.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
        { title: "Remote Monitoring", description: "Ingest wearable data at scale and surface real-time alerts.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
        { title: "Predictive Analytics", description: "Build models for risk scoring, readmission prediction, and triage support.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" },
        { title: "Compliance & Security", description: "Implement encryption and audit logging for AI workloads handling PHI.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
        { title: "Operational Automation", description: "Automate admin tasks and reporting across EHR and CRM tools.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
      ]
    },
    solutions: {
      title: "Health Tech Solutions for Every Sector",
      subtitle: "Pre-vetted talent matched to your healthcare use case.",
      cards: [
        { title: "Hospitals", description: "Improve operational analytics and clinical workflows." },
        { title: "Digital Health", description: "Ship telehealth and patient engagement products faster." },
        { title: "Pharma & Biotech", description: "Support trial analytics and R&D platforms." },
        { title: "Payers & Insurance", description: "Modernize claims workflows and fraud detection." },
        { title: "Mental Health", description: "Secure chat and content personalization for wellness apps." },
        { title: "Home Health", description: "Power monitoring and caregiver dashboards." }
      ]
    },
    talent: {
      title: "Work With Proven Health Tech Talent",
      subtitle: "Engineers experienced in HIPAA/GDPR compliance.",
      profiles: [
        { name: "Senior EHR Architect", role: "Focus: FHIR, HL7", description: "Expert in healthcare interoperability standards." },
        { name: "Telehealth Full Stack", role: "Focus: WebRTC, HIPAA", description: "Building secure, real-time video consultation platforms." },
        { name: "IoMT Engineer", role: "Focus: Wearables", description: "Integrating Bluetooth LE devices for patient monitoring." },
        { name: "Health Data Scientist", role: "Focus: Predictive Analytics", description: "Developing AI diagnosis models and risk prediction." }
      ]
    },
    vetting: {
      title: "Find top-performing Health Tech teams effortlessly.",
      subtitle: "Vetting focuses on compliance awareness and AI skills.",
      steps: [
        { title: "Compliance & Security Benchmarks", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Health Tech teams ship secure products with GenSquad.",
      items: [
        { quote: "GenSquad found engineers who understood HIPAA from day one.", author: "Founder & CEO", role: "Telehealth Startup" },
        { quote: "Engineers hired made our predictive model pilot production-ready.", author: "VP Engineering", role: "Clinical Analytics Co" },
        { quote: "Shortlist focused on engineers with real medical data experience.", author: "Product Lead", role: "Digital Health Platform" }
      ]
    },
    faq: [
      { question: "What Health Tech roles can we hire through GenSquad?", answer: "You can hire AI Engineers, ML/LLM Engineers, Data Scientists, Data Engineers, Backend and Full-Stack Developers, MLOps and Cloud Engineers, QA Engineers, and Automation Specialists who work with EHRs, telemedicine, compliance, and medical analytics." },
      { question: "Do your engineers understand HIPAA and healthcare data privacy?", answer: "Yes. Many candidates have direct experience in HIPAA-compliant development, PHI data handling, and security best practices, so your builds are audit-ready and meet regulatory standards." },
      { question: "How fast can we start interviewing Health Tech engineers?", answer: "You typically receive a shortlist of pre-vetted Health Tech engineers within 48 hours, allowing you to move straight to interviews and technical assessment." },
      { question: "Can GenSquad help with EMR/EHR integrations, FHIR, and interoperability?", answer: "Yes. Data Engineers and Backend Developers in the network have worked with FHIR, HL7, and EMR/EHR integrations for hospitals, insurance platforms, and telehealth startups." },
      { question: "Can we hire for short-term pilots, urgent launches, or ongoing team extension?", answer: "Yes. You can staff pilots, MVPs, compliance audits, or specialized feature sprints as well as extend your core engineering team for long-term projects." },
      { question: "What if a Health Tech hire isn't the right fit for our team or compliance needs?", answer: "If a match isn't working, you can request a replacement, GenSquad will rematch you with new pre-vetted candidates who fit your technical, clinical, and organizational requirements." }
    ]
  },

  "marketplace": {
    hero: {
      title: "Your Trusted AI-Native Partner in Marketplace Innovation",
      subtitle: "Build scalable multi-vendor platforms, B2B exchanges, and P2P economies with pre-vetted AI and Backend Developers.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("Marketplace"),
    services: {
      title: "Our Marketplace AI & Engineering Services",
      subtitle: "Cross-functional squads for matching, payments, data, and operations.",
      cards: [
        { title: "Core Marketplace", description: "Build listing flows, dashboards, and scalable microservice architectures.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
        { title: "Payments & Risk", description: "Integrate payments, split payouts, and design risk signals for fraud reduction.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
        { title: "Search & Ranking", description: "Power search relevance and personalized feeds with AI matching.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
        { title: "Analytics & Insights", description: "Deliver self-serve analytics, GMV dashboards, and cohort analysis.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" },
        { title: "Automation", description: "Automate vendor onboarding, KYC checks, and back-office workflows.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { title: "Reliability & QA", description: "Keep models, APIs, and data flows resilient and improving.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
      ]
    },
    solutions: {
      title: "Marketplace Solutions for Every Model",
      subtitle: "Pre-vetted AI roles matched to your vertical.",
      cards: [
        { title: "B2B Exchanges", description: "Handle complex catalogs, RFQs, and negotiated pricing." },
        { title: "P2P Platforms", description: "Build identity checks, trust signals, and dispute workflows." },
        { title: "Service Marketplaces", description: "Power search, scheduling, and escrow-style payments." },
        { title: "Digital Assets", description: "Manage metadata search and secure wallet flows." },
        { title: "Rental & Subscription", description: "Handle availability, deposits, and recurring billing." },
        { title: "Hyper-Local Delivery", description: "Optimize dispatching, routing, and real-time tracking." }
      ]
    },
    talent: {
      title: "Work With Proven Marketplace Talent",
      subtitle: "Scale with engineers who understand two-sided networks.",
      profiles: [
        { name: "Marketplace Architect", role: "Focus: Microservices", description: "Designing scalable systems for high-traffic platforms." },
        { name: "Frontend Specialist", role: "Focus: Dashboards", description: "Building high-performance user interfaces for vendors." },
        { name: "Fintech Integration", role: "Focus: Stripe Connect", description: "Implementing complex split-payment logic." },
        { name: "Data Engineer", role: "Focus: Rec Sys", description: "Building recommendation engines for matching." }
      ]
    },
    vetting: {
      title: "Find top-performing Marketplace teams effortlessly.",
      subtitle: "Vetting built for mission-critical platforms.",
      steps: [
        { title: "Architecture & Code Quality", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Marketplace operators use GenSquad to unlock growth.",
      items: [
        { quote: "GenSquad helped us launch our B2B marketplace with scalable architecture.", author: "Reiner Neusser", role: "CEO, TradeConnect" },
        { quote: "Engineers plugged into our stack quickly and improved our funnel.", author: "Tom Drapeau", role: "VP of Engineering" },
        { quote: "Shortlist focused on talent with real marketplace experience.", author: "Phillip Mundy", role: "CEO, MarketMaker" }
      ]
    },
    faq: [
      { question: "What marketplace-focused roles can we hire through GenSquad?", answer: "You can hire AI Engineers, ML Engineers, LLM Engineers, Data Scientists, Data Engineers, Backend and Full-Stack Developers, Cloud and DevOps/MLOps Engineers, Integration Developers, Automation Specialists, AI PMs, and AI QA Engineers with experience in multi-vendor and two-sided platforms." },
      { question: "Do your engineers have prior experience building marketplaces?", answer: "Yes. Many candidates have worked on B2B exchanges, P2P platforms, service marketplaces, and hyper-local delivery apps, including features like vendor dashboards, search and ranking, payments, and analytics." },
      { question: "How quickly can we start interviewing engineers for our marketplace?", answer: "You typically receive a curated shortlist of pre-vetted marketplace engineers within 48 hours, so you can begin interviews and technical assessments almost immediately." },
      { question: "Can we hire engineers just for specific pieces like payments, search, or analytics?", answer: "Yes. You can bring in specialized roles—such as Backend Developers for split payments, Data/LLM/RAG Engineers for search and recommendations, or Automation Specialists for onboarding workflows—without committing to a full team." },
      { question: "How are marketplace engineers vetted before appearing in our shortlist?", answer: "Engineers go through multi-step vetting focused on architecture and code quality, experience with high-concurrency and transactional systems, data and analytics skills where relevant, and strong communication for remote collaboration." },
      { question: "What if a hire isn't the right fit for our marketplace?", answer: "If a match doesn't work out, you can request a replacement, and GenSquad will quickly rematch you with alternative, pre-vetted engineers aligned to your technical stack, business model, and culture." }
    ]
  },

  "proptech": {
    hero: {
      title: "Your Trusted AI-Native Partner in PropTech Innovation",
      subtitle: "Build smart building solutions and real-time real estate data platforms with pre-vetted AI, data, and backend engineers.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("PropTech"),
    services: {
      title: "Our PropTech AI & Engineering Services",
      subtitle: "Squads for property data, automation, and smart infrastructure.",
      cards: [
        { title: "Property Management", description: "Build systems for leases, tenants, maintenance, and payments.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
        { title: "Smart Building & IoT", description: "Integrate sensors and BMS data for energy optimization and safety.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { title: "Real Estate CRM", description: "Power lead routing, scoring, and pipeline dashboards for brokers.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { title: "Tenant Experience", description: "Build apps for bookings, access, support, and community.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
        { title: "Data & Valuation", description: "Build search, comps, and valuations across listings and spatial data.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" },
        { title: "Ops Intelligence", description: "Automate back-office workflows and reporting across PMS and finance.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
      ]
    },
    solutions: {
      title: "PropTech Solutions for Every Sector",
      subtitle: "Pre-vetted roles mapped to your property strategy.",
      cards: [
        { title: "Residential", description: "Power tenant apps and maintenance flows." },
        { title: "Commercial", description: "Optimize space utilization and ESG reporting." },
        { title: "Construction", description: "Support project tracking and BIM integrations." },
        { title: "Hospitality", description: "Staff inventory sync and guest communication." },
        { title: "Co-Working", description: "Build booking, access, and billing analytics." },
        { title: "Real Estate Fintech", description: "Power underwriting and investor dashboards." }
      ]
    },
    talent: {
      title: "Work With Proven PropTech Talent",
      subtitle: "Engineers who understand property operations and spatial data.",
      profiles: [
        { name: "IoT Architect", role: "Focus: MQTT, Sensors", description: "Designing scalable smart building networks." },
        { name: "PropTech Developer", role: "Focus: Yardi Integration", description: "Expert in legacy real estate ERP integrations." },
        { name: "Spatial Data Eng", role: "Focus: GIS, Mapbox", description: "Visualizing complex location data." },
        { name: "Mobile RE Dev", role: "Focus: Flutter, AR", description: "Building immersive property tour apps." }
      ]
    },
    vetting: {
      title: "Find top-performing PropTech teams effortlessly.",
      subtitle: "Our vetting process analyzes 500+ data points to ensure you work with the top 1% of talent.",
      steps: [
        { title: "Technical & IoT Proficiency", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Leading real estate firms trust GenSquad.",
      items: [
        { quote: "GenSquad staffed engineers who understood property ops.", author: "Tom Drapeau", role: "VP of Engineering" },
        { quote: "The IoT team delivered noticeable energy savings.", author: "Phillip Mundy", role: "CEO, Estate Tech" },
        { quote: "Found engineers to handle complex integrations.", author: "Cordel Robbin", role: "Co-Founder & CEO" }
      ]
    },
    faq: [
      { question: "What kind of PropTech talent can we hire through GenSquad?", answer: "You can hire AI Engineers, ML/LLM Engineers, Data Scientists, Data Engineers, Backend and Full-Stack Developers, Cloud and MLOps Engineers, DevOps Engineers, Integration Developers, Automation Specialists, AI PMs, AI QA Engineers, and Delivery Managers with experience in real estate and smart building systems." },
      { question: "Do your engineers have experience with property and building systems?", answer: "Yes. Many candidates have worked on property management platforms, tenant apps, IoT/sensor integrations, building automation, spatial data, and real estate analytics, and are matched to your specific stack and use case." },
      { question: "How fast can we start interviewing PropTech engineers?", answer: "Most teams receive a curated shortlist of pre-vetted engineers within 48 hours, so you can move directly to interviews and technical assessments without slowing live projects." },
      { question: "Can we hire engineers just for specific pieces like PMS integrations, IoT data, or analytics?", answer: "Yes. You can bring in specialized roles, such as Data Engineers for building telemetry, Backend Developers for PMS/CRM integrations, or RAG/LLM Engineers for valuation and search, without committing to a full team." },
      { question: "How are PropTech engineers vetted before we see them?", answer: "Engineers go through multi-step vetting focused on core technical skills, experience with real estate or IoT-heavy systems, code and architecture quality, and communication, so you only meet candidates ready to contribute quickly." },
      { question: "What if a hire isn't the right fit for our portfolio or culture?", answer: "If a match doesn't work out, you can request a replacement, and GenSquad will quickly rematch you with alternative, pre-vetted engineers aligned to your technical requirements and way of working." }
    ]
  },

  "retail-tech": {
    hero: {
      title: "Your Trusted AI-Native Partner in Retail Tech Innovation",
      subtitle: "Build seamless omnichannel experiences and next-gen POS systems with pre-vetted AI and engineering talent.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("Retail Tech"),
    services: {
      title: "Our Retail Tech Development Services",
      subtitle: "Cross-functional squads for transactions and personalization.",
      cards: [
        { title: "POS & Store Systems", description: "Build modern POS and in-store systems with real-time inventory.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { title: "E-Commerce", description: "Create performant web apps and headless commerce setups.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
        { title: "Supply Chain", description: "Build demand forecasting and replenishment models.", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" },
        { title: "Loyalty & Growth", description: "Power recommendations and omnichannel loyalty logic.", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
        { title: "Retail Analytics", description: "Deliver dashboards and cohort analysis for stores and digital.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" },
        { title: "Retail Operations", description: "Automate pricing updates and reporting across ERP.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
      ]
    },
    solutions: {
      title: "Retail Tech Solutions for Every Sector",
      subtitle: "Pre-vetted roles mapped to your retail vertical.",
      cards: [
        { title: "Fashion & Apparel", description: "Power size recommendations and style discovery." },
        { title: "Grocery & FMCG", description: "Manage perishable inventory and delivery logistics." },
        { title: "Luxury Retail", description: "Build clienteling and appointment booking apps." },
        { title: "Electronics", description: "Build guided selling and comparison tools." },
        { title: "Home & Furniture", description: "Enable AR visualization and configuration." },
        { title: "Pharmacies", description: "Handle compliant prescription data flows." }
      ]
    },
    talent: {
      title: "Work With Proven Retail Tech Talent",
      subtitle: "Scale with engineers understanding omnichannel data.",
      profiles: [
        { name: "POS Architect", role: "Focus: Cloud POS, Java", description: "Modernizing legacy point-of-sale systems." },
        { name: "Magento Developer", role: "Focus: Headless, AWS", description: "Scaling enterprise e-commerce platforms." },
        { name: "AR Retail Eng", role: "Focus: Unity, Mobile AR", description: "Creating immersive shopping experiences." },
        { name: "Supply Chain Scientist", role: "Focus: Predictive Logistics", description: "Optimizing inventory with machine learning." }
      ]
    },
    vetting: {
      title: "Find top-performing Retail Tech teams effortlessly.",
      subtitle: "Our vetting process analyzes 500+ data points to ensure you work with the top 1% of talent.",
      steps: [
        { title: "Technical Proficiency (POS/E-com)", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Leading retailers trust GenSquad.",
      items: [
        { quote: "GenSquad staffed engineers who understood retail realities.", author: "Reiner Neusser", role: "CEO, RetailGiant" },
        { quote: "Talent integrated smoothly for our mobile shopping upgrade.", author: "Tom Drapeau", role: "VP of Engineering" },
        { quote: "Easy to find a long-term partner for our roadmap.", author: "Phillip Mundy", role: "CEO, ShopSmart" }
      ]
    },
    faq: [
      { question: "What RetailTech roles can we hire through GenSquad?", answer: "You can hire AI Engineers, ML/LLM Engineers, Data Scientists, Data Engineers, Backend and Full-Stack Developers, Cloud and MLOps Engineers, DevOps Engineers, Integration Developers, Automation Specialists, AI PMs, AI QA Engineers, and Delivery Managers with experience in POS, e-commerce, and retail analytics." },
      { question: "Do your engineers have experience with POS and omnichannel retail systems?", answer: "Yes. Many candidates have worked on cloud POS, order management, inventory sync, loyalty integrations, and headless commerce architectures across web, app, and in-store touchpoints." },
      { question: "How fast can we start interviewing Retail Tech engineers?", answer: "Most teams receive a curated shortlist of pre-vetted engineers within 48 hours, so you can move straight into interviews and technical tests without slowing launches or peak-season work." },
      { question: "Can we hire engineers just for specific initiatives like loyalty, analytics, or AR?", answer: "Yes. You can bring in specialized roles, such as Data Scientists for demand forecasting, AI/LLM Engineers for personalization, or Automation Specialists for catalog and pricing workflows, without committing to a full team." },
      { question: "How are Retail Tech engineers vetted before we see them?", answer: "Engineers go through multi-step vetting focused on core technical skills, experience with transactional and high-traffic systems, data and analytics where relevant, and clear communication for collaborating with merchandising, marketing, and ops." },
      { question: "What if a hire isn't the right fit for our brand or stack?", answer: "If a match doesn't work out, you can request a replacement, and GenSquad will quickly rematch you with alternative, pre-vetted engineers aligned to your technology choices and ways of working." }
    ]
  },

  "saas": {
    hero: {
      title: "Your Trusted AI-Native Partner in SaaS Innovation",
      subtitle: "Build scalable subscription platforms and secure multi-tenant architectures with pre-vetted AI and engineering talent.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("SaaS"),
    services: {
      title: "Our SaaS Development Services",
      subtitle: "Cross-functional squads for architecture, data, and growth.",
      cards: [
        { title: "Core Architecture", description: "Design multi-tenant, microservice, and serverless architectures.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { title: "Subscription Billing", description: "Implement recurring billing, metering, and payment integrations.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { title: "Cloud & MLOps", description: "Handle provisioning, autoscaling, and secure deployment.", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
        { title: "API Engineering", description: "Build robust public APIs and webhooks that make your SaaS extensible.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { title: "Security & Compliance", description: "Implement identity, access controls, and audit logging for SOC 2.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
        { title: "Product Analytics", description: "Power health scoring, churn modeling, and in-product recommendations.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" }
      ]
    },
    solutions: {
      title: "SaaS Solutions for Every Industry",
      subtitle: "Pre-vetted AI roles matched to your go-to-market.",
      cards: [
        { title: "Enterprise SaaS", description: "Build SSO, audit logs, and data residency controls." },
        { title: "Vertical SaaS", description: "Encode specialized workflows for niche sectors." },
        { title: "Micro-SaaS & PLG", description: "Ship focused tools with self-serve upgrades." },
        { title: "Developer Platforms", description: "Design stable APIs and developer experiences." },
        { title: "MarTech", description: "Power lead scoring and campaign automation." },
        { title: "HR & Ops", description: "Build ATS and HRIS with secure data flows." }
      ]
    },
    talent: {
      title: "Work With Proven SaaS Talent",
      subtitle: "Scale with engineers who live multi-tenant products.",
      profiles: [
        { name: "Cloud Architect", role: "Focus: AWS, K8s", description: "Designing scalable cloud infrastructure." },
        { name: "Backend Engineer", role: "Focus: Microservices", description: "Building robust multi-tenant backends." },
        { name: "Frontend Specialist", role: "Focus: Dashboards", description: "Creating interactive data visualizations." },
        { name: "DevOps Engineer", role: "Focus: CI/CD", description: "Automating deployment pipelines." }
      ]
    },
    vetting: {
      title: "Find top-performing SaaS teams effortlessly.",
      subtitle: "Our vetting process analyzes 500+ data points to ensure you work with the top 1% of talent.",
      steps: [
        { title: "Technical & Cloud Proficiency", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Leading SaaS companies trust GenSquad.",
      items: [
        { quote: "GenSquad found engineers for a clean multi-tenant architecture.", author: "Reiner Neusser", role: "CEO, SaaS Ventures" },
        { quote: "Engineers made our infrastructure migration smooth.", author: "Tom Drapeau", role: "VP of Engineering" },
        { quote: "Shortlist understood subscription metrics perfectly.", author: "Phillip Mundy", role: "CEO, CloudTech" }
      ]
    },
    faq: [
      { question: "What SaaS roles can we hire through GenSquad?", answer: "You can hire AI Engineers, ML/LLM Engineers, Data Scientists, Data Engineers, Backend and Full-Stack Developers, Cloud and MLOps Engineers, DevOps Engineers, Integration Developers, Automation Specialists, AI PMs, AI QA Engineers, and Delivery Managers experienced with multi-tenant and subscription products." },
      { question: "Do your engineers have experience with multi-tenant and usage-based SaaS?", answer: "Yes. Many candidates have designed tenancy models, entitlement systems, metering and billing logic, and high-availability architectures for B2B and B2C SaaS platforms." },
      { question: "How quickly can we start interviewing SaaS engineers?", answer: "Most teams receive a curated shortlist of pre-vetted engineers within 48 hours, letting you move directly into interviews and technical assessments without slowing your roadmap." },
      { question: "Can we hire engineers just for specific initiatives like billing, analytics, or AI copilots?", answer: "Yes. You can bring in targeted roles, such as Backend Developers for billing and payments, Data and LLM/RAG Engineers for analytics and copilots, or MLOps Engineers for ML deployment, without committing to a full team." },
      { question: "How are SaaS engineers vetted before they appear in our shortlist?", answer: "Engineers go through multi-step vetting focused on distributed systems and cloud skills, experience with SaaS patterns (auth, billing, APIs), code and architecture quality, and strong communication for cross-functional collaboration." },
      { question: "What if a hire isn't the right fit for our product or culture?", answer: "If a match doesn't work out, you can request a replacement, and GenSquad will quickly rematch you with alternative, pre-vetted engineers that better align with your stack, stage, and way of working." }
    ]
  },

  "transportation": {
    hero: {
      title: "Your Trusted AI-Native Partner in Smart Mobility",
      subtitle: "Build fleet platforms, routing engines, and next-gen mobility apps with pre-vetted AI and backend engineers.",
      ctaText: "Book your AI Consultation"
    },
    techSpecs: defaultTechSpecs("Transportation"),
    services: {
      title: "Our Mobility AI & Engineering Services",
      subtitle: "Cross-functional squads for routing and real-time data.",
      cards: [
        { title: "Fleet Platforms", description: "Build systems for vehicle tracking, maintenance, and cost analytics.", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" },
        { title: "Driver Apps", description: "Power geolocation, ETA calculations, and secure payments.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
        { title: "Routing Optimization", description: "Design algorithms for route optimization and demand prediction.", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
        { title: "Telematics & IoT", description: "Ingest sensor data and surface real-time alerts.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { title: "Analytics & Reporting", description: "Deliver control towers and KPI reporting across networks.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4" },
        { title: "Back-Office Auto", description: "Automate dispatch and documentation across TMS and ERP.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
      ]
    },
    solutions: {
      title: "Mobility Solutions for Every Sector",
      subtitle: "Pre-vetted roles mapped to your logistics domain.",
      cards: [
        { title: "Logistics", description: "Build end-to-end visibility and warehouse tracking." },
        { title: "Automotive", description: "Power connected services and diagnostics dashboards." },
        { title: "Aviation", description: "Support crew scheduling and turnaround analytics." },
        { title: "Maritime", description: "Build port visibility and vessel tracking." },
        { title: "Micro-Mobility", description: "Support scooter ops and geofencing." },
        { title: "Last-Mile", description: "Optimize dispatch and driver apps for delivery." }
      ]
    },
    talent: {
      title: "Work With Proven Mobility Talent",
      subtitle: "Scale with engineers who understand geospatial data.",
      profiles: [
        { name: "Senior IoT Engineer", role: "Focus: Telematics", description: "Building robust fleet sensor networks." },
        { name: "Mobility Full Stack", role: "Focus: Geolocation", description: "Creating real-time tracking apps." },
        { name: "Traffic Scientist", role: "Focus: Predictive Modeling", description: "Optimizing routes with AI models." },
        { name: "Embedded Specialist", role: "Focus: Automotive", description: "Developing low-level vehicle software." }
      ]
    },
    vetting: {
      title: "Find top-performing Mobility teams effortlessly.",
      subtitle: "Vetting tuned for real-time, geo-aware systems.",
      steps: [
        { title: "Technical & IoT Proficiency", value: "68%" },
        { title: "Organizational Mapping", value: "36%" },
        { title: "Client Review (24-month lookback)", value: "24%" },
        { title: "Team Health & Culture", value: "12%" }
      ]
    },
    testimonials: {
      title: "Voices of Trust",
      subtitle: "Logistics providers trust GenSquad.",
      items: [
        { quote: "GenSquad staffed engineers made our fleet ops reliable.", author: "Logistics Lead", role: "Global Mobility Co" },
        { quote: "Talent integrated smoothly into our ride-booking stack.", author: "Tom Drapeau", role: "VP of Engineering" },
        { quote: "We shipped new fleet features on schedule.", author: "Phillip Mundy", role: "CEO, AutoTech" }
      ]
    },
    faq: [
      { question: "What mobility-focused roles can we hire through GenSquad?", answer: "You can hire AI Engineers, ML/LLM Engineers, Data Scientists, Data Engineers, Backend and Full-Stack Developers, Cloud and MLOps Engineers, DevOps Engineers, Integration Developers, Automation Specialists, AI PMs, AI QA Engineers, and Delivery Managers with experience in logistics, routing, and telematics." },
      { question: "Do your engineers have experience with fleets, routing, and real-time data?", answer: "Yes. Many candidates have worked on fleet management platforms, ride-hailing apps, routing engines, telematics pipelines, and real-time tracking dashboards, and are matched to your specific stack and use case." },
      { question: "How quickly can we start interviewing engineers for our mobility project?", answer: "Most teams receive a curated shortlist of pre-vetted engineers within 48 hours, allowing you to begin interviews and technical assessments almost immediately." },
      { question: "Can we hire engineers just for specific needs like routing optimization, IoT data, or delivery dispatch?", answer: "Yes. You can bring in specialized roles, such as Data Scientists for routing and forecasting, Data/Cloud/MLOps Engineers for telematics pipelines, or Automation Specialists for dispatch workflows, without committing to a full team." },
      { question: "How are mobility engineers vetted before we see them?", answer: "Engineers go through multi-step vetting focused on core technical skills, experience with real-time and geo-distributed systems, code and architecture quality, and the communication needed to work with ops and field teams." },
      { question: "What if a hire isn't the right fit for our operations or culture?", answer: "If a match doesn't work out, you can request a replacement, and GenSquad will quickly rematch you with alternative, pre-vetted engineers aligned to your technical requirements and way of working." }
    ]
  }
};