import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";
import { FaAws, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import { cn } from "@/lib/utils";

export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
};

export const skillIcons = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Redux Toolkit": { icon: SiRedux, color: "#764ABC" },
  "Next.js": { icon: SiNextdotjs, color: "currentColor" },
  Vite: { icon: SiVite, color: "#646CFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "currentColor" },
  JWT: { icon: SiJsonwebtokens, color: "currentColor" },
  "Socket.io": { icon: SiSocketdotio, color: "currentColor" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#C0392B" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Nginx: { icon: SiNginx, color: "#009639" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Git: { icon: SiGit, color: "#F05032" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Jest: { icon: SiJest, color: "#C21325" },
  Swagger: { icon: SiSwagger, color: "#85EA2D" },
  "Agentic AI": { icon: Bot, color: "var(--brand-1)" },
};

// Skills without a brand logo (e.g. "REST APIs") render as text only.
export function SkillIcon({ name, className }) {
  const entry = skillIcons[name];
  if (!entry) return null;
  const Icon = entry.icon;
  return <Icon className={className} style={{ color: entry.color }} />;
}

export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );

  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!query) return;
    const onChange = () => setReduce(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduce;
}

// Fades content in the first time it scrolls into view.
export function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export function Section({ id, eyebrow, title, description, children, className }) {
  return (
    <section id={id} className={cn("relative mx-auto max-w-6xl px-4 py-24 sm:px-6", className)}>
      <Reveal className="mb-12 max-w-2xl">
        <p className="text-gradient mb-3 font-mono text-sm font-medium tracking-wider uppercase">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        {description && (
          <p className="text-muted-foreground mt-4 text-lg text-pretty">{description}</p>
        )}
      </Reveal>
      {children}
    </section>
  );
}

// Tracks the cursor so `.spotlight` cards can draw a glow under it.
export function trackSpotlight(event) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - box.top}px`);
}
