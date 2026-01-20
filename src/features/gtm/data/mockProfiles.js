export const mockProfiles = [
  // --- BATCH 1 (First 4 shown) ---
  {
    id: 1,
    name: "Alex C.",
    role: "Senior AI Engineer",
    experience: "7 Yrs",
    skills: ["Python", "TensorFlow", "PyTorch"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Available"
  },
  {
    id: 2,
    name: "Sarah J.",
    role: "NLP Specialist",
    experience: "5 Yrs",
    skills: ["LLMs", "LangChain", "OpenAI"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Available"
  },
  {
    id: 3,
    name: "Michael B.",
    role: "Computer Vision Eng.",
    experience: "6 Yrs",
    skills: ["OpenCV", "YOLO", "AWS SageMaker"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Booked"
  },
  {
    id: 4,
    name: "Emily R.",
    role: "Generative AI Lead",
    experience: "8 Yrs",
    skills: ["Stable Diffusion", "Midjourney API", "Python"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Available"
  },

  // --- BATCH 2 (Next 4 shown after clicking View More) ---
  {
    id: 5,
    name: "David K.",
    role: "MLOps Engineer",
    experience: "5 Yrs",
    skills: ["Kubeflow", "Docker", "AWS"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Available"
  },
  {
    id: 6,
    name: "Jessica L.",
    role: "Data Scientist",
    experience: "6 Yrs",
    skills: ["Pandas", "Scikit-learn", "Tableau"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Available"
  },
  {
    id: 7,
    name: "Robert M.",
    role: "AI Solution Architect",
    experience: "10 Yrs",
    skills: ["System Design", "Cloud Architecture", "Azure"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Booked"
  },
  {
    id: 8,
    name: "Linda W.",
    role: "RAG Expert",
    experience: "4 Yrs",
    skills: ["Pinecone", "LlamaIndex", "FastAPI"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-ai-engineers"],
    status: "Available"
  },

  // --- Other roles (Won't show on AI page) ---
  {
    id: 9,
    name: "Chris P.",
    role: "Full Stack Dev",
    experience: "8 Yrs",
    skills: ["React", "Node.js"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: ["hire-full-stack-developers"],
    status: "Available"
  },
  {
    id: 101, // New Dummy for Tech Page
    name: "Elena V.",
    role: "Senior ML Engineer",
    experience: "7 Yrs",
    skills: ["PyTorch", "TensorFlow", "Reinforcement Learning"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: [],
    // ✅ NEW LISTING MECHANISM
    technologySlugs: ["core-ai-machine-learning"],
    status: "Available"
  },
  {
    id: 102,
    name: "Marcus T.",
    role: "AI Researcher",
    experience: "9 Yrs",
    skills: ["Computer Vision", "Deep Learning", "Python"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: [],
    technologySlugs: ["core-ai-machine-learning"],
    status: "Available"
  },
  // ... add 6 more duplicates or unique profiles with the "core-ai-machine-learning" slug to test pagination
  {
    id: 103, name: "Sarah L.", role: "Data Scientist", experience: "5 Yrs", skills: ["Scikit-learn", "Pandas"], image: "/images/img_ellipse_1.png", technologySlugs: ["core-ai-machine-learning"], status: "Available"
  },
  {
    id: 104, name: "David K.", role: "ML Ops Lead", experience: "8 Yrs", skills: ["Kubeflow", "AWS", "Docker"], image: "/images/img_ellipse_1.png", technologySlugs: ["core-ai-machine-learning"], status: "Booked"
  },
  {
    id: 105, name: "Priya R.", role: "NLP Engineer", experience: "6 Yrs", skills: ["Transformers", "HuggingFace"], image: "/images/img_ellipse_1.png", technologySlugs: ["core-ai-machine-learning"], status: "Available"
  },
  {
    id: 106, name: "James B.", role: "AI Architect", experience: "12 Yrs", skills: ["System Design", "Cloud Architecture"], image: "/images/img_ellipse_1.png", technologySlugs: ["core-ai-machine-learning"], status: "Available"
  },
  {
    id: 107, name: "Nina W.", role: "Computer Vision", experience: "4 Yrs", skills: ["OpenCV", "YOLO"], image: "/images/img_ellipse_1.png", technologySlugs: ["core-ai-machine-learning"], status: "Available"
  },
  {
    id: 108, name: "Tom H.", role: "Robotics Eng.", experience: "7 Yrs", skills: ["ROS", "C++"], image: "/images/img_ellipse_1.png", technologySlugs: ["core-ai-machine-learning"], status: "Available"
  },
  {
    id: 201,
    name: "James L.",
    role: "OpenAI Developer",
    experience: "5 Yrs",
    skills: ["GPT-4", "LangChain", "Python"],
    image: "/images/img_ellipse_1.png",
    serviceSlugs: [],
    technologySlugs: [],
    // ✅ NEW FIELD
    techStackSlugs: ["openai-api"],
    status: "Available"
  },
  {
    id: 202,
    name: "Maria G.",
    role: "Prompt Engineer",
    experience: "4 Yrs",
    skills: ["Prompt Tuning", "Evaluation", "NLP"],
    image: "/images/img_ellipse_1.png",
    techStackSlugs: ["openai-api"],
    status: "Available"
  },
  {
    id: 203, name: "Chen W.", role: "AI Integrator", experience: "6 Yrs", skills: ["Node.js", "OpenAI API", "Vector DB"], image: "/images/img_ellipse_1.png", techStackSlugs: ["openai-api"], status: "Booked"
  },
  {
    id: 204, name: "Sarah K.", role: "Full Stack AI", experience: "7 Yrs", skills: ["React", "Python", "GPT-4"], image: "/images/img_ellipse_1.png", techStackSlugs: ["openai-api"], status: "Available"
  },
  // Add 4 more to test "View More" functionality
  { id: 205, name: "Tom B.", role: "Backend Dev", experience: "5 Yrs", skills: ["Python", "FastAPI"], image: "/images/img_ellipse_1.png", techStackSlugs: ["openai-api"], status: "Available" },
  { id: 206, name: "Lisa M.", role: "AI Architect", experience: "9 Yrs", skills: ["System Design", "Azure OpenAI"], image: "/images/img_ellipse_1.png", techStackSlugs: ["openai-api"], status: "Available" },
  { id: 207, name: "Raj P.", role: "ML Engineer", experience: "6 Yrs", skills: ["Embeddings", "Pinecone"], image: "/images/img_ellipse_1.png", techStackSlugs: ["openai-api"], status: "Available" },
  { id: 208, name: "Emily D.", role: "Product Manager", experience: "8 Yrs", skills: ["AI Product", "Agile"], image: "/images/img_ellipse_1.png", techStackSlugs: ["openai-api"], status: "Booked" }

];