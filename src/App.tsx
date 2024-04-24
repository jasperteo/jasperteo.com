import {
  createRouter,
  RouterProvider,
  ErrorComponent,
} from "@tanstack/react-router";
import { Icon } from "@iconify-icon/react";

import { NotFoundComponent } from "./components/not-found-component";
import { Button } from "@/components/ui/button";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultNotFoundComponent: NotFoundComponent,
  defaultErrorComponent: ({ error, reset }) => (
    <div className="mx-auto w-full space-y-4 p-7 text-center text-base">
      <h1 className="my-6 font-mono text-2xl sm:text-3xl">
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

export default function App() {
  return <RouterProvider router={router} />;
}
