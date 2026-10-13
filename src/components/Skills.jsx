import { Code2, Database, Layout, Server, Sparkles, Wrench } from "lucide-react";

import { skillGroups } from "@/data/profile";
import { Reveal, Section, SkillIcon, trackSpotlight } from "@/components/shared";

const groupIcons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "DevOps & Testing": Wrench,
  AI: Sparkles,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My toolkit"
      description="The technologies I reach for to take a product from idea to production."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const GroupIcon = groupIcons[group.title] ?? Code2;
          return (
            <Reveal key={group.title} delay={0.06 * i} className="h-full">
              <div
                onMouseMove={trackSpotlight}
                className="spotlight bg-card hover:border-brand-1/40 h-full rounded-xl border p-6 transition-colors"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="bg-accent grid size-10 place-items-center rounded-lg">
                    <GroupIcon className="text-brand-1 size-5" />
                  </span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((name) => (
                    <span
                      key={name}
                      className="bg-background hover:border-foreground/20 flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all hover:-translate-y-0.5"
                    >
                      <SkillIcon name={name} className="size-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
