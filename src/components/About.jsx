import { ArrowUpRight, Award, Briefcase, CalendarClock, FolderGit2, GraduationCap } from "lucide-react";

import { certifications, education, experience, profile, projects } from "@/data/profile";
import { Card } from "@/components/ui/card";
import { Reveal, Section, trackSpotlight } from "@/components/shared";

const stats = [
  { icon: CalendarClock, value: profile.yearsExperience, label: "Years experience" },
  { icon: Briefcase, value: experience.length, label: "Companies" },
  { icon: FolderGit2, value: projects.length, label: "Projects" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground text-lg leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-3 pt-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <Card key={label} className="gap-1 px-4 py-5 text-center sm:text-left">
                <Icon className="text-brand-1 mx-auto mb-2 size-5 sm:mx-0" />
                <p className="text-2xl font-semibold tracking-tight">{value}</p>
                <p className="text-muted-foreground text-sm">{label}</p>
              </Card>
            ))}
          </div>
        </Reveal>

        <div className="space-y-4">
          <Reveal>
            <h3 className="text-muted-foreground flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
              <GraduationCap className="size-4" /> Education
            </h3>
          </Reveal>
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={0.1 * (i + 1)}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={trackSpotlight}
                className="spotlight group bg-card hover:border-brand-1/40 block rounded-xl border p-5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{item.degree}</p>
                    <p className="text-muted-foreground mt-1 text-sm">{item.school}</p>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-muted-foreground mt-3 font-mono text-xs">{item.period}</p>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="pt-4">
            <h3 className="text-muted-foreground mb-3 flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
              <Award className="size-4" /> Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-muted-foreground flex gap-3 text-sm">
                  <span className="bg-brand-2 mt-2 size-1 shrink-0 rounded-full" />
                  {cert}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
