import { MapPin } from "lucide-react";

import { experience } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Reveal, Section, trackSpotlight } from "@/components/shared";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="From e-commerce checkout flows to real-time hiring platforms and government portals."
    >
      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-linear-to-b before:from-brand-1 before:via-border before:to-transparent sm:before:left-[11px]">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pl-8 sm:pl-12">
            <span className="bg-background border-brand-1 absolute top-6 left-0 grid size-[15px] place-items-center rounded-full border-2 sm:size-6">
              {i === 0 && <span className="bg-brand-1 size-1.5 rounded-full sm:size-2" />}
            </span>
            <Reveal delay={0.08 * i}>
              <div
                onMouseMove={trackSpotlight}
                className="spotlight bg-card hover:border-brand-1/40 rounded-xl border p-6 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-gradient font-medium">{job.company}</p>
                  </div>
                  <Badge variant="secondary" className="font-mono">
                    {job.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-2 flex items-center gap-1.5 text-sm">
                  <MapPin className="size-3.5" /> {job.location}
                </p>
                <ul className="text-muted-foreground mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="bg-brand-2 mt-2.5 size-1 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
