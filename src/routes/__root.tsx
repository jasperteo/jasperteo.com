import { createRootRoute, Outlet } from "@tanstack/react-router";

import { NavBar } from "@/components/nav-bar";
import { FooterItems } from "@/components/footer-items";
import { Separator } from "@/components/ui/separator";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-w-dvw relative min-h-dvh bg-zinc-50 p-8 font-sans antialiased transition-colors dark:bg-zinc-900">
      <div className="mx-auto min-w-80 lg:max-w-5xl">
        <header>
          <NavBar />
        </header>

        <Separator className="my-4" />

        <main className="mb-40">
          <Outlet />
        </main>

        <footer className="absolute inset-x-8 bottom-8 mx-auto min-w-80 lg:max-w-5xl">
          <FooterItems />
        </footer>
      </div>
    </div>
  );
}
