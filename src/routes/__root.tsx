import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify-icon/react";
import { Button } from "@/components/ui/button";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: RootNotFoundComponent,
});

function RootComponent() {
  return (
    <div className="min-w-dvw min-h-dvh bg-zinc-100 p-8 font-sans text-zinc-900 antialiased transition-colors duration-500 dark:bg-zinc-900 dark:text-zinc-100">
      <div className="mx-auto min-w-80 lg:max-w-5xl">
        <header>
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
        </header>

        <Separator className="my-4" />

        <main>
          <Outlet />
        </main>

        <footer></footer>
      </div>
    </div>
  );
}

function RootNotFoundComponent() {
  return (
    <div className="m-auto w-fit place-content-center text-center">
      <h1 className="my-8 font-mono text-2xl sm:text-4xl">
        <span className="text-3xl sm:text-5xl">
          <Icon icon="carbon:number-4" />
          <Icon icon="carbon:number-0" />
          <Icon icon="carbon:number-4" />
        </span>
        <br />
        Not Found
      </h1>
      <Link to="/">
        <Button variant="default">Home</Button>
      </Link>
    </div>
  );
}
