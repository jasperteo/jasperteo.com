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
  <nav className="m-10 flex h-11 place-content-evenly items-center gap-5 text-center sm:place-content-end">
    <Button asChild variant="ghost" className="text-base">
      <Link to="/" className="[&.active]:font-bold">
        <Icon inline icon="carbon:home" className="mr-2" /> Home
      </Link>
    </Button>

    <Separator orientation="vertical" />

    <Button asChild variant="ghost" className="text-base">
      <Link to="/resume" className="[&.active]:font-bold">
        <Icon inline icon="carbon:document-pdf" className="mr-2" /> Resume
      </Link>
    </Button>

    <Separator orientation="vertical" />

    <DarkModeToggle />
  </nav>
);

export { NavBar };
