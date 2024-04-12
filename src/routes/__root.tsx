import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import ModeToggle from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify-icon/react";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="m-10 flex h-10 items-center gap-4 p-2">
        <Link to="/" className="[&.active]:font-bold">
          <Icon inline icon="carbon:home" /> Home
        </Link>
        <Separator orientation="vertical" />
        <Link to="/resume" className="[&.active]:font-bold">
          <Icon inline icon="carbon:document-pdf" /> Resume
        </Link>
        <Separator orientation="vertical" />
        <ModeToggle />
      </div>
      <Separator className="my-4 min-w-[38rem]" />
      <Outlet />
    </>
  ),
});
