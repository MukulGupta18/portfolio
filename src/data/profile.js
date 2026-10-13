// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Mukul Gupta",
  role: "MERN Stack Developer",
  location: "New Delhi, India",
  email: "mgofficial20@gmail.com",
  status: "Open to new opportunities",
  photo: "/assets/hero/hero.avif",
  yearsExperience: "3+",
  intro:
    "MERN stack developer with 3+ years of building and owning production web apps end to end — from React frontends to secure Node.js APIs, MongoDB, and AWS deployments.",
  about: [
    "I'm a MERN stack developer who builds and owns production web applications end to end with MongoDB, Express.js, React.js and Node.js. Most recently I was a Software Engineer at MetaDesign Solutions, delivering features across multiple client projects — from schema design and REST APIs to the React frontend and post-launch support.",
    "I'm strongest in REST API design, JWT authentication and role-based access control, MongoDB schema design and query optimization, and performance tuning. I deploy on AWS with Docker and GitHub Actions CI/CD, and I enjoy working directly with stakeholders from requirements to launch.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/MukulGupta18", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukul-gupta-08b802180/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/muku_18/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100017067750434", icon: "facebook" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "MetaDesign Solutions",
    period: "Mar 2025 — Jul 2026",
    location: "Gurugram, India",
    highlights: [
      "Delivered MERN features end to end across multiple client projects, owning schema design, REST APIs, React frontend and post-launch support.",
      "Built secure REST APIs with Node.js, Express.js and MongoDB using JWT authentication and role-based access control.",
      "Optimized MongoDB queries, indexes and API endpoints, reducing response times by 30%.",
      "Set up a modular React architecture with Vite, improving build times and component reuse across the codebase.",
      "CyberforceHQ (hiring & assessment platform): built the React + TypeScript frontend and Node.js services; used MongoDB Change Streams for real-time sync, cutting latency by 70%; built an automated assessment-test generator that cut manual effort by 80%.",
      "Government public-services portal: reduced initial load time by 38% with code splitting, lazy loading and bundle optimization.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "PearlThoughts",
    period: "Aug 2024 — Sep 2024",
    location: "New Delhi, India",
    highlights: [
      "Built responsive interfaces with React, Context API and Tailwind CSS; integrated Cloudinary media uploads and Nodemailer emails; deployed via Render and GitHub.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tradezie Retails Pvt Ltd",
    period: "Sep 2021 — Sep 2022",
    location: "New Delhi, India",
    highlights: [
      "Built reusable UI components with React and Redux Toolkit, including a course catalog with search, filtering and detail pages.",
      "Integrated Stripe payments (card, UPI, wallet) with real-time confirmation, and built cart and checkout flows that increased checkout completion by 30%.",
      "Improved load performance through lazy loading, code splitting and image optimization.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "Galgotias University, Greater Noida",
    href: "https://www.galgotiasuniversity.edu.in",
    period: "2022 — 2024",
  },
  {
    degree: "Bachelor of Vocation, Software Development",
    school: "Guru Gobind Singh Indraprastha University, New Delhi",
    href: "http://www.ipu.ac.in/",
    period: "2018 — 2021",
  },
];

export const certifications = [
  "Infosys Springboard — React JS Certification",
  "Coursera — Modern JavaScript Fundamentals",
];

export const skillGroups = [
  { title: "Languages", skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
  {
    title: "Frontend",
    skills: ["React", "Redux Toolkit", "Next.js", "Vite", "Tailwind CSS", "Context API"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT", "OAuth 2.0", "RBAC", "Socket.io"],
  },
  { title: "Databases", skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"] },
  {
    title: "DevOps & Testing",
    skills: ["AWS", "Docker", "Nginx", "GitHub Actions", "Git", "Postman", "Jest", "Swagger"],
  },
  { title: "AI", skills: ["Agentic AI"] },
];

// Leave `demo` / `source` empty when there is no link — the button is hidden.
// Leave `image` empty to show a gradient tile with the project's initials.
export const projects = [
  {
    title: "Real-Time Collaboration API",
    description:
      "WebSocket service for multi-user document sessions with presence tracking and conflict-safe update ordering. JWT + OAuth 2.0 auth with workspace/editor/viewer roles, deployed behind Nginx on AWS EC2 with GitHub Actions CI/CD.",
    tech: ["Node.js", "Socket.io", "MongoDB", "OAuth 2.0", "AWS EC2"],
    image: "",
    demo: "",
    source: "",
  },
  {
    title: "Distributed Task Queue Service",
    description:
      "Background job service with retry, backoff and dead-letter handling, exposing job status via a Swagger-documented REST API. Dockerized API and worker tiers with Jest unit and integration tests.",
    tech: ["TypeScript", "Redis", "BullMQ", "PostgreSQL", "Docker"],
    image: "",
    demo: "",
    source: "",
  },
  {
    title: "TextUtils",
    description: "Text utilities for cleaning, transforming, and analyzing copy right in the browser.",
    tech: ["React"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=640&q=70",
    demo: "https://textify-hub.netlify.app/",
    source: "https://github.com/MukulGupta18/TextUtils",
  },
  {
    title: "Weather App",
    description: "Live weather reports with a clean, city-search experience.",
    tech: [],
    image: "",
    demo: "https://openweatherreport.netlify.app/",
    source: "https://github.com/MukulGupta18/weather-forecast-app",
  },
  {
    title: "Nexus Notations",
    description: "A notes and notation workspace for capturing ideas quickly.",
    tech: [],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=640&q=70",
    demo: "",
    source: "https://github.com/MukulGupta18/NexusNotaions",
  },
  {
    title: "News App",
    description: "A headline feed that pulls the latest stories into a readable layout.",
    tech: [],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=640&q=70",
    demo: "",
    source: "https://github.com/MukulGupta18/NewsApp",
  },
  {
    title: "Expense Sharing",
    description: "Split and track shared expenses with a straightforward UI.",
    tech: [],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=640&q=70",
    demo: "",
    source: "https://github.com/MukulGupta18/display-expenses-sharing",
  },
  {
    title: "TL-Draw Tool",
    description: "A whiteboard-style drawing canvas for sketches and diagrams.",
    tech: [],
    image: "",
    demo: "",
    source: "https://github.com/MukulGupta18/TLDRAW",
  },
  {
    title: "Flight Status",
    description: "Flight status lookup with a focused, easy-to-scan interface.",
    tech: [],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=640&q=70",
    demo: "",
    source: "https://github.com/MukulGupta18/FlightStatus",
  },
];
