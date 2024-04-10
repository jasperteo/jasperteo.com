import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "@/components/theme-provider";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  type Register = { router: typeof router };
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-screen h-screen font-sans antialiased text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-slate-900">
        <div className="m-auto">
          <RouterProvider router={router} />
          <TanStackRouterDevtools router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}
