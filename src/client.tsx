import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

import { router } from "@/router";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
