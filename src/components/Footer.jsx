import { ArrowUp } from "lucide-react";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <Separator className="mb-8" />
      <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <Button asChild variant="ghost" size="sm" className="rounded-full">
          <a href="#home">
            Back to top <ArrowUp />
          </a>
        </Button>
      </div>
    </footer>
  );
}
