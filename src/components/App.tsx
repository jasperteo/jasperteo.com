import { StrictMode } from "react";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "@/components/router";

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export { App };
