// src/data/hiringNeedContent.js

export const hiringNeedContent = {
    "team-augmentation": {
        hero: {
            badge: "Flexible Capacity",
            title: "Scale your AI team",
            titleHighlight: "on demand",
            subtitle: "GenSquad plugs pre‑vetted AI and data engineers into your existing team so you can ship more, de‑risk delivery, and keep hiring flexible.",
            primaryCta: "Start augmenting your team",
            secondaryCta: "Talk to a squad expert"
        },

        // ✅ NEW SECTION DATA
        augmentationTypes: {
            title: "End‑to‑end AI team augmentation",
            subtitle: "Access a curated network of senior AI, data, and platform engineers who can plug into every stage of your product lifecycle.",
            cards: [
                {
                    title: "Project‑based pods",
                    description: "Ship a specific initiative with a short‑term boost of AI and data talent, without long hiring cycles or permanent headcount.",
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Layers/Stack
                    color: "blue"
                },
                {
                    title: "Long‑term embedded squads",
                    description: "Embed a stable squad of senior engineers who operate like part of your team for ongoing roadmap work and ownership of critical systems.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // Group
                    color: "purple"
                },
                {
                    title: "On‑demand specialists",
                    description: "Bring in niche skills—RAG, LLM ops, experimentation, MLOps—exactly when you need them, then scale down once the job is done.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning/Specialist
                    color: "pink"
                },
                {
                    title: "Fractional AI leadership",
                    description: "Add a fractional CTO, CPO, or Head of AI to guide strategy, architecture, and prioritisation alongside your core team.",
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", // Badge/Check
                    color: "orange"
                },
                {
                    title: "Launch & migration support",
                    description: "Add extra capacity for big launches, re‑platforming, or data migrations while keeping your day‑to‑day roadmap on track.",
                    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8", // Rocket/Launch
                    color: "green"
                },
                {
                    title: "Follow‑the‑sun coverage",
                    description: "Combine squads across time zones to extend support hours, speed up delivery, and ensure smooth handovers between teams.",
                    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707", // Sun/Global
                    color: "cyan"
                }
            ]
        },
        customSquads: {
            title: "Custom AI squads for every roadmap",
            subtitle: "Whether you are validating an AI MVP or scaling a mature platform, GenSquad assembles pods that match your stack, domain, and delivery style.",
            cards: [
                {
                    title: "Fintech",
                    description: "Simplify payments and financial operations with secure, intelligent software solutions.",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", // Dollar/Chip
                    color: "yellow"
                },
                {
                    title: "E-commerce",
                    description: "Create personalized eCommerce experiences that engage customers and boost conversions.",
                    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", // Cart
                    color: "blue"
                },
                {
                    title: "Automotive",
                    description: "Drive innovation forward with intelligent automation and connected vehicle technologies.",
                    icon: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.7 0-1.3.3-1.8.7-.9.9-2.2 2.3-2.2 2.3s-2.7.6-4.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2c1.1 0 2-.9 2-2v-2h10v2c0 1.1.9 2 2 2z", // Car
                    color: "purple"
                },
                {
                    title: "Gaming",
                    description: "Create immersive gaming worlds powered by next-gen technology.",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", // Game/Screen
                    color: "cyan"
                },
                {
                    title: "AdTech/MarTech",
                    description: "Boost lead generation, conversion, and awareness with innovative solutions.",
                    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", // Megaphone/Ads
                    color: "red"
                },
                {
                    title: "EdTech",
                    description: "Empower education with immersive, adaptive, and interactive learning solutions.",
                    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z", // Cap
                    color: "green"
                }
            ]
        }, finalCTA: {
            title: "Accelerate your AI team augmentation",
            subtitle: "Share your stack, team shape, and near‑term goals. GenSquad will recommend a right‑sized squad and help you start within days, not months.",
            primaryCta: "Start augmenting your team",
            secondaryCta: "Explore AI talent"
        },
        faq: [
            {
                question: "How is GenSquad’s team augmentation different from agencies or freelancers?",
                answer: "GenSquad provides pre‑vetted squads that embed into your rituals and tools, with standards, playbooks, and oversight from a core team."
            },
            {
                question: "Can we start small and expand later?",
                answer: "Yes, most clients begin with a small pod for a focused initiative and expand once they see fit and impact."
            },
            {
                question: "Do augmented engineers work in our time zone?",
                answer: "Squads are matched to your preferred overlap windows so collaboration feels natural."
            },
            {
                question: "Who manages the augmented team day to day?",
                answer: "You keep product ownership; GenSquad provides leads and enablement so the squad executes smoothly inside your roadmap."
            },
            {
                question: "How long do team augmentation engagements usually last?",
                answer: "Engagements range from a few months for project bursts to ongoing partnerships where squads own core parts of the stack."
            }
        ]
        // ... keep other sections if any
    },
    // 2. FULLY MANAGED TEAMS
    "fully-managed-teams": {
        // SECTION 1: HERO
        hero: {
            badge: "End-to-End Delivery",
            title: "Access world‑class fully managed",
            titleHighlight: "product teams, fast.",
            subtitle: "Connect with vetted, high‑performing squads that plan, build, and ship your roadmap end‑to‑end—so your team can stay focused on strategy, not day‑to‑day delivery.",
            primaryCta: "Get started →",
            secondaryCta: null
        },

        // SECTION 2: END-TO-END SOLUTIONS (Soft Cards)
        augmentationTypes: {
            title: "End‑to‑end product delivery, managed for you",
            subtitle: "Choose the engagement model that fits your roadmap, from greenfield builds and legacy modernization to focused feature pods and long‑term product ownership.",
            cards: [
                {
                    title: "New product launch",
                    description: "Bring a cross‑functional squad on board to research, design, build, and ship your next product from zero to one while your core team focuses on the existing business.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    color: "blue"
                },
                {
                    title: "Platform modernization",
                    description: "Assign a managed team to refactor legacy code, re‑architect services, and migrate to cloud infrastructure without risking downtime or burning out your internal engineers.",
                    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                    color: "purple"
                },
                {
                    title: "Feature growth pod",
                    description: "Spin up a dedicated pod that owns a specific feature or funnel—from backlog and experimentation to implementation and optimization—so you can move faster on high‑impact bets.",
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                    color: "green"
                },
                {
                    title: "AI & automation initiatives",
                    description: "Tap into specialists who can prototype, validate, and roll out AI‑powered features or internal automation, all within a structured, outcomes‑driven engagement.",
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                    color: "orange"
                },
                {
                    title: "Continuous product ownership",
                    description: "Keep a stable team attached to your product long‑term to handle roadmap execution, maintenance, and incremental improvements as your business evolves.",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "cyan"
                },
                {
                    title: "Rescue & recovery missions",
                    description: "Bring in an experienced managed team to stabilize struggling projects, fix critical issues, and put delivery back on track with clear priorities and governance.",
                    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
                    color: "red"
                }
            ]
        },

        // SECTION 3: EXPERT PROFILES CONFIG
        expertProfiles: {
            title: "Work with proven managed teams",
            subtitle: "Engage rigorously vetted product squads with mature delivery practices, clear ownership, and transparent reporting, so you hit your goals without adding management overhead."
        },

        // ✅ SECTION 4: INDUSTRY EXPERT TEAMS (Bold Cards)
        // MAKE SURE THIS KEY IS HERE AND SPELLED CORRECTLY
        customSquads: {
            title: "Industry‑expert fully managed teams",
            subtitle: "Tap into cross‑functional squads that already understand your sector’s regulations, user behavior, and tech stack—so you can move from idea to impact faster.",
            cards: [
                {
                    title: "Fintech",
                    description: "Simplify payments and financial operations with secure, intelligent software solutions.",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "yellow"
                },
                {
                    title: "E-commerce",
                    description: "Create personalized eCommerce experiences that engage customers and boost conversions.",
                    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
                    color: "blue"
                },
                {
                    title: "Automotive",
                    description: "Drive innovation forward with intelligent automation and connected vehicle technologies.",
                    icon: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.7 0-1.3.3-1.8.7-.9.9-2.2 2.3-2.2 2.3s-2.7.6-4.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2c1.1 0 2-.9 2-2v-2h10v2c0 1.1.9 2 2 2z",
                    color: "purple"
                },
                {
                    title: "Gaming",
                    description: "Create immersive gaming worlds powered by next-gen technology.",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                    color: "cyan"
                },
                {
                    title: "AdTech/MarTech",
                    description: "Boost lead generation, conversion, and awareness with innovative solutions.",
                    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                    color: "red"
                },
                {
                    title: "EdTech",
                    description: "Empower education with immersive, adaptive, and interactive learning solutions.",
                    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                    color: "green"
                }
            ]
        },

        finalCTA: {
            title: "Accelerate your AI talent search",
            subtitle: "Launch a vetted, fully managed product team in days, not months, so you can stay focused on vision while they handle delivery end‑to‑end.",
            primaryCta: "Start your project",
            secondaryCta: "Talk to an expert"
        },

        // SECTION 6: FAQ
        faq: [
            {
                question: "What is a fully managed team?",
                answer: "A fully managed team is a cross‑functional squad from a vetted partner that plans, builds, and maintains your product or workstream end‑to‑end, including delivery governance and reporting."
            },
            {
                question: "How is this different from staff augmentation?",
                answer: "With staff augmentation you manage individuals directly, while a fully managed team comes with its own leadership, processes, and SLAs, so you focus on outcomes instead of day‑to‑day task management."
            },
            {
                question: "What roles are typically included in a fully managed team?",
                answer: "Teams are usually built around product requirements and may include a product manager, designers, backend and frontend engineers, QA, DevOps, and data/AI specialists as needed."
            },
            {
                question: "How quickly can a fully managed team start working on my project?",
                answer: "After aligning on scope and selecting a provider, teams can typically kick off within days, once the initial discovery, onboarding, and access setup are complete."
            },
            {
                question: "How do you ensure quality and accountability?",
                answer: "Each engagement includes a clear delivery plan, defined milestones, success metrics, and a single accountable lead who owns communication, risk management, and continuous improvement."
            }
        ]
    },
    "build-a-team": {
        hero: {
            badge: "On-Demand Talent",
            title: "Access world‑class",
            titleHighlight: "AI talent, on demand.",
            subtitle: "Build a custom remote team of vetted AI, data, and product experts—matched to your stack, workflows, and culture in under 72 hours.",
            primaryCta: "Get started →",
            secondaryCta: "View sample profiles"
        },
        augmentationTypes: {
            title: "Build your perfect AI team",
            subtitle: "Combine AI, data, engineering, and product roles to assemble a high‑performing team that grows with your roadmap.",
            cards: [
                {
                    title: "AI product squad",
                    description: "Bring together AI Engineers, Machine Learning Engineers, Data Scientists, and Product Managers to own AI‑powered features from ideation to launch.",
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M3.343 4.343l.707.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", // Brain/AI
                    color: "purple"
                },
                {
                    title: "Data & analytics hub",
                    description: "Pair Data Engineers, Data Analysts, and a Data Scientist lead to centralize data pipelines, reporting, and experimentation across your business.",
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Database/Server
                    color: "blue"
                },
                {
                    title: "LLM & RAG specialists",
                    description: "Spin up a focused pod of LLM Engineers, RAG Experts, LangChain and LlamaIndex Developers, and Vector DB Engineers to deliver retrieval‑augmented AI applications.",
                    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z", // Chat/Language
                    color: "orange"
                },
                {
                    title: "Automation & integrations crew",
                    description: "Add ChatGPT Automation Experts, n8n Experts, Zapier Experts, Make.com Experts, and API Integration Engineers to automate workflows and connect your tools.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning/Automation
                    color: "green"
                },
                {
                    title: "MLOps & platform backbone",
                    description: "Hire MLOps Engineers, Cloud Engineers, DevOps Engineers, Airflow Engineers, and Kubeflow Engineers to keep training, deployment, and monitoring running smoothly.",
                    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", // Cogs/Ops
                    color: "red"
                },
                {
                    title: "Long‑term extension of your org",
                    description: "Create a stable blended team of Backend or Full‑Stack Developers, Python Developers, AI QA & Testing Specialists, and AI Project Managers that integrates into your rituals and tech stack.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // Team/People
                    color: "cyan"
                }
            ]
        },
        expertProfiles: {
            title: "Work with top‑tier AI talent",
            subtitle: "Every engineer and product specialist is rigorously vetted for technical depth, communication, and remote‑work maturity, so every hire lifts the bar for your team."
        },

        // 4. INDUSTRY SOLUTIONS (Custom Squads)
        customSquads: {
            title: "AI teams with domain context",
            subtitle: "Staff your team with people who already understand your industry’s users,",
            cards: [
                {
                    title: "Fintech",
                    description: "Simplify payments and financial operations with secure, intelligent software solutions.",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "yellow"
                },
                {
                    title: "E-commerce",
                    description: "Create personalized eCommerce experiences that engage customers and boost conversions.",
                    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
                    color: "blue"
                },
                {
                    title: "Automotive",
                    description: "Drive innovation forward with intelligent automation and connected vehicle technologies.",
                    icon: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.7 0-1.3.3-1.8.7-.9.9-2.2 2.3-2.2 2.3s-2.7.6-4.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2c1.1 0 2-.9 2-2v-2h10v2c0 1.1.9 2 2 2z",
                    color: "purple"
                },
                {
                    title: "Gaming",
                    description: "Create immersive gaming worlds powered by next-gen technology.",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                    color: "cyan"
                },
                {
                    title: "AdTech/MarTech",
                    description: "Boost lead generation, conversion, and awareness with innovative solutions.",
                    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                    color: "red"
                },
                {
                    title: "EdTech",
                    description: "Empower education with immersive, adaptive, and interactive learning solutions.",
                    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                    color: "green"
                }
            ]
        },

        // 5. FINAL CTA
        finalCTA: {
            title: "Accelerate your",
            titleHighlight: "AI talent search",
            subtitle: "Build a tailored AI and data team in days, not months, so you can focus on strategy while they design, ship, and scale intelligent products .",
            primaryCta: "Start your project",
            secondaryCta: "Talk to an expert"
        },

        // 6. FAQ
        faq: [
            {
                question: "What does “build a team” mean here?",
                answer: "You assemble a custom mix of AI, data, engineering, and product roles that work as part of your organization, while sourcing, vetting, and compliance are handled for you."
            },
            {
                question: "Can I start with one role and scale up later?",
                answer: "Yes, you can begin with a single hire—such as an AI Engineer or Data Scientist—and expand into a full team as your AI roadmap matures."
            },
            {
                question: "Are team members dedicated to our company?",
                answer: "You can choose fully dedicated engagement models where talent works only on your projects and aligns to your preferred time zones and rituals."
            },
            {
                question: "How long does it take to see candidates?",
                answer: "For most roles, you receive a curated shortlist within a few days, and can move from briefing to first interviews in under a week."
            },
            {
                question: "What if a hire is not the right fit?",
                answer: "Clear replacement terms allow you to request a fast, no‑drama replacement while keeping momentum and knowledge transfer on track"
            }
        ]
    },
    "fractional-leaders": {
        // 1. HERO
        hero: {
            badge: "Executive Leadership",
            title: "Access world‑class",
            titleHighlight: "fractional CTOs & CPOs, fast.",
            subtitle: "Bring in senior product and technology leaders on a fractional basis to shape your strategy, architecture, and roadmap, without committing to a full‑time executive hire.",
            primaryCta: "Get started →",
            secondaryCta: null // No secondary CTA requested in hero copy
        },

        // 2. FEATURE GRID (End-to-end solutions)
        augmentationTypes: {
            title: "Strategic product & tech leadership, on demand",
            subtitle: "Choose the fractional leadership model that fits your stage—from early product‑market fit to scaling architecture and teams across markets.",
            cards: [
                {
                    title: "Early‑stage product leadership",
                    description: "Partner with a fractional CPO to define vision, validate opportunities, and translate customer insights into a focused product roadmap.",
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M3.343 4.343l.707.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", // Lightbulb/Vision
                    color: "purple"
                },
                {
                    title: "Technical strategy & architecture",
                    description: "Engage a fractional CTO to set technical direction, design scalable architectures, and make key build‑vs‑buy and platform decisions.",
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Architecture
                    color: "blue"
                },
                {
                    title: "Scaling teams & processes",
                    description: "Get leadership support to design your org structure, hiring plan, and delivery processes as you move from a handful of builders to multiple squads.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // Team Growth
                    color: "green"
                },
                {
                    title: "AI & data strategy",
                    description: "Work with leaders who understand AI and data to prioritize use cases, design your data stack, and ensure responsible, secure adoption.",
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", // AI/Brain
                    color: "orange"
                },
                {
                    title: "Turnaround & modernization missions",
                    description: "Bring in seasoned executives to untangle legacy systems, stabilize delivery, and realign teams around a modern tech and product strategy.",
                    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", // Refresh/Modernize
                    color: "red"
                },
                {
                    title: "Interim executive coverage",
                    description: "Fill a temporary gap in your leadership team with an experienced CTO or CPO who can keep strategy, roadmap, and execution on track.",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", // Shield/Coverage
                    color: "cyan"
                }
            ]
        },

        // 3. EXPERT PROFILES CONFIG
        expertProfiles: {
            title: "Work with battle‑tested product & tech leaders",
            subtitle: "Access fractional CTOs and CPOs with years of startup and scale‑up experience, ready to plug into your executive table and lead from week one."
        },

        // 4. INDUSTRY SOLUTIONS (Custom Squads reused for Industry Context)
        customSquads: {
            title: "Fractional leaders with domain depth",
            subtitle: "Partner with CTOs and CPOs who already understand your industry’s constraints, economics, and user expectations.",
            cards: [
                {
                    title: "Fintech",
                    description: "Simplify payments and financial operations with secure, intelligent software solutions.",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "yellow"
                },
                {
                    title: "E-commerce",
                    description: "Create personalized eCommerce experiences that engage customers and boost conversions.",
                    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
                    color: "blue"
                },
                {
                    title: "Automotive",
                    description: "Drive innovation forward with intelligent automation and connected vehicle technologies.",
                    icon: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.7 0-1.3.3-1.8.7-.9.9-2.2 2.3-2.2 2.3s-2.7.6-4.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2c1.1 0 2-.9 2-2v-2h10v2c0 1.1.9 2 2 2z",
                    color: "purple"
                },
                {
                    title: "Gaming",
                    description: "Create immersive gaming worlds powered by next-gen technology.",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                    color: "cyan"
                },
                {
                    title: "AdTech/MarTech",
                    description: "Boost lead generation, conversion, and awareness with innovative solutions.",
                    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                    color: "red"
                },
                {
                    title: "EdTech",
                    description: "Empower education with immersive, adaptive, and interactive learning solutions.",
                    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                    color: "green"
                }
            ]
        },

        // 5. FINAL CTA
        finalCTA: {
            title: "Accelerate your",
            titleHighlight: "AI leadership search",
            subtitle: "Find a fractional CTO or CPO in days, not months, so you can move faster on strategy while they guide your teams toward high‑impact execution.",
            primaryCta: "Start your project",
            secondaryCta: "Talk to an expert"
        },

        // 6. FAQ
        faq: [
            {
                question: "What is a fractional CTO/CPO?",
                answer: "A fractional CTO or CPO is a senior technology or product leader who works with your company part‑time or for a defined period, providing executive‑level guidance without a full‑time commitment."
            },
            {
                question: "When does it make sense to hire fractional leadership?",
                answer: "This model is ideal when you need experienced leadership to set direction, support fundraising, or scale teams but are not yet ready for, or do not need, a full‑time executive."
            },
            {
                question: "How involved are fractional leaders in day‑to‑day work?",
                answer: "They typically own strategy, decision‑making, and critical ceremonies, and can be as hands‑on as you need in areas like roadmap prioritization, architecture reviews, and hiring."
            },
            {
                question: "Can a fractional CTO/CPO help with hiring and org design?",
                answer: "Yes, they often design org structures, define key roles, and support interviews and onboarding to build a strong long‑term team."
            },
            {
                question: "How long do typical engagements last?",
                answer: "Engagements usually start from a few months and can extend as your needs evolve, with flexible scopes to adjust hours and responsibilities over time."
            }
        ]
    },

    // ... other pages
};