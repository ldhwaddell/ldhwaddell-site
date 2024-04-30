import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto w-3/4 max-w-screen-2xl h-14 flex items-center justify-between">
        <div className="flex grow-0">
          <Nav />
          <MobileNav />
        </div>
        <div className="flex grow-0 items-center space-x-2">
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.linkedin className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
