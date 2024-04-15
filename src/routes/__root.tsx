import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import DarkModeToggle from "@/components/dark-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify-icon/react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-w-dvw min-h-dvh bg-zinc-100 p-8 font-sans text-zinc-900 antialiased transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-100">
      <div className="mx-auto min-w-80 lg:max-w-5xl">
        <div className="m-10 flex h-11 place-content-evenly items-center gap-5 text-center sm:place-content-end">
          <Link to="/" className="[&.active]:font-bold">
            <Icon inline icon="carbon:home" /> Home
          </Link>
          <Separator orientation="vertical" />
          <Link to="/resume" className="[&.active]:font-bold">
            <Icon inline icon="carbon:document-pdf" /> Resume
          </Link>
          <Separator orientation="vertical" />
          <DarkModeToggle />
        </div>
        <Separator className="my-4" />
        <Outlet />
      </div>
    </div>
  );
}
