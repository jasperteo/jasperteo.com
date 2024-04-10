import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/resume" className="[&.active]:font-bold">
          Resume
        </Link>
        <ModeToggle />
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
