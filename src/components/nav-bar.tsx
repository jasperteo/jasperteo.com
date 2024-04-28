import { Link } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Separator } from "@/components/ui/separator";

/**
 * Renders the navigation bar.
 * @returns The rendered navigation bar.
 */
const NavBar = () => (
  <nav className="m-10 flex h-11 place-content-evenly items-center gap-5 text-center sm:place-content-end">
    <Link to="/" className="[&.active]:font-bold">
      <Icon inline icon="carbon:home" /> Home
    </Link>
    <Separator orientation="vertical" />
    <Link to="/resume" className="[&.active]:font-bold">
      <Icon inline icon="carbon:document-pdf" /> Resume
    </Link>
    <Separator orientation="vertical" />
    <DarkModeToggle />
  </nav>
);

export { NavBar };
