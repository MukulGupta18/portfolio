import { useEffect, useState } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

import resume from "@/pdf/resume.pdf";
import { profile, projects, skillGroups, socials } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { skillIcons, socialIcons, usePrefersReducedMotion } from "@/components/shared";
import { cn } from "@/lib/utils";

const roles = ["MERN Stack Developer", "Full Stack Engineer", "Node.js Developer"];
// Only skills with a logo go in the scrolling strip.
const allSkills = skillGroups.flatMap((g) => g.skills).filter((name) => skillIcons[name]);

// CSS-only entrance so nothing waits on JavaScript animation code.
const enter = "animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-fill-mode:both]";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <span
        key={roles[index]}
        className={cn(
          "text-gradient block whitespace-nowrap",
          index > 0 && "animate-in fade-in slide-in-from-bottom-4 duration-500"
        )}
      >
        {roles[index]}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* backdrop — radial gradients instead of filter blur, which is costly to paint */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute -top-60 left-1/2 -z-10 size-[56rem] -translate-x-1/2 bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
      <div className="pointer-events-none absolute top-20 -right-60 -z-10 size-[40rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand-3)_14%,transparent),transparent)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className={enter}>
            <span className="bg-background/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </span>
          </div>

          {/* Heading and intro render immediately: they are the largest paint on the page. */}
          <h1 className="mt-6 text-[2.15rem] leading-[1.1] font-semibold tracking-tight min-[400px]:text-4xl sm:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.
            <RotatingRole />
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg text-pretty lg:mx-0">
            {profile.intro}
          </p>

          <div
            className={cn(enter, "mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start")}
            style={{ animationDelay: "150ms" }}
          >
            <Button asChild size="lg" className="group rounded-full">
              <a href="#projects">
                View my work
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={resume} download="Mukul-Gupta-Resume.pdf">
                <Download /> Download resume
              </a>
            </Button>
          </div>

          <div
            className={cn(enter, "text-muted-foreground mt-8 flex items-center justify-center gap-5 lg:justify-start")}
            style={{ animationDelay: "250ms" }}
          >
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> {profile.location}
            </span>
            <span className="bg-border h-4 w-px" />
            <div className="flex items-center gap-1">
              {socials.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="hover:text-foreground hover:bg-accent rounded-full p-2 transition-colors"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-56 sm:w-72 lg:order-2 lg:w-full lg:max-w-sm">
          <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
          <div className="from-brand-1 via-brand-2 to-brand-3 relative rounded-[2rem] bg-linear-to-br p-[2px] shadow-[0_0_60px_-10px_var(--brand-2)]">
            <img
              src={profile.photo}
              alt={profile.name}
              width="384"
              height="384"
              fetchPriority="high"
              decoding="async"
              className="bg-card aspect-square w-full rounded-[calc(2rem-2px)] object-cover"
            />
          </div>
          <div className="bg-background/90 absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl sm:flex">
            <span className="text-2xl font-semibold">{projects.length}</span>
            <span className="text-muted-foreground text-xs leading-tight">
              projects
              <br />
              built & shipped
            </span>
          </div>
          <div className="bg-background/90 absolute -top-4 -right-4 hidden items-center gap-2 rounded-2xl border px-3 py-2 shadow-xl sm:flex">
            {["React", "Node.js", "MongoDB"].map((name) => {
              const { icon: Icon, color } = skillIcons[name];
              return <Icon key={name} className="size-5" style={{ color }} />;
            })}
          </div>
        </div>
      </div>

      {/* tech marquee */}
      <div className="relative mx-auto mt-24 max-w-5xl overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-[marquee_80s_linear_infinite] gap-12 will-change-transform hover:[animation-play-state:paused]">
          {[...allSkills, ...allSkills].map((name, i) => {
            const { icon: Icon, color } = skillIcons[name];
            return (
              <span
                key={i}
                aria-hidden={i >= allSkills.length}
                className="text-muted-foreground flex items-center gap-2.5 text-sm font-medium"
              >
                <Icon className="size-5" style={{ color }} />
                {name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
