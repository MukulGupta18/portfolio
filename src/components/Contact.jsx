import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

import { profile, socials } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Reveal, socialIcons } from "@/components/shared";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="from-brand-1/60 via-border to-brand-3/60 rounded-3xl bg-linear-to-br p-px">
          <div className="bg-card relative overflow-hidden rounded-[calc(1.5rem-1px)] px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-48 left-1/2 size-[36rem] -translate-x-1/2 bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

            <div className="relative">
              <p className="text-gradient mb-3 font-mono text-sm font-medium tracking-wider uppercase">
                Contact
              </p>
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Let's build something great together
              </h2>
              <p className="text-muted-foreground mx-auto mt-5 max-w-lg text-lg text-pretty">
                Have a role, a project, or just want to say hi? My inbox is always open — I'll get
                back to you as soon as I can.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href={`mailto:${profile.email}`}>
                    <Mail /> Say hello
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full font-mono text-sm"
                  onClick={copyEmail}
                >
                  {copied ? <Check className="text-emerald-500" /> : <Copy />}
                  {copied ? "Copied!" : profile.email}
                </Button>
              </div>

              <div className="mt-10 flex justify-center gap-2">
                {socials.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon];
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="bg-background text-muted-foreground hover:text-foreground hover:border-foreground/20 grid size-11 place-items-center rounded-full border transition-all hover:-translate-y-0.5"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
