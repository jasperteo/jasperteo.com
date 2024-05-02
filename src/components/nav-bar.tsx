import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/**
 * Renders the navigation bar.
 * @returns The rendered navigation bar.
 */
const NavBar = () => (
  <nav className="my-10 flex h-11 place-items-center justify-center gap-2 font-mono sm:mr-10 sm:justify-end">
    <Button asChild variant="ghost" className="sm:text-base">
      <Link to="/" className="[&.active]:animate-swing [&.active]:font-bold">
        <Icon inline icon="carbon:home" className="mr-2" /> Home
      </Link>
    </Button>

    <Separator orientation="vertical" />

    <Button asChild variant="ghost" className="sm:text-base">
      <Link
        to="/resume"
        className="[&.active]:animate-swing [&.active]:font-bold"
      >
        <Icon inline icon="carbon:document-pdf" className="mr-2" /> Resume
      </Link>
    </Button>

    <Separator orientation="vertical" />

    <DarkModeToggle className="mx-4" />
  </nav>
);

export { NavBar };
