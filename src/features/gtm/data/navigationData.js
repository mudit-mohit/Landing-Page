// Icons Helper
const icons = {
  hiring: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  industry: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  solutions: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  tech: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  stack: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  role: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  company: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  resources: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  default: "M13 10V3L4 14h7v7l9-11h-7z"
};

export const navigationData = [
  // 1. USE CASES
  {
    title: "Use Cases",
    path: "/use-cases",
    subsections: [
      {
        title: "Hiring Need",
        iconPath: icons.hiring,
        items: [
          { name: "Team Augmentation", href: "/use-cases/hiring-need/team-augmentation" },
          { name: "Fully Managed Teams", href: "/use-cases/hiring-need/fully-managed-teams" },
          { name: "Build a Team", href: "/use-cases/hiring-need/build-a-team" },
          { name: "Fractional CTO/CPO", href: "/use-cases/hiring-need/fractional-leaders" }
        ]
      },
      {
        title: "Industry",
        iconPath: icons.industry,
        items: [
          { name: "AdTech/MarTech", href: "/use-cases/industry/adtech-martech" },
          { name: "E-commerce", href: "/use-cases/industry/e-commerce" },
          { name: "Ed - Tech", href: "/use-cases/industry/ed-tech" },
          { name: "Entertainment", href: "/use-cases/industry/entertainment" },
          { name: "Fintech", href: "/use-cases/industry/fintech" },
          { name: "Gaming", href: "/use-cases/industry/gaming" },
          { name: "Health Tech", href: "/use-cases/industry/health-tech" },
          { name: "Marketplace", href: "/use-cases/industry/marketplace" },
          { name: "Proptech", href: "/use-cases/industry/proptech" },
          { name: "Retail Tech", href: "/use-cases/industry/retail-tech" },
          { name: "SaaS", href: "/use-cases/industry/saas" },
          { name: "Transportation", href: "/use-cases/industry/transportation" }
        ]
      },
      {
        title: "Solutions",
        iconPath: icons.solutions,
        // ✅ UPDATED: Matches 12 Sections from SolutionFull.pdf
        items: [
          { name: "Generative AI", href: "/use-cases/solutions/gen-ai" },
          { name: "LLM & RAG Applications", href: "/use-cases/solutions/llm-rag-applications" },
          { name: "AI & ML Engineering", href: "/use-cases/solutions/ai-ml-engineering" },
          { name: "Data Platforms & Eng.", href: "/use-cases/solutions/data-platforms-engineering" },
          { name: "MLOps & Infrastructure", href: "/use-cases/solutions/mlops-infrastructure" },
          { name: "Cloud & DevOps", href: "/use-cases/solutions/cloud-devops-engineering" },
          { name: "Backend & API Platforms", href: "/use-cases/solutions/backend-api-platforms" },
          { name: "Automation & AI Agents", href: "/use-cases/solutions/automation-ai-agents" },
          { name: "Vector DB & Retrieval", href: "/use-cases/solutions/vector-database-retrieval" },
          { name: "Integration Engineering", href: "/use-cases/solutions/integration-engineering" },
          { name: "AI Quality & Testing", href: "/use-cases/solutions/ai-quality-testing" },
          { name: "Data Labeling & Annotation", href: "/use-cases/solutions/data-labeling-services" }
        ]
      },
      {
        title: "Technology",
        iconPath: icons.tech,
        items: [
          { name: "Core AI & Machine Learning", href: "/use-cases/technology/core-ai-machine-learning" },
          { name: "LLMs & Natural Language", href: "/use-cases/technology/llms-natural-language" },
          { name: "Vision, Voice & Chatbots", href: "/use-cases/technology/vision-voice-chatbots" },
          { name: "Data Science & Analytics", href: "/use-cases/technology/data-science-analytics" },
          { name: "Data Engineering & Pipelines", href: "/use-cases/technology/data-engineering-pipelines" },
          { name: "MLOps, DevOps & Cloud", href: "/use-cases/technology/mlops-devops-cloud" },
          { name: "Backend & API Engineering", href: "/use-cases/technology/backend-api-engineering" },
          { name: "Automation Platforms", href: "/use-cases/technology/automation-platforms" },
          { name: "Vector Databases & Retrieval", href: "/use-cases/technology/vector-databases-retrieval" }
        ]
      },
      {
        title: "Techstack",
        iconPath: icons.stack,
        items: [
          { name: "OpenAI API", href: "/use-cases/techstack/openai-api" },
          { name: "Hugging Face", href: "/use-cases/techstack/hugging-face" },
          { name: "Langchain", href: "/use-cases/techstack/langchain" },
          { name: "Python", href: "/use-cases/techstack/python" },
          { name: "NodeJS", href: "/use-cases/techstack/nodejs" },
          { name: "GoLang", href: "/use-cases/techstack/golang" },
          { name: "React", href: "/use-cases/techstack/react" },
          { name: "Next.js", href: "/use-cases/techstack/nextjs" },
          { name: "Django", href: "/use-cases/techstack/django" },
          { name: "PostgreSQL", href: "/use-cases/techstack/postgresql" },
          { name: "MongoDB", href: "/use-cases/techstack/mongodb" },
          { name: "Amazon Web Services", href: "/use-cases/techstack/aws" },
          { name: "Google Cloud Platform", href: "/use-cases/techstack/gcp" },
          { name: "Kubernetes", href: "/use-cases/techstack/kubernetes" }
        ]
      }
    ]
  },

  // 2. OUR SERVICES (Unchanged)
  {
    title: "Our Services",
    path: "/hire", // Updated path if you have a main listing page, otherwise keeps it generic
    subsections: [
      {
        title: "",
        iconPath: icons.stack,
        items: [
          { name: "Hire AI Engineers", href: "/hire/hire-ai-engineers" },
          { name: "Hire Machine Learning Engineers", href: "/hire/hire-machine-learning-engineers" },
          { name: "Hire Deep Learning Engineers", href: "/hire/hire-deep-learning-engineers" },
          { name: "Hire NLP Engineers", href: "/hire/hire-nlp-engineers" },
          { name: "Hire LLM Engineers", href: "/hire/hire-llm-engineers" },
          { name: "Hire Computer Vision Engineers", href: "/hire/hire-computer-vision-engineers" },
          { name: "Hire Data Scientists", href: "/hire/hire-data-scientists" },
          { name: "Hire Data Engineers", href: "/hire/hire-data-engineers" },
          { name: "Hire Data Analysts", href: "/hire/hire-data-analysts" },
          { name: "Hire MLOps Engineers", href: "/hire/hire-mlops-engineers" },
          { name: "Hire Cloud Engineers", href: "/hire/hire-cloud-engineers" },
          { name: "Hire Backend Developers", href: "/hire/hire-backend-developers" },
          { name: "Hire Full-Stack Developers", href: "/hire/hire-full-stack-developers" },
          { name: "Hire Python Developers", href: "/hire/hire-python-developers" },
          { name: "Hire DevOps Engineers", href: "/hire/hire-devops-engineers" },
          { name: "Hire LangChain Developers", href: "/hire/hire-langchain-developers" },
          { name: "Hire LlamaIndex Developers", href: "/hire/hire-llamaindex-developers" },
          { name: "Hire RAG Experts", href: "/hire/hire-rag-experts" },
          { name: "Hire Vector DB Engineers", href: "/hire/hire-vector-db-engineers" },
          { name: "Hire Prompt Engineers", href: "/hire/hire-prompt-engineers" },
          { name: "Hire ChatGPT Automation Experts", href: "/hire/hire-chatgpt-automation-experts" },
          { name: "Hire n8n Experts", href: "/hire/hire-n8n-experts" },
          { name: "Hire Zapier Experts", href: "/hire/hire-zapier-experts" },
          { name: "Hire Make.com Experts", href: "/hire/hire-make-com-experts" },
          { name: "Hire Airflow Engineers", href: "/hire/hire-airflow-engineers" },
          { name: "Hire Kubeflow Engineers", href: "/hire/hire-kubeflow-engineers" },
          { name: "Hire Voice AI Engineers", href: "/hire/hire-voice-ai-engineers" },
          { name: "Hire Chatbot Developers", href: "/hire/hire-chatbot-developers" },
          { name: "Hire LLM Fine-Tuning Specialists", href: "/hire/hire-llm-fine-tuning-specialists" },
          { name: "Hire API Integration Engineers", href: "/hire/hire-api-integration-engineers" },
          { name: "Hire AI Solution Architects", href: "/hire/hire-ai-solution-architects" },
          { name: "Hire AI QA & Testing Specialists", href: "/hire/hire-ai-qa-testing-specialists" },
          { name: "Hire AI Product Managers", href: "/hire/hire-ai-product-managers" },
          { name: "Hire Data Labeling Workforce", href: "/hire/hire-data-labeling-workforce" },
          { name: "Hire AI Project Managers", href: "/hire/hire-ai-project-managers" }
        ]
      }
    ]
  },

  // 3. ABOUT US (Unchanged)
  {
    title: "About Us",
    path: "/about-us",
    layout: "card",
    subsections: [
      {
        title: "Meet GenSquad",
        description: "GenSquad is an AI-native talent marketplace that connects ambitious teams with world-class AI engineers and product leaders. Build faster with curated squads, lower hiring risk, and engagements tailored to your roadmap.",
        iconPath: icons.company,
        items: [
          {
            name: "About us",
            href: "/about-us",
            description: "GenSquad brings together battle‑tested AI engineers, data experts, and product leaders who have shipped real-world models and products. Matching the right people to the right problems is at the heart of what we do.",
            icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          },
          {
            name: "Why us?",
            href: "/why-us",
            description: "Our network spans multiple time zones and industries, with deep experience across LLMs, ML, data platforms, and cloud. A matching engine plus human curation ensures every squad fits your stack, stage, and culture.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          },
          {
            name: "Fractional CTO | CPO",
            href: "/fractal-cto-cpo",
            description: "Tap into fractional AI Heads, solution architects, and product leaders who can design your AI strategy, de‑risk implementation, and guide your teams from prototype to production, without the overhead of a full-time hire.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          }
        ]
      }
    ]
  },

  // 4. FOR COMPANIES (Unchanged)
  {
    title: "For Companies",
    path: "/for-companies",
    layout: "card",
    subsections: [
      {
        title: "Resources for Hiring",
        description: "Tools, insights, and stories to help you scale your engineering team with confidence.",
        iconPath: icons.resources,
        items: [
          // { 
          //   name: "Rate Calculator", 
          //   href: "/for-companies/rate-calculator",
          //   description: "Get instant salary estimates for AI/ML roles across different regions and seniority levels to plan your budget.",
          //   icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          // },
          {
            name: "How we vet",
            href: "/how-we-vet-developers",
            description: "Understand our 4-step vetting process including code challenges, communication checks, and technical deep dives.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          },
          {
            name: "FAQ for Companies",
            href: "/faq-for-companies",
            description: "Answers to common questions about contracts, IP rights, billing, and time-zone alignment.",
            icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          },
          // { 
          //   name: "Case Studies", 
          //   href: "/case-studies",
          //   description: "Real-world examples of how companies reduced burn rate and shipped AI products faster with GenSquad.",
          //   icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          // },
          // { 
          //   name: "Testimonials", 
          //   href: "/testimonials",
          //   description: "See what CTOs and Founders are saying about their experience working with our matched talent.",
          //   icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          // }
        ]
      }
    ]
  }
];