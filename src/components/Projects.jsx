import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, Section, trackSpotlight } from "@/components/shared";

// Falls back to a branded gradient tile when there is no image or it fails to load.
function ProjectImage({ project }) {
  const [failed, setFailed] = useState(!project.image);

  if (failed) {
    return (
      <div className="from-brand-1/30 via-brand-2/20 to-brand-3/30 grid size-full place-items-center bg-linear-to-br transition-transform duration-500 group-hover:scale-105">
        <span className="text-gradient text-5xl font-semibold tracking-tight">
          {project.title
            .split(/[\s-]+/)
            .map((word) => word[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt=""
      width="640"
      height="400"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="From real-time backend services to browser apps — a selection of things I've designed and built."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.06 * (i % 3)} className="h-full">
            <article
              onMouseMove={trackSpotlight}
              className="spotlight group bg-card hover:border-brand-1/40 flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectImage project={project} />
                <div className="from-card absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
                <span className="bg-background/85 absolute top-3 left-3 rounded-md px-2 py-0.5 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 pt-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                {project.tech?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                {(project.source || project.demo) && (
                <div className="mt-5 flex gap-2">
                  {project.source && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.source} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live demo <ArrowUpRight />
                      </a>
                    </Button>
                  )}
                </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
