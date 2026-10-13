import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";

import resume from "@/pdf/resume.pdf";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300",
          scrolled
            ? "bg-background/80 border-border shadow-lg shadow-black/5 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-2 pl-2 font-semibold tracking-tight">
          <span className="from-brand-1 to-brand-3 grid size-8 place-items-center rounded-full bg-linear-to-br text-sm font-bold text-white">
            MG
          </span>
          <span className="hidden sm:inline">Mukul Gupta</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === link.id
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href={resume} download="Mukul-Gupta-Resume.pdf">
              <Download /> Resume
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Mukul Gupta</SheetTitle>
                <SheetDescription>MERN Stack Developer</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base transition-colors",
                        active === link.id ? "bg-accent" : "hover:bg-accent/60"
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto p-4">
                <Button asChild className="w-full">
                  <a href={resume} download="Mukul-Gupta-Resume.pdf">
                    <Download /> Download resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
