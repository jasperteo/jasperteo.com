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
          <Icon icon="carbon:number-0" />
          <Icon icon="carbon:number-0" />
        </span>
        <br />
        Bad Request
      </h1>
      <ErrorComponent error={error} />
      <Button onClick={reset} variant="default">
        Retry
      </Button>
    </div>
  ),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };
