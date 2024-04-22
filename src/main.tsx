import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

import App from "@/App";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
