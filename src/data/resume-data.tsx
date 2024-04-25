import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mason Geloso",
  initials: "MG",
  location: "Newport Beach, CA",
  locationLink: "https://www.google.com/maps/place/Newport%20Coast",
  about:
    "Full Stack Software Engineer with a real passion for problem solving and AI systems.",
  summary:
    "I am a Full Stack Software Engineer with over ten years of experience specializing in complex, globally distributed systems and AI technologies. My expertise includes crafting sophisticated architectures and leading teams in a collaborative innovation environment. I have a strong technical background in multiple programming languages and frameworks, with a particular focus on large language models and Retriever-Augmented Generation (RAG) architecture. This specialization enhances machine understanding and response generation by integrating retrieval with generative models. I am committed to leveraging these advanced technologies to address real-world challenges and expand the boundaries of what's possible.",
  avatarUrl: "https://raw.githubusercontent.com/MasonGeloso/MasonGeloso/main/IMG_4027.JPG",
  personalWebsiteUrl: "https://masongeloso.com",
  contact: {
    email: "mason@honesystems.io",
    tel: "+19499035535",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MasonGeloso",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/HoneAIAgency",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: "Asahi Intecc USA",
      link: "https://asahi-inteccusa-medical.com/",
      badges: ["Medical Devices", "Machine Learning", "Web App Development"],
      title: "Process Automation Specialist → Full Stack Engineer",
      logo: ParabolLogo,
      start: "",
      end: "",
      description:
        "I developed Robotic Process Automation (RPA) scripts and engineered full stack web applications and analytics platforms to enhance the efficiency of distribution and order processing systems. My work focused on integrating machine learning techniques to optimize workflows and improve decision-making processes.",
    },
    {
      company: "Credit Company",
      link: "",
      badges: ["Financial Industry", "Vue3", "Typescript", "Global Deployment"],
      title: "Full Stack Developer",
      logo: ClevertechLogo,
      start: "",
      end: "",
      description:
        " I specialized in full stack development using Vue3 and TypeScript, crafting robust backend solutions and integrating AI features to enhance global financial services. My role involved developing and deploying scalable applications tailored to meet the dynamic needs of the global market.",
    },
    {
      company: "Starlims",
      link: "https://starlims.com/",
      badges: ["LLM Development", "RAG Implementation", "AI Consulting"],
      title: "Software Engineer III",
      logo: JojoMobileLogo,
      start: "",
      end: "",
      description:
        "Developed innovative AI features that significantly increased revenue by enhancing platform capabilities. Engineered and deployed advanced AI tooling to optimize and streamline internal processes.",
    },
    {
      company: "MGi Strategies, LLP",
      link: "https://www.mgi-strategies.com",
      badges: ["Engineering Leadership", "Product Development"],
      title: "CTO & CoFounder",
      logo: NSNLogo,
      start: "",
      end: "",
      description: "Led the development and strategic direction of engineering initiatives, overseeing the creation of cutting-edge products. Lead the creation of AI powered portfolio management platform.",
    },
  ],
  skills: [
    "TypeScript",
    "React/Next.js/Vue",
    "Python",
    "LLM Development",
    "Engineering Leadership",
    "Product Management & Development",
    "Building Scalable Systems",
    "AWS/GPC/DO",
  ],
  projects: [
    {
      title: "Artify Self",
      techStack: [
        "Side Project",
        "TypeScript",
        "Vite",
        "Directus",
        "Stable Diffusion",
        "Dreambooth",
      ],
      description: "A web app to generate custom images using base images to train a Dreambooth model",
      logo: ConsultlyLogo,
      link: {
        label: "artify-self.com",
        href: "https://artify-self.com",
      },
    },
    {
      title: "AI Powered Ukrainian Update Videos",
      techStack: ["Side Project", "Python", "AI", "LLM Development"],
      description:
        "Created a web app to automatically generate AI UKR war update videos based on news feeds",
      logo: MonitoLogo,
      link: {
        label: "@ukraine-daily-updates",
        href: "https://www.youtube.com/@ukraine-daily-updates",
      },
    },
    {
      title: "Aki",
      techStack: ["Side Project", "AI", "Web Scraping", "Playwright", "Typescript"],
      description:
        "Created a web app to automatically find if an Amazon product is being drop-shipped from AliExpress, Alibaba, etc.",
      logo: JarockiMeLogo,
      link: {
        label: "Aki",
        href: "https://aki.honesystems.io",
      },
    },
  ],
} as const;
