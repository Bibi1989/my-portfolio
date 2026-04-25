export const cvProfile = {
  name: "Bibi Aremieye",
  role: "TypeScript Full-Stack Engineer",
  location: "Hamburg, Germany",
  email: "bibirinbulu.aremieye@gmail.com",
  phone: "+49 15219495319",
  summary:
    "Full-Stack Engineer with 6+ years of experience building scalable, high-performance web applications across regulated environments.",
} as const;

export const cvSkills = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SASS"],
  frontend: [
    "React",
    "React Router v7",
    "Next.js",
    "Redux Toolkit",
    "React Query",
    "Tailwind CSS",
    "Styled Components",
  ],
  backend: ["Node.js", "NestJS", "Express.js", "REST", "GraphQL"],
  databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Prisma",
    "TypeORM",
    "Mongoose",
  ],
  platforms: ["Docker", "Kubernetes", "Helm", "ArgoCD", "CI/CD"],
  methodologies: ["Agile", "Kanban", "Jira", "TDD"],
  testing: ["Jest", "Cypress", "Git", "GitHub", "GitLab", "SonarQube"],
} as const;

export const cvExperience = [
  {
    company: "Dr. Ansay AU-Schein GmbH",
    role: "Software Engineer",
    period: "Sep 2025 - Present",
    location: "Remote",
    highlights: [
      "I build and maintain core platform features, including value-added services and out-of-stock handling, to keep day-to-day operations smooth.",
      "I introduced secure age-verification workflows so the product stays compliant while still feeling easy for users.",
      "I helped migrate and standardize the UI component library with Storybook, which improved design consistency and team productivity.",
      "I continuously improve stability and performance through practical bug fixes, cleanup, and focused refactoring.",
    ],
    url: "https://shop.dransay.com/",
    image: "/projects/dransay.png",
  },
  {
    company: "LG-LHT Passenger Solutions GmbH",
    role: "Full-Stack Engineer",
    period: "Jul 2022 - Feb 2025",
    location: "Hamburg, Germany",
    highlights: [
      "I designed and scaled backend services for aviation products using NestJS, PostgreSQL, TypeORM, and Spring Boot.",
      "I built secure access control with Keycloak, making role-based permissions reliable across services.",
      "I delivered low-latency APIs for Aerena Studio and passenger in-flight entertainment applications.",
      "I shipped and maintained containerized microservices with Docker, Kubernetes, and Helm for safer deployments and rollbacks.",
    ],
  },
  {
    company: "Decagon Learning Institute",
    role: "Full Stack Engineer",
    period: "Oct 2019 - Jun 2022",
    location: "Lagos, Nigeria",
    highlights: [
      "I built backend services for the Tech On-Demand platform with Node.js, Express, and REST APIs.",
      "I implemented secure authentication with Auth0 to meet enterprise security expectations.",
      "I supported Resume.com production systems, improving backend performance by 25% and reducing downtime by 30%.",
    ],
  },
] as const;

export const cvProjects = [
  {
    id: "dransay1",
    company: "DrAnsay.com",
    role: "Software Engineer",
    period: "Sep 2025 - Present",
    location: "Remote",
    highlights: [
      "I build and maintain core platform features, including value-added services and out-of-stock handling, to keep day-to-day operations smooth.",
      "I introduced secure age-verification workflows so the product stays compliant while still feeling easy for users.",
      "I helped migrate and standardize the UI component library with Storybook, which improved design consistency and team productivity.",
      "I continuously improve stability and performance through practical bug fixes, cleanup, and focused refactoring.",
    ],
    url: "https://shop.dransay.com",
  },
  {
    id: "lg-lht2",
    company: "LG-LHT Passenger Solutions GmbH",
    role: "Full-Stack Engineer",
    period: "Jul 2022 - Feb 2025",
    location: "Hamburg, Germany",
    highlights: [
      "I designed and scaled backend services for aviation products using NestJS, PostgreSQL, TypeORM, and Spring Boot.",
      "I built secure access control with Keycloak, making role-based permissions reliable across services.",
      "I delivered low-latency APIs for Aerena Studio and passenger in-flight entertainment applications.",
      "I shipped and maintained containerized microservices with Docker, Kubernetes, and Helm for safer deployments and rollbacks.",
    ],
    url: null,
  },
  {
    id: "decagon3",
    company: "Decagon Learning Institute",
    role: "Full Stack Engineer",
    period: "Oct 2019 - Jun 2022",
    location: "Lagos, Nigeria",
    highlights: [
      "I built backend services for the Tech On-Demand platform with Node.js, Express, and REST APIs.",
      "I implemented secure authentication with Auth0 to meet enterprise security expectations.",
      "I supported Resume.com production systems, improving backend performance by 25% and reducing downtime by 30%.",
    ],
    url: "https://resume.com",
  },
  {
    id: "forge-website-startup",
    company: "Forge Website Startup",
    role: "Full-Stack Engineer",
    period: "March 2026 - Present",
    location: "Hamburg, Germany",
    highlights: [
      "Led architecture of a full-stack web builder for an event management platform using Nuxt(Vue.js), Supabase, and PostgreSQL, designing a canvas-first editing system with clear UI/data separation and reliable editor-to-publish consistency across all event pages.",
      "Built a rich-text and content editing experience supporting selection-based formatting, links, inline components (buttons, CTAs), typography rules, and conflict-free interactions, eliminating drag/focus issues and ensuring stable cross-component styling.",
      "Developed a modular event content system with reusable sections (hero, schedule, speakers, registration, navigation/header blocks), including configurable layouts, media uploads, dynamic menus, and robust schema serialization for accurate save/reload and production rendering.",
      "Integrated AI-assisted workflows for event content creation, including AI-generated landing pages and email campaigns, plus AI-powered email components for invitations and updates, improving content creation speed while maintaining structured, production-safe outputs.",
    ],
    url: "https://forge-web-mu.vercel.app/",
  },
] as const;

export const cvEducation =
  "B.Eng. Mechanical Engineering, Niger Delta University (2006 - 2012)";

export const cvLanguages = ["English (Fluent)", "German (Basic - A2)"] as const;