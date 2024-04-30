import { createRouter, ErrorComponent } from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { NotFoundComponent } from "@/components/not-found-component";
import { Button } from "@/components/ui/button";

import { routeTree } from "@/routeTree.gen";

/**
 * Creates a router with the specified configuration.
 *
 * @param {object} config - The router configuration.
 * @param {object} config.routeTree - The route tree for the router.
 * @param {string} config.defaultPreload - The default preload strategy for routes.
 * @param {React.ComponentType} config.defaultNotFoundComponent - The default component to render when a route is not found.
 * @param {React.ComponentType} config.defaultErrorComponent - The default component to render when an error occurs.
 */
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultNotFoundComponent: NotFoundComponent,
  defaultErrorComponent: ({ error, reset }) => (
    <div className="m-auto w-full place-content-center space-y-8 text-center text-base">
      <h1 className="font-mono text-2xl sm:text-3xl">
        <span className="text-3xl sm:text-5xl">
          <Icon icon="carbon:number-4" />
          <Icon icon="carbon:number-1" />
          <Icon icon="carbon:number-8" />
        </span>
        <br />
        I&apos;m a teapot
      </h1>
      <img
        className="sm:w-md mx-auto w-96"
        src="https://jjjyrvgqspmcyvsrrxzc.supabase.co/storage/v1/object/public/blob/418Teapot.png"
        alt="I'm a teapot"
        title="Logo by @sawaratsuki1004"
      />
      <ErrorComponent error={error} />
      <Button onClick={reset}>Retry</Button>
    </div>
  ),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
