import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import ModeToggle from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="m-10 flex h-10 items-center gap-4 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Separator orientation="vertical" />
        <Link to="/resume" className="[&.active]:font-bold">
          Resume
        </Link>
        <Separator orientation="vertical" />
        <ModeToggle />
      </div>
      <Separator className="my-4 w-dvw" />
      <Outlet />
    </>
  ),
});
