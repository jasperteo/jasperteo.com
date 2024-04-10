import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <div className="flex w-screen h-screen font-sans antialiased text-slate-100 bg-slate-900">
      <div className="m-auto">
        <RouterProvider router={router} />
        <TanStackRouterDevtools router={router} />
      </div>
    </div>
  );
}
