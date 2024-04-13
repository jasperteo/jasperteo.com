import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import ModeToggle from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify-icon/react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-w-dvw min-h-dvh bg-zinc-100 p-8 font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100">
      <div className="mx-auto min-w-80 lg:max-w-5xl">
        <TopBar />
        <Separator className="my-4" />
        <Outlet />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="m-10 flex h-11 place-content-evenly items-center gap-5 sm:place-content-end">
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
  );
}
